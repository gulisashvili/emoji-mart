(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["EmojiMart"] = factory(require("react"));
	else
		root["EmojiMart"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.frequently = exports.store = exports.emojiIndex = exports.Category = exports.Emoji = exports.Picker = undefined;

	var _components = __webpack_require__(1);

	Object.defineProperty(exports, 'Picker', {
	  enumerable: true,
	  get: function get() {
	    return _components.Picker;
	  }
	});
	Object.defineProperty(exports, 'Emoji', {
	  enumerable: true,
	  get: function get() {
	    return _components.Emoji;
	  }
	});
	Object.defineProperty(exports, 'Category', {
	  enumerable: true,
	  get: function get() {
	    return _components.Category;
	  }
	});

	var _emojiIndex = __webpack_require__(25);

	var _emojiIndex2 = _interopRequireDefault(_emojiIndex);

	var _store = __webpack_require__(17);

	var _store2 = _interopRequireDefault(_store);

	var _frequently = __webpack_require__(16);

	var _frequently2 = _interopRequireDefault(_frequently);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.emojiIndex = _emojiIndex2.default;
	exports.store = _store2.default;
	exports.frequently = _frequently2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _anchors = __webpack_require__(2);

	Object.defineProperty(exports, 'Anchors', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_anchors).default;
	  }
	});

	var _category = __webpack_require__(15);

	Object.defineProperty(exports, 'Category', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_category).default;
	  }
	});

	var _emoji = __webpack_require__(18);

	Object.defineProperty(exports, 'Emoji', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_emoji).default;
	  }
	});

	var _picker = __webpack_require__(21);

	Object.defineProperty(exports, 'Picker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_picker).default;
	  }
	});

	var _preview = __webpack_require__(23);

	Object.defineProperty(exports, 'Preview', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_preview).default;
	  }
	});

	var _search = __webpack_require__(24);

	Object.defineProperty(exports, 'Search', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_search).default;
	  }
	});

	var _skins = __webpack_require__(30);

	Object.defineProperty(exports, 'Skins', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_skins).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _svgInlineReact = __webpack_require__(4);

	var _svgInlineReact2 = _interopRequireDefault(_svgInlineReact);

	var _svgs = __webpack_require__(5);

	var SVGs = _interopRequireWildcard(_svgs);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Anchors = function (_React$Component) {
	  _inherits(Anchors, _React$Component);

	  function Anchors(props) {
	    _classCallCheck(this, Anchors);

	    var _this = _possibleConstructorReturn(this, (Anchors.__proto__ || Object.getPrototypeOf(Anchors)).call(this, props));

	    var defaultCategory = null;
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = props.categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var category = _step.value;

	        if (category.first) {
	          defaultCategory = category;
	          break;
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }

	    _this.state = {
	      selected: defaultCategory.name
	    };
	    return _this;
	  }

	  _createClass(Anchors, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var categories = _props.categories;
	      var onAnchorClick = _props.onAnchorClick;
	      var color = _props.color;
	      var i18n = _props.i18n;
	      var selected = this.state.selected;


	      return _react2.default.createElement(
	        'div',
	        { className: 'emoji-mart-anchors' },
	        categories.map(function (category, i) {
	          var name = category.name;
	          var anchor = category.anchor;
	          var isSelected = name == selected;

	          if (anchor === false) {
	            return null;
	          }

	          return _react2.default.createElement(
	            'span',
	            {
	              key: name,
	              title: i18n.categories[name.toLowerCase()],
	              onClick: function onClick() {
	                return onAnchorClick(category, i);
	              },
	              className: 'emoji-mart-anchor ' + (isSelected ? 'emoji-mart-anchor-selected' : ''),
	              style: { color: isSelected ? color : null }
	            },
	            _react2.default.createElement(_svgInlineReact2.default, { src: SVGs[name] }),
	            _react2.default.createElement('span', { className: 'emoji-mart-anchor-bar', style: { backgroundColor: color } })
	          );
	        })
	      );
	    }
	  }]);

	  return Anchors;
	}(_react2.default.Component);

	exports.default = Anchors;


	Anchors.propTypes = {
	  categories: _react2.default.PropTypes.array,
	  onAnchorClick: _react2.default.PropTypes.func
	};

	Anchors.defaultProps = {
	  categories: [],
	  onAnchorClick: function onAnchorClick() {}
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var DOMParser = typeof window !== 'undefined' && window.DOMParser;
	var process = process || {};
	process.env = process.env || {};
	var parserAvailable = typeof DOMParser !== 'undefined' && DOMParser.prototype != null && DOMParser.prototype.parseFromString != null;

	if ("production" !== process.env.NODE_ENV && !parserAvailable) {
	    console.info('<InlineSVG />: `raw` prop works only when `window.DOMParser` exists.');
	}

	function isParsable(src) {
	    // kinda naive but meh, ain't gonna use full-blown parser for this
	    return parserAvailable && typeof src === 'string' && src.trim().substr(0, 4) === '<svg';
	}

	// parse SVG string using `DOMParser`
	function parseFromSVGString(src) {
	    var parser = new DOMParser();
	    return parser.parseFromString(src, "image/svg+xml");
	}

	// Transform DOM prop/attr names applicable to `<svg>` element but react-limited
	function switchSVGAttrToReactProp(propName) {
	    switch (propName) {
	        case 'class':
	            return 'className';
	        default:
	            return propName;
	    }
	}

	var InlineSVG = (function (_React$Component) {
	    _inherits(InlineSVG, _React$Component);

	    _createClass(InlineSVG, null, [{
	        key: 'defaultProps',
	        value: {
	            element: 'i',
	            raw: false,
	            src: ''
	        },
	        enumerable: true
	    }, {
	        key: 'propTypes',
	        value: {
	            src: _react2['default'].PropTypes.string.isRequired,
	            element: _react2['default'].PropTypes.string,
	            raw: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }]);

	    function InlineSVG(props) {
	        _classCallCheck(this, InlineSVG);

	        _get(Object.getPrototypeOf(InlineSVG.prototype), 'constructor', this).call(this, props);
	        this._extractSVGProps = this._extractSVGProps.bind(this);
	    }

	    // Serialize `Attr` objects in `NamedNodeMap`

	    _createClass(InlineSVG, [{
	        key: '_serializeAttrs',
	        value: function _serializeAttrs(map) {
	            var ret = {};
	            var prop = undefined;
	            for (var i = 0; i < map.length; i++) {
	                prop = switchSVGAttrToReactProp(map[i].name);
	                ret[prop] = map[i].value;
	            }
	            return ret;
	        }

	        // get <svg /> element props
	    }, {
	        key: '_extractSVGProps',
	        value: function _extractSVGProps(src) {
	            var map = parseFromSVGString(src).documentElement.attributes;
	            return map.length > 0 ? this._serializeAttrs(map) : null;
	        }

	        // get content inside <svg> element.
	    }, {
	        key: '_stripSVG',
	        value: function _stripSVG(src) {
	            return parseFromSVGString(src).documentElement.innerHTML;
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(_ref) {
	            var children = _ref.children;

	            if ("production" !== process.env.NODE_ENV && children != null) {
	                console.info('<InlineSVG />: `children` prop will be ignored.');
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var Element = undefined,
	                __html = undefined,
	                svgProps = undefined;
	            var _props = this.props;
	            var element = _props.element;
	            var raw = _props.raw;
	            var src = _props.src;

	            var otherProps = _objectWithoutProperties(_props, ['element', 'raw', 'src']);

	            if (raw === true && isParsable(src)) {
	                Element = 'svg';
	                svgProps = this._extractSVGProps(src);
	                __html = this._stripSVG(src);
	            }
	            __html = __html || src;
	            Element = Element || element;
	            svgProps = svgProps || {};

	            return _react2['default'].createElement(Element, _extends({}, svgProps, otherProps, { src: null, children: null,
	                dangerouslySetInnerHTML: { __html: __html } }));
	        }
	    }]);

	    return InlineSVG;
	})(_react2['default'].Component);

	exports['default'] = InlineSVG;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _activity = __webpack_require__(6);

	Object.defineProperty(exports, 'Activity', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_activity).default;
	  }
	});

	var _flags = __webpack_require__(7);

	Object.defineProperty(exports, 'Flags', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_flags).default;
	  }
	});

	var _foods = __webpack_require__(8);

	Object.defineProperty(exports, 'Foods', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_foods).default;
	  }
	});

	var _nature = __webpack_require__(9);

	Object.defineProperty(exports, 'Nature', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_nature).default;
	  }
	});

	var _objects = __webpack_require__(10);

	Object.defineProperty(exports, 'Objects', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_objects).default;
	  }
	});

	var _people = __webpack_require__(11);

	Object.defineProperty(exports, 'People', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_people).default;
	  }
	});

	var _places = __webpack_require__(12);

	Object.defineProperty(exports, 'Places', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_places).default;
	  }
	});

	var _recent = __webpack_require__(13);

	Object.defineProperty(exports, 'Recent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_recent).default;
	  }
	});

	var _symbols = __webpack_require__(14);

	Object.defineProperty(exports, 'Symbols', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_symbols).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" height=\"24\" width=\"24\"><path d=\"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113\"></path></svg>"

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" height=\"24\" width=\"24\"><path d=\"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z\"></path></svg>"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" height=\"24\" width=\"24\"><path d=\"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9\"></path></svg>"

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" height=\"24\" width=\"24\"><path d=\"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8\"></path><path d=\"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235\"></path></svg>"

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" height=\"24\" width=\"24\"><path d=\"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z\"></path><path d=\"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789\"></path></svg>"

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" height=\"24\" width=\"24\"><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"></path><path d=\"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0\"></path></svg>"

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" height=\"24\" width=\"24\"><path d=\"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5\"></path><path d=\"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z\"></path></svg>"

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" height=\"24\" width=\"24\"><path d=\"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z\"></path><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"></path></svg>"

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" height=\"24\" width=\"24\"><path d=\"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76\"></path></svg>"

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _frequently = __webpack_require__(16);

	var _frequently2 = _interopRequireDefault(_frequently);

	var _ = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Category = function (_React$Component) {
	  _inherits(Category, _React$Component);

	  function Category() {
	    _classCallCheck(this, Category);

	    return _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).apply(this, arguments));
	  }

	  _createClass(Category, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.container = this.refs.container;
	      this.label = this.refs.label;
	      this.parent = this.container.parentNode;

	      this.margin = 0;
	      this.minMargin = 0;

	      this.memoizeSize();
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      var _props = this.props;
	      var name = _props.name;
	      var perLine = _props.perLine;
	      var native = _props.native;
	      var hasStickyPosition = _props.hasStickyPosition;
	      var emojis = _props.emojis;
	      var emojiProps = _props.emojiProps;
	      var skin = emojiProps.skin;
	      var size = emojiProps.size;
	      var set = emojiProps.set;
	      var nextPerLine = nextProps.perLine;
	      var nextNative = nextProps.native;
	      var nextHasStickyPosition = nextProps.hasStickyPosition;
	      var nextEmojis = nextProps.emojis;
	      var nextEmojiProps = nextProps.emojiProps;
	      var nextSkin = nextEmojiProps.skin;
	      var nextSize = nextEmojiProps.size;
	      var nextSet = nextEmojiProps.set;
	      var shouldUpdate = false;

	      if (name == 'Recent' && perLine != nextPerLine) {
	        shouldUpdate = true;
	      }

	      if (name == 'Search') {
	        shouldUpdate = !(emojis == nextEmojis);
	      }

	      if (skin != nextSkin || size != nextSize || native != nextNative || set != nextSet || hasStickyPosition != nextHasStickyPosition) {
	        shouldUpdate = true;
	      }

	      return shouldUpdate;
	    }
	  }, {
	    key: 'memoizeSize',
	    value: function memoizeSize() {
	      var _container$getBoundin = this.container.getBoundingClientRect();

	      var top = _container$getBoundin.top;
	      var height = _container$getBoundin.height;

	      var _parent$getBoundingCl = this.parent.getBoundingClientRect();

	      var parentTop = _parent$getBoundingCl.top;

	      var _label$getBoundingCli = this.label.getBoundingClientRect();

	      var labelHeight = _label$getBoundingCli.height;


	      this.top = top - parentTop + this.parent.scrollTop;

	      if (height == 0) {
	        this.maxMargin = 0;
	      } else {
	        this.maxMargin = height - labelHeight;
	      }
	    }
	  }, {
	    key: 'handleScroll',
	    value: function handleScroll(scrollTop) {
	      var margin = scrollTop - this.top;
	      margin = margin < this.minMargin ? this.minMargin : margin;
	      margin = margin > this.maxMargin ? this.maxMargin : margin;

	      if (margin == this.margin) return;
	      var name = this.props.name;


	      if (!this.props.hasStickyPosition) {
	        this.label.style.top = margin + 'px';
	      }

	      this.margin = margin;
	      return true;
	    }
	  }, {
	    key: 'getEmojis',
	    value: function getEmojis() {
	      var _props2 = this.props;
	      var name = _props2.name;
	      var emojis = _props2.emojis;
	      var perLine = _props2.perLine;


	      if (name == 'Recent') {
	        var frequentlyUsed = _frequently2.default.get(perLine);

	        if (frequentlyUsed.length) {
	          emojis = frequentlyUsed;
	        }
	      }

	      if (emojis) {
	        emojis = emojis.slice(0);
	      }

	      return emojis;
	    }
	  }, {
	    key: 'updateDisplay',
	    value: function updateDisplay(display) {
	      var emojis = this.getEmojis();

	      if (!emojis) {
	        return;
	      }

	      this.container.style.display = display;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var name = _props3.name;
	      var hasStickyPosition = _props3.hasStickyPosition;
	      var emojiProps = _props3.emojiProps;
	      var i18n = _props3.i18n;
	      var emojis = this.getEmojis();
	      var labelStyles = {};
	      var labelSpanStyles = {};
	      var containerStyles = {};

	      if (!emojis) {
	        containerStyles = {
	          display: 'none'
	        };
	      }

	      if (!hasStickyPosition) {
	        labelStyles = {
	          height: 28
	        };

	        labelSpanStyles = {
	          position: 'absolute'
	        };
	      }

	      return _react2.default.createElement(
	        'div',
	        { ref: 'container', className: 'emoji-mart-category ' + (emojis && !emojis.length ? 'emoji-mart-no-results' : ''), style: containerStyles },
	        _react2.default.createElement(
	          'div',
	          { style: labelStyles, 'data-name': name, className: 'emoji-mart-category-label' },
	          _react2.default.createElement(
	            'span',
	            { style: labelSpanStyles, ref: 'label' },
	            i18n.categories[name.toLowerCase()]
	          )
	        ),
	        emojis && emojis.map(function (emoji) {
	          return _react2.default.createElement(_.Emoji, _extends({
	            key: emoji.id || emoji,
	            emoji: emoji
	          }, emojiProps));
	        }),
	        emojis && !emojis.length && _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_.Emoji, _extends({}, emojiProps, {
	              size: 38,
	              emoji: 'sleuth_or_spy',
	              onOver: null,
	              onLeave: null,
	              onClick: null
	            }))
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-no-results-label' },
	            i18n.notfound
	          )
	        )
	      );
	    }
	  }]);

	  return Category;
	}(_react2.default.Component);

	exports.default = Category;


	Category.propTypes = {
	  emojis: _react2.default.PropTypes.array,
	  hasStickyPosition: _react2.default.PropTypes.bool,
	  name: _react2.default.PropTypes.string.isRequired,
	  native: _react2.default.PropTypes.bool.isRequired,
	  perLine: _react2.default.PropTypes.number.isRequired,
	  emojiProps: _react2.default.PropTypes.object.isRequired
	};

	Category.defaultProps = {
	  emojis: [],
	  hasStickyPosition: true
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _store = __webpack_require__(17);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DEFAULTS = ['+1', 'grinning', 'kissing_heart', 'heart_eyes', 'laughing', 'stuck_out_tongue_winking_eye', 'sweat_smile', 'joy', 'scream', 'disappointed', 'unamused', 'weary', 'sob', 'sunglasses', 'heart', 'poop'];

	var frequently = _store2.default.get('frequently');

	function add(emoji) {
	  var id = emoji.id;


	  frequently || (frequently = {});
	  frequently[id] || (frequently[id] = 0);
	  frequently[id] += 1;

	  _store2.default.set('last', id);
	  _store2.default.set('frequently', frequently);
	}

	function get(perLine) {
	  if (!frequently) {
	    frequently = {};

	    Array(perLine).fill('').forEach(function (_, i) {
	      frequently[DEFAULTS[i]] = perLine - i;
	    });
	  }

	  var quantity = perLine * 4,
	      sorted = Object.keys(frequently).sort(function (a, b) {
	    return frequently[a] - frequently[b];
	  }).reverse(),
	      sliced = sorted.slice(0, quantity),
	      last = _store2.default.get('last');

	  if (last && sliced.indexOf(last) == -1) {
	    sliced.pop();
	    sliced.push(last);
	  }

	  return sliced;
	}

	exports.default = { add: add, get: get };

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var NAMESPACE = 'emoji-mart';

	var isLocalStorageSupported = typeof window !== 'undefined' && 'localStorage' in window;

	function update(state) {
	  for (var key in state) {
	    var value = state[key];
	    set(key, value);
	  }
	}

	function set(key, value) {
	  if (!isLocalStorageSupported) return;
	  try {
	    window.localStorage[NAMESPACE + '.' + key] = JSON.stringify(value);
	  } catch (e) {}
	}

	function get(key) {
	  if (!isLocalStorageSupported) return;
	  try {
	    var value = window.localStorage[NAMESPACE + '.' + key];
	  } catch (e) {
	    return;
	  }

	  if (value) {
	    return JSON.parse(value);
	  }
	}

	function setNamespace(namespace) {
	  NAMESPACE = namespace;
	}

	exports.default = { update: update, set: set, get: get, setNamespace: setNamespace };

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _data = __webpack_require__(19);

	var _data2 = _interopRequireDefault(_data);

	var _utils = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SHEET_COLUMNS = 41;

	var Emoji = function (_React$Component) {
	  _inherits(Emoji, _React$Component);

	  function Emoji(props) {
	    _classCallCheck(this, Emoji);

	    var _this = _possibleConstructorReturn(this, (Emoji.__proto__ || Object.getPrototypeOf(Emoji)).call(this, props));

	    _this.hasSkinVariations = !!_this.getData().skin_variations;
	    return _this;
	  }

	  _createClass(Emoji, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return this.hasSkinVariations && nextProps.skin != this.props.skin || nextProps.size != this.props.size || nextProps.native != this.props.native || nextProps.set != this.props.set || nextProps.emoji != this.props.emoji;
	    }
	  }, {
	    key: 'getPosition',
	    value: function getPosition() {
	      var _getData2 = this.getData();

	      var sheet_x = _getData2.sheet_x;
	      var sheet_y = _getData2.sheet_y;
	      var multiply = 100 / (SHEET_COLUMNS - 1);

	      return multiply * sheet_x + '% ' + multiply * sheet_y + '%';
	    }
	  }, {
	    key: 'getData',
	    value: function getData() {
	      var _props = this.props;
	      var emoji = _props.emoji;
	      var skin = _props.skin;
	      var set = _props.set;

	      return (0, _utils.getData)(emoji, skin, set);
	    }
	  }, {
	    key: 'getSanitizedData',
	    value: function getSanitizedData() {
	      var _props2 = this.props;
	      var emoji = _props2.emoji;
	      var skin = _props2.skin;
	      var set = _props2.set;

	      return (0, _utils.getSanitizedData)(emoji, skin, set);
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(e) {
	      if (!this.props.onClick) {
	        return;
	      }
	      var onClick = this.props.onClick;
	      var emoji = this.getSanitizedData();

	      onClick(emoji, e);
	    }
	  }, {
	    key: 'handleOver',
	    value: function handleOver(e) {
	      if (!this.props.onOver) {
	        return;
	      }
	      var onOver = this.props.onOver;
	      var emoji = this.getSanitizedData();

	      onOver(emoji, e);
	    }
	  }, {
	    key: 'handleLeave',
	    value: function handleLeave(e) {
	      if (!this.props.onLeave) {
	        return;
	      }
	      var onLeave = this.props.onLeave;
	      var emoji = this.getSanitizedData();

	      onLeave(emoji, e);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var set = _props3.set;
	      var size = _props3.size;
	      var sheetSize = _props3.sheetSize;
	      var native = _props3.native;
	      var forceSize = _props3.forceSize;
	      var onOver = _props3.onOver;
	      var onLeave = _props3.onLeave;
	      var backgroundImageFn = _props3.backgroundImageFn;

	      var _getData3 = this.getData();

	      var unified = _getData3.unified;
	      var style = {};
	      var children = this.props.children;

	      if (!unified) {
	        return null;
	      }

	      if (native && unified) {
	        style = { fontSize: size };
	        children = (0, _utils.unifiedToNative)(unified);

	        if (forceSize) {
	          style.display = 'inline-block';
	          style.width = size;
	          style.height = size;
	        }
	      } else {
	        style = {
	          width: size,
	          height: size,
	          display: 'inline-block',
	          backgroundImage: 'url(' + backgroundImageFn(set, sheetSize) + ')',
	          backgroundSize: 100 * SHEET_COLUMNS + '%',
	          backgroundPosition: this.getPosition()
	        };
	      }

	      return _react2.default.createElement(
	        'span',
	        {
	          onClick: this.handleClick.bind(this),
	          onMouseEnter: this.handleOver.bind(this),
	          onMouseLeave: this.handleLeave.bind(this),
	          className: 'emoji-mart-emoji' },
	        _react2.default.createElement(
	          'span',
	          { style: style },
	          children
	        )
	      );
	    }
	  }]);

	  return Emoji;
	}(_react2.default.Component);

	exports.default = Emoji;


	Emoji.propTypes = {
	  onOver: _react2.default.PropTypes.func,
	  onLeave: _react2.default.PropTypes.func,
	  onClick: _react2.default.PropTypes.func,
	  backgroundImageFn: _react2.default.PropTypes.func,
	  native: _react2.default.PropTypes.bool,
	  forceSize: _react2.default.PropTypes.bool,
	  skin: _react2.default.PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
	  sheetSize: _react2.default.PropTypes.oneOf([16, 20, 32, 64]),
	  set: _react2.default.PropTypes.oneOf(['apple', 'google', 'twitter', 'emojione']),
	  size: _react2.default.PropTypes.number.isRequired,
	  emoji: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object]).isRequired
	};

	Emoji.defaultProps = {
	  skin: 1,
	  set: 'apple',
	  sheetSize: 64,
	  native: false,
	  forceSize: false,
	  backgroundImageFn: function backgroundImageFn(set, sheetSize) {
	    return 'https://unpkg.com/emoji-datasource@' + ('2.4.4') + '/sheet_' + set + '_' + sheetSize + '.png';
	  },
	  onOver: function onOver() {},
	  onLeave: function onLeave() {},
	  onClick: function onClick() {}
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = { categories: [{ name: "People", emojis: ["grinning", "grimacing", "grin", "joy", "smiley", "smile", "sweat_smile", "laughing", "innocent", "wink", "blush", "slightly_smiling_face", "upside_down_face", "relaxed", "yum", "relieved", "heart_eyes", "kissing_heart", "kissing", "kissing_smiling_eyes", "kissing_closed_eyes", "stuck_out_tongue_winking_eye", "stuck_out_tongue_closed_eyes", "stuck_out_tongue", "money_mouth_face", "nerd_face", "sunglasses", "hugging_face", "smirk", "no_mouth", "neutral_face", "expressionless", "unamused", "face_with_rolling_eyes", "thinking_face", "flushed", "disappointed", "worried", "angry", "rage", "pensive", "confused", "slightly_frowning_face", "white_frowning_face", "persevere", "confounded", "tired_face", "weary", "triumph", "open_mouth", "scream", "fearful", "cold_sweat", "hushed", "frowning", "anguished", "cry", "disappointed_relieved", "sleepy", "sweat", "sob", "dizzy_face", "astonished", "zipper_mouth_face", "mask", "face_with_thermometer", "face_with_head_bandage", "sleeping", "zzz", "hankey", "smiling_imp", "imp", "japanese_ogre", "japanese_goblin", "skull", "ghost", "alien", "robot_face", "smiley_cat", "smile_cat", "joy_cat", "heart_eyes_cat", "smirk_cat", "kissing_cat", "scream_cat", "crying_cat_face", "pouting_cat", "raised_hands", "clap", "wave", "+1", "-1", "facepunch", "fist", "v", "ok_hand", "hand", "open_hands", "muscle", "pray", "point_up", "point_up_2", "point_down", "point_left", "point_right", "middle_finger", "raised_hand_with_fingers_splayed", "the_horns", "spock-hand", "writing_hand", "nail_care", "lips", "tongue", "ear", "nose", "eye", "eyes", "bust_in_silhouette", "busts_in_silhouette", "speaking_head_in_silhouette", "baby", "boy", "girl", "man", "woman", "person_with_blond_hair", "older_man", "older_woman", "man_with_gua_pi_mao", "man_with_turban", "cop", "construction_worker", "guardsman", "sleuth_or_spy", "santa", "angel", "princess", "bride_with_veil", "walking", "runner", "dancer", "dancers", "couple", "two_men_holding_hands", "two_women_holding_hands", "bow", "information_desk_person", "no_good", "ok_woman", "raising_hand", "person_with_pouting_face", "person_frowning", "haircut", "massage", "couple_with_heart", "woman-heart-woman", "man-heart-man", "couplekiss", "woman-kiss-woman", "man-kiss-man", "family", "man-woman-girl", "man-woman-girl-boy", "man-woman-boy-boy", "man-woman-girl-girl", "woman-woman-boy", "woman-woman-girl", "woman-woman-girl-boy", "woman-woman-boy-boy", "woman-woman-girl-girl", "man-man-boy", "man-man-girl", "man-man-girl-boy", "man-man-boy-boy", "man-man-girl-girl", "womans_clothes", "shirt", "jeans", "necktie", "dress", "bikini", "kimono", "lipstick", "kiss", "footprints", "high_heel", "sandal", "boot", "mans_shoe", "athletic_shoe", "womans_hat", "tophat", "helmet_with_white_cross", "mortar_board", "crown", "school_satchel", "pouch", "purse", "handbag", "briefcase", "eyeglasses", "dark_sunglasses", "ring", "closed_umbrella"] }, { name: "Nature", emojis: ["dog", "cat", "mouse", "hamster", "rabbit", "bear", "panda_face", "koala", "tiger", "lion_face", "cow", "pig", "pig_nose", "frog", "octopus", "monkey_face", "see_no_evil", "hear_no_evil", "speak_no_evil", "monkey", "chicken", "penguin", "bird", "baby_chick", "hatching_chick", "hatched_chick", "wolf", "boar", "horse", "unicorn_face", "bee", "bug", "snail", "beetle", "ant", "spider", "scorpion", "crab", "snake", "turtle", "tropical_fish", "fish", "blowfish", "dolphin", "whale", "whale2", "crocodile", "leopard", "tiger2", "water_buffalo", "ox", "cow2", "dromedary_camel", "camel", "elephant", "goat", "ram", "sheep", "racehorse", "pig2", "rat", "mouse2", "rooster", "turkey", "dove_of_peace", "dog2", "poodle", "cat2", "rabbit2", "chipmunk", "feet", "dragon", "dragon_face", "cactus", "christmas_tree", "evergreen_tree", "deciduous_tree", "palm_tree", "seedling", "herb", "shamrock", "four_leaf_clover", "bamboo", "tanabata_tree", "leaves", "fallen_leaf", "maple_leaf", "ear_of_rice", "hibiscus", "sunflower", "rose", "tulip", "blossom", "cherry_blossom", "bouquet", "mushroom", "chestnut", "jack_o_lantern", "shell", "spider_web", "earth_americas", "earth_africa", "earth_asia", "full_moon", "waning_gibbous_moon", "last_quarter_moon", "waning_crescent_moon", "new_moon", "waxing_crescent_moon", "first_quarter_moon", "moon", "new_moon_with_face", "full_moon_with_face", "first_quarter_moon_with_face", "last_quarter_moon_with_face", "sun_with_face", "crescent_moon", "star", "star2", "dizzy", "sparkles", "comet", "sunny", "mostly_sunny", "partly_sunny", "barely_sunny", "partly_sunny_rain", "cloud", "rain_cloud", "thunder_cloud_and_rain", "lightning", "zap", "fire", "boom", "snowflake", "snow_cloud", "snowman", "snowman_without_snow", "wind_blowing_face", "dash", "tornado", "fog", "umbrella", "umbrella_with_rain_drops", "droplet", "sweat_drops", "ocean"] }, { name: "Foods", emojis: ["green_apple", "apple", "pear", "tangerine", "lemon", "banana", "watermelon", "grapes", "strawberry", "melon", "cherries", "peach", "pineapple", "tomato", "eggplant", "hot_pepper", "corn", "sweet_potato", "honey_pot", "bread", "cheese_wedge", "poultry_leg", "meat_on_bone", "fried_shrimp", "egg", "hamburger", "fries", "hotdog", "pizza", "spaghetti", "taco", "burrito", "ramen", "stew", "fish_cake", "sushi", "bento", "curry", "rice_ball", "rice", "rice_cracker", "oden", "dango", "shaved_ice", "ice_cream", "icecream", "cake", "birthday", "custard", "candy", "lollipop", "chocolate_bar", "popcorn", "doughnut", "cookie", "beer", "beers", "wine_glass", "cocktail", "tropical_drink", "champagne", "sake", "tea", "coffee", "baby_bottle", "fork_and_knife", "knife_fork_plate"] }, { name: "Activity", emojis: ["soccer", "basketball", "football", "baseball", "tennis", "volleyball", "rugby_football", "8ball", "golf", "golfer", "table_tennis_paddle_and_ball", "badminton_racquet_and_shuttlecock", "ice_hockey_stick_and_puck", "field_hockey_stick_and_ball", "cricket_bat_and_ball", "ski", "skier", "snowboarder", "ice_skate", "bow_and_arrow", "fishing_pole_and_fish", "rowboat", "swimmer", "surfer", "bath", "person_with_ball", "weight_lifter", "bicyclist", "mountain_bicyclist", "horse_racing", "man_in_business_suit_levitating", "trophy", "running_shirt_with_sash", "sports_medal", "medal", "reminder_ribbon", "rosette", "ticket", "admission_tickets", "performing_arts", "art", "circus_tent", "microphone", "headphones", "musical_score", "musical_keyboard", "saxophone", "trumpet", "guitar", "violin", "clapper", "video_game", "space_invader", "dart", "game_die", "slot_machine", "bowling"] }, { name: "Places", emojis: ["car", "taxi", "blue_car", "bus", "trolleybus", "racing_car", "police_car", "ambulance", "fire_engine", "minibus", "truck", "articulated_lorry", "tractor", "racing_motorcycle", "bike", "rotating_light", "oncoming_police_car", "oncoming_bus", "oncoming_automobile", "oncoming_taxi", "aerial_tramway", "mountain_cableway", "suspension_railway", "railway_car", "train", "monorail", "bullettrain_side", "bullettrain_front", "light_rail", "mountain_railway", "steam_locomotive", "train2", "metro", "tram", "station", "helicopter", "small_airplane", "airplane", "airplane_departure", "airplane_arriving", "boat", "motor_boat", "speedboat", "ferry", "passenger_ship", "rocket", "satellite", "seat", "anchor", "construction", "fuelpump", "busstop", "vertical_traffic_light", "traffic_light", "checkered_flag", "ship", "ferris_wheel", "roller_coaster", "carousel_horse", "building_construction", "foggy", "tokyo_tower", "factory", "fountain", "rice_scene", "mountain", "snow_capped_mountain", "mount_fuji", "volcano", "japan", "camping", "tent", "national_park", "motorway", "railway_track", "sunrise", "sunrise_over_mountains", "desert", "beach_with_umbrella", "desert_island", "city_sunrise", "city_sunset", "cityscape", "night_with_stars", "bridge_at_night", "milky_way", "stars", "sparkler", "fireworks", "rainbow", "house_buildings", "european_castle", "japanese_castle", "stadium", "statue_of_liberty", "house", "house_with_garden", "derelict_house_building", "office", "department_store", "post_office", "european_post_office", "hospital", "bank", "hotel", "convenience_store", "school", "love_hotel", "wedding", "classical_building", "church", "mosque", "synagogue", "kaaba", "shinto_shrine"] }, { name: "Objects", emojis: ["watch", "iphone", "calling", "computer", "keyboard", "desktop_computer", "printer", "three_button_mouse", "trackball", "joystick", "compression", "minidisc", "floppy_disk", "cd", "dvd", "vhs", "camera", "camera_with_flash", "video_camera", "movie_camera", "film_projector", "film_frames", "telephone_receiver", "phone", "pager", "fax", "tv", "radio", "studio_microphone", "level_slider", "control_knobs", "stopwatch", "timer_clock", "alarm_clock", "mantelpiece_clock", "hourglass_flowing_sand", "hourglass", "satellite_antenna", "battery", "electric_plug", "bulb", "flashlight", "candle", "wastebasket", "oil_drum", "money_with_wings", "dollar", "yen", "euro", "pound", "moneybag", "credit_card", "gem", "scales", "wrench", "hammer", "hammer_and_pick", "hammer_and_wrench", "pick", "nut_and_bolt", "gear", "chains", "gun", "bomb", "hocho", "dagger_knife", "crossed_swords", "shield", "smoking", "skull_and_crossbones", "coffin", "funeral_urn", "amphora", "crystal_ball", "prayer_beads", "barber", "alembic", "telescope", "microscope", "hole", "pill", "syringe", "thermometer", "label", "bookmark", "toilet", "shower", "bathtub", "key", "old_key", "couch_and_lamp", "sleeping_accommodation", "bed", "door", "bellhop_bell", "frame_with_picture", "world_map", "umbrella_on_ground", "moyai", "shopping_bags", "balloon", "flags", "ribbon", "gift", "confetti_ball", "tada", "dolls", "wind_chime", "crossed_flags", "izakaya_lantern", "email", "envelope_with_arrow", "incoming_envelope", "e-mail", "love_letter", "postbox", "mailbox_closed", "mailbox", "mailbox_with_mail", "mailbox_with_no_mail", "package", "postal_horn", "inbox_tray", "outbox_tray", "scroll", "page_with_curl", "bookmark_tabs", "bar_chart", "chart_with_upwards_trend", "chart_with_downwards_trend", "page_facing_up", "date", "calendar", "spiral_calendar_pad", "card_index", "card_file_box", "ballot_box_with_ballot", "file_cabinet", "clipboard", "spiral_note_pad", "file_folder", "open_file_folder", "card_index_dividers", "rolled_up_newspaper", "newspaper", "notebook", "closed_book", "green_book", "blue_book", "orange_book", "notebook_with_decorative_cover", "ledger", "books", "book", "link", "paperclip", "linked_paperclips", "scissors", "triangular_ruler", "straight_ruler", "pushpin", "round_pushpin", "triangular_flag_on_post", "waving_white_flag", "waving_black_flag", "closed_lock_with_key", "lock", "unlock", "lock_with_ink_pen", "lower_left_ballpoint_pen", "lower_left_fountain_pen", "black_nib", "memo", "pencil2", "lower_left_crayon", "lower_left_paintbrush", "mag", "mag_right"] }, { name: "Symbols", emojis: ["heart", "yellow_heart", "green_heart", "blue_heart", "purple_heart", "broken_heart", "heavy_heart_exclamation_mark_ornament", "two_hearts", "revolving_hearts", "heartbeat", "heartpulse", "sparkling_heart", "cupid", "gift_heart", "heart_decoration", "peace_symbol", "latin_cross", "star_and_crescent", "om_symbol", "wheel_of_dharma", "star_of_david", "six_pointed_star", "menorah_with_nine_branches", "yin_yang", "orthodox_cross", "place_of_worship", "ophiuchus", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpius", "sagittarius", "capricorn", "aquarius", "pisces", "id", "atom_symbol", "u7a7a", "u5272", "radioactive_sign", "biohazard_sign", "mobile_phone_off", "vibration_mode", "u6709", "u7121", "u7533", "u55b6", "u6708", "eight_pointed_black_star", "vs", "accept", "white_flower", "ideograph_advantage", "secret", "congratulations", "u5408", "u6e80", "u7981", "a", "b", "ab", "cl", "o2", "sos", "no_entry", "name_badge", "no_entry_sign", "x", "o", "anger", "hotsprings", "no_pedestrians", "do_not_litter", "no_bicycles", "non-potable_water", "underage", "no_mobile_phones", "exclamation", "grey_exclamation", "question", "grey_question", "bangbang", "interrobang", "100", "low_brightness", "high_brightness", "trident", "fleur_de_lis", "part_alternation_mark", "warning", "children_crossing", "beginner", "recycle", "u6307", "chart", "sparkle", "eight_spoked_asterisk", "negative_squared_cross_mark", "white_check_mark", "diamond_shape_with_a_dot_inside", "cyclone", "loop", "globe_with_meridians", "m", "atm", "sa", "passport_control", "customs", "baggage_claim", "left_luggage", "wheelchair", "no_smoking", "wc", "parking", "potable_water", "mens", "womens", "baby_symbol", "restroom", "put_litter_in_its_place", "cinema", "signal_strength", "koko", "ng", "ok", "up", "cool", "new", "free", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "keycap_ten", "keycap_star", "1234", "arrow_forward", "double_vertical_bar", "black_right_pointing_triangle_with_double_vertical_bar", "black_square_for_stop", "eject", "black_circle_for_record", "black_right_pointing_double_triangle_with_vertical_bar", "black_left_pointing_double_triangle_with_vertical_bar", "fast_forward", "rewind", "twisted_rightwards_arrows", "repeat", "repeat_one", "arrow_backward", "arrow_up_small", "arrow_down_small", "arrow_double_up", "arrow_double_down", "arrow_right", "arrow_left", "arrow_up", "arrow_down", "arrow_upper_right", "arrow_lower_right", "arrow_lower_left", "arrow_upper_left", "arrow_up_down", "left_right_arrow", "arrows_counterclockwise", "arrow_right_hook", "leftwards_arrow_with_hook", "arrow_heading_up", "arrow_heading_down", "hash", "information_source", "abc", "abcd", "capital_abcd", "symbols", "musical_note", "notes", "wavy_dash", "curly_loop", "heavy_check_mark", "arrows_clockwise", "heavy_plus_sign", "heavy_minus_sign", "heavy_division_sign", "heavy_multiplication_x", "heavy_dollar_sign", "currency_exchange", "copyright", "registered", "tm", "end", "back", "on", "top", "soon", "ballot_box_with_check", "radio_button", "white_circle", "black_circle", "red_circle", "large_blue_circle", "small_orange_diamond", "small_blue_diamond", "large_orange_diamond", "large_blue_diamond", "small_red_triangle", "black_small_square", "white_small_square", "black_large_square", "white_large_square", "small_red_triangle_down", "black_medium_square", "white_medium_square", "black_medium_small_square", "white_medium_small_square", "black_square_button", "white_square_button", "speaker", "sound", "loud_sound", "mute", "mega", "loudspeaker", "bell", "no_bell", "black_joker", "mahjong", "spades", "clubs", "hearts", "diamonds", "flower_playing_cards", "thought_balloon", "right_anger_bubble", "speech_balloon", "left_speech_bubble", "clock1", "clock2", "clock3", "clock4", "clock5", "clock6", "clock7", "clock8", "clock9", "clock10", "clock11", "clock12", "clock130", "clock230", "clock330", "clock430", "clock530", "clock630", "clock730", "clock830", "clock930", "clock1030", "clock1130", "clock1230"] }, { name: "Flags", emojis: ["flag-ac", "flag-ad", "flag-ae", "flag-af", "flag-ag", "flag-ai", "flag-al", "flag-am", "flag-ao", "flag-aq", "flag-ar", "flag-as", "flag-at", "flag-au", "flag-aw", "flag-ax", "flag-az", "flag-ba", "flag-bb", "flag-bd", "flag-be", "flag-bf", "flag-bg", "flag-bh", "flag-bi", "flag-bj", "flag-bl", "flag-bm", "flag-bn", "flag-bo", "flag-bq", "flag-br", "flag-bs", "flag-bt", "flag-bv", "flag-bw", "flag-by", "flag-bz", "flag-ca", "flag-cc", "flag-cd", "flag-cf", "flag-cg", "flag-ch", "flag-ci", "flag-ck", "flag-cl", "flag-cm", "flag-cn", "flag-co", "flag-cp", "flag-cr", "flag-cu", "flag-cv", "flag-cw", "flag-cx", "flag-cy", "flag-cz", "flag-de", "flag-dg", "flag-dj", "flag-dk", "flag-dm", "flag-do", "flag-dz", "flag-ea", "flag-ec", "flag-ee", "flag-eg", "flag-eh", "flag-er", "flag-es", "flag-et", "flag-eu", "flag-fi", "flag-fj", "flag-fk", "flag-fm", "flag-fo", "flag-fr", "flag-ga", "flag-gb", "flag-gd", "flag-ge", "flag-gf", "flag-gg", "flag-gh", "flag-gi", "flag-gl", "flag-gm", "flag-gn", "flag-gp", "flag-gq", "flag-gr", "flag-gs", "flag-gt", "flag-gu", "flag-gw", "flag-gy", "flag-hk", "flag-hm", "flag-hn", "flag-hr", "flag-ht", "flag-hu", "flag-ic", "flag-id", "flag-ie", "flag-il", "flag-im", "flag-in", "flag-io", "flag-iq", "flag-ir", "flag-is", "flag-it", "flag-je", "flag-jm", "flag-jo", "flag-jp", "flag-ke", "flag-kg", "flag-kh", "flag-ki", "flag-km", "flag-kn", "flag-kp", "flag-kr", "flag-kw", "flag-ky", "flag-kz", "flag-la", "flag-lb", "flag-lc", "flag-li", "flag-lk", "flag-lr", "flag-ls", "flag-lt", "flag-lu", "flag-lv", "flag-ly", "flag-ma", "flag-mc", "flag-md", "flag-me", "flag-mf", "flag-mg", "flag-mh", "flag-mk", "flag-ml", "flag-mm", "flag-mn", "flag-mo", "flag-mp", "flag-mq", "flag-mr", "flag-ms", "flag-mt", "flag-mu", "flag-mv", "flag-mw", "flag-mx", "flag-my", "flag-mz", "flag-na", "flag-nc", "flag-ne", "flag-nf", "flag-ng", "flag-ni", "flag-nl", "flag-no", "flag-np", "flag-nr", "flag-nu", "flag-nz", "flag-om", "flag-pa", "flag-pe", "flag-pf", "flag-pg", "flag-ph", "flag-pk", "flag-pl", "flag-pm", "flag-pn", "flag-pr", "flag-ps", "flag-pt", "flag-pw", "flag-py", "flag-qa", "flag-re", "flag-ro", "flag-rs", "flag-ru", "flag-rw", "flag-sa", "flag-sb", "flag-sc", "flag-sd", "flag-se", "flag-sg", "flag-sh", "flag-si", "flag-sj", "flag-sk", "flag-sl", "flag-sm", "flag-sn", "flag-so", "flag-sr", "flag-ss", "flag-st", "flag-sv", "flag-sx", "flag-sy", "flag-sz", "flag-ta", "flag-tc", "flag-td", "flag-tf", "flag-tg", "flag-th", "flag-tj", "flag-tk", "flag-tl", "flag-tm", "flag-tn", "flag-to", "flag-tr", "flag-tt", "flag-tv", "flag-tw", "flag-tz", "flag-ua", "flag-ug", "flag-um", "flag-us", "flag-uy", "flag-uz", "flag-va", "flag-vc", "flag-ve", "flag-vg", "flag-vi", "flag-vn", "flag-vu", "flag-wf", "flag-ws", "flag-xk", "flag-ye", "flag-yt", "flag-za", "flag-zm", "flag-zw"] }], emojis: { "100": { name: "Hundred Points Symbol", unified: "1F4AF", sheet_x: 20, sheet_y: 27, short_names: ["100"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "100,hundred,points,symbol,score,perfect,numbers,century,exam,quiz,test,pass" }, "1234": { name: "Input Symbol for Numbers", unified: "1F522", sheet_x: 23, sheet_y: 18, short_names: ["1234"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "1234,input,symbol,for,numbers,blue-square" }, grinning: { name: "Grinning Face", unified: "1F600", sheet_x: 26, sheet_y: 15, short_names: ["grinning"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: [":D"], search: "grinning,face,smile,happy,joy,:d" }, heart: { name: "Heavy Black Heart", unified: "2764", variations: ["2764-FE0F"], sheet_x: 4, sheet_y: 10, short_names: ["heart"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: ["<3"], search: "heart,heavy,black,love,like,valentines,<3" }, dog: { name: "Dog Face", unified: "1F436", sheet_x: 13, sheet_y: 18, short_names: ["dog"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "dog,face,animal,friend,nature,woof,puppy,pet,faithful" }, soccer: { name: "Soccer Ball", unified: "26BD", variations: ["26BD-FE0F"], sheet_x: 2, sheet_y: 18, short_names: ["soccer"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "soccer,ball,sports,football" }, watch: { name: "Watch", unified: "231A", variations: ["231A-FE0F"], sheet_x: 0, sheet_y: 14, short_names: ["watch"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "watch,time,accessories" }, green_apple: { name: "Green Apple", unified: "1F34F", sheet_x: 7, sheet_y: 16, short_names: ["green_apple"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "green,apple,fruit,nature" }, "flag-af": { name: "Regional Indicator Symbol Letters AF", unified: "1F1E6-1F1EB", sheet_x: 32, sheet_y: 36, short_names: ["flag-af"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,af,regional,indicator,symbol,letters" }, car: { name: "Automobile", unified: "1F697", sheet_x: 29, sheet_y: 35, short_names: ["car", "red_car"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "car,red,automobile,transportation,vehicle" }, "flag-ax": { name: "Regional Indicator Symbol Letters AX", unified: "1F1E6-1F1FD", sheet_x: 33, sheet_y: 7, short_names: ["flag-ax"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ax,regional,indicator,symbol,letters" }, grimacing: { name: "Grimacing Face", unified: "1F62C", sheet_x: 27, sheet_y: 18, short_names: ["grimacing"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "grimacing,face,grimace,teeth" }, taxi: { name: "Taxi", unified: "1F695", sheet_x: 29, sheet_y: 33, short_names: ["taxi"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "taxi,uber,vehicle,cars,transportation" }, iphone: { name: "Mobile Phone", unified: "1F4F1", sheet_x: 22, sheet_y: 11, short_names: ["iphone"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "iphone,mobile,phone,technology,apple,gadgets,dial" }, basketball: { name: "Basketball and Hoop", unified: "1F3C0", sheet_x: 10, sheet_y: 6, short_names: ["basketball"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "basketball,and,hoop,sports,balls,nba" }, cat: { name: "Cat Face", unified: "1F431", sheet_x: 13, sheet_y: 13, short_names: ["cat"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "cat,face,animal,meow,nature,pet" }, apple: { name: "Red Apple", unified: "1F34E", sheet_x: 7, sheet_y: 15, short_names: ["apple"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "apple,red,fruit,mac,school" }, yellow_heart: { name: "Yellow Heart", unified: "1F49B", sheet_x: 20, sheet_y: 2, short_names: ["yellow_heart"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: ["<3"], search: "yellow,heart,love,like,affection,valentines,<3" }, mouse: { name: "Mouse Face", unified: "1F42D", sheet_x: 13, sheet_y: 9, short_names: ["mouse"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "mouse,face,animal,nature,cheese,rodent" }, pear: { name: "Pear", unified: "1F350", sheet_x: 7, sheet_y: 17, short_names: ["pear"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "pear,fruit,nature,food" }, green_heart: { name: "Green Heart", unified: "1F49A", sheet_x: 20, sheet_y: 1, short_names: ["green_heart"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: ["<3"], search: "green,heart,love,like,affection,valentines,<3" }, football: { name: "American Football", unified: "1F3C8", sheet_x: 10, sheet_y: 24, short_names: ["football"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "football,american,sports,balls,nfl" }, grin: { name: "Grinning Face with Smiling Eyes", unified: "1F601", sheet_x: 26, sheet_y: 16, short_names: ["grin"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "grin,grinning,face,with,smiling,eyes,happy,smile,joy" }, "flag-al": { name: "Regional Indicator Symbol Letters AL", unified: "1F1E6-1F1F1", sheet_x: 32, sheet_y: 39, short_names: ["flag-al"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,al,regional,indicator,symbol,letters" }, calling: { name: "Mobile Phone with Rightwards Arrow at Left", unified: "1F4F2", sheet_x: 22, sheet_y: 12, short_names: ["calling"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "calling,mobile,phone,with,rightwards,arrow,at,left,iphone,incoming" }, blue_car: { name: "Recreational Vehicle", unified: "1F699", sheet_x: 29, sheet_y: 37, short_names: ["blue_car"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "blue,car,recreational,vehicle,transportation" }, hamster: { name: "Hamster Face", unified: "1F439", sheet_x: 13, sheet_y: 21, short_names: ["hamster"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "hamster,face,animal,nature" }, blue_heart: { name: "Blue Heart", unified: "1F499", sheet_x: 20, sheet_y: 0, short_names: ["blue_heart"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: ["<3"], search: "blue,heart,love,like,affection,valentines,<3" }, bus: { name: "Bus", unified: "1F68C", sheet_x: 29, sheet_y: 24, short_names: ["bus"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bus,car,vehicle,transportation" }, joy: { name: "Face with Tears of Joy", unified: "1F602", sheet_x: 26, sheet_y: 17, short_names: ["joy"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "joy,face,with,tears,of,cry,weep,happy,haha" }, computer: { name: "Personal Computer", unified: "1F4BB", sheet_x: 20, sheet_y: 39, short_names: ["computer"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "computer,personal,technology,laptop,screen,display,monitor" }, tangerine: { name: "Tangerine", unified: "1F34A", sheet_x: 7, sheet_y: 11, short_names: ["tangerine"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "tangerine,food,fruit,nature" }, baseball: { name: "Baseball", unified: "26BE", variations: ["26BE-FE0F"], sheet_x: 2, sheet_y: 19, short_names: ["baseball"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "baseball,sports,balls" }, "flag-dz": { name: "Regional Indicator Symbol Letters DZ", unified: "1F1E9-1F1FF", sheet_x: 34, sheet_y: 15, short_names: ["flag-dz"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,dz,regional,indicator,symbol,letters" }, tennis: { name: "Tennis Racquet and Ball", unified: "1F3BE", sheet_x: 10, sheet_y: 4, short_names: ["tennis"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "tennis,racquet,and,ball,sports,balls,green" }, trolleybus: { name: "Trolleybus", unified: "1F68E", sheet_x: 29, sheet_y: 26, short_names: ["trolleybus"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "trolleybus,bart,transportation,vehicle" }, keyboard: { name: "Keyboard", unified: "2328", variations: ["2328-FE0F"], sheet_x: 0, sheet_y: 16, short_names: ["keyboard"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "keyboard,technology,computer,type,input,text" }, rabbit: { name: "Rabbit Face", unified: "1F430", sheet_x: 13, sheet_y: 12, short_names: ["rabbit"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "rabbit,face,animal,nature,pet,spring,magic" }, "flag-as": { name: "Regional Indicator Symbol Letters AS", unified: "1F1E6-1F1F8", sheet_x: 33, sheet_y: 3, short_names: ["flag-as"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,as,regional,indicator,symbol,letters" }, lemon: { name: "Lemon", unified: "1F34B", sheet_x: 7, sheet_y: 12, short_names: ["lemon"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "lemon,fruit,nature" }, purple_heart: { name: "Purple Heart", unified: "1F49C", sheet_x: 20, sheet_y: 3, short_names: ["purple_heart"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: ["<3"], search: "purple,heart,love,like,affection,valentines,<3" }, smiley: { name: "Smiling Face with Open Mouth", unified: "1F603", sheet_x: 26, sheet_y: 18, short_names: ["smiley"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: ["=)", "=-)"], search: "smiley,smiling,face,with,open,mouth,happy,joy,haha,:d,=),=-)" }, desktop_computer: { name: "Desktop Computer", unified: "1F5A5", sheet_x: 25, sheet_y: 31, short_names: ["desktop_computer"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "desktop,computer,technology,computing,screen" }, racing_car: { name: "Racing Car", unified: "1F3CE", sheet_x: 10, sheet_y: 40, short_names: ["racing_car"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "racing,car,sports,race,fast,formula,f1" }, volleyball: { name: "Volleyball", unified: "1F3D0", sheet_x: 11, sheet_y: 1, short_names: ["volleyball"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "volleyball,sports,balls" }, banana: { name: "Banana", unified: "1F34C", sheet_x: 7, sheet_y: 13, short_names: ["banana"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "banana,fruit,food,monkey" }, bear: { name: "Bear Face", unified: "1F43B", sheet_x: 13, sheet_y: 23, short_names: ["bear"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bear,face,animal,nature,wild" }, smile: { name: "Smiling Face with Open Mouth and Smiling Eyes", unified: "1F604", sheet_x: 26, sheet_y: 19, short_names: ["smile"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: ["C:", "c:", ":D", ":-D"], search: "smile,smiling,face,with,open,mouth,and,eyes,happy,joy,funny,haha,laugh,like,:d,c:,:-d" }, "flag-ad": { name: "Regional Indicator Symbol Letters AD", unified: "1F1E6-1F1E9", sheet_x: 32, sheet_y: 34, short_names: ["flag-ad"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ad,regional,indicator,symbol,letters" }, broken_heart: { name: "Broken Heart", unified: "1F494", sheet_x: 19, sheet_y: 36, short_names: ["broken_heart"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: ["</3"], search: "broken,heart,sad,sorry,break,</3" }, sweat_smile: { name: "Smiling Face with Open Mouth and Cold Sweat", unified: "1F605", sheet_x: 26, sheet_y: 20, short_names: ["sweat_smile"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sweat,smile,smiling,face,with,open,mouth,and,cold,hot,happy,laugh" }, printer: { name: "Printer", unified: "1F5A8", sheet_x: 25, sheet_y: 32, short_names: ["printer"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "printer,paper,ink" }, rugby_football: { name: "Rugby Football", unified: "1F3C9", sheet_x: 10, sheet_y: 25, short_names: ["rugby_football"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "rugby,football,sports,team" }, heavy_heart_exclamation_mark_ornament: { name: "Heavy Heart Exclamation Mark Ornament", unified: "2763", variations: ["2763-FE0F"], sheet_x: 4, sheet_y: 9, short_names: ["heavy_heart_exclamation_mark_ornament"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "heavy,heart,exclamation,mark,ornament,decoration,love" }, "flag-ao": { name: "Regional Indicator Symbol Letters AO", unified: "1F1E6-1F1F4", sheet_x: 33, sheet_y: 0, short_names: ["flag-ao"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ao,regional,indicator,symbol,letters" }, watermelon: { name: "Watermelon", unified: "1F349", sheet_x: 7, sheet_y: 10, short_names: ["watermelon"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "watermelon,fruit,food,picnic,summer" }, panda_face: { name: "Panda Face", unified: "1F43C", sheet_x: 13, sheet_y: 24, short_names: ["panda_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "panda,face,animal,nature" }, police_car: { name: "Police Car", unified: "1F693", sheet_x: 29, sheet_y: 31, short_names: ["police_car"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "police,car,vehicle,cars,transportation,law,legal,enforcement" }, ambulance: { name: "Ambulance", unified: "1F691", sheet_x: 29, sheet_y: 29, short_names: ["ambulance"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ambulance,health,911,hospital" }, grapes: { name: "Grapes", unified: "1F347", sheet_x: 7, sheet_y: 8, short_names: ["grapes"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "grapes,fruit,food,wine" }, two_hearts: { name: "Two Hearts", unified: "1F495", sheet_x: 19, sheet_y: 37, short_names: ["two_hearts"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "two,hearts,love,like,affection,valentines" }, "flag-ai": { name: "Regional Indicator Symbol Letters AI", unified: "1F1E6-1F1EE", sheet_x: 32, sheet_y: 38, short_names: ["flag-ai"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ai,regional,indicator,symbol,letters" }, three_button_mouse: { name: "Three Button Mouse", unified: "1F5B1", sheet_x: 25, sheet_y: 33, short_names: ["three_button_mouse"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "three,button,mouse,click" }, "8ball": { name: "Billiards", unified: "1F3B1", sheet_x: 9, sheet_y: 32, short_names: ["8ball"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "8ball,billiards,pool,hobby,game,luck,magic" }, laughing: { name: "Smiling Face with Open Mouth and Tightly-Closed Eyes", unified: "1F606", sheet_x: 26, sheet_y: 21, short_names: ["laughing", "satisfied"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: [":>", ":->"], search: "laughing,satisfied,smiling,face,with,open,mouth,and,tightly,closed,eyes,happy,joy,lol,haha,glad,xd,:>,:->" }, koala: { name: "Koala", unified: "1F428", sheet_x: 13, sheet_y: 4, short_names: ["koala"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "koala,animal,nature" }, "flag-aq": { name: "Regional Indicator Symbol Letters AQ", unified: "1F1E6-1F1F6", sheet_x: 33, sheet_y: 1, short_names: ["flag-aq"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,aq,regional,indicator,symbol,letters" }, fire_engine: { name: "Fire Engine", unified: "1F692", sheet_x: 29, sheet_y: 30, short_names: ["fire_engine"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "fire,engine,transportation,cars,vehicle" }, revolving_hearts: { name: "Revolving Hearts", unified: "1F49E", sheet_x: 20, sheet_y: 5, short_names: ["revolving_hearts"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "revolving,hearts,love,like,affection,valentines" }, golf: { name: "Flag in Hole", unified: "26F3", variations: ["26F3-FE0F"], sheet_x: 2, sheet_y: 33, short_names: ["golf"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "golf,flag,in,hole,sports,business,summer" }, innocent: { name: "Smiling Face with Halo", unified: "1F607", sheet_x: 26, sheet_y: 22, short_names: ["innocent"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "innocent,smiling,face,with,halo,angel,heaven" }, strawberry: { name: "Strawberry", unified: "1F353", sheet_x: 7, sheet_y: 20, short_names: ["strawberry"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "strawberry,fruit,food,nature" }, trackball: { name: "Trackball", unified: "1F5B2", sheet_x: 25, sheet_y: 34, short_names: ["trackball"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "trackball,technology,trackpad" }, tiger: { name: "Tiger Face", unified: "1F42F", sheet_x: 13, sheet_y: 11, short_names: ["tiger"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "tiger,face,animal,cat,danger,wild,nature,roar" }, lion_face: { name: "Lion Face", unified: "1F981", sheet_x: 32, sheet_y: 16, short_names: ["lion_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "lion,face,animal,nature" }, "flag-ag": { name: "Regional Indicator Symbol Letters AG", unified: "1F1E6-1F1EC", sheet_x: 32, sheet_y: 37, short_names: ["flag-ag"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ag,regional,indicator,symbol,letters" }, minibus: { name: "Minibus", unified: "1F690", sheet_x: 29, sheet_y: 28, short_names: ["minibus"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "minibus,vehicle,car,transportation" }, melon: { name: "Melon", unified: "1F348", sheet_x: 7, sheet_y: 9, short_names: ["melon"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "melon,fruit,nature,food" }, wink: { name: "Winking Face", unified: "1F609", sheet_x: 26, sheet_y: 24, short_names: ["wink"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: [";)", ";-)"], search: "wink,winking,face,happy,mischievous,secret,;),;-)" }, golfer: { name: "Golfer", unified: "1F3CC", sheet_x: 10, sheet_y: 38, short_names: ["golfer"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "golfer,sports,business" }, heartbeat: { name: "Beating Heart", unified: "1F493", sheet_x: 19, sheet_y: 35, short_names: ["heartbeat"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "heartbeat,beating,heart,love,like,affection,valentines,pink" }, joystick: { name: "Joystick", unified: "1F579", sheet_x: 25, sheet_y: 7, short_names: ["joystick"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "joystick,game,play" }, heartpulse: { name: "Growing Heart", unified: "1F497", sheet_x: 19, sheet_y: 39, short_names: ["heartpulse"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "heartpulse,growing,heart,like,love,affection,valentines,pink" }, "flag-ar": { name: "Regional Indicator Symbol Letters AR", unified: "1F1E6-1F1F7", sheet_x: 33, sheet_y: 2, short_names: ["flag-ar"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ar,regional,indicator,symbol,letters" }, table_tennis_paddle_and_ball: { name: "Table Tennis Paddle and Ball", unified: "1F3D3", sheet_x: 11, sheet_y: 4, short_names: ["table_tennis_paddle_and_ball"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "table,tennis,paddle,and,ball" }, cow: { name: "Cow Face", unified: "1F42E", sheet_x: 13, sheet_y: 10, short_names: ["cow"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "cow,face,beef,ox,animal,nature,moo,milk" }, cherries: { name: "Cherries", unified: "1F352", sheet_x: 7, sheet_y: 19, short_names: ["cherries"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "cherries,food,fruit" }, compression: { name: "Compression", unified: "1F5DC", sheet_x: 26, sheet_y: 1, short_names: ["compression"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "compression,tool" }, truck: { name: "Delivery Truck", unified: "1F69A", sheet_x: 29, sheet_y: 38, short_names: ["truck"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "truck,delivery,cars,transportation" }, blush: { name: "Smiling Face with Smiling Eyes", unified: "1F60A", sheet_x: 26, sheet_y: 25, short_names: ["blush"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: [":)"], search: "blush,smiling,face,with,eyes,smile,happy,flushed,crush,embarrassed,shy,joy,:)" }, slightly_smiling_face: { name: "Slightly Smiling Face", unified: "1F642", sheet_x: 27, sheet_y: 40, short_names: ["slightly_smiling_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: [":)", "(:", ":-)"], search: "slightly,smiling,face,:),(:,:-)" }, pig: { name: "Pig Face", unified: "1F437", sheet_x: 13, sheet_y: 19, short_names: ["pig"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "pig,face,animal,oink,nature" }, sparkling_heart: { name: "Sparkling Heart", unified: "1F496", sheet_x: 19, sheet_y: 38, short_names: ["sparkling_heart"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sparkling,heart,love,like,affection,valentines" }, badminton_racquet_and_shuttlecock: { name: "Badminton Racquet and Shuttlecock", unified: "1F3F8", sheet_x: 11, sheet_y: 38, short_names: ["badminton_racquet_and_shuttlecock"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "badminton,racquet,and,shuttlecock" }, peach: { name: "Peach", unified: "1F351", sheet_x: 7, sheet_y: 18, short_names: ["peach"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "peach,fruit,nature,food" }, minidisc: { name: "Minidisc", unified: "1F4BD", sheet_x: 21, sheet_y: 0, short_names: ["minidisc"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "minidisc,technology,record,data,disk,90s" }, articulated_lorry: { name: "Articulated Lorry", unified: "1F69B", sheet_x: 29, sheet_y: 39, short_names: ["articulated_lorry"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "articulated,lorry,vehicle,cars,transportation,express" }, "flag-am": { name: "Regional Indicator Symbol Letters AM", unified: "1F1E6-1F1F2", sheet_x: 32, sheet_y: 40, short_names: ["flag-am"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,am,regional,indicator,symbol,letters" }, ice_hockey_stick_and_puck: { name: "Ice Hockey Stick and Puck", unified: "1F3D2", sheet_x: 11, sheet_y: 3, short_names: ["ice_hockey_stick_and_puck"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ice,hockey,stick,and,puck" }, pineapple: { name: "Pineapple", unified: "1F34D", sheet_x: 7, sheet_y: 14, short_names: ["pineapple"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "pineapple,fruit,nature,food" }, "flag-aw": { name: "Regional Indicator Symbol Letters AW", unified: "1F1E6-1F1FC", sheet_x: 33, sheet_y: 6, short_names: ["flag-aw"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,aw,regional,indicator,symbol,letters" }, pig_nose: { name: "Pig Nose", unified: "1F43D", sheet_x: 13, sheet_y: 25, short_names: ["pig_nose"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "pig,nose,animal,oink" }, floppy_disk: { name: "Floppy Disk", unified: "1F4BE", sheet_x: 21, sheet_y: 1, short_names: ["floppy_disk"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "floppy,disk,oldschool,technology,save,90s,80s" }, tractor: { name: "Tractor", unified: "1F69C", sheet_x: 29, sheet_y: 40, short_names: ["tractor"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "tractor,vehicle,car,farming,agriculture" }, upside_down_face: { name: "Upside-Down Face", unified: "1F643", sheet_x: 28, sheet_y: 0, short_names: ["upside_down_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "upside,down,face" }, cupid: { name: "Heart with Arrow", unified: "1F498", sheet_x: 19, sheet_y: 40, short_names: ["cupid"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "cupid,heart,with,arrow,love,like,affection,valentines" }, cd: { name: "Optical Disc", unified: "1F4BF", sheet_x: 21, sheet_y: 2, short_names: ["cd"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "cd,optical,disc,technology,dvd,disk,90s" }, gift_heart: { name: "Heart with Ribbon", unified: "1F49D", sheet_x: 20, sheet_y: 4, short_names: ["gift_heart"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "gift,heart,with,ribbon,love,valentines" }, "flag-au": { name: "Regional Indicator Symbol Letters AU", unified: "1F1E6-1F1FA", sheet_x: 33, sheet_y: 5, short_names: ["flag-au"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,au,regional,indicator,symbol,letters" }, field_hockey_stick_and_ball: { name: "Field Hockey Stick and Ball", unified: "1F3D1", sheet_x: 11, sheet_y: 2, short_names: ["field_hockey_stick_and_ball"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "field,hockey,stick,and,ball" }, tomato: { name: "Tomato", unified: "1F345", sheet_x: 7, sheet_y: 6, short_names: ["tomato"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "tomato,fruit,vegetable,nature,food" }, racing_motorcycle: { name: "Racing Motorcycle", unified: "1F3CD", sheet_x: 10, sheet_y: 39, short_names: ["racing_motorcycle"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "racing,motorcycle,race,sports,fast" }, relaxed: { name: "White Smiling Face", unified: "263A", variations: ["263A-FE0F"], sheet_x: 1, sheet_y: 25, short_names: ["relaxed"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "relaxed,white,smiling,face,blush,massage,happiness" }, frog: { name: "Frog Face", unified: "1F438", sheet_x: 13, sheet_y: 20, short_names: ["frog"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "frog,face,animal,nature,croak" }, cricket_bat_and_ball: { name: "Cricket Bat and Ball", unified: "1F3CF", sheet_x: 11, sheet_y: 0, short_names: ["cricket_bat_and_ball"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "cricket,bat,and,ball" }, dvd: { name: "Dvd", unified: "1F4C0", sheet_x: 21, sheet_y: 3, short_names: ["dvd"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "dvd,cd,disk,disc" }, octopus: { name: "Octopus", unified: "1F419", sheet_x: 12, sheet_y: 30, short_names: ["octopus"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "octopus,animal,creature,ocean,sea,nature,beach" }, bike: { name: "Bicycle", unified: "1F6B2", sheet_x: 30, sheet_y: 26, short_names: ["bike"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bike,bicycle,sports,exercise,hipster" }, heart_decoration: { name: "Heart Decoration", unified: "1F49F", sheet_x: 20, sheet_y: 6, short_names: ["heart_decoration"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "heart,decoration,purple-square,love,like" }, yum: { name: "Face Savouring Delicious Food", unified: "1F60B", sheet_x: 26, sheet_y: 26, short_names: ["yum"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "yum,face,savouring,delicious,food,happy,joy,tongue,smile,silly,yummy" }, eggplant: { name: "Aubergine", unified: "1F346", sheet_x: 7, sheet_y: 7, short_names: ["eggplant"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "eggplant,aubergine,vegetable,nature,food" }, "flag-at": { name: "Regional Indicator Symbol Letters AT", unified: "1F1E6-1F1F9", sheet_x: 33, sheet_y: 4, short_names: ["flag-at"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,at,regional,indicator,symbol,letters" }, rotating_light: { name: "Police Cars Revolving Light", unified: "1F6A8", sheet_x: 30, sheet_y: 16, short_names: ["rotating_light"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "rotating,light,police,cars,revolving,ambulance,911,emergency,alert,error,pinged,law,legal" }, monkey_face: { name: "Monkey Face", unified: "1F435", sheet_x: 13, sheet_y: 17, short_names: ["monkey_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: [":o)"], search: "monkey,face,animal,nature,circus,:o)" }, ski: { name: "Ski and Ski Boot", unified: "1F3BF", sheet_x: 10, sheet_y: 5, short_names: ["ski"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ski,and,boot,sports,winter,cold,snow" }, hot_pepper: { name: "Hot Pepper", unified: "1F336", sheet_x: 6, sheet_y: 32, short_names: ["hot_pepper"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "hot,pepper,food,spicy" }, peace_symbol: { name: "Peace Symbol", unified: "262E", variations: ["262E-FE0F"], sheet_x: 1, sheet_y: 21, short_names: ["peace_symbol"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "peace,symbol,hippie" }, "flag-az": { name: "Regional Indicator Symbol Letters AZ", unified: "1F1E6-1F1FF", sheet_x: 33, sheet_y: 8, short_names: ["flag-az"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,az,regional,indicator,symbol,letters" }, relieved: { name: "Relieved Face", unified: "1F60C", sheet_x: 26, sheet_y: 27, short_names: ["relieved"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "relieved,face,relaxed,phew,massage,happiness" }, vhs: { name: "Videocassette", unified: "1F4FC", sheet_x: 22, sheet_y: 22, short_names: ["vhs"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "vhs,videocassette,record,video,oldschool,90s,80s" }, oncoming_police_car: { name: "Oncoming Police Car", unified: "1F694", sheet_x: 29, sheet_y: 32, short_names: ["oncoming_police_car"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "oncoming,police,car,vehicle,law,legal,enforcement,911" }, corn: { name: "Ear of Maize", unified: "1F33D", sheet_x: 6, sheet_y: 39, short_names: ["corn"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "corn,ear,of,maize,food,vegetable,plant" }, latin_cross: { name: "Latin Cross", unified: "271D", variations: ["271D-FE0F"], sheet_x: 3, sheet_y: 37, short_names: ["latin_cross"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "latin,cross,christianity" }, camera: { name: "Camera", unified: "1F4F7", sheet_x: 22, sheet_y: 17, short_names: ["camera"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "camera,gadgets,photography" }, see_no_evil: { name: "See-No-Evil Monkey", unified: "1F648", sheet_x: 28, sheet_y: 20, short_names: ["see_no_evil"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "see,no,evil,monkey,animal,nature,haha" }, heart_eyes: { name: "Smiling Face with Heart-Shaped Eyes", unified: "1F60D", sheet_x: 26, sheet_y: 28, short_names: ["heart_eyes"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "heart,eyes,smiling,face,with,shaped,love,like,affection,valentines,infatuation,crush" }, "flag-bs": { name: "Regional Indicator Symbol Letters BS", unified: "1F1E7-1F1F8", sheet_x: 33, sheet_y: 24, short_names: ["flag-bs"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,bs,regional,indicator,symbol,letters" }, skier: { name: "Skier", unified: "26F7", sheet_x: 2, sheet_y: 36, short_names: ["skier"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "skier,sports,winter,snow" }, oncoming_bus: { name: "Oncoming Bus", unified: "1F68D", sheet_x: 29, sheet_y: 25, short_names: ["oncoming_bus"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "oncoming,bus,vehicle,transportation" }, snowboarder: { name: "Snowboarder", unified: "1F3C2", sheet_x: 10, sheet_y: 8, short_names: ["snowboarder"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "snowboarder,sports,winter" }, sweet_potato: { name: "Roasted Sweet Potato", unified: "1F360", sheet_x: 7, sheet_y: 33, short_names: ["sweet_potato"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sweet,potato,roasted,food,nature" }, hear_no_evil: { name: "Hear-No-Evil Monkey", unified: "1F649", sheet_x: 28, sheet_y: 21, short_names: ["hear_no_evil"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "hear,no,evil,monkey,animal,nature" }, "flag-bh": { name: "Regional Indicator Symbol Letters BH", unified: "1F1E7-1F1ED", sheet_x: 33, sheet_y: 15, short_names: ["flag-bh"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,bh,regional,indicator,symbol,letters" }, star_and_crescent: { name: "Star and Crescent", unified: "262A", variations: ["262A-FE0F"], sheet_x: 1, sheet_y: 20, short_names: ["star_and_crescent"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "star,and,crescent,islam" }, kissing_heart: { name: "Face Throwing a Kiss", unified: "1F618", sheet_x: 26, sheet_y: 39, short_names: ["kissing_heart"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "kissing,heart,face,throwing,a,kiss,love,like,affection,valentines,infatuation" }, camera_with_flash: { name: "Camera with Flash", unified: "1F4F8", sheet_x: 22, sheet_y: 18, short_names: ["camera_with_flash"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "camera,with,flash,photography,gadgets" }, ice_skate: { name: "Ice Skate", unified: "26F8", sheet_x: 2, sheet_y: 37, short_names: ["ice_skate"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ice,skate,sports" }, oncoming_automobile: { name: "Oncoming Automobile", unified: "1F698", sheet_x: 29, sheet_y: 36, short_names: ["oncoming_automobile"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "oncoming,automobile,car,vehicle,transportation" }, speak_no_evil: { name: "Speak-No-Evil Monkey", unified: "1F64A", sheet_x: 28, sheet_y: 22, short_names: ["speak_no_evil"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "speak,no,evil,monkey,animal,nature,omg" }, honey_pot: { name: "Honey Pot", unified: "1F36F", sheet_x: 8, sheet_y: 7, short_names: ["honey_pot"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "honey,pot,bees,sweet,kitchen" }, kissing: { name: "Kissing Face", unified: "1F617", sheet_x: 26, sheet_y: 38, short_names: ["kissing"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "kissing,face,love,like,3,valentines,infatuation" }, video_camera: { name: "Video Camera", unified: "1F4F9", sheet_x: 22, sheet_y: 19, short_names: ["video_camera"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "video,camera,film,record" }, om_symbol: { name: "Om Symbol", unified: "1F549", sheet_x: 24, sheet_y: 5, short_names: ["om_symbol"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "om,symbol,hinduism,buddhism,sikhism,jainism" }, "flag-bd": { name: "Regional Indicator Symbol Letters BD", unified: "1F1E7-1F1E9", sheet_x: 33, sheet_y: 11, short_names: ["flag-bd"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,bd,regional,indicator,symbol,letters" }, monkey: { name: "Monkey", unified: "1F412", sheet_x: 12, sheet_y: 23, short_names: ["monkey"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "monkey,animal,nature,banana,circus" }, movie_camera: { name: "Movie Camera", unified: "1F3A5", sheet_x: 9, sheet_y: 20, short_names: ["movie_camera"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "movie,camera,film,record" }, oncoming_taxi: { name: "Oncoming Taxi", unified: "1F696", sheet_x: 29, sheet_y: 34, short_names: ["oncoming_taxi"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "oncoming,taxi,vehicle,cars,uber" }, "flag-bb": { name: "Regional Indicator Symbol Letters BB", unified: "1F1E7-1F1E7", sheet_x: 33, sheet_y: 10, short_names: ["flag-bb"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,bb,regional,indicator,symbol,letters" }, kissing_smiling_eyes: { name: "Kissing Face with Smiling Eyes", unified: "1F619", sheet_x: 26, sheet_y: 40, short_names: ["kissing_smiling_eyes"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "kissing,smiling,eyes,face,with,affection,valentines,infatuation" }, bread: { name: "Bread", unified: "1F35E", sheet_x: 7, sheet_y: 31, short_names: ["bread"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bread,food,wheat,breakfast,toast" }, bow_and_arrow: { name: "Bow and Arrow", unified: "1F3F9", sheet_x: 11, sheet_y: 39, short_names: ["bow_and_arrow"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bow,and,arrow,sports" }, wheel_of_dharma: { name: "Wheel of Dharma", unified: "2638", variations: ["2638-FE0F"], sheet_x: 1, sheet_y: 23, short_names: ["wheel_of_dharma"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "wheel,of,dharma,hinduism,buddhism,sikhism,jainism" }, aerial_tramway: { name: "Aerial Tramway", unified: "1F6A1", sheet_x: 30, sheet_y: 4, short_names: ["aerial_tramway"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "aerial,tramway,transportation,vehicle,ski" }, cheese_wedge: { name: "Cheese Wedge", unified: "1F9C0", sheet_x: 32, sheet_y: 20, short_names: ["cheese_wedge"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "cheese,wedge,food,chadder" }, film_projector: { name: "Film Projector", unified: "1F4FD", sheet_x: 22, sheet_y: 23, short_names: ["film_projector"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "film,projector,video,tape,record,movie" }, fishing_pole_and_fish: { name: "Fishing Pole and Fish", unified: "1F3A3", sheet_x: 9, sheet_y: 18, short_names: ["fishing_pole_and_fish"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "fishing,pole,and,fish,food,hobby,summer" }, kissing_closed_eyes: { name: "Kissing Face with Closed Eyes", unified: "1F61A", sheet_x: 27, sheet_y: 0, short_names: ["kissing_closed_eyes"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "kissing,closed,eyes,face,with,love,like,affection,valentines,infatuation" }, star_of_david: { name: "Star of David", unified: "2721", variations: ["2721-FE0F"], sheet_x: 3, sheet_y: 38, short_names: ["star_of_david"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "star,of,david,judaism" }, chicken: { name: "Chicken", unified: "1F414", sheet_x: 12, sheet_y: 25, short_names: ["chicken"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "chicken,animal,cluck,nature,bird" }, "flag-by": { name: "Regional Indicator Symbol Letters BY", unified: "1F1E7-1F1FE", sheet_x: 33, sheet_y: 28, short_names: ["flag-by"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,by,regional,indicator,symbol,letters" }, six_pointed_star: { name: "Six Pointed Star with Middle Dot", unified: "1F52F", sheet_x: 23, sheet_y: 31, short_names: ["six_pointed_star"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "six,pointed,star,with,middle,dot,purple-square,religion,jewish,hexagram" }, penguin: { name: "Penguin", unified: "1F427", sheet_x: 13, sheet_y: 3, short_names: ["penguin"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "penguin,animal,nature" }, mountain_cableway: { name: "Mountain Cableway", unified: "1F6A0", sheet_x: 30, sheet_y: 3, short_names: ["mountain_cableway"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "mountain,cableway,transportation,vehicle,ski" }, stuck_out_tongue_winking_eye: { name: "Face with Stuck-out Tongue and Winking Eye", unified: "1F61C", sheet_x: 27, sheet_y: 2, short_names: ["stuck_out_tongue_winking_eye"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: [";p", ";-p", ";b", ";-b", ";P", ";-P"], search: "stuck,out,tongue,winking,eye,face,with,and,prank,childish,playful,mischievous,smile,;p,;-p,;b,;-b" }, "flag-be": { name: "Regional Indicator Symbol Letters BE", unified: "1F1E7-1F1EA", sheet_x: 33, sheet_y: 12, short_names: ["flag-be"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,be,regional,indicator,symbol,letters" }, film_frames: { name: "Film Frames", unified: "1F39E", sheet_x: 9, sheet_y: 13, short_names: ["film_frames"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "film,frames,movie" }, poultry_leg: { name: "Poultry Leg", unified: "1F357", sheet_x: 7, sheet_y: 24, short_names: ["poultry_leg"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "poultry,leg,food,meat,drumstick,bird,chicken,turkey" }, rowboat: { name: "Rowboat", unified: "1F6A3", sheet_x: 30, sheet_y: 6, short_names: ["rowboat"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F6A3-1F3FB": { unified: "1F6A3-1F3FB", image: "1f6a3-1f3fb.png", sheet_x: 30, sheet_y: 7, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F6A3-1F3FC": { unified: "1F6A3-1F3FC", image: "1f6a3-1f3fc.png", sheet_x: 30, sheet_y: 8, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F6A3-1F3FD": { unified: "1F6A3-1F3FD", image: "1f6a3-1f3fd.png", sheet_x: 30, sheet_y: 9, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F6A3-1F3FE": { unified: "1F6A3-1F3FE", image: "1f6a3-1f3fe.png", sheet_x: 30, sheet_y: 10, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F6A3-1F3FF": { unified: "1F6A3-1F3FF", image: "1f6a3-1f3ff.png", sheet_x: 30, sheet_y: 11, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "rowboat,sports,hobby,water,ship" }, menorah_with_nine_branches: { name: "Menorah with Nine Branches", unified: "1F54E", sheet_x: 24, sheet_y: 10, short_names: ["menorah_with_nine_branches"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "menorah,with,nine,branches,hanukkah,candles,jewish" }, stuck_out_tongue_closed_eyes: { name: "Face with Stuck-out Tongue and Tightly-Closed Eyes", unified: "1F61D", sheet_x: 27, sheet_y: 3, short_names: ["stuck_out_tongue_closed_eyes"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "stuck,out,tongue,closed,eyes,face,with,and,tightly,prank,playful,mischievous,smile" }, "flag-bz": { name: "Regional Indicator Symbol Letters BZ", unified: "1F1E7-1F1FF", sheet_x: 33, sheet_y: 29, short_names: ["flag-bz"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,bz,regional,indicator,symbol,letters" }, swimmer: { name: "Swimmer", unified: "1F3CA", sheet_x: 10, sheet_y: 26, short_names: ["swimmer"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F3CA-1F3FB": { unified: "1F3CA-1F3FB", image: "1f3ca-1f3fb.png", sheet_x: 10, sheet_y: 27, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F3CA-1F3FC": { unified: "1F3CA-1F3FC", image: "1f3ca-1f3fc.png", sheet_x: 10, sheet_y: 28, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F3CA-1F3FD": { unified: "1F3CA-1F3FD", image: "1f3ca-1f3fd.png", sheet_x: 10, sheet_y: 29, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F3CA-1F3FE": { unified: "1F3CA-1F3FE", image: "1f3ca-1f3fe.png", sheet_x: 10, sheet_y: 30, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F3CA-1F3FF": { unified: "1F3CA-1F3FF", image: "1f3ca-1f3ff.png", sheet_x: 10, sheet_y: 31, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "swimmer,sports,exercise,human,athlete,water,summer" }, bird: { name: "Bird", unified: "1F426", sheet_x: 13, sheet_y: 2, short_names: ["bird"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bird,animal,nature,fly,tweet,spring" }, telephone_receiver: { name: "Telephone Receiver", unified: "1F4DE", sheet_x: 21, sheet_y: 33, short_names: ["telephone_receiver"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "telephone,receiver,technology,communication,dial" }, meat_on_bone: { name: "Meat on Bone", unified: "1F356", sheet_x: 7, sheet_y: 23, short_names: ["meat_on_bone"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "meat,on,bone,good,food,drumstick" }, suspension_railway: { name: "Suspension Railway", unified: "1F69F", sheet_x: 30, sheet_y: 2, short_names: ["suspension_railway"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "suspension,railway,vehicle,transportation" }, "flag-bj": { name: "Regional Indicator Symbol Letters BJ", unified: "1F1E7-1F1EF", sheet_x: 33, sheet_y: 17, short_names: ["flag-bj"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,bj,regional,indicator,symbol,letters" }, yin_yang: { name: "Yin Yang", unified: "262F", variations: ["262F-FE0F"], sheet_x: 1, sheet_y: 22, short_names: ["yin_yang"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "yin,yang,balance" }, stuck_out_tongue: { name: "Face with Stuck-out Tongue", unified: "1F61B", sheet_x: 27, sheet_y: 1, short_names: ["stuck_out_tongue"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: [":p", ":-p", ":P", ":-P", ":b", ":-b"], search: "stuck,out,tongue,face,with,prank,childish,playful,mischievous,smile,:p,:-p,:b,:-b" }, phone: { name: "Black Telephone", unified: "260E", variations: ["260E-FE0F"], sheet_x: 1, sheet_y: 5, short_names: ["phone", "telephone"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "phone,telephone,black,technology,communication,dial" }, railway_car: { name: "Railway Car", unified: "1F683", sheet_x: 29, sheet_y: 15, short_names: ["railway_car"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "railway,car,transportation,vehicle" }, fried_shrimp: { name: "Fried Shrimp", unified: "1F364", sheet_x: 7, sheet_y: 37, short_names: ["fried_shrimp"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "fried,shrimp,food,animal,appetizer,summer" }, surfer: { name: "Surfer", unified: "1F3C4", sheet_x: 10, sheet_y: 15, short_names: ["surfer"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F3C4-1F3FB": { unified: "1F3C4-1F3FB", image: "1f3c4-1f3fb.png", sheet_x: 10, sheet_y: 16, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F3C4-1F3FC": { unified: "1F3C4-1F3FC", image: "1f3c4-1f3fc.png", sheet_x: 10, sheet_y: 17, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F3C4-1F3FD": { unified: "1F3C4-1F3FD", image: "1f3c4-1f3fd.png", sheet_x: 10, sheet_y: 18, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F3C4-1F3FE": { unified: "1F3C4-1F3FE", image: "1f3c4-1f3fe.png", sheet_x: 10, sheet_y: 19, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F3C4-1F3FF": { unified: "1F3C4-1F3FF", image: "1f3c4-1f3ff.png", sheet_x: 10, sheet_y: 20, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "surfer,sports,ocean,sea,summer,beach" }, baby_chick: { name: "Baby Chick", unified: "1F424", sheet_x: 13, sheet_y: 0, short_names: ["baby_chick"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "baby,chick,animal,chicken,bird" }, egg: { name: "Cooking", unified: "1F373", sheet_x: 8, sheet_y: 11, short_names: ["egg"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "egg,cooking,food,breakfast,kitchen" }, "flag-bm": { name: "Regional Indicator Symbol Letters BM", unified: "1F1E7-1F1F2", sheet_x: 33, sheet_y: 19, short_names: ["flag-bm"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,bm,regional,indicator,symbol,letters" }, hatching_chick: { name: "Hatching Chick", unified: "1F423", sheet_x: 12, sheet_y: 40, short_names: ["hatching_chick"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "hatching,chick,animal,chicken,egg,born,baby,bird" }, train: { name: "Tram Car", unified: "1F68B", sheet_x: 29, sheet_y: 23, short_names: ["train"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "train,tram,car,transportation,vehicle,carriage,public,travel" }, pager: { name: "Pager", unified: "1F4DF", sheet_x: 21, sheet_y: 34, short_names: ["pager"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "pager,bbcall,oldschool,90s" }, bath: { name: "Bath", unified: "1F6C0", sheet_x: 31, sheet_y: 14, short_names: ["bath"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F6C0-1F3FB": { unified: "1F6C0-1F3FB", image: "1f6c0-1f3fb.png", sheet_x: 31, sheet_y: 15, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F6C0-1F3FC": { unified: "1F6C0-1F3FC", image: "1f6c0-1f3fc.png", sheet_x: 31, sheet_y: 16, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F6C0-1F3FD": { unified: "1F6C0-1F3FD", image: "1f6c0-1f3fd.png", sheet_x: 31, sheet_y: 17, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F6C0-1F3FE": { unified: "1F6C0-1F3FE", image: "1f6c0-1f3fe.png", sheet_x: 31, sheet_y: 18, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F6C0-1F3FF": { unified: "1F6C0-1F3FF", image: "1f6c0-1f3ff.png", sheet_x: 31, sheet_y: 19, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "bath,clean,shower,bathroom" }, money_mouth_face: { name: "Money-Mouth Face", unified: "1F911", sheet_x: 32, sheet_y: 2, short_names: ["money_mouth_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "money,mouth,face" }, orthodox_cross: { name: "Orthodox Cross", unified: "2626", variations: ["2626-FE0F"], sheet_x: 1, sheet_y: 19, short_names: ["orthodox_cross"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "orthodox,cross,suppedaneum,religion" }, hatched_chick: { name: "Front-Facing Baby Chick", unified: "1F425", sheet_x: 13, sheet_y: 1, short_names: ["hatched_chick"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "hatched,chick,front,facing,baby,animal,chicken,bird" }, place_of_worship: { name: "Place of Worship", unified: "1F6D0", sheet_x: 31, sheet_y: 30, short_names: ["place_of_worship"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "place,of,worship,religion,church,temple,prayer" }, hamburger: { name: "Hamburger", unified: "1F354", sheet_x: 7, sheet_y: 21, short_names: ["hamburger"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "hamburger,meat,fast food,beef,cheeseburger,mcdonalds,burger king" }, "flag-bt": { name: "Regional Indicator Symbol Letters BT", unified: "1F1E7-1F1F9", sheet_x: 33, sheet_y: 25, short_names: ["flag-bt"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,bt,regional,indicator,symbol,letters" }, fax: { name: "Fax Machine", unified: "1F4E0", sheet_x: 21, sheet_y: 35, short_names: ["fax"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "fax,machine,communication,technology" }, nerd_face: { name: "Nerd Face", unified: "1F913", sheet_x: 32, sheet_y: 4, short_names: ["nerd_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "nerd,face" }, monorail: { name: "Monorail", unified: "1F69D", sheet_x: 30, sheet_y: 0, short_names: ["monorail"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "monorail,transportation,vehicle" }, person_with_ball: { name: "Person with Ball", unified: "26F9", sheet_x: 2, sheet_y: 38, short_names: ["person_with_ball"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "26F9-1F3FB": { unified: "26F9-1F3FB", image: "26f9-1f3fb.png", sheet_x: 2, sheet_y: 39, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "26F9-1F3FC": { unified: "26F9-1F3FC", image: "26f9-1f3fc.png", sheet_x: 2, sheet_y: 40, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "26F9-1F3FD": { unified: "26F9-1F3FD", image: "26f9-1f3fd.png", sheet_x: 3, sheet_y: 0, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "26F9-1F3FE": { unified: "26F9-1F3FE", image: "26f9-1f3fe.png", sheet_x: 3, sheet_y: 1, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "26F9-1F3FF": { unified: "26F9-1F3FF", image: "26f9-1f3ff.png", sheet_x: 3, sheet_y: 2, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "person,with,ball,sports,human" }, weight_lifter: { name: "Weight Lifter", unified: "1F3CB", sheet_x: 10, sheet_y: 32, short_names: ["weight_lifter"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F3CB-1F3FB": { unified: "1F3CB-1F3FB", image: "1f3cb-1f3fb.png", sheet_x: 10, sheet_y: 33, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F3CB-1F3FC": { unified: "1F3CB-1F3FC", image: "1f3cb-1f3fc.png", sheet_x: 10, sheet_y: 34, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F3CB-1F3FD": { unified: "1F3CB-1F3FD", image: "1f3cb-1f3fd.png", sheet_x: 10, sheet_y: 35, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F3CB-1F3FE": { unified: "1F3CB-1F3FE", image: "1f3cb-1f3fe.png", sheet_x: 10, sheet_y: 36, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F3CB-1F3FF": { unified: "1F3CB-1F3FF", image: "1f3cb-1f3ff.png", sheet_x: 10, sheet_y: 37, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "weight,lifter,sports,training,exercise" }, sunglasses: { name: "Smiling Face with Sunglasses", unified: "1F60E", sheet_x: 26, sheet_y: 29, short_names: ["sunglasses"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: ["8)"], search: "sunglasses,smiling,face,with,cool,smile,summer,beach,8)" }, wolf: { name: "Wolf Face", unified: "1F43A", sheet_x: 13, sheet_y: 22, short_names: ["wolf"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "wolf,face,animal,nature,wild" }, bullettrain_side: { name: "High-Speed Train", unified: "1F684", sheet_x: 29, sheet_y: 16, short_names: ["bullettrain_side"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bullettrain,side,high,speed,train,transportation,vehicle" }, ophiuchus: { name: "Ophiuchus", unified: "26CE", sheet_x: 2, sheet_y: 23, short_names: ["ophiuchus"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ophiuchus,sign,purple-square,constellation,astrology" }, "flag-bo": { name: "Regional Indicator Symbol Letters BO", unified: "1F1E7-1F1F4", sheet_x: 33, sheet_y: 21, short_names: ["flag-bo"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,bo,regional,indicator,symbol,letters" }, tv: { name: "Television", unified: "1F4FA", sheet_x: 22, sheet_y: 20, short_names: ["tv"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "tv,television,technology,program,oldschool,show" }, fries: { name: "French Fries", unified: "1F35F", sheet_x: 7, sheet_y: 32, short_names: ["fries"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "fries,french,chips,snack,fast food" }, bicyclist: { name: "Bicyclist", unified: "1F6B4", sheet_x: 30, sheet_y: 28, short_names: ["bicyclist"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F6B4-1F3FB": { unified: "1F6B4-1F3FB", image: "1f6b4-1f3fb.png", sheet_x: 30, sheet_y: 29, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F6B4-1F3FC": { unified: "1F6B4-1F3FC", image: "1f6b4-1f3fc.png", sheet_x: 30, sheet_y: 30, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F6B4-1F3FD": { unified: "1F6B4-1F3FD", image: "1f6b4-1f3fd.png", sheet_x: 30, sheet_y: 31, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F6B4-1F3FE": { unified: "1F6B4-1F3FE", image: "1f6b4-1f3fe.png", sheet_x: 30, sheet_y: 32, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F6B4-1F3FF": { unified: "1F6B4-1F3FF", image: "1f6b4-1f3ff.png", sheet_x: 30, sheet_y: 33, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "bicyclist,sports,bike,exercise,hipster" }, aries: { name: "Aries", unified: "2648", variations: ["2648-FE0F"], sheet_x: 1, sheet_y: 26, short_names: ["aries"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "aries,sign,purple-square,zodiac,astrology" }, hugging_face: { name: "Hugging Face", unified: "1F917", sheet_x: 32, sheet_y: 8, short_names: ["hugging_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "hugging,face" }, "flag-bq": { name: "Regional Indicator Symbol Letters BQ", unified: "1F1E7-1F1F6", sheet_x: 33, sheet_y: 22, short_names: ["flag-bq"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,bq,regional,indicator,symbol,letters" }, bullettrain_front: { name: "High-Speed Train with Bullet Nose", unified: "1F685", sheet_x: 29, sheet_y: 17, short_names: ["bullettrain_front"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bullettrain,front,high,speed,train,with,bullet,nose,transportation,vehicle,fast,public,travel" }, radio: { name: "Radio", unified: "1F4FB", sheet_x: 22, sheet_y: 21, short_names: ["radio"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "radio,communication,music,podcast,program" }, hotdog: { name: "Hot Dog", unified: "1F32D", sheet_x: 6, sheet_y: 23, short_names: ["hotdog"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "hotdog,hot,dog" }, boar: { name: "Boar", unified: "1F417", sheet_x: 12, sheet_y: 28, short_names: ["boar"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "boar,animal,nature" }, studio_microphone: { name: "Studio Microphone", unified: "1F399", sheet_x: 9, sheet_y: 10, short_names: ["studio_microphone"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "studio,microphone,singer,recording,artist" }, pizza: { name: "Slice of Pizza", unified: "1F355", sheet_x: 7, sheet_y: 22, short_names: ["pizza"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "pizza,slice,of,food,party" }, "flag-ba": { name: "Regional Indicator Symbol Letters BA", unified: "1F1E7-1F1E6", sheet_x: 33, sheet_y: 9, short_names: ["flag-ba"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ba,regional,indicator,symbol,letters" }, mountain_bicyclist: { name: "Mountain Bicyclist", unified: "1F6B5", sheet_x: 30, sheet_y: 34, short_names: ["mountain_bicyclist"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F6B5-1F3FB": { unified: "1F6B5-1F3FB", image: "1f6b5-1f3fb.png", sheet_x: 30, sheet_y: 35, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F6B5-1F3FC": { unified: "1F6B5-1F3FC", image: "1f6b5-1f3fc.png", sheet_x: 30, sheet_y: 36, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F6B5-1F3FD": { unified: "1F6B5-1F3FD", image: "1f6b5-1f3fd.png", sheet_x: 30, sheet_y: 37, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F6B5-1F3FE": { unified: "1F6B5-1F3FE", image: "1f6b5-1f3fe.png", sheet_x: 30, sheet_y: 38, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F6B5-1F3FF": { unified: "1F6B5-1F3FF", image: "1f6b5-1f3ff.png", sheet_x: 30, sheet_y: 39, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "mountain,bicyclist,transportation,sports,human,race,bike" }, smirk: { name: "Smirking Face", unified: "1F60F", sheet_x: 26, sheet_y: 30, short_names: ["smirk"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "smirk,smirking,face,smile,mean,prank,smug,sarcasm" }, light_rail: { name: "Light Rail", unified: "1F688", sheet_x: 29, sheet_y: 20, short_names: ["light_rail"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "light,rail,transportation,vehicle" }, horse: { name: "Horse Face", unified: "1F434", sheet_x: 13, sheet_y: 16, short_names: ["horse"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "horse,face,animal,brown,nature" }, taurus: { name: "Taurus", unified: "2649", variations: ["2649-FE0F"], sheet_x: 1, sheet_y: 27, short_names: ["taurus"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "taurus,purple-square,sign,zodiac,astrology" }, gemini: { name: "Gemini", unified: "264A", variations: ["264A-FE0F"], sheet_x: 1, sheet_y: 28, short_names: ["gemini"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "gemini,sign,zodiac,purple-square,astrology" }, horse_racing: { name: "Horse Racing", unified: "1F3C7", sheet_x: 10, sheet_y: 23, short_names: ["horse_racing"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "horse,racing,animal,betting,competition,gambling,luck" }, level_slider: { name: "Level Slider", unified: "1F39A", sheet_x: 9, sheet_y: 11, short_names: ["level_slider"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "level,slider,scale" }, "flag-bw": { name: "Regional Indicator Symbol Letters BW", unified: "1F1E7-1F1FC", sheet_x: 33, sheet_y: 27, short_names: ["flag-bw"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,bw,regional,indicator,symbol,letters" }, unicorn_face: { name: "Unicorn Face", unified: "1F984", sheet_x: 32, sheet_y: 19, short_names: ["unicorn_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "unicorn,face,animal,nature,mystical" }, mountain_railway: { name: "Mountain Railway", unified: "1F69E", sheet_x: 30, sheet_y: 1, short_names: ["mountain_railway"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "mountain,railway,transportation,vehicle" }, spaghetti: { name: "Spaghetti", unified: "1F35D", sheet_x: 7, sheet_y: 30, short_names: ["spaghetti"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "spaghetti,food,italian,noodle" }, no_mouth: { name: "Face Without Mouth", unified: "1F636", sheet_x: 27, sheet_y: 28, short_names: ["no_mouth"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "no,mouth,face,without,hellokitty" }, "flag-br": { name: "Regional Indicator Symbol Letters BR", unified: "1F1E7-1F1F7", sheet_x: 33, sheet_y: 23, short_names: ["flag-br"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,br,regional,indicator,symbol,letters" }, man_in_business_suit_levitating: { name: "Man in Business Suit Levitating", unified: "1F574", sheet_x: 24, sheet_y: 38, short_names: ["man_in_business_suit_levitating"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "man,in,business,suit,levitating" }, control_knobs: { name: "Control Knobs", unified: "1F39B", sheet_x: 9, sheet_y: 12, short_names: ["control_knobs"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "control,knobs,dial" }, bee: { name: "Honeybee", unified: "1F41D", sheet_x: 12, sheet_y: 34, short_names: ["bee", "honeybee"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bee,honeybee,animal,insect,nature,bug,spring,honey" }, neutral_face: { name: "Neutral Face", unified: "1F610", sheet_x: 26, sheet_y: 31, short_names: ["neutral_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: [":|", ":-|"], search: "neutral,face,indifference,meh,:|,:-|" }, steam_locomotive: { name: "Steam Locomotive", unified: "1F682", sheet_x: 29, sheet_y: 14, short_names: ["steam_locomotive"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "steam,locomotive,transportation,vehicle,train" }, cancer: { name: "Cancer", unified: "264B", variations: ["264B-FE0F"], sheet_x: 1, sheet_y: 29, short_names: ["cancer"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "cancer,sign,zodiac,purple-square,astrology" }, taco: { name: "Taco", unified: "1F32E", sheet_x: 6, sheet_y: 24, short_names: ["taco"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "taco,food,mexican" }, burrito: { name: "Burrito", unified: "1F32F", sheet_x: 6, sheet_y: 25, short_names: ["burrito"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "burrito,food,mexican" }, expressionless: { name: "Expressionless Face", unified: "1F611", sheet_x: 26, sheet_y: 32, short_names: ["expressionless"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "expressionless,face,indifferent,-_-,meh" }, trophy: { name: "Trophy", unified: "1F3C6", sheet_x: 10, sheet_y: 22, short_names: ["trophy"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "trophy,win,award,contest,place,ftw,ceremony" }, "train2": { name: "Train", unified: "1F686", sheet_x: 29, sheet_y: 18, short_names: ["train2"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "train2,train,transportation,vehicle" }, "flag-io": { name: "Regional Indicator Symbol Letters IO", unified: "1F1EE-1F1F4", sheet_x: 35, sheet_y: 21, short_names: ["flag-io"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,io,regional,indicator,symbol,letters" }, bug: { name: "Bug", unified: "1F41B", sheet_x: 12, sheet_y: 32, short_names: ["bug"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bug,animal,insect,nature,worm" }, stopwatch: { name: "Stopwatch", unified: "23F1", sheet_x: 0, sheet_y: 26, short_names: ["stopwatch"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "stopwatch,time,deadline" }, leo: { name: "Leo", unified: "264C", variations: ["264C-FE0F"], sheet_x: 1, sheet_y: 30, short_names: ["leo"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "leo,sign,purple-square,zodiac,astrology" }, virgo: { name: "Virgo", unified: "264D", variations: ["264D-FE0F"], sheet_x: 1, sheet_y: 31, short_names: ["virgo"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "virgo,sign,zodiac,purple-square,astrology" }, running_shirt_with_sash: { name: "Running Shirt with Sash", unified: "1F3BD", sheet_x: 10, sheet_y: 3, short_names: ["running_shirt_with_sash"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "running,shirt,with,sash,play,pageant" }, "flag-vg": { name: "Regional Indicator Symbol Letters VG", unified: "1F1FB-1F1EC", sheet_x: 38, sheet_y: 32, short_names: ["flag-vg"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,vg,regional,indicator,symbol,letters" }, metro: { name: "Metro", unified: "1F687", sheet_x: 29, sheet_y: 19, short_names: ["metro"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "metro,transportation,blue-square,mrt,underground,tube" }, unamused: { name: "Unamused Face", unified: "1F612", sheet_x: 26, sheet_y: 33, short_names: ["unamused"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: [":("], search: "unamused,face,indifference,bored,straight face,serious,:(" }, snail: { name: "Snail", unified: "1F40C", sheet_x: 12, sheet_y: 17, short_names: ["snail"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "snail,slow,animal,shell" }, timer_clock: { name: "Timer Clock", unified: "23F2", sheet_x: 0, sheet_y: 27, short_names: ["timer_clock"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "timer,clock,alarm" }, ramen: { name: "Steaming Bowl", unified: "1F35C", sheet_x: 7, sheet_y: 29, short_names: ["ramen"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ramen,steaming,bowl,food,japanese,noodle,chipsticks" }, beetle: { name: "Lady Beetle", unified: "1F41E", sheet_x: 12, sheet_y: 35, short_names: ["beetle"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "beetle,lady,animal,insect,nature,ladybug" }, face_with_rolling_eyes: { name: "Face with Rolling Eyes", unified: "1F644", sheet_x: 28, sheet_y: 1, short_names: ["face_with_rolling_eyes"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "face,with,rolling,eyes" }, libra: { name: "Libra", unified: "264E", variations: ["264E-FE0F"], sheet_x: 1, sheet_y: 32, short_names: ["libra"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "libra,sign,purple-square,zodiac,astrology" }, stew: { name: "Pot of Food", unified: "1F372", sheet_x: 8, sheet_y: 10, short_names: ["stew"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "stew,pot,of,food,meat,soup" }, sports_medal: { name: "Sports Medal", unified: "1F3C5", sheet_x: 10, sheet_y: 21, short_names: ["sports_medal"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sports,medal,award,winning" }, "flag-bn": { name: "Regional Indicator Symbol Letters BN", unified: "1F1E7-1F1F3", sheet_x: 33, sheet_y: 20, short_names: ["flag-bn"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,bn,regional,indicator,symbol,letters" }, alarm_clock: { name: "Alarm Clock", unified: "23F0", sheet_x: 0, sheet_y: 25, short_names: ["alarm_clock"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "alarm,clock,time,wake" }, tram: { name: "Tram", unified: "1F68A", sheet_x: 29, sheet_y: 22, short_names: ["tram"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "tram,transportation,vehicle" }, fish_cake: { name: "Fish Cake with Swirl Design", unified: "1F365", sheet_x: 7, sheet_y: 38, short_names: ["fish_cake"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "fish,cake,with,swirl,design,food,japan,sea,beach" }, thinking_face: { name: "Thinking Face", unified: "1F914", sheet_x: 32, sheet_y: 5, short_names: ["thinking_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "thinking,face" }, medal: { name: "Military Medal", unified: "1F396", sheet_x: 9, sheet_y: 8, short_names: ["medal"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "medal,military" }, mantelpiece_clock: { name: "Mantelpiece Clock", unified: "1F570", sheet_x: 24, sheet_y: 36, short_names: ["mantelpiece_clock"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "mantelpiece,clock,time" }, station: { name: "Station", unified: "1F689", sheet_x: 29, sheet_y: 21, short_names: ["station"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "station,transportation,vehicle,public" }, "flag-bg": { name: "Regional Indicator Symbol Letters BG", unified: "1F1E7-1F1EC", sheet_x: 33, sheet_y: 14, short_names: ["flag-bg"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,bg,regional,indicator,symbol,letters" }, ant: { name: "Ant", unified: "1F41C", sheet_x: 12, sheet_y: 33, short_names: ["ant"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ant,animal,insect,nature,bug" }, scorpius: { name: "Scorpius", unified: "264F", variations: ["264F-FE0F"], sheet_x: 1, sheet_y: 33, short_names: ["scorpius"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "scorpius,sign,zodiac,purple-square,astrology,scorpio" }, sushi: { name: "Sushi", unified: "1F363", sheet_x: 7, sheet_y: 36, short_names: ["sushi"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sushi,food,fish,japanese,rice" }, flushed: { name: "Flushed Face", unified: "1F633", sheet_x: 27, sheet_y: 25, short_names: ["flushed"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flushed,face,blush,shy,flattered" }, spider: { name: "Spider", unified: "1F577", sheet_x: 25, sheet_y: 5, short_names: ["spider"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "spider,animal,arachnid" }, reminder_ribbon: { name: "Reminder Ribbon", unified: "1F397", sheet_x: 9, sheet_y: 9, short_names: ["reminder_ribbon"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "reminder,ribbon,sports,cause,supprt,awareness" }, helicopter: { name: "Helicopter", unified: "1F681", sheet_x: 29, sheet_y: 13, short_names: ["helicopter"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "helicopter,transportation,vehicle,fly" }, sagittarius: { name: "Sagittarius", unified: "2650", variations: ["2650-FE0F"], sheet_x: 1, sheet_y: 34, short_names: ["sagittarius"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sagittarius,sign,zodiac,purple-square,astrology" }, "flag-bf": { name: "Regional Indicator Symbol Letters BF", unified: "1F1E7-1F1EB", sheet_x: 33, sheet_y: 13, short_names: ["flag-bf"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,bf,regional,indicator,symbol,letters" }, hourglass_flowing_sand: { name: "Hourglass with Flowing Sand", unified: "23F3", sheet_x: 0, sheet_y: 28, short_names: ["hourglass_flowing_sand"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "hourglass,flowing,sand,with,oldschool,time,countdown" }, small_airplane: { name: "Small Airplane", unified: "1F6E9", sheet_x: 31, sheet_y: 37, short_names: ["small_airplane"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "small,airplane,flight,transportation,fly,vehicle" }, rosette: { name: "Rosette", unified: "1F3F5", sheet_x: 11, sheet_y: 36, short_names: ["rosette"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "rosette,flower,decoration,military" }, bento: { name: "Bento Box", unified: "1F371", sheet_x: 8, sheet_y: 9, short_names: ["bento"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bento,box,food,japanese" }, capricorn: { name: "Capricorn", unified: "2651", variations: ["2651-FE0F"], sheet_x: 1, sheet_y: 35, short_names: ["capricorn"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "capricorn,sign,zodiac,purple-square,astrology" }, "flag-bi": { name: "Regional Indicator Symbol Letters BI", unified: "1F1E7-1F1EE", sheet_x: 33, sheet_y: 16, short_names: ["flag-bi"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,bi,regional,indicator,symbol,letters" }, disappointed: { name: "Disappointed Face", unified: "1F61E", sheet_x: 27, sheet_y: 4, short_names: ["disappointed"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: ["):", ":(", ":-("], search: "disappointed,face,sad,upset,depressed,:(,):,:-(" }, scorpion: { name: "Scorpion", unified: "1F982", sheet_x: 32, sheet_y: 17, short_names: ["scorpion"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "scorpion,animal,arachnid" }, hourglass: { name: "Hourglass", unified: "231B", variations: ["231B-FE0F"], sheet_x: 0, sheet_y: 15, short_names: ["hourglass"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "hourglass,time,clock,oldschool,limit,exam,quiz,test" }, crab: { name: "Crab", unified: "1F980", sheet_x: 32, sheet_y: 15, short_names: ["crab"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "crab,animal,crustacean" }, satellite_antenna: { name: "Satellite Antenna", unified: "1F4E1", sheet_x: 21, sheet_y: 36, short_names: ["satellite_antenna"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "satellite,antenna" }, airplane: { name: "Airplane", unified: "2708", variations: ["2708-FE0F"], sheet_x: 3, sheet_y: 7, short_names: ["airplane"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "airplane,vehicle,transportation,flight,fly" }, aquarius: { name: "Aquarius", unified: "2652", variations: ["2652-FE0F"], sheet_x: 1, sheet_y: 36, short_names: ["aquarius"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "aquarius,sign,purple-square,zodiac,astrology" }, ticket: { name: "Ticket", unified: "1F3AB", sheet_x: 9, sheet_y: 26, short_names: ["ticket"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ticket,event,concert,pass" }, worried: { name: "Worried Face", unified: "1F61F", sheet_x: 27, sheet_y: 5, short_names: ["worried"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "worried,face,concern,nervous,:(" }, "flag-cv": { name: "Regional Indicator Symbol Letters CV", unified: "1F1E8-1F1FB", sheet_x: 34, sheet_y: 4, short_names: ["flag-cv"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,cv,regional,indicator,symbol,letters" }, curry: { name: "Curry and Rice", unified: "1F35B", sheet_x: 7, sheet_y: 28, short_names: ["curry"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "curry,and,rice,food,spicy,hot,indian" }, pisces: { name: "Pisces", unified: "2653", variations: ["2653-FE0F"], sheet_x: 1, sheet_y: 37, short_names: ["pisces"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "pisces,purple-square,sign,zodiac,astrology" }, airplane_departure: { name: "Airplane Departure", unified: "1F6EB", sheet_x: 31, sheet_y: 38, short_names: ["airplane_departure"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "airplane,departure,airport,flight,landing" }, "flag-kh": { name: "Regional Indicator Symbol Letters KH", unified: "1F1F0-1F1ED", sheet_x: 35, sheet_y: 32, short_names: ["flag-kh"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,kh,regional,indicator,symbol,letters" }, battery: { name: "Battery", unified: "1F50B", sheet_x: 22, sheet_y: 36, short_names: ["battery"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "battery,power,energy,sustain" }, snake: { name: "Snake", unified: "1F40D", sheet_x: 12, sheet_y: 18, short_names: ["snake"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "snake,animal,evil,nature,hiss,python" }, angry: { name: "Angry Face", unified: "1F620", sheet_x: 27, sheet_y: 6, short_names: ["angry"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: [">:(", ">:-("], search: "angry,face,mad,annoyed,frustrated,>:(,>:-(" }, rice_ball: { name: "Rice Ball", unified: "1F359", sheet_x: 7, sheet_y: 26, short_names: ["rice_ball"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "rice,ball,food,japanese" }, admission_tickets: { name: "Admission Tickets", unified: "1F39F", sheet_x: 9, sheet_y: 14, short_names: ["admission_tickets"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "admission,tickets" }, performing_arts: { name: "Performing Arts", unified: "1F3AD", sheet_x: 9, sheet_y: 28, short_names: ["performing_arts"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "performing,arts,acting,theater,drama" }, rage: { name: "Pouting Face", unified: "1F621", sheet_x: 27, sheet_y: 7, short_names: ["rage"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "rage,pouting,face,angry,mad,hate,despise" }, rice: { name: "Cooked Rice", unified: "1F35A", sheet_x: 7, sheet_y: 27, short_names: ["rice"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "rice,cooked,food,china,asian" }, airplane_arriving: { name: "Airplane Arriving", unified: "1F6EC", sheet_x: 31, sheet_y: 39, short_names: ["airplane_arriving"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "airplane,arriving" }, id: { name: "Squared Id", unified: "1F194", sheet_x: 4, sheet_y: 40, short_names: ["id"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "id,squared,purple-square,words" }, "flag-cm": { name: "Regional Indicator Symbol Letters CM", unified: "1F1E8-1F1F2", sheet_x: 33, sheet_y: 39, short_names: ["flag-cm"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,cm,regional,indicator,symbol,letters" }, turtle: { name: "Turtle", unified: "1F422", sheet_x: 12, sheet_y: 39, short_names: ["turtle"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "turtle,animal,slow,nature,tortoise" }, electric_plug: { name: "Electric Plug", unified: "1F50C", sheet_x: 22, sheet_y: 37, short_names: ["electric_plug"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "electric,plug,charger,power" }, tropical_fish: { name: "Tropical Fish", unified: "1F420", sheet_x: 12, sheet_y: 37, short_names: ["tropical_fish"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "tropical,fish,animal,swim,ocean,beach,nemo" }, bulb: { name: "Electric Light Bulb", unified: "1F4A1", sheet_x: 20, sheet_y: 8, short_names: ["bulb"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bulb,electric,light,electricity,idea" }, pensive: { name: "Pensive Face", unified: "1F614", sheet_x: 26, sheet_y: 35, short_names: ["pensive"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "pensive,face,sad,depressed,okay,upset" }, rice_cracker: { name: "Rice Cracker", unified: "1F358", sheet_x: 7, sheet_y: 25, short_names: ["rice_cracker"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "rice,cracker,food,japanese" }, art: { name: "Artist Palette", unified: "1F3A8", sheet_x: 9, sheet_y: 23, short_names: ["art"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "art,artist,palette,design,paint,draw,colors" }, boat: { name: "Sailboat", unified: "26F5", variations: ["26F5-FE0F"], sheet_x: 2, sheet_y: 35, short_names: ["boat", "sailboat"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "boat,sailboat,ship,summer,transportation,water,sailing" }, atom_symbol: { name: "Atom Symbol", unified: "269B", sheet_x: 2, sheet_y: 10, short_names: ["atom_symbol"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "atom,symbol,science" }, "flag-ca": { name: "Regional Indicator Symbol Letters CA", unified: "1F1E8-1F1E6", sheet_x: 33, sheet_y: 30, short_names: ["flag-ca"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ca,regional,indicator,symbol,letters" }, oden: { name: "Oden", unified: "1F362", sheet_x: 7, sheet_y: 35, short_names: ["oden"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "oden,food,japanese" }, flashlight: { name: "Electric Torch", unified: "1F526", sheet_x: 23, sheet_y: 22, short_names: ["flashlight"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flashlight,electric,torch,dark,camping,sight,night" }, confused: { name: "Confused Face", unified: "1F615", sheet_x: 26, sheet_y: 36, short_names: ["confused"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: [":\\", ":-\\", ":/", ":-/"], search: "confused,face,indifference,huh,weird,hmmm,:\\,:-\\,:/,:-/" }, "u7a7a": { name: "Squared Cjk Unified Ideograph-7a7a", unified: "1F233", sheet_x: 5, sheet_y: 11, short_names: ["u7a7a"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "u7a7a,squared,cjk,unified,ideograph,7a7a,kanji,japanese,chinese,empty,sky,blue-square" }, circus_tent: { name: "Circus Tent", unified: "1F3AA", sheet_x: 9, sheet_y: 25, short_names: ["circus_tent"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "circus,tent,festival,carnival,party" }, motor_boat: { name: "Motor Boat", unified: "1F6E5", sheet_x: 31, sheet_y: 36, short_names: ["motor_boat"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "motor,boat,ship" }, "flag-ic": { name: "Regional Indicator Symbol Letters IC", unified: "1F1EE-1F1E8", sheet_x: 35, sheet_y: 15, short_names: ["flag-ic"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,ic,regional,indicator,symbol,letters" }, fish: { name: "Fish", unified: "1F41F", sheet_x: 12, sheet_y: 36, short_names: ["fish"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "fish,animal,food,nature" }, microphone: { name: "Microphone", unified: "1F3A4", sheet_x: 9, sheet_y: 19, short_names: ["microphone"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "microphone,sound,music,pa" }, "flag-ky": { name: "Regional Indicator Symbol Letters KY", unified: "1F1F0-1F1FE", sheet_x: 35, sheet_y: 39, short_names: ["flag-ky"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ky,regional,indicator,symbol,letters" }, candle: { name: "Candle", unified: "1F56F", sheet_x: 24, sheet_y: 35, short_names: ["candle"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "candle,fire,wax" }, dango: { name: "Dango", unified: "1F361", sheet_x: 7, sheet_y: 34, short_names: ["dango"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "dango,food,barbecue,meat" }, slightly_frowning_face: { name: "Slightly Frowning Face", unified: "1F641", sheet_x: 27, sheet_y: 39, short_names: ["slightly_frowning_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "slightly,frowning,face" }, blowfish: { name: "Blowfish", unified: "1F421", sheet_x: 12, sheet_y: 38, short_names: ["blowfish"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "blowfish,animal,nature,food,sea,ocean" }, "u5272": { name: "Squared Cjk Unified Ideograph-5272", unified: "1F239", sheet_x: 5, sheet_y: 17, short_names: ["u5272"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "u5272,squared,cjk,unified,ideograph,5272,cut,divide,chinese,kanji,pink-square" }, speedboat: { name: "Speedboat", unified: "1F6A4", sheet_x: 30, sheet_y: 12, short_names: ["speedboat"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "speedboat,ship,transportation,vehicle,summer" }, white_frowning_face: { name: "White Frowning Face", unified: "2639", variations: ["2639-FE0F"], sheet_x: 1, sheet_y: 24, short_names: ["white_frowning_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "white,frowning,face" }, dolphin: { name: "Dolphin", unified: "1F42C", sheet_x: 13, sheet_y: 8, short_names: ["dolphin", "flipper"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "dolphin,flipper,animal,nature,fish,sea,ocean,fins,beach" }, radioactive_sign: { name: "Radioactive Sign", unified: "2622", variations: ["2622-FE0F"], sheet_x: 1, sheet_y: 17, short_names: ["radioactive_sign"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "radioactive,sign,nuclear,danger" }, headphones: { name: "Headphone", unified: "1F3A7", sheet_x: 9, sheet_y: 22, short_names: ["headphones"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "headphones,headphone,music,score,gadgets" }, "flag-cf": { name: "Regional Indicator Symbol Letters CF", unified: "1F1E8-1F1EB", sheet_x: 33, sheet_y: 33, short_names: ["flag-cf"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,cf,regional,indicator,symbol,letters" }, ferry: { name: "Ferry", unified: "26F4", sheet_x: 2, sheet_y: 34, short_names: ["ferry"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ferry,boat,ship,yacht" }, wastebasket: { name: "Wastebasket", unified: "1F5D1", sheet_x: 25, sheet_y: 39, short_names: ["wastebasket"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "wastebasket,bin,trash,rubbish,garbage,toss" }, shaved_ice: { name: "Shaved Ice", unified: "1F367", sheet_x: 7, sheet_y: 40, short_names: ["shaved_ice"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "shaved,ice,hot,dessert,summer" }, whale: { name: "Spouting Whale", unified: "1F433", sheet_x: 13, sheet_y: 15, short_names: ["whale"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "whale,spouting,animal,nature,sea,ocean" }, oil_drum: { name: "Oil Drum", unified: "1F6E2", sheet_x: 31, sheet_y: 33, short_names: ["oil_drum"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "oil,drum,barrell" }, ice_cream: { name: "Ice Cream", unified: "1F368", sheet_x: 8, sheet_y: 0, short_names: ["ice_cream"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ice,cream,food,hot,dessert" }, passenger_ship: { name: "Passenger Ship", unified: "1F6F3", sheet_x: 32, sheet_y: 0, short_names: ["passenger_ship"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "passenger,ship,yacht,cruise,ferry" }, biohazard_sign: { name: "Biohazard Sign", unified: "2623", variations: ["2623-FE0F"], sheet_x: 1, sheet_y: 18, short_names: ["biohazard_sign"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "biohazard,sign,danger" }, musical_score: { name: "Musical Score", unified: "1F3BC", sheet_x: 10, sheet_y: 2, short_names: ["musical_score"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "musical,score,treble,clef" }, persevere: { name: "Persevering Face", unified: "1F623", sheet_x: 27, sheet_y: 9, short_names: ["persevere"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "persevere,persevering,face,sick,no,upset,oops" }, "flag-td": { name: "Regional Indicator Symbol Letters TD", unified: "1F1F9-1F1E9", sheet_x: 38, sheet_y: 8, short_names: ["flag-td"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,td,regional,indicator,symbol,letters" }, icecream: { name: "Soft Ice Cream", unified: "1F366", sheet_x: 7, sheet_y: 39, short_names: ["icecream"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "icecream,soft,ice,cream,food,hot,dessert,summer" }, "whale2": { name: "Whale", unified: "1F40B", sheet_x: 12, sheet_y: 16, short_names: ["whale2"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "whale2,whale,animal,nature,sea,ocean" }, musical_keyboard: { name: "Musical Keyboard", unified: "1F3B9", sheet_x: 9, sheet_y: 40, short_names: ["musical_keyboard"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "musical,keyboard,piano,instrument" }, money_with_wings: { name: "Money with Wings", unified: "1F4B8", sheet_x: 20, sheet_y: 36, short_names: ["money_with_wings"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "money,with,wings,dollar,bills,payment,sale" }, confounded: { name: "Confounded Face", unified: "1F616", sheet_x: 26, sheet_y: 37, short_names: ["confounded"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "confounded,face,confused,sick,unwell,oops" }, rocket: { name: "Rocket", unified: "1F680", sheet_x: 29, sheet_y: 12, short_names: ["rocket"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "rocket,launch,ship,staffmode,nasa,outer space,outer_space,fly" }, mobile_phone_off: { name: "Mobile Phone off", unified: "1F4F4", sheet_x: 22, sheet_y: 14, short_names: ["mobile_phone_off"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "mobile,phone,off,mute,orange-square,silence,quiet" }, "flag-cl": { name: "Regional Indicator Symbol Letters CL", unified: "1F1E8-1F1F1", sheet_x: 33, sheet_y: 38, short_names: ["flag-cl"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,cl,regional,indicator,symbol,letters" }, satellite: { name: "Satellite", unified: "1F6F0", sheet_x: 31, sheet_y: 40, short_names: ["satellite"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "satellite,communication,future,radio,space" }, "flag-cn": { name: "Regional Indicator Symbol Letters CN", unified: "1F1E8-1F1F3", sheet_x: 33, sheet_y: 40, short_names: ["flag-cn", "cn"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,cn,regional,indicator,symbol,letters" }, crocodile: { name: "Crocodile", unified: "1F40A", sheet_x: 12, sheet_y: 15, short_names: ["crocodile"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "crocodile,animal,nature,reptile" }, cake: { name: "Shortcake", unified: "1F370", sheet_x: 8, sheet_y: 8, short_names: ["cake"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "cake,shortcake,food,dessert" }, dollar: { name: "Banknote with Dollar Sign", unified: "1F4B5", sheet_x: 20, sheet_y: 33, short_names: ["dollar"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "dollar,banknote,with,sign,money,sales,bill,currency" }, vibration_mode: { name: "Vibration Mode", unified: "1F4F3", sheet_x: 22, sheet_y: 13, short_names: ["vibration_mode"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "vibration,mode,orange-square,phone" }, tired_face: { name: "Tired Face", unified: "1F62B", sheet_x: 27, sheet_y: 17, short_names: ["tired_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "tired,face,sick,whine,upset,frustrated" }, saxophone: { name: "Saxophone", unified: "1F3B7", sheet_x: 9, sheet_y: 38, short_names: ["saxophone"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "saxophone,music,instrument,jazz,blues" }, "flag-cx": { name: "Regional Indicator Symbol Letters CX", unified: "1F1E8-1F1FD", sheet_x: 34, sheet_y: 6, short_names: ["flag-cx"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,cx,regional,indicator,symbol,letters" }, seat: { name: "Seat", unified: "1F4BA", sheet_x: 20, sheet_y: 38, short_names: ["seat"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "seat,sit,airplane,transport,bus,flight,fly" }, trumpet: { name: "Trumpet", unified: "1F3BA", sheet_x: 10, sheet_y: 0, short_names: ["trumpet"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "trumpet,music,brass" }, yen: { name: "Banknote with Yen Sign", unified: "1F4B4", sheet_x: 20, sheet_y: 32, short_names: ["yen"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "yen,banknote,with,sign,money,sales,japanese,dollar,currency" }, leopard: { name: "Leopard", unified: "1F406", sheet_x: 12, sheet_y: 11, short_names: ["leopard"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "leopard,animal,nature" }, "u6709": { name: "Squared Cjk Unified Ideograph-6709", unified: "1F236", sheet_x: 5, sheet_y: 14, short_names: ["u6709"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "u6709,squared,cjk,unified,ideograph,6709,orange-square,chinese,have,kanji" }, birthday: { name: "Birthday Cake", unified: "1F382", sheet_x: 8, sheet_y: 26, short_names: ["birthday"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "birthday,cake,food,dessert" }, weary: { name: "Weary Face", unified: "1F629", sheet_x: 27, sheet_y: 15, short_names: ["weary"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "weary,face,tired,sleepy,sad,frustrated,upset" }, "tiger2": { name: "Tiger", unified: "1F405", sheet_x: 12, sheet_y: 10, short_names: ["tiger2"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "tiger2,tiger,animal,nature,roar" }, "flag-cc": { name: "Regional Indicator Symbol Letters CC", unified: "1F1E8-1F1E8", sheet_x: 33, sheet_y: 31, short_names: ["flag-cc"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,cc,regional,indicator,symbol,letters" }, "u7121": { name: "Squared Cjk Unified Ideograph-7121", unified: "1F21A", variations: ["1F21A-FE0F"], sheet_x: 5, sheet_y: 8, short_names: ["u7121"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "u7121,squared,cjk,unified,ideograph,7121,nothing,chinese,kanji,japanese,orange-square" }, euro: { name: "Banknote with Euro Sign", unified: "1F4B6", sheet_x: 20, sheet_y: 34, short_names: ["euro"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "euro,banknote,with,sign,money,sales,dollar,currency" }, custard: { name: "Custard", unified: "1F36E", sheet_x: 8, sheet_y: 6, short_names: ["custard"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "custard,dessert,food" }, triumph: { name: "Face with Look of Triumph", unified: "1F624", sheet_x: 27, sheet_y: 10, short_names: ["triumph"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "triumph,face,with,look,of,gas,phew,proud,pride" }, anchor: { name: "Anchor", unified: "2693", variations: ["2693-FE0F"], sheet_x: 2, sheet_y: 5, short_names: ["anchor"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "anchor,ship,ferry,sea,boat" }, guitar: { name: "Guitar", unified: "1F3B8", sheet_x: 9, sheet_y: 39, short_names: ["guitar"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "guitar,music,instrument" }, violin: { name: "Violin", unified: "1F3BB", sheet_x: 10, sheet_y: 1, short_names: ["violin"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "violin,music,instrument,orchestra,symphony" }, construction: { name: "Construction Sign", unified: "1F6A7", sheet_x: 30, sheet_y: 15, short_names: ["construction"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "construction,sign,wip,progress,caution,warning" }, water_buffalo: { name: "Water Buffalo", unified: "1F403", sheet_x: 12, sheet_y: 8, short_names: ["water_buffalo"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "water,buffalo,animal,nature,ox,cow" }, candy: { name: "Candy", unified: "1F36C", sheet_x: 8, sheet_y: 4, short_names: ["candy"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "candy,snack,dessert,sweet" }, pound: { name: "Banknote with Pound Sign", unified: "1F4B7", sheet_x: 20, sheet_y: 35, short_names: ["pound"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "pound,banknote,with,sign,british,sterling,money,sales,bills,uk,england,currency" }, "flag-co": { name: "Regional Indicator Symbol Letters CO", unified: "1F1E8-1F1F4", sheet_x: 34, sheet_y: 0, short_names: ["flag-co"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,co,regional,indicator,symbol,letters" }, open_mouth: { name: "Face with Open Mouth", unified: "1F62E", sheet_x: 27, sheet_y: 20, short_names: ["open_mouth"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: [":o", ":-o", ":O", ":-O"], search: "open,mouth,face,with,surprise,impressed,wow,:o,:-o" }, "u7533": { name: "Squared Cjk Unified Ideograph-7533", unified: "1F238", sheet_x: 5, sheet_y: 16, short_names: ["u7533"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "u7533,squared,cjk,unified,ideograph,7533,chinese,japanese,kanji,orange-square" }, ox: { name: "Ox", unified: "1F402", sheet_x: 12, sheet_y: 7, short_names: ["ox"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ox,animal,cow,beef" }, scream: { name: "Face Screaming in Fear", unified: "1F631", sheet_x: 27, sheet_y: 23, short_names: ["scream"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "scream,face,screaming,in,fear,munch,scared,omg" }, "flag-km": { name: "Regional Indicator Symbol Letters KM", unified: "1F1F0-1F1F2", sheet_x: 35, sheet_y: 34, short_names: ["flag-km"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,km,regional,indicator,symbol,letters" }, clapper: { name: "Clapper Board", unified: "1F3AC", sheet_x: 9, sheet_y: 27, short_names: ["clapper"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clapper,board,movie,film,record" }, "u55b6": { name: "Squared Cjk Unified Ideograph-55b6", unified: "1F23A", sheet_x: 5, sheet_y: 18, short_names: ["u55b6"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "u55b6,squared,cjk,unified,ideograph,55b6,japanese,opening hours,orange-square" }, fuelpump: { name: "Fuel Pump", unified: "26FD", variations: ["26FD-FE0F"], sheet_x: 3, sheet_y: 4, short_names: ["fuelpump"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "fuelpump,fuel,pump,gas station,petroleum" }, moneybag: { name: "Money Bag", unified: "1F4B0", sheet_x: 20, sheet_y: 28, short_names: ["moneybag"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "moneybag,money,bag,dollar,payment,coins,sale" }, lollipop: { name: "Lollipop", unified: "1F36D", sheet_x: 8, sheet_y: 5, short_names: ["lollipop"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "lollipop,food,snack,candy,sweet" }, credit_card: { name: "Credit Card", unified: "1F4B3", sheet_x: 20, sheet_y: 31, short_names: ["credit_card"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "credit,card,money,sales,dollar,bill,payment,shopping" }, "cow2": { name: "Cow", unified: "1F404", sheet_x: 12, sheet_y: 9, short_names: ["cow2"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "cow2,cow,beef,ox,animal,nature,moo,milk" }, video_game: { name: "Video Game", unified: "1F3AE", sheet_x: 9, sheet_y: 29, short_names: ["video_game"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "video,game,play,console,ps4,controller" }, busstop: { name: "Bus Stop", unified: "1F68F", sheet_x: 29, sheet_y: 27, short_names: ["busstop"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "busstop,bus,stop,transportation,wait" }, chocolate_bar: { name: "Chocolate Bar", unified: "1F36B", sheet_x: 8, sheet_y: 3, short_names: ["chocolate_bar"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "chocolate,bar,food,snack,dessert,sweet" }, "u6708": { name: "Squared Cjk Unified Ideograph-6708", unified: "1F237", variations: ["1F237-FE0F"], sheet_x: 5, sheet_y: 15, short_names: ["u6708"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "u6708,squared,cjk,unified,ideograph,6708,chinese,month,moon,japanese,orange-square,kanji" }, fearful: { name: "Fearful Face", unified: "1F628", sheet_x: 27, sheet_y: 14, short_names: ["fearful"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "fearful,face,scared,terrified,nervous,oops,huh" }, "flag-cg": { name: "Regional Indicator Symbol Letters CG", unified: "1F1E8-1F1EC", sheet_x: 33, sheet_y: 34, short_names: ["flag-cg"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,cg,regional,indicator,symbol,letters" }, dromedary_camel: { name: "Dromedary Camel", unified: "1F42A", sheet_x: 13, sheet_y: 6, short_names: ["dromedary_camel"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "dromedary,camel,animal,hot,desert,hump" }, popcorn: { name: "Popcorn", unified: "1F37F", sheet_x: 8, sheet_y: 23, short_names: ["popcorn"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "popcorn,food,movie theater,films,snack" }, eight_pointed_black_star: { name: "Eight Pointed Black Star", unified: "2734", variations: ["2734-FE0F"], sheet_x: 4, sheet_y: 0, short_names: ["eight_pointed_black_star"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "eight,pointed,black,star,orange-square,shape,polygon" }, gem: { name: "Gem Stone", unified: "1F48E", sheet_x: 19, sheet_y: 30, short_names: ["gem"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "gem,stone,blue,ruby,diamond,jewelry" }, space_invader: { name: "Alien Monster", unified: "1F47E", sheet_x: 18, sheet_y: 25, short_names: ["space_invader"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "space,invader,alien,monster,game,arcade,play" }, vertical_traffic_light: { name: "Vertical Traffic Light", unified: "1F6A6", sheet_x: 30, sheet_y: 14, short_names: ["vertical_traffic_light"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "vertical,traffic,light,transportation,driving" }, cold_sweat: { name: "Face with Open Mouth and Cold Sweat", unified: "1F630", sheet_x: 27, sheet_y: 22, short_names: ["cold_sweat"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "cold,sweat,face,with,open,mouth,and,nervous" }, "flag-cd": { name: "Regional Indicator Symbol Letters CD", unified: "1F1E8-1F1E9", sheet_x: 33, sheet_y: 32, short_names: ["flag-cd"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,cd,regional,indicator,symbol,letters" }, "flag-ck": { name: "Regional Indicator Symbol Letters CK", unified: "1F1E8-1F1F0", sheet_x: 33, sheet_y: 37, short_names: ["flag-ck"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ck,regional,indicator,symbol,letters" }, hushed: { name: "Hushed Face", unified: "1F62F", sheet_x: 27, sheet_y: 21, short_names: ["hushed"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "hushed,face,woo,shh" }, traffic_light: { name: "Horizontal Traffic Light", unified: "1F6A5", sheet_x: 30, sheet_y: 13, short_names: ["traffic_light"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "traffic,light,horizontal,transportation,signal" }, doughnut: { name: "Doughnut", unified: "1F369", sheet_x: 8, sheet_y: 1, short_names: ["doughnut"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "doughnut,food,dessert,snack,sweet,donut" }, camel: { name: "Bactrian Camel", unified: "1F42B", sheet_x: 13, sheet_y: 7, short_names: ["camel"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "camel,bactrian,animal,nature,hot,desert,hump" }, dart: { name: "Direct Hit", unified: "1F3AF", sheet_x: 9, sheet_y: 30, short_names: ["dart"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "dart,direct,hit,game,play,bar" }, scales: { name: "Scales", unified: "2696", sheet_x: 2, sheet_y: 7, short_names: ["scales"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "scales,law,fairness,weight" }, vs: { name: "Squared Vs", unified: "1F19A", sheet_x: 5, sheet_y: 5, short_names: ["vs"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "vs,squared,words,orange-square" }, elephant: { name: "Elephant", unified: "1F418", sheet_x: 12, sheet_y: 29, short_names: ["elephant"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "elephant,animal,nature,nose,thailand,circus" }, wrench: { name: "Wrench", unified: "1F527", sheet_x: 23, sheet_y: 23, short_names: ["wrench"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "wrench,tools,diy,ikea,fix,maintainer" }, game_die: { name: "Game Die", unified: "1F3B2", sheet_x: 9, sheet_y: 33, short_names: ["game_die"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "game,die,dice,random,tabbletop,play,luck" }, accept: { name: "Circled Ideograph Accept", unified: "1F251", sheet_x: 5, sheet_y: 20, short_names: ["accept"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "accept,circled,ideograph,ok,good,chinese,kanji,agree,yes,orange-circle" }, cookie: { name: "Cookie", unified: "1F36A", sheet_x: 8, sheet_y: 2, short_names: ["cookie"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "cookie,food,snack,oreo,chocolate,sweet,dessert" }, "flag-cr": { name: "Regional Indicator Symbol Letters CR", unified: "1F1E8-1F1F7", sheet_x: 34, sheet_y: 2, short_names: ["flag-cr"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,cr,regional,indicator,symbol,letters" }, checkered_flag: { name: "Chequered Flag", unified: "1F3C1", sheet_x: 10, sheet_y: 7, short_names: ["checkered_flag"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "checkered,flag,chequered,contest,finishline,rase,gokart" }, frowning: { name: "Frowning Face with Open Mouth", unified: "1F626", sheet_x: 27, sheet_y: 12, short_names: ["frowning"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "frowning,face,with,open,mouth,aw,what" }, white_flower: { name: "White Flower", unified: "1F4AE", sheet_x: 20, sheet_y: 26, short_names: ["white_flower"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "white,flower,japanese,spring" }, ship: { name: "Ship", unified: "1F6A2", sheet_x: 30, sheet_y: 5, short_names: ["ship"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ship,transportation,titanic,deploy" }, hammer: { name: "Hammer", unified: "1F528", sheet_x: 23, sheet_y: 24, short_names: ["hammer"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "hammer,tools,build,create" }, "flag-hr": { name: "Regional Indicator Symbol Letters HR", unified: "1F1ED-1F1F7", sheet_x: 35, sheet_y: 12, short_names: ["flag-hr"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,hr,regional,indicator,symbol,letters" }, anguished: { name: "Anguished Face", unified: "1F627", sheet_x: 27, sheet_y: 13, short_names: ["anguished"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: ["D:"], search: "anguished,face,stunned,nervous,d:" }, goat: { name: "Goat", unified: "1F410", sheet_x: 12, sheet_y: 21, short_names: ["goat"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "goat,animal,nature" }, beer: { name: "Beer Mug", unified: "1F37A", sheet_x: 8, sheet_y: 18, short_names: ["beer"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "beer,mug,relax,beverage,drink,drunk,party,pub,summer,alcohol,booze" }, slot_machine: { name: "Slot Machine", unified: "1F3B0", sheet_x: 9, sheet_y: 31, short_names: ["slot_machine"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "slot,machine,bet,gamble,vegas,fruit machine,luck,casino" }, "flag-cu": { name: "Regional Indicator Symbol Letters CU", unified: "1F1E8-1F1FA", sheet_x: 34, sheet_y: 3, short_names: ["flag-cu"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,cu,regional,indicator,symbol,letters" }, hammer_and_pick: { name: "Hammer and Pick", unified: "2692", sheet_x: 2, sheet_y: 4, short_names: ["hammer_and_pick"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "hammer,and,pick,tools,build,create" }, beers: { name: "Clinking Beer Mugs", unified: "1F37B", sheet_x: 8, sheet_y: 19, short_names: ["beers"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "beers,clinking,beer,mugs,relax,beverage,drink,drunk,party,pub,summer,alcohol,booze" }, ferris_wheel: { name: "Ferris Wheel", unified: "1F3A1", sheet_x: 9, sheet_y: 16, short_names: ["ferris_wheel"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ferris,wheel,photo,carnival,londoneye" }, ideograph_advantage: { name: "Circled Ideograph Advantage", unified: "1F250", sheet_x: 5, sheet_y: 19, short_names: ["ideograph_advantage"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ideograph,advantage,circled,chinese,kanji,obtain,get,circle" }, ram: { name: "Ram", unified: "1F40F", sheet_x: 12, sheet_y: 20, short_names: ["ram"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ram,animal,sheep,nature" }, cry: { name: "Crying Face", unified: "1F622", sheet_x: 27, sheet_y: 8, short_names: ["cry"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: [":'("], search: "cry,crying,face,tears,sad,depressed,upset,:'(" }, bowling: { name: "Bowling", unified: "1F3B3", sheet_x: 9, sheet_y: 34, short_names: ["bowling"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bowling,sports,fun,play" }, "flag-cw": { name: "Regional Indicator Symbol Letters CW", unified: "1F1E8-1F1FC", sheet_x: 34, sheet_y: 5, short_names: ["flag-cw"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,cw,regional,indicator,symbol,letters" }, secret: { name: "Circled Ideograph Secret", unified: "3299", variations: ["3299-FE0F"], sheet_x: 4, sheet_y: 29, short_names: ["secret"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "secret,circled,ideograph,privacy,chinese,sshh,kanji,red-circle" }, disappointed_relieved: { name: "Disappointed but Relieved Face", unified: "1F625", sheet_x: 27, sheet_y: 11, short_names: ["disappointed_relieved"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "disappointed,relieved,but,face,phew,sweat,nervous" }, hammer_and_wrench: { name: "Hammer and Wrench", unified: "1F6E0", sheet_x: 31, sheet_y: 31, short_names: ["hammer_and_wrench"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "hammer,and,wrench,tools,build,create" }, roller_coaster: { name: "Roller Coaster", unified: "1F3A2", sheet_x: 9, sheet_y: 17, short_names: ["roller_coaster"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "roller,coaster,carnival,playground,photo,fun" }, sheep: { name: "Sheep", unified: "1F411", sheet_x: 12, sheet_y: 22, short_names: ["sheep"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sheep,animal,nature,wool,shipit" }, wine_glass: { name: "Wine Glass", unified: "1F377", sheet_x: 8, sheet_y: 15, short_names: ["wine_glass"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "wine,glass,drink,beverage,drunk,alcohol,booze" }, congratulations: { name: "Circled Ideograph Congratulation", unified: "3297", variations: ["3297-FE0F"], sheet_x: 4, sheet_y: 28, short_names: ["congratulations"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "congratulations,circled,ideograph,congratulation,chinese,kanji,japanese,red-circle" }, sleepy: { name: "Sleepy Face", unified: "1F62A", sheet_x: 27, sheet_y: 16, short_names: ["sleepy"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sleepy,face,tired,rest,nap" }, carousel_horse: { name: "Carousel Horse", unified: "1F3A0", sheet_x: 9, sheet_y: 15, short_names: ["carousel_horse"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "carousel,horse,photo,carnival" }, pick: { name: "Pick", unified: "26CF", sheet_x: 2, sheet_y: 24, short_names: ["pick"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "pick,tools,dig" }, "flag-cy": { name: "Regional Indicator Symbol Letters CY", unified: "1F1E8-1F1FE", sheet_x: 34, sheet_y: 7, short_names: ["flag-cy"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,cy,regional,indicator,symbol,letters" }, cocktail: { name: "Cocktail Glass", unified: "1F378", sheet_x: 8, sheet_y: 16, short_names: ["cocktail"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "cocktail,glass,drink,drunk,alcohol,beverage,booze" }, racehorse: { name: "Horse", unified: "1F40E", sheet_x: 12, sheet_y: 19, short_names: ["racehorse"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "racehorse,horse,animal,gamble,luck" }, "flag-cz": { name: "Regional Indicator Symbol Letters CZ", unified: "1F1E8-1F1FF", sheet_x: 34, sheet_y: 8, short_names: ["flag-cz"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,cz,regional,indicator,symbol,letters" }, tropical_drink: { name: "Tropical Drink", unified: "1F379", sheet_x: 8, sheet_y: 17, short_names: ["tropical_drink"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "tropical,drink,beverage,cocktail,summer,beach,alcohol,booze" }, "u5408": { name: "Squared Cjk Unified Ideograph-5408", unified: "1F234", sheet_x: 5, sheet_y: 12, short_names: ["u5408"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "u5408,squared,cjk,unified,ideograph,5408,japanese,chinese,join,kanji,red-square" }, nut_and_bolt: { name: "Nut and Bolt", unified: "1F529", sheet_x: 23, sheet_y: 25, short_names: ["nut_and_bolt"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "nut,and,bolt,handy,tools,fix" }, sweat: { name: "Face with Cold Sweat", unified: "1F613", sheet_x: 26, sheet_y: 34, short_names: ["sweat"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sweat,face,with,cold,hot,sad,tired,exercise" }, building_construction: { name: "Building Construction", unified: "1F3D7", sheet_x: 11, sheet_y: 8, short_names: ["building_construction"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "building,construction,wip,working,progress" }, "pig2": { name: "Pig", unified: "1F416", sheet_x: 12, sheet_y: 27, short_names: ["pig2"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "pig2,pig,animal,nature" }, sob: { name: "Loudly Crying Face", unified: "1F62D", sheet_x: 27, sheet_y: 19, short_names: ["sob"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: [":'("], search: "sob,loudly,crying,face,cry,tears,sad,upset,depressed,:'(" }, "u6e80": { name: "Squared Cjk Unified Ideograph-6e80", unified: "1F235", sheet_x: 5, sheet_y: 13, short_names: ["u6e80"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "u6e80,squared,cjk,unified,ideograph,6e80,full,chinese,japanese,red-square,kanji" }, "flag-dk": { name: "Regional Indicator Symbol Letters DK", unified: "1F1E9-1F1F0", sheet_x: 34, sheet_y: 12, short_names: ["flag-dk"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,dk,regional,indicator,symbol,letters" }, gear: { name: "Gear", unified: "2699", sheet_x: 2, sheet_y: 9, short_names: ["gear"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "gear,cog" }, rat: { name: "Rat", unified: "1F400", sheet_x: 12, sheet_y: 5, short_names: ["rat"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "rat,animal,mouse,rodent" }, champagne: { name: "Bottle with Popping Cork", unified: "1F37E", sheet_x: 8, sheet_y: 22, short_names: ["champagne"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "champagne,bottle,with,popping,cork" }, foggy: { name: "Foggy", unified: "1F301", sheet_x: 5, sheet_y: 22, short_names: ["foggy"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "foggy,photo,mountain" }, tokyo_tower: { name: "Tokyo Tower", unified: "1F5FC", sheet_x: 26, sheet_y: 11, short_names: ["tokyo_tower"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "tokyo,tower,photo,japanese" }, dizzy_face: { name: "Dizzy Face", unified: "1F635", sheet_x: 27, sheet_y: 27, short_names: ["dizzy_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "dizzy,face,spent,unconscious,xox" }, sake: { name: "Sake Bottle and Cup", unified: "1F376", sheet_x: 8, sheet_y: 14, short_names: ["sake"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sake,bottle,and,cup,wine,drink,drunk,beverage,japanese,alcohol,booze" }, "u7981": { name: "Squared Cjk Unified Ideograph-7981", unified: "1F232", sheet_x: 5, sheet_y: 10, short_names: ["u7981"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "u7981,squared,cjk,unified,ideograph,7981,kanji,japanese,chinese,forbidden,limit,restricted,red-square" }, "mouse2": { name: "Mouse", unified: "1F401", sheet_x: 12, sheet_y: 6, short_names: ["mouse2"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "mouse2,mouse,animal,nature,rodent" }, "flag-dj": { name: "Regional Indicator Symbol Letters DJ", unified: "1F1E9-1F1EF", sheet_x: 34, sheet_y: 11, short_names: ["flag-dj"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,dj,regional,indicator,symbol,letters" }, chains: { name: "Chains", unified: "26D3", sheet_x: 2, sheet_y: 26, short_names: ["chains"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "chains,lock,arrest" }, a: { name: "Negative Squared Latin Capital Letter a", unified: "1F170", variations: ["1F170-FE0F"], sheet_x: 4, sheet_y: 32, short_names: ["a"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "a,negative,squared,latin,capital,letter,red-square,alphabet" }, tea: { name: "Teacup Without Handle", unified: "1F375", sheet_x: 8, sheet_y: 13, short_names: ["tea"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "tea,teacup,without,handle,drink,bowl,breakfast,green,british" }, gun: { name: "Pistol", unified: "1F52B", sheet_x: 23, sheet_y: 27, short_names: ["gun"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "gun,pistol,violence,weapon,revolver" }, astonished: { name: "Astonished Face", unified: "1F632", sheet_x: 27, sheet_y: 24, short_names: ["astonished"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "astonished,face,xox,surprised,poisoned" }, "flag-dm": { name: "Regional Indicator Symbol Letters DM", unified: "1F1E9-1F1F2", sheet_x: 34, sheet_y: 13, short_names: ["flag-dm"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,dm,regional,indicator,symbol,letters" }, rooster: { name: "Rooster", unified: "1F413", sheet_x: 12, sheet_y: 24, short_names: ["rooster"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "rooster,animal,nature,chicken" }, factory: { name: "Factory", unified: "1F3ED", sheet_x: 11, sheet_y: 30, short_names: ["factory"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "factory,building,industry,pollution,smoke" }, coffee: { name: "Hot Beverage", unified: "2615", variations: ["2615-FE0F"], sheet_x: 1, sheet_y: 8, short_names: ["coffee"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "coffee,hot,beverage,caffeine,latte,espresso" }, bomb: { name: "Bomb", unified: "1F4A3", sheet_x: 20, sheet_y: 10, short_names: ["bomb"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bomb,boom,explode,explosion,terrorism" }, "flag-do": { name: "Regional Indicator Symbol Letters DO", unified: "1F1E9-1F1F4", sheet_x: 34, sheet_y: 14, short_names: ["flag-do"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,do,regional,indicator,symbol,letters" }, fountain: { name: "Fountain", unified: "26F2", variations: ["26F2-FE0F"], sheet_x: 2, sheet_y: 32, short_names: ["fountain"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "fountain,photo,summer,water,fresh" }, turkey: { name: "Turkey", unified: "1F983", sheet_x: 32, sheet_y: 18, short_names: ["turkey"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "turkey,animal,bird" }, zipper_mouth_face: { name: "Zipper-Mouth Face", unified: "1F910", sheet_x: 32, sheet_y: 1, short_names: ["zipper_mouth_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "zipper,mouth,face" }, b: { name: "Negative Squared Latin Capital Letter B", unified: "1F171", variations: ["1F171-FE0F"], sheet_x: 4, sheet_y: 33, short_names: ["b"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "b,negative,squared,latin,capital,letter,red-square,alphabet" }, mask: { name: "Face with Medical Mask", unified: "1F637", sheet_x: 27, sheet_y: 29, short_names: ["mask"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "mask,face,with,medical,sick,ill,disease" }, "flag-ec": { name: "Regional Indicator Symbol Letters EC", unified: "1F1EA-1F1E8", sheet_x: 34, sheet_y: 17, short_names: ["flag-ec"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ec,regional,indicator,symbol,letters" }, ab: { name: "Negative Squared Ab", unified: "1F18E", sheet_x: 4, sheet_y: 36, short_names: ["ab"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ab,negative,squared,red-square,alphabet" }, rice_scene: { name: "Moon Viewing Ceremony", unified: "1F391", sheet_x: 9, sheet_y: 5, short_names: ["rice_scene"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "rice,scene,moon,viewing,ceremony,photo,japan,asia,tsukimi" }, baby_bottle: { name: "Baby Bottle", unified: "1F37C", sheet_x: 8, sheet_y: 20, short_names: ["baby_bottle"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "baby,bottle,food,container,milk" }, hocho: { name: "Hocho", unified: "1F52A", sheet_x: 23, sheet_y: 26, short_names: ["hocho", "knife"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "hocho,knife,blade,cutlery,kitchen,weapon" }, dove_of_peace: { name: "Dove of Peace", unified: "1F54A", sheet_x: 24, sheet_y: 6, short_names: ["dove_of_peace"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "dove,of,peace,animal,bird" }, cl: { name: "Squared Cl", unified: "1F191", sheet_x: 4, sheet_y: 37, short_names: ["cl"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "cl,squared,alphabet,words,red-square" }, "dog2": { name: "Dog", unified: "1F415", sheet_x: 12, sheet_y: 26, short_names: ["dog2"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "dog2,dog,animal,nature,friend,doge,pet,faithful" }, fork_and_knife: { name: "Fork and Knife", unified: "1F374", sheet_x: 8, sheet_y: 12, short_names: ["fork_and_knife"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "fork,and,knife,cutlery,kitchen" }, dagger_knife: { name: "Dagger Knife", unified: "1F5E1", sheet_x: 26, sheet_y: 4, short_names: ["dagger_knife"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "dagger,knife,weapon" }, mountain: { name: "Mountain", unified: "26F0", sheet_x: 2, sheet_y: 30, short_names: ["mountain"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "mountain,photo,nature,environment" }, face_with_thermometer: { name: "Face with Thermometer", unified: "1F912", sheet_x: 32, sheet_y: 3, short_names: ["face_with_thermometer"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "face,with,thermometer" }, "flag-eg": { name: "Regional Indicator Symbol Letters EG", unified: "1F1EA-1F1EC", sheet_x: 34, sheet_y: 19, short_names: ["flag-eg"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,eg,regional,indicator,symbol,letters" }, poodle: { name: "Poodle", unified: "1F429", sheet_x: 13, sheet_y: 5, short_names: ["poodle"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "poodle,dog,animal,101,nature,pet" }, "flag-sv": { name: "Regional Indicator Symbol Letters SV", unified: "1F1F8-1F1FB", sheet_x: 38, sheet_y: 2, short_names: ["flag-sv"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,sv,regional,indicator,symbol,letters" }, snow_capped_mountain: { name: "Snow Capped Mountain", unified: "1F3D4", sheet_x: 11, sheet_y: 5, short_names: ["snow_capped_mountain"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "snow,capped,mountain,photo,nature,environment,winter,cold" }, face_with_head_bandage: { name: "Face with Head-Bandage", unified: "1F915", sheet_x: 32, sheet_y: 6, short_names: ["face_with_head_bandage"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "face,with,head,bandage" }, "o2": { name: "Negative Squared Latin Capital Letter O", unified: "1F17E", variations: ["1F17E-FE0F"], sheet_x: 4, sheet_y: 34, short_names: ["o2"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "o2,negative,squared,latin,capital,letter,o,alphabet,red-square" }, knife_fork_plate: { name: "Fork and Knife with Plate", unified: "1F37D", sheet_x: 8, sheet_y: 21, short_names: ["knife_fork_plate"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "knife,fork,plate,and,with" }, crossed_swords: { name: "Crossed Swords", unified: "2694", sheet_x: 2, sheet_y: 6, short_names: ["crossed_swords"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "crossed,swords,weapon" }, sos: { name: "Squared Sos", unified: "1F198", sheet_x: 5, sheet_y: 3, short_names: ["sos"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sos,squared,help,red-square,words,emergency,911" }, "flag-gq": { name: "Regional Indicator Symbol Letters GQ", unified: "1F1EC-1F1F6", sheet_x: 35, sheet_y: 2, short_names: ["flag-gq"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,gq,regional,indicator,symbol,letters" }, mount_fuji: { name: "Mount Fuji", unified: "1F5FB", sheet_x: 26, sheet_y: 10, short_names: ["mount_fuji"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "mount,fuji,photo,mountain,nature,japanese" }, "cat2": { name: "Cat", unified: "1F408", sheet_x: 12, sheet_y: 13, short_names: ["cat2"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "cat2,cat,animal,meow,pet,cats" }, shield: { name: "Shield", unified: "1F6E1", sheet_x: 31, sheet_y: 32, short_names: ["shield"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "shield,protection,security" }, sleeping: { name: "Sleeping Face", unified: "1F634", sheet_x: 27, sheet_y: 26, short_names: ["sleeping"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sleeping,face,tired,sleepy,night,zzz" }, volcano: { name: "Volcano", unified: "1F30B", sheet_x: 5, sheet_y: 32, short_names: ["volcano"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "volcano,photo,nature,disaster" }, "rabbit2": { name: "Rabbit", unified: "1F407", sheet_x: 12, sheet_y: 12, short_names: ["rabbit2"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "rabbit2,rabbit,animal,nature,pet,magic,spring" }, smoking: { name: "Smoking Symbol", unified: "1F6AC", sheet_x: 30, sheet_y: 20, short_names: ["smoking"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "smoking,symbol,kills,tobacco,cigarette,joint" }, "flag-er": { name: "Regional Indicator Symbol Letters ER", unified: "1F1EA-1F1F7", sheet_x: 34, sheet_y: 21, short_names: ["flag-er"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,er,regional,indicator,symbol,letters" }, zzz: { name: "Sleeping Symbol", unified: "1F4A4", sheet_x: 20, sheet_y: 11, short_names: ["zzz"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "zzz,sleeping,symbol,sleepy,tired" }, no_entry: { name: "No Entry", unified: "26D4", variations: ["26D4-FE0F"], sheet_x: 2, sheet_y: 27, short_names: ["no_entry"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "no,entry,limit,security,privacy,bad,denied,stop,circle" }, hankey: { name: "Pile of Poo", unified: "1F4A9", sheet_x: 20, sheet_y: 16, short_names: ["hankey", "poop", "shit"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "hankey,poop,shit,pile,of,poo,shitface,fail,turd" }, "flag-ee": { name: "Regional Indicator Symbol Letters EE", unified: "1F1EA-1F1EA", sheet_x: 34, sheet_y: 18, short_names: ["flag-ee"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ee,regional,indicator,symbol,letters" }, skull_and_crossbones: { name: "Skull and Crossbones", unified: "2620", variations: ["2620-FE0F"], sheet_x: 1, sheet_y: 16, short_names: ["skull_and_crossbones"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "skull,and,crossbones,poison,danger,deadly,scary" }, chipmunk: { name: "Chipmunk", unified: "1F43F", sheet_x: 13, sheet_y: 27, short_names: ["chipmunk"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "chipmunk,animal,nature,rodent" }, japan: { name: "Silhouette of Japan", unified: "1F5FE", sheet_x: 26, sheet_y: 13, short_names: ["japan"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "japan,silhouette,of,nation,country,japanese,asia" }, name_badge: { name: "Name Badge", unified: "1F4DB", sheet_x: 21, sheet_y: 30, short_names: ["name_badge"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "name,badge,fire,forbid" }, coffin: { name: "Coffin", unified: "26B0", sheet_x: 2, sheet_y: 16, short_names: ["coffin"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "coffin,vampire,dead,die,death,rip" }, camping: { name: "Camping", unified: "1F3D5", sheet_x: 11, sheet_y: 6, short_names: ["camping"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "camping,photo,outdoors,tent" }, feet: { name: "Paw Prints", unified: "1F43E", sheet_x: 13, sheet_y: 26, short_names: ["feet", "paw_prints"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "feet,paw,prints,animal,tracking,footprints,dog,cat,pet,paw_prints" }, "flag-et": { name: "Regional Indicator Symbol Letters ET", unified: "1F1EA-1F1F9", sheet_x: 34, sheet_y: 23, short_names: ["flag-et"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,et,regional,indicator,symbol,letters" }, no_entry_sign: { name: "No Entry Sign", unified: "1F6AB", sheet_x: 30, sheet_y: 19, short_names: ["no_entry_sign"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "no,entry,sign,forbid,stop,limit,denied,disallow,circle" }, smiling_imp: { name: "Smiling Face with Horns", unified: "1F608", sheet_x: 26, sheet_y: 23, short_names: ["smiling_imp"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "smiling,imp,face,with,horns,devil" }, imp: { name: "Imp", unified: "1F47F", sheet_x: 18, sheet_y: 26, short_names: ["imp"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "imp,devil,angry,horns" }, funeral_urn: { name: "Funeral Urn", unified: "26B1", sheet_x: 2, sheet_y: 17, short_names: ["funeral_urn"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "funeral,urn,dead,die,death,rip,ashes" }, tent: { name: "Tent", unified: "26FA", variations: ["26FA-FE0F"], sheet_x: 3, sheet_y: 3, short_names: ["tent"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "tent,photo,camping,outdoors" }, dragon: { name: "Dragon", unified: "1F409", sheet_x: 12, sheet_y: 14, short_names: ["dragon"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "dragon,animal,myth,nature,chinese,green" }, x: { name: "Cross Mark", unified: "274C", sheet_x: 4, sheet_y: 3, short_names: ["x"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "x,cross,mark,no,delete,remove,cancel" }, "flag-eu": { name: "Regional Indicator Symbol Letters EU", unified: "1F1EA-1F1FA", sheet_x: 34, sheet_y: 24, short_names: ["flag-eu"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,eu,regional,indicator,symbol,letters" }, amphora: { name: "Amphora", unified: "1F3FA", sheet_x: 11, sheet_y: 40, short_names: ["amphora"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "amphora,vase,jar" }, o: { name: "Heavy Large Circle", unified: "2B55", variations: ["2B55-FE0F"], sheet_x: 4, sheet_y: 25, short_names: ["o"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "o,heavy,large,circle,round" }, national_park: { name: "National Park", unified: "1F3DE", sheet_x: 11, sheet_y: 15, short_names: ["national_park"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "national,park,photo,environment,nature" }, dragon_face: { name: "Dragon Face", unified: "1F432", sheet_x: 13, sheet_y: 14, short_names: ["dragon_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "dragon,face,animal,myth,nature,chinese,green" }, "flag-fk": { name: "Regional Indicator Symbol Letters FK", unified: "1F1EB-1F1F0", sheet_x: 34, sheet_y: 27, short_names: ["flag-fk"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,fk,regional,indicator,symbol,letters" }, japanese_ogre: { name: "Japanese Ogre", unified: "1F479", sheet_x: 18, sheet_y: 15, short_names: ["japanese_ogre"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "japanese,ogre,monster,red,mask,halloween,scary,creepy,devil,demon" }, japanese_goblin: { name: "Japanese Goblin", unified: "1F47A", sheet_x: 18, sheet_y: 16, short_names: ["japanese_goblin"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "japanese,goblin,red,evil,mask,monster,scary,creepy" }, "flag-fo": { name: "Regional Indicator Symbol Letters FO", unified: "1F1EB-1F1F4", sheet_x: 34, sheet_y: 29, short_names: ["flag-fo"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,fo,regional,indicator,symbol,letters" }, motorway: { name: "Motorway", unified: "1F6E3", sheet_x: 31, sheet_y: 34, short_names: ["motorway"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "motorway,road,cupertino,interstate,highway" }, cactus: { name: "Cactus", unified: "1F335", sheet_x: 6, sheet_y: 31, short_names: ["cactus"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "cactus,vegetable,plant,nature" }, anger: { name: "Anger Symbol", unified: "1F4A2", sheet_x: 20, sheet_y: 9, short_names: ["anger"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "anger,symbol,angry,mad" }, crystal_ball: { name: "Crystal Ball", unified: "1F52E", sheet_x: 23, sheet_y: 30, short_names: ["crystal_ball"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "crystal,ball,disco,party,magic,circus,fortune_teller" }, skull: { name: "Skull", unified: "1F480", sheet_x: 18, sheet_y: 27, short_names: ["skull"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "skull,dead,skeleton,creepy" }, hotsprings: { name: "Hot Springs", unified: "2668", variations: ["2668-FE0F"], sheet_x: 2, sheet_y: 1, short_names: ["hotsprings"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "hotsprings,hot,springs,bath,warm,relax" }, "flag-fj": { name: "Regional Indicator Symbol Letters FJ", unified: "1F1EB-1F1EF", sheet_x: 34, sheet_y: 26, short_names: ["flag-fj"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,fj,regional,indicator,symbol,letters" }, prayer_beads: { name: "Prayer Beads", unified: "1F4FF", sheet_x: 22, sheet_y: 24, short_names: ["prayer_beads"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "prayer,beads,dhikr,religious" }, christmas_tree: { name: "Christmas Tree", unified: "1F384", sheet_x: 8, sheet_y: 28, short_names: ["christmas_tree"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "christmas,tree,festival,vacation,december,xmas,celebration" }, railway_track: { name: "Railway Track", unified: "1F6E4", sheet_x: 31, sheet_y: 35, short_names: ["railway_track"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "railway,track,train,transportation" }, "flag-fi": { name: "Regional Indicator Symbol Letters FI", unified: "1F1EB-1F1EE", sheet_x: 34, sheet_y: 25, short_names: ["flag-fi"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,fi,regional,indicator,symbol,letters" }, barber: { name: "Barber Pole", unified: "1F488", sheet_x: 19, sheet_y: 24, short_names: ["barber"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "barber,pole,hair,salon,style" }, ghost: { name: "Ghost", unified: "1F47B", sheet_x: 18, sheet_y: 17, short_names: ["ghost"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ghost,halloween,spooky,scary" }, sunrise: { name: "Sunrise", unified: "1F305", sheet_x: 5, sheet_y: 26, short_names: ["sunrise"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sunrise,morning,view,vacation,photo" }, evergreen_tree: { name: "Evergreen Tree", unified: "1F332", sheet_x: 6, sheet_y: 28, short_names: ["evergreen_tree"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "evergreen,tree,plant,nature" }, no_pedestrians: { name: "No Pedestrians", unified: "1F6B7", sheet_x: 31, sheet_y: 5, short_names: ["no_pedestrians"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "no,pedestrians,rules,crossing,walking,circle" }, sunrise_over_mountains: { name: "Sunrise over Mountains", unified: "1F304", sheet_x: 5, sheet_y: 25, short_names: ["sunrise_over_mountains"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sunrise,over,mountains,view,vacation,photo" }, alembic: { name: "Alembic", unified: "2697", sheet_x: 2, sheet_y: 8, short_names: ["alembic"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "alembic,distilling,science,experiment" }, alien: { name: "Extraterrestrial Alien", unified: "1F47D", sheet_x: 18, sheet_y: 24, short_names: ["alien"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "alien,extraterrestrial,ufo,paul,weird,outer_space" }, deciduous_tree: { name: "Deciduous Tree", unified: "1F333", sheet_x: 6, sheet_y: 29, short_names: ["deciduous_tree"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "deciduous,tree,plant,nature" }, do_not_litter: { name: "Do Not Litter Symbol", unified: "1F6AF", sheet_x: 30, sheet_y: 23, short_names: ["do_not_litter"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "do,not,litter,symbol,trash,bin,garbage,circle" }, "flag-fr": { name: "Regional Indicator Symbol Letters FR", unified: "1F1EB-1F1F7", sheet_x: 34, sheet_y: 30, short_names: ["flag-fr", "fr"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,fr,regional,indicator,symbol,letters" }, telescope: { name: "Telescope", unified: "1F52D", sheet_x: 23, sheet_y: 29, short_names: ["telescope"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "telescope,stars,space,zoom" }, palm_tree: { name: "Palm Tree", unified: "1F334", sheet_x: 6, sheet_y: 30, short_names: ["palm_tree"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "palm,tree,plant,vegetable,nature,summer,beach" }, no_bicycles: { name: "No Bicycles", unified: "1F6B3", sheet_x: 30, sheet_y: 27, short_names: ["no_bicycles"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "no,bicycles,cyclist,prohibited,circle" }, desert: { name: "Desert", unified: "1F3DC", sheet_x: 11, sheet_y: 13, short_names: ["desert"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "desert,photo,warm,saharah" }, robot_face: { name: "Robot Face", unified: "1F916", sheet_x: 32, sheet_y: 7, short_names: ["robot_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "robot,face" }, "flag-gf": { name: "Regional Indicator Symbol Letters GF", unified: "1F1EC-1F1EB", sheet_x: 34, sheet_y: 35, short_names: ["flag-gf"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,gf,regional,indicator,symbol,letters" }, "non-potable_water": { name: "Non-Potable Water Symbol", unified: "1F6B1", sheet_x: 30, sheet_y: 25, short_names: ["non-potable_water"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "non,potable,water,symbol,drink,faucet,tap,circle" }, beach_with_umbrella: { name: "Beach with Umbrella", unified: "1F3D6", sheet_x: 11, sheet_y: 7, short_names: ["beach_with_umbrella"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "beach,with,umbrella,weather,summer,sunny,sand" }, microscope: { name: "Microscope", unified: "1F52C", sheet_x: 23, sheet_y: 28, short_names: ["microscope"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "microscope,laboratory,experiment,zoomin,science,study" }, seedling: { name: "Seedling", unified: "1F331", sheet_x: 6, sheet_y: 27, short_names: ["seedling"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "seedling,plant,nature,grass,lawn,spring" }, smiley_cat: { name: "Smiling Cat Face with Open Mouth", unified: "1F63A", sheet_x: 27, sheet_y: 32, short_names: ["smiley_cat"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "smiley,cat,smiling,face,with,open,mouth,animal,cats,happy" }, "flag-pf": { name: "Regional Indicator Symbol Letters PF", unified: "1F1F5-1F1EB", sheet_x: 37, sheet_y: 8, short_names: ["flag-pf"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,pf,regional,indicator,symbol,letters" }, herb: { name: "Herb", unified: "1F33F", sheet_x: 7, sheet_y: 0, short_names: ["herb"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "herb,vegetable,plant,medicine,weed,grass,lawn" }, underage: { name: "No One Under Eighteen Symbol", unified: "1F51E", sheet_x: 23, sheet_y: 14, short_names: ["underage"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "underage,no,one,under,eighteen,symbol,18,drink,pub,night,minor,circle" }, hole: { name: "Hole", unified: "1F573", sheet_x: 24, sheet_y: 37, short_names: ["hole"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "hole,embarrassing" }, "flag-tf": { name: "Regional Indicator Symbol Letters TF", unified: "1F1F9-1F1EB", sheet_x: 38, sheet_y: 9, short_names: ["flag-tf"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,tf,regional,indicator,symbol,letters" }, desert_island: { name: "Desert Island", unified: "1F3DD", sheet_x: 11, sheet_y: 14, short_names: ["desert_island"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "desert,island,photo,tropical" }, smile_cat: { name: "Grinning Cat Face with Smiling Eyes", unified: "1F638", sheet_x: 27, sheet_y: 30, short_names: ["smile_cat"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "smile,cat,grinning,face,with,smiling,eyes,animal,cats" }, pill: { name: "Pill", unified: "1F48A", sheet_x: 19, sheet_y: 26, short_names: ["pill"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "pill,health,medicine,doctor,pharmacy,drug" }, shamrock: { name: "Shamrock", unified: "2618", sheet_x: 1, sheet_y: 9, short_names: ["shamrock"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "shamrock,vegetable,plant,nature,irish" }, "flag-ga": { name: "Regional Indicator Symbol Letters GA", unified: "1F1EC-1F1E6", sheet_x: 34, sheet_y: 31, short_names: ["flag-ga"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ga,regional,indicator,symbol,letters" }, city_sunrise: { name: "Sunset over Buildings", unified: "1F307", sheet_x: 5, sheet_y: 28, short_names: ["city_sunrise"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "city,sunrise,sunset,over,buildings,photo,good morning,dawn" }, joy_cat: { name: "Cat Face with Tears of Joy", unified: "1F639", sheet_x: 27, sheet_y: 31, short_names: ["joy_cat"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "joy,cat,face,with,tears,of,animal,cats,haha,happy" }, no_mobile_phones: { name: "No Mobile Phones", unified: "1F4F5", sheet_x: 22, sheet_y: 15, short_names: ["no_mobile_phones"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "no,mobile,phones,iphone,mute,circle" }, heart_eyes_cat: { name: "Smiling Cat Face with Heart-Shaped Eyes", unified: "1F63B", sheet_x: 27, sheet_y: 33, short_names: ["heart_eyes_cat"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "heart,eyes,cat,smiling,face,with,shaped,animal,love,like,affection,cats,valentines" }, syringe: { name: "Syringe", unified: "1F489", sheet_x: 19, sheet_y: 25, short_names: ["syringe"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "syringe,health,hospital,drugs,blood,medicine,needle,doctor,nurse" }, exclamation: { name: "Heavy Exclamation Mark Symbol", unified: "2757", variations: ["2757-FE0F"], sheet_x: 4, sheet_y: 8, short_names: ["exclamation", "heavy_exclamation_mark"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "exclamation,heavy,mark,symbol,heavy_exclamation_mark,danger,surprise,punctuation,wow,warning" }, city_sunset: { name: "Cityscape at Dusk", unified: "1F306", sheet_x: 5, sheet_y: 27, short_names: ["city_sunset"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "city,sunset,cityscape,at,dusk,photo,evening,sky,buildings" }, "flag-gm": { name: "Regional Indicator Symbol Letters GM", unified: "1F1EC-1F1F2", sheet_x: 34, sheet_y: 40, short_names: ["flag-gm"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,gm,regional,indicator,symbol,letters" }, four_leaf_clover: { name: "Four Leaf Clover", unified: "1F340", sheet_x: 7, sheet_y: 1, short_names: ["four_leaf_clover"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "four,leaf,clover,vegetable,plant,nature,lucky,irish" }, grey_exclamation: { name: "White Exclamation Mark Ornament", unified: "2755", sheet_x: 4, sheet_y: 7, short_names: ["grey_exclamation"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "grey,exclamation,white,mark,ornament,surprise,punctuation,gray,wow,warning" }, smirk_cat: { name: "Cat Face with Wry Smile", unified: "1F63C", sheet_x: 27, sheet_y: 34, short_names: ["smirk_cat"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "smirk,cat,face,with,wry,smile,animal,cats" }, thermometer: { name: "Thermometer", unified: "1F321", sheet_x: 6, sheet_y: 13, short_names: ["thermometer"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "thermometer,weather,temperature,hot,cold" }, cityscape: { name: "Cityscape", unified: "1F3D9", sheet_x: 11, sheet_y: 10, short_names: ["cityscape"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "cityscape,photo,night life,urban" }, "flag-ge": { name: "Regional Indicator Symbol Letters GE", unified: "1F1EC-1F1EA", sheet_x: 34, sheet_y: 34, short_names: ["flag-ge"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ge,regional,indicator,symbol,letters" }, bamboo: { name: "Pine Decoration", unified: "1F38D", sheet_x: 9, sheet_y: 1, short_names: ["bamboo"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bamboo,pine,decoration,plant,nature,vegetable,panda,pine_decoration" }, "flag-de": { name: "Regional Indicator Symbol Letters DE", unified: "1F1E9-1F1EA", sheet_x: 34, sheet_y: 9, short_names: ["flag-de", "de"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,de,regional,indicator,symbol,letters" }, night_with_stars: { name: "Night with Stars", unified: "1F303", sheet_x: 5, sheet_y: 24, short_names: ["night_with_stars"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "night,with,stars,evening,city,downtown" }, kissing_cat: { name: "Kissing Cat Face with Closed Eyes", unified: "1F63D", sheet_x: 27, sheet_y: 35, short_names: ["kissing_cat"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "kissing,cat,face,with,closed,eyes,animal,cats" }, tanabata_tree: { name: "Tanabata Tree", unified: "1F38B", sheet_x: 8, sheet_y: 40, short_names: ["tanabata_tree"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "tanabata,tree,plant,nature,branch,summer" }, label: { name: "Label", unified: "1F3F7", sheet_x: 11, sheet_y: 37, short_names: ["label"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "label,sale,tag" }, question: { name: "Black Question Mark Ornament", unified: "2753", sheet_x: 4, sheet_y: 5, short_names: ["question"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "question,black,mark,ornament,doubt,confused" }, leaves: { name: "Leaf Fluttering in Wind", unified: "1F343", sheet_x: 7, sheet_y: 4, short_names: ["leaves"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "leaves,leaf,fluttering,in,wind,nature,plant,tree,vegetable,grass,lawn,spring" }, grey_question: { name: "White Question Mark Ornament", unified: "2754", sheet_x: 4, sheet_y: 6, short_names: ["grey_question"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "grey,question,white,mark,ornament,doubts,gray,huh,confused" }, scream_cat: { name: "Weary Cat Face", unified: "1F640", sheet_x: 27, sheet_y: 38, short_names: ["scream_cat"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "scream,cat,weary,face,animal,cats,munch,scared" }, bookmark: { name: "Bookmark", unified: "1F516", sheet_x: 23, sheet_y: 6, short_names: ["bookmark"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bookmark,favorite,label,save" }, bridge_at_night: { name: "Bridge at Night", unified: "1F309", sheet_x: 5, sheet_y: 30, short_names: ["bridge_at_night"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bridge,at,night,photo,sanfrancisco" }, "flag-gh": { name: "Regional Indicator Symbol Letters GH", unified: "1F1EC-1F1ED", sheet_x: 34, sheet_y: 37, short_names: ["flag-gh"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,gh,regional,indicator,symbol,letters" }, milky_way: { name: "Milky Way", unified: "1F30C", sheet_x: 5, sheet_y: 33, short_names: ["milky_way"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "milky,way,photo,space,stars" }, toilet: { name: "Toilet", unified: "1F6BD", sheet_x: 31, sheet_y: 11, short_names: ["toilet"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "toilet,restroom,wc,washroom,bathroom,potty" }, crying_cat_face: { name: "Crying Cat Face", unified: "1F63F", sheet_x: 27, sheet_y: 37, short_names: ["crying_cat_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "crying,cat,face,animal,tears,weep,sad,cats,upset" }, bangbang: { name: "Double Exclamation Mark", unified: "203C", variations: ["203C-FE0F"], sheet_x: 0, sheet_y: 2, short_names: ["bangbang"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bangbang,double,exclamation,mark,surprise" }, fallen_leaf: { name: "Fallen Leaf", unified: "1F342", sheet_x: 7, sheet_y: 3, short_names: ["fallen_leaf"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "fallen,leaf,nature,plant,vegetable,leaves" }, "flag-gi": { name: "Regional Indicator Symbol Letters GI", unified: "1F1EC-1F1EE", sheet_x: 34, sheet_y: 38, short_names: ["flag-gi"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,gi,regional,indicator,symbol,letters" }, pouting_cat: { name: "Pouting Cat Face", unified: "1F63E", sheet_x: 27, sheet_y: 36, short_names: ["pouting_cat"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "pouting,cat,face,animal,cats" }, maple_leaf: { name: "Maple Leaf", unified: "1F341", sheet_x: 7, sheet_y: 2, short_names: ["maple_leaf"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "maple,leaf,nature,plant,vegetable,canada,fall" }, "flag-gr": { name: "Regional Indicator Symbol Letters GR", unified: "1F1EC-1F1F7", sheet_x: 35, sheet_y: 3, short_names: ["flag-gr"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,gr,regional,indicator,symbol,letters" }, interrobang: { name: "Exclamation Question Mark", unified: "2049", variations: ["2049-FE0F"], sheet_x: 0, sheet_y: 3, short_names: ["interrobang"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "interrobang,exclamation,question,mark,wat,punctuation,surprise" }, stars: { name: "Shooting Star", unified: "1F320", sheet_x: 6, sheet_y: 12, short_names: ["stars"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "stars,shooting,star,night,photo" }, shower: { name: "Shower", unified: "1F6BF", sheet_x: 31, sheet_y: 13, short_names: ["shower"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "shower,clean,water,bathroom" }, raised_hands: { name: "Person Raising Both Hands in Celebration", unified: "1F64C", sheet_x: 28, sheet_y: 29, short_names: ["raised_hands"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F64C-1F3FB": { unified: "1F64C-1F3FB", image: "1f64c-1f3fb.png", sheet_x: 28, sheet_y: 30, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F64C-1F3FC": { unified: "1F64C-1F3FC", image: "1f64c-1f3fc.png", sheet_x: 28, sheet_y: 31, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F64C-1F3FD": { unified: "1F64C-1F3FD", image: "1f64c-1f3fd.png", sheet_x: 28, sheet_y: 32, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F64C-1F3FE": { unified: "1F64C-1F3FE", image: "1f64c-1f3fe.png", sheet_x: 28, sheet_y: 33, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F64C-1F3FF": { unified: "1F64C-1F3FF", image: "1f64c-1f3ff.png", sheet_x: 28, sheet_y: 34, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "raised,hands,person,raising,both,in,celebration,gesture,hooray,yea" }, "flag-gl": { name: "Regional Indicator Symbol Letters GL", unified: "1F1EC-1F1F1", sheet_x: 34, sheet_y: 39, short_names: ["flag-gl"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,gl,regional,indicator,symbol,letters" }, ear_of_rice: { name: "Ear of Rice", unified: "1F33E", sheet_x: 6, sheet_y: 40, short_names: ["ear_of_rice"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ear,of,rice,nature,plant" }, sparkler: { name: "Firework Sparkler", unified: "1F387", sheet_x: 8, sheet_y: 36, short_names: ["sparkler"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sparkler,firework,stars,night,shine" }, bathtub: { name: "Bathtub", unified: "1F6C1", sheet_x: 31, sheet_y: 20, short_names: ["bathtub"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bathtub,clean,shower,bathroom" }, hibiscus: { name: "Hibiscus", unified: "1F33A", sheet_x: 6, sheet_y: 36, short_names: ["hibiscus"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "hibiscus,plant,vegetable,flowers,beach" }, "flag-gd": { name: "Regional Indicator Symbol Letters GD", unified: "1F1EC-1F1E9", sheet_x: 34, sheet_y: 33, short_names: ["flag-gd"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,gd,regional,indicator,symbol,letters" }, key: { name: "Key", unified: "1F511", sheet_x: 23, sheet_y: 1, short_names: ["key"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "key,lock,door,password" }, low_brightness: { name: "Low Brightness Symbol", unified: "1F505", sheet_x: 22, sheet_y: 30, short_names: ["low_brightness"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "low,brightness,symbol,sun,afternoon,warm,summer" }, fireworks: { name: "Fireworks", unified: "1F386", sheet_x: 8, sheet_y: 35, short_names: ["fireworks"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "fireworks,photo,festival,carnival,congratulations" }, clap: { name: "Clapping Hands Sign", unified: "1F44F", sheet_x: 15, sheet_y: 16, short_names: ["clap"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F44F-1F3FB": { unified: "1F44F-1F3FB", image: "1f44f-1f3fb.png", sheet_x: 15, sheet_y: 17, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F44F-1F3FC": { unified: "1F44F-1F3FC", image: "1f44f-1f3fc.png", sheet_x: 15, sheet_y: 18, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F44F-1F3FD": { unified: "1F44F-1F3FD", image: "1f44f-1f3fd.png", sheet_x: 15, sheet_y: 19, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F44F-1F3FE": { unified: "1F44F-1F3FE", image: "1f44f-1f3fe.png", sheet_x: 15, sheet_y: 20, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F44F-1F3FF": { unified: "1F44F-1F3FF", image: "1f44f-1f3ff.png", sheet_x: 15, sheet_y: 21, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "clap,clapping,hands,sign,praise,applause,congrats,yay" }, "flag-gp": { name: "Regional Indicator Symbol Letters GP", unified: "1F1EC-1F1F5", sheet_x: 35, sheet_y: 1, short_names: ["flag-gp"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,gp,regional,indicator,symbol,letters" }, old_key: { name: "Old Key", unified: "1F5DD", sheet_x: 26, sheet_y: 2, short_names: ["old_key"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "old,key,lock,door,password" }, high_brightness: { name: "High Brightness Symbol", unified: "1F506", sheet_x: 22, sheet_y: 31, short_names: ["high_brightness"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "high,brightness,symbol,sun,light" }, rainbow: { name: "Rainbow", unified: "1F308", sheet_x: 5, sheet_y: 29, short_names: ["rainbow"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "rainbow,nature,happy,unicorn,photo,sky,spring" }, wave: { name: "Waving Hand Sign", unified: "1F44B", sheet_x: 14, sheet_y: 33, short_names: ["wave"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F44B-1F3FB": { unified: "1F44B-1F3FB", image: "1f44b-1f3fb.png", sheet_x: 14, sheet_y: 34, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F44B-1F3FC": { unified: "1F44B-1F3FC", image: "1f44b-1f3fc.png", sheet_x: 14, sheet_y: 35, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F44B-1F3FD": { unified: "1F44B-1F3FD", image: "1f44b-1f3fd.png", sheet_x: 14, sheet_y: 36, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F44B-1F3FE": { unified: "1F44B-1F3FE", image: "1f44b-1f3fe.png", sheet_x: 14, sheet_y: 37, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F44B-1F3FF": { unified: "1F44B-1F3FF", image: "1f44b-1f3ff.png", sheet_x: 14, sheet_y: 38, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "wave,waving,hand,sign,hands,gesture,goodbye,solong,farewell,hello,palm" }, sunflower: { name: "Sunflower", unified: "1F33B", sheet_x: 6, sheet_y: 37, short_names: ["sunflower"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sunflower,nature,plant,fall" }, "+1": { name: "Thumbs Up Sign", unified: "1F44D", sheet_x: 15, sheet_y: 4, short_names: ["+1", "thumbsup"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F44D-1F3FB": { unified: "1F44D-1F3FB", image: "1f44d-1f3fb.png", sheet_x: 15, sheet_y: 5, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F44D-1F3FC": { unified: "1F44D-1F3FC", image: "1f44d-1f3fc.png", sheet_x: 15, sheet_y: 6, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F44D-1F3FD": { unified: "1F44D-1F3FD", image: "1f44d-1f3fd.png", sheet_x: 15, sheet_y: 7, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F44D-1F3FE": { unified: "1F44D-1F3FE", image: "1f44d-1f3fe.png", sheet_x: 15, sheet_y: 8, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F44D-1F3FF": { unified: "1F44D-1F3FF", image: "1f44d-1f3ff.png", sheet_x: 15, sheet_y: 9, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "+1,thumbsup,thumbs,up,sign,yes,awesome,good,agree,accept,cool,hand,like" }, couch_and_lamp: { name: "Couch and Lamp", unified: "1F6CB", sheet_x: 31, sheet_y: 25, short_names: ["couch_and_lamp"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "couch,and,lamp,read,chill" }, house_buildings: { name: "House Buildings", unified: "1F3D8", sheet_x: 11, sheet_y: 9, short_names: ["house_buildings"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "house,buildings" }, rose: { name: "Rose", unified: "1F339", sheet_x: 6, sheet_y: 35, short_names: ["rose"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "rose,flowers,valentines,love,spring" }, trident: { name: "Trident Emblem", unified: "1F531", sheet_x: 23, sheet_y: 33, short_names: ["trident"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "trident,emblem,weapon,spear" }, "flag-gu": { name: "Regional Indicator Symbol Letters GU", unified: "1F1EC-1F1FA", sheet_x: 35, sheet_y: 6, short_names: ["flag-gu"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,gu,regional,indicator,symbol,letters" }, european_castle: { name: "European Castle", unified: "1F3F0", sheet_x: 11, sheet_y: 33, short_names: ["european_castle"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "european,castle,building,royalty,history" }, "-1": { name: "Thumbs Down Sign", unified: "1F44E", sheet_x: 15, sheet_y: 10, short_names: ["-1", "thumbsdown"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F44E-1F3FB": { unified: "1F44E-1F3FB", image: "1f44e-1f3fb.png", sheet_x: 15, sheet_y: 11, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F44E-1F3FC": { unified: "1F44E-1F3FC", image: "1f44e-1f3fc.png", sheet_x: 15, sheet_y: 12, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F44E-1F3FD": { unified: "1F44E-1F3FD", image: "1f44e-1f3fd.png", sheet_x: 15, sheet_y: 13, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F44E-1F3FE": { unified: "1F44E-1F3FE", image: "1f44e-1f3fe.png", sheet_x: 15, sheet_y: 14, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F44E-1F3FF": { unified: "1F44E-1F3FF", image: "1f44e-1f3ff.png", sheet_x: 15, sheet_y: 15, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: ",1,thumbsdown,thumbs,down,sign,no,dislike,hand" }, fleur_de_lis: { name: "Fleur-De-Lis", unified: "269C", sheet_x: 2, sheet_y: 11, short_names: ["fleur_de_lis"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "fleur,de,lis,decorative,scout" }, tulip: { name: "Tulip", unified: "1F337", sheet_x: 6, sheet_y: 33, short_names: ["tulip"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "tulip,flowers,plant,nature,summer,spring" }, sleeping_accommodation: { name: "Sleeping Accommodation", unified: "1F6CC", sheet_x: 31, sheet_y: 26, short_names: ["sleeping_accommodation"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sleeping,accommodation,bed,rest" }, "flag-gt": { name: "Regional Indicator Symbol Letters GT", unified: "1F1EC-1F1F9", sheet_x: 35, sheet_y: 5, short_names: ["flag-gt"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,gt,regional,indicator,symbol,letters" }, part_alternation_mark: { name: "Part Alternation Mark", unified: "303D", variations: ["303D-FE0F"], sheet_x: 4, sheet_y: 27, short_names: ["part_alternation_mark"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "part,alternation,mark,graph,presentation,stats,business,economics,bad" }, blossom: { name: "Blossom", unified: "1F33C", sheet_x: 6, sheet_y: 38, short_names: ["blossom"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "blossom,nature,flowers,yellow" }, bed: { name: "Bed", unified: "1F6CF", sheet_x: 31, sheet_y: 29, short_names: ["bed"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bed,sleep,rest" }, "flag-gg": { name: "Regional Indicator Symbol Letters GG", unified: "1F1EC-1F1EC", sheet_x: 34, sheet_y: 36, short_names: ["flag-gg"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,gg,regional,indicator,symbol,letters" }, japanese_castle: { name: "Japanese Castle", unified: "1F3EF", sheet_x: 11, sheet_y: 32, short_names: ["japanese_castle"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "japanese,castle,photo,building" }, facepunch: { name: "Fisted Hand Sign", unified: "1F44A", sheet_x: 14, sheet_y: 27, short_names: ["facepunch", "punch"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F44A-1F3FB": { unified: "1F44A-1F3FB", image: "1f44a-1f3fb.png", sheet_x: 14, sheet_y: 28, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F44A-1F3FC": { unified: "1F44A-1F3FC", image: "1f44a-1f3fc.png", sheet_x: 14, sheet_y: 29, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F44A-1F3FD": { unified: "1F44A-1F3FD", image: "1f44a-1f3fd.png", sheet_x: 14, sheet_y: 30, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F44A-1F3FE": { unified: "1F44A-1F3FE", image: "1f44a-1f3fe.png", sheet_x: 14, sheet_y: 31, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F44A-1F3FF": { unified: "1F44A-1F3FF", image: "1f44a-1f3ff.png", sheet_x: 14, sheet_y: 32, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "facepunch,punch,fisted,hand,sign,angry,violence,fist,hit,attack" }, stadium: { name: "Stadium", unified: "1F3DF", sheet_x: 11, sheet_y: 16, short_names: ["stadium"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "stadium,photo,place,sports,concert,venue" }, "flag-gn": { name: "Regional Indicator Symbol Letters GN", unified: "1F1EC-1F1F3", sheet_x: 35, sheet_y: 0, short_names: ["flag-gn"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,gn,regional,indicator,symbol,letters" }, warning: { name: "Warning Sign", unified: "26A0", variations: ["26A0-FE0F"], sheet_x: 2, sheet_y: 12, short_names: ["warning"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "warning,sign,exclamation,wip,alert,error,problem,issue" }, door: { name: "Door", unified: "1F6AA", sheet_x: 30, sheet_y: 18, short_names: ["door"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "door,house,entry,exit" }, cherry_blossom: { name: "Cherry Blossom", unified: "1F338", sheet_x: 6, sheet_y: 34, short_names: ["cherry_blossom"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "cherry,blossom,nature,plant,spring,flower" }, fist: { name: "Raised Fist", unified: "270A", sheet_x: 3, sheet_y: 9, short_names: ["fist"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "270A-1F3FB": { unified: "270A-1F3FB", image: "270a-1f3fb.png", sheet_x: 3, sheet_y: 10, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "270A-1F3FC": { unified: "270A-1F3FC", image: "270a-1f3fc.png", sheet_x: 3, sheet_y: 11, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "270A-1F3FD": { unified: "270A-1F3FD", image: "270a-1f3fd.png", sheet_x: 3, sheet_y: 12, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "270A-1F3FE": { unified: "270A-1F3FE", image: "270a-1f3fe.png", sheet_x: 3, sheet_y: 13, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "270A-1F3FF": { unified: "270A-1F3FF", image: "270a-1f3ff.png", sheet_x: 3, sheet_y: 14, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "fist,raised,fingers,hand,grasp" }, statue_of_liberty: { name: "Statue of Liberty", unified: "1F5FD", sheet_x: 26, sheet_y: 12, short_names: ["statue_of_liberty"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "statue,of,liberty,american,newyork" }, v: { name: "Victory Hand", unified: "270C", variations: ["270C-FE0F"], sheet_x: 3, sheet_y: 21, short_names: ["v"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "270C-1F3FB": { unified: "270C-1F3FB", image: "270c-1f3fb.png", sheet_x: 3, sheet_y: 22, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "270C-1F3FC": { unified: "270C-1F3FC", image: "270c-1f3fc.png", sheet_x: 3, sheet_y: 23, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "270C-1F3FD": { unified: "270C-1F3FD", image: "270c-1f3fd.png", sheet_x: 3, sheet_y: 24, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "270C-1F3FE": { unified: "270C-1F3FE", image: "270c-1f3fe.png", sheet_x: 3, sheet_y: 25, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "270C-1F3FF": { unified: "270C-1F3FF", image: "270c-1f3ff.png", sheet_x: 3, sheet_y: 26, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "v,victory,hand,fingers,ohyeah,peace,two" }, children_crossing: { name: "Children Crossing", unified: "1F6B8", sheet_x: 31, sheet_y: 6, short_names: ["children_crossing"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "children,crossing,school,warning,danger,sign,driving,yellow-diamond" }, bouquet: { name: "Bouquet", unified: "1F490", sheet_x: 19, sheet_y: 32, short_names: ["bouquet"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bouquet,flowers,nature,spring" }, bellhop_bell: { name: "Bellhop Bell", unified: "1F6CE", sheet_x: 31, sheet_y: 28, short_names: ["bellhop_bell"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bellhop,bell,service" }, "flag-gw": { name: "Regional Indicator Symbol Letters GW", unified: "1F1EC-1F1FC", sheet_x: 35, sheet_y: 7, short_names: ["flag-gw"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,gw,regional,indicator,symbol,letters" }, beginner: { name: "Japanese Symbol for Beginner", unified: "1F530", sheet_x: 23, sheet_y: 32, short_names: ["beginner"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "beginner,japanese,symbol,for,badge,shield" }, house: { name: "House Building", unified: "1F3E0", sheet_x: 11, sheet_y: 17, short_names: ["house"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "house,building,home" }, mushroom: { name: "Mushroom", unified: "1F344", sheet_x: 7, sheet_y: 5, short_names: ["mushroom"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "mushroom,plant,vegetable" }, frame_with_picture: { name: "Frame with Picture", unified: "1F5BC", sheet_x: 25, sheet_y: 35, short_names: ["frame_with_picture"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "frame,with,picture,photography" }, ok_hand: { name: "Ok Hand Sign", unified: "1F44C", sheet_x: 14, sheet_y: 39, short_names: ["ok_hand"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F44C-1F3FB": { unified: "1F44C-1F3FB", image: "1f44c-1f3fb.png", sheet_x: 14, sheet_y: 40, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F44C-1F3FC": { unified: "1F44C-1F3FC", image: "1f44c-1f3fc.png", sheet_x: 15, sheet_y: 0, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F44C-1F3FD": { unified: "1F44C-1F3FD", image: "1f44c-1f3fd.png", sheet_x: 15, sheet_y: 1, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F44C-1F3FE": { unified: "1F44C-1F3FE", image: "1f44c-1f3fe.png", sheet_x: 15, sheet_y: 2, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F44C-1F3FF": { unified: "1F44C-1F3FF", image: "1f44c-1f3ff.png", sheet_x: 15, sheet_y: 3, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "ok,hand,sign,fingers,limbs,perfect" }, "flag-gy": { name: "Regional Indicator Symbol Letters GY", unified: "1F1EC-1F1FE", sheet_x: 35, sheet_y: 8, short_names: ["flag-gy"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,gy,regional,indicator,symbol,letters" }, "flag-ht": { name: "Regional Indicator Symbol Letters HT", unified: "1F1ED-1F1F9", sheet_x: 35, sheet_y: 13, short_names: ["flag-ht"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ht,regional,indicator,symbol,letters" }, house_with_garden: { name: "House with Garden", unified: "1F3E1", sheet_x: 11, sheet_y: 18, short_names: ["house_with_garden"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "house,with,garden,home,plant,nature" }, world_map: { name: "World Map", unified: "1F5FA", sheet_x: 26, sheet_y: 9, short_names: ["world_map"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "world,map,location,direction" }, chestnut: { name: "Chestnut", unified: "1F330", sheet_x: 6, sheet_y: 26, short_names: ["chestnut"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "chestnut,food,squirrel" }, hand: { name: "Raised Hand", unified: "270B", sheet_x: 3, sheet_y: 15, short_names: ["hand", "raised_hand"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "270B-1F3FB": { unified: "270B-1F3FB", image: "270b-1f3fb.png", sheet_x: 3, sheet_y: 16, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "270B-1F3FC": { unified: "270B-1F3FC", image: "270b-1f3fc.png", sheet_x: 3, sheet_y: 17, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "270B-1F3FD": { unified: "270B-1F3FD", image: "270b-1f3fd.png", sheet_x: 3, sheet_y: 18, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "270B-1F3FE": { unified: "270B-1F3FE", image: "270b-1f3fe.png", sheet_x: 3, sheet_y: 19, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "270B-1F3FF": { unified: "270B-1F3FF", image: "270b-1f3ff.png", sheet_x: 3, sheet_y: 20, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "hand,raised,fingers,stop,highfive,palm,ban,raised_hand" }, recycle: { name: "Black Universal Recycling Symbol", unified: "267B", variations: ["267B-FE0F"], sheet_x: 2, sheet_y: 2, short_names: ["recycle"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "recycle,black,universal,recycling,symbol,arrow,environment,garbage,trash" }, umbrella_on_ground: { name: "Umbrella on Ground", unified: "26F1", sheet_x: 2, sheet_y: 31, short_names: ["umbrella_on_ground"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "umbrella,on,ground,weather,summer" }, jack_o_lantern: { name: "Jack-O-Lantern", unified: "1F383", sheet_x: 8, sheet_y: 27, short_names: ["jack_o_lantern"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "jack,o,lantern,halloween,light,pumpkin,creepy,fall" }, open_hands: { name: "Open Hands Sign", unified: "1F450", sheet_x: 15, sheet_y: 22, short_names: ["open_hands"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F450-1F3FB": { unified: "1F450-1F3FB", image: "1f450-1f3fb.png", sheet_x: 15, sheet_y: 23, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F450-1F3FC": { unified: "1F450-1F3FC", image: "1f450-1f3fc.png", sheet_x: 15, sheet_y: 24, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F450-1F3FD": { unified: "1F450-1F3FD", image: "1f450-1f3fd.png", sheet_x: 15, sheet_y: 25, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F450-1F3FE": { unified: "1F450-1F3FE", image: "1f450-1f3fe.png", sheet_x: 15, sheet_y: 26, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F450-1F3FF": { unified: "1F450-1F3FF", image: "1f450-1f3ff.png", sheet_x: 15, sheet_y: 27, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "open,hands,sign,fingers,butterfly" }, derelict_house_building: { name: "Derelict House Building", unified: "1F3DA", sheet_x: 11, sheet_y: 11, short_names: ["derelict_house_building"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "derelict,house,building" }, "u6307": { name: "Squared Cjk Unified Ideograph-6307", unified: "1F22F", variations: ["1F22F-FE0F"], sheet_x: 5, sheet_y: 9, short_names: ["u6307"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "u6307,squared,cjk,unified,ideograph,6307,chinese,point,green-square,kanji" }, "flag-hn": { name: "Regional Indicator Symbol Letters HN", unified: "1F1ED-1F1F3", sheet_x: 35, sheet_y: 11, short_names: ["flag-hn"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,hn,regional,indicator,symbol,letters" }, shell: { name: "Spiral Shell", unified: "1F41A", sheet_x: 12, sheet_y: 31, short_names: ["shell"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "shell,spiral,nature,sea,beach" }, "flag-hk": { name: "Regional Indicator Symbol Letters HK", unified: "1F1ED-1F1F0", sheet_x: 35, sheet_y: 9, short_names: ["flag-hk"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,hk,regional,indicator,symbol,letters" }, moyai: { name: "Moyai", unified: "1F5FF", sheet_x: 26, sheet_y: 14, short_names: ["moyai"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "moyai,rock,easter island,moai" }, muscle: { name: "Flexed Biceps", unified: "1F4AA", sheet_x: 20, sheet_y: 17, short_names: ["muscle"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F4AA-1F3FB": { unified: "1F4AA-1F3FB", image: "1f4aa-1f3fb.png", sheet_x: 20, sheet_y: 18, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F4AA-1F3FC": { unified: "1F4AA-1F3FC", image: "1f4aa-1f3fc.png", sheet_x: 20, sheet_y: 19, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F4AA-1F3FD": { unified: "1F4AA-1F3FD", image: "1f4aa-1f3fd.png", sheet_x: 20, sheet_y: 20, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F4AA-1F3FE": { unified: "1F4AA-1F3FE", image: "1f4aa-1f3fe.png", sheet_x: 20, sheet_y: 21, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F4AA-1F3FF": { unified: "1F4AA-1F3FF", image: "1f4aa-1f3ff.png", sheet_x: 20, sheet_y: 22, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "muscle,flexed,biceps,arm,flex,hand,summer,strong" }, chart: { name: "Chart with Upwards Trend and Yen Sign", unified: "1F4B9", sheet_x: 20, sheet_y: 37, short_names: ["chart"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "chart,with,upwards,trend,and,yen,sign,green-square,graph,presentation,stats" }, office: { name: "Office Building", unified: "1F3E2", sheet_x: 11, sheet_y: 19, short_names: ["office"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "office,building,bureau,work" }, shopping_bags: { name: "Shopping Bags", unified: "1F6CD", sheet_x: 31, sheet_y: 27, short_names: ["shopping_bags"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "shopping,bags,mall,buy,purchase" }, department_store: { name: "Department Store", unified: "1F3EC", sheet_x: 11, sheet_y: 29, short_names: ["department_store"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "department,store,building,shopping,mall" }, pray: { name: "Person with Folded Hands", unified: "1F64F", sheet_x: 29, sheet_y: 6, short_names: ["pray"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F64F-1F3FB": { unified: "1F64F-1F3FB", image: "1f64f-1f3fb.png", sheet_x: 29, sheet_y: 7, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F64F-1F3FC": { unified: "1F64F-1F3FC", image: "1f64f-1f3fc.png", sheet_x: 29, sheet_y: 8, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F64F-1F3FD": { unified: "1F64F-1F3FD", image: "1f64f-1f3fd.png", sheet_x: 29, sheet_y: 9, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F64F-1F3FE": { unified: "1F64F-1F3FE", image: "1f64f-1f3fe.png", sheet_x: 29, sheet_y: 10, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F64F-1F3FF": { unified: "1F64F-1F3FF", image: "1f64f-1f3ff.png", sheet_x: 29, sheet_y: 11, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "pray,person,with,folded,hands,please,hope,wish,namaste,highfive" }, "flag-hu": { name: "Regional Indicator Symbol Letters HU", unified: "1F1ED-1F1FA", sheet_x: 35, sheet_y: 14, short_names: ["flag-hu"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,hu,regional,indicator,symbol,letters" }, sparkle: { name: "Sparkle", unified: "2747", variations: ["2747-FE0F"], sheet_x: 4, sheet_y: 2, short_names: ["sparkle"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sparkle,stars,green-square,awesome,good,fireworks" }, spider_web: { name: "Spider Web", unified: "1F578", sheet_x: 25, sheet_y: 6, short_names: ["spider_web"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "spider,web,animal,insect,arachnid,silk" }, point_up: { name: "White Up Pointing Index", unified: "261D", variations: ["261D-FE0F"], sheet_x: 1, sheet_y: 10, short_names: ["point_up"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "261D-1F3FB": { unified: "261D-1F3FB", image: "261d-1f3fb.png", sheet_x: 1, sheet_y: 11, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "261D-1F3FC": { unified: "261D-1F3FC", image: "261d-1f3fc.png", sheet_x: 1, sheet_y: 12, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "261D-1F3FD": { unified: "261D-1F3FD", image: "261d-1f3fd.png", sheet_x: 1, sheet_y: 13, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "261D-1F3FE": { unified: "261D-1F3FE", image: "261d-1f3fe.png", sheet_x: 1, sheet_y: 14, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "261D-1F3FF": { unified: "261D-1F3FF", image: "261d-1f3ff.png", sheet_x: 1, sheet_y: 15, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "point,up,white,pointing,index,hand,fingers,direction" }, eight_spoked_asterisk: { name: "Eight Spoked Asterisk", unified: "2733", variations: ["2733-FE0F"], sheet_x: 3, sheet_y: 40, short_names: ["eight_spoked_asterisk"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "eight,spoked,asterisk,star,sparkle,green-square" }, "flag-is": { name: "Regional Indicator Symbol Letters IS", unified: "1F1EE-1F1F8", sheet_x: 35, sheet_y: 24, short_names: ["flag-is"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,is,regional,indicator,symbol,letters" }, post_office: { name: "Japanese Post Office", unified: "1F3E3", sheet_x: 11, sheet_y: 20, short_names: ["post_office"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "post,office,japanese,building,email,communication" }, earth_americas: { name: "Earth Globe Americas", unified: "1F30E", sheet_x: 5, sheet_y: 35, short_names: ["earth_americas"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "earth,americas,globe,world,usa,international" }, balloon: { name: "Balloon", unified: "1F388", sheet_x: 8, sheet_y: 37, short_names: ["balloon"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "balloon,party,celebration,birthday,circus" }, european_post_office: { name: "European Post Office", unified: "1F3E4", sheet_x: 11, sheet_y: 21, short_names: ["european_post_office"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "european,post,office,building,email" }, "point_up_2": { name: "White Up Pointing Backhand Index", unified: "1F446", sheet_x: 14, sheet_y: 3, short_names: ["point_up_2"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F446-1F3FB": { unified: "1F446-1F3FB", image: "1f446-1f3fb.png", sheet_x: 14, sheet_y: 4, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F446-1F3FC": { unified: "1F446-1F3FC", image: "1f446-1f3fc.png", sheet_x: 14, sheet_y: 5, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F446-1F3FD": { unified: "1F446-1F3FD", image: "1f446-1f3fd.png", sheet_x: 14, sheet_y: 6, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F446-1F3FE": { unified: "1F446-1F3FE", image: "1f446-1f3fe.png", sheet_x: 14, sheet_y: 7, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F446-1F3FF": { unified: "1F446-1F3FF", image: "1f446-1f3ff.png", sheet_x: 14, sheet_y: 8, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "point,up,2,white,pointing,backhand,index,fingers,hand,direction" }, earth_africa: { name: "Earth Globe Europe-Africa", unified: "1F30D", sheet_x: 5, sheet_y: 34, short_names: ["earth_africa"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "earth,africa,globe,europe,world,international" }, negative_squared_cross_mark: { name: "Negative Squared Cross Mark", unified: "274E", sheet_x: 4, sheet_y: 4, short_names: ["negative_squared_cross_mark"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "negative,squared,cross,mark,x,green-square,no,deny" }, flags: { name: "Carp Streamer", unified: "1F38F", sheet_x: 9, sheet_y: 3, short_names: ["flags"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flags,carp,streamer,fish,japanese,koinobori,banner" }, "flag-in": { name: "Regional Indicator Symbol Letters IN", unified: "1F1EE-1F1F3", sheet_x: 35, sheet_y: 20, short_names: ["flag-in"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,in,regional,indicator,symbol,letters" }, hospital: { name: "Hospital", unified: "1F3E5", sheet_x: 11, sheet_y: 22, short_names: ["hospital"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "hospital,building,health,surgery,doctor" }, point_down: { name: "White Down Pointing Backhand Index", unified: "1F447", sheet_x: 14, sheet_y: 9, short_names: ["point_down"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F447-1F3FB": { unified: "1F447-1F3FB", image: "1f447-1f3fb.png", sheet_x: 14, sheet_y: 10, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F447-1F3FC": { unified: "1F447-1F3FC", image: "1f447-1f3fc.png", sheet_x: 14, sheet_y: 11, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F447-1F3FD": { unified: "1F447-1F3FD", image: "1f447-1f3fd.png", sheet_x: 14, sheet_y: 12, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F447-1F3FE": { unified: "1F447-1F3FE", image: "1f447-1f3fe.png", sheet_x: 14, sheet_y: 13, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F447-1F3FF": { unified: "1F447-1F3FF", image: "1f447-1f3ff.png", sheet_x: 14, sheet_y: 14, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "point,down,white,pointing,backhand,index,fingers,hand,direction" }, white_check_mark: { name: "White Heavy Check Mark", unified: "2705", sheet_x: 3, sheet_y: 6, short_names: ["white_check_mark"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "white,check,mark,heavy,green-square,ok,agree,vote,election,answer" }, ribbon: { name: "Ribbon", unified: "1F380", sheet_x: 8, sheet_y: 24, short_names: ["ribbon"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ribbon,decoration,pink,girl,bowtie" }, earth_asia: { name: "Earth Globe Asia-Australia", unified: "1F30F", sheet_x: 5, sheet_y: 36, short_names: ["earth_asia"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "earth,asia,globe,australia,world,east,international" }, "flag-id": { name: "Regional Indicator Symbol Letters ID", unified: "1F1EE-1F1E9", sheet_x: 35, sheet_y: 16, short_names: ["flag-id"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,id,regional,indicator,symbol,letters" }, full_moon: { name: "Full Moon Symbol", unified: "1F315", sheet_x: 6, sheet_y: 1, short_names: ["full_moon"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "full,moon,symbol,nature,yellow,twilight,planet,space,night,evening,sleep" }, point_left: { name: "White Left Pointing Backhand Index", unified: "1F448", sheet_x: 14, sheet_y: 15, short_names: ["point_left"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F448-1F3FB": { unified: "1F448-1F3FB", image: "1f448-1f3fb.png", sheet_x: 14, sheet_y: 16, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F448-1F3FC": { unified: "1F448-1F3FC", image: "1f448-1f3fc.png", sheet_x: 14, sheet_y: 17, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F448-1F3FD": { unified: "1F448-1F3FD", image: "1f448-1f3fd.png", sheet_x: 14, sheet_y: 18, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F448-1F3FE": { unified: "1F448-1F3FE", image: "1f448-1f3fe.png", sheet_x: 14, sheet_y: 19, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F448-1F3FF": { unified: "1F448-1F3FF", image: "1f448-1f3ff.png", sheet_x: 14, sheet_y: 20, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "point,left,white,pointing,backhand,index,direction,fingers,hand" }, "flag-ir": { name: "Regional Indicator Symbol Letters IR", unified: "1F1EE-1F1F7", sheet_x: 35, sheet_y: 23, short_names: ["flag-ir"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ir,regional,indicator,symbol,letters" }, gift: { name: "Wrapped Present", unified: "1F381", sheet_x: 8, sheet_y: 25, short_names: ["gift"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "gift,wrapped,present,birthday,christmas,xmas" }, bank: { name: "Bank", unified: "1F3E6", sheet_x: 11, sheet_y: 23, short_names: ["bank"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bank,building,money,sales,cash,business,enterprise" }, diamond_shape_with_a_dot_inside: { name: "Diamond Shape with a Dot Inside", unified: "1F4A0", sheet_x: 20, sheet_y: 7, short_names: ["diamond_shape_with_a_dot_inside"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "diamond,shape,with,a,dot,inside,jewel,blue,gem,crystal,fancy" }, "flag-iq": { name: "Regional Indicator Symbol Letters IQ", unified: "1F1EE-1F1F6", sheet_x: 35, sheet_y: 22, short_names: ["flag-iq"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,iq,regional,indicator,symbol,letters" }, confetti_ball: { name: "Confetti Ball", unified: "1F38A", sheet_x: 8, sheet_y: 39, short_names: ["confetti_ball"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "confetti,ball,festival,party,birthday,circus" }, point_right: { name: "White Right Pointing Backhand Index", unified: "1F449", sheet_x: 14, sheet_y: 21, short_names: ["point_right"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F449-1F3FB": { unified: "1F449-1F3FB", image: "1f449-1f3fb.png", sheet_x: 14, sheet_y: 22, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F449-1F3FC": { unified: "1F449-1F3FC", image: "1f449-1f3fc.png", sheet_x: 14, sheet_y: 23, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F449-1F3FD": { unified: "1F449-1F3FD", image: "1f449-1f3fd.png", sheet_x: 14, sheet_y: 24, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F449-1F3FE": { unified: "1F449-1F3FE", image: "1f449-1f3fe.png", sheet_x: 14, sheet_y: 25, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F449-1F3FF": { unified: "1F449-1F3FF", image: "1f449-1f3ff.png", sheet_x: 14, sheet_y: 26, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "point,right,white,pointing,backhand,index,fingers,hand,direction" }, cyclone: { name: "Cyclone", unified: "1F300", sheet_x: 5, sheet_y: 21, short_names: ["cyclone"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "cyclone,weather,swirl,blue,cloud" }, waning_gibbous_moon: { name: "Waning Gibbous Moon Symbol", unified: "1F316", sheet_x: 6, sheet_y: 2, short_names: ["waning_gibbous_moon"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "waning,gibbous,moon,symbol,nature,twilight,planet,space,night,evening,sleep,waxing_gibbous_moon" }, hotel: { name: "Hotel", unified: "1F3E8", sheet_x: 11, sheet_y: 25, short_names: ["hotel"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "hotel,building,whotel,accomodation,checkin" }, loop: { name: "Double Curly Loop", unified: "27BF", sheet_x: 4, sheet_y: 16, short_names: ["loop"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "loop,double,curly,tape,cassette" }, convenience_store: { name: "Convenience Store", unified: "1F3EA", sheet_x: 11, sheet_y: 27, short_names: ["convenience_store"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "convenience,store,building,shopping,groceries" }, last_quarter_moon: { name: "Last Quarter Moon Symbol", unified: "1F317", sheet_x: 6, sheet_y: 3, short_names: ["last_quarter_moon"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "last,quarter,moon,symbol,nature,twilight,planet,space,night,evening,sleep" }, tada: { name: "Party Popper", unified: "1F389", sheet_x: 8, sheet_y: 38, short_names: ["tada"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "tada,party,popper,contulations,birthday,magic,circus" }, middle_finger: { name: "Reversed Hand with Middle Finger Extended", unified: "1F595", sheet_x: 25, sheet_y: 19, short_names: ["middle_finger", "reversed_hand_with_middle_finger_extended"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F595-1F3FB": { unified: "1F595-1F3FB", image: "1f595-1f3fb.png", sheet_x: 25, sheet_y: 20, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F595-1F3FC": { unified: "1F595-1F3FC", image: "1f595-1f3fc.png", sheet_x: 25, sheet_y: 21, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F595-1F3FD": { unified: "1F595-1F3FD", image: "1f595-1f3fd.png", sheet_x: 25, sheet_y: 22, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F595-1F3FE": { unified: "1F595-1F3FE", image: "1f595-1f3fe.png", sheet_x: 25, sheet_y: 23, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F595-1F3FF": { unified: "1F595-1F3FF", image: "1f595-1f3ff.png", sheet_x: 25, sheet_y: 24, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "middle,finger,reversed,hand,with,extended,fingers,rude" }, "flag-ie": { name: "Regional Indicator Symbol Letters IE", unified: "1F1EE-1F1EA", sheet_x: 35, sheet_y: 17, short_names: ["flag-ie"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ie,regional,indicator,symbol,letters" }, dolls: { name: "Japanese Dolls", unified: "1F38E", sheet_x: 9, sheet_y: 2, short_names: ["dolls"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "dolls,japanese,toy,kimono" }, globe_with_meridians: { name: "Globe with Meridians", unified: "1F310", sheet_x: 5, sheet_y: 37, short_names: ["globe_with_meridians"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "globe,with,meridians,earth,international,world,internet,interweb,i18n" }, "flag-im": { name: "Regional Indicator Symbol Letters IM", unified: "1F1EE-1F1F2", sheet_x: 35, sheet_y: 19, short_names: ["flag-im"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,im,regional,indicator,symbol,letters" }, waning_crescent_moon: { name: "Waning Crescent Moon Symbol", unified: "1F318", sheet_x: 6, sheet_y: 4, short_names: ["waning_crescent_moon"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "waning,crescent,moon,symbol,nature,twilight,planet,space,night,evening,sleep" }, raised_hand_with_fingers_splayed: { name: "Raised Hand with Fingers Splayed", unified: "1F590", sheet_x: 25, sheet_y: 13, short_names: ["raised_hand_with_fingers_splayed"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F590-1F3FB": { unified: "1F590-1F3FB", image: "1f590-1f3fb.png", sheet_x: 25, sheet_y: 14, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F590-1F3FC": { unified: "1F590-1F3FC", image: "1f590-1f3fc.png", sheet_x: 25, sheet_y: 15, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F590-1F3FD": { unified: "1F590-1F3FD", image: "1f590-1f3fd.png", sheet_x: 25, sheet_y: 16, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F590-1F3FE": { unified: "1F590-1F3FE", image: "1f590-1f3fe.png", sheet_x: 25, sheet_y: 17, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F590-1F3FF": { unified: "1F590-1F3FF", image: "1f590-1f3ff.png", sheet_x: 25, sheet_y: 18, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "raised,hand,with,fingers,splayed" }, school: { name: "School", unified: "1F3EB", sheet_x: 11, sheet_y: 28, short_names: ["school"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "school,building,student,education,learn,teach" }, new_moon: { name: "New Moon Symbol", unified: "1F311", sheet_x: 5, sheet_y: 38, short_names: ["new_moon"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "new,moon,symbol,nature,twilight,planet,space,night,evening,sleep" }, the_horns: { name: "Sign of the Horns", unified: "1F918", sheet_x: 32, sheet_y: 9, short_names: ["the_horns", "sign_of_the_horns"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F918-1F3FB": { unified: "1F918-1F3FB", image: "1f918-1f3fb.png", sheet_x: 32, sheet_y: 10, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F918-1F3FC": { unified: "1F918-1F3FC", image: "1f918-1f3fc.png", sheet_x: 32, sheet_y: 11, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F918-1F3FD": { unified: "1F918-1F3FD", image: "1f918-1f3fd.png", sheet_x: 32, sheet_y: 12, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F918-1F3FE": { unified: "1F918-1F3FE", image: "1f918-1f3fe.png", sheet_x: 32, sheet_y: 13, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F918-1F3FF": { unified: "1F918-1F3FF", image: "1f918-1f3ff.png", sheet_x: 32, sheet_y: 14, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "the,horns,sign,of" }, love_hotel: { name: "Love Hotel", unified: "1F3E9", sheet_x: 11, sheet_y: 26, short_names: ["love_hotel"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "love,hotel,like,affection,dating" }, m: { name: "Circled Latin Capital Letter M", unified: "24C2", variations: ["24C2-FE0F"], sheet_x: 0, sheet_y: 32, short_names: ["m"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "m,circled,latin,capital,letter,alphabet,blue-circle" }, "flag-il": { name: "Regional Indicator Symbol Letters IL", unified: "1F1EE-1F1F1", sheet_x: 35, sheet_y: 18, short_names: ["flag-il"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,il,regional,indicator,symbol,letters" }, wind_chime: { name: "Wind Chime", unified: "1F390", sheet_x: 9, sheet_y: 4, short_names: ["wind_chime"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "wind,chime,nature,ding,spring,bell" }, "spock-hand": { name: "Raised Hand with Part Between Middle and Ring Fingers", unified: "1F596", sheet_x: 25, sheet_y: 25, short_names: ["spock-hand"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F596-1F3FB": { unified: "1F596-1F3FB", image: "1f596-1f3fb.png", sheet_x: 25, sheet_y: 26, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F596-1F3FC": { unified: "1F596-1F3FC", image: "1f596-1f3fc.png", sheet_x: 25, sheet_y: 27, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F596-1F3FD": { unified: "1F596-1F3FD", image: "1f596-1f3fd.png", sheet_x: 25, sheet_y: 28, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F596-1F3FE": { unified: "1F596-1F3FE", image: "1f596-1f3fe.png", sheet_x: 25, sheet_y: 29, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F596-1F3FF": { unified: "1F596-1F3FF", image: "1f596-1f3ff.png", sheet_x: 25, sheet_y: 30, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "spock,hand,raised,with,part,between,middle,and,ring,fingers" }, wedding: { name: "Wedding", unified: "1F492", sheet_x: 19, sheet_y: 34, short_names: ["wedding"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "wedding,love,like,affection,couple,marriage,bride,groom" }, atm: { name: "Automated Teller Machine", unified: "1F3E7", sheet_x: 11, sheet_y: 24, short_names: ["atm"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "atm,automated,teller,machine,money,sales,cash,blue-square,payment,bank" }, crossed_flags: { name: "Crossed Flags", unified: "1F38C", sheet_x: 9, sheet_y: 0, short_names: ["crossed_flags"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "crossed,flags,japanese,nation,country,border" }, "flag-it": { name: "Regional Indicator Symbol Letters IT", unified: "1F1EE-1F1F9", sheet_x: 35, sheet_y: 25, short_names: ["flag-it", "it"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,it,regional,indicator,symbol,letters" }, waxing_crescent_moon: { name: "Waxing Crescent Moon Symbol", unified: "1F312", sheet_x: 5, sheet_y: 39, short_names: ["waxing_crescent_moon"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "waxing,crescent,moon,symbol,nature,twilight,planet,space,night,evening,sleep" }, izakaya_lantern: { name: "Izakaya Lantern", unified: "1F3EE", sheet_x: 11, sheet_y: 31, short_names: ["izakaya_lantern", "lantern"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "izakaya,lantern,light,paper,halloween,spooky" }, first_quarter_moon: { name: "First Quarter Moon Symbol", unified: "1F313", sheet_x: 5, sheet_y: 40, short_names: ["first_quarter_moon"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "first,quarter,moon,symbol,nature,twilight,planet,space,night,evening,sleep" }, sa: { name: "Squared Katakana Sa", unified: "1F202", variations: ["1F202-FE0F"], sheet_x: 5, sheet_y: 7, short_names: ["sa"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sa,squared,katakana,japanese,blue-square" }, classical_building: { name: "Classical Building", unified: "1F3DB", sheet_x: 11, sheet_y: 12, short_names: ["classical_building"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "classical,building" }, writing_hand: { name: "Writing Hand", unified: "270D", variations: ["270D-FE0F"], sheet_x: 3, sheet_y: 27, short_names: ["writing_hand"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "270D-1F3FB": { unified: "270D-1F3FB", image: "270d-1f3fb.png", sheet_x: 3, sheet_y: 28, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "270D-1F3FC": { unified: "270D-1F3FC", image: "270d-1f3fc.png", sheet_x: 3, sheet_y: 29, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "270D-1F3FD": { unified: "270D-1F3FD", image: "270d-1f3fd.png", sheet_x: 3, sheet_y: 30, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "270D-1F3FE": { unified: "270D-1F3FE", image: "270d-1f3fe.png", sheet_x: 3, sheet_y: 31, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "270D-1F3FF": { unified: "270D-1F3FF", image: "270d-1f3ff.png", sheet_x: 3, sheet_y: 32, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "writing,hand,pen,stationery" }, "flag-ci": { name: "Regional Indicator Symbol Letters CI", unified: "1F1E8-1F1EE", sheet_x: 33, sheet_y: 36, short_names: ["flag-ci"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ci,regional,indicator,symbol,letters" }, moon: { name: "Waxing Gibbous Moon Symbol", unified: "1F314", sheet_x: 6, sheet_y: 0, short_names: ["moon", "waxing_gibbous_moon"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "moon,waxing,gibbous,symbol,nature,night,sky,gray,twilight,planet,space,evening,sleep" }, church: { name: "Church", unified: "26EA", variations: ["26EA-FE0F"], sheet_x: 2, sheet_y: 29, short_names: ["church"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "church,building,religion,christ" }, email: { name: "Envelope", unified: "2709", variations: ["2709-FE0F"], sheet_x: 3, sheet_y: 8, short_names: ["email", "envelope"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "email,envelope,communication,inbox" }, passport_control: { name: "Passport Control", unified: "1F6C2", sheet_x: 31, sheet_y: 21, short_names: ["passport_control"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "passport,control,custom,blue-square" }, nail_care: { name: "Nail Polish", unified: "1F485", sheet_x: 19, sheet_y: 6, short_names: ["nail_care"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F485-1F3FB": { unified: "1F485-1F3FB", image: "1f485-1f3fb.png", sheet_x: 19, sheet_y: 7, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F485-1F3FC": { unified: "1F485-1F3FC", image: "1f485-1f3fc.png", sheet_x: 19, sheet_y: 8, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F485-1F3FD": { unified: "1F485-1F3FD", image: "1f485-1f3fd.png", sheet_x: 19, sheet_y: 9, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F485-1F3FE": { unified: "1F485-1F3FE", image: "1f485-1f3fe.png", sheet_x: 19, sheet_y: 10, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F485-1F3FF": { unified: "1F485-1F3FF", image: "1f485-1f3ff.png", sheet_x: 19, sheet_y: 11, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "nail,care,polish,beauty,manicure,finger,fashion" }, "flag-jm": { name: "Regional Indicator Symbol Letters JM", unified: "1F1EF-1F1F2", sheet_x: 35, sheet_y: 27, short_names: ["flag-jm"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,jm,regional,indicator,symbol,letters" }, lips: { name: "Mouth", unified: "1F444", sheet_x: 14, sheet_y: 1, short_names: ["lips"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "lips,mouth,kiss" }, mosque: { name: "Mosque", unified: "1F54C", sheet_x: 24, sheet_y: 8, short_names: ["mosque"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "mosque,islam,worship,minaret" }, "flag-jp": { name: "Regional Indicator Symbol Letters JP", unified: "1F1EF-1F1F5", sheet_x: 35, sheet_y: 29, short_names: ["flag-jp", "jp"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,jp,regional,indicator,symbol,letters" }, new_moon_with_face: { name: "New Moon with Face", unified: "1F31A", sheet_x: 6, sheet_y: 6, short_names: ["new_moon_with_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "new,moon,with,face,nature,twilight,planet,space,night,evening,sleep" }, customs: { name: "Customs", unified: "1F6C3", sheet_x: 31, sheet_y: 22, short_names: ["customs"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "customs,passport,border,blue-square" }, envelope_with_arrow: { name: "Envelope with Downwards Arrow Above", unified: "1F4E9", sheet_x: 22, sheet_y: 3, short_names: ["envelope_with_arrow"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "envelope,with,arrow,downwards,above,email,communication" }, full_moon_with_face: { name: "Full Moon with Face", unified: "1F31D", sheet_x: 6, sheet_y: 9, short_names: ["full_moon_with_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "full,moon,with,face,nature,twilight,planet,space,night,evening,sleep" }, "flag-je": { name: "Regional Indicator Symbol Letters JE", unified: "1F1EF-1F1EA", sheet_x: 35, sheet_y: 26, short_names: ["flag-je"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,je,regional,indicator,symbol,letters" }, synagogue: { name: "Synagogue", unified: "1F54D", sheet_x: 24, sheet_y: 9, short_names: ["synagogue"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "synagogue,judaism,worship,temple,jewish" }, baggage_claim: { name: "Baggage Claim", unified: "1F6C4", sheet_x: 31, sheet_y: 23, short_names: ["baggage_claim"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "baggage,claim,blue-square,airport,transport" }, tongue: { name: "Tongue", unified: "1F445", sheet_x: 14, sheet_y: 2, short_names: ["tongue"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "tongue,mouth,playful" }, incoming_envelope: { name: "Incoming Envelope", unified: "1F4E8", sheet_x: 22, sheet_y: 2, short_names: ["incoming_envelope"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "incoming,envelope,email,inbox" }, "e-mail": { name: "E-Mail Symbol", unified: "1F4E7", sheet_x: 22, sheet_y: 1, short_names: ["e-mail"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "e,mail,symbol" }, ear: { name: "Ear", unified: "1F442", sheet_x: 13, sheet_y: 30, short_names: ["ear"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F442-1F3FB": { unified: "1F442-1F3FB", image: "1f442-1f3fb.png", sheet_x: 13, sheet_y: 31, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F442-1F3FC": { unified: "1F442-1F3FC", image: "1f442-1f3fc.png", sheet_x: 13, sheet_y: 32, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F442-1F3FD": { unified: "1F442-1F3FD", image: "1f442-1f3fd.png", sheet_x: 13, sheet_y: 33, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F442-1F3FE": { unified: "1F442-1F3FE", image: "1f442-1f3fe.png", sheet_x: 13, sheet_y: 34, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F442-1F3FF": { unified: "1F442-1F3FF", image: "1f442-1f3ff.png", sheet_x: 13, sheet_y: 35, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "ear,face,hear,sound,listen" }, first_quarter_moon_with_face: { name: "First Quarter Moon with Face", unified: "1F31B", sheet_x: 6, sheet_y: 7, short_names: ["first_quarter_moon_with_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "first,quarter,moon,with,face,nature,twilight,planet,space,night,evening,sleep" }, left_luggage: { name: "Left Luggage", unified: "1F6C5", sheet_x: 31, sheet_y: 24, short_names: ["left_luggage"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "left,luggage,blue-square,travel" }, kaaba: { name: "Kaaba", unified: "1F54B", sheet_x: 24, sheet_y: 7, short_names: ["kaaba"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "kaaba,mecca,mosque,islam" }, "flag-jo": { name: "Regional Indicator Symbol Letters JO", unified: "1F1EF-1F1F4", sheet_x: 35, sheet_y: 28, short_names: ["flag-jo"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,jo,regional,indicator,symbol,letters" }, "flag-kz": { name: "Regional Indicator Symbol Letters KZ", unified: "1F1F0-1F1FF", sheet_x: 35, sheet_y: 40, short_names: ["flag-kz"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,kz,regional,indicator,symbol,letters" }, wheelchair: { name: "Wheelchair Symbol", unified: "267F", variations: ["267F-FE0F"], sheet_x: 2, sheet_y: 3, short_names: ["wheelchair"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "wheelchair,symbol,blue-square,disabled,a11y,accessibility" }, last_quarter_moon_with_face: { name: "Last Quarter Moon with Face", unified: "1F31C", sheet_x: 6, sheet_y: 8, short_names: ["last_quarter_moon_with_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "last,quarter,moon,with,face,nature,twilight,planet,space,night,evening,sleep" }, nose: { name: "Nose", unified: "1F443", sheet_x: 13, sheet_y: 36, short_names: ["nose"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F443-1F3FB": { unified: "1F443-1F3FB", image: "1f443-1f3fb.png", sheet_x: 13, sheet_y: 37, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F443-1F3FC": { unified: "1F443-1F3FC", image: "1f443-1f3fc.png", sheet_x: 13, sheet_y: 38, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F443-1F3FD": { unified: "1F443-1F3FD", image: "1f443-1f3fd.png", sheet_x: 13, sheet_y: 39, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F443-1F3FE": { unified: "1F443-1F3FE", image: "1f443-1f3fe.png", sheet_x: 13, sheet_y: 40, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F443-1F3FF": { unified: "1F443-1F3FF", image: "1f443-1f3ff.png", sheet_x: 14, sheet_y: 0, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "nose,smell,sniff" }, love_letter: { name: "Love Letter", unified: "1F48C", sheet_x: 19, sheet_y: 28, short_names: ["love_letter"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "love,letter,email,like,affection,envelope,valentines" }, shinto_shrine: { name: "Shinto Shrine", unified: "26E9", sheet_x: 2, sheet_y: 28, short_names: ["shinto_shrine"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "shinto,shrine,temple,japan,kyoto" }, no_smoking: { name: "No Smoking Symbol", unified: "1F6AD", sheet_x: 30, sheet_y: 21, short_names: ["no_smoking"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "no,smoking,symbol,cigarette,blue-square,smell,smoke" }, postbox: { name: "Postbox", unified: "1F4EE", sheet_x: 22, sheet_y: 8, short_names: ["postbox"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "postbox,email,letter,envelope" }, eye: { name: "Eye", unified: "1F441", sheet_x: 13, sheet_y: 29, short_names: ["eye"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "eye,face,look,see,watch,stare" }, sun_with_face: { name: "Sun with Face", unified: "1F31E", sheet_x: 6, sheet_y: 10, short_names: ["sun_with_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sun,with,face,nature,morning,sky" }, "flag-ke": { name: "Regional Indicator Symbol Letters KE", unified: "1F1F0-1F1EA", sheet_x: 35, sheet_y: 30, short_names: ["flag-ke"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ke,regional,indicator,symbol,letters" }, mailbox_closed: { name: "Closed Mailbox with Lowered Flag", unified: "1F4EA", sheet_x: 22, sheet_y: 4, short_names: ["mailbox_closed"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "mailbox,closed,with,lowered,flag,email,communication,inbox" }, "flag-ki": { name: "Regional Indicator Symbol Letters KI", unified: "1F1F0-1F1EE", sheet_x: 35, sheet_y: 33, short_names: ["flag-ki"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ki,regional,indicator,symbol,letters" }, eyes: { name: "Eyes", unified: "1F440", sheet_x: 13, sheet_y: 28, short_names: ["eyes"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "eyes,look,watch,stalk,peek,see" }, wc: { name: "Water Closet", unified: "1F6BE", sheet_x: 31, sheet_y: 12, short_names: ["wc"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "wc,water,closet,toilet,restroom,blue-square" }, crescent_moon: { name: "Crescent Moon", unified: "1F319", sheet_x: 6, sheet_y: 5, short_names: ["crescent_moon"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "crescent,moon,night,sleep,sky,evening,magic" }, mailbox: { name: "Closed Mailbox with Raised Flag", unified: "1F4EB", sheet_x: 22, sheet_y: 5, short_names: ["mailbox"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "mailbox,closed,with,raised,flag,email,inbox,communication" }, "flag-xk": { name: "Regional Indicator Symbol Letters XK", unified: "1F1FD-1F1F0", sheet_x: 38, sheet_y: 38, short_names: ["flag-xk"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,xk,regional,indicator,symbol,letters" }, parking: { name: "Negative Squared Latin Capital Letter P", unified: "1F17F", variations: ["1F17F-FE0F"], sheet_x: 4, sheet_y: 35, short_names: ["parking"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "parking,negative,squared,latin,capital,letter,p,cars,blue-square,alphabet" }, bust_in_silhouette: { name: "Bust in Silhouette", unified: "1F464", sheet_x: 16, sheet_y: 6, short_names: ["bust_in_silhouette"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bust,in,silhouette,user,person,human" }, star: { name: "White Medium Star", unified: "2B50", variations: ["2B50-FE0F"], sheet_x: 4, sheet_y: 24, short_names: ["star"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "star,white,medium,night,yellow" }, "star2": { name: "Glowing Star", unified: "1F31F", sheet_x: 6, sheet_y: 11, short_names: ["star2"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "star2,glowing,star,night,sparkle,awesome,good,magic" }, mailbox_with_mail: { name: "Open Mailbox with Raised Flag", unified: "1F4EC", sheet_x: 22, sheet_y: 6, short_names: ["mailbox_with_mail"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "mailbox,with,mail,open,raised,flag,email,inbox,communication" }, potable_water: { name: "Potable Water Symbol", unified: "1F6B0", sheet_x: 30, sheet_y: 24, short_names: ["potable_water"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "potable,water,symbol,blue-square,liquid,restroom,cleaning,faucet" }, busts_in_silhouette: { name: "Busts in Silhouette", unified: "1F465", sheet_x: 16, sheet_y: 7, short_names: ["busts_in_silhouette"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "busts,in,silhouette,user,person,human,group,team" }, "flag-kw": { name: "Regional Indicator Symbol Letters KW", unified: "1F1F0-1F1FC", sheet_x: 35, sheet_y: 38, short_names: ["flag-kw"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,kw,regional,indicator,symbol,letters" }, mens: { name: "Mens Symbol", unified: "1F6B9", sheet_x: 31, sheet_y: 7, short_names: ["mens"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "mens,symbol,toilet,restroom,wc,blue-square,gender,male" }, dizzy: { name: "Dizzy Symbol", unified: "1F4AB", sheet_x: 20, sheet_y: 23, short_names: ["dizzy"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "dizzy,symbol,star,sparkle,shoot,magic" }, speaking_head_in_silhouette: { name: "Speaking Head in Silhouette", unified: "1F5E3", sheet_x: 26, sheet_y: 5, short_names: ["speaking_head_in_silhouette"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "speaking,head,in,silhouette" }, "flag-kg": { name: "Regional Indicator Symbol Letters KG", unified: "1F1F0-1F1EC", sheet_x: 35, sheet_y: 31, short_names: ["flag-kg"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,kg,regional,indicator,symbol,letters" }, mailbox_with_no_mail: { name: "Open Mailbox with Lowered Flag", unified: "1F4ED", sheet_x: 22, sheet_y: 7, short_names: ["mailbox_with_no_mail"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "mailbox,with,no,mail,open,lowered,flag,email,inbox" }, sparkles: { name: "Sparkles", unified: "2728", sheet_x: 3, sheet_y: 39, short_names: ["sparkles"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sparkles,stars,shine,shiny,cool,awesome,good,magic" }, baby: { name: "Baby", unified: "1F476", sheet_x: 17, sheet_y: 38, short_names: ["baby"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F476-1F3FB": { unified: "1F476-1F3FB", image: "1f476-1f3fb.png", sheet_x: 17, sheet_y: 39, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F476-1F3FC": { unified: "1F476-1F3FC", image: "1f476-1f3fc.png", sheet_x: 17, sheet_y: 40, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F476-1F3FD": { unified: "1F476-1F3FD", image: "1f476-1f3fd.png", sheet_x: 18, sheet_y: 0, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F476-1F3FE": { unified: "1F476-1F3FE", image: "1f476-1f3fe.png", sheet_x: 18, sheet_y: 1, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F476-1F3FF": { unified: "1F476-1F3FF", image: "1f476-1f3ff.png", sheet_x: 18, sheet_y: 2, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "baby,child,boy,girl,toddler" }, package: { name: "Package", unified: "1F4E6", sheet_x: 22, sheet_y: 0, short_names: ["package"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "package,mail,gift,cardboard,box,moving" }, womens: { name: "Womens Symbol", unified: "1F6BA", sheet_x: 31, sheet_y: 8, short_names: ["womens"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "womens,symbol,purple-square,woman,female,toilet,loo,restroom,gender" }, "flag-la": { name: "Regional Indicator Symbol Letters LA", unified: "1F1F1-1F1E6", sheet_x: 36, sheet_y: 0, short_names: ["flag-la"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,la,regional,indicator,symbol,letters" }, baby_symbol: { name: "Baby Symbol", unified: "1F6BC", sheet_x: 31, sheet_y: 10, short_names: ["baby_symbol"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "baby,symbol,orange-square,child" }, "flag-lv": { name: "Regional Indicator Symbol Letters LV", unified: "1F1F1-1F1FB", sheet_x: 36, sheet_y: 9, short_names: ["flag-lv"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,lv,regional,indicator,symbol,letters" }, postal_horn: { name: "Postal Horn", unified: "1F4EF", sheet_x: 22, sheet_y: 9, short_names: ["postal_horn"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "postal,horn,instrument,music" }, comet: { name: "Comet", unified: "2604", variations: ["2604-FE0F"], sheet_x: 1, sheet_y: 4, short_names: ["comet"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "comet,space" }, boy: { name: "Boy", unified: "1F466", sheet_x: 16, sheet_y: 8, short_names: ["boy"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F466-1F3FB": { unified: "1F466-1F3FB", image: "1f466-1f3fb.png", sheet_x: 16, sheet_y: 9, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F466-1F3FC": { unified: "1F466-1F3FC", image: "1f466-1f3fc.png", sheet_x: 16, sheet_y: 10, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F466-1F3FD": { unified: "1F466-1F3FD", image: "1f466-1f3fd.png", sheet_x: 16, sheet_y: 11, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F466-1F3FE": { unified: "1F466-1F3FE", image: "1f466-1f3fe.png", sheet_x: 16, sheet_y: 12, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F466-1F3FF": { unified: "1F466-1F3FF", image: "1f466-1f3ff.png", sheet_x: 16, sheet_y: 13, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "boy,man,male,guy,teenager" }, restroom: { name: "Restroom", unified: "1F6BB", sheet_x: 31, sheet_y: 9, short_names: ["restroom"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "restroom,blue-square,toilet,refresh,wc,gender" }, "flag-lb": { name: "Regional Indicator Symbol Letters LB", unified: "1F1F1-1F1E7", sheet_x: 36, sheet_y: 1, short_names: ["flag-lb"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,lb,regional,indicator,symbol,letters" }, inbox_tray: { name: "Inbox Tray", unified: "1F4E5", sheet_x: 21, sheet_y: 40, short_names: ["inbox_tray"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "inbox,tray,email,documents" }, sunny: { name: "Black Sun with Rays", unified: "2600", variations: ["2600-FE0F"], sheet_x: 1, sheet_y: 0, short_names: ["sunny"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sunny,black,sun,with,rays,weather,nature,brightness,summer,beach,spring" }, girl: { name: "Girl", unified: "1F467", sheet_x: 16, sheet_y: 14, short_names: ["girl"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F467-1F3FB": { unified: "1F467-1F3FB", image: "1f467-1f3fb.png", sheet_x: 16, sheet_y: 15, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F467-1F3FC": { unified: "1F467-1F3FC", image: "1f467-1f3fc.png", sheet_x: 16, sheet_y: 16, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F467-1F3FD": { unified: "1F467-1F3FD", image: "1f467-1f3fd.png", sheet_x: 16, sheet_y: 17, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F467-1F3FE": { unified: "1F467-1F3FE", image: "1f467-1f3fe.png", sheet_x: 16, sheet_y: 18, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F467-1F3FF": { unified: "1F467-1F3FF", image: "1f467-1f3ff.png", sheet_x: 16, sheet_y: 19, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "girl,female,woman,teenager" }, man: { name: "Man", unified: "1F468", sheet_x: 16, sheet_y: 20, short_names: ["man"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F468-1F3FB": { unified: "1F468-1F3FB", image: "1f468-1f3fb.png", sheet_x: 16, sheet_y: 21, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F468-1F3FC": { unified: "1F468-1F3FC", image: "1f468-1f3fc.png", sheet_x: 16, sheet_y: 22, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F468-1F3FD": { unified: "1F468-1F3FD", image: "1f468-1f3fd.png", sheet_x: 16, sheet_y: 23, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F468-1F3FE": { unified: "1F468-1F3FE", image: "1f468-1f3fe.png", sheet_x: 16, sheet_y: 24, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F468-1F3FF": { unified: "1F468-1F3FF", image: "1f468-1f3ff.png", sheet_x: 16, sheet_y: 25, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "man,mustache,father,dad,guy,classy,sir,moustache" }, put_litter_in_its_place: { name: "Put Litter in Its Place Symbol", unified: "1F6AE", sheet_x: 30, sheet_y: 22, short_names: ["put_litter_in_its_place"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "put,litter,in,its,place,symbol,blue-square,sign,human,info" }, mostly_sunny: { name: "White Sun with Small Cloud", unified: "1F324", sheet_x: 6, sheet_y: 14, short_names: ["mostly_sunny", "sun_small_cloud"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "mostly,sunny,sun,small,cloud,white,with" }, "flag-ls": { name: "Regional Indicator Symbol Letters LS", unified: "1F1F1-1F1F8", sheet_x: 36, sheet_y: 6, short_names: ["flag-ls"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ls,regional,indicator,symbol,letters" }, outbox_tray: { name: "Outbox Tray", unified: "1F4E4", sheet_x: 21, sheet_y: 39, short_names: ["outbox_tray"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "outbox,tray,inbox,email" }, cinema: { name: "Cinema", unified: "1F3A6", sheet_x: 9, sheet_y: 21, short_names: ["cinema"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "cinema,blue-square,record,film,movie,curtain,stage,theater" }, "flag-lr": { name: "Regional Indicator Symbol Letters LR", unified: "1F1F1-1F1F7", sheet_x: 36, sheet_y: 5, short_names: ["flag-lr"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,lr,regional,indicator,symbol,letters" }, scroll: { name: "Scroll", unified: "1F4DC", sheet_x: 21, sheet_y: 31, short_names: ["scroll"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "scroll,documents,ancient,history,paper" }, partly_sunny: { name: "Sun Behind Cloud", unified: "26C5", variations: ["26C5-FE0F"], sheet_x: 2, sheet_y: 21, short_names: ["partly_sunny"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "partly,sunny,sun,behind,cloud,weather,nature,cloudy,morning,fall,spring" }, woman: { name: "Woman", unified: "1F469", sheet_x: 16, sheet_y: 26, short_names: ["woman"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F469-1F3FB": { unified: "1F469-1F3FB", image: "1f469-1f3fb.png", sheet_x: 16, sheet_y: 27, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F469-1F3FC": { unified: "1F469-1F3FC", image: "1f469-1f3fc.png", sheet_x: 16, sheet_y: 28, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F469-1F3FD": { unified: "1F469-1F3FD", image: "1f469-1f3fd.png", sheet_x: 16, sheet_y: 29, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F469-1F3FE": { unified: "1F469-1F3FE", image: "1f469-1f3fe.png", sheet_x: 16, sheet_y: 30, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F469-1F3FF": { unified: "1F469-1F3FF", image: "1f469-1f3ff.png", sheet_x: 16, sheet_y: 31, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "woman,female,girls,lady" }, signal_strength: { name: "Antenna with Bars", unified: "1F4F6", sheet_x: 22, sheet_y: 16, short_names: ["signal_strength"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "signal,strength,antenna,with,bars,blue-square,reception,phone,internet,connection,wifi,bluetooth" }, person_with_blond_hair: { name: "Person with Blond Hair", unified: "1F471", sheet_x: 17, sheet_y: 8, short_names: ["person_with_blond_hair"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F471-1F3FB": { unified: "1F471-1F3FB", image: "1f471-1f3fb.png", sheet_x: 17, sheet_y: 9, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F471-1F3FC": { unified: "1F471-1F3FC", image: "1f471-1f3fc.png", sheet_x: 17, sheet_y: 10, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F471-1F3FD": { unified: "1F471-1F3FD", image: "1f471-1f3fd.png", sheet_x: 17, sheet_y: 11, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F471-1F3FE": { unified: "1F471-1F3FE", image: "1f471-1f3fe.png", sheet_x: 17, sheet_y: 12, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F471-1F3FF": { unified: "1F471-1F3FF", image: "1f471-1f3ff.png", sheet_x: 17, sheet_y: 13, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "person,with,blond,hair,man,male,boy,blonde,guy" }, barely_sunny: { name: "White Sun Behind Cloud", unified: "1F325", sheet_x: 6, sheet_y: 15, short_names: ["barely_sunny", "sun_behind_cloud"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "barely,sunny,sun,behind,cloud,white" }, page_with_curl: { name: "Page with Curl", unified: "1F4C3", sheet_x: 21, sheet_y: 6, short_names: ["page_with_curl"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "page,with,curl,documents,office,paper" }, "flag-ly": { name: "Regional Indicator Symbol Letters LY", unified: "1F1F1-1F1FE", sheet_x: 36, sheet_y: 10, short_names: ["flag-ly"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ly,regional,indicator,symbol,letters" }, bookmark_tabs: { name: "Bookmark Tabs", unified: "1F4D1", sheet_x: 21, sheet_y: 20, short_names: ["bookmark_tabs"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bookmark,tabs,favorite,save,order,tidy" }, "flag-li": { name: "Regional Indicator Symbol Letters LI", unified: "1F1F1-1F1EE", sheet_x: 36, sheet_y: 3, short_names: ["flag-li"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,li,regional,indicator,symbol,letters" }, older_man: { name: "Older Man", unified: "1F474", sheet_x: 17, sheet_y: 26, short_names: ["older_man"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F474-1F3FB": { unified: "1F474-1F3FB", image: "1f474-1f3fb.png", sheet_x: 17, sheet_y: 27, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F474-1F3FC": { unified: "1F474-1F3FC", image: "1f474-1f3fc.png", sheet_x: 17, sheet_y: 28, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F474-1F3FD": { unified: "1F474-1F3FD", image: "1f474-1f3fd.png", sheet_x: 17, sheet_y: 29, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F474-1F3FE": { unified: "1F474-1F3FE", image: "1f474-1f3fe.png", sheet_x: 17, sheet_y: 30, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F474-1F3FF": { unified: "1F474-1F3FF", image: "1f474-1f3ff.png", sheet_x: 17, sheet_y: 31, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "older,man,human,male,men" }, partly_sunny_rain: { name: "White Sun Behind Cloud with Rain", unified: "1F326", sheet_x: 6, sheet_y: 16, short_names: ["partly_sunny_rain", "sun_behind_rain_cloud"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "partly,sunny,rain,sun,behind,cloud,white,with" }, koko: { name: "Squared Katakana Koko", unified: "1F201", sheet_x: 5, sheet_y: 6, short_names: ["koko"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "koko,squared,katakana,blue-square,here,japanese,destination" }, bar_chart: { name: "Bar Chart", unified: "1F4CA", sheet_x: 21, sheet_y: 13, short_names: ["bar_chart"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bar,chart,graph,presentation,stats" }, cloud: { name: "Cloud", unified: "2601", variations: ["2601-FE0F"], sheet_x: 1, sheet_y: 1, short_names: ["cloud"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "cloud,weather,sky" }, ng: { name: "Squared Ng", unified: "1F196", sheet_x: 5, sheet_y: 1, short_names: ["ng"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ng,squared,blue-square,words,shape,icon" }, "flag-lt": { name: "Regional Indicator Symbol Letters LT", unified: "1F1F1-1F1F9", sheet_x: 36, sheet_y: 7, short_names: ["flag-lt"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,lt,regional,indicator,symbol,letters" }, older_woman: { name: "Older Woman", unified: "1F475", sheet_x: 17, sheet_y: 32, short_names: ["older_woman"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F475-1F3FB": { unified: "1F475-1F3FB", image: "1f475-1f3fb.png", sheet_x: 17, sheet_y: 33, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F475-1F3FC": { unified: "1F475-1F3FC", image: "1f475-1f3fc.png", sheet_x: 17, sheet_y: 34, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F475-1F3FD": { unified: "1F475-1F3FD", image: "1f475-1f3fd.png", sheet_x: 17, sheet_y: 35, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F475-1F3FE": { unified: "1F475-1F3FE", image: "1f475-1f3fe.png", sheet_x: 17, sheet_y: 36, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F475-1F3FF": { unified: "1F475-1F3FF", image: "1f475-1f3ff.png", sheet_x: 17, sheet_y: 37, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "older,woman,female,women,girl,lady" }, rain_cloud: { name: "Cloud with Rain", unified: "1F327", sheet_x: 6, sheet_y: 17, short_names: ["rain_cloud"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "rain,cloud,with" }, "flag-lu": { name: "Regional Indicator Symbol Letters LU", unified: "1F1F1-1F1FA", sheet_x: 36, sheet_y: 8, short_names: ["flag-lu"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,lu,regional,indicator,symbol,letters" }, chart_with_upwards_trend: { name: "Chart with Upwards Trend", unified: "1F4C8", sheet_x: 21, sheet_y: 11, short_names: ["chart_with_upwards_trend"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "chart,with,upwards,trend,graph,presentation,stats,recovery,business,economics,money,sales,good,success" }, ok: { name: "Squared Ok", unified: "1F197", sheet_x: 5, sheet_y: 2, short_names: ["ok"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ok,squared,good,agree,yes,blue-square" }, man_with_gua_pi_mao: { name: "Man with Gua Pi Mao", unified: "1F472", sheet_x: 17, sheet_y: 14, short_names: ["man_with_gua_pi_mao"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F472-1F3FB": { unified: "1F472-1F3FB", image: "1f472-1f3fb.png", sheet_x: 17, sheet_y: 15, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F472-1F3FC": { unified: "1F472-1F3FC", image: "1f472-1f3fc.png", sheet_x: 17, sheet_y: 16, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F472-1F3FD": { unified: "1F472-1F3FD", image: "1f472-1f3fd.png", sheet_x: 17, sheet_y: 17, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F472-1F3FE": { unified: "1F472-1F3FE", image: "1f472-1f3fe.png", sheet_x: 17, sheet_y: 18, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F472-1F3FF": { unified: "1F472-1F3FF", image: "1f472-1f3ff.png", sheet_x: 17, sheet_y: 19, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "man,with,gua,pi,mao,male,boy" }, thunder_cloud_and_rain: { name: "Thunder Cloud and Rain", unified: "26C8", sheet_x: 2, sheet_y: 22, short_names: ["thunder_cloud_and_rain"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "thunder,cloud,and,rain,weather,lightning" }, up: { name: "Squared Up with Exclamation Mark", unified: "1F199", sheet_x: 5, sheet_y: 4, short_names: ["up"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "up,squared,with,exclamation,mark,blue-square,above,high" }, man_with_turban: { name: "Man with Turban", unified: "1F473", sheet_x: 17, sheet_y: 20, short_names: ["man_with_turban"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F473-1F3FB": { unified: "1F473-1F3FB", image: "1f473-1f3fb.png", sheet_x: 17, sheet_y: 21, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F473-1F3FC": { unified: "1F473-1F3FC", image: "1f473-1f3fc.png", sheet_x: 17, sheet_y: 22, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F473-1F3FD": { unified: "1F473-1F3FD", image: "1f473-1f3fd.png", sheet_x: 17, sheet_y: 23, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F473-1F3FE": { unified: "1F473-1F3FE", image: "1f473-1f3fe.png", sheet_x: 17, sheet_y: 24, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F473-1F3FF": { unified: "1F473-1F3FF", image: "1f473-1f3ff.png", sheet_x: 17, sheet_y: 25, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "man,with,turban,male,indian,hinduism,arabs" }, chart_with_downwards_trend: { name: "Chart with Downwards Trend", unified: "1F4C9", sheet_x: 21, sheet_y: 12, short_names: ["chart_with_downwards_trend"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "chart,with,downwards,trend,graph,presentation,stats,recession,business,economics,money,sales,bad,failure" }, "flag-mo": { name: "Regional Indicator Symbol Letters MO", unified: "1F1F2-1F1F4", sheet_x: 36, sheet_y: 22, short_names: ["flag-mo"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,mo,regional,indicator,symbol,letters" }, page_facing_up: { name: "Page Facing Up", unified: "1F4C4", sheet_x: 21, sheet_y: 7, short_names: ["page_facing_up"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "page,facing,up,documents,office,paper,information" }, cool: { name: "Squared Cool", unified: "1F192", sheet_x: 4, sheet_y: 38, short_names: ["cool"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "cool,squared,words,blue-square" }, lightning: { name: "Cloud with Lightning", unified: "1F329", sheet_x: 6, sheet_y: 19, short_names: ["lightning", "lightning_cloud"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "lightning,cloud,with" }, "flag-mk": { name: "Regional Indicator Symbol Letters MK", unified: "1F1F2-1F1F0", sheet_x: 36, sheet_y: 18, short_names: ["flag-mk"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,mk,regional,indicator,symbol,letters" }, cop: { name: "Police Officer", unified: "1F46E", sheet_x: 16, sheet_y: 36, short_names: ["cop"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F46E-1F3FB": { unified: "1F46E-1F3FB", image: "1f46e-1f3fb.png", sheet_x: 16, sheet_y: 37, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F46E-1F3FC": { unified: "1F46E-1F3FC", image: "1f46e-1f3fc.png", sheet_x: 16, sheet_y: 38, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F46E-1F3FD": { unified: "1F46E-1F3FD", image: "1f46e-1f3fd.png", sheet_x: 16, sheet_y: 39, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F46E-1F3FE": { unified: "1F46E-1F3FE", image: "1f46e-1f3fe.png", sheet_x: 16, sheet_y: 40, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F46E-1F3FF": { unified: "1F46E-1F3FF", image: "1f46e-1f3ff.png", sheet_x: 17, sheet_y: 0, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "cop,police,officer,man,law,legal,enforcement,arrest,911" }, "flag-mg": { name: "Regional Indicator Symbol Letters MG", unified: "1F1F2-1F1EC", sheet_x: 36, sheet_y: 16, short_names: ["flag-mg"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,mg,regional,indicator,symbol,letters" }, date: { name: "Calendar", unified: "1F4C5", sheet_x: 21, sheet_y: 8, short_names: ["date"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "date,calendar,schedule" }, new: { name: "Squared New", unified: "1F195", sheet_x: 5, sheet_y: 0, short_names: ["new"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "new,squared,blue-square,words,start" }, zap: { name: "High Voltage Sign", unified: "26A1", variations: ["26A1-FE0F"], sheet_x: 2, sheet_y: 13, short_names: ["zap"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "zap,high,voltage,sign,thunder,weather,lightning bolt,fast" }, construction_worker: { name: "Construction Worker", unified: "1F477", sheet_x: 18, sheet_y: 3, short_names: ["construction_worker"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F477-1F3FB": { unified: "1F477-1F3FB", image: "1f477-1f3fb.png", sheet_x: 18, sheet_y: 4, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F477-1F3FC": { unified: "1F477-1F3FC", image: "1f477-1f3fc.png", sheet_x: 18, sheet_y: 5, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F477-1F3FD": { unified: "1F477-1F3FD", image: "1f477-1f3fd.png", sheet_x: 18, sheet_y: 6, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F477-1F3FE": { unified: "1F477-1F3FE", image: "1f477-1f3fe.png", sheet_x: 18, sheet_y: 7, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F477-1F3FF": { unified: "1F477-1F3FF", image: "1f477-1f3ff.png", sheet_x: 18, sheet_y: 8, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "construction,worker,male,human,wip,guy,build" }, guardsman: { name: "Guardsman", unified: "1F482", sheet_x: 18, sheet_y: 34, short_names: ["guardsman"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F482-1F3FB": { unified: "1F482-1F3FB", image: "1f482-1f3fb.png", sheet_x: 18, sheet_y: 35, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F482-1F3FC": { unified: "1F482-1F3FC", image: "1f482-1f3fc.png", sheet_x: 18, sheet_y: 36, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F482-1F3FD": { unified: "1F482-1F3FD", image: "1f482-1f3fd.png", sheet_x: 18, sheet_y: 37, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F482-1F3FE": { unified: "1F482-1F3FE", image: "1f482-1f3fe.png", sheet_x: 18, sheet_y: 38, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F482-1F3FF": { unified: "1F482-1F3FF", image: "1f482-1f3ff.png", sheet_x: 18, sheet_y: 39, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "guardsman,uk,gb,british,male,guy,royal" }, fire: { name: "Fire", unified: "1F525", sheet_x: 23, sheet_y: 21, short_names: ["fire"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "fire,hot,cook,flame" }, free: { name: "Squared Free", unified: "1F193", sheet_x: 4, sheet_y: 39, short_names: ["free"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "free,squared,blue-square,words" }, "flag-mw": { name: "Regional Indicator Symbol Letters MW", unified: "1F1F2-1F1FC", sheet_x: 36, sheet_y: 30, short_names: ["flag-mw"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,mw,regional,indicator,symbol,letters" }, calendar: { name: "Tear-off Calendar", unified: "1F4C6", sheet_x: 21, sheet_y: 9, short_names: ["calendar"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "calendar,tear,off,schedule,date,planning" }, spiral_calendar_pad: { name: "Spiral Calendar Pad", unified: "1F5D3", sheet_x: 26, sheet_y: 0, short_names: ["spiral_calendar_pad"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "spiral,calendar,pad,date,schedule,planning" }, boom: { name: "Collision Symbol", unified: "1F4A5", sheet_x: 20, sheet_y: 12, short_names: ["boom", "collision"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "boom,collision,symbol,bomb,explode,explosion,blown" }, "flag-my": { name: "Regional Indicator Symbol Letters MY", unified: "1F1F2-1F1FE", sheet_x: 36, sheet_y: 32, short_names: ["flag-my"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,my,regional,indicator,symbol,letters" }, zero: { name: "Keycap 0", unified: "0030-20E3", variations: ["0030-FE0F-20E3"], sheet_x: 32, sheet_y: 23, short_names: ["zero"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "zero,keycap,0,numbers,blue-square,null" }, sleuth_or_spy: { name: "Sleuth or Spy", unified: "1F575", sheet_x: 24, sheet_y: 39, short_names: ["sleuth_or_spy"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F575-1F3FB": { unified: "1F575-1F3FB", image: "1f575-1f3fb.png", sheet_x: 24, sheet_y: 40, has_img_apple: true, has_img_google: false, has_img_twitter: false, has_img_emojione: true }, "1F575-1F3FC": { unified: "1F575-1F3FC", image: "1f575-1f3fc.png", sheet_x: 25, sheet_y: 0, has_img_apple: true, has_img_google: false, has_img_twitter: false, has_img_emojione: true }, "1F575-1F3FD": { unified: "1F575-1F3FD", image: "1f575-1f3fd.png", sheet_x: 25, sheet_y: 1, has_img_apple: true, has_img_google: false, has_img_twitter: false, has_img_emojione: true }, "1F575-1F3FE": { unified: "1F575-1F3FE", image: "1f575-1f3fe.png", sheet_x: 25, sheet_y: 2, has_img_apple: true, has_img_google: false, has_img_twitter: false, has_img_emojione: true }, "1F575-1F3FF": { unified: "1F575-1F3FF", image: "1f575-1f3ff.png", sheet_x: 25, sheet_y: 3, has_img_apple: true, has_img_google: false, has_img_twitter: false, has_img_emojione: true } }, search: "sleuth,or,spy" }, one: { name: "Keycap 1", unified: "0031-20E3", variations: ["0031-FE0F-20E3"], sheet_x: 32, sheet_y: 24, short_names: ["one"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "one,keycap,1,blue-square,numbers" }, santa: { name: "Father Christmas", unified: "1F385", sheet_x: 8, sheet_y: 29, short_names: ["santa"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F385-1F3FB": { unified: "1F385-1F3FB", image: "1f385-1f3fb.png", sheet_x: 8, sheet_y: 30, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F385-1F3FC": { unified: "1F385-1F3FC", image: "1f385-1f3fc.png", sheet_x: 8, sheet_y: 31, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F385-1F3FD": { unified: "1F385-1F3FD", image: "1f385-1f3fd.png", sheet_x: 8, sheet_y: 32, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F385-1F3FE": { unified: "1F385-1F3FE", image: "1f385-1f3fe.png", sheet_x: 8, sheet_y: 33, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F385-1F3FF": { unified: "1F385-1F3FF", image: "1f385-1f3ff.png", sheet_x: 8, sheet_y: 34, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "santa,father,christmas,festival,man,male,xmas,father christmas" }, card_index: { name: "Card Index", unified: "1F4C7", sheet_x: 21, sheet_y: 10, short_names: ["card_index"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "card,index,business,stationery" }, snowflake: { name: "Snowflake", unified: "2744", variations: ["2744-FE0F"], sheet_x: 4, sheet_y: 1, short_names: ["snowflake"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "snowflake,winter,season,cold,weather,christmas,xmas" }, "flag-mv": { name: "Regional Indicator Symbol Letters MV", unified: "1F1F2-1F1FB", sheet_x: 36, sheet_y: 29, short_names: ["flag-mv"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,mv,regional,indicator,symbol,letters" }, snow_cloud: { name: "Cloud with Snow", unified: "1F328", sheet_x: 6, sheet_y: 18, short_names: ["snow_cloud"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "snow,cloud,with" }, angel: { name: "Baby Angel", unified: "1F47C", sheet_x: 18, sheet_y: 18, short_names: ["angel"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F47C-1F3FB": { unified: "1F47C-1F3FB", image: "1f47c-1f3fb.png", sheet_x: 18, sheet_y: 19, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F47C-1F3FC": { unified: "1F47C-1F3FC", image: "1f47c-1f3fc.png", sheet_x: 18, sheet_y: 20, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F47C-1F3FD": { unified: "1F47C-1F3FD", image: "1f47c-1f3fd.png", sheet_x: 18, sheet_y: 21, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F47C-1F3FE": { unified: "1F47C-1F3FE", image: "1f47c-1f3fe.png", sheet_x: 18, sheet_y: 22, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F47C-1F3FF": { unified: "1F47C-1F3FF", image: "1f47c-1f3ff.png", sheet_x: 18, sheet_y: 23, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "angel,baby,heaven,wings,halo" }, two: { name: "Keycap 2", unified: "0032-20E3", variations: ["0032-FE0F-20E3"], sheet_x: 32, sheet_y: 25, short_names: ["two"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "two,keycap,2,numbers,prime,blue-square" }, card_file_box: { name: "Card File Box", unified: "1F5C3", sheet_x: 25, sheet_y: 37, short_names: ["card_file_box"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "card,file,box,business,stationery" }, "flag-ml": { name: "Regional Indicator Symbol Letters ML", unified: "1F1F2-1F1F1", sheet_x: 36, sheet_y: 19, short_names: ["flag-ml"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ml,regional,indicator,symbol,letters" }, three: { name: "Keycap 3", unified: "0033-20E3", variations: ["0033-FE0F-20E3"], sheet_x: 32, sheet_y: 26, short_names: ["three"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "three,keycap,3,numbers,prime,blue-square" }, princess: { name: "Princess", unified: "1F478", sheet_x: 18, sheet_y: 9, short_names: ["princess"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F478-1F3FB": { unified: "1F478-1F3FB", image: "1f478-1f3fb.png", sheet_x: 18, sheet_y: 10, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F478-1F3FC": { unified: "1F478-1F3FC", image: "1f478-1f3fc.png", sheet_x: 18, sheet_y: 11, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F478-1F3FD": { unified: "1F478-1F3FD", image: "1f478-1f3fd.png", sheet_x: 18, sheet_y: 12, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F478-1F3FE": { unified: "1F478-1F3FE", image: "1f478-1f3fe.png", sheet_x: 18, sheet_y: 13, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F478-1F3FF": { unified: "1F478-1F3FF", image: "1f478-1f3ff.png", sheet_x: 18, sheet_y: 14, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "princess,girl,woman,female,blond,crown,royal,queen" }, snowman: { name: "Snowman", unified: "2603", variations: ["2603-FE0F"], sheet_x: 1, sheet_y: 3, short_names: ["snowman"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "snowman,winter,season,cold,weather,christmas,xmas,frozen,without_snow" }, ballot_box_with_ballot: { name: "Ballot Box with Ballot", unified: "1F5F3", sheet_x: 26, sheet_y: 8, short_names: ["ballot_box_with_ballot"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ballot,box,with,election,vote" }, "flag-mt": { name: "Regional Indicator Symbol Letters MT", unified: "1F1F2-1F1F9", sheet_x: 36, sheet_y: 27, short_names: ["flag-mt"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,mt,regional,indicator,symbol,letters" }, file_cabinet: { name: "File Cabinet", unified: "1F5C4", sheet_x: 25, sheet_y: 38, short_names: ["file_cabinet"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "file,cabinet,filing,organizing" }, bride_with_veil: { name: "Bride with Veil", unified: "1F470", sheet_x: 17, sheet_y: 2, short_names: ["bride_with_veil"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F470-1F3FB": { unified: "1F470-1F3FB", image: "1f470-1f3fb.png", sheet_x: 17, sheet_y: 3, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F470-1F3FC": { unified: "1F470-1F3FC", image: "1f470-1f3fc.png", sheet_x: 17, sheet_y: 4, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F470-1F3FD": { unified: "1F470-1F3FD", image: "1f470-1f3fd.png", sheet_x: 17, sheet_y: 5, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F470-1F3FE": { unified: "1F470-1F3FE", image: "1f470-1f3fe.png", sheet_x: 17, sheet_y: 6, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F470-1F3FF": { unified: "1F470-1F3FF", image: "1f470-1f3ff.png", sheet_x: 17, sheet_y: 7, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "bride,with,veil,couple,marriage,wedding" }, "flag-mh": { name: "Regional Indicator Symbol Letters MH", unified: "1F1F2-1F1ED", sheet_x: 36, sheet_y: 17, short_names: ["flag-mh"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,mh,regional,indicator,symbol,letters" }, snowman_without_snow: { name: "Snowman Without Snow", unified: "26C4", variations: ["26C4-FE0F"], sheet_x: 2, sheet_y: 20, short_names: ["snowman_without_snow"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "snowman,without,snow" }, four: { name: "Keycap 4", unified: "0034-20E3", variations: ["0034-FE0F-20E3"], sheet_x: 32, sheet_y: 27, short_names: ["four"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "four,keycap,4,numbers,blue-square" }, clipboard: { name: "Clipboard", unified: "1F4CB", sheet_x: 21, sheet_y: 14, short_names: ["clipboard"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clipboard,stationery,documents" }, wind_blowing_face: { name: "Wind Blowing Face", unified: "1F32C", sheet_x: 6, sheet_y: 22, short_names: ["wind_blowing_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "wind,blowing,face,gust,air" }, five: { name: "Keycap 5", unified: "0035-20E3", variations: ["0035-FE0F-20E3"], sheet_x: 32, sheet_y: 28, short_names: ["five"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "five,keycap,5,numbers,blue-square,prime" }, walking: { name: "Pedestrian", unified: "1F6B6", sheet_x: 30, sheet_y: 40, short_names: ["walking"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F6B6-1F3FB": { unified: "1F6B6-1F3FB", image: "1f6b6-1f3fb.png", sheet_x: 31, sheet_y: 0, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F6B6-1F3FC": { unified: "1F6B6-1F3FC", image: "1f6b6-1f3fc.png", sheet_x: 31, sheet_y: 1, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F6B6-1F3FD": { unified: "1F6B6-1F3FD", image: "1f6b6-1f3fd.png", sheet_x: 31, sheet_y: 2, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F6B6-1F3FE": { unified: "1F6B6-1F3FE", image: "1f6b6-1f3fe.png", sheet_x: 31, sheet_y: 3, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F6B6-1F3FF": { unified: "1F6B6-1F3FF", image: "1f6b6-1f3ff.png", sheet_x: 31, sheet_y: 4, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "walking,pedestrian,human,feet,steps" }, "flag-mq": { name: "Regional Indicator Symbol Letters MQ", unified: "1F1F2-1F1F6", sheet_x: 36, sheet_y: 24, short_names: ["flag-mq"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,mq,regional,indicator,symbol,letters" }, six: { name: "Keycap 6", unified: "0036-20E3", variations: ["0036-FE0F-20E3"], sheet_x: 32, sheet_y: 29, short_names: ["six"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "six,keycap,6,numbers,blue-square" }, dash: { name: "Dash Symbol", unified: "1F4A8", sheet_x: 20, sheet_y: 15, short_names: ["dash"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "dash,symbol,wind,air,fast,shoo,fart,smoke,puff" }, "flag-mr": { name: "Regional Indicator Symbol Letters MR", unified: "1F1F2-1F1F7", sheet_x: 36, sheet_y: 25, short_names: ["flag-mr"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,mr,regional,indicator,symbol,letters" }, runner: { name: "Runner", unified: "1F3C3", sheet_x: 10, sheet_y: 9, short_names: ["runner", "running"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F3C3-1F3FB": { unified: "1F3C3-1F3FB", image: "1f3c3-1f3fb.png", sheet_x: 10, sheet_y: 10, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F3C3-1F3FC": { unified: "1F3C3-1F3FC", image: "1f3c3-1f3fc.png", sheet_x: 10, sheet_y: 11, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F3C3-1F3FD": { unified: "1F3C3-1F3FD", image: "1f3c3-1f3fd.png", sheet_x: 10, sheet_y: 12, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F3C3-1F3FE": { unified: "1F3C3-1F3FE", image: "1f3c3-1f3fe.png", sheet_x: 10, sheet_y: 13, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F3C3-1F3FF": { unified: "1F3C3-1F3FF", image: "1f3c3-1f3ff.png", sheet_x: 10, sheet_y: 14, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "runner,running,man,walking,exercise,race" }, spiral_note_pad: { name: "Spiral Note Pad", unified: "1F5D2", sheet_x: 25, sheet_y: 40, short_names: ["spiral_note_pad"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "spiral,note,pad,memo,stationery" }, seven: { name: "Keycap 7", unified: "0037-20E3", variations: ["0037-FE0F-20E3"], sheet_x: 32, sheet_y: 30, short_names: ["seven"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "seven,keycap,7,numbers,blue-square,prime" }, tornado: { name: "Cloud with Tornado", unified: "1F32A", sheet_x: 6, sheet_y: 20, short_names: ["tornado", "tornado_cloud"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "tornado,cloud,with" }, file_folder: { name: "File Folder", unified: "1F4C1", sheet_x: 21, sheet_y: 4, short_names: ["file_folder"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "file,folder,documents,business,office" }, "flag-mu": { name: "Regional Indicator Symbol Letters MU", unified: "1F1F2-1F1FA", sheet_x: 36, sheet_y: 28, short_names: ["flag-mu"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,mu,regional,indicator,symbol,letters" }, dancer: { name: "Dancer", unified: "1F483", sheet_x: 18, sheet_y: 40, short_names: ["dancer"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F483-1F3FB": { unified: "1F483-1F3FB", image: "1f483-1f3fb.png", sheet_x: 19, sheet_y: 0, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F483-1F3FC": { unified: "1F483-1F3FC", image: "1f483-1f3fc.png", sheet_x: 19, sheet_y: 1, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F483-1F3FD": { unified: "1F483-1F3FD", image: "1f483-1f3fd.png", sheet_x: 19, sheet_y: 2, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F483-1F3FE": { unified: "1F483-1F3FE", image: "1f483-1f3fe.png", sheet_x: 19, sheet_y: 3, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F483-1F3FF": { unified: "1F483-1F3FF", image: "1f483-1f3ff.png", sheet_x: 19, sheet_y: 4, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "dancer,female,girl,woman,fun" }, open_file_folder: { name: "Open File Folder", unified: "1F4C2", sheet_x: 21, sheet_y: 5, short_names: ["open_file_folder"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "open,file,folder,documents,load" }, eight: { name: "Keycap 8", unified: "0038-20E3", variations: ["0038-FE0F-20E3"], sheet_x: 32, sheet_y: 31, short_names: ["eight"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "eight,keycap,8,blue-square,numbers" }, fog: { name: "Fog", unified: "1F32B", sheet_x: 6, sheet_y: 21, short_names: ["fog"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "fog,weather" }, dancers: { name: "Woman with Bunny Ears", unified: "1F46F", sheet_x: 17, sheet_y: 1, short_names: ["dancers"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "dancers,woman,with,bunny,ears,female,women,girls" }, "flag-yt": { name: "Regional Indicator Symbol Letters YT", unified: "1F1FE-1F1F9", sheet_x: 38, sheet_y: 40, short_names: ["flag-yt"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,yt,regional,indicator,symbol,letters" }, "flag-mx": { name: "Regional Indicator Symbol Letters MX", unified: "1F1F2-1F1FD", sheet_x: 36, sheet_y: 31, short_names: ["flag-mx"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,mx,regional,indicator,symbol,letters" }, card_index_dividers: { name: "Card Index Dividers", unified: "1F5C2", sheet_x: 25, sheet_y: 36, short_names: ["card_index_dividers"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "card,index,dividers,organizing,business,stationery" }, couple: { name: "Man and Woman Holding Hands", unified: "1F46B", sheet_x: 16, sheet_y: 33, short_names: ["couple", "man_and_woman_holding_hands"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "couple,man,and,woman,holding,hands,pair,people,human,love,date,dating,like,affection,valentines,marriage" }, umbrella: { name: "Umbrella", unified: "2602", variations: ["2602-FE0F"], sheet_x: 1, sheet_y: 2, short_names: ["umbrella"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "umbrella,rainy,weather,spring" }, nine: { name: "Keycap 9", unified: "0039-20E3", variations: ["0039-FE0F-20E3"], sheet_x: 32, sheet_y: 32, short_names: ["nine"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "nine,keycap,9,blue-square,numbers" }, rolled_up_newspaper: { name: "Rolled-Up Newspaper", unified: "1F5DE", sheet_x: 26, sheet_y: 3, short_names: ["rolled_up_newspaper"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "rolled,up,newspaper,press,headline" }, "flag-fm": { name: "Regional Indicator Symbol Letters FM", unified: "1F1EB-1F1F2", sheet_x: 34, sheet_y: 28, short_names: ["flag-fm"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,fm,regional,indicator,symbol,letters" }, umbrella_with_rain_drops: { name: "Umbrella with Rain Drops", unified: "2614", variations: ["2614-FE0F"], sheet_x: 1, sheet_y: 7, short_names: ["umbrella_with_rain_drops"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "umbrella,with,rain,drops" }, two_men_holding_hands: { name: "Two Men Holding Hands", unified: "1F46C", sheet_x: 16, sheet_y: 34, short_names: ["two_men_holding_hands"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "two,men,holding,hands,pair,couple,love,like,bromance,friendship,people,human" }, keycap_ten: { name: "Keycap Ten", unified: "1F51F", sheet_x: 23, sheet_y: 15, short_names: ["keycap_ten"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "keycap,ten,numbers,10,blue-square" }, newspaper: { name: "Newspaper", unified: "1F4F0", sheet_x: 22, sheet_y: 10, short_names: ["newspaper"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "newspaper,press,headline" }, keycap_star: { name: "Keycap Star", unified: "002A-20E3", sheet_x: 32, sheet_y: 22, short_names: ["keycap_star"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "keycap,star,asterisk" }, "flag-md": { name: "Regional Indicator Symbol Letters MD", unified: "1F1F2-1F1E9", sheet_x: 36, sheet_y: 13, short_names: ["flag-md"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,md,regional,indicator,symbol,letters" }, two_women_holding_hands: { name: "Two Women Holding Hands", unified: "1F46D", sheet_x: 16, sheet_y: 35, short_names: ["two_women_holding_hands"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "two,women,holding,hands,pair,friendship,couple,love,like,female,people,human" }, droplet: { name: "Droplet", unified: "1F4A7", sheet_x: 20, sheet_y: 14, short_names: ["droplet"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "droplet,water,drip,faucet,spring" }, bow: { name: "Person Bowing Deeply", unified: "1F647", sheet_x: 28, sheet_y: 14, short_names: ["bow"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F647-1F3FB": { unified: "1F647-1F3FB", image: "1f647-1f3fb.png", sheet_x: 28, sheet_y: 15, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F647-1F3FC": { unified: "1F647-1F3FC", image: "1f647-1f3fc.png", sheet_x: 28, sheet_y: 16, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F647-1F3FD": { unified: "1F647-1F3FD", image: "1f647-1f3fd.png", sheet_x: 28, sheet_y: 17, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F647-1F3FE": { unified: "1F647-1F3FE", image: "1f647-1f3fe.png", sheet_x: 28, sheet_y: 18, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F647-1F3FF": { unified: "1F647-1F3FF", image: "1f647-1f3ff.png", sheet_x: 28, sheet_y: 19, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "bow,person,bowing,deeply,man,male,boy" }, notebook: { name: "Notebook", unified: "1F4D3", sheet_x: 21, sheet_y: 22, short_names: ["notebook"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "notebook,stationery,record,notes,paper,study" }, sweat_drops: { name: "Splashing Sweat Symbol", unified: "1F4A6", sheet_x: 20, sheet_y: 13, short_names: ["sweat_drops"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sweat,drops,splashing,symbol,water,drip,oops" }, "flag-mc": { name: "Regional Indicator Symbol Letters MC", unified: "1F1F2-1F1E8", sheet_x: 36, sheet_y: 12, short_names: ["flag-mc"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,mc,regional,indicator,symbol,letters" }, closed_book: { name: "Closed Book", unified: "1F4D5", sheet_x: 21, sheet_y: 24, short_names: ["closed_book"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "closed,book,read,library,knowledge,textbook,learn" }, "flag-mn": { name: "Regional Indicator Symbol Letters MN", unified: "1F1F2-1F1F3", sheet_x: 36, sheet_y: 21, short_names: ["flag-mn"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,mn,regional,indicator,symbol,letters" }, arrow_forward: { name: "Black Right-Pointing Triangle", unified: "25B6", variations: ["25B6-FE0F"], sheet_x: 0, sheet_y: 35, short_names: ["arrow_forward"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "arrow,forward,black,right,pointing,triangle,blue-square,direction,play" }, information_desk_person: { name: "Information Desk Person", unified: "1F481", sheet_x: 18, sheet_y: 28, short_names: ["information_desk_person"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F481-1F3FB": { unified: "1F481-1F3FB", image: "1f481-1f3fb.png", sheet_x: 18, sheet_y: 29, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F481-1F3FC": { unified: "1F481-1F3FC", image: "1f481-1f3fc.png", sheet_x: 18, sheet_y: 30, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F481-1F3FD": { unified: "1F481-1F3FD", image: "1f481-1f3fd.png", sheet_x: 18, sheet_y: 31, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F481-1F3FE": { unified: "1F481-1F3FE", image: "1f481-1f3fe.png", sheet_x: 18, sheet_y: 32, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F481-1F3FF": { unified: "1F481-1F3FF", image: "1f481-1f3ff.png", sheet_x: 18, sheet_y: 33, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "information,desk,person,female,girl,woman,human" }, ocean: { name: "Water Wave", unified: "1F30A", sheet_x: 5, sheet_y: 31, short_names: ["ocean"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ocean,water,wave,sea,nature,tsunami,disaster" }, double_vertical_bar: { name: "Double Vertical Bar", unified: "23F8", sheet_x: 0, sheet_y: 29, short_names: ["double_vertical_bar"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "double,vertical,bar,pause,blue-square" }, green_book: { name: "Green Book", unified: "1F4D7", sheet_x: 21, sheet_y: 26, short_names: ["green_book"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "green,book,read,library,knowledge,study" }, no_good: { name: "Face with No Good Gesture", unified: "1F645", sheet_x: 28, sheet_y: 2, short_names: ["no_good"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F645-1F3FB": { unified: "1F645-1F3FB", image: "1f645-1f3fb.png", sheet_x: 28, sheet_y: 3, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F645-1F3FC": { unified: "1F645-1F3FC", image: "1f645-1f3fc.png", sheet_x: 28, sheet_y: 4, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F645-1F3FD": { unified: "1F645-1F3FD", image: "1f645-1f3fd.png", sheet_x: 28, sheet_y: 5, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F645-1F3FE": { unified: "1F645-1F3FE", image: "1f645-1f3fe.png", sheet_x: 28, sheet_y: 6, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F645-1F3FF": { unified: "1F645-1F3FF", image: "1f645-1f3ff.png", sheet_x: 28, sheet_y: 7, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "no,good,face,with,gesture,female,girl,woman,nope" }, "flag-me": { name: "Regional Indicator Symbol Letters ME", unified: "1F1F2-1F1EA", sheet_x: 36, sheet_y: 14, short_names: ["flag-me"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,me,regional,indicator,symbol,letters" }, "flag-ms": { name: "Regional Indicator Symbol Letters MS", unified: "1F1F2-1F1F8", sheet_x: 36, sheet_y: 26, short_names: ["flag-ms"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ms,regional,indicator,symbol,letters" }, ok_woman: { name: "Face with Ok Gesture", unified: "1F646", sheet_x: 28, sheet_y: 8, short_names: ["ok_woman"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F646-1F3FB": { unified: "1F646-1F3FB", image: "1f646-1f3fb.png", sheet_x: 28, sheet_y: 9, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F646-1F3FC": { unified: "1F646-1F3FC", image: "1f646-1f3fc.png", sheet_x: 28, sheet_y: 10, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F646-1F3FD": { unified: "1F646-1F3FD", image: "1f646-1f3fd.png", sheet_x: 28, sheet_y: 11, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F646-1F3FE": { unified: "1F646-1F3FE", image: "1f646-1f3fe.png", sheet_x: 28, sheet_y: 12, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F646-1F3FF": { unified: "1F646-1F3FF", image: "1f646-1f3ff.png", sheet_x: 28, sheet_y: 13, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "ok,woman,face,with,gesture,women,girl,female,pink,human" }, blue_book: { name: "Blue Book", unified: "1F4D8", sheet_x: 21, sheet_y: 27, short_names: ["blue_book"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "blue,book,read,library,knowledge,learn,study" }, black_right_pointing_triangle_with_double_vertical_bar: { name: "Black Right-Pointing Triangle with Double Vertical Bar", unified: "23EF", sheet_x: 0, sheet_y: 24, short_names: ["black_right_pointing_triangle_with_double_vertical_bar"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "black,right,pointing,triangle,with,double,vertical,bar,forward,next,blue-square" }, raising_hand: { name: "Happy Person Raising One Hand", unified: "1F64B", sheet_x: 28, sheet_y: 23, short_names: ["raising_hand"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F64B-1F3FB": { unified: "1F64B-1F3FB", image: "1f64b-1f3fb.png", sheet_x: 28, sheet_y: 24, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F64B-1F3FC": { unified: "1F64B-1F3FC", image: "1f64b-1f3fc.png", sheet_x: 28, sheet_y: 25, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F64B-1F3FD": { unified: "1F64B-1F3FD", image: "1f64b-1f3fd.png", sheet_x: 28, sheet_y: 26, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F64B-1F3FE": { unified: "1F64B-1F3FE", image: "1f64b-1f3fe.png", sheet_x: 28, sheet_y: 27, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F64B-1F3FF": { unified: "1F64B-1F3FF", image: "1f64b-1f3ff.png", sheet_x: 28, sheet_y: 28, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "raising,hand,happy,person,one,female,girl,woman" }, black_square_for_stop: { name: "Black Square for Stop", unified: "23F9", sheet_x: 0, sheet_y: 30, short_names: ["black_square_for_stop"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "black,square,for,stop,blue-square" }, orange_book: { name: "Orange Book", unified: "1F4D9", sheet_x: 21, sheet_y: 28, short_names: ["orange_book"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "orange,book,read,library,knowledge,textbook,study" }, "flag-ma": { name: "Regional Indicator Symbol Letters MA", unified: "1F1F2-1F1E6", sheet_x: 36, sheet_y: 11, short_names: ["flag-ma"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ma,regional,indicator,symbol,letters" }, "flag-mz": { name: "Regional Indicator Symbol Letters MZ", unified: "1F1F2-1F1FF", sheet_x: 36, sheet_y: 33, short_names: ["flag-mz"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,mz,regional,indicator,symbol,letters" }, notebook_with_decorative_cover: { name: "Notebook with Decorative Cover", unified: "1F4D4", sheet_x: 21, sheet_y: 23, short_names: ["notebook_with_decorative_cover"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "notebook,with,decorative,cover,classroom,notes,record,paper,study" }, person_with_pouting_face: { name: "Person with Pouting Face", unified: "1F64E", sheet_x: 29, sheet_y: 0, short_names: ["person_with_pouting_face"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F64E-1F3FB": { unified: "1F64E-1F3FB", image: "1f64e-1f3fb.png", sheet_x: 29, sheet_y: 1, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F64E-1F3FC": { unified: "1F64E-1F3FC", image: "1f64e-1f3fc.png", sheet_x: 29, sheet_y: 2, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F64E-1F3FD": { unified: "1F64E-1F3FD", image: "1f64e-1f3fd.png", sheet_x: 29, sheet_y: 3, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F64E-1F3FE": { unified: "1F64E-1F3FE", image: "1f64e-1f3fe.png", sheet_x: 29, sheet_y: 4, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F64E-1F3FF": { unified: "1F64E-1F3FF", image: "1f64e-1f3ff.png", sheet_x: 29, sheet_y: 5, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "person,with,pouting,face,female,girl,woman" }, eject: { name: "Eject Symbol", unified: "23CF", sheet_x: 0, sheet_y: 17, short_names: ["eject"], has_img_apple: false, has_img_google: true, has_img_twitter: false, has_img_emojione: false, search: "eject,symbol" }, black_circle_for_record: { name: "Black Circle for Record", unified: "23FA", sheet_x: 0, sheet_y: 31, short_names: ["black_circle_for_record"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "black,circle,for,record,blue-square" }, "flag-mm": { name: "Regional Indicator Symbol Letters MM", unified: "1F1F2-1F1F2", sheet_x: 36, sheet_y: 20, short_names: ["flag-mm"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,mm,regional,indicator,symbol,letters" }, person_frowning: { name: "Person Frowning", unified: "1F64D", sheet_x: 28, sheet_y: 35, short_names: ["person_frowning"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F64D-1F3FB": { unified: "1F64D-1F3FB", image: "1f64d-1f3fb.png", sheet_x: 28, sheet_y: 36, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F64D-1F3FC": { unified: "1F64D-1F3FC", image: "1f64d-1f3fc.png", sheet_x: 28, sheet_y: 37, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F64D-1F3FD": { unified: "1F64D-1F3FD", image: "1f64d-1f3fd.png", sheet_x: 28, sheet_y: 38, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F64D-1F3FE": { unified: "1F64D-1F3FE", image: "1f64d-1f3fe.png", sheet_x: 28, sheet_y: 39, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F64D-1F3FF": { unified: "1F64D-1F3FF", image: "1f64d-1f3ff.png", sheet_x: 28, sheet_y: 40, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "person,frowning,female,girl,woman,sad,depressed,discouraged,unhappy" }, ledger: { name: "Ledger", unified: "1F4D2", sheet_x: 21, sheet_y: 21, short_names: ["ledger"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ledger,notes,paper" }, "flag-na": { name: "Regional Indicator Symbol Letters NA", unified: "1F1F3-1F1E6", sheet_x: 36, sheet_y: 34, short_names: ["flag-na"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,na,regional,indicator,symbol,letters" }, haircut: { name: "Haircut", unified: "1F487", sheet_x: 19, sheet_y: 18, short_names: ["haircut"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F487-1F3FB": { unified: "1F487-1F3FB", image: "1f487-1f3fb.png", sheet_x: 19, sheet_y: 19, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F487-1F3FC": { unified: "1F487-1F3FC", image: "1f487-1f3fc.png", sheet_x: 19, sheet_y: 20, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F487-1F3FD": { unified: "1F487-1F3FD", image: "1f487-1f3fd.png", sheet_x: 19, sheet_y: 21, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F487-1F3FE": { unified: "1F487-1F3FE", image: "1f487-1f3fe.png", sheet_x: 19, sheet_y: 22, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F487-1F3FF": { unified: "1F487-1F3FF", image: "1f487-1f3ff.png", sheet_x: 19, sheet_y: 23, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "haircut,female,girl,woman" }, books: { name: "Books", unified: "1F4DA", sheet_x: 21, sheet_y: 29, short_names: ["books"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "books,literature,library,study" }, black_right_pointing_double_triangle_with_vertical_bar: { name: "Black Right-Pointing Double Triangle with Vertical Bar", unified: "23ED", sheet_x: 0, sheet_y: 22, short_names: ["black_right_pointing_double_triangle_with_vertical_bar"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "black,right,pointing,double,triangle,with,vertical,bar,blue-square,play,pause" }, book: { name: "Open Book", unified: "1F4D6", sheet_x: 21, sheet_y: 25, short_names: ["book", "open_book"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "book,open,open_book,read,library,knowledge,literature,learn,study" }, "flag-nr": { name: "Regional Indicator Symbol Letters NR", unified: "1F1F3-1F1F7", sheet_x: 37, sheet_y: 2, short_names: ["flag-nr"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,nr,regional,indicator,symbol,letters" }, black_left_pointing_double_triangle_with_vertical_bar: { name: "Black Left-Pointing Double Triangle with Vertical Bar", unified: "23EE", sheet_x: 0, sheet_y: 23, short_names: ["black_left_pointing_double_triangle_with_vertical_bar"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "black,left,pointing,double,triangle,with,vertical,bar,backward" }, massage: { name: "Face Massage", unified: "1F486", sheet_x: 19, sheet_y: 12, short_names: ["massage"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, skin_variations: { "1F486-1F3FB": { unified: "1F486-1F3FB", image: "1f486-1f3fb.png", sheet_x: 19, sheet_y: 13, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F486-1F3FC": { unified: "1F486-1F3FC", image: "1f486-1f3fc.png", sheet_x: 19, sheet_y: 14, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F486-1F3FD": { unified: "1F486-1F3FD", image: "1f486-1f3fd.png", sheet_x: 19, sheet_y: 15, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F486-1F3FE": { unified: "1F486-1F3FE", image: "1f486-1f3fe.png", sheet_x: 19, sheet_y: 16, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true }, "1F486-1F3FF": { unified: "1F486-1F3FF", image: "1f486-1f3ff.png", sheet_x: 19, sheet_y: 17, has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true } }, search: "massage,face,female,girl,woman,head" }, couple_with_heart: { name: "Couple with Heart", unified: "1F491", sheet_x: 19, sheet_y: 33, short_names: ["couple_with_heart"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "couple,with,heart,pair,love,like,affection,human,dating,valentines,marriage" }, fast_forward: { name: "Black Right-Pointing Double Triangle", unified: "23E9", sheet_x: 0, sheet_y: 18, short_names: ["fast_forward"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "fast,forward,black,right,pointing,double,triangle,blue-square,play,speed,continue" }, "flag-np": { name: "Regional Indicator Symbol Letters NP", unified: "1F1F3-1F1F5", sheet_x: 37, sheet_y: 1, short_names: ["flag-np"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,np,regional,indicator,symbol,letters" }, link: { name: "Link Symbol", unified: "1F517", sheet_x: 23, sheet_y: 7, short_names: ["link"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "link,symbol,rings,url" }, paperclip: { name: "Paperclip", unified: "1F4CE", sheet_x: 21, sheet_y: 17, short_names: ["paperclip"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "paperclip,documents,stationery" }, rewind: { name: "Black Left-Pointing Double Triangle", unified: "23EA", sheet_x: 0, sheet_y: 19, short_names: ["rewind"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "rewind,black,left,pointing,double,triangle,play,blue-square" }, "woman-heart-woman": { name: "Woman Heart Woman", unified: "1F469-200D-2764-FE0F-200D-1F469", sheet_x: 39, sheet_y: 19, short_names: ["woman-heart-woman"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: false, search: "woman,heart" }, "flag-nl": { name: "Regional Indicator Symbol Letters NL", unified: "1F1F3-1F1F1", sheet_x: 36, sheet_y: 40, short_names: ["flag-nl"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,nl,regional,indicator,symbol,letters" }, linked_paperclips: { name: "Linked Paperclips", unified: "1F587", sheet_x: 25, sheet_y: 8, short_names: ["linked_paperclips"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "linked,paperclips,documents,stationery" }, "man-heart-man": { name: "Man Heart Man", unified: "1F468-200D-2764-FE0F-200D-1F468", sheet_x: 39, sheet_y: 12, short_names: ["man-heart-man"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: false, search: "man,heart" }, "flag-nc": { name: "Regional Indicator Symbol Letters NC", unified: "1F1F3-1F1E8", sheet_x: 36, sheet_y: 35, short_names: ["flag-nc"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,nc,regional,indicator,symbol,letters" }, twisted_rightwards_arrows: { name: "Twisted Rightwards Arrows", unified: "1F500", sheet_x: 22, sheet_y: 25, short_names: ["twisted_rightwards_arrows"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "twisted,rightwards,arrows,blue-square,shuffle,music,random" }, couplekiss: { name: "Kiss", unified: "1F48F", sheet_x: 19, sheet_y: 31, short_names: ["couplekiss"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "couplekiss,kiss,pair,valentines,love,like,dating,marriage" }, "flag-nz": { name: "Regional Indicator Symbol Letters NZ", unified: "1F1F3-1F1FF", sheet_x: 37, sheet_y: 4, short_names: ["flag-nz"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,nz,regional,indicator,symbol,letters" }, scissors: { name: "Black Scissors", unified: "2702", variations: ["2702-FE0F"], sheet_x: 3, sheet_y: 5, short_names: ["scissors"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "scissors,black,stationery,cut" }, repeat: { name: "Clockwise Rightwards and Leftwards Open Circle Arrows", unified: "1F501", sheet_x: 22, sheet_y: 26, short_names: ["repeat"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "repeat,clockwise,rightwards,and,leftwards,open,circle,arrows,loop,record" }, repeat_one: { name: "Clockwise Rightwards and Leftwards Open Circle Arrows with Circled One Overlay", unified: "1F502", sheet_x: 22, sheet_y: 27, short_names: ["repeat_one"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "repeat,one,clockwise,rightwards,and,leftwards,open,circle,arrows,with,circled,overlay,blue-square,loop" }, "flag-ni": { name: "Regional Indicator Symbol Letters NI", unified: "1F1F3-1F1EE", sheet_x: 36, sheet_y: 39, short_names: ["flag-ni"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ni,regional,indicator,symbol,letters" }, "woman-kiss-woman": { name: "Woman Kiss Woman", unified: "1F469-200D-2764-FE0F-200D-1F48B-200D-1F469", sheet_x: 39, sheet_y: 20, short_names: ["woman-kiss-woman"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: false, search: "woman,kiss" }, triangular_ruler: { name: "Triangular Ruler", unified: "1F4D0", sheet_x: 21, sheet_y: 19, short_names: ["triangular_ruler"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "triangular,ruler,stationery,math,architect,sketch" }, straight_ruler: { name: "Straight Ruler", unified: "1F4CF", sheet_x: 21, sheet_y: 18, short_names: ["straight_ruler"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "straight,ruler,stationery,calculate,length,math,school,drawing,architect,sketch" }, "flag-ne": { name: "Regional Indicator Symbol Letters NE", unified: "1F1F3-1F1EA", sheet_x: 36, sheet_y: 36, short_names: ["flag-ne"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ne,regional,indicator,symbol,letters" }, "man-kiss-man": { name: "Man Kiss Man", unified: "1F468-200D-2764-FE0F-200D-1F48B-200D-1F468", sheet_x: 39, sheet_y: 13, short_names: ["man-kiss-man"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: false, search: "man,kiss" }, arrow_backward: { name: "Black Left-Pointing Triangle", unified: "25C0", variations: ["25C0-FE0F"], sheet_x: 0, sheet_y: 36, short_names: ["arrow_backward"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "arrow,backward,black,left,pointing,triangle,blue-square,direction" }, arrow_up_small: { name: "Up-Pointing Small Red Triangle", unified: "1F53C", sheet_x: 24, sheet_y: 3, short_names: ["arrow_up_small"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "arrow,up,small,pointing,red,triangle,blue-square,direction,point,forward,top" }, "flag-ng": { name: "Regional Indicator Symbol Letters NG", unified: "1F1F3-1F1EC", sheet_x: 36, sheet_y: 38, short_names: ["flag-ng"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ng,regional,indicator,symbol,letters" }, family: { name: "Family", unified: "1F46A", variations: ["1F468-200D-1F469-200D-1F466"], sheet_x: 16, sheet_y: 32, short_names: ["family", "man-woman-boy"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "family,man,woman,boy,home,parents,child,mom,dad,father,mother,people,human" }, pushpin: { name: "Pushpin", unified: "1F4CC", sheet_x: 21, sheet_y: 15, short_names: ["pushpin"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "pushpin,stationery,mark,here" }, "man-woman-girl": { name: "Man Woman Girl", unified: "1F468-200D-1F469-200D-1F467", sheet_x: 39, sheet_y: 9, short_names: ["man-woman-girl"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "man,woman,girl" }, round_pushpin: { name: "Round Pushpin", unified: "1F4CD", sheet_x: 21, sheet_y: 16, short_names: ["round_pushpin"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "round,pushpin,stationery,location,map,here" }, arrow_down_small: { name: "Down-Pointing Small Red Triangle", unified: "1F53D", sheet_x: 24, sheet_y: 4, short_names: ["arrow_down_small"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "arrow,down,small,pointing,red,triangle,blue-square,direction,bottom" }, "flag-nu": { name: "Regional Indicator Symbol Letters NU", unified: "1F1F3-1F1FA", sheet_x: 37, sheet_y: 3, short_names: ["flag-nu"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,nu,regional,indicator,symbol,letters" }, "flag-nf": { name: "Regional Indicator Symbol Letters NF", unified: "1F1F3-1F1EB", sheet_x: 36, sheet_y: 37, short_names: ["flag-nf"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,nf,regional,indicator,symbol,letters" }, triangular_flag_on_post: { name: "Triangular Flag on Post", unified: "1F6A9", sheet_x: 30, sheet_y: 17, short_names: ["triangular_flag_on_post"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "triangular,flag,on,post,mark,milestone,place" }, "man-woman-girl-boy": { name: "Man Woman Girl Boy", unified: "1F468-200D-1F469-200D-1F467-200D-1F466", sheet_x: 39, sheet_y: 10, short_names: ["man-woman-girl-boy"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "man,woman,girl,boy" }, arrow_double_up: { name: "Black Up-Pointing Double Triangle", unified: "23EB", sheet_x: 0, sheet_y: 20, short_names: ["arrow_double_up"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "arrow,double,up,black,pointing,triangle,blue-square,direction,top" }, "man-woman-boy-boy": { name: "Man Woman Boy Boy", unified: "1F468-200D-1F469-200D-1F466-200D-1F466", sheet_x: 39, sheet_y: 8, short_names: ["man-woman-boy-boy"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "man,woman,boy" }, "flag-mp": { name: "Regional Indicator Symbol Letters MP", unified: "1F1F2-1F1F5", sheet_x: 36, sheet_y: 23, short_names: ["flag-mp"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,mp,regional,indicator,symbol,letters" }, waving_white_flag: { name: "Waving White Flag", unified: "1F3F3", sheet_x: 11, sheet_y: 34, short_names: ["waving_white_flag"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "waving,white,flag,losing,loser,lost,surrender,give up,fail" }, arrow_double_down: { name: "Black Down-Pointing Double Triangle", unified: "23EC", sheet_x: 0, sheet_y: 21, short_names: ["arrow_double_down"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "arrow,double,down,black,pointing,triangle,blue-square,direction,bottom" }, "man-woman-girl-girl": { name: "Man Woman Girl Girl", unified: "1F468-200D-1F469-200D-1F467-200D-1F467", sheet_x: 39, sheet_y: 11, short_names: ["man-woman-girl-girl"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "man,woman,girl" }, "flag-kp": { name: "Regional Indicator Symbol Letters KP", unified: "1F1F0-1F1F5", sheet_x: 35, sheet_y: 36, short_names: ["flag-kp"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,kp,regional,indicator,symbol,letters" }, waving_black_flag: { name: "Waving Black Flag", unified: "1F3F4", sheet_x: 11, sheet_y: 35, short_names: ["waving_black_flag"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "waving,black,flag,pirate" }, arrow_right: { name: "Black Rightwards Arrow", unified: "27A1", variations: ["27A1-FE0F"], sheet_x: 4, sheet_y: 14, short_names: ["arrow_right"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "arrow,right,black,rightwards,blue-square,next" }, "flag-no": { name: "Regional Indicator Symbol Letters NO", unified: "1F1F3-1F1F4", sheet_x: 37, sheet_y: 0, short_names: ["flag-no"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,no,regional,indicator,symbol,letters" }, "woman-woman-boy": { name: "Woman Woman Boy", unified: "1F469-200D-1F469-200D-1F466", sheet_x: 39, sheet_y: 14, short_names: ["woman-woman-boy"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "woman,boy" }, arrow_left: { name: "Leftwards Black Arrow", unified: "2B05", variations: ["2B05-FE0F"], sheet_x: 4, sheet_y: 19, short_names: ["arrow_left"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "arrow,left,leftwards,black,blue-square,previous,back" }, closed_lock_with_key: { name: "Closed Lock with Key", unified: "1F510", sheet_x: 23, sheet_y: 0, short_names: ["closed_lock_with_key"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "closed,lock,with,key,security,privacy" }, "flag-om": { name: "Regional Indicator Symbol Letters OM", unified: "1F1F4-1F1F2", sheet_x: 37, sheet_y: 5, short_names: ["flag-om"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,om,regional,indicator,symbol,letters" }, lock: { name: "Lock", unified: "1F512", sheet_x: 23, sheet_y: 2, short_names: ["lock"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "lock,security,password,padlock" }, arrow_up: { name: "Upwards Black Arrow", unified: "2B06", variations: ["2B06-FE0F"], sheet_x: 4, sheet_y: 20, short_names: ["arrow_up"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "arrow,up,upwards,black,blue-square,continue,top,direction" }, "woman-woman-girl": { name: "Woman Woman Girl", unified: "1F469-200D-1F469-200D-1F467", sheet_x: 39, sheet_y: 16, short_names: ["woman-woman-girl"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "woman,girl" }, arrow_down: { name: "Downwards Black Arrow", unified: "2B07", variations: ["2B07-FE0F"], sheet_x: 4, sheet_y: 21, short_names: ["arrow_down"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "arrow,down,downwards,black,blue-square,direction,bottom" }, "flag-pk": { name: "Regional Indicator Symbol Letters PK", unified: "1F1F5-1F1F0", sheet_x: 37, sheet_y: 11, short_names: ["flag-pk"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,pk,regional,indicator,symbol,letters" }, "woman-woman-girl-boy": { name: "Woman Woman Girl Boy", unified: "1F469-200D-1F469-200D-1F467-200D-1F466", sheet_x: 39, sheet_y: 17, short_names: ["woman-woman-girl-boy"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "woman,girl,boy" }, unlock: { name: "Open Lock", unified: "1F513", sheet_x: 23, sheet_y: 3, short_names: ["unlock"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "unlock,open,lock,privacy,security" }, "woman-woman-boy-boy": { name: "Woman Woman Boy Boy", unified: "1F469-200D-1F469-200D-1F466-200D-1F466", sheet_x: 39, sheet_y: 15, short_names: ["woman-woman-boy-boy"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "woman,boy" }, lock_with_ink_pen: { name: "Lock with Ink Pen", unified: "1F50F", sheet_x: 22, sheet_y: 40, short_names: ["lock_with_ink_pen"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "lock,with,ink,pen,security,secret" }, "flag-pw": { name: "Regional Indicator Symbol Letters PW", unified: "1F1F5-1F1FC", sheet_x: 37, sheet_y: 18, short_names: ["flag-pw"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,pw,regional,indicator,symbol,letters" }, arrow_upper_right: { name: "North East Arrow", unified: "2197", variations: ["2197-FE0F"], sheet_x: 0, sheet_y: 9, short_names: ["arrow_upper_right"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "arrow,upper,right,north,east,blue-square,point,direction,diagonal,northeast" }, "woman-woman-girl-girl": { name: "Woman Woman Girl Girl", unified: "1F469-200D-1F469-200D-1F467-200D-1F467", sheet_x: 39, sheet_y: 18, short_names: ["woman-woman-girl-girl"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "woman,girl" }, arrow_lower_right: { name: "South East Arrow", unified: "2198", variations: ["2198-FE0F"], sheet_x: 0, sheet_y: 10, short_names: ["arrow_lower_right"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "arrow,lower,right,south,east,blue-square,direction,diagonal,southeast" }, lower_left_ballpoint_pen: { name: "Lower Left Ballpoint Pen", unified: "1F58A", sheet_x: 25, sheet_y: 9, short_names: ["lower_left_ballpoint_pen"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "lower,left,ballpoint,pen,stationery,writing,write" }, "flag-ps": { name: "Regional Indicator Symbol Letters PS", unified: "1F1F5-1F1F8", sheet_x: 37, sheet_y: 16, short_names: ["flag-ps"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ps,regional,indicator,symbol,letters" }, "flag-pa": { name: "Regional Indicator Symbol Letters PA", unified: "1F1F5-1F1E6", sheet_x: 37, sheet_y: 6, short_names: ["flag-pa"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,pa,regional,indicator,symbol,letters" }, lower_left_fountain_pen: { name: "Lower Left Fountain Pen", unified: "1F58B", sheet_x: 25, sheet_y: 10, short_names: ["lower_left_fountain_pen"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "lower,left,fountain,pen,stationery,writing,write" }, arrow_lower_left: { name: "South West Arrow", unified: "2199", variations: ["2199-FE0F"], sheet_x: 0, sheet_y: 11, short_names: ["arrow_lower_left"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "arrow,lower,left,south,west,blue-square,direction,diagonal,southwest" }, "man-man-boy": { name: "Man Man Boy", unified: "1F468-200D-1F468-200D-1F466", sheet_x: 39, sheet_y: 3, short_names: ["man-man-boy"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "man,boy" }, black_nib: { name: "Black Nib", unified: "2712", variations: ["2712-FE0F"], sheet_x: 3, sheet_y: 34, short_names: ["black_nib"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "black,nib,pen,stationery,writing,write" }, "flag-pg": { name: "Regional Indicator Symbol Letters PG", unified: "1F1F5-1F1EC", sheet_x: 37, sheet_y: 9, short_names: ["flag-pg"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,pg,regional,indicator,symbol,letters" }, arrow_upper_left: { name: "North West Arrow", unified: "2196", variations: ["2196-FE0F"], sheet_x: 0, sheet_y: 8, short_names: ["arrow_upper_left"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "arrow,upper,left,north,west,blue-square,point,direction,diagonal,northwest" }, "man-man-girl": { name: "Man Man Girl", unified: "1F468-200D-1F468-200D-1F467", sheet_x: 39, sheet_y: 5, short_names: ["man-man-girl"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "man,girl" }, "man-man-girl-boy": { name: "Man Man Girl Boy", unified: "1F468-200D-1F468-200D-1F467-200D-1F466", sheet_x: 39, sheet_y: 6, short_names: ["man-man-girl-boy"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "man,girl,boy" }, arrow_up_down: { name: "Up Down Arrow", unified: "2195", variations: ["2195-FE0F"], sheet_x: 0, sheet_y: 7, short_names: ["arrow_up_down"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "arrow,up,down,blue-square,direction,way,vertical" }, memo: { name: "Memo", unified: "1F4DD", sheet_x: 21, sheet_y: 32, short_names: ["memo", "pencil"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "memo,pencil,write,documents,stationery,paper,writing,legal,exam,quiz,test,study" }, "flag-py": { name: "Regional Indicator Symbol Letters PY", unified: "1F1F5-1F1FE", sheet_x: 37, sheet_y: 19, short_names: ["flag-py"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,py,regional,indicator,symbol,letters" }, "flag-pe": { name: "Regional Indicator Symbol Letters PE", unified: "1F1F5-1F1EA", sheet_x: 37, sheet_y: 7, short_names: ["flag-pe"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,pe,regional,indicator,symbol,letters" }, "pencil2": { name: "Pencil", unified: "270F", variations: ["270F-FE0F"], sheet_x: 3, sheet_y: 33, short_names: ["pencil2"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "pencil2,pencil,stationery,write,paper,writing,school,study" }, "man-man-boy-boy": { name: "Man Man Boy Boy", unified: "1F468-200D-1F468-200D-1F466-200D-1F466", sheet_x: 39, sheet_y: 4, short_names: ["man-man-boy-boy"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "man,boy" }, left_right_arrow: { name: "Left Right Arrow", unified: "2194", variations: ["2194-FE0F"], sheet_x: 0, sheet_y: 6, short_names: ["left_right_arrow"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "left,right,arrow,shape,direction,horizontal,sideways" }, "man-man-girl-girl": { name: "Man Man Girl Girl", unified: "1F468-200D-1F468-200D-1F467-200D-1F467", sheet_x: 39, sheet_y: 7, short_names: ["man-man-girl-girl"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "man,girl" }, arrows_counterclockwise: { name: "Anticlockwise Downwards and Upwards Open Circle Arrows", unified: "1F504", sheet_x: 22, sheet_y: 29, short_names: ["arrows_counterclockwise"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "arrows,counterclockwise,anticlockwise,downwards,and,upwards,open,circle,blue-square,sync,cycle" }, "flag-ph": { name: "Regional Indicator Symbol Letters PH", unified: "1F1F5-1F1ED", sheet_x: 37, sheet_y: 10, short_names: ["flag-ph"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ph,regional,indicator,symbol,letters" }, lower_left_crayon: { name: "Lower Left Crayon", unified: "1F58D", sheet_x: 25, sheet_y: 12, short_names: ["lower_left_crayon"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "lower,left,crayon,drawing,creativity" }, womans_clothes: { name: "Womans Clothes", unified: "1F45A", sheet_x: 15, sheet_y: 37, short_names: ["womans_clothes"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "womans,clothes,fashion,shopping,female" }, lower_left_paintbrush: { name: "Lower Left Paintbrush", unified: "1F58C", sheet_x: 25, sheet_y: 11, short_names: ["lower_left_paintbrush"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "lower,left,paintbrush,drawing,creativity,art" }, "flag-pn": { name: "Regional Indicator Symbol Letters PN", unified: "1F1F5-1F1F3", sheet_x: 37, sheet_y: 14, short_names: ["flag-pn"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,pn,regional,indicator,symbol,letters" }, arrow_right_hook: { name: "Rightwards Arrow with Hook", unified: "21AA", variations: ["21AA-FE0F"], sheet_x: 0, sheet_y: 13, short_names: ["arrow_right_hook"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "arrow,right,hook,rightwards,with,blue-square,return,rotade,direction" }, leftwards_arrow_with_hook: { name: "Leftwards Arrow with Hook", unified: "21A9", variations: ["21A9-FE0F"], sheet_x: 0, sheet_y: 12, short_names: ["leftwards_arrow_with_hook"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "leftwards,arrow,with,hook,back,return,blue-square,undo,enter" }, mag: { name: "Left-Pointing Magnifying Glass", unified: "1F50D", sheet_x: 22, sheet_y: 38, short_names: ["mag"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "mag,left,pointing,magnifying,glass,search,zoom,find,detective" }, "flag-pl": { name: "Regional Indicator Symbol Letters PL", unified: "1F1F5-1F1F1", sheet_x: 37, sheet_y: 12, short_names: ["flag-pl"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,pl,regional,indicator,symbol,letters" }, shirt: { name: "T-Shirt", unified: "1F455", sheet_x: 15, sheet_y: 32, short_names: ["shirt", "tshirt"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "shirt,tshirt,t,fashion,cloth,casual,tee" }, "flag-pt": { name: "Regional Indicator Symbol Letters PT", unified: "1F1F5-1F1F9", sheet_x: 37, sheet_y: 17, short_names: ["flag-pt"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,pt,regional,indicator,symbol,letters" }, jeans: { name: "Jeans", unified: "1F456", sheet_x: 15, sheet_y: 33, short_names: ["jeans"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "jeans,fashion,shopping" }, mag_right: { name: "Right-Pointing Magnifying Glass", unified: "1F50E", sheet_x: 22, sheet_y: 39, short_names: ["mag_right"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "mag,right,pointing,magnifying,glass,search,zoom,find,detective" }, arrow_heading_up: { name: "Arrow Pointing Rightwards Then Curving Upwards", unified: "2934", variations: ["2934-FE0F"], sheet_x: 4, sheet_y: 17, short_names: ["arrow_heading_up"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "arrow,heading,up,pointing,rightwards,then,curving,upwards,blue-square,direction,top" }, necktie: { name: "Necktie", unified: "1F454", sheet_x: 15, sheet_y: 31, short_names: ["necktie"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "necktie,shirt,suitup,formal,fashion,cloth,business" }, "flag-pr": { name: "Regional Indicator Symbol Letters PR", unified: "1F1F5-1F1F7", sheet_x: 37, sheet_y: 15, short_names: ["flag-pr"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,pr,regional,indicator,symbol,letters" }, arrow_heading_down: { name: "Arrow Pointing Rightwards Then Curving Downwards", unified: "2935", variations: ["2935-FE0F"], sheet_x: 4, sheet_y: 18, short_names: ["arrow_heading_down"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "arrow,heading,down,pointing,rightwards,then,curving,downwards,blue-square,direction,bottom" }, dress: { name: "Dress", unified: "1F457", sheet_x: 15, sheet_y: 34, short_names: ["dress"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "dress,clothes,fashion,shopping" }, "flag-qa": { name: "Regional Indicator Symbol Letters QA", unified: "1F1F6-1F1E6", sheet_x: 37, sheet_y: 20, short_names: ["flag-qa"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,qa,regional,indicator,symbol,letters" }, hash: { name: "Hash Key", unified: "0023-20E3", variations: ["0023-FE0F-20E3"], sheet_x: 32, sheet_y: 21, short_names: ["hash"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "hash,key,symbol,blue-square,twitter" }, "flag-re": { name: "Regional Indicator Symbol Letters RE", unified: "1F1F7-1F1EA", sheet_x: 37, sheet_y: 21, short_names: ["flag-re"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,re,regional,indicator,symbol,letters" }, bikini: { name: "Bikini", unified: "1F459", sheet_x: 15, sheet_y: 36, short_names: ["bikini"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bikini,swimming,female,woman,girl,fashion,beach,summer" }, information_source: { name: "Information Source", unified: "2139", variations: ["2139-FE0F"], sheet_x: 0, sheet_y: 5, short_names: ["information_source"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "information,source,blue-square,alphabet,letter" }, kimono: { name: "Kimono", unified: "1F458", sheet_x: 15, sheet_y: 35, short_names: ["kimono"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "kimono,dress,fashion,women,female,japanese" }, abc: { name: "Input Symbol for Latin Letters", unified: "1F524", sheet_x: 23, sheet_y: 20, short_names: ["abc"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "abc,input,symbol,for,latin,letters,blue-square,alphabet" }, "flag-ro": { name: "Regional Indicator Symbol Letters RO", unified: "1F1F7-1F1F4", sheet_x: 37, sheet_y: 22, short_names: ["flag-ro"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ro,regional,indicator,symbol,letters" }, lipstick: { name: "Lipstick", unified: "1F484", sheet_x: 19, sheet_y: 5, short_names: ["lipstick"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "lipstick,female,girl,fashion,woman" }, "flag-ru": { name: "Regional Indicator Symbol Letters RU", unified: "1F1F7-1F1FA", sheet_x: 37, sheet_y: 24, short_names: ["flag-ru", "ru"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ru,regional,indicator,symbol,letters" }, abcd: { name: "Input Symbol for Latin Small Letters", unified: "1F521", sheet_x: 23, sheet_y: 17, short_names: ["abcd"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "abcd,input,symbol,for,latin,small,letters,blue-square,alphabet" }, kiss: { name: "Kiss Mark", unified: "1F48B", sheet_x: 19, sheet_y: 27, short_names: ["kiss"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, emoticons: [":*", ":-*"], search: "kiss,mark,face,lips,love,like,affection,valentines,:*,:-*" }, capital_abcd: { name: "Input Symbol for Latin Capital Letters", unified: "1F520", sheet_x: 23, sheet_y: 16, short_names: ["capital_abcd"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "capital,abcd,input,symbol,for,latin,letters,alphabet,words,blue-square" }, "flag-rw": { name: "Regional Indicator Symbol Letters RW", unified: "1F1F7-1F1FC", sheet_x: 37, sheet_y: 25, short_names: ["flag-rw"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,rw,regional,indicator,symbol,letters" }, footprints: { name: "Footprints", unified: "1F463", sheet_x: 16, sheet_y: 5, short_names: ["footprints"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "footprints,feet,tracking,walking,beach" }, "flag-bl": { name: "Regional Indicator Symbol Letters BL", unified: "1F1E7-1F1F1", sheet_x: 33, sheet_y: 18, short_names: ["flag-bl"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,bl,regional,indicator,symbol,letters" }, symbols: { name: "Input Symbol for Symbols", unified: "1F523", sheet_x: 23, sheet_y: 19, short_names: ["symbols"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "symbols,input,symbol,for,blue-square,music,note,ampersand,percent,glyphs,characters" }, high_heel: { name: "High-Heeled Shoe", unified: "1F460", sheet_x: 16, sheet_y: 2, short_names: ["high_heel"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "high,heel,heeled,shoe,fashion,shoes,female,pumps,stiletto" }, musical_note: { name: "Musical Note", unified: "1F3B5", sheet_x: 9, sheet_y: 36, short_names: ["musical_note"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "musical,note,score,tone,sound" }, "flag-sh": { name: "Regional Indicator Symbol Letters SH", unified: "1F1F8-1F1ED", sheet_x: 37, sheet_y: 32, short_names: ["flag-sh"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,sh,regional,indicator,symbol,letters" }, "flag-kn": { name: "Regional Indicator Symbol Letters KN", unified: "1F1F0-1F1F3", sheet_x: 35, sheet_y: 35, short_names: ["flag-kn"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,kn,regional,indicator,symbol,letters" }, notes: { name: "Multiple Musical Notes", unified: "1F3B6", sheet_x: 9, sheet_y: 37, short_names: ["notes"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "notes,multiple,musical,music,score" }, sandal: { name: "Womans Sandal", unified: "1F461", sheet_x: 16, sheet_y: 3, short_names: ["sandal"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sandal,womans,shoes,fashion,flip flops" }, boot: { name: "Womans Boots", unified: "1F462", sheet_x: 16, sheet_y: 4, short_names: ["boot"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "boot,womans,boots,shoes,fashion" }, wavy_dash: { name: "Wavy Dash", unified: "3030", variations: ["3030-FE0F"], sheet_x: 4, sheet_y: 26, short_names: ["wavy_dash"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "wavy,dash,draw,line,moustache,mustache,squiggle,scribble" }, "flag-lc": { name: "Regional Indicator Symbol Letters LC", unified: "1F1F1-1F1E8", sheet_x: 36, sheet_y: 2, short_names: ["flag-lc"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,lc,regional,indicator,symbol,letters" }, "flag-pm": { name: "Regional Indicator Symbol Letters PM", unified: "1F1F5-1F1F2", sheet_x: 37, sheet_y: 13, short_names: ["flag-pm"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,pm,regional,indicator,symbol,letters" }, mans_shoe: { name: "Mans Shoe", unified: "1F45E", sheet_x: 16, sheet_y: 0, short_names: ["mans_shoe", "shoe"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "mans,shoe,fashion,male" }, curly_loop: { name: "Curly Loop", unified: "27B0", sheet_x: 4, sheet_y: 15, short_names: ["curly_loop"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "curly,loop,scribble,draw,shape,squiggle" }, "flag-vc": { name: "Regional Indicator Symbol Letters VC", unified: "1F1FB-1F1E8", sheet_x: 38, sheet_y: 30, short_names: ["flag-vc"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,vc,regional,indicator,symbol,letters" }, heavy_check_mark: { name: "Heavy Check Mark", unified: "2714", variations: ["2714-FE0F"], sheet_x: 3, sheet_y: 35, short_names: ["heavy_check_mark"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "heavy,check,mark,ok,nike,answer,yes,tick" }, athletic_shoe: { name: "Athletic Shoe", unified: "1F45F", sheet_x: 16, sheet_y: 1, short_names: ["athletic_shoe"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "athletic,shoe,shoes,sports,sneakers" }, womans_hat: { name: "Womans Hat", unified: "1F452", sheet_x: 15, sheet_y: 29, short_names: ["womans_hat"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "womans,hat,fashion,accessories,female,lady,spring" }, "flag-ws": { name: "Regional Indicator Symbol Letters WS", unified: "1F1FC-1F1F8", sheet_x: 38, sheet_y: 37, short_names: ["flag-ws"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ws,regional,indicator,symbol,letters" }, arrows_clockwise: { name: "Clockwise Downwards and Upwards Open Circle Arrows", unified: "1F503", sheet_x: 22, sheet_y: 28, short_names: ["arrows_clockwise"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "arrows,clockwise,downwards,and,upwards,open,circle,sync,cycle,round,repeat" }, heavy_plus_sign: { name: "Heavy Plus Sign", unified: "2795", sheet_x: 4, sheet_y: 11, short_names: ["heavy_plus_sign"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "heavy,plus,sign,math,calculation,addition,more,increase" }, tophat: { name: "Top Hat", unified: "1F3A9", sheet_x: 9, sheet_y: 24, short_names: ["tophat"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "tophat,top,hat,magic,gentleman,classy,circus" }, "flag-sm": { name: "Regional Indicator Symbol Letters SM", unified: "1F1F8-1F1F2", sheet_x: 37, sheet_y: 37, short_names: ["flag-sm"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,sm,regional,indicator,symbol,letters" }, helmet_with_white_cross: { name: "Helmet with White Cross", unified: "26D1", sheet_x: 2, sheet_y: 25, short_names: ["helmet_with_white_cross"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "helmet,with,white,cross" }, heavy_minus_sign: { name: "Heavy Minus Sign", unified: "2796", sheet_x: 4, sheet_y: 12, short_names: ["heavy_minus_sign"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "heavy,minus,sign,math,calculation,subtract,less" }, "flag-st": { name: "Regional Indicator Symbol Letters ST", unified: "1F1F8-1F1F9", sheet_x: 38, sheet_y: 1, short_names: ["flag-st"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,st,regional,indicator,symbol,letters" }, "flag-sa": { name: "Regional Indicator Symbol Letters SA", unified: "1F1F8-1F1E6", sheet_x: 37, sheet_y: 26, short_names: ["flag-sa"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,sa,regional,indicator,symbol,letters" }, heavy_division_sign: { name: "Heavy Division Sign", unified: "2797", sheet_x: 4, sheet_y: 13, short_names: ["heavy_division_sign"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "heavy,division,sign,divide,math,calculation" }, mortar_board: { name: "Graduation Cap", unified: "1F393", sheet_x: 9, sheet_y: 7, short_names: ["mortar_board"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "mortar,board,graduation,cap,school,college,degree,university,hat,legal,learn,education" }, "flag-sn": { name: "Regional Indicator Symbol Letters SN", unified: "1F1F8-1F1F3", sheet_x: 37, sheet_y: 38, short_names: ["flag-sn"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,sn,regional,indicator,symbol,letters" }, heavy_multiplication_x: { name: "Heavy Multiplication X", unified: "2716", variations: ["2716-FE0F"], sheet_x: 3, sheet_y: 36, short_names: ["heavy_multiplication_x"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "heavy,multiplication,x,math,calculation" }, crown: { name: "Crown", unified: "1F451", sheet_x: 15, sheet_y: 28, short_names: ["crown"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "crown,king,kod,leader,royalty,lord" }, school_satchel: { name: "School Satchel", unified: "1F392", sheet_x: 9, sheet_y: 6, short_names: ["school_satchel"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "school,satchel,student,education,bag" }, "flag-rs": { name: "Regional Indicator Symbol Letters RS", unified: "1F1F7-1F1F8", sheet_x: 37, sheet_y: 23, short_names: ["flag-rs"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,rs,regional,indicator,symbol,letters" }, heavy_dollar_sign: { name: "Heavy Dollar Sign", unified: "1F4B2", sheet_x: 20, sheet_y: 30, short_names: ["heavy_dollar_sign"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "heavy,dollar,sign,money,sales,payment,currency,buck" }, "flag-sc": { name: "Regional Indicator Symbol Letters SC", unified: "1F1F8-1F1E8", sheet_x: 37, sheet_y: 28, short_names: ["flag-sc"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,sc,regional,indicator,symbol,letters" }, currency_exchange: { name: "Currency Exchange", unified: "1F4B1", sheet_x: 20, sheet_y: 29, short_names: ["currency_exchange"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "currency,exchange,money,sales,dollar,travel" }, pouch: { name: "Pouch", unified: "1F45D", sheet_x: 15, sheet_y: 40, short_names: ["pouch"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "pouch,bag,accessories,shopping" }, purse: { name: "Purse", unified: "1F45B", sheet_x: 15, sheet_y: 38, short_names: ["purse"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "purse,fashion,accessories,money,sales,shopping" }, "flag-sl": { name: "Regional Indicator Symbol Letters SL", unified: "1F1F8-1F1F1", sheet_x: 37, sheet_y: 36, short_names: ["flag-sl"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,sl,regional,indicator,symbol,letters" }, copyright: { name: "Copyright Sign", unified: "00A9", variations: ["00A9-FE0F"], sheet_x: 0, sheet_y: 0, short_names: ["copyright"], has_img_apple: true, has_img_google: true, has_img_twitter: false, has_img_emojione: true, search: "copyright,sign,ip,license,circle,law,legal" }, handbag: { name: "Handbag", unified: "1F45C", sheet_x: 15, sheet_y: 39, short_names: ["handbag"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "handbag,fashion,accessory,accessories,shopping" }, "flag-sg": { name: "Regional Indicator Symbol Letters SG", unified: "1F1F8-1F1EC", sheet_x: 37, sheet_y: 31, short_names: ["flag-sg"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,sg,regional,indicator,symbol,letters" }, registered: { name: "Registered Sign", unified: "00AE", variations: ["00AE-FE0F"], sheet_x: 0, sheet_y: 1, short_names: ["registered"], has_img_apple: true, has_img_google: true, has_img_twitter: false, has_img_emojione: true, search: "registered,sign,alphabet,circle" }, briefcase: { name: "Briefcase", unified: "1F4BC", sheet_x: 20, sheet_y: 40, short_names: ["briefcase"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "briefcase,business,documents,work,law,legal" }, "flag-sx": { name: "Regional Indicator Symbol Letters SX", unified: "1F1F8-1F1FD", sheet_x: 38, sheet_y: 3, short_names: ["flag-sx"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,sx,regional,indicator,symbol,letters" }, tm: { name: "Trade Mark Sign", unified: "2122", variations: ["2122-FE0F"], sheet_x: 0, sheet_y: 4, short_names: ["tm"], has_img_apple: true, has_img_google: true, has_img_twitter: false, has_img_emojione: true, search: "tm,trade,mark,sign,trademark,brand,law,legal" }, "flag-sk": { name: "Regional Indicator Symbol Letters SK", unified: "1F1F8-1F1F0", sheet_x: 37, sheet_y: 35, short_names: ["flag-sk"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,sk,regional,indicator,symbol,letters" }, eyeglasses: { name: "Eyeglasses", unified: "1F453", sheet_x: 15, sheet_y: 30, short_names: ["eyeglasses"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "eyeglasses,fashion,accessories,eyesight,nerdy,dork,geek" }, end: { name: "End with Leftwards Arrow Above", unified: "1F51A", sheet_x: 23, sheet_y: 10, short_names: ["end"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "end,with,leftwards,arrow,above,words" }, dark_sunglasses: { name: "Dark Sunglasses", unified: "1F576", sheet_x: 25, sheet_y: 4, short_names: ["dark_sunglasses"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "dark,sunglasses,face,cool,accessories" }, "flag-si": { name: "Regional Indicator Symbol Letters SI", unified: "1F1F8-1F1EE", sheet_x: 37, sheet_y: 33, short_names: ["flag-si"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,si,regional,indicator,symbol,letters" }, back: { name: "Back with Leftwards Arrow Above", unified: "1F519", sheet_x: 23, sheet_y: 9, short_names: ["back"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "back,with,leftwards,arrow,above,words,return" }, ring: { name: "Ring", unified: "1F48D", sheet_x: 19, sheet_y: 29, short_names: ["ring"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ring,wedding,propose,marriage,valentines,diamond,fashion,jewelry,gem" }, "flag-sb": { name: "Regional Indicator Symbol Letters SB", unified: "1F1F8-1F1E7", sheet_x: 37, sheet_y: 27, short_names: ["flag-sb"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,sb,regional,indicator,symbol,letters" }, on: { name: "On with Exclamation Mark with Left Right Arrow Above", unified: "1F51B", sheet_x: 23, sheet_y: 11, short_names: ["on"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "on,with,exclamation,mark,left,right,arrow,above,words" }, top: { name: "Top with Upwards Arrow Above", unified: "1F51D", sheet_x: 23, sheet_y: 13, short_names: ["top"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "top,with,upwards,arrow,above,words,blue-square" }, "flag-so": { name: "Regional Indicator Symbol Letters SO", unified: "1F1F8-1F1F4", sheet_x: 37, sheet_y: 39, short_names: ["flag-so"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,so,regional,indicator,symbol,letters" }, closed_umbrella: { name: "Closed Umbrella", unified: "1F302", sheet_x: 5, sheet_y: 23, short_names: ["closed_umbrella"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "closed,umbrella,weather,rain,drizzle" }, "flag-za": { name: "Regional Indicator Symbol Letters ZA", unified: "1F1FF-1F1E6", sheet_x: 39, sheet_y: 0, short_names: ["flag-za"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,za,regional,indicator,symbol,letters" }, soon: { name: "Soon with Rightwards Arrow Above", unified: "1F51C", sheet_x: 23, sheet_y: 12, short_names: ["soon"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "soon,with,rightwards,arrow,above,words" }, "flag-gs": { name: "Regional Indicator Symbol Letters GS", unified: "1F1EC-1F1F8", sheet_x: 35, sheet_y: 4, short_names: ["flag-gs"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,gs,regional,indicator,symbol,letters" }, ballot_box_with_check: { name: "Ballot Box with Check", unified: "2611", variations: ["2611-FE0F"], sheet_x: 1, sheet_y: 6, short_names: ["ballot_box_with_check"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "ballot,box,with,check,ok,agree,confirm,black-square,vote,election,yes" }, radio_button: { name: "Radio Button", unified: "1F518", sheet_x: 23, sheet_y: 8, short_names: ["radio_button"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "radio,button,input,old,music,circle" }, "flag-kr": { name: "Regional Indicator Symbol Letters KR", unified: "1F1F0-1F1F7", sheet_x: 35, sheet_y: 37, short_names: ["flag-kr", "kr"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,kr,regional,indicator,symbol,letters" }, "flag-ss": { name: "Regional Indicator Symbol Letters SS", unified: "1F1F8-1F1F8", sheet_x: 38, sheet_y: 0, short_names: ["flag-ss"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ss,regional,indicator,symbol,letters" }, white_circle: { name: "Medium White Circle", unified: "26AA", variations: ["26AA-FE0F"], sheet_x: 2, sheet_y: 14, short_names: ["white_circle"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "white,circle,medium,shape,round" }, "flag-es": { name: "Regional Indicator Symbol Letters ES", unified: "1F1EA-1F1F8", sheet_x: 34, sheet_y: 22, short_names: ["flag-es", "es"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,es,regional,indicator,symbol,letters" }, black_circle: { name: "Medium Black Circle", unified: "26AB", variations: ["26AB-FE0F"], sheet_x: 2, sheet_y: 15, short_names: ["black_circle"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "black,circle,medium,shape,button,round" }, "flag-lk": { name: "Regional Indicator Symbol Letters LK", unified: "1F1F1-1F1F0", sheet_x: 36, sheet_y: 4, short_names: ["flag-lk"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,lk,regional,indicator,symbol,letters" }, red_circle: { name: "Large Red Circle", unified: "1F534", sheet_x: 23, sheet_y: 36, short_names: ["red_circle"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "red,circle,large,shape,error,danger" }, "flag-sd": { name: "Regional Indicator Symbol Letters SD", unified: "1F1F8-1F1E9", sheet_x: 37, sheet_y: 29, short_names: ["flag-sd"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,sd,regional,indicator,symbol,letters" }, large_blue_circle: { name: "Large Blue Circle", unified: "1F535", sheet_x: 23, sheet_y: 37, short_names: ["large_blue_circle"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "large,blue,circle,shape,icon,button" }, small_orange_diamond: { name: "Small Orange Diamond", unified: "1F538", sheet_x: 23, sheet_y: 40, short_names: ["small_orange_diamond"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "small,orange,diamond,shape,jewel,gem" }, "flag-sr": { name: "Regional Indicator Symbol Letters SR", unified: "1F1F8-1F1F7", sheet_x: 37, sheet_y: 40, short_names: ["flag-sr"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,sr,regional,indicator,symbol,letters" }, small_blue_diamond: { name: "Small Blue Diamond", unified: "1F539", sheet_x: 24, sheet_y: 0, short_names: ["small_blue_diamond"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "small,blue,diamond,shape,jewel,gem" }, "flag-sz": { name: "Regional Indicator Symbol Letters SZ", unified: "1F1F8-1F1FF", sheet_x: 38, sheet_y: 5, short_names: ["flag-sz"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,sz,regional,indicator,symbol,letters" }, large_orange_diamond: { name: "Large Orange Diamond", unified: "1F536", sheet_x: 23, sheet_y: 38, short_names: ["large_orange_diamond"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "large,orange,diamond,shape,jewel,gem" }, "flag-se": { name: "Regional Indicator Symbol Letters SE", unified: "1F1F8-1F1EA", sheet_x: 37, sheet_y: 30, short_names: ["flag-se"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,se,regional,indicator,symbol,letters" }, "flag-ch": { name: "Regional Indicator Symbol Letters CH", unified: "1F1E8-1F1ED", sheet_x: 33, sheet_y: 35, short_names: ["flag-ch"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ch,regional,indicator,symbol,letters" }, large_blue_diamond: { name: "Large Blue Diamond", unified: "1F537", sheet_x: 23, sheet_y: 39, short_names: ["large_blue_diamond"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "large,blue,diamond,shape,jewel,gem" }, "flag-sy": { name: "Regional Indicator Symbol Letters SY", unified: "1F1F8-1F1FE", sheet_x: 38, sheet_y: 4, short_names: ["flag-sy"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,sy,regional,indicator,symbol,letters" }, small_red_triangle: { name: "Up-Pointing Red Triangle", unified: "1F53A", sheet_x: 24, sheet_y: 1, short_names: ["small_red_triangle"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "small,red,triangle,up,pointing,shape,direction,top" }, "flag-tw": { name: "Regional Indicator Symbol Letters TW", unified: "1F1F9-1F1FC", sheet_x: 38, sheet_y: 21, short_names: ["flag-tw"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,tw,regional,indicator,symbol,letters" }, black_small_square: { name: "Black Small Square", unified: "25AA", variations: ["25AA-FE0F"], sheet_x: 0, sheet_y: 33, short_names: ["black_small_square"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "black,small,square,shape,icon" }, white_small_square: { name: "White Small Square", unified: "25AB", variations: ["25AB-FE0F"], sheet_x: 0, sheet_y: 34, short_names: ["white_small_square"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "white,small,square,shape,icon" }, "flag-tj": { name: "Regional Indicator Symbol Letters TJ", unified: "1F1F9-1F1EF", sheet_x: 38, sheet_y: 12, short_names: ["flag-tj"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,tj,regional,indicator,symbol,letters" }, black_large_square: { name: "Black Large Square", unified: "2B1B", variations: ["2B1B-FE0F"], sheet_x: 4, sheet_y: 22, short_names: ["black_large_square"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "black,large,square,shape,icon,button" }, "flag-tz": { name: "Regional Indicator Symbol Letters TZ", unified: "1F1F9-1F1FF", sheet_x: 38, sheet_y: 22, short_names: ["flag-tz"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,tz,regional,indicator,symbol,letters" }, white_large_square: { name: "White Large Square", unified: "2B1C", variations: ["2B1C-FE0F"], sheet_x: 4, sheet_y: 23, short_names: ["white_large_square"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "white,large,square,shape,icon,stone,button" }, "flag-th": { name: "Regional Indicator Symbol Letters TH", unified: "1F1F9-1F1ED", sheet_x: 38, sheet_y: 11, short_names: ["flag-th"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,th,regional,indicator,symbol,letters" }, "flag-tl": { name: "Regional Indicator Symbol Letters TL", unified: "1F1F9-1F1F1", sheet_x: 38, sheet_y: 14, short_names: ["flag-tl"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,tl,regional,indicator,symbol,letters" }, small_red_triangle_down: { name: "Down-Pointing Red Triangle", unified: "1F53B", sheet_x: 24, sheet_y: 2, short_names: ["small_red_triangle_down"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "small,red,triangle,down,pointing,shape,direction,bottom" }, "flag-tg": { name: "Regional Indicator Symbol Letters TG", unified: "1F1F9-1F1EC", sheet_x: 38, sheet_y: 10, short_names: ["flag-tg"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,tg,regional,indicator,symbol,letters" }, black_medium_square: { name: "Black Medium Square", unified: "25FC", variations: ["25FC-FE0F"], sheet_x: 0, sheet_y: 38, short_names: ["black_medium_square"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "black,medium,square,shape,button,icon" }, "flag-tk": { name: "Regional Indicator Symbol Letters TK", unified: "1F1F9-1F1F0", sheet_x: 38, sheet_y: 13, short_names: ["flag-tk"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,tk,regional,indicator,symbol,letters" }, white_medium_square: { name: "White Medium Square", unified: "25FB", variations: ["25FB-FE0F"], sheet_x: 0, sheet_y: 37, short_names: ["white_medium_square"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "white,medium,square,shape,stone,icon" }, "flag-to": { name: "Regional Indicator Symbol Letters TO", unified: "1F1F9-1F1F4", sheet_x: 38, sheet_y: 17, short_names: ["flag-to"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,to,regional,indicator,symbol,letters" }, black_medium_small_square: { name: "Black Medium Small Square", unified: "25FE", variations: ["25FE-FE0F"], sheet_x: 0, sheet_y: 40, short_names: ["black_medium_small_square"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "black,medium,small,square,icon,shape,button" }, white_medium_small_square: { name: "White Medium Small Square", unified: "25FD", variations: ["25FD-FE0F"], sheet_x: 0, sheet_y: 39, short_names: ["white_medium_small_square"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "white,medium,small,square,shape,stone,icon,button" }, "flag-tt": { name: "Regional Indicator Symbol Letters TT", unified: "1F1F9-1F1F9", sheet_x: 38, sheet_y: 19, short_names: ["flag-tt"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,tt,regional,indicator,symbol,letters" }, black_square_button: { name: "Black Square Button", unified: "1F532", sheet_x: 23, sheet_y: 34, short_names: ["black_square_button"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "black,square,button,shape,input,frame" }, "flag-tn": { name: "Regional Indicator Symbol Letters TN", unified: "1F1F9-1F1F3", sheet_x: 38, sheet_y: 16, short_names: ["flag-tn"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,tn,regional,indicator,symbol,letters" }, "flag-tr": { name: "Regional Indicator Symbol Letters TR", unified: "1F1F9-1F1F7", sheet_x: 38, sheet_y: 18, short_names: ["flag-tr"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,tr,regional,indicator,symbol,letters" }, white_square_button: { name: "White Square Button", unified: "1F533", sheet_x: 23, sheet_y: 35, short_names: ["white_square_button"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "white,square,button,shape,input" }, "flag-tm": { name: "Regional Indicator Symbol Letters TM", unified: "1F1F9-1F1F2", sheet_x: 38, sheet_y: 15, short_names: ["flag-tm"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,tm,regional,indicator,symbol,letters" }, speaker: { name: "Speaker", unified: "1F508", sheet_x: 22, sheet_y: 33, short_names: ["speaker"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "speaker,sound,volume,silence,broadcast" }, "flag-tc": { name: "Regional Indicator Symbol Letters TC", unified: "1F1F9-1F1E8", sheet_x: 38, sheet_y: 7, short_names: ["flag-tc"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,tc,regional,indicator,symbol,letters" }, sound: { name: "Speaker with One Sound Wave", unified: "1F509", sheet_x: 22, sheet_y: 34, short_names: ["sound"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "sound,speaker,with,one,wave,volume,broadcast" }, "flag-tv": { name: "Regional Indicator Symbol Letters TV", unified: "1F1F9-1F1FB", sheet_x: 38, sheet_y: 20, short_names: ["flag-tv"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,tv,regional,indicator,symbol,letters" }, loud_sound: { name: "Speaker with Three Sound Waves", unified: "1F50A", sheet_x: 22, sheet_y: 35, short_names: ["loud_sound"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "loud,sound,speaker,with,three,waves,volume,noise,noisy,broadcast" }, mute: { name: "Speaker with Cancellation Stroke", unified: "1F507", sheet_x: 22, sheet_y: 32, short_names: ["mute"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "mute,speaker,with,cancellation,stroke,sound,volume,silence,quiet" }, "flag-ug": { name: "Regional Indicator Symbol Letters UG", unified: "1F1FA-1F1EC", sheet_x: 38, sheet_y: 24, short_names: ["flag-ug"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ug,regional,indicator,symbol,letters" }, "flag-ua": { name: "Regional Indicator Symbol Letters UA", unified: "1F1FA-1F1E6", sheet_x: 38, sheet_y: 23, short_names: ["flag-ua"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ua,regional,indicator,symbol,letters" }, mega: { name: "Cheering Megaphone", unified: "1F4E3", sheet_x: 21, sheet_y: 38, short_names: ["mega"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "mega,cheering,megaphone,sound,speaker,volume" }, "flag-ae": { name: "Regional Indicator Symbol Letters AE", unified: "1F1E6-1F1EA", sheet_x: 32, sheet_y: 35, short_names: ["flag-ae"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ae,regional,indicator,symbol,letters" }, loudspeaker: { name: "Public Address Loudspeaker", unified: "1F4E2", sheet_x: 21, sheet_y: 37, short_names: ["loudspeaker"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "loudspeaker,public,address,volume,sound" }, bell: { name: "Bell", unified: "1F514", sheet_x: 23, sheet_y: 4, short_names: ["bell"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "bell,sound,notification,christmas,xmas,chime" }, "flag-gb": { name: "Regional Indicator Symbol Letters GB", unified: "1F1EC-1F1E7", sheet_x: 34, sheet_y: 32, short_names: ["flag-gb", "gb", "uk"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,gb,uk,regional,indicator,symbol,letters" }, "flag-us": { name: "Regional Indicator Symbol Letters US", unified: "1F1FA-1F1F8", sheet_x: 38, sheet_y: 26, short_names: ["flag-us", "us"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,us,regional,indicator,symbol,letters" }, no_bell: { name: "Bell with Cancellation Stroke", unified: "1F515", sheet_x: 23, sheet_y: 5, short_names: ["no_bell"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "no,bell,with,cancellation,stroke,sound,volume,mute,quiet,silent" }, "flag-vi": { name: "Regional Indicator Symbol Letters VI", unified: "1F1FB-1F1EE", sheet_x: 38, sheet_y: 33, short_names: ["flag-vi"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,vi,regional,indicator,symbol,letters" }, black_joker: { name: "Playing Card Black Joker", unified: "1F0CF", sheet_x: 4, sheet_y: 31, short_names: ["black_joker"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "black,joker,playing,card,poker,cards,game,play,magic" }, mahjong: { name: "Mahjong Tile Red Dragon", unified: "1F004", variations: ["1F004-FE0F"], sheet_x: 4, sheet_y: 30, short_names: ["mahjong"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "mahjong,tile,red,dragon,game,play,chinese,kanji" }, "flag-uy": { name: "Regional Indicator Symbol Letters UY", unified: "1F1FA-1F1FE", sheet_x: 38, sheet_y: 27, short_names: ["flag-uy"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,uy,regional,indicator,symbol,letters" }, spades: { name: "Black Spade Suit", unified: "2660", variations: ["2660-FE0F"], sheet_x: 1, sheet_y: 38, short_names: ["spades"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "spades,black,spade,suit,poker,cards,suits,magic" }, "flag-uz": { name: "Regional Indicator Symbol Letters UZ", unified: "1F1FA-1F1FF", sheet_x: 38, sheet_y: 28, short_names: ["flag-uz"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,uz,regional,indicator,symbol,letters" }, clubs: { name: "Black Club Suit", unified: "2663", variations: ["2663-FE0F"], sheet_x: 1, sheet_y: 39, short_names: ["clubs"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clubs,black,club,suit,poker,cards,magic,suits" }, "flag-vu": { name: "Regional Indicator Symbol Letters VU", unified: "1F1FB-1F1FA", sheet_x: 38, sheet_y: 35, short_names: ["flag-vu"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,vu,regional,indicator,symbol,letters" }, hearts: { name: "Black Heart Suit", unified: "2665", variations: ["2665-FE0F"], sheet_x: 1, sheet_y: 40, short_names: ["hearts"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "hearts,black,heart,suit,poker,cards,magic,suits" }, "flag-va": { name: "Regional Indicator Symbol Letters VA", unified: "1F1FB-1F1E6", sheet_x: 38, sheet_y: 29, short_names: ["flag-va"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,va,regional,indicator,symbol,letters" }, diamonds: { name: "Black Diamond Suit", unified: "2666", variations: ["2666-FE0F"], sheet_x: 2, sheet_y: 0, short_names: ["diamonds"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "diamonds,black,diamond,suit,poker,cards,magic,suits" }, "flag-ve": { name: "Regional Indicator Symbol Letters VE", unified: "1F1FB-1F1EA", sheet_x: 38, sheet_y: 31, short_names: ["flag-ve"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ve,regional,indicator,symbol,letters" }, "flag-vn": { name: "Regional Indicator Symbol Letters VN", unified: "1F1FB-1F1F3", sheet_x: 38, sheet_y: 34, short_names: ["flag-vn"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,vn,regional,indicator,symbol,letters" }, flower_playing_cards: { name: "Flower Playing Cards", unified: "1F3B4", sheet_x: 9, sheet_y: 35, short_names: ["flower_playing_cards"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flower,playing,cards,game,sunset,red" }, thought_balloon: { name: "Thought Balloon", unified: "1F4AD", sheet_x: 20, sheet_y: 25, short_names: ["thought_balloon"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "thought,balloon,bubble,cloud,speech,thinking" }, "flag-wf": { name: "Regional Indicator Symbol Letters WF", unified: "1F1FC-1F1EB", sheet_x: 38, sheet_y: 36, short_names: ["flag-wf"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,wf,regional,indicator,symbol,letters" }, "flag-eh": { name: "Regional Indicator Symbol Letters EH", unified: "1F1EA-1F1ED", sheet_x: 34, sheet_y: 20, short_names: ["flag-eh"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,eh,regional,indicator,symbol,letters" }, right_anger_bubble: { name: "Right Anger Bubble", unified: "1F5EF", sheet_x: 26, sheet_y: 7, short_names: ["right_anger_bubble"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "right,anger,bubble,caption,speech,thinking,mad" }, speech_balloon: { name: "Speech Balloon", unified: "1F4AC", sheet_x: 20, sheet_y: 24, short_names: ["speech_balloon"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "speech,balloon,bubble,words,message,talk,chatting" }, "flag-ye": { name: "Regional Indicator Symbol Letters YE", unified: "1F1FE-1F1EA", sheet_x: 38, sheet_y: 39, short_names: ["flag-ye"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,ye,regional,indicator,symbol,letters" }, left_speech_bubble: { name: "Left Speech Bubble", unified: "1F5E8", sheet_x: 26, sheet_y: 6, short_names: ["left_speech_bubble"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: false, search: "left,speech,bubble,words,message,talk,chatting" }, "flag-zm": { name: "Regional Indicator Symbol Letters ZM", unified: "1F1FF-1F1F2", sheet_x: 39, sheet_y: 1, short_names: ["flag-zm"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,zm,regional,indicator,symbol,letters" }, "clock1": { name: "Clock Face One Oclock", unified: "1F550", sheet_x: 24, sheet_y: 11, short_names: ["clock1"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clock1,clock,face,one,oclock,time,late,early,schedule" }, "flag-zw": { name: "Regional Indicator Symbol Letters ZW", unified: "1F1FF-1F1FC", sheet_x: 39, sheet_y: 2, short_names: ["flag-zw"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "flag,zw,regional,indicator,symbol,letters" }, "flag-ac": { name: "Regional Indicator Symbol Letters AC", unified: "1F1E6-1F1E8", sheet_x: 32, sheet_y: 33, short_names: ["flag-ac"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,ac,regional,indicator,symbol,letters" }, "clock2": { name: "Clock Face Two Oclock", unified: "1F551", sheet_x: 24, sheet_y: 12, short_names: ["clock2"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clock2,clock,face,two,oclock,time,late,early,schedule" }, "flag-bv": { name: "Regional Indicator Symbol Letters BV", unified: "1F1E7-1F1FB", sheet_x: 33, sheet_y: 26, short_names: ["flag-bv"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,bv,regional,indicator,symbol,letters" }, "clock3": { name: "Clock Face Three Oclock", unified: "1F552", sheet_x: 24, sheet_y: 13, short_names: ["clock3"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clock3,clock,face,three,oclock,time,late,early,schedule" }, "flag-cp": { name: "Regional Indicator Symbol Letters CP", unified: "1F1E8-1F1F5", sheet_x: 34, sheet_y: 1, short_names: ["flag-cp"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,cp,regional,indicator,symbol,letters" }, "clock4": { name: "Clock Face Four Oclock", unified: "1F553", sheet_x: 24, sheet_y: 14, short_names: ["clock4"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clock4,clock,face,four,oclock,time,late,early,schedule" }, "clock5": { name: "Clock Face Five Oclock", unified: "1F554", sheet_x: 24, sheet_y: 15, short_names: ["clock5"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clock5,clock,face,five,oclock,time,late,early,schedule" }, "flag-dg": { name: "Regional Indicator Symbol Letters DG", unified: "1F1E9-1F1EC", sheet_x: 34, sheet_y: 10, short_names: ["flag-dg"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,dg,regional,indicator,symbol,letters" }, "clock6": { name: "Clock Face Six Oclock", unified: "1F555", sheet_x: 24, sheet_y: 16, short_names: ["clock6"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clock6,clock,face,six,oclock,time,late,early,schedule,dawn,dusk" }, "flag-ea": { name: "Regional Indicator Symbol Letters EA", unified: "1F1EA-1F1E6", sheet_x: 34, sheet_y: 16, short_names: ["flag-ea"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,ea,regional,indicator,symbol,letters" }, "flag-hm": { name: "Regional Indicator Symbol Letters HM", unified: "1F1ED-1F1F2", sheet_x: 35, sheet_y: 10, short_names: ["flag-hm"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,hm,regional,indicator,symbol,letters" }, "clock7": { name: "Clock Face Seven Oclock", unified: "1F556", sheet_x: 24, sheet_y: 17, short_names: ["clock7"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clock7,clock,face,seven,oclock,time,late,early,schedule" }, "flag-mf": { name: "Regional Indicator Symbol Letters MF", unified: "1F1F2-1F1EB", sheet_x: 36, sheet_y: 15, short_names: ["flag-mf"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,mf,regional,indicator,symbol,letters" }, "clock8": { name: "Clock Face Eight Oclock", unified: "1F557", sheet_x: 24, sheet_y: 18, short_names: ["clock8"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clock8,clock,face,eight,oclock,time,late,early,schedule" }, "clock9": { name: "Clock Face Nine Oclock", unified: "1F558", sheet_x: 24, sheet_y: 19, short_names: ["clock9"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clock9,clock,face,nine,oclock,time,late,early,schedule" }, "flag-sj": { name: "Regional Indicator Symbol Letters SJ", unified: "1F1F8-1F1EF", sheet_x: 37, sheet_y: 34, short_names: ["flag-sj"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,sj,regional,indicator,symbol,letters" }, "flag-ta": { name: "Regional Indicator Symbol Letters TA", unified: "1F1F9-1F1E6", sheet_x: 38, sheet_y: 6, short_names: ["flag-ta"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,ta,regional,indicator,symbol,letters" }, "clock10": { name: "Clock Face Ten Oclock", unified: "1F559", sheet_x: 24, sheet_y: 20, short_names: ["clock10"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clock10,clock,face,ten,oclock,time,late,early,schedule" }, "flag-um": { name: "Regional Indicator Symbol Letters UM", unified: "1F1FA-1F1F2", sheet_x: 38, sheet_y: 25, short_names: ["flag-um"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "flag,um,regional,indicator,symbol,letters" }, "clock11": { name: "Clock Face Eleven Oclock", unified: "1F55A", sheet_x: 24, sheet_y: 21, short_names: ["clock11"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clock11,clock,face,eleven,oclock,time,late,early,schedule" }, "clock12": { name: "Clock Face Twelve Oclock", unified: "1F55B", sheet_x: 24, sheet_y: 22, short_names: ["clock12"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clock12,clock,face,twelve,oclock,time,noon,midnight,midday,late,early,schedule" }, "clock130": { name: "Clock Face One-Thirty", unified: "1F55C", sheet_x: 24, sheet_y: 23, short_names: ["clock130"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clock130,clock,face,one,thirty,time,late,early,schedule" }, "clock230": { name: "Clock Face Two-Thirty", unified: "1F55D", sheet_x: 24, sheet_y: 24, short_names: ["clock230"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clock230,clock,face,two,thirty,time,late,early,schedule" }, "clock330": { name: "Clock Face Three-Thirty", unified: "1F55E", sheet_x: 24, sheet_y: 25, short_names: ["clock330"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clock330,clock,face,three,thirty,time,late,early,schedule" }, "clock430": { name: "Clock Face Four-Thirty", unified: "1F55F", sheet_x: 24, sheet_y: 26, short_names: ["clock430"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clock430,clock,face,four,thirty,time,late,early,schedule" }, "clock530": { name: "Clock Face Five-Thirty", unified: "1F560", sheet_x: 24, sheet_y: 27, short_names: ["clock530"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clock530,clock,face,five,thirty,time,late,early,schedule" }, "clock630": { name: "Clock Face Six-Thirty", unified: "1F561", sheet_x: 24, sheet_y: 28, short_names: ["clock630"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clock630,clock,face,six,thirty,time,late,early,schedule" }, "clock730": { name: "Clock Face Seven-Thirty", unified: "1F562", sheet_x: 24, sheet_y: 29, short_names: ["clock730"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clock730,clock,face,seven,thirty,time,late,early,schedule" }, "clock830": { name: "Clock Face Eight-Thirty", unified: "1F563", sheet_x: 24, sheet_y: 30, short_names: ["clock830"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clock830,clock,face,eight,thirty,time,late,early,schedule" }, "clock930": { name: "Clock Face Nine-Thirty", unified: "1F564", sheet_x: 24, sheet_y: 31, short_names: ["clock930"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clock930,clock,face,nine,thirty,time,late,early,schedule" }, "clock1030": { name: "Clock Face Ten-Thirty", unified: "1F565", sheet_x: 24, sheet_y: 32, short_names: ["clock1030"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clock1030,clock,face,ten,thirty,time,late,early,schedule" }, "clock1130": { name: "Clock Face Eleven-Thirty", unified: "1F566", sheet_x: 24, sheet_y: 33, short_names: ["clock1130"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clock1130,clock,face,eleven,thirty,time,late,early,schedule" }, "clock1230": { name: "Clock Face Twelve-Thirty", unified: "1F567", sheet_x: 24, sheet_y: 34, short_names: ["clock1230"], has_img_apple: true, has_img_google: true, has_img_twitter: true, has_img_emojione: true, search: "clock1230,clock,face,twelve,thirty,time,late,early,schedule" } }, skins: { "skin-tone-2": { name: "Emoji Modifier Fitzpatrick Type-1-2", unified: "1F3FB", sheet_x: 12, sheet_y: 0, short_names: ["skin-tone-2"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "skin,tone,2,emoji,modifier,fitzpatrick,type,1" }, "skin-tone-3": { name: "Emoji Modifier Fitzpatrick Type-3", unified: "1F3FC", sheet_x: 12, sheet_y: 1, short_names: ["skin-tone-3"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "skin,tone,3,emoji,modifier,fitzpatrick,type" }, "skin-tone-4": { name: "Emoji Modifier Fitzpatrick Type-4", unified: "1F3FD", sheet_x: 12, sheet_y: 2, short_names: ["skin-tone-4"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "skin,tone,4,emoji,modifier,fitzpatrick,type" }, "skin-tone-5": { name: "Emoji Modifier Fitzpatrick Type-5", unified: "1F3FE", sheet_x: 12, sheet_y: 3, short_names: ["skin-tone-5"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "skin,tone,5,emoji,modifier,fitzpatrick,type" }, "skin-tone-6": { name: "Emoji Modifier Fitzpatrick Type-6", unified: "1F3FF", sheet_x: 12, sheet_y: 4, short_names: ["skin-tone-6"], has_img_apple: true, has_img_google: false, has_img_twitter: true, has_img_emojione: true, search: "skin,tone,6,emoji,modifier,fitzpatrick,type" } }, short_names: { red_car: "car", satisfied: "laughing", telephone: "phone", honeybee: "bee", sailboat: "boat", flipper: "dolphin", cn: "flag-cn", knife: "hocho", poop: "hankey", shit: "hankey", paw_prints: "feet", fr: "flag-fr", heavy_exclamation_mark: "exclamation", de: "flag-de", thumbsup: "+1", thumbsdown: "-1", punch: "facepunch", raised_hand: "hand", reversed_hand_with_middle_finger_extended: "middle_finger", sign_of_the_horns: "the_horns", it: "flag-it", lantern: "izakaya_lantern", waxing_gibbous_moon: "moon", envelope: "email", jp: "flag-jp", sun_small_cloud: "mostly_sunny", sun_behind_cloud: "barely_sunny", sun_behind_rain_cloud: "partly_sunny_rain", lightning_cloud: "lightning", collision: "boom", running: "runner", tornado_cloud: "tornado", man_and_woman_holding_hands: "couple", open_book: "book", "man-woman-boy": "family", pencil: "memo", tshirt: "shirt", ru: "flag-ru", shoe: "mans_shoe", kr: "flag-kr", es: "flag-es", gb: "flag-gb", uk: "flag-gb", us: "flag-us" } };

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.unifiedToNative = exports.deepMerge = exports.intersect = exports.getSanitizedData = exports.getData = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _data = __webpack_require__(19);

	var _data2 = _interopRequireDefault(_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
	var SKINS = ['1F3FA', '1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];

	function unifiedToNative(unified) {
	  var unicodes = unified.split('-'),
	      codePoints = unicodes.map(function (u) {
	    return '0x' + u;
	  });

	  return String.fromCodePoint.apply(String, _toConsumableArray(codePoints));
	}

	function sanitize(emoji) {
	  var name = emoji.name;
	  var short_names = emoji.short_names;
	  var skin_tone = emoji.skin_tone;
	  var skin_variations = emoji.skin_variations;
	  var emoticons = emoji.emoticons;
	  var unified = emoji.unified;
	  var id = short_names[0];
	  var colons = ':' + id + ':';

	  if (skin_tone) {
	    colons += ':skin-tone-' + skin_tone + ':';
	  }

	  return {
	    id: id,
	    name: name,
	    colons: colons,
	    emoticons: emoticons,
	    unified: unified.toLowerCase(),
	    skin: skin_tone || (skin_variations ? 1 : null),
	    native: unifiedToNative(unified)
	  };
	}

	function getSanitizedData() {
	  return sanitize(getData.apply(undefined, arguments));
	}

	function getData(emoji, skin, set) {
	  var emojiData = {};

	  if (typeof emoji == 'string') {
	    var matches = emoji.match(COLONS_REGEX);

	    if (matches) {
	      emoji = matches[1];

	      if (matches[2]) {
	        skin = parseInt(matches[2]);
	      }
	    }

	    if (_data2.default.short_names.hasOwnProperty(emoji)) {
	      emoji = _data2.default.short_names[emoji];
	    }

	    if (_data2.default.emojis.hasOwnProperty(emoji)) {
	      emojiData = _data2.default.emojis[emoji];
	    }
	  } else if (emoji.id) {
	    if (_data2.default.short_names.hasOwnProperty(emoji.id)) {
	      emoji.id = _data2.default.short_names[emoji.id];
	    }

	    if (_data2.default.emojis.hasOwnProperty(emoji.id)) {
	      emojiData = _data2.default.emojis[emoji.id];
	      skin || (skin = emoji.skin);
	    }
	  }

	  emojiData.emoticons || (emojiData.emoticons = []);
	  emojiData.variations || (emojiData.variations = []);

	  if (emojiData.skin_variations && skin > 1 && set) {
	    emojiData = JSON.parse(JSON.stringify(emojiData));

	    var skinKey = SKINS[skin - 1],
	        variationKey = emojiData.unified + '-' + skinKey,
	        variationData = emojiData.skin_variations[variationKey];

	    if (!variationData.variations && emojiData.variations) {
	      delete emojiData.variations;
	    }

	    if (variationData['has_img_' + set]) {
	      emojiData.skin_tone = skin;

	      for (var k in variationData) {
	        var v = variationData[k];
	        emojiData[k] = v;
	      }
	    }
	  }

	  if (emojiData.variations && emojiData.variations.length) {
	    emojiData = JSON.parse(JSON.stringify(emojiData));
	    emojiData.unified = emojiData.variations.shift();
	  }

	  return emojiData;
	}

	function intersect(a, b) {
	  var aSet = new Set(a),
	      bSet = new Set(b),
	      intersection = null;

	  intersection = new Set([].concat(_toConsumableArray(aSet)).filter(function (x) {
	    return bSet.has(x);
	  }));

	  return Array.from(intersection);
	}

	function deepMerge(a, b) {
	  var o = {};

	  for (var key in a) {
	    var originalValue = a[key],
	        value = originalValue;

	    if (b.hasOwnProperty(key)) {
	      value = b[key];
	    }

	    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
	      value = deepMerge(originalValue, value);
	    }

	    o[key] = value;
	  }

	  return o;
	}

	exports.getData = getData;
	exports.getSanitizedData = getSanitizedData;
	exports.intersect = intersect;
	exports.deepMerge = deepMerge;
	exports.unifiedToNative = unifiedToNative;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(22);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _data = __webpack_require__(19);

	var _data2 = _interopRequireDefault(_data);

	var _store = __webpack_require__(17);

	var _store2 = _interopRequireDefault(_store);

	var _frequently = __webpack_require__(16);

	var _frequently2 = _interopRequireDefault(_frequently);

	var _utils = __webpack_require__(20);

	var _ = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RECENT_CATEGORY = { name: 'Recent', emojis: null };
	var SEARCH_CATEGORY = { name: 'Search', emojis: null, anchor: false };

	var I18N = {
	  search: 'Search',
	  notfound: 'No Emoji Found',
	  categories: {
	    search: 'Search Results',
	    recent: 'Frequently Used',
	    people: 'Smileys & People',
	    nature: 'Animals & Nature',
	    foods: 'Food & Drink',
	    activity: 'Activity',
	    places: 'Travel & Places',
	    objects: 'Objects',
	    symbols: 'Symbols',
	    flags: 'Flags'
	  }
	};

	var Picker = function (_React$Component) {
	  _inherits(Picker, _React$Component);

	  function Picker(props) {
	    _classCallCheck(this, Picker);

	    var _this = _possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).call(this, props));

	    _this.i18n = (0, _utils.deepMerge)(I18N, props.i18n);
	    _this.state = {
	      skin: _store2.default.get('skin') || props.skin,
	      firstRender: true
	    };

	    _this.categories = [];

	    if (props.include != undefined) {
	      _data2.default.categories.sort(function (a, b) {
	        var aName = a.name.toLowerCase();
	        var bName = b.name.toLowerCase();

	        if (props.include.indexOf(aName) > props.include.indexOf(bName)) {
	          return 1;
	        }

	        return 0;
	      });
	    }

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = _data2.default.categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var category = _step.value;

	        var isIncluded = props.include == undefined ? true : props.include.indexOf(category.name.toLowerCase()) > -1;
	        var isExcluded = props.exclude == undefined ? false : props.exclude.indexOf(category.name.toLowerCase()) > -1;
	        if (!isIncluded || isExcluded) {
	          continue;
	        }

	        if (props.emojisToShowFilter) {
	          var newEmojis = [];

	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;

	          try {
	            for (var _iterator2 = category.emojis[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var emoji = _step2.value;

	              var unified = _data2.default.emojis[emoji].unified;

	              if (props.emojisToShowFilter(unified)) {
	                newEmojis.push(emoji);
	              }
	            }
	          } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	              }
	            } finally {
	              if (_didIteratorError2) {
	                throw _iteratorError2;
	              }
	            }
	          }

	          if (newEmojis.length) {
	            var newCategory = {
	              emojis: newEmojis,
	              name: category.name
	            };

	            _this.categories.push(newCategory);
	          }
	        } else {
	          _this.categories.push(category);
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }

	    var includeRecent = props.include == undefined ? true : props.include.indexOf('recent') > -1;
	    var excludeRecent = props.exclude == undefined ? false : props.exclude.indexOf('recent') > -1;
	    if (includeRecent && !excludeRecent) {
	      _this.categories.unshift(RECENT_CATEGORY);
	    }

	    if (_this.categories[0]) {
	      _this.categories[0].first = true;
	    }

	    _this.categories.unshift(SEARCH_CATEGORY);
	    return _this;
	  }

	  _createClass(Picker, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props) {
	      if (props.skin && !_store2.default.get('skin')) {
	        this.setState({ skin: props.skin });
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      if (this.state.firstRender) {
	        this.testStickyPosition();
	        this.firstRenderTimeout = setTimeout(function () {
	          _this2.setState({ firstRender: false });
	        }, 60);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.updateCategoriesSize();
	      this.handleScroll();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      SEARCH_CATEGORY.emojis = null;

	      clearTimeout(this.leaveTimeout);
	      clearTimeout(this.firstRenderTimeout);
	    }
	  }, {
	    key: 'testStickyPosition',
	    value: function testStickyPosition() {
	      var stickyTestElement = document.createElement('div');
	      var _arr = ['', '-webkit-', '-ms-', '-moz-', '-o-'];
	      for (var _i = 0; _i < _arr.length; _i++) {
	        var prefix = _arr[_i];
	        stickyTestElement.style.position = prefix + 'sticky';
	      }

	      this.hasStickyPosition = !!stickyTestElement.style.position.length;
	    }
	  }, {
	    key: 'handleEmojiOver',
	    value: function handleEmojiOver(emoji) {
	      var preview = this.refs.preview;

	      preview.setState({ emoji: emoji });
	      clearTimeout(this.leaveTimeout);
	    }
	  }, {
	    key: 'handleEmojiLeave',
	    value: function handleEmojiLeave(emoji) {
	      var _this3 = this;

	      this.leaveTimeout = setTimeout(function () {
	        var preview = _this3.refs.preview;

	        preview.setState({ emoji: null });
	      }, 16);
	    }
	  }, {
	    key: 'handleEmojiClick',
	    value: function handleEmojiClick(emoji, e) {
	      var _this4 = this;

	      this.props.onClick(emoji, e);
	      _frequently2.default.add(emoji);

	      var component = this.refs['category-1'];
	      if (component) {
	        var maxMargin = component.maxMargin;
	        component.forceUpdate();

	        window.requestAnimationFrame(function () {
	          component.memoizeSize();
	          if (maxMargin == component.maxMargin) return;

	          _this4.updateCategoriesSize();
	          _this4.handleScrollPaint();

	          if (SEARCH_CATEGORY.emojis) {
	            component.updateDisplay('none');
	          }
	        });
	      }
	    }
	  }, {
	    key: 'handleScroll',
	    value: function handleScroll() {
	      if (!this.waitingForPaint) {
	        this.waitingForPaint = true;
	        window.requestAnimationFrame(this.handleScrollPaint.bind(this));
	      }
	    }
	  }, {
	    key: 'handleScrollPaint',
	    value: function handleScrollPaint() {
	      this.waitingForPaint = false;

	      if (!this.refs.scroll) {
	        return;
	      }

	      var target = this.refs.scroll,
	          scrollTop = target.scrollTop,
	          scrollingDown = scrollTop > (this.scrollTop || 0),
	          activeCategory = null,
	          minTop = 0;

	      for (var i = 0, l = this.categories.length; i < l; i++) {
	        var ii = scrollingDown ? this.categories.length - 1 - i : i,
	            category = this.categories[ii],
	            component = this.refs['category-' + ii];

	        if (component) {
	          var active = component.handleScroll(scrollTop);

	          if (!minTop || component.top < minTop) {
	            if (component.top > 0) {
	              minTop = component.top;
	            }
	          }

	          if (active && !activeCategory) {
	            activeCategory = category;
	          }
	        }
	      }

	      if (scrollTop < minTop) {
	        var _iteratorNormalCompletion3 = true;
	        var _didIteratorError3 = false;
	        var _iteratorError3 = undefined;

	        try {
	          for (var _iterator3 = this.categories[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var _category = _step3.value;

	            if (_category.anchor === false) {
	              continue;
	            }

	            activeCategory = _category;
	            break;
	          }
	        } catch (err) {
	          _didIteratorError3 = true;
	          _iteratorError3 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	              _iterator3.return();
	            }
	          } finally {
	            if (_didIteratorError3) {
	              throw _iteratorError3;
	            }
	          }
	        }
	      }

	      if (activeCategory) {
	        var anchors = this.refs.anchors;
	        var _activeCategory = activeCategory;
	        var categoryName = _activeCategory.name;


	        if (anchors.state.selected != categoryName) {
	          anchors.setState({ selected: categoryName });
	        }
	      }

	      this.scrollTop = scrollTop;
	    }
	  }, {
	    key: 'handleSearch',
	    value: function handleSearch(emojis) {
	      SEARCH_CATEGORY.emojis = emojis;

	      for (var i = 0, l = this.categories.length; i < l; i++) {
	        var component = this.refs['category-' + i];

	        if (component && component.props.name != 'Search') {
	          var display = emojis ? 'none' : 'inherit';
	          component.updateDisplay(display);
	        }
	      }

	      this.forceUpdate();
	    }
	  }, {
	    key: 'handleAnchorClick',
	    value: function handleAnchorClick(category, i) {
	      var component = this.refs['category-' + i];
	      var _refs = this.refs;
	      var scroll = _refs.scroll;
	      var anchors = _refs.anchors;
	      var scrollToComponent = null;

	      scrollToComponent = function scrollToComponent() {
	        if (component) {
	          var top = component.top;


	          if (category.first) {
	            top = 0;
	          } else {
	            top += 1;
	          }

	          scroll.scrollTop = top;
	        }
	      };

	      if (SEARCH_CATEGORY.emojis) {
	        this.handleSearch(null);
	        this.refs.search.clear();

	        window.requestAnimationFrame(scrollToComponent);
	      } else {
	        scrollToComponent();
	      }
	    }
	  }, {
	    key: 'handleSkinChange',
	    value: function handleSkinChange(skin) {
	      var newState = { skin: skin };

	      this.setState(newState);
	      _store2.default.update(newState);
	    }
	  }, {
	    key: 'updateCategoriesSize',
	    value: function updateCategoriesSize() {
	      for (var i = 0, l = this.categories.length; i < l; i++) {
	        var component = this.refs['category-' + i];
	        if (component) component.memoizeSize();
	      }
	    }
	  }, {
	    key: 'getCategories',
	    value: function getCategories() {
	      return this.state.firstRender ? this.categories.slice(0, 3) : this.categories;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this5 = this;

	      console.log("testing working");
	      var _props = this.props;
	      var perLine = _props.perLine;
	      var emojiSize = _props.emojiSize;
	      var set = _props.set;
	      var sheetSize = _props.sheetSize;
	      var style = _props.style;
	      var title = _props.title;
	      var emoji = _props.emoji;
	      var color = _props.color;
	      var native = _props.native;
	      var backgroundImageFn = _props.backgroundImageFn;
	      var emojisToShowFilter = _props.emojisToShowFilter;
	      var include = _props.include;
	      var exclude = _props.exclude;
	      var autoFocus = _props.autoFocus;
	      var skin = this.state.skin;
	      var width = perLine * (emojiSize + 12) + 12 + 2;

	      return _react2.default.createElement(
	        'div',
	        { style: _extends({ width: width }, style), className: 'emoji-mart' },
	        _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-bar' },
	          _react2.default.createElement(_.Anchors, {
	            ref: 'anchors',
	            i18n: this.i18n,
	            color: color,
	            categories: this.categories,
	            onAnchorClick: this.handleAnchorClick.bind(this)
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { ref: 'scroll', className: 'emoji-mart-scroll', onScroll: this.handleScroll.bind(this) },
	          _react2.default.createElement(_.Search, {
	            ref: 'search',
	            onSearch: this.handleSearch.bind(this),
	            i18n: this.i18n,
	            emojisToShowFilter: emojisToShowFilter,
	            include: include,
	            exclude: exclude,
	            autoFocus: autoFocus
	          }),
	          this.getCategories().map(function (category, i) {
	            return _react2.default.createElement(_.Category, {
	              ref: 'category-' + i,
	              key: category.name,
	              name: category.name,
	              emojis: category.emojis,
	              perLine: perLine,
	              native: native,
	              hasStickyPosition: _this5.hasStickyPosition,
	              i18n: _this5.i18n,
	              emojiProps: {
	                native: native,
	                skin: skin,
	                size: emojiSize,
	                set: set,
	                sheetSize: sheetSize,
	                forceSize: native,
	                backgroundImageFn: backgroundImageFn,
	                onOver: _this5.handleEmojiOver.bind(_this5),
	                onLeave: _this5.handleEmojiLeave.bind(_this5),
	                onClick: _this5.handleEmojiClick.bind(_this5)
	              }
	            });
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-bar' },
	          _react2.default.createElement(_.Preview, {
	            ref: 'preview',
	            title: title,
	            emoji: emoji,
	            emojiProps: {
	              native: native,
	              size: 38,
	              skin: skin,
	              set: set,
	              sheetSize: sheetSize,
	              backgroundImageFn: backgroundImageFn
	            },
	            skinsProps: {
	              skin: skin,
	              onChange: this.handleSkinChange.bind(this)
	            }
	          })
	        )
	      );
	    }
	  }]);

	  return Picker;
	}(_react2.default.Component);

	exports.default = Picker;


	Picker.propTypes = {
	  onClick: _react2.default.PropTypes.func,
	  perLine: _react2.default.PropTypes.number,
	  emojiSize: _react2.default.PropTypes.number,
	  i18n: _react2.default.PropTypes.object,
	  style: _react2.default.PropTypes.object,
	  title: _react2.default.PropTypes.string,
	  emoji: _react2.default.PropTypes.string,
	  color: _react2.default.PropTypes.string,
	  set: _.Emoji.propTypes.set,
	  skin: _.Emoji.propTypes.skin,
	  native: _react2.default.PropTypes.bool,
	  backgroundImageFn: _.Emoji.propTypes.backgroundImageFn,
	  sheetSize: _.Emoji.propTypes.sheetSize,
	  emojisToShowFilter: _react2.default.PropTypes.func,
	  include: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
	  exclude: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
	  autoFocus: _react2.default.PropTypes.bool
	};

	Picker.defaultProps = {
	  onClick: function onClick() {},
	  emojiSize: 24,
	  perLine: 9,
	  i18n: {},
	  style: {},
	  title: 'Emoji Mart™',
	  emoji: 'department_store',
	  color: '#ae65c5',
	  set: _.Emoji.defaultProps.set,
	  skin: _.Emoji.defaultProps.skin,
	  native: _.Emoji.defaultProps.native,
	  sheetSize: _.Emoji.defaultProps.sheetSize,
	  backgroundImageFn: _.Emoji.defaultProps.backgroundImageFn,
	  emojisToShowFilter: null,
	  autoFocus: false
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

	// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

	// MIT license

	var isWindowAvailable = typeof window !== 'undefined';

	isWindowAvailable && function () {
	  var lastTime = 0;
	  var vendors = ['ms', 'moz', 'webkit', 'o'];

	  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
	    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	  }

	  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
	    var currTime = new Date().getTime();
	    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	    var id = window.setTimeout(function () {
	      callback(currTime + timeToCall);
	    }, timeToCall);

	    lastTime = currTime + timeToCall;
	    return id;
	  };

	  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
	    clearTimeout(id);
	  };
	}();

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ = __webpack_require__(1);

	var _utils = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Preview = function (_React$Component) {
	  _inherits(Preview, _React$Component);

	  function Preview(props) {
	    _classCallCheck(this, Preview);

	    var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, props));

	    _this.state = { emoji: null };
	    return _this;
	  }

	  _createClass(Preview, [{
	    key: 'render',
	    value: function render() {
	      var emoji = this.state.emoji;
	      var _props = this.props;
	      var emojiProps = _props.emojiProps;
	      var skinsProps = _props.skinsProps;
	      var title = _props.title;
	      var idleEmoji = _props.emoji;


	      if (emoji) {
	        var emojiData = (0, _utils.getData)(emoji);
	        var emoticons = emojiData.emoticons;
	        var knownEmoticons = [];
	        var listedEmoticons = [];

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = emoticons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var emoticon = _step.value;

	            if (knownEmoticons.indexOf(emoticon.toLowerCase()) == -1) {
	              knownEmoticons.push(emoticon.toLowerCase());
	              listedEmoticons.push(emoticon);
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }

	        return _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-preview' },
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-emoji' },
	            _react2.default.createElement(_.Emoji, _extends({
	              key: emoji.id,
	              emoji: emoji
	            }, emojiProps))
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-data' },
	            _react2.default.createElement(
	              'div',
	              { className: 'emoji-mart-preview-name' },
	              emoji.name
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'emoji-mart-preview-shortnames' },
	              emojiData.short_names.map(function (short_name) {
	                return _react2.default.createElement(
	                  'span',
	                  { key: short_name, className: 'emoji-mart-preview-shortname' },
	                  ':',
	                  short_name,
	                  ':'
	                );
	              })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'emoji-mart-preview-emoticons' },
	              listedEmoticons.map(function (emoticon) {
	                return _react2.default.createElement(
	                  'span',
	                  { key: emoticon, className: 'emoji-mart-preview-emoticon' },
	                  emoticon
	                );
	              })
	            )
	          )
	        );
	      } else {
	        return _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-preview' },
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-emoji' },
	            _react2.default.createElement(_.Emoji, _extends({
	              emoji: idleEmoji
	            }, emojiProps))
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-data' },
	            _react2.default.createElement(
	              'span',
	              { className: 'emoji-mart-title-label' },
	              title
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-skins' },
	            _react2.default.createElement(_.Skins, skinsProps)
	          )
	        );
	      }
	    }
	  }]);

	  return Preview;
	}(_react2.default.Component);

	exports.default = Preview;


	Preview.propTypes = {
	  title: _react2.default.PropTypes.string.isRequired,
	  emoji: _react2.default.PropTypes.string.isRequired,
	  emojiProps: _react2.default.PropTypes.object.isRequired,
	  skinsProps: _react2.default.PropTypes.object.isRequired
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _emojiIndex = __webpack_require__(25);

	var _emojiIndex2 = _interopRequireDefault(_emojiIndex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Search = function (_React$Component) {
	  _inherits(Search, _React$Component);

	  function Search() {
	    _classCallCheck(this, Search);

	    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
	  }

	  _createClass(Search, [{
	    key: 'handleChange',
	    value: function handleChange() {
	      var input = this.refs.input;
	      var value = input.value;

	      this.props.onSearch(_emojiIndex2.default.search(value, {
	        emojisToShowFilter: this.props.emojisToShowFilter,
	        maxResults: this.props.maxResults,
	        include: this.props.include,
	        exclude: this.props.exclude
	      }));
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.refs.input.value = '';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var i18n = _props.i18n;
	      var autoFocus = _props.autoFocus;


	      return _react2.default.createElement('input', {
	        ref: 'input',
	        type: 'text',
	        onChange: this.handleChange.bind(this),
	        placeholder: i18n.search,
	        className: 'emoji-mart-search',
	        autoFocus: autoFocus
	      });
	    }
	  }]);

	  return Search;
	}(_react2.default.Component);

	exports.default = Search;


	Search.propTypes = {
	  onSearch: _react2.default.PropTypes.func,
	  maxResults: _react2.default.PropTypes.number,
	  emojisToShowFilter: _react2.default.PropTypes.func,
	  autoFocus: _react2.default.PropTypes.bool
	};

	Search.defaultProps = {
	  onSearch: function onSearch() {},
	  maxResults: 75,
	  emojisToShowFilter: null,
	  autoFocus: false
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _data = __webpack_require__(19);

	var _data2 = _interopRequireDefault(_data);

	var _ = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var extend = __webpack_require__(26)._extend;

	var index = {};
	var emojisList = {};
	var emoticonsList = {};

	for (var emoji in _data2.default.emojis) {
	  var emojiData = _data2.default.emojis[emoji];
	  var short_names = emojiData.short_names;
	  var emoticons = emojiData.emoticons;
	  var id = short_names[0];

	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = (emoticons || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var emoticon = _step.value;

	      if (!emoticonsList[emoticon]) {
	        emoticonsList[emoticon] = id;
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  emojisList[id] = (0, _.getSanitizedData)(id);
	}

	function search(value) {
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var emojisToShowFilter = _ref.emojisToShowFilter;
	  var maxResults = _ref.maxResults;
	  var include = _ref.include;
	  var exclude = _ref.exclude;

	  maxResults || (maxResults = 75);

	  var results = null,
	      pool = _data2.default.emojis;

	  if (value.length) {
	    var values = value.toLowerCase().split(/[\s|,|\-|_]+/),
	        allResults = [];

	    if (values.length > 2) {
	      values = [values[0], values[1]];
	    }

	    if (include && include.length || exclude && exclude.length) {
	      pool = {};

	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = _data2.default.categories[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var category = _step2.value;

	          var isIncluded = include == undefined ? true : include.indexOf(category.name.toLowerCase()) > -1;
	          var isExcluded = exclude == undefined ? false : exclude.indexOf(category.name.toLowerCase()) > -1;
	          if (!isIncluded || isExcluded) {
	            continue;
	          }

	          var _iteratorNormalCompletion3 = true;
	          var _didIteratorError3 = false;
	          var _iteratorError3 = undefined;

	          try {
	            for (var _iterator3 = category.emojis[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	              var emojiId = _step3.value;

	              pool[emojiId] = _data2.default.emojis[emojiId];
	            }
	          } catch (err) {
	            _didIteratorError3 = true;
	            _iteratorError3 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                _iterator3.return();
	              }
	            } finally {
	              if (_didIteratorError3) {
	                throw _iteratorError3;
	              }
	            }
	          }
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	    }

	    allResults = values.map(function (value) {
	      var aPool = pool,
	          aIndex = index,
	          length = 0;

	      if (value == '-' || value == '-1') {
	        return [emojisList['-1']];
	      }

	      var _iteratorNormalCompletion4 = true;
	      var _didIteratorError4 = false;
	      var _iteratorError4 = undefined;

	      try {
	        for (var _iterator4 = value.split('')[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	          var char = _step4.value;

	          length++;

	          aIndex[char] || (aIndex[char] = {});
	          aIndex = aIndex[char];

	          if (!aIndex.results) {
	            (function () {
	              var scores = {};

	              aIndex.results = [];
	              aIndex.pool = {};

	              for (var id in aPool) {
	                var _emoji = aPool[id];
	                var _search = _emoji.search;
	                var sub = value.substr(0, length);
	                var subIndex = _search.indexOf(sub);

	                if (subIndex != -1) {
	                  var score = subIndex + 1;
	                  if (sub == id) score = 0;

	                  aIndex.results.push(emojisList[id]);
	                  aIndex.pool[id] = _emoji;

	                  scores[id] = score;
	                }
	              }

	              aIndex.results.sort(function (a, b) {
	                var aScore = scores[a.id],
	                    bScore = scores[b.id];

	                return aScore - bScore;
	              });
	            })();
	          }

	          aPool = aIndex.pool;
	        }
	      } catch (err) {
	        _didIteratorError4 = true;
	        _iteratorError4 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion4 && _iterator4.return) {
	            _iterator4.return();
	          }
	        } finally {
	          if (_didIteratorError4) {
	            throw _iteratorError4;
	          }
	        }
	      }

	      return aIndex.results;
	    }).filter(function (a) {
	      return a;
	    });

	    if (allResults.length > 1) {
	      results = _.intersect.apply(undefined, _toConsumableArray(allResults));
	    } else if (allResults.length) {
	      results = allResults[0];
	    } else {
	      results = [];
	    }
	  }

	  if (results) {
	    if (emojisToShowFilter) {
	      results = results.filter(function (result) {
	        return emojisToShowFilter(_data2.default.emojis[result.id].unified);
	      });
	    }

	    if (results && results.length > maxResults) {
	      results = results.slice(0, maxResults);
	    }
	  }

	  return results;
	}

	exports.default = { search: search, emojis: emojisList, emoticons: emoticonsList };

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(28);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(29);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(27)))

/***/ },
/* 27 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 29 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Skins = function (_React$Component) {
	  _inherits(Skins, _React$Component);

	  function Skins(props) {
	    _classCallCheck(this, Skins);

	    var _this = _possibleConstructorReturn(this, (Skins.__proto__ || Object.getPrototypeOf(Skins)).call(this, props));

	    _this.state = {
	      opened: false
	    };
	    return _this;
	  }

	  _createClass(Skins, [{
	    key: 'handleClick',
	    value: function handleClick(skin) {
	      var onChange = this.props.onChange;


	      if (!this.state.opened) {
	        this.setState({ opened: true });
	      } else {
	        onChange(skin);
	        this.setState({ opened: false });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var skin = this.props.skin;
	      var opened = this.state.opened;


	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-skin-swatches ' + (opened ? 'emoji-mart-skin-swatches-opened' : '') },
	          Array(6).fill().map(function (_, i) {
	            var skinTone = i + 1,
	                selected = skinTone == skin;

	            return _react2.default.createElement(
	              'span',
	              { key: 'skin-tone-' + skinTone, className: 'emoji-mart-skin-swatch ' + (selected ? 'emoji-mart-skin-swatch-selected' : '') },
	              _react2.default.createElement('span', {
	                onClick: function onClick() {
	                  return _this2.handleClick(skinTone);
	                },
	                className: 'emoji-mart-skin emoji-mart-skin-tone-' + skinTone })
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return Skins;
	}(_react2.default.Component);

	exports.default = Skins;


	Skins.propTypes = {
	  onChange: _react2.default.PropTypes.func,
	  skin: _react2.default.PropTypes.number.isRequired
	};

	Skins.defaultProps = {
	  onChange: function onChange() {}
	};

/***/ }
/******/ ])
});
;