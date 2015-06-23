'use strict';

module.exports ={
client: {
  common: [
  './client/components/app/',
  'react',
  'react-router',
  'amplify-store'
  ],
  app: ['./client/bootstrap.js'],
  },
  server: {
    app: [ './client/routes.js'],
  },
};
