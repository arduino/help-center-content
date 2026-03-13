// @ts-check

"use strict";

const markdownlintRulesDir = "../..//node_modules/markdownlint/lib/"
const { addError } = require(markdownlintRulesDir + "../helpers");

module.exports = {
  "names": [ "HC003", "valid-front-matter" ],
  "description": "Valid front matter not found",
  "tags": [ "front-matter" ],
  "function": function HC003(params, onError) {
      if(params.frontMatterLines.length == 0) {
        addError(onError, 1, null, null);
      }
    }
  };
