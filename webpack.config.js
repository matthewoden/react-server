'use strict';

var entry = require('./webpack/entry');
var externals = require('./webpack/externals');
var modules = require('./webpack/module');
var output = require('./webpack/output');
var plugins = require('./webpack/plugins');
var extensions = require('./webpack/extensions');
var target = require('./webpack/target');
var postcss = require('./webpack/postcss');

module.exports = [{
    watch: true,
    name: "client side",
    entry: entry.client,
    externals: externals.client,
    module: modules.client,
    output: output.client,
    plugins: plugins.client,
    postcss: postcss.client,
    resolve: {
      extensions: extensions.client,
    },
    modulesDirectories: ["node_modules"],
    target: target.client,
  },
  {
    watch: true,
    name: "server side",
    entry: entry.server,
    externals: externals.server,
    module: modules.server,
    output: output.server,
    plugins: plugins.server,
    postcss: postcss.server,
    resolve: {
      extensions: extensions.server,
    },
    modulesDirectories: ["node_modules"],
    target: target.server,
  }];


