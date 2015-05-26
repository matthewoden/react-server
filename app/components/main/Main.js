'use strict';

import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import Navigation from '../navigation/';
import { RouteHandler } from 'react-router';

import './normalize.scss';
import './main.scss';

class Main extends React.Component{
    render() {
        return (
          <div>
            <Navigation/>
            <ReactCSSTransitionGroup transitionName="route">
              <RouteHandler/>
            </ReactCSSTransitionGroup>
          </div>
        );
    }
}

export default Main;
