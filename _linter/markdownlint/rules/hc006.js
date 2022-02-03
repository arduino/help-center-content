// @ts-check

"use strict";

// const { addErrorDetailIf, filterTokens, forEachHeading, forEachLine,
//  includesSorted } = require("../helpers");
// const { lineMetadata } = require("./cache");

const markdownlintRulesDir = "../..//node_modules/markdownlint/lib/"
const { addError, filterTokens, forEachHeading, forEachLine,
  includesSorted, frontMatterHasTitle} = require(markdownlintRulesDir + "../helpers");
const { lineMetadata } = require(markdownlintRulesDir + "./cache");

const longLineRePrefix = "^.{";
const longLineRePostfixRelaxed = "}.*\\s.*$";
const longLineRePostfixStrict = "}.+$";
const labelRe = /^\s*\[.*[^\\]]:/;
const linkOrImageOnlyLineRe = /^[es]*(lT?L|I)[ES]*$/;
const sternModeRe = /^([#>\s]*\s)?\S*$/;
const tokenTypeMap = {
  "em_open": "e",
  "em_close": "E",
  "image": "I",
  "link_open": "l",
  "link_close": "L",
  "strong_open": "s",
  "strong_close": "S",
  "text": "T"
};

module.exports = {
  "names": [ "HC006", "title-length-x" ],
  "description": "Title length above limit",
  "tags": [ "line_length" ],
  "function": function HC006(params, onError) {
    const titleLineLength =
      Number(params.config.title_line_length || 60);
    const strict = !!params.config.strict;
    const stern = !!params.config.stern;
    const longLineRePostfix =
      (strict || stern) ? longLineRePostfixStrict : longLineRePostfixRelaxed;
    const longHeadingLineRe =
      new RegExp(longLineRePrefix + titleLineLength + longLineRePostfix);

    var titleLines = [];
    if (params.frontMatterLines.length > 0) {
      let articleAttributes = [];

      for (var line of params.frontMatterLines) {
        if(line.startsWith('title: ')) {
          titleLines.push(line.substring(7));
        }
      }
    }

    for (var line of titleLines) {
      const lengthRe = longHeadingLineRe;

      if ((strict ||
           (!(stern && sternModeRe.test(line)) &&
            !labelRe.test(line))) &&
          lengthRe.test(line)) {
        addError(
          onError,
          1,
          null,
          line);
      }
    }
  }
};
