'use strict';

import React from 'react';
import Page from '../page/';
import pageStyles from '../page/page.css';
import type from '../global/typography.css';

export default class PageTwo extends React.Component {
    displayName: 'pageTwo';
    render() {
        return (
          <Page title="Page Two">
          <div className={pageStyles.container}>
              <h1 className={type.pageTitle}>Page Two</h1>
            </div>
          </Page>
        );
    }
}
