'use strict';
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory, createMemoryHistory } from 'history';
//Components
var App = require('./components/app/');
var Home = require('./components/home/');
var PageOne =  require('./components/pageOne/');
var PageTwo = require('./components/pageTwo/');

var history = typeof window === 'undefined' ? createMemoryHistory : createHistory;


export default (
  <Router history={ history() }>
    <Route component={ App } path="/" >
      <IndexRoute component={ Home } />
      <Route path="/pageone" component={ PageOne } />
      <Route path="/pagetwo" component={ PageTwo } />
    </Route>
  </Router>
);
