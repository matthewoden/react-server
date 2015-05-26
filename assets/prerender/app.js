module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "number":
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(null, [a,b,c].concat(args));
					};
				}(modules[i]));
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var React = _interopRequire(__webpack_require__(3));

	var _reactRouter = __webpack_require__(11);

	var Route = _reactRouter.Route;
	var DefaultRoute = _reactRouter.DefaultRoute;
	var NotFoundRoute = _reactRouter.NotFoundRoute;

	//Components

	var Root = _interopRequire(__webpack_require__(12));

	var Home = _interopRequire(__webpack_require__(2));

	var PageOne = _interopRequire(__webpack_require__(25));

	var PageTwo = _interopRequire(__webpack_require__(26));

	module.exports = [React.createElement(
	  Route,
	  { handler: Root },
	  React.createElement(DefaultRoute, { name: "home", handler: Home }),
	  React.createElement(Route, { name: "pageone", handler: PageOne }),
	  React.createElement(Route, { name: "pagetwo", handler: PageTwo }),
	  React.createElement(NotFoundRoute, { handler: Home })
	)];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = _interopRequire(__webpack_require__(3));

	var Page = _interopRequire(__webpack_require__(4));

	var store = _interopRequire(__webpack_require__(10));

	var Home = (function (_React$Component) {
	  function Home() {
	    _classCallCheck(this, Home);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(Home, _React$Component);

	  _createClass(Home, {
	    render: {
	      value: function render() {
	        store("test", "what");
	        return React.createElement(
	          Page,
	          { title: "Home" },
	          React.createElement(
	            "div",
	            { className: "page__container" },
	            React.createElement(
	              "h1",
	              { className: "heading__page-title" },
	              "Home"
	            )
	          )
	        );
	      }
	    }
	  });

	  return Home;
	})(React.Component);

	module.exports = Home;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = _interopRequire(__webpack_require__(3));

	var DocumentTitle = _interopRequire(__webpack_require__(5));

	__webpack_require__(9);

	var Page = (function (_React$Component) {
	  function Page() {
	    _classCallCheck(this, Page);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(Page, _React$Component);

	  _createClass(Page, {
	    render: {
	      value: function render() {
	        return React.createElement(
	          DocumentTitle,
	          { title: this.props.title + (this.props.footer || " | React Seed") },
	          React.createElement(
	            "div",
	            { className: "page" },
	            this.props.children
	          )
	        );
	      }
	    }
	  });

	  return Page;
	})(React.Component);

	module.exports = Page;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(3),
	    createSideEffect = __webpack_require__(6);

	var _serverTitle = null;

	function getTitleFromPropsList(propsList) {
	  var innermostProps = propsList[propsList.length - 1];
	  if (innermostProps) {
	    return innermostProps.title;
	  }
	}

	var DocumentTitle = createSideEffect(function handleChange(propsList) {
	  var title = getTitleFromPropsList(propsList);

	  if (typeof document !== 'undefined') {
	    document.title = title || '';
	  } else {
	    _serverTitle = title || null;
	  }
	}, {
	  displayName: 'DocumentTitle',

	  propTypes: {
	    title: React.PropTypes.string.isRequired
	  },

	  statics: {
	    peek: function () {
	      return _serverTitle;
	    },

	    rewind: function () {
	      var title = _serverTitle;
	      this.dispose();
	      return title;
	    }
	  }
	});

	module.exports = DocumentTitle;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(3),
	    invariant = __webpack_require__(7),
	    shallowEqual = __webpack_require__(8);

	function createSideEffect(onChange, mixin) {
	  invariant(
	    typeof onChange === 'function',
	    'onChange(propsList) is a required argument.'
	  );

	  var mountedInstances = [];

	  function emitChange() {
	    onChange(mountedInstances.map(function (instance) {
	      return instance.props;
	    }));
	  }

	  return React.createClass({
	    mixins: [mixin],

	    statics: {
	      dispose: function () {
	        mountedInstances = [];
	        emitChange();
	      }
	    },

	    shouldComponentUpdate: function (nextProps) {
	      return !shallowEqual(nextProps, this.props);
	    },

	    componentWillMount: function () {
	      mountedInstances.push(this);
	      emitChange();
	    },

	    componentDidUpdate: function () {
	      emitChange();
	    },

	    componentWillUnmount: function () {
	      var index = mountedInstances.indexOf(this);
	      mountedInstances.splice(index, 1);
	      emitChange();
	    },

	    render: function () {
	      if (this.props.children) {
	        return React.Children.only(this.props.children);
	      } else {
	        return null;
	      }
	    }
	  });
	}

	module.exports = createSideEffect;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react/lib/invariant");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react/lib/shallowEqual");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// empty (null-loader)

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/*!
	 * Amplify Store - Persistent Client-Side Storage 1.1.2
	 *
	 * Copyright 2011 - 2013 appendTo LLC. (http://appendto.com/team)
	 * Dual licensed under the MIT or GPL licenses.
	 * http://appendto.com/open-source-licenses
	 *
	 * http://amplifyjs.com
	 */


	 var store = function( key, value, options ) {
	  var type = store.type;
	  if ( options && options.type && options.type in store.types ) {
	    type = options.type;
	  }
	  return store.types[ type ]( key, value, options || {} );
	};

	store.types = {};
	store.type = null;
	store.addType = function( type, storage ) {
	  if ( !store.type ) {
	    store.type = type;
	  }

	  store.types[ type ] = storage;
	  store[ type ] = function( key, value, options ) {
	    options = options || {};
	    options.type = type;
	    return store( key, value, options );
	  };
	};
	store.error = function() {
	  return "amplify.store quota exceeded";
	};

	var rprefix = /^__amplify__/;
	function createFromStorageInterface( storageType, storage ) {
	  store.addType( storageType, function( key, value, options ) {
	    var storedValue, parsed, i, remove,
	    ret = value,
	    now = (new Date()).getTime();

	    if ( !key ) {
	      ret = {};
	      remove = [];
	      i = 0;
	      try {
	        // accessing the length property works around a localStorage bug
	        // in Firefox 4.0 where the keys don't update cross-page
	        // we assign to key just to avoid Closure Compiler from removing
	        // the access as "useless code"
	        // https://bugzilla.mozilla.org/show_bug.cgi?id=662511
	        key = storage.length;

	        while ( key = storage.key( i++ ) ) {
	          if ( rprefix.test( key ) ) {
	            parsed = JSON.parse( storage.getItem( key ) );
	            if ( parsed.expires && parsed.expires <= now ) {
	              remove.push( key );
	            } else {
	              ret[ key.replace( rprefix, "" ) ] = parsed.data;
	            }
	          }
	        }
	        while ( key = remove.pop() ) {
	          storage.removeItem( key );
	        }
	      } catch ( error ) {}
	      return ret;
	    }

	    // protect against name collisions with direct storage
	    key = "__amplify__" + key;

	    if ( value === undefined ) {
	      storedValue = storage.getItem( key );
	      parsed = storedValue ? JSON.parse( storedValue ) : { expires: -1 };
	      if ( parsed.expires && parsed.expires <= now ) {
	        storage.removeItem( key );
	      } else {
	        return parsed.data;
	      }
	    } else {
	      if ( value === null ) {
	        storage.removeItem( key );
	      } else {
	        parsed = JSON.stringify({
	          data: value,
	          expires: options.expires ? now + options.expires : null
	        });
	        try {
	          storage.setItem( key, parsed );
	        // quota exceeded
	      } catch( error ) {
	          // expire old data and try again
	          store[ storageType ]();
	          try {
	            storage.setItem( key, parsed );
	          } catch( error ) {
	            throw store.error();
	          }
	        }
	      }
	    }

	    return ret;
	  });
	}

	// localStorage + sessionStorage
	// IE 8+, Firefox 3.5+, Safari 4+, Chrome 4+, Opera 10.5+, iPhone 2+, Android 2+
	for ( var webStorageType in { localStorage: 1, sessionStorage: 1 } ) {
	  // try/catch for file protocol in Firefox and Private Browsing in Safari 5
	  try {
	    // Safari 5 in Private Browsing mode exposes localStorage
	    // but doesn't allow storing data, so we attempt to store and remove an item.
	    // This will unfortunately give us a false negative if we're at the limit.
	    if(typeof window !== 'undefined') {
	      window[ webStorageType ].setItem( "__amplify__", "x" );
	      window[ webStorageType ].removeItem( "__amplify__" );
	      createFromStorageInterface( webStorageType, window[ webStorageType ] );
	    }
	  } catch( e ) {}
	}

	// globalStorage
	// non-standard: Firefox 2+
	// https://developer.mozilla.org/en/dom/storage#globalStorage
	if (typeof window !== 'undefined' && !store.types.localStorage && window.globalStorage ) {
	  // try/catch for file protocol in Firefox
	  try {
	    createFromStorageInterface( "globalStorage",
	      window.globalStorage[ window.location.hostname ] );
	    // Firefox 2.0 and 3.0 have sessionStorage and globalStorage
	    // make sure we default to globalStorage
	    // but don't default to globalStorage in 3.5+ which also has localStorage
	    if ( store.type === "sessionStorage" ) {
	      store.type = "globalStorage";
	    }
	  } catch( e ) {}
	}

	// userData
	// non-standard: IE 5+
	// http://msdn.microsoft.com/en-us/library/ms531424(v=vs.85).aspx
	(function() {
	  // IE 9 has quirks in userData that are a huge pain
	  // rather than finding a way to detect these quirks
	  // we just don't register userData if we have localStorage
	  if ( store.types.localStorage || typeof window == 'undefined' ) {
	    return;
	  }

	  // append to html instead of body so we can do this from the head
	  var div = document.createElement( "div" ),
	  attrKey = "amplify";
	  div.style.display = "none";
	  document.getElementsByTagName( "head" )[ 0 ].appendChild( div );

	  // we can't feature detect userData support
	  // so just try and see if it fails
	  // surprisingly, even just adding the behavior isn't enough for a failure
	  // so we need to load the data as well
	  try {
	    div.addBehavior( "#default#userdata" );
	    div.load( attrKey );
	  } catch( e ) {
	    div.parentNode.removeChild( div );
	    return;
	  }

	  store.addType( "userData", function( key, value, options ) {
	    div.load( attrKey );
	    var attr, parsed, prevValue, i, remove,
	    ret = value,
	    now = (new Date()).getTime();

	    if ( !key ) {
	      ret = {};
	      remove = [];
	      i = 0;
	      while ( attr = div.XMLDocument.documentElement.attributes[ i++ ] ) {
	        parsed = JSON.parse( attr.value );
	        if ( parsed.expires && parsed.expires <= now ) {
	          remove.push( attr.name );
	        } else {
	          ret[ attr.name ] = parsed.data;
	        }
	      }
	      while ( key = remove.pop() ) {
	        div.removeAttribute( key );
	      }
	      div.save( attrKey );
	      return ret;
	    }

	    // convert invalid characters to dashes
	    // http://www.w3.org/TR/REC-xml/#NT-Name
	    // simplified to assume the starting character is valid
	    // also removed colon as it is invalid in HTML attribute names
	    key = key.replace( /[^\-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g, "-" );
	    // adjust invalid starting character to deal with our simplified sanitization
	    key = key.replace( /^-/, "_-" );

	    if ( value === undefined ) {
	      attr = div.getAttribute( key );
	      parsed = attr ? JSON.parse( attr ) : { expires: -1 };
	      if ( parsed.expires && parsed.expires <= now ) {
	        div.removeAttribute( key );
	      } else {
	        return parsed.data;
	      }
	    } else {
	      if ( value === null ) {
	        div.removeAttribute( key );
	      } else {
	        // we need to get the previous value in case we need to rollback
	        prevValue = div.getAttribute( key );
	        parsed = JSON.stringify({
	          data: value,
	          expires: (options.expires ? (now + options.expires) : null)
	        });
	        div.setAttribute( key, parsed );
	      }
	    }

	    try {
	      div.save( attrKey );
	    // quota exceeded
	  } catch ( error ) {
	      // roll the value back to the previous value
	      if ( prevValue === null ) {
	        div.removeAttribute( key );
	      } else {
	        div.setAttribute( key, prevValue );
	      }

	      // expire old data and try again
	      store.userData();
	      try {
	        div.setAttribute( key, parsed );
	        div.save( attrKey );
	      } catch ( error ) {
	        // roll the value back to the previous value
	        if ( prevValue === null ) {
	          div.removeAttribute( key );
	        } else {
	          div.setAttribute( key, prevValue );
	        }
	        throw store.error();
	      }
	    }
	    return ret;
	  });
	}() );

	// in-memory storage
	// fallback for all browsers to enable the API even if we can't persist data
	(function() {
	  var memory = {},
	  timeout = {};

	  function copy( obj ) {
	    return obj === undefined ? undefined : JSON.parse( JSON.stringify( obj ) );
	  }

	  store.addType( "memory", function( key, value, options ) {
	    if ( !key ) {
	      return copy( memory );
	    }

	    if ( value === undefined ) {
	      return copy( memory[ key ] );
	    }

	    if ( timeout[ key ] ) {
	      clearTimeout( timeout[ key ] );
	      delete timeout[ key ];
	    }

	    if ( value === null ) {
	      delete memory[ key ];
	      return null;
	    }

	    memory[ key ] = value;
	    if ( options.expires ) {
	      timeout[ key ] = setTimeout(function() {
	        delete memory[ key ];
	        delete timeout[ key ];
	      }, options.expires );
	    }

	    return value;
	  });
	}() );

	module.exports = store;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react-router");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = _interopRequire(__webpack_require__(3));

	var ReactCSSTransitionGroup = _interopRequire(__webpack_require__(13));

	var Navigation = _interopRequire(__webpack_require__(14));

	var RouteHandler = __webpack_require__(11).RouteHandler;

	__webpack_require__(23);

	__webpack_require__(24);

	var App = (function (_React$Component) {
	  function App() {
	    _classCallCheck(this, App);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(App, _React$Component);

	  _createClass(App, {
	    render: {
	      value: function render() {
	        return React.createElement(
	          "div",
	          null,
	          React.createElement(Navigation, null),
	          React.createElement(
	            ReactCSSTransitionGroup,
	            { transitionName: "route" },
	            React.createElement(RouteHandler, null)
	          )
	        );
	      }
	    }
	  });

	  return App;
	})(React.Component);

	module.exports = App;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react/lib/ReactCSSTransitionGroup");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = _interopRequire(__webpack_require__(3));

	var Link = __webpack_require__(11).Link;

	var NavigationMenuControl = _interopRequire(__webpack_require__(18));

	var NavigationMenu = _interopRequire(__webpack_require__(15));

	var NavigationMenuItem = _interopRequire(__webpack_require__(20));

	__webpack_require__(22);

	var Navigation = (function (_React$Component) {
	  function Navigation(props) {
	    _classCallCheck(this, Navigation);

	    _get(Object.getPrototypeOf(Navigation.prototype), "constructor", this).call(this, props);
	    this.state = { open: false };
	    this.handleMenuToggle = this.handleMenuToggle.bind(this);
	    this.closeMenu = this.closeMenu.bind(this);
	  }

	  _inherits(Navigation, _React$Component);

	  _createClass(Navigation, {
	    handleMenuToggle: {
	      value: function handleMenuToggle() {
	        this.setState({ open: !this.state.open });
	      }
	    },
	    closeMenu: {
	      value: function closeMenu() {
	        this.setState({ open: false });
	      }
	    },
	    render: {
	      value: function render() {
	        return React.createElement(
	          "div",
	          { className: "navigation" },
	          React.createElement(
	            "div",
	            { className: "navigation__wrapper" },
	            React.createElement(
	              NavigationMenuControl,
	              { onMenuToggle: this.handleMenuToggle, open: this.state.open },
	              "React Seed 1.0"
	            ),
	            React.createElement(
	              Link,
	              { onClick: this.closeMenu, className: "navigation__brand", to: "/" },
	              "React Seed 1.0"
	            ),
	            React.createElement(
	              NavigationMenu,
	              { open: this.state.open, brand: "React Seed 1.0" },
	              React.createElement(
	                NavigationMenuItem,
	                { onMenuToggle: this.closeMenu, linkTo: "pageone" },
	                "Page One"
	              ),
	              React.createElement(
	                NavigationMenuItem,
	                { onMenuToggle: this.closeMenu, linkTo: "pagetwo" },
	                "Page Two"
	              )
	            ),
	            React.createElement("div", { className: "navigation__clearfix" })
	          )
	        );
	      }
	    }
	  });

	  return Navigation;
	})(React.Component);

	module.exports = Navigation;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = _interopRequire(__webpack_require__(3));

	var classNames = _interopRequire(__webpack_require__(16));

	__webpack_require__(17);

	var NavigationMenu = (function (_React$Component) {
	  function NavigationMenu(props) {
	    _classCallCheck(this, NavigationMenu);

	    _get(Object.getPrototypeOf(NavigationMenu.prototype), "constructor", this).call(this, props);
	    this.handleClick = this.handleClick.bind(this);
	  }

	  _inherits(NavigationMenu, _React$Component);

	  _createClass(NavigationMenu, {
	    handleClick: {
	      value: function handleClick() {
	        if (this.props.menuToggle) {
	          this.props.menuToggle();
	        }
	      }
	    },
	    render: {
	      value: function render() {
	        var classes = classNames({
	          "navigation-menu": true,
	          "navigation-menu--open": this.props.open
	        });

	        return React.createElement(
	          "div",
	          { className: classes },
	          React.createElement("div", { className: "navigation-menu__icon" }),
	          this.props.children
	        );
	      }
	    }
	  });

	  return NavigationMenu;
	})(React.Component);

	NavigationMenu.defaultProps = {
	  open: false
	};

	NavigationMenu.propTypes = {
	  open: React.PropTypes.bool
	};

	module.exports = NavigationMenu;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	function classNames() {
		var classes = '';
		var arg;

		for (var i = 0; i < arguments.length; i++) {
			arg = arguments[i];
			if (!arg) {
				continue;
			}

			if ('string' === typeof arg || 'number' === typeof arg) {
				classes += ' ' + arg;
			} else if (Object.prototype.toString.call(arg) === '[object Array]') {
				classes += ' ' + classNames.apply(null, arg);
			} else if ('object' === typeof arg) {
				for (var key in arg) {
					if (!arg.hasOwnProperty(key) || !arg[key]) {
						continue;
					}
					classes += ' ' + key;
				}
			}
		}
		return classes.substr(1);
	}

	// safely export classNames for node / browserify
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	}

	// safely export classNames for RequireJS
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}


/***/ },
/* 17 */
9,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = _interopRequire(__webpack_require__(3));

	var classNames = _interopRequire(__webpack_require__(16));

	__webpack_require__(19);

	var NavigationMenuControl = (function (_React$Component) {
	  function NavigationMenuControl(props) {
	    _classCallCheck(this, NavigationMenuControl);

	    _get(Object.getPrototypeOf(NavigationMenuControl.prototype), "constructor", this).call(this, props);
	    this.handleClick = this.handleClick.bind(this);
	  }

	  _inherits(NavigationMenuControl, _React$Component);

	  _createClass(NavigationMenuControl, {
	    handleClick: {
	      value: function handleClick() {
	        if (this.props.onMenuToggle) {
	          this.props.onMenuToggle();
	        }
	      }
	    },
	    render: {
	      value: function render() {
	        var classes = classNames({
	          "navigation-menu-control__icon": true,
	          "navigation-menu-control__icon--active": this.props.open
	        });

	        return React.createElement(
	          "div",
	          { className: "navigation-menu-control" },
	          React.createElement(
	            "div",
	            { className: classes, onClick: this.handleClick },
	            React.createElement("div", { className: "navigation-menu-control__icon__inner" })
	          )
	        );
	      }
	    }
	  });

	  return NavigationMenuControl;
	})(React.Component);

	module.exports = NavigationMenuControl;

