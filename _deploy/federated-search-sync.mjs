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

// --- Algolia Logic ---
async function fetchAlgoliaRecords() {
  console.log(`Fetching records from Algolia index: ${indexName}...`);
  const url = `https://${ALGOLIA_APPLICATION_ID}-dsn.algolia.net/1/indexes/${indexName}/browse`;
  
  const uniqueRecords = new Map();
  let cursor = null;

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

    if (!res.ok) throw new Error(`Algolia fetch failed: ${res.statusText}`);
    const data = await res.json();
    
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
                  return; // Skip this record
              }
          }

          // Deduplicate by stripping fragments and query parameters
          // Exception: If the URL ends with a PDF extension, leave it exactly as is
          let cleanUrl = recordUrl;
          if (!recordUrl.toLowerCase().endsWith('.pdf')) {
              cleanUrl = recordUrl.split('#')[0].split('?')[0];
          }
          
          // Keep the first (often top-level) record we find for a given URL
          if (!uniqueRecords.has(cleanUrl)) {
              uniqueRecords.set(cleanUrl, {
                  ...record,
                  cleanUrl: cleanUrl // Store the clean URL for pushing
              });
          }
      }
    });
    
    cursor = data.cursor;
  } while (cursor);

  const recordsArray = Array.from(uniqueRecords.values());
  console.log(`Successfully fetched and deduplicated to ${recordsArray.length} unique URLs from Algolia.`);
  return recordsArray;
}

// --- Zendesk Logic ---
async function pushToZendesk(algoliaRecords) {
  console.log("Pushing records to Zendesk Federated Search...");
  
  let successCount = 0;
  let errorCount = 0;
  let skippedExistsCount = 0;

  for (let i = 0; i < algoliaRecords.length; i++) {
    const record = algoliaRecords[i];
    const recordUrl = record.cleanUrl;
    const externalId = crypto.createHash('md5').update(recordUrl).digest('hex');
    
    let bodyText = record.description || record.excerpt || record.content || record.title;
    if (bodyText.length > 9500) {
        bodyText = bodyText.substring(0, 9500) + "...";
    }

    const payload = {
      record: {
        external_id: externalId,
        title: record.title,
        body: bodyText,
        url: recordUrl,
        source_id: ZENDESK_FEDERATED_SOURCE_ID,
        type_id: ZENDESK_FEDERATED_TYPE_ID,
        locale: 'en-us' 
      }
    };

    try {
      const res = await fetch(zendeskBaseUrl, {
        method: 'POST', 
        headers: zendeskHeaders,
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        if (res.status === 409 || res.status === 422) {
           // We expect the purge script to run beforehand, but if it didn't,
           // or we run this manually mid-week, attempt the PUT update.
           const queryRes = await fetch(`${zendeskBaseUrl}?external_id=${externalId}`, { headers: zendeskHeaders });
           if (queryRes.ok) {
               const queryData = await queryRes.json();
               const existingRecord = queryData.records && queryData.records.find(r => r.external_id === externalId);
               
               if (existingRecord) {
                   const putRes = await fetch(`${zendeskBaseUrl}/${existingRecord.id}`, {
                       method: 'PUT',
                       headers: zendeskHeaders,
                       body: JSON.stringify(payload)
                   });
                   if (putRes.ok) {
                       successCount++;
                   } else {
                       errorCount++;
                   }
               }
           }
        } else {
          errorCount++;
          console.error(`Failed POST for ${recordUrl}: ${res.status}`);
        }
      } else {
        successCount++;
      }
    } catch (e) {
      console.error(`Network error on ${recordUrl}: ${e.message}`);
      errorCount++;
    }
    
    // Log progress every 100 records
    if ((i + 1) % 100 === 0) {
        console.log(`Progress: ${i + 1} / ${algoliaRecords.length}...`);
    }
    
    // Slight throttle to avoid 429 Too Many Requests from Zendesk
    await new Promise(r => setTimeout(r, 100)); 
  }

  console.log(`\n--- SYNC SUMMARY ---`);
  console.log(`Successfully synced (created/updated): ${successCount}`);
  console.log(`Errors: ${errorCount}`);
}

async function run() {
  try {
    const records = await fetchAlgoliaRecords();
    await pushToZendesk(records);
  } catch (e) {
    console.error("Sync failed:", e);
    process.exit(1);
  }
}

run();
