'use strict';

// Read environment variables
const ZENDESK_USER = process.env.ZENDESK_USER;
if (!ZENDESK_USER) {
    throw new Error('Missing environment variable: ZENDESK_USER')
}
const ZENDESK_PASS = process.env.ZENDESK_PASS;
if (!ZENDESK_USER) {
    throw new Error('Missing environment variable: ZENDESK_PASS')
}
const AlgoliaID = process.env.ALGOLIA_APPLICATION_ID;
const AlgoliaSecret = process.env.ALGOLIA_INDEXER_KEY;
const AlgoliaIndexName = process.env.ALGOLIA_INDEX;

// Define and parse command-line options
import { Command } from 'commander';
const program = new Command();
program
    .name('zendesk')
    .description('Push Markdown content to Zendesk Help Center')
    .argument('<root>', 'Root directory')
    .argument('<articles>', 'Glob pattern for article markdown files relative to root directory (must be inside)')
    .argument('<url>', 'URL for target Zendesk locale, e.g. https://arduino.zendesk.com/api/v2/help_center/en-us')
    .option('-d, --deploy', 'Deploy changes', false)
    .option('-v, --verbose', 'enable verbose output', false)
    .option('--cache-read [path]', 'read cached data', false)
    .option('--cache-save [path]', 'save cached data', false)
    .option('--html-save', 'save rendered HTML to disk', false)
    .option('-w, --wait <delay>', 'delay in seconds before fetching data')
    .option('-u, --syncIndex', 'check the entire search index for changes')
program.parse();

const root = program.args[0];
const articlePattern = program.args[1];
const target_url = program.args[2];
const deployChanges = program.opts().deploy;
const verbose = program.opts().verbose;
const cacheRead = program.opts().cacheRead;
const cacheSave = program.opts().cacheSave;
const wait = program.opts().wait;
const syncIndex = program.opts().syncIndex;

// Set up Zendesk client
import { createClient as createZendeskClient } from 'node-zendesk';
const client = createZendeskClient({
    username: ZENDESK_USER,
    password: ZENDESK_PASS,
    remoteUri: target_url,
    disableGlobalState: true,
    helpcenter: true,
    throttle: {
        window: 60,
        limit: 400
    }
});

// Algolia
import algoliasearch from 'algoliasearch';
const algoliaIndex = algoliasearch(AlgoliaID, AlgoliaSecret)
    .initIndex(AlgoliaIndexName);

// HTML
import * as htmlparser2 from "htmlparser2";
import { render } from 'dom-serializer';
import { minify } from 'html-minifier';

// Markdown
import hljs from 'highlight.js'; // https://highlightjs.org/
import markdownItFootnotes from 'markdown-it-footnote';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({
        html: true,
        smartquotes: true,
        typographer: true,
        quotes: '“”‘’',
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(str, {
                        language: lang
                    }).value;
                } catch (__) {}
            }
            return ''; // use external default escaping
        }
    })
    .use(markdownItFootnotes);
import fm from 'front-matter';

// Other imports
import fg from 'fast-glob';
import clc from 'cli-color';
import path from 'path';
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import columnify from 'columnify';
import fs from 'fs';
const fsPromises = fs.promises;
import fetch from 'node-fetch';
import FormData from 'form-data';

/* Run main function */
main();

