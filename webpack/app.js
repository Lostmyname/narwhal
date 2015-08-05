'use strict';

var path = require('path');
var gulp = require('gulp');
var findModulesDown = require('find-node-modules-down');
var getLmnTask = require('lmn-gulp-tasks');
var argv = require('yargs').argv;

function getTask(name, options) {
  if (typeof options !== 'object') {
    options = {};
  }

  if (typeof options.rev !== 'boolean') {
    options.rev = true;
  }

  options.manifest = buildPath;

  return getLmnTask(name, options);
}

gulp.task('auto-reload', getTask('auto-reload'));

gulp.task('js', getTask('browserify', {
  src: './src/js/script.js',
  dest: path.join(buildPath, 'js/bundle.js')
}));

gulp.task('watchers', function () {
  gulp.watch('./src/**/*.js', ['js']);
});

var tasks = ['js'];

gulp.task('default', ['watchers']);