/***/ },
/* 19 */
9,
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = _interopRequire(__webpack_require__(3));

	var Link = __webpack_require__(11).Link;

	__webpack_require__(21);

	var NavigationItem = (function (_React$Component) {
	  function NavigationItem(props) {
	    _classCallCheck(this, NavigationItem);

	    _get(Object.getPrototypeOf(NavigationItem.prototype), "constructor", this).call(this, props);
	    this.handleClick = this.handleClick.bind(this);
	  }

	  _inherits(NavigationItem, _React$Component);

	  _createClass(NavigationItem, {
	    handleClick: {
	      value: function handleClick() {
	        if (this.props.onMenuToggle) {
	          this.props.onMenuToggle();
	        }
	      }
	    },
	    render: {
	      value: function render() {
	        return React.createElement(
	          Link,
	          {
	            activeClassName: "navigation-menu-item--active",
	            className: "navigation-menu-item",
	            onClick: this.handleClick,
	            to: this.props.linkTo },
	          this.props.children
	        );
	      }
	    }
	  });

	  return NavigationItem;
	})(React.Component);

	NavigationItem.defaultProps = {
	  brand: false
	};

	NavigationItem.propTypes = {
	  brand: React.PropTypes.bool,
	  linkTo: React.PropTypes.string.isRequired };

	module.exports = NavigationItem;