async function main() {
    let zendeskCategories,
        zendeskSections,
        zendeskArticles,
        localDirPaths,
        localArticles,
        zendeskAttachments;

    if (wait) {
        console.log(clc.underline(`Waiting for ${wait} second(s)...`));
        await delay(wait * 1000);
        console.log('Done.\n');
    }

    console.log(clc.underline('Reading and parsing local content...'));
    await Promise.all([
        exTime(fg('**', {
            onlyDirectories: true,
            cwd: root,
            deep: 2
        })).then(result => {
            console.log(`Read ${result.data.length} directory paths in ${result.exTime} ms.`);
            return result.data;
        }),
        exTime(fg(articlePattern, {
            cwd: root
        }))
        .then(result => {
            console.log(`Found ${result.data.length} Markdown files in ${result.exTime} ms.`);
            return exTime(Promise.all(parseMarkdown(root, result.data)));
        })
        .then(result => {
            console.log(`Parsed ${result.data.length} Markdown files in ${result.exTime} ms.`);
            return result.data;
        })
    ]).then(results => {
        localDirPaths = results[0];
        localArticles = results[1];
    });

    if (cacheRead) {
        console.log(clc.underline('\nReading cached data...'));
        var data = await readCache(path.join(__dirname, '/.cache'));
        zendeskCategories = data.categories;
        zendeskSections = data.sections;
        zendeskArticles = data.articles;
        zendeskAttachments = data.attachments;
        console.log('Done reading cache.')
    } else {
        console.log(clc.underline('\nFetching data from Zendesk...'));
        try {
            await Promise.all([
                exTime(client.categories.list()).then(result => {
                    console.log(`Fetched ${result.data.length} categories in ${result.exTime} ms.`);
                    return result.data;
                }),
                exTime(client.sections.list()).then(result => {
                    console.log(`Fetched ${result.data.length} sections in ${result.exTime} ms.`);
                    return result.data;
                }),
                exTime(client.articles.list()).then(result => {
                    console.log(`Fetched ${result.data.length} articles in ${result.exTime} ms.`);
                    return result.data;
                }),
                exTime(getAllAttachments(localArticles)).then(result => {
                    console.log(`Fetched ${result.data.length} article attachment lists in ${result.exTime} ms.`);
                    return result.data;
                })
            ]).then(results => {
                zendeskCategories = results[0];
                zendeskSections = results[1];
                zendeskArticles = results[2];
                zendeskAttachments = results[3];
            });
        } catch (error) {
            console.error('Error occured fetching data from Zendesk.')
            throw error;
        }

    }

    // VALIDATION: Directory structure should match Zendesk categories and sections
    console.log(clc.underline('\nVerifying categories and sections...'));
    const positionRows = getPositionRows(zendeskCategories, zendeskSections, localDirPaths);

    // Print results
    console.log(columnify(positionRows.sort(comparePositionRow)) + '\n');

    // Articles
    console.log(clc.underline('Checking articles for changes...'));
    var articles = getArticles(zendeskCategories, zendeskSections, zendeskArticles, localArticles, zendeskAttachments);

    // Print changes
    printChanges(zendeskCategories, zendeskSections, articles);

    // Deploy changes unless --dry-run option is set
    if (deployChanges) {
        console.log(clc.underline('\n' + 'Deploying changes...'));
        await deploy(zendeskSections, articles);
        console.log('Done');
    }

    // saveAllIndex(zendeskSections, articles);
    if (syncIndex) {
        console.log('\n' + clc.underline('Syncing search index...'));
        await saveAllSearchObjects(zendeskSections, articles);
        await deleteOrphanedSearchObjects(articles);
    }


    // Save cache
    if (cacheSave) {
        console.log('\n' + clc.underline('Saving cache...'));
        var data = {
            "categories": zendeskCategories,
            "sections": zendeskSections,
            "articles": zendeskArticles,
            "attachments": zendeskAttachments
        }
        saveCacheSync(path.join(__dirname, '/.cache'), data);
    }
}

/* --- END MAIN --- */

// Abstract article object
function getArticles(zendeskCategories, zendeskSections, zendeskArticles, localArticles, zendeskAttachments) {
    var articles = [];
    for (const localArticle of localArticles) {
        const levelNames = getLevelsFromPath(localArticle.filepath);
        const sectionID = getPositionID(zendeskCategories, zendeskSections, ...levelNames);

        var md = localArticle;
        md.section_id = sectionID;
        var zd = zendeskArticles.find(a => a.id == localArticle.attributes.id);

        if (md && md.attributes.id && !zd) {
            throw new Error(`Article ID ${id} in ${local.filepath} was not found in Zendesk!`);
        }

        var articleAttachments = zendeskAttachments.find(za => za.article_id == localArticle.attributes.id);
        if (articleAttachments) {
            articleAttachments = articleAttachments.attachments; // TODO..
        } else {
            articleAttachments = [];
        }

        articles.push({
            "md": md,
            "zd": zd,
            "attachments": articleAttachments
        });
    }
    var removedArticles = zendeskArticles.filter(zendeskArticle => !localArticles.some(localArticle => localArticle.attributes.id == zendeskArticle.id));
    for (const zendeskArticle of removedArticles) {
        if (!zendeskArticle.draft) {
            articles.push({
                "md": null,
                "zd": zendeskArticle,
                "attachments": null // whatever
            });
        }
    }
    return articles;
}

