'use strict';
//Custom Plugins and Utilities

//All Environments:
//Return object for environment
var env = function(config) {
  var NODE_ENV = process.env.NODE_ENV;
  return config[NODE_ENV];
};

// when compile is finished, write stats.
var makeStats = function() {
  this.plugin('done', function(stats) {
    require('fs').writeFileSync(
      './client/stats.json',
      JSON.stringify({
        hash: stats.toJson().hash
      }));
  });
};

module.exports = {
  makeStats: makeStats,
  env: env
};
