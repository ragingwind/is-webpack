'use strict';

module.exports = process.mainModule && /webpack.js$/.test(process.mainModule.filename) &&
    process.argv.find(arg => /webpack$/.test(arg)) !== undefined;
