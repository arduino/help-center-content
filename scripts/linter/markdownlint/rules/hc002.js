// @ts-check

'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  names: ['HC002', 'image-file-exists'],
  description: 'Image does not exist',
  tags: ['images'],
  function: function HC002(params, onError) {

    // Get the full path of the Markdown file being linted
    const markdownFilePath = params.name; 
    
    // Extract the directory path of the Markdown file
    const markdownFileDir = path.dirname(markdownFilePath);

    params.tokens
      .filter((token) => token.type === 'image')
      .forEach((image) => {
        const imageSrc = image.attrGet('src');

        // Continue only if the src exists and is not an external URL
        if (imageSrc && !/^(https?|file):/.test(imageSrc)) {
          const imagePath = path.resolve(markdownFileDir, imageSrc);
          if (!fs.existsSync(imagePath)) {
            onError({ lineNumber: image.lineNumber, detail: `Image does not exist [${imagePath}]` });
          }
        }
      });
  }
};