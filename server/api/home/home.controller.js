'use strict';

var mongoose     = require('mongoose');
var config = require('../../config/environment');

exports.index = function(req, res) {
  res.json({response:'hello!'});
};