/***/ },
/* 21 */
9,
/* 22 */
9,
/* 23 */
9,
/* 24 */
9,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = _interopRequire(__webpack_require__(3));

	var Page = _interopRequire(__webpack_require__(4));

	var PageOne = (function (_React$Component) {
	  function PageOne() {
	    _classCallCheck(this, PageOne);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(PageOne, _React$Component);

	  _createClass(PageOne, {
	    render: {
	      value: function render() {
	        return React.createElement(
	          Page,
	          { title: "Page One" },
	          React.createElement(
	            "div",
	            { className: "page__container" },
	            React.createElement(
	              "h1",
	              { className: "heading__page-title" },
	              "Page One"
	            )
	          )
	        );
	      }
	    }
	  });

	  return PageOne;
	})(React.Component);

	module.exports = PageOne;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = _interopRequire(__webpack_require__(3));

	var Page = _interopRequire(__webpack_require__(4));

	var PageTwo = (function (_React$Component) {
	  function PageTwo() {
	    _classCallCheck(this, PageTwo);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(PageTwo, _React$Component);

	  _createClass(PageTwo, {
	    render: {
	      value: function render() {
	        return React.createElement(
	          Page,
	          { title: "Page Two" },
	          React.createElement(
	            "div",
	            { className: "page__container" },
	            React.createElement(
	              "h1",
	              { className: "heading__page-title" },
	              "Page Two"
	            )
	          )
	        );
	      }
	    }
	  });

	  return PageTwo;
	})(React.Component);

	module.exports = PageTwo;

/***/ }
/******/ ])));