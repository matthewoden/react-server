'use strict';
var env = require('./utils').env;

module.exports = env({
  develop:{
    path: require('path').resolve('./assets/public'),
    publicPath: '/assets',
    filename: '[name].js',
  },

  production:{
    path: './assets/public',
    publicPath:'/assets',
    filename: '[hash].[name].js',
  },

  prerender:{
    path: './assets/prerender/',
    filename: '[name].js',
    /* IMPORTANT!
     * For prerendering, you must compile to UMD or CommonJS
     * so it can be required in a Node context: */
    libraryTarget: 'commonjs2'
   },
});
