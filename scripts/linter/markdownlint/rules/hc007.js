// @ts-check

"use strict";

const markdownlintRulesDir = "../..//node_modules/markdownlint/lib/";
const { addErrorDetailIf, filterTokens, frontMatterHasTitle } = require(markdownlintRulesDir + "../helpers");

module.exports = {
  "names": [ "HC007", "heading-increment-x", "header-increment-x" ],
  "description": "Heading levels should only increment by one level at a time",
  "tags": [ "headings", "headers" ],
  "function": function HC007(params, onError) {
    let prevLevel = 0;
    const foundFrontMatterTitle =
      frontMatterHasTitle(
        params.frontMatterLines,
        params.config.front_matter_title
      );
    if (foundFrontMatterTitle) {
      prevLevel = 1;
    }
    
    const headings = params.parsers.markdownit.tokens.
      filter((token => token.type === "heading_open"));

    for (const token of headings) {
      const level = Number.parseInt(token.tag.slice(1), 10);
      if (prevLevel && (level > prevLevel)) {
        addErrorDetailIf(onError, token.lineNumber,
          "h" + (prevLevel + 1), "h" + level, null, token.line);
      }
      prevLevel = level;
    };
  }
};
