const markdownlint = require("markdownlint");
const glob = require("glob");
const fs = require('fs');
const YAML = require('yaml');

// Get markdown file paths
let files = glob.sync('content/**/*.md');

// Get custom rules

const customRules = require('./markdownlint/rules/rules.js');

// get config
const configJSON = fs.readFileSync('./_linter/markdownlint.yml', 'utf8')
const configYAML = YAML.parse(configJSON);

// treeify
const treeify = require("treeify");

const options = {
  "config": configYAML,
  "files": files,
  "customRules": customRules
};

console.log('🕵️  Validating ' + files.length + ' articles...');

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

function assign(obj, keyPath, value) {
  lastKeyIndex = keyPath.length-1;
  for (var i = 0; i < lastKeyIndex; ++ i) {
    key = keyPath[i];
    if (!(key in obj)){
      obj[key] = {}
    }
    obj = obj[key];
  }
  obj[keyPath[lastKeyIndex]] = value;
}

function getErrorMessage(error) {

  errorMessage = ' ' + error.lineNumber + ': '
  + error.ruleNames[0] + ': ' + error.ruleDescription;
  if (error.errorContext !== null) {
    errorMessage += ' [' + error.errorContext + ']';
  }

  return errorMessage;
}

markdownlint(options, function callback(err, result) {

  if (!err) {

    var violatedRules = new Set();

    var errorCount = 0;
    var errorArticleCount = 0;

    var errorLines = "";

    var resultObject = {};

    for (var file in result) {
      var errors = result[file];

      if(errors.length > 0 ) {

        // Sort by line number
        errors.sort(function(a, b) {
          return a.lineNumber - b.lineNumber;
        });

        let fileSplit = file.split('/');

        var errorSet = {};

        errorLines += file + '\n';

        for (var i = 0; i < errors.length; i++) {
          var error = errors[i];
          
          errorLines += getErrorMessage(error) + '\n';

          // make rule violation row
          violatedRules.add(
            error.ruleNames[0] + ': ' + error.ruleInformation
          );

          errorCount++;
        }
        // Assign errors
        assign(resultObject, fileSplit, errorSet);
        errorArticleCount++;
      }
    }

    const errorMsg = errorCount + ' errors found in '
    + errorArticleCount + ' articles';
  if (errorCount === 0) {
    console.log('\x1b[42m' + errorMsg + '\x1b[0m');
    process.exit(0);
  } else {
    console.log();
    console.log('🚫 ' + '\x1b[31m\x1b[4m' + errorMsg + '\x1b[0m');
    console.log(errorLines);

    if (violatedRules.size > 0) {
      console.log();
      const msg1 = '📝 The following rules were violated:';
      console.log(msg1);

      for (var rule of violatedRules) {
        console.log('\x1b[36m%s\x1b[0m', rule);
      }
    }

    process.exit(-1);
  }

  } else {
    throw err;
  }
});
