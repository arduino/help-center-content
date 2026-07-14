// @ts-check

"use strict";

const { addError } = require("markdownlint/helpers");

module.exports = {
  "names": [ "HC009", "front-matter-repeated-blank-lines" ],
  "description": "Exactly one blank line after front matter",
  "tags": [ "front-matter", "blank_lines" ],
  "function": function HC009(params, onError) {
    const fmLines = params.frontMatterLines;
    if (fmLines.length > 0) {
      // Find the closing delimiter index by looking for the last non-blank element
      let closingIndex = fmLines.length - 1;
      while (closingIndex >= 0 && fmLines[closingIndex].trim() === "") {
        closingIndex--;
      }

      const blankLinesCount = fmLines.length - 1 - closingIndex;
      if (blankLinesCount !== 1) {
        addError(
          onError,
          1,
          `Expected exactly one blank line after front matter, but found ${blankLinesCount}.`,
          null
        );
      }
    }
  }
};
