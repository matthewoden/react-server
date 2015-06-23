'use strict';
import './components/global/normalize.css';
import './components/global/typography.css';

import React  from 'react';
import Router from 'react-router';
import Routes from './routes';


document.addEventListener("DOMContentLoaded", function() {
  Router.run(Routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
  });
});