function printChanges(zendeskCategories, zendeskSections, articles) {
    var offset = " - ";

    // Sort articles into arrays
    var newArticles = [];
    var unchangedArticles = [];
    var updatedArticles = [];
    var removedArticles = [];
    for (const a of articles) {
        if (a.md && !a.zd) {
            newArticles.push(a);
        } else if (a.md && a.zd) {
            if (hasChanges(a)) {
                updatedArticles.push(a)
            } else {
                unchangedArticles.push(a)
            }
        } else {
            removedArticles.push(a);
        }
    }

    // NEW ARTICLES
    for (const a of newArticles) {
        console.log(`${clc.cyan('[NEW]')} ${clc.yellow('[' + a.md.filepath + ']')}`);
        const attachmentReplacements = getAttachmentReplacements(a);
        for (const attachment of attachmentReplacements) {
            if (!attachment.target) {
                console.log(offset + 'Uploading attachment: ' + attachment.src);
            }
        }
        console.log(offset + `"${a.md.attributes.title}" will be published as new article`);
    }

    // UPDATED ARTICLES
    for (const a of updatedArticles) {
        console.log(`${clc.green('[UPDATED]')} ${clc.yellow('[' + a.zd.html_url + ']')}`)

        // Check title
        if (a.md.attributes.title != a.zd.title) {
            console.log(offset + `${'title'}: ${clc.bgRed(a.zd.title)}${clc.bgGreen(a.md.attributes.title)}`);
        }

        // Check position
        var oldPosition = getPositionNames(zendeskCategories, zendeskSections, a.zd.section_id).join(' > ');
        var newPosition = getPositionNames(zendeskCategories, zendeskSections, a.md.section_id).join(' > ');
        if (newPosition != oldPosition) {
            console.log(offset + `${'Position'}: ${clc.bgRed(oldPosition)}${clc.bgGreen(newPosition)}`);
        }

        // Check attachments and article body
        const attachmentReplacements = getAttachmentReplacements(a);
        const newAttachmentReplacements = attachmentReplacements.filter(ar => ar.target == null);
        if (newAttachmentReplacements.length > 0) {
            for (const newAttachment of newAttachmentReplacements) {
                console.log(offset + 'Uploading attachment: ' + newAttachment.src);
            }
            console.log(offset + 'Article body will be updated with new attachment URLs and any other changes.')
        } else {
            // Check body

            const local = htmlparser2.parseDocument(md.render(a.md.body), {
                decodeEntities: true
            });
            const remote = htmlparser2.parseDocument(a.zd.body, {
                decodeEntities: true
            });

            for (const imgElement of htmlparser2.DomUtils.filter(e => e.name == 'img', local)) {
                var replacement = attachmentReplacements.find(ar => ar.src == imgElement.attribs.src);
                if (replacement) {
                    imgElement.attribs.src = replacement.target;
                }
            }

            const localRender = minify(render(local, {
                encodeEntities: true
            }), {
                continueOnParseError: true,
                collapseWhitespace: true
            });
            const remoteRender = minify(render(remote, {
                encodeEntities: true
            }), {
                continueOnParseError: true,
                collapseWhitespace: true
            });

            if (localRender != remoteRender) {
                console.log(offset + 'Article body will be updated.')
            }
        }
    }

    // UNCHANGED ARTICLES
    if (verbose) {
        for (const a of unchangedArticles) {
            console.log(`${clc.blackBright('[UNCHANGED]')} ${clc.yellow('[' + a.zd.html_url + ']')}`)
        }
    }

    // REMOVED ARTICLES
    for (const a of removedArticles) {
        console.log(`${clc.red('[REMOVED]')} ${clc.yellow('[' + a.zd.html_url + ']')}`)
        console.log(offset + `"${a.zd.title}" will be removed`);
    }

    var totalArticles = newArticles.length + updatedArticles.length + unchangedArticles.length + removedArticles.length;
    var summary = `🔍 ${totalArticles} Total 📝 ${clc.cyan(newArticles.length + ' New')} 📤 ${clc.green(updatedArticles.length + ' Update')} ❌ ${clc.red(removedArticles.length + ' Removed')} 💤 ${clc.blackBright(unchangedArticles.length + ' Unchanged')}`;

    console.log(summary);
}

