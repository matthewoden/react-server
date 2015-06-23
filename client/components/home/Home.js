'use strict';

import React from 'react';
import Page from '../page/';
import pageStyles from '../page/page.css';
import type from '../global/typography.css';

export default class Home extends React.Component {
    displayName: 'Home';
    render() {
      return (
        <Page title="Home">
         <div className={pageStyles.container}>
              <h1 className={type.pageTitle}>Home</h1>
          </div>
        </Page>
      );
    }
}