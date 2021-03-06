const path = require('path');
const resolve = require('resolve'); // eslint-disable-line import/no-extraneous-dependencies
require('babel-polyfill');

// eslint-disable-next-line
module.exports.run = function() {
  // eslint-disable-next-line
  require('babel-register')({
    only(filename) {
      return (filename.indexOf('build') === -1 && filename.indexOf('node_modules') === -1);
    },
    extensions: ['.js'],
    resolveModuleSource(source, filename) {
      return resolve.sync(source, {
        basedir: path.resolve(filename, '..'),
        extensions: ['.js'],
        moduleDirectory: [
          'src',
          'node_modules'
        ]
      });
    }
  });
};