function createArticle(article) {
    var section_id = article.md.section_id;
    // Create article draft without body
    var articleData = {
        "draft": true,
        "body": null,
        "locale": "en-us",
        "permission_group_id": 1127974,
        "title": article.md.attributes.title,
        "user_segment_id": null
    };

    return client.articles.create(section_id, {
        "article": articleData,
        "notify_subscribers": false
    }).then(result => {
        console.log(`[OK] Created "${result.title}" (${result.html_url})`);
        article.zd = result;

        // Add article ID and save to disk
        article.md.attributes.id = result.id;
        saveArticle(article);

        // Return the article
        return article;
    })
}

function createAttachments(article) {

    const newAttachments = getAttachmentReplacements(article).filter(attachment => attachment.target == null);
    return Promise.all(newAttachments.map(newAttachment => {
        var attachmentPath = `content/${path.dirname(article.md.filepath)}/${newAttachment.src}`;
        return createArticleAttachment(article.md.attributes.id, attachmentPath) // returns json
            .then(result => {
                console.log('[OK] Uploading:' + result.display_file_name + ' => ' + result.content_url);
                console.log(result);
                article.attachments.push(result);
            })
            .catch(error => {
                if (error.statusCode) {
                    console.log(`[${error.statusCode}] ${attachmentPath}`);
                } else {
                    console.log(`[ER] ${attachmentPath}`);
                    throw error;
                }
            });
    }))
}

function getArticleUpdates(a) {
    var updates = {};

    // Check position
    if (a.md.section_id != a.zd.section_id) {
        updates.section_id = a.md.section_id;
    }

    if (Object.keys(updates).length > 0) {
        return updates;
    } else {
        return null;
    }
}

function getTranslationUpdates(a) {
    var updates = {};

    // Check title
    if (a.md.attributes.title != a.zd.title) {
        updates.title = a.md.attributes.title;
    }

    // Check draft
    var draft = (a.md.attributes.draft == true); // TODO: Simplify?
    if (draft != a.zd.draft) {
        updates.draft = draft;
    }

    // Check attachments and article body
    const attachmentReplacements = getAttachmentReplacements(a);
    var renderedHTML = makeHTML(a.md.body, attachmentReplacements, false);
    if (renderedHTML != a.zd.body) {
        updates.body = makeHTML(a.md.body, attachmentReplacements, true);
    }

    if (Object.keys(updates).length > 0) {
        return updates;
    } else {
        return null;
    }
}

