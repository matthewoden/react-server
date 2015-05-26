'use strict';
//React
import React from 'react';
import Router from 'react-router';
import DocumentTitle from 'react-document-title';

import Routes from'../assets/prerender/app.js';
import Html from '../app/components/fullPage/';
import Stats  from '../app/stats.json';
// TODO Add in configurable for page types, pass that into html.
// Like app.use, but switching based on route param.

module.exports = function(req, res, next) {
  Router.run(Routes, req.url, function (Handler, state) {
    var title  = DocumentTitle.rewind();
    var markup = React.renderToString(<Handler />);
    var initialProps = {data:true}; //todo, fetch props, stringify.
    var html   = React.renderToStaticMarkup(<Html title={title} hash={Stats.hash} initialProps={JSON.stringify(initialProps)} markup={markup} />);
    res.send('<!DOCTYPE html>' + html);
  });
};

