var mongoose     = require('mongoose');
var config = require('./config/environment');

module.exports = function(){

  mongoose.connect(config.mongo.uri, function(err){
    if (err){
      throw err;
    }
  });

  mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + config.mongo.uri);
  });

  mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
  });

  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
  });


  process.on('SIGINT', function() {
    mongoose.connection.close(function () {
      console.log('Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
  });
}