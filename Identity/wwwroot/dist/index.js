/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = vendor_a8cd3aec20481e865bc0;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(0);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(35);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(2);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(3);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(4);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(439);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(87);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(440);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(8);

var _reactBootstrap = __webpack_require__(51);

var _LinkContainer = __webpack_require__(19);

var _LinkContainer2 = _interopRequireDefault(_LinkContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bar = function (_Component) {
  (0, _inherits3.default)(Bar, _Component);

  function Bar() {
    (0, _classCallCheck3.default)(this, Bar);
    return (0, _possibleConstructorReturn3.default)(this, (Bar.__proto__ || Object.getPrototypeOf(Bar)).apply(this, arguments));
  }

  (0, _createClass3.default)(Bar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isAuthenticated = _props.isAuthenticated,
          userName = _props.userName;

      return _react2.default.createElement(
        _reactBootstrap.Navbar,
        { inverse: true, fixedTop: true },
        _react2.default.createElement(
          _reactBootstrap.Navbar.Header,
          null,
          _react2.default.createElement(
            _reactBootstrap.Navbar.Brand,
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Identity'
            )
          ),
          _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
        ),
        _react2.default.createElement(
          _reactBootstrap.Navbar.Collapse,
          null,
          _react2.default.createElement(
            _reactBootstrap.Nav,
            null,
            _react2.default.createElement(
              _LinkContainer2.default,
              { to: '/admin/users' },
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                null,
                'Users'
              )
            ),
            _react2.default.createElement(
              _LinkContainer2.default,
              { to: '/admin/clients' },
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                null,
                'Clients'
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Nav,
            { pullRight: true },
            isAuthenticated ? _react2.default.createElement(
              _reactBootstrap.NavDropdown,
              { eventKey: 3, title: userName, id: 'basic-nav-dropdown' },
              _react2.default.createElement(
                _reactBootstrap.MenuItem,
                { eventKey: 3.1 },
                'Action'
              ),
              _react2.default.createElement(
                _reactBootstrap.MenuItem,
                { eventKey: 3.2 },
                'Another action'
              ),
              _react2.default.createElement(
                _reactBootstrap.MenuItem,
                { eventKey: 3.3 },
                'Something else here'
              ),
              _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                { eventKey: 1, href: '/account/login' },
                'Logout'
              )
            ) : _react2.default.createElement(
              _reactBootstrap.NavItem,
              { href: '/account/login' },
              'Login'
            )
          )
        )
      );
    }
  }]);
  return Bar;
}(_react.Component);

exports.default = Bar;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;
exports.requestLogin = requestLogin;

var _axios = __webpack_require__(50);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Actions
var REQUEST_LOGIN = 'identity/auth/REQUEST_LOGIN';

// Reducer
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { token: null, userName: null, isAuthenticated: false };
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    // do reducer stuff
    default:
      return state;
  }
}

// Action Creators

