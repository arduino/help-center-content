// @ts-check

"use strict";

const markdownlintRulesDir = "../..//node_modules/markdownlint/lib/"
const { addError, forEachInlineChild } = require(markdownlintRulesDir + "../helpers");

var glob = require("glob");
const path = require('path');
// TODO: https://stackoverflow.com/a/2186565
const filePaths = glob.sync('content/**/*');

module.exports = {
  "names": [ "HC002", "no-missing-images" ],
  "description": "Image does not exist",
  "tags": [ "images" ],
  "function": function HC002(params, onError) {
    forEachInlineChild(params, "image", function forToken(token) {
      var dir = path.dirname(params.name);
      var imgPath = path.join(dir, token.attrs[0][1]);

      if (!filePaths.includes(imgPath)) {
        addError(onError, token.lineNumber, null, imgPath);
      }
    });
  }
};
