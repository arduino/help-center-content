import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

// 1. Load Environment Variables
const envPath = path.resolve('.env.local');
if (fs.existsSync(envPath)) {
  const envConfig = fs.readFileSync(envPath, 'utf8');
  envConfig.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) process.env[match[1]] = match[2].trim();
  });
} else {
  console.log("No .env.local found, assuming environment variables are injected via CI.");
}

const {
  ZENDESK_USER,
  ZENDESK_PASS,
  ZENDESK_SUBDOMAIN,
  ZENDESK_FEDERATED_SOURCE_ID,
  ZENDESK_FEDERATED_TYPE_ID,
  ALGOLIA_APPLICATION_ID,
  ALGOLIA_DEV_INDEXER_KEY, 
  ALGOLIA_INDEXER_KEY,
  ALGOLIA_DEV_INDEX,
  ALGOLIA_INDEX
} = process.env;

const apiKey = ALGOLIA_INDEXER_KEY || ALGOLIA_DEV_INDEXER_KEY;
const indexName = ALGOLIA_INDEX || ALGOLIA_DEV_INDEX;

if (!ZENDESK_USER || !apiKey || !indexName || !ZENDESK_FEDERATED_SOURCE_ID || !ZENDESK_FEDERATED_TYPE_ID) {
  console.error("Missing required environment variables.");
  process.exit(1);
}

const zendeskAuth = Buffer.from(`${ZENDESK_USER}:${ZENDESK_PASS}`).toString('base64');
const zendeskHeaders = {
  'Authorization': `Basic ${zendeskAuth}`,
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};
const zendeskBaseUrl = `https://${ZENDESK_SUBDOMAIN}.zendesk.com/api/v2/guide/external_content/records`;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function extractText(val) {
  if (Array.isArray(val)) {
    return val.filter(Boolean).map(s => String(s).trim()).filter(Boolean).join(' ');
  }
  if (typeof val === 'string') {
    return val.trim();
  }
  return '';
}

