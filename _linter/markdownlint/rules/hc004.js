// @ts-check

"use strict";

const markdownlintRulesDir = "../..//node_modules/markdownlint/lib/"
const { addError, addErrorContext, frontMatterHasTitle } = require(markdownlintRulesDir + "../helpers");

module.exports = {
  "names": [ "HC004", "front-matter-variables-required" ],
  "description": "Missing front matter variables",
  "tags": [ "front-matter" ],
  "function": function HC004(params, onError) {

    const requiredAttributes = params.config.attributes;

    if (params.frontMatterLines.length > 0) {
      let articleAttributes = [];

      for (var line of params.frontMatterLines) {
        const split = line.split(':')[0];
        if (line.includes(':')) {
          articleAttributes.push(line.split(':')[0]);
        }
      }

      let missingAttributes = requiredAttributes.filter(a => !articleAttributes.includes(a));
      if (missingAttributes.length > 0) {
        addError(onError, 1, null, missingAttributes.join(', '));
      }
    }
  }
};