async function deploy(zendeskSections, articles) {

    // Sort articles into arrays
    var newArticles = [];
    var updatedArticles = [];
    var removedArticles = [];
    for (const a of articles) {
        if (a.md && !a.zd) {
            newArticles.push(a);
        } else if (a.md && a.zd) {
            if (hasChanges(a)) {
                updatedArticles.push(a)
            }
        } else {
            removedArticles.push(a);
        }
    }

    // Create any new articles as empty drafts (update them with the others)
    const createdArticles = await Promise.all(newArticles.map(a => createArticle(a)));
    updatedArticles = updatedArticles.concat(createdArticles);

    // For every article in Zendesk with changes...
    await Promise.all(updatedArticles.map(async a => {

        // Create any new attachments
        await createAttachments(a);

        // Make any updates to translation
        // https://developer.zendesk.com/api-reference/help_center/help-center-api/translations/
        const translationUpdates = getTranslationUpdates(a);
        if (translationUpdates) {
            // console.log(`Updating translation for article "${a.zd.title}"...`);
            try {
                var result = await client.translations.updateForArticle(a.zd.id, 'en-us', translationUpdates)
                console.log(`[OK] Updating translation "${result.title}" (${result.html_url})`);
            } catch (error) {
                console.log(`Error updating translation for ${a.zd.html_url}`);
                console.log(error)
                throw error;
            }
        }

        // Make any updates to article
        // https://developer.zendesk.com/api-reference/help_center/help-center-api/articles/
        const articleUpdates = getArticleUpdates(a);
        if (articleUpdates) {
            // console.log(`Updating article ${a.zd.title}...`);
            try {
                console.log(a.zd);
                result = await client.articles.update(a.zd.id, articleUpdates);
                console.log(`[OK] Updating "${result.title}" (${result.html_url})`)
            } catch (error) {
                console.log(`Error sending update to ${a.zd.html_url}`);
                throw error;
            }
        }

        // Update Algolia
        // TODO: Update Algolia
        if (translationUpdates || articleUpdates) {
            var sectionName = zendeskSections.find(s => s.id == a.md.sectionID);
            try {
                algoliaIndex.saveObject({
                    "objectID": a.zd.url,
                    "title": a.zd.title,
                    "documentation_type": "Help Center",
                    "category_of_helpcenter": sectionName,
                    "environment": "support.arduino.cc",
                    "language": "en",
                    "language_pretty": "English",
                    "content": a.zd.body,
                    "url": a.zd.url,
                }).wait();
            } catch (error) {
                console.error("Couldn't save object in Algolia");
                console.error(error);
            }
        }
    }));

    // Delete unused attachments
    for (const article of updatedArticles) {
        const articleAttachments = article.attachments;
        const articleReplacements = getAttachmentReplacements(article);
        for (const articleAttachment of articleAttachments) {
            if (!articleReplacements.some(ar => ar.target == articleAttachment.content_url && ar.src != null)) {
                console.log(`Attachment ${articleAttachment.id} will be deleted from ${articleAttachment.content_url}`)
                client.articleattachments.delete(articleAttachment.id)
                    .then(result => {
                        console.log('Deleted attachment:' + articleAttachment.content_url)
                    })
                    .catch(error => {
                        console.log(`[${error.statusCode}] Deleting attachment (id: ${articleAttachment.id}) ${articleAttachment.content_url}`);
                    })
            }
        }
    }

    // Archive articles not present on disk (do this synchronously to avoid error responses)
    for (const article of removedArticles) {
        try {
            await client.articles.delete(article.zd.id);
            console.log(`[OK] Archiving article "${article.zd.title}" (${article.zd.html_url})`);
        } catch (error) {
            console.error(`[${error.statusCode}] Archiving article "${article.zd.title}" (${article.zd.html_url})`);
        }
        await algoliaIndex.deleteObject(article.zd.url);
    }
}

function hasChanges(article) {
    const trackedAttributes = ["title", "section_id", "body", "draft"];
    if (!article.md) {
        throw new Error(`Can't compare ${article.zd.html_url}, no local source to compare to!`);
    }
    if (!article.zd) {
        throw new Error(`Can't compare ${article.md.filepath}, no Zendesk target to compare to!`);
    }

    if (article.md.attributes.title != article.zd.title) {
        return true;
    }

    if (article.md.section_id != article.zd.section_id) {
        return true;
    }

    if (article.md.attributes.draft && !article.zd.draft) {
        return true;
    }

    const attachmentReplacements = getAttachmentReplacements(article);
    if (attachmentReplacements.some(attachment => attachment.target == null)) {
        return true;
    }

    // Render body and compare
    var renderedHTML = makeHTML(article.md.body, attachmentReplacements, true);
    if (!compareHTML(makeHTML(article.md.body, attachmentReplacements, true), article.zd.body)) {
        return true;
    }

    // No changes found
    return false;
}

function compareHTML(a, b) {
    const local = htmlparser2.parseDocument(a, {
        decodeEntities: true
    });
    const remote = htmlparser2.parseDocument(b, {
        decodeEntities: true
    });

    const localRender = minify(render(local, {
        encodeEntities: true
    }), {
        continueOnParseError: true,
        collapseWhitespace: true
    });
    const remoteRender = minify(render(remote, {
        encodeEntities: true
    }), {
        continueOnParseError: true,
        collapseWhitespace: true
    });

    return (localRender == remoteRender);
}

function makeHTML(markdown, attachmentReplacements, encodeEntities) {
    const html = htmlparser2.parseDocument(md.render(markdown));
    for (const imgElement of htmlparser2.DomUtils.filter(e => e.name == 'img', html)) {
        var replacement = attachmentReplacements.find(ar => ar.src == imgElement.attribs.src);
        if (replacement) {
            imgElement.attribs.src = replacement.target;
        }
    }
    return render(html, {
        xmlMode: false,
        encodeEntities: encodeEntities
    })
}

