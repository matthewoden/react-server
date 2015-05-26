'use strict';
import React  from 'react';
import Router from 'react-router';
import Routes from './Routes';


document.addEventListener("DOMContentLoaded", function() {
  var initialProps = JSON.parse(document.getElementById('initialProps').textContent);
  Router.run(Routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler {...initialProps}/>, document.getElementById('app'));
  });
});
