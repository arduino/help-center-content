// @ts-check

"use strict";

const markdownlintRulesDir = "../..//node_modules/markdownlint/lib/";
const { addErrorDetailIf, filterTokens, frontMatterHasTitle } = require(markdownlintRulesDir + "../helpers");

const sanitize = require("sanitize-filename");
const path = require("path");

module.exports = {
  "names": [ "HC008", "filename-match" ],
  "description": "Filename should match title",
  "tags": [ "filename" ],
  "function": function HC008(params, onError) {
    const filename = path.basename(params.name);
    const title = params.frontMatterLines.find(a =>a.includes("title: ")).substring(7);
    if (title) {
      const expectedFilename = title //sanitize(title)
      .replace(/['"]+/g, '')
      .replace(/[^A-Za-z0-9]+/g, '-')
      .replace(/-$/, '') + '.md';
      if (filename != expectedFilename) {
        console.log("Error! Filename is [" + filename + '], expected [' + expectedFilename + ']');
        addErrorDetailIf(onError, 1,
          filename, expectedFilename, null, "Expected: " + expectedFilename
          + "; Actual: " + filename);
        }
    }
  }
};
