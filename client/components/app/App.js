'use strict';
import './app.css';

import React from 'react';
import Navigation from '../navigation/';

class App extends React.Component{
    render() {
        return (
          <div>
            <Navigation/>
            {this.props.children}
          </div>
        );
    }
}

export default App;
