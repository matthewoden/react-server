// 'use strict';
// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
// var webpackConfig = require('./webpack.config');
// //basic Hot Loader configuration
// var config     = require('./server/config/environment');

// new WebpackDevServer(webpack(webpackConfig), {
//   publicPath: './assets',
//   hot: true,
//   historyApiFallback: true
// }).listen(config.port+1, config.ip, function (err, result) {
//   if (err) {
//     console.log(err);
//   }
//   console.log('Webpack development server listening on %d, in %s mode.', config.port, process.env.NODE_ENV);
// });