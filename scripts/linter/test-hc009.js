// @ts-check

'use strict';

const path = require('path');
const markdownIt = require('markdown-it');
const rule = require('./markdownlint/rules/hc009');

async function test() {
  const { lint } = await import('markdownlint/sync');

  const testCases = [
    {
      name: "Valid: 1 blank line after front matter",
      content: `---\ntitle: "Hello"\n---\n\n## Heading 1\n`,
      expectedErrors: 0
    },
    {
      name: "Invalid: 0 blank lines after front matter",
      content: `---\ntitle: "Hello"\n---\n## Heading 1\n`,
      expectedErrors: 1,
      expectedLineNumbers: [4]
    },
    {
      name: "Invalid: 2 blank lines after front matter",
      content: `---\ntitle: "Hello"\n---\n\n\n## Heading 1\n`,
      expectedErrors: 1,
      expectedLineNumbers: [6]
    },
    {
      name: "Invalid: 3 blank lines after front matter",
      content: `---\ntitle: "Hello"\n---\n\n\n\n## Heading 1\n`,
      expectedErrors: 1,
      expectedLineNumbers: [7]
    },
    {
      name: "Valid: No front matter",
      content: `## Heading 1\n\nSome text\n`,
      expectedErrors: 0
    }
  ];

  console.log("🧪 Running HC009 unit tests...");
  let passed = true;

  for (const tc of testCases) {
    const options = {
      config: {
        default: false,
        HC009: true
      },
      strings: {
        "test.md": tc.content
      },
      customRules: [rule],
      resultVersion: 3,
      markdownItFactory: () => markdownIt({ "html": true })
    };

    const result = lint(options);
    const errors = result["test.md"] || [];

    const actualErrorsCount = errors.length;
    if (actualErrorsCount !== tc.expectedErrors) {
      console.error(`❌ Case "${tc.name}" failed: expected ${tc.expectedErrors} error(s), got ${actualErrorsCount}`);
      console.error("Actual errors:", errors);
      passed = false;
    } else {
      // Check line numbers if expected
      if (tc.expectedLineNumbers) {
        const actualLineNumbers = errors.map(e => e.lineNumber).sort((a, b) => a - b);
        const match = tc.expectedLineNumbers.length === actualLineNumbers.length &&
          tc.expectedLineNumbers.every((v, i) => v === actualLineNumbers[i]);
        if (!match) {
          console.error(`❌ Case "${tc.name}" failed: expected line numbers ${tc.expectedLineNumbers}, got ${actualLineNumbers}`);
          passed = false;
        } else {
          console.log(`✅ Case "${tc.name}" passed!`);
        }
      } else {
        console.log(`✅ Case "${tc.name}" passed!`);
      }
    }
  }

  if (passed) {
    console.log("🎉 All HC009 unit tests passed successfully!");
    process.exit(0);
  } else {
    console.error("💔 Some unit tests failed.");
    process.exit(1);
  }
}

test().catch(err => {
  console.error("Error during testing:", err);
  process.exit(1);
});