function requestLogin(values) {
  return { type: REQUEST_LOGIN, values: values };
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(128);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(441);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _reduxThunk = __webpack_require__(53);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _redux = __webpack_require__(11);

var _reduxLogger = __webpack_require__(52);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reactRouterRedux = __webpack_require__(6);

var _modules = __webpack_require__(34);

var _modules2 = _interopRequireDefault(_modules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(initialState, history) {
  var logger = (0, _reduxLogger2.default)();

  var router = (0, _reactRouterRedux.routerMiddleware)(history);

  var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, logger, router);

  var composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose; // eslint-disable-line no-underscore-dangle, no-undef

  var store = (0, _redux.createStore)(_modules2.default, initialState, composeEnhancers(middleware));
  console.log('state', store.getState());
  if (false) {
    module.hot.accept('./modules', function () {
      var nextRootReducer = require('./modules/index'); // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(8);

var _containers = __webpack_require__(33);

var _AuthenticatedComponent = __webpack_require__(18);

var _AuthenticatedComponent2 = _interopRequireDefault(_AuthenticatedComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = function routes() {
  return (
    /**
       * Please keep routes in alphabetical order
       */
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/', component: _containers.App },
      _react2.default.createElement(
        _reactRouter.Route,
        { path: 'account' },
        _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _containers.Login }),
        _react2.default.createElement(_reactRouter.Route, { path: 'register', component: _containers.Register }),
        _react2.default.createElement(_reactRouter.Route, { path: 'forgotPassword', component: _containers.ForgotPassword })
      ),
      _react2.default.createElement(
        _reactRouter.Route,
        { path: 'admin', component: _containers.Admin },
        _react2.default.createElement(
          _reactRouter.Route,
          { path: 'users', component: (0, _AuthenticatedComponent2.default)(_containers.UserList) },
          _react2.default.createElement(_reactRouter.Route, { path: 'new', component: _containers.UserCreate }),
          _react2.default.createElement(_reactRouter.Route, { path: ':id', component: _containers.UserEdit })
        ),
        _react2.default.createElement(
          _reactRouter.Route,
          { path: 'clients', component: _containers.ClientList },
          _react2.default.createElement(_reactRouter.Route, { path: 'new', component: _containers.ClientCreate }),
          _react2.default.createElement(_reactRouter.Route, { path: ':id', component: _containers.ClientEdit })
        )
      ),
      _react2.default.createElement(_reactRouter.Route, { path: '*', component: _containers.NotFound, status: 404 })
    )
  );
};

exports.default = routes;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(33);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(433);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(435);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = requireAuthentication;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _reactRouterRedux = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function requireAuthentication(Component) {
  var AuthenticatedComponent = function (_React$Component) {
    (0, _inherits3.default)(AuthenticatedComponent, _React$Component);

    function AuthenticatedComponent() {
      (0, _classCallCheck3.default)(this, AuthenticatedComponent);
      return (0, _possibleConstructorReturn3.default)(this, (AuthenticatedComponent.__proto__ || Object.getPrototypeOf(AuthenticatedComponent)).apply(this, arguments));
    }

    (0, _createClass3.default)(AuthenticatedComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.checkAuth();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.checkAuth();
      }
    }, {
      key: 'checkAuth',
      value: function checkAuth() {
        if (!this.props.isAuthenticated) {
          var redirectAfterLogin = this.props.location.pathname;
          this.props.dispatch((0, _reactRouterRedux.push)('/account/login?next=' + redirectAfterLogin));
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          this.props.isAuthenticated === true ? _react2.default.createElement(Component, this.props) : null
        );
      }
    }]);
    return AuthenticatedComponent;
  }(_react2.default.Component);

  var mapStateToProps = function mapStateToProps(state) {
    return {
      token: state.auth.token,
      userName: state.auth.userName,
      isAuthenticated: state.auth.isAuthenticated
    };
  };

  return (0, _reactRedux.connect)(mapStateToProps)(AuthenticatedComponent);
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(55);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isLeftClickEvent(event) {
  return event.button === 0;
} // This is largely taken from react-router/lib/Link.

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

function createLocationDescriptor(to, query, hash, state) {
  if (query || hash || state) {
    return { pathname: to, query: query, hash: hash, state: state };
  }

  return to;
}

var propTypes = {
  onlyActiveOnIndex: _react2.default.PropTypes.bool.isRequired,
  to: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object]).isRequired,
  query: _react2.default.PropTypes.string,
  hash: _react2.default.PropTypes.string,
  state: _react2.default.PropTypes.object,
  action: _react2.default.PropTypes.oneOf(['push', 'replace']).isRequired,
  onClick: _react2.default.PropTypes.func,
  active: _react2.default.PropTypes.bool,
  target: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node.isRequired
};

var contextTypes = {
  router: _react2.default.PropTypes.object
};

var defaultProps = {
  onlyActiveOnIndex: false,
  action: 'push'
};

var LinkContainer = function (_React$Component) {
  (0, _inherits3.default)(LinkContainer, _React$Component);

  function LinkContainer(props) {
    (0, _classCallCheck3.default)(this, LinkContainer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LinkContainer.__proto__ || Object.getPrototypeOf(LinkContainer)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(LinkContainer, [{
    key: 'onClick',
    value: function onClick(event) {
      var _props = this.props,
          to = _props.to,
          query = _props.query,
          hash = _props.hash,
          state = _props.state,
          children = _props.children,
          onClick = _props.onClick,
          target = _props.target,
          action = _props.action;


      if (children.props.onClick) {
        children.props.onClick(event);
      }

      if (onClick) {
        onClick(event);
      }

      if (target || event.defaultPrevented || isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      event.preventDefault();

      this.context.router[action](createLocationDescriptor(to, query, hash, state));
    }
  }, {
    key: 'render',
    value: function render() {
      var router = this.context.router;
      var _props2 = this.props,
          onlyActiveOnIndex = _props2.onlyActiveOnIndex,
          to = _props2.to,
          children = _props2.children,
          props = (0, _objectWithoutProperties3.default)(_props2, ['onlyActiveOnIndex', 'to', 'children']);


      props.onClick = this.onClick;

      // Ignore if rendered outside Router context; simplifies unit testing.
      if (router) {
        props.href = router.createHref(to);

        if (props.active === null) {
          props.active = router.isActive(to, onlyActiveOnIndex);
        }
      }

      return _react2.default.cloneElement(_react2.default.Children.only(children), props);
    }
  }]);
  return LinkContainer;
}(_react2.default.Component);

LinkContainer.propTypes = propTypes;
LinkContainer.contextTypes = contextTypes;
LinkContainer.defaultProps = defaultProps;

exports.default = LinkContainer;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginForm = function LoginForm(_ref) {
  var handleSubmit = _ref.handleSubmit;
  return _react2.default.createElement(
    'form',
    { onSubmit: handleSubmit },
    _react2.default.createElement(
      'div',
      { className: 'form-group' },
      _react2.default.createElement(
        'label',
        { htmlFor: 'email' },
        'Email'
      ),
      _react2.default.createElement(_reduxForm.Field, { name: 'email', className: 'form-control', component: 'input', type: 'text' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'form-group' },
      _react2.default.createElement(
        'label',
        { htmlFor: 'password' },
        'Password'
      ),
      _react2.default.createElement(_reduxForm.Field, {
        name: 'password',
        className: 'form-control',
        component: 'input',
        type: 'password'
      })
    ),
    _react2.default.createElement(
      'button',
      { type: 'submit', className: 'btn btn-primary' },
      'Login'
    )
  );
};

// Decorate the form component
exports.default = (0, _reduxForm.reduxForm)({
  form: 'login' })(LoginForm);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _classnames = __webpack_require__(57);

var _classnames2 = _interopRequireDefault(_classnames);

var _Bar = __webpack_require__(9);

var _Bar2 = _interopRequireDefault(_Bar);

var _Admin = __webpack_require__(38);

var _Admin2 = _interopRequireDefault(_Admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Admin = function Admin(_ref) {
  var children = _ref.children,
      isAuthenticated = _ref.isAuthenticated,
      userName = _ref.userName;
  return _react2.default.createElement(
    'div',
    { className: _Admin2.default.root },
    _react2.default.createElement(_Bar2.default, { isAuthenticated: isAuthenticated, userName: userName }),
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(_Admin2.default.container, 'container') },
      children
    )
  );
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    userName: state.auth.userName,
    children: ownProps.children
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(Admin);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(39);

var _App2 = _interopRequireDefault(_App);

var _Bar = __webpack_require__(9);

var _Bar2 = _interopRequireDefault(_Bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);
    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _App2.default.root },
        this.props.children
      );
    }
  }]);
  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ClientCreate = __webpack_require__(40);

var _ClientCreate2 = _interopRequireDefault(_ClientCreate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClientCreate = function (_Component) {
  (0, _inherits3.default)(ClientCreate, _Component);

  function ClientCreate() {
    (0, _classCallCheck3.default)(this, ClientCreate);
    return (0, _possibleConstructorReturn3.default)(this, (ClientCreate.__proto__ || Object.getPrototypeOf(ClientCreate)).apply(this, arguments));
  }

  (0, _createClass3.default)(ClientCreate, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _ClientCreate2.default.root },
        '404'
      );
    }
  }]);
  return ClientCreate;
}(_react.Component);

exports.default = ClientCreate;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ClientEdit = __webpack_require__(41);

var _ClientEdit2 = _interopRequireDefault(_ClientEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClientEdit = function (_Component) {
  (0, _inherits3.default)(ClientEdit, _Component);

  function ClientEdit() {
    (0, _classCallCheck3.default)(this, ClientEdit);
    return (0, _possibleConstructorReturn3.default)(this, (ClientEdit.__proto__ || Object.getPrototypeOf(ClientEdit)).apply(this, arguments));
  }

  (0, _createClass3.default)(ClientEdit, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _ClientEdit2.default.root },
        '404'
      );
    }
  }]);
  return ClientEdit;
}(_react.Component);

