// @ts-check

"use strict";

const markdownlintRulesDir = "../..//node_modules/markdownlint/lib/"
const { addError, addErrorContext, frontMatterHasTitle } = require(markdownlintRulesDir + "../helpers");

module.exports = {
  "names": [ "HC005", "front-matter-variables-unrecognized" ],
  "description": "Unrecognized front matter variables",
  "tags": [ "front-matter" ],
  "function": function HC005(params, onError) {

    const allowedAttributes = params.config.attributes;

    if (params.frontMatterLines.length > 0) {
      let articleAttributes = [];

      for (var line of params.frontMatterLines) {
        const split = line.split(':')[0];
        if (line.includes(':')) {
          articleAttributes.push(line.split(':')[0]);
        }
      }

      let unexpectedAttributes = articleAttributes.filter(a => !allowedAttributes.includes(a));
      if (unexpectedAttributes.length > 0) {
        addError(onError, 1, null, unexpectedAttributes.join(', '));
      }
    }
  }
};