function getAttachmentReplacements(article) {
    var articleAttachments = article.attachments;
    let attachmentReplacements = [];

    const html = htmlparser2.parseDocument(md.render(article.md.body));
    for (const imgElement of htmlparser2.DomUtils.filter(e => e.name == 'img', html)) {
        var src = imgElement.attribs.src;
        if (src.startsWith('img')) {
            var project_img_path = root + '/' + path.dirname(article.md.filepath) + '/' + src;
            var stats = fs.statSync(project_img_path)
            var fileSizeInBytes = stats.size;

            var zdAttachment = articleAttachments.find(a => a.display_file_name == path.basename(src) && fileSizeInBytes == a.size);
            if (zdAttachment) { // Match found
                attachmentReplacements.push({
                    "src": src,
                    "target": zdAttachment.content_url
                });
                // Remove processed
                zdAttachment.used = true;
            } else {
                // Not found
                attachmentReplacements.push({
                    "src": src,
                    "target": null
                });
            }
        }
    }

    // Check for unused attachments
    var unusedArticleAttachments = articleAttachments.filter(aa => !attachmentReplacements.some(ar => ar.target == aa.content_url));
    for (var a of unusedArticleAttachments) {
        attachmentReplacements.push({
            "src": null,
            "target": a.content_url
        });
    }

    return attachmentReplacements;
}

// NOTE: Does not work for subsections
function getPositionRow(zendeskCategories, zendeskSections, dirPath) {
    var positionLevels = dirPath.split('/');
    var zendeskCategory = zendeskCategories.find(c => c.name == positionLevels[0]);

    // If no category is found
    if (!zendeskCategory) {
        return {
            category: positionLevels[0],
            section: '',
            source: clc.yellow(dirPath),
            target: clc.red('Not found.')
        };
    } else if (positionLevels.length == 1) { // Category found, no section in path
        return {
            category: positionLevels[0],
            section: '',
            source: clc.green(dirPath),
            target: clc.green(zendeskCategory.html_url.split('-').slice(0, 2).join('-'))
        };
    }

    var zendeskSection = zendeskSections.find(s => s.name == positionLevels[1] && s.category_id == zendeskCategory.id);
    if (!zendeskSection) {
        return {
            category: positionLevels[0],
            section: positionLevels[1],
            source: clc.yellow(dirPath),
            target: clc.red('Not found.')
        };
    } else { // Section found
        return {
            category: positionLevels[0],
            section: positionLevels[1],
            source: clc.green(dirPath),
            target: clc.green(zendeskCategory.html_url.split('-').slice(0, 2).join('-'))
        };
    }
}

function getPositionRows(zendeskCategories, zendeskSections, localDirPaths) {
    const positionRows = [];
    for (const dirpath of localDirPaths) {
        positionRows.push(getPositionRow(zendeskCategories, zendeskSections, dirpath));
    }

    // Zendesk categories
    for (const zendeskCategory of zendeskCategories) {
        // console.log(zCategory);
        if (!localDirPaths.find(dirPath => dirPath == zendeskCategory.name)) {
            positionRows.push({
                category: dirPath,
                section: '',
                source: clc.red('Not found'),
                target: clc.yellow(zendeskCategory.html_url.split('-').slice(0, 2).join('-'))
            })
        }
    }

    // Zendesk sections
    for (const zendeskSection of zendeskSections) {
        const category_id = zendeskSection.category_id;
        const category_name = zendeskCategories.find(c => c.id == zendeskSection.category_id).name;
        const section_name = zendeskSection.name;
        if (!localDirPaths.find(dirPath => dirPath == `${category_name}/${section_name}`)) {
            positionRows.push({
                category: category_name,
                section: section_name,
                source: clc.red('Not found'),
                target: clc.yellow(zendeskCategory.html_url.split('-').slice(0, 2).join('-'))
            })
        }
    }
    return positionRows;
}

function parseMarkdown(base, filePaths) {
    var promises = filePaths.map(filePath => fsPromises.readFile(path.join(base, filePath), 'utf8')
        .then(data => {
            var article = fm(data);
            article.filepath = filePath;
            return article;
        }));
    return promises;
}

function comparePositionRow(a, b) {
    if (a.category > b.category) {
        return 1;
    }
    if (a.category < b.category) {
        return -1;
    }
    if (a.section == null || a.section > b.section) {
        return 1;
    }
    if (b.section == null || b.section > a.section) {
        return 1;
    }

    // a and b are the same position
    return 0;
}

function getLevelsFromPath(path) {
    return path.split('/').slice(0, 2);
}

function getPositionID(zendeskCategories, zendeskSections, ...levelNames) {
    const categoryName = levelNames[0];
    const category = zendeskCategories.find(c => c.name == categoryName);
    if (levelNames.length == 1) {
        return category.id;
    }
    const sectionName = levelNames[1];
    const section = zendeskSections.find(s => s.name == sectionName && s.category_id == category.id);
    return section.id;
}

function getPositionNames(zendeskCategories, zendeskSections, id) {
    const section = zendeskSections.find(s => s.id == id);
    if (section) {
        const category = zendeskCategories.find(c => c.id == section.category_id);
        return [category.name, section.name];
    } else {
        // No section was found, look for category instead
        return zendeskCategories.find(c => c.id == id);
    }
}

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

function getAllAttachments(localArticles) {
    var attachment_promises = [];
    for (const localArticle of localArticles) {
        const id = localArticle.attributes.id;
        if (id) {
            attachment_promises.push(client.articleattachments.list(id)
                .then(result => {
                    return {
                        "article_id": id,
                        "attachments": result.article_attachments
                    };
                })
                .catch((error) => {
                    if (error.statusCode != 404) {
                        console.error(error);
                    }
                }));
        }
    }
    return Promise.all(attachment_promises);
}

function saveCacheSync(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

function readCache(filePath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}

async function exTime(promise) {
    const startTime = Date.now()
    const resp = await promise
    return {
        data: resp,
        exTime: Date.now() - startTime
    }
}

function saveArticle(article) {
    var attributes = article.md.attributes;

    console.log('Saving article:')
    // console.log(article);

    let rows = [];
    rows.push('---');
    rows.push(`title: ${attributes.title}`);
    rows.push(`id: ${attributes.id}`);

    var remainingKeys = Object.keys(attributes).filter(k => k != 'title' && k != 'id');
    for (var key of remainingKeys) {
        rows.push(`${key}: ${attributes['key']}`);
    }

    rows.push('---')
    rows.push('') // Empty line between frontmatter and body
    rows.push(article.md.body);

    fs.writeFileSync('content/' + article.md.filepath, rows.join('\n'), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

// Not implemented in node-zendesk library
// Problem: not taken into account by throttler
async function createArticleAttachment(articleID, filepath) {
    var myHeaders = new fetch.Headers();
    myHeaders.append("Authorization", "Basic " + Buffer.from(ZENDESK_USER + ":" + ZENDESK_PASS).toString('base64'));
    var file = fs.readFileSync(filepath)
    var formData = new FormData();
    formData.append("inline", "true");
    formData.append('file', file, path.basename(filepath));

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
    };

    return fetch(`https://arduino.zendesk.com/api/v2/help_center/articles/${articleID}/attachments.json`, requestOptions)
        .then(response => response.json())
        .then(json => {
            return json.article_attachment;
        })
        .catch(error => console.log('error', error));
}

async function saveAllSearchObjects(zendeskSections, articles) {
    var objects = articles.filter(a => a.zd).map(a => {
        var sectionName = zendeskSections.find(s => s.id == a.zd.section_id).name;
        return {
            "objectID": a.zd.url,
            "title": a.zd.title,
            "documentation_type": "Help Center",
            "category_of_helpcenter": sectionName,
            "environment": "support.arduino.cc",
            "language": "en",
            "language_pretty": "English",
            "content": a.zd.body,
            "url": a.zd.url,
        };
    });
    const saveResult = await algoliaIndex.saveObjects(objects);
    console.log(`Updated ${saveResult.objectIDs.length} objects.`);
}

async function deleteOrphanedSearchObjects(articles) {
    const hitsPerPage = 1000;
    const searchResult = await algoliaIndex.search("", {
        hitsPerPage: hitsPerPage,
        "facetFilters": [
            [
                "documentation_type:Help Center"
            ]
        ]
    });

    if (searchResult.nbHits > hitsPerPage) {
        throw new Error('nbHits exceeded hitsPerPage, not all objects could be checked.');
    }

    const removeTheseObjectIDs = searchResult.hits.filter(
        object => !articles.some(
            a => a.zd.url == object.url)).map(
        o => o.objectID);
    const deleteResult = await algoliaIndex.deleteObjects(removeTheseObjectIDs)
    console.log(`Deleted ${deleteResult.objectIDs.length} objects.`);
}