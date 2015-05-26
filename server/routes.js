'use strict';
var express      = require('express');
var path         = require('path');
var views        = require('./views')

//application routes
module.exports = function(app) {
  //application routes
  app.use('/api/home', require('./api/home'));

  //client side assets
  app.use('/favicon.ico', express.static(path.join(__dirname,'../favicon.ico')));
  app.use('/assets', express.static(path.join(__dirname,'../assets/public')));
  app.use('/', views);
};
