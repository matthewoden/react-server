'use strict';

var autoprefixer = require('autoprefixer-core');
var csswring     = require('csswring');
var simplevars = require('postcss-simple-vars');
var cssImport = require('postcss-import');

//css variables
var variables = require('../client/components/variables');

var commonCSS = [
autoprefixer({browsers: ['last 2 versions']}),
simplevars({ variables: function() { return variables; }}),
cssImport
];

module.exports = {
  develop: commonCSS,
  client: process.env.NODE_ENV === 'production' ? commonCSS.concat(csswring) : commonCSS,
  server: process.env.NODE_ENV === 'production' ? commonCSS.concat(csswring) : commonCSS,
};