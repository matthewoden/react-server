'use strict';
//React
import fs from 'fs';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import routes from '../assets/prerender/app';
//import routes from '../client/routes';

import DocumentTitle from 'react-document-title';
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
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        var title  = DocumentTitle.rewind();
        var markup = renderToString(<RoutingContext {...renderProps} />);
        var initialProps = {data:true}; //todo, fetch props, stringify.
        var html   =  renderToStaticMarkup(<Html
                                              title={title}
                                              hash={Stats.hash}
                                              css={css}
                                              initialProps={JSON.stringify(initialProps)}
                                              markup={markup} />);

        res.status(200).send('<!DOCTYPE html>' + html)
      } else {
        res.status(404).send('Not found')
      }
    })
};
