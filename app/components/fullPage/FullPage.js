'use strict';
import React from 'react';

class FullPage extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>{this.props.title}</title>
          <meta name="description" content=""/>
          <meta name="viewport" content="width=device-width"/>
          <link rel="stylesheet" href={"assets/"+this.props.hash+".app.css"}/>
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}/>
          <script id="initialProps" type="application/payload">{String(this.props.initialProps)}</script>
          <script src={"assets/"+this.props.hash+".vendor.js"}></script>
          <script src={"assets/"+this.props.hash+".app.js"}></script>
        </body>
      </html>
    );
  }
}

FullPage.propTypes = {
  title: React.PropTypes.string,
  markup: React.PropTypes.string,
  hash: React.PropTypes.string,
  initialData: React.PropTypes.string
};

export default FullPage;