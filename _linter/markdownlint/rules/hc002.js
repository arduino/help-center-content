// @ts-check

'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  names: ['HC002', 'image-file-exists'],
  description: 'Image does not exist',
  tags: ['images'],
  function: function HC002(params, onError) {
    // The fileDir property is dynamically added by the main linter script.
    // It contains the directory of the markdown file being processed.
    const fileDir = this.fileDir || '';

    params.tokens
      .filter((token) => token.type === 'image')
      .forEach((image) => {
        const imageSrc = image.attrGet('src');

        // Continue only if the src exists and is not an external URL
        if (imageSrc && !/^(https?|file):/.test(imageSrc)) {
          const imagePath = path.resolve(fileDir, imageSrc);
          if (!fs.existsSync(imagePath)) {
            onError({ lineNumber: image.lineNumber, detail: `Image does not exist [${imagePath}]` });
          }
        }
      });
  }
};