function normalizeTitle(str) {
  return String(str || '')
    .replace(/<[^>]*>/g, '') // Zendesk strips HTML tags
    .replace(/</g, '')        // Zendesk strips raw < characters in titles
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeBody(str) {
  return String(str || '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Helper for Zendesk requests with 429 retry handling
async function zendeskRequest(url, method, payload = null) {
  const options = {
    method,
    headers: zendeskHeaders
  };
  if (payload) {
    options.body = JSON.stringify(payload);
  }

  for (let attempt = 1; attempt <= 3; attempt++) {
    const res = await fetch(url, options);

    if (res.status === 429) {
      const retryAfter = parseInt(res.headers.get('retry-after') || '3', 10);
      console.warn(`Rate limit (429) on ${method} ${url}. Retrying after ${retryAfter}s... (attempt ${attempt}/3)`);
      await sleep(retryAfter * 1000);
      continue;
    }

    return res;
  }

  throw new Error(`Exceeded max retries for ${method} ${url}`);
}

// --- Algolia Logic ---
async function fetchAlgoliaRecords() {
  console.log(`Fetching records from Algolia index: ${indexName}...`);
  const url = `https://${ALGOLIA_APPLICATION_ID}-dsn.algolia.net/1/indexes/${indexName}/browse`;
  
  const uniqueRecords = new Map();
  let cursor = null;
  let totalRawHits = 0;
  let skippedNoBody = 0;
  let skippedLibrary = 0;

  do {
    const body = cursor ? { cursor } : {};
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'X-Algolia-API-Key': apiKey,
        'X-Algolia-Application-Id': ALGOLIA_APPLICATION_ID,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) throw new Error(`Algolia fetch failed: ${res.status} ${res.statusText}`);
    const data = await res.json();
    totalRawHits += data.hits.length;
    
    data.hits.forEach(record => {
      let recordUrl = record.url || record.permalink;
      if (!recordUrl && record.slug) {
        const domain = record.environment || 'docs.arduino.cc';
        recordUrl = `https://${domain}${record.slug.startsWith('/') ? '' : '/'}${record.slug}`;
      }
      
      // Override URL with direct file links if they exist
      if (record.schematic) {
        recordUrl = record.schematic;
      } else if (record.datasheet) {
        recordUrl = record.datasheet;
      }
      
      if (recordUrl && recordUrl.includes('docs.arduino.cc') && record.title) {
        // EXCLUSION RULE:
        // Skip if documentation_type is "Library" UNLESS maintainer includes "Arduino <info@arduino.cc>"
        if (record.documentation_type === 'Library') {
          const isArduinoMaintainer = record.maintainer && record.maintainer.includes('Arduino <info@arduino.cc>');
          if (!isArduinoMaintainer) {
            skippedLibrary++;
            return;
          }
        }

        // Deduplicate by stripping fragments and query parameters
        // Exception: If the URL ends with a PDF extension, leave it exactly as is
        let cleanUrl = recordUrl;
        if (!recordUrl.toLowerCase().endsWith('.pdf')) {
          cleanUrl = recordUrl.split('#')[0].split('?')[0];
        }

        // Extract body text
        let bodyText =
          extractText(record.description) ||
          extractText(record.excerpt) ||
          extractText(record.content);

        // Normalize whitespace
        bodyText = normalizeBody(bodyText);

        // Skip records without body content (avoids indexing broken / empty stub pages)
        if (!bodyText) {
          skippedNoBody++;
          return;
        }

        if (bodyText.length > 9500) {
          bodyText = bodyText.substring(0, 9500) + "...";
        }

        const externalId = crypto.createHash('md5').update(cleanUrl).digest('hex');
        
        // Keep the first (often top-level) record we find for a given externalId
        if (!uniqueRecords.has(externalId)) {
          uniqueRecords.set(externalId, {
            externalId,
            title: String(record.title).trim(),
            body: bodyText,
            url: cleanUrl,
            sourceId: ZENDESK_FEDERATED_SOURCE_ID,
            typeId: ZENDESK_FEDERATED_TYPE_ID,
            locale: 'en-us'
          });
        }
      }
    });
    
    cursor = data.cursor;
  } while (cursor);

  console.log(`Algolia fetch complete: ${totalRawHits} raw hits evaluated.`);
  console.log(`Filtered out: ${skippedLibrary} non-official libraries, ${skippedNoBody} records with empty body.`);
  console.log(`Deduplicated to ${uniqueRecords.size} valid records.`);

  if (uniqueRecords.size < 500) {
    throw new Error(`Safety check failed: Algolia returned suspiciously few records (${uniqueRecords.size}). Aborting sync.`);
  }

  return uniqueRecords;
}

// --- Zendesk Logic ---
async function fetchZendeskRecords() {
  console.log(`Fetching existing records from Zendesk for source ID: ${ZENDESK_FEDERATED_SOURCE_ID}...`);
  const existingRecords = new Map();
  let url = `${zendeskBaseUrl}?source_id=${ZENDESK_FEDERATED_SOURCE_ID}`;
  let page = 0;

  while (url) {
    page++;
    let res;
    try {
      res = await zendeskRequest(url, 'GET');
    } catch (e) {
      throw new Error(`Failed to fetch Zendesk records on page ${page}: ${e.message}`);
    }

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Failed to fetch Zendesk records on page ${page}: ${res.status} ${errText}`);
    }

    const data = await res.json();
    if (Array.isArray(data.records)) {
      for (const record of data.records) {
        if (record.external_id) {
          existingRecords.set(record.external_id, {
            id: record.id,
            externalId: record.external_id,
            title: record.title || '',
            body: record.body || '',
            url: record.url || ''
          });
        }
      }
    }

    if (data.meta && data.meta.has_more && data.meta.after_cursor) {
      url = `${zendeskBaseUrl}?source_id=${ZENDESK_FEDERATED_SOURCE_ID}&page[after]=${data.meta.after_cursor}`;
    } else {
      url = null;
    }

    if (page % 50 === 0) {
      console.log(`Progress: fetched ${existingRecords.size} records from Zendesk (${page} pages)...`);
    }
  }

  console.log(`Successfully fetched ${existingRecords.size} existing records from Zendesk across ${page} pages.`);
  return existingRecords;
}

async function syncDiff(algoliaMap, zendeskMap) {
  console.log("\nCalculating diff between Algolia and Zendesk...");

  const toCreate = [];
  const toUpdate = [];
  let unchangedCount = 0;

  for (const [externalId, algoliaRec] of algoliaMap) {
    const existing = zendeskMap.get(externalId);
    if (!existing) {
      toCreate.push(algoliaRec);
    } else {
      const titleChanged = normalizeTitle(algoliaRec.title) !== normalizeTitle(existing.title);
      const bodyChanged = normalizeBody(algoliaRec.body) !== normalizeBody(existing.body);
      const urlChanged = algoliaRec.url !== existing.url;

      if (titleChanged || bodyChanged || urlChanged) {
        toUpdate.push({
          zendeskId: existing.id,
          record: algoliaRec
        });
      } else {
        unchangedCount++;
      }
    }
  }

  const toDelete = [];
  for (const [externalId, existing] of zendeskMap) {
    if (!algoliaMap.has(externalId)) {
      toDelete.push(existing);
    }
  }

  console.log(`\nDiff Summary:`);
  console.log(`  Unchanged : ${unchangedCount}`);
  console.log(`  To Create : ${toCreate.length}`);
  console.log(`  To Update : ${toUpdate.length}`);
  console.log(`  To Delete : ${toDelete.length}`);

  let createdCount = 0;
  let updatedCount = 0;
  let deletedCount = 0;
  let errorCount = 0;

  // 1. Create missing records
  if (toCreate.length > 0) {
    console.log(`\nCreating ${toCreate.length} new records in Zendesk...`);
    for (let i = 0; i < toCreate.length; i++) {
      const rec = toCreate[i];
      const payload = {
        record: {
          external_id: rec.externalId,
          title: rec.title,
          body: rec.body,
          url: rec.url,
          source_id: rec.sourceId,
          type_id: rec.typeId,
          locale: rec.locale
        }
      };

      try {
        const res = await zendeskRequest(zendeskBaseUrl, 'POST', payload);
        if (res.ok) {
          createdCount++;
        } else {
          errorCount++;
          const errBody = await res.text();
          console.error(`Failed POST for ${rec.url}: ${res.status} - ${errBody}`);
        }
      } catch (e) {
        errorCount++;
        console.error(`Network error on POST ${rec.url}: ${e.message}`);
      }

      if ((i + 1) % 50 === 0 || i + 1 === toCreate.length) {
        console.log(`Create progress: ${i + 1} / ${toCreate.length}`);
      }
      await sleep(100);
    }
  }

  // 2. Update changed records
  if (toUpdate.length > 0) {
    console.log(`\nUpdating ${toUpdate.length} changed records in Zendesk...`);
    for (let i = 0; i < toUpdate.length; i++) {
      const { zendeskId, record: rec } = toUpdate[i];
      const payload = {
        record: {
          external_id: rec.externalId,
          title: rec.title,
          body: rec.body,
          url: rec.url,
          source_id: rec.sourceId,
          type_id: rec.typeId,
          locale: rec.locale
        }
      };

      try {
        const res = await zendeskRequest(`${zendeskBaseUrl}/${zendeskId}`, 'PUT', payload);
        if (res.ok) {
          updatedCount++;
        } else {
          errorCount++;
          const errBody = await res.text();
          console.error(`Failed PUT for ${rec.url}: ${res.status} - ${errBody}`);
        }
      } catch (e) {
        errorCount++;
        console.error(`Network error on PUT ${rec.url}: ${e.message}`);
      }

      if ((i + 1) % 50 === 0 || i + 1 === toUpdate.length) {
        console.log(`Update progress: ${i + 1} / ${toUpdate.length}`);
      }
      await sleep(100);
    }
  }

  // 3. Delete obsolete records
  if (toDelete.length > 0) {
    console.log(`\nDeleting ${toDelete.length} obsolete records from Zendesk...`);
    for (let i = 0; i < toDelete.length; i++) {
      const rec = toDelete[i];
      try {
        const res = await zendeskRequest(`${zendeskBaseUrl}/${rec.id}`, 'DELETE');
        if (res.ok || res.status === 404) {
          deletedCount++;
        } else {
          errorCount++;
          const errBody = await res.text();
          console.error(`Failed DELETE for ${rec.url} (ID ${rec.id}): ${res.status} - ${errBody}`);
        }
      } catch (e) {
        errorCount++;
        console.error(`Network error on DELETE ${rec.url}: ${e.message}`);
      }

      if ((i + 1) % 50 === 0 || i + 1 === toDelete.length) {
        console.log(`Delete progress: ${i + 1} / ${toDelete.length}`);
      }
      await sleep(100);
    }
  }

  console.log(`\n--- SYNC SUMMARY ---`);
  console.log(`Total Algolia (valid) : ${algoliaMap.size}`);
  console.log(`Total Zendesk (prior) : ${zendeskMap.size}`);
  console.log(`Unchanged             : ${unchangedCount}`);
  console.log(`Created               : ${createdCount}`);
  console.log(`Updated               : ${updatedCount}`);
  console.log(`Deleted               : ${deletedCount}`);
  console.log(`Errors                : ${errorCount}`);

  if (errorCount > 0) {
    process.exitCode = 1;
  }
}

async function run() {
  try {
    const algoliaMap = await fetchAlgoliaRecords();
    const zendeskMap = await fetchZendeskRecords();
    await syncDiff(algoliaMap, zendeskMap);
  } catch (e) {
    console.error("Sync failed:", e);
    process.exit(1);
  }
}

run();
