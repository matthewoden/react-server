webpackJsonp([4],{3:function(e,n,t){"use strict";var i=t(2),r=t(30),o=i.createClass({displayName:"Home",componentDidMount:function(){setInterval(function(){console.log("Sucessfully rendered view in the browser")},1e3)},render:function(){return i.createElement(r,{title:"Home | React Seed"},i.createElement("section",null,i.createElement("h2",null,"Home")))}});e.exports=o},30:function(e,n,t){"use strict";function i(e){var n=e[e.length-1];return n?n.title:void 0}var r=t(2),o=t(145),s=null,a=o(function(e){var n=i(e);"undefined"!=typeof document?document.title=n||"":s=n||null},{displayName:"DocumentTitle",propTypes:{title:r.PropTypes.string.isRequired},statics:{peek:function(){return s},rewind:function(){var e=s;return this.dispose(),e}}});e.exports=a},145:function(e,n,t){"use strict";function i(e,n){function t(){e(i.map(function(e){return e.props}))}o("function"==typeof e,"onChange(propsList) is a required argument.");var i=[];return r.createClass({mixins:[n],statics:{dispose:function(){i=[],t()}},shouldComponentUpdate:function(e){return!s(e,this.props)},componentWillMount:function(){i.push(this),t()},componentDidUpdate:function(){t()},componentWillUnmount:function(){var e=i.indexOf(this);i.splice(e,1),t()},render:function(){return this.props.children?r.Children.only(this.props.children):null}})}var r=t(2),o=t(71),s=t(182);e.exports=i}});