exports.default = ClientEdit;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ClientList = __webpack_require__(42);

var _ClientList2 = _interopRequireDefault(_ClientList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClientList = function (_Component) {
  (0, _inherits3.default)(ClientList, _Component);

  function ClientList() {
    (0, _classCallCheck3.default)(this, ClientList);
    return (0, _possibleConstructorReturn3.default)(this, (ClientList.__proto__ || Object.getPrototypeOf(ClientList)).apply(this, arguments));
  }

  (0, _createClass3.default)(ClientList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _ClientList2.default.root },
        _react2.default.createElement(
          'h1',
          null,
          'Clients Admin'
        ),
        this.props.children
      );
    }
  }]);
  return ClientList;
}(_react.Component);

exports.default = ClientList;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ForgotPassword = __webpack_require__(43);

var _ForgotPassword2 = _interopRequireDefault(_ForgotPassword);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ForgotPassword = function (_Component) {
  (0, _inherits3.default)(ForgotPassword, _Component);

  function ForgotPassword() {
    (0, _classCallCheck3.default)(this, ForgotPassword);
    return (0, _possibleConstructorReturn3.default)(this, (ForgotPassword.__proto__ || Object.getPrototypeOf(ForgotPassword)).apply(this, arguments));
  }

  (0, _createClass3.default)(ForgotPassword, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _ForgotPassword2.default.root },
        '404'
      );
    }
  }]);
  return ForgotPassword;
}(_react.Component);

exports.default = ForgotPassword;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _LoginForm = __webpack_require__(20);

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _auth = __webpack_require__(10);

var _Login = __webpack_require__(44);

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function (_Component) {
  (0, _inherits3.default)(Login, _Component);

  function Login() {
    (0, _classCallCheck3.default)(this, Login);
    return (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  (0, _createClass3.default)(Login, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _Login2.default.root + ' container' },
        _react2.default.createElement(
          'div',
          { className: 'panel col-sm-4 col-sm-offset-4' },
          _react2.default.createElement(
            'h1',
            null,
            'Login to Identity'
          ),
          _react2.default.createElement(_LoginForm2.default, { onSubmit: this.props.onLogin })
        )
      );
    }
  }]);
  return Login;
}(_react.Component);

Login.propTypes = {
  onLogin: _react.PropTypes.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLogin: function onLogin(values) {
      dispatch((0, _auth.requestLogin)(values));
    }
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Login);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _NotFound = __webpack_require__(45);

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function (_Component) {
  (0, _inherits3.default)(NotFound, _Component);

  function NotFound() {
    (0, _classCallCheck3.default)(this, NotFound);
    return (0, _possibleConstructorReturn3.default)(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  (0, _createClass3.default)(NotFound, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _NotFound2.default.root },
        '404'
      );
    }
  }]);
  return NotFound;
}(_react.Component);

exports.default = NotFound;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Register = __webpack_require__(46);

var _Register2 = _interopRequireDefault(_Register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Register = function (_Component) {
  (0, _inherits3.default)(Register, _Component);

  function Register() {
    (0, _classCallCheck3.default)(this, Register);
    return (0, _possibleConstructorReturn3.default)(this, (Register.__proto__ || Object.getPrototypeOf(Register)).apply(this, arguments));
  }

  (0, _createClass3.default)(Register, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: _Register2.default.root });
    }
  }]);
  return Register;
}(_react.Component);

exports.default = Register;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _UserCreate = __webpack_require__(47);

var _UserCreate2 = _interopRequireDefault(_UserCreate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserCreate = function (_Component) {
  (0, _inherits3.default)(UserCreate, _Component);

  function UserCreate() {
    (0, _classCallCheck3.default)(this, UserCreate);
    return (0, _possibleConstructorReturn3.default)(this, (UserCreate.__proto__ || Object.getPrototypeOf(UserCreate)).apply(this, arguments));
  }

  (0, _createClass3.default)(UserCreate, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _UserCreate2.default.root },
        '404'
      );
    }
  }]);
  return UserCreate;
}(_react.Component);

exports.default = UserCreate;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _UserEdit = __webpack_require__(48);

