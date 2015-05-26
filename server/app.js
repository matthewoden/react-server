'use strict';
require("babel/register");
// Set default node environment to development
process.env.NODE_ENV =  process.env.NODE_ENV || 'develop';
var config     = require('./config/environment');
var express    = require('express');
var mongoose   = require('mongoose');

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('../webpack.config');

var app = express();

//config
require('./config/express')(app)
//api
require('./routes')(app);
// handle database connections.
// uncomment below to use mongo, and mongodb logging.
// require('./db')();

if(process.env.NODE_ENV !== 'production') {
  //basic Hot Loader configuration
  new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true
  }).listen(config.port, config.ip, function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log('Webpack development server listening on %d, in %s mode.', config.port, app.get('env'));
  });

} else {

  app.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode.', config.port, app.get('env'));
  });

}
