// @ts-check

"use strict";

const packageJson = require("../../package.json");
const homepage = packageJson.homepage;

const rules = [
  require("./hc001"),
  require("./hc002"),
  require("./hc003"),
  require("./hc004"),
  require("./hc005"),
  require("./hc006"),
  require("./hc007")
];

rules.forEach((rule) => {
  const name = rule.names[0].toLowerCase();
  // eslint-disable-next-line dot-notation
  rule["information"] =
    new URL(`${homepage}/blob/master/markdownlint/Rules.md#${name}`);
});

module.exports = rules;