var _UserEdit2 = _interopRequireDefault(_UserEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserEdit = function (_Component) {
  (0, _inherits3.default)(UserEdit, _Component);

  function UserEdit() {
    (0, _classCallCheck3.default)(this, UserEdit);
    return (0, _possibleConstructorReturn3.default)(this, (UserEdit.__proto__ || Object.getPrototypeOf(UserEdit)).apply(this, arguments));
  }

  (0, _createClass3.default)(UserEdit, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _UserEdit2.default.root },
        '404'
      );
    }
  }]);
  return UserEdit;
}(_react.Component);

exports.default = UserEdit;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _UserList = __webpack_require__(49);

var _UserList2 = _interopRequireDefault(_UserList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserList = function (_Component) {
  (0, _inherits3.default)(UserList, _Component);

  function UserList() {
    (0, _classCallCheck3.default)(this, UserList);
    return (0, _possibleConstructorReturn3.default)(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).apply(this, arguments));
  }

  (0, _createClass3.default)(UserList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _UserList2.default.root },
        _react2.default.createElement(
          'h1',
          null,
          'Users Admin'
        ),
        this.props.children
      );
    }
  }]);
  return UserList;
}(_react.Component);

UserList.propTypes = {
  children: _react.PropTypes.node
};
UserList.defaultProps = {
  children: null
};
exports.default = UserList;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = __webpack_require__(22);

Object.defineProperty(exports, 'App', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_App).default;
  }
});

var _Admin = __webpack_require__(21);

Object.defineProperty(exports, 'Admin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Admin).default;
  }
});

var _ClientCreate = __webpack_require__(23);

Object.defineProperty(exports, 'ClientCreate', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ClientCreate).default;
  }
});

var _ClientEdit = __webpack_require__(24);

Object.defineProperty(exports, 'ClientEdit', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ClientEdit).default;
  }
});

var _ClientList = __webpack_require__(25);

Object.defineProperty(exports, 'ClientList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ClientList).default;
  }
});

var _ForgotPassword = __webpack_require__(26);

Object.defineProperty(exports, 'ForgotPassword', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ForgotPassword).default;
  }
});

var _Login = __webpack_require__(27);

Object.defineProperty(exports, 'Login', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Login).default;
  }
});

var _NotFound = __webpack_require__(28);

Object.defineProperty(exports, 'NotFound', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NotFound).default;
  }
});

var _Register = __webpack_require__(29);

Object.defineProperty(exports, 'Register', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Register).default;
  }
});

var _UserCreate = __webpack_require__(30);

Object.defineProperty(exports, 'UserCreate', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_UserCreate).default;
  }
});

var _UserEdit = __webpack_require__(31);

Object.defineProperty(exports, 'UserEdit', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_UserEdit).default;
  }
});

var _UserList = __webpack_require__(32);

Object.defineProperty(exports, 'UserList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_UserList).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(11);

var _reactRouterRedux = __webpack_require__(6);

var _reduxForm = __webpack_require__(12);

var _auth = __webpack_require__(10);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var todoApp = (0, _redux.combineReducers)({
  routing: _reactRouterRedux.routerReducer,
  form: _reduxForm.reducer,
  auth: _auth2.default
});

exports.default = todoApp;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(36), __esModule: true };

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37);
var $Object = __webpack_require__(54).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(56);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(59), 'Object', {defineProperty: __webpack_require__(58).f});

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"Admin__root____jg4l","container":"Admin__container___qH4TH"};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"App__root___27VjC"};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"ClientCreate__root___1fkP4"};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"ClientEdit__root___2_b1A"};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"ClientList__root___3TH3x"};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"ForgotPassword__root___1qxw0"};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"Login__root___3ddxs"};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"NotFound__root___1VDtb"};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"Register__root___eqXQb"};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"UserCreate__root___2hkoL"};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"UserEdit__root___1bOA_"};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"UserList__root___1m74b"};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(432);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(438);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(442);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(443);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(46);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(6);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(62);

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(7);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(73);

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(90);

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(16);

__webpack_require__(17);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(8);

var _reactRouterRedux = __webpack_require__(6);

var _reactRedux = __webpack_require__(7);

var _configureStore = __webpack_require__(13);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _routes = __webpack_require__(14);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
var store = (0, _configureStore2.default)(preloadedState, _reactRouter.browserHistory);
// Create an enhanced history that syncs navigation events with the store
var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_reactRouter.Router, { history: history, routes: (0, _routes2.default)(store) })
), document.getElementById('react-app')); // eslint-disable-line no-undef

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map