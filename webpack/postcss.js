'use strict';

var autoprefixer = require('autoprefixer');
var csswring     = require('csswring');
var precss = require('precss');

//css variables
//var variables = require('../client/components/variables');

var commonCSS = [
autoprefixer({browsers: ['last 2 versions']}),
precss()
];

module.exports = {
  develop: commonCSS,
  client: process.env.NODE_ENV === 'production' ? commonCSS.concat(csswring) : commonCSS,
  server: process.env.NODE_ENV === 'production' ? commonCSS.concat(csswring) : commonCSS,
};
