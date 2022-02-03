// @ts-check

"use strict";

// const { addErrorDetailIf, filterTokens, forEachHeading, forEachLine,
//  includesSorted } = require("../helpers");
// const { lineMetadata } = require("./cache");

const markdownlintRulesDir = "../..//node_modules/markdownlint/lib/"
const { addError, filterTokens, forEachHeading, forEachLine,
  includesSorted } = require(markdownlintRulesDir + "../helpers");
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
  "names": [ "HC001", "heading-length-x", "header-length-x"],
  "description": "Heading length above limit",
  "tags": [ "line_length" ],
  "function": function HC001(params, onError) {
    const headingLineLength =
      Number(params.config.heading_line_length || 60);
    const strict = !!params.config.strict;
    const stern = !!params.config.stern;
    const longLineRePostfix =
      (strict || stern) ? longLineRePostfixStrict : longLineRePostfixRelaxed;
    const longHeadingLineRe =
      new RegExp(longLineRePrefix + headingLineLength + longLineRePostfix);

    // console.log(longHeadingLineRe);
    // process.exit();

    filterTokens(params, "heading_open", function forToken(token) {
      const line = token.line;
      const lineNumber = token.lineNumber;
      const lengthRe = longHeadingLineRe;

      if ((strict ||
           (!(stern && sternModeRe.test(line)) &&
            !labelRe.test(line))) &&
          lengthRe.test(line)) {
        addError(
          onError,
          lineNumber,
          null,
          line);
      }
    });
  }
};
