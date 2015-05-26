'use strict';
var env = require('./utils').env;

module.exports = env({
  develop:[],

  production: [],

  prerender:[
  /^react(\/.*)?$/,
  /^reflux(\/.*)?$/,
  /^react-router(\/.*)?$/,
  ]

});
