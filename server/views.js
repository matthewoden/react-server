'use strict';
//React
import fs from 'fs';
import React from 'react';
import Router from 'react-router';
import DocumentTitle from 'react-document-title';

import Routes from '../assets/prerender/app';
import Html from '../client/components/fullPage/';
import Stats  from '../client/stats.json';
// TODO Add in configurable for page types, pass that into html.
// Like app.use, but switching based on route param.

let css = '';
fs.readFile('./assets/public/' + Stats.hash + '.common.css', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  css = data;
});

module.exports = function(req, res, next) {
  Router.run(Routes, req.url, function (Handler, state) {
    var title  = DocumentTitle.rewind();
    var markup = React.renderToString(<Handler />);
    var initialProps = {data:true}; //todo, fetch props, stringify.
    var html   = React.renderToStaticMarkup(<Html
                                              title={title}
                                              hash={Stats.hash}
                                              css={css}
                                              initialProps={JSON.stringify(initialProps)}
                                              markup={markup} />);
    res.send('<!DOCTYPE html>' + html);
  });
};

