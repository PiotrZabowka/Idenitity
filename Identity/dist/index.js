(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("./vendor");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(0);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(47);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(60);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(396);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(18);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(2);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(3);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(4);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(88);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(4);

var _containers = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (store) {
  /**
   * Please keep routes in alphabetical order
   */
  return _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _containers.App },
    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _containers.NotFound, status: 404 })
  );
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(389);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(394);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(20);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    font-weight: bolder;\n    background-color: green;\n'], ['\n    font-weight: bolder;\n    background-color: green;\n']);

var _styledComponents = __webpack_require__(31);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _styledComponents2.default.h1(_templateObject);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(36);

var _App = __webpack_require__(28);

var _App2 = _interopRequireDefault(_App);

var _Header = __webpack_require__(13);

var _Header2 = _interopRequireDefault(_Header);

var _Bar = __webpack_require__(38);

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
        _react2.default.createElement(_Bar2.default, null),
        _react2.default.createElement(
          _Header2.default,
          null,
          'My App'
        ),
        'Hello world',
        _react2.default.createElement(
          _reactBootstrap.Button,
          null,
          'Wow'
        ),
        this.props.children
      );
    }
  }]);
  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function (_Component) {
  (0, _inherits3.default)(NotFound, _Component);

  function NotFound() {
    (0, _classCallCheck3.default)(this, NotFound);
    return (0, _possibleConstructorReturn3.default)(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  (0, _createClass3.default)(NotFound, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "panel" },
        "404"
      );
    }
  }]);
  return NotFound;
}(_react.Component);

exports.default = NotFound;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = __webpack_require__(14);

Object.defineProperty(exports, 'App', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_App).default;
  }
});

var _NotFound = __webpack_require__(15);

Object.defineProperty(exports, 'NotFound', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NotFound).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(21), __esModule: true };

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(22), __esModule: true };

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(23), __esModule: true };

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperties = __webpack_require__(17);

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _freeze = __webpack_require__(19);

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (strings, raw) {
  return (0, _freeze2.default)((0, _defineProperties2.default)(strings, {
    raw: {
      value: (0, _freeze2.default)(raw)
    }
  }));
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperties(T, D){
  return $Object.defineProperties(T, D);
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27);
module.exports = __webpack_require__(2).Object.freeze;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(3)
  , core    = __webpack_require__(2)
  , fails   = __webpack_require__(29);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(9), 'Object', {defineProperties: __webpack_require__(33)});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(9), 'Object', {defineProperty: __webpack_require__(34).f});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(30)
  , meta     = __webpack_require__(32).onFreeze;

__webpack_require__(24)('freeze', function($freeze){
  return function freeze(it){
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {
	"root": "App__root___27VjC"
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(102);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(103);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(397);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(426);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(428);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(70);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

var _server = __webpack_require__(12);

var _aspnetPrerendering = __webpack_require__(11);

var _reactRouter = __webpack_require__(4);

var _routes = __webpack_require__(10);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = (0, _aspnetPrerendering.createServerRenderer)(function (params) {
  return new Promise(function (resolve) {
    (0, _reactRouter.match)({ routes: (0, _routes2.default)(), location: params.location }, function (error, redirectLocation, renderProps) {
      if (error) {
        throw error;
      }
      resolve({
        html: (0, _server.renderToString)(React.createElement(_reactRouter.RouterContext, renderProps))
      });
    });
  });
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(393);

/***/ }),
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(36);

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
            return _react2.default.createElement(
                _reactBootstrap.Navbar,
                { inverse: true, collapseOnSelect: true },
                _react2.default.createElement(
                    _reactBootstrap.Navbar.Header,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Navbar.Brand,
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: '#' },
                            'My app'
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
                            _reactBootstrap.NavItem,
                            { eventKey: 1, href: '#' },
                            'Link'
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.NavItem,
                            { eventKey: 2, href: '#' },
                            'Link'
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.NavDropdown,
                            { eventKey: 3, title: 'Dropdown', id: 'basic-nav-dropdown' },
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
                                _reactBootstrap.MenuItem,
                                { eventKey: 3.3 },
                                'Separated link'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Nav,
                        { pullRight: true },
                        _react2.default.createElement(
                            _reactBootstrap.NavItem,
                            { eventKey: 1, href: '#' },
                            'Link Right'
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.NavItem,
                            { eventKey: 2, href: '#' },
                            'Link Right'
                        )
                    )
                )
            );
        }
    }]);
    return Bar;
}(_react.Component);

exports.default = Bar;

/***/ })
/******/ ])));