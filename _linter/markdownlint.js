#!/usr/bin/env node

'use strict';

const glob = require('glob');
const fs = require('fs');
const path = require('path');
const YAML = require('yaml');
const markdownIt = require('markdown-it');

const projectRoot = path.join(__dirname, '..');

const ruleURLs = Object.freeze({
  'hc': 'https://github.com/arduino/help-center-content/blob/main/_linter/markdownlint/Rules.md',
  'md': 'https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md'
});

function getErrorMessage(error) {
  let message = ` ${error.lineNumber}: ${error.ruleNames[0]}: ${error.ruleDescription}`;
  if (error.errorContext) {
    message += ` [${error.errorContext}]`;
  }
  return message;
}

async function main() {
  // Get markdown file paths
  const files = glob.sync('content/**/*.md', { 
    ignore: 'content/Custom/Hubs/**',
    cwd: projectRoot
  });

  // Get custom rules
  const customRules = require('./markdownlint/rules/rules.js');

  // get config
  const configYAML = YAML.parse(fs.readFileSync(path.join(__dirname, 'markdownlint.yml'), 'utf8'));

  const options = {
    config: configYAML,
    files: files.map(file => path.join(projectRoot, file)),
    customRules: customRules,
    resultVersion: 3,
    markdownItFactory: () => markdownIt({ "html": true })
  };
  
  console.log(`🕵️  Validating ${files.length} articles...`);

  try {
    const { lint } = await import('markdownlint/sync');
    const result = lint(options);

    const violatedRules = new Set();
    let errorCount = 0;
    let errorArticleCount = 0;
    const errorLines = [];

    for (const file of Object.keys(result)) {
      const errors = result[file];
      if (errors.length > 0) {
        errorArticleCount++;
        const relativeFile = path.relative(process.cwd(), file);
        errorLines.push(relativeFile);

        // Sort by line number
        errors.sort((a, b) => a.lineNumber - b.lineNumber);

        for (const error of errors) {
          errorLines.push(getErrorMessage(error));
          errorCount++;

          // make rule violation row
          const anchor = error.ruleNames[0].toLowerCase();
          const ruleType = anchor.substring(0, 2);
          const URL = ruleURLs[ruleType];
          if (URL) {
            violatedRules.add(`${error.ruleNames[0]}: ${URL}#${anchor}`);
          }
        }
      }
    }

    const errorMsg = `${errorCount} errors found in ${errorArticleCount} articles`;
    if (errorCount === 0) {
      console.log(`\x1b[42m${errorMsg}\x1b[0m`);
      process.exit(0);
    }

    console.log(`\n🚫 \x1b[31m\x1b[4m${errorMsg}\x1b[0m`);
    console.log(errorLines.join('\n'));
    console.log('\n📝 The following rules were violated:');
    for (const rule of violatedRules) {
      console.log('\x1b[36m%s\x1b[0m', rule);
    }
    process.exit(-1);
  } catch (err) {
    console.error('An error occurred during linting:', err);
    process.exit(1);
  }
}

main();
