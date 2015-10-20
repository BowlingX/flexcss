(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FlexCss"] = factory();
	else
		root["FlexCss"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(113);
	module.exports = __webpack_require__(114);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(10)["default"];
	
	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;
	
	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    desc = parent = getter = undefined;
	    _again = false;
	    if (object === null) object = Function.prototype;
	
	    var desc = _Object$getOwnPropertyDescriptor(object, property);
	
	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);
	
	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;
	
	      if (getter === undefined) {
	        return undefined;
	      }
	
	      return getter.call(receiver);
	    }
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(11), __esModule: true };

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(12);
	__webpack_require__(13);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(14);
	
	__webpack_require__(18)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(15)
	  , defined = __webpack_require__(17);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// indexed object, fallback for non-array-like ES3 strings
	var cof = __webpack_require__(16);
	module.exports = 0 in Object('z') ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	module.exports = function(KEY, exec){
	  var $def = __webpack_require__(19)
	    , fn   = (__webpack_require__(21).Object || {})[KEY] || Object[KEY]
	    , exp  = {};
	  exp[KEY] = exec(fn);
	  $def($def.S + $def.F * __webpack_require__(22)(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(20)
	  , core      = __webpack_require__(21)
	  , PROTOTYPE = 'prototype';
	var ctx = function(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && typeof target[key] != 'function')exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp[PROTOTYPE] = C[PROTOTYPE];
	    }(out);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

/***/ },
/* 20 */
/***/ function(module, exports) {

	var global = typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	module.exports = global;
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 21 */
/***/ function(module, exports) {

	var core = module.exports = {};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$create = __webpack_require__(24)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(26)["default"];
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(25), __esModule: true };

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(12);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(27), __esModule: true };

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(28);
	module.exports = __webpack_require__(21).Object.setPrototypeOf;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $def = __webpack_require__(19);
	$def($def.S, 'Object', {setPrototypeOf: __webpack_require__(29).set});

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(12).getDesc
	  , isObject = __webpack_require__(30)
	  , anObject = __webpack_require__(31);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
	    ? function(buggy, set){
	        try {
	          set = __webpack_require__(32)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	          set({}, []);
	        } catch(e){ buggy = true; }
	        return function setPrototypeOf(O, proto){
	          check(O, proto);
	          if(buggy)O.__proto__ = proto;
	          else set(O, proto);
	          return O;
	        };
	      }()
	    : undefined),
	  check: check
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	// http://jsperf.com/core-js-isobject
	module.exports = function(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(30);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(33);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  } return function(/* ...args */){
	      return fn.apply(that, arguments);
	    };
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(35)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	
	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(36), __esModule: true };

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(12);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(81);
	module.exports = __webpack_require__(21).Object.assign;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $def = __webpack_require__(19);
	$def($def.S, 'Object', {assign: __webpack_require__(82)});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var toObject = __webpack_require__(83)
	  , IObject  = __webpack_require__(15)
	  , enumKeys = __webpack_require__(84);
	/* eslint-disable no-unused-vars */
	module.exports = Object.assign || function assign(target, source){
	/* eslint-enable no-unused-vars */
	  var T = toObject(target)
	    , l = arguments.length
	    , i = 1;
	  while(l > i){
	    var S      = IObject(arguments[i++])
	      , keys   = enumKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)T[key = keys[j++]] = S[key];
	  }
	  return T;
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(17);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(12);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */
	
	/*!
	 * FlexCss.Tooltip
	 * Licensed under the MIT License (MIT)
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 */
	
	'use strict';
	
	var _get = __webpack_require__(9)['default'];
	
	var _inherits = __webpack_require__(23)['default'];
	
	var _createClass = __webpack_require__(34)['default'];
	
	var _classCallCheck = __webpack_require__(37)['default'];
	
	var _Object$assign = __webpack_require__(79)['default'];
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _utilUtil = __webpack_require__(98);
	
	var _utilUtil2 = _interopRequireDefault(_utilUtil);
	
	var _DestroyableWidget2 = __webpack_require__(99);
	
	var _DestroyableWidget3 = _interopRequireDefault(_DestroyableWidget2);
	
	/**
	 * @type {string}
	 */
	var CLASS_NAMES_TOOLTIP = 'tooltip-container';
	/**
	 * @type {string}
	 */
	var CLASS_NAMES_OPEN = 'open';
	
	/**
	 * @type {string}
	 */
	var ATTR_DATA_CLASSNAME = 'data-class';
	
	/**
	 * @type {HTMLDocument}
	 */
	var doc = global.document;
	
	/**
	 * Simple Tooltip
	 */
	
	var Tooltip = (function (_DestroyableWidget) {
	    _inherits(Tooltip, _DestroyableWidget);
	
	    /**
	     * Creates a Tooltip
	     * @param {HTMLElement|String} DelegateContainer
	     * @param {Object} [options]
	     */
	
	    function Tooltip(DelegateContainer, options) {
	        _classCallCheck(this, Tooltip);
	
	        _get(Object.getPrototypeOf(Tooltip.prototype), 'constructor', this).call(this);
	        /**
	         * The Container where possible events are captured
	         */
	        this.container = DelegateContainer instanceof HTMLElement ? DelegateContainer : doc.getElementById(DelegateContainer);
	
	        if (!this.container) {
	            throw 'Could not create Tooltip, DelegateContainer not found';
	        }
	
	        /**
	         * The Container where tooltips are stored for this instance
	         * @type {HTMLElement}
	         */
	        this.tooltipContainer = null;
	
	        /**
	         * Default Options
	         */
	        this.options = {
	            containerClass: '',
	            selectorAttribute: 'data-tooltip'
	        };
	
	        _Object$assign(this.options, options || {});
	    }
	
	    /**
	     * Creates and shows a tooltip
	     * @param {HTMLElement} target where is this tooltip positioned
	     * @param {String} text text content in tooltip, will be NOT escaped
	     * @param {Boolean} [removeTitle] removes title element if given
	     */
	
	    _createClass(Tooltip, [{
	        key: 'createTooltip',
	        value: function createTooltip(target, text, removeTitle) {
	            // abort if text is empty
	            if (!text || text && text.trim() === '') {
	                return;
	            }
	            var tooltipContainer = this.tooltipContainer;
	
	            if (!tooltipContainer) {
	                tooltipContainer = doc.createElement('div');
	                this.container.appendChild(tooltipContainer);
	                this.tooltipContainer = tooltipContainer;
	            }
	            this._restoreClassNames(tooltipContainer, target);
	
	            tooltipContainer.style.left = 'auto';
	            tooltipContainer.style.top = 'auto';
	            tooltipContainer.innerHTML = text;
	            tooltipContainer.flexTooltipCurrentTarget = target;
	            if (removeTitle) {
	                target.oldTitle = text;
	                target.removeAttribute('title');
	            }
	
	            _utilUtil2['default'].setupPositionNearby(target, tooltipContainer, this.container, true, true);
	
	            tooltipContainer.classList.add(CLASS_NAMES_OPEN);
	        }
	    }, {
	        key: '_restoreClassNames',
	        value: function _restoreClassNames(container, target) {
	            // allow additional classname per tooltip on target element
	            var classNames = [CLASS_NAMES_TOOLTIP, this.options.containerClass],
	                maybeTargetClass = target.getAttribute(ATTR_DATA_CLASSNAME);
	            if (maybeTargetClass) {
	                classNames.push(maybeTargetClass);
	            }
	            container.className = classNames.join(" ");
	            return this;
	        }
	
	        /**
	         * @returns {HTMLElement|null}
	         */
	    }, {
	        key: 'getCurrentTarget',
	        value: function getCurrentTarget() {
	            return this.tooltipContainer ? this.tooltipContainer.flexTooltipCurrentTarget : null;
	        }
	
	        /**
	         * Destroys this Widget
	         * @returns {boolean}
	         */
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            _get(Object.getPrototypeOf(Tooltip.prototype), 'destroy', this).call(this);
	
	            if (this.tooltipContainer) {
	                this.tooltipContainer.parentNode.removeChild(this.tooltipContainer);
	                return true;
	            }
	            return false;
	        }
	
	        /**
	         * Removes a Tooltip on given target
	         * @param {HTMLElement} [target], if not given will remove current open tooltip on this instance
	         */
	    }, {
	        key: 'removeTooltip',
	        value: function removeTooltip(target) {
	            if (!target && this.tooltipContainer) {
	                target = this.tooltipContainer.flexTooltipCurrentTarget;
	            }
	            if (this.tooltipContainer) {
	                if (this.tooltipContainer.flexTooltipCurrentTarget !== target) {
	                    return;
	                }
	                this.tooltipContainer.classList.remove(CLASS_NAMES_OPEN);
	                delete this.tooltipContainer.flexTooltipCurrentTarget;
	            }
	            if (target && target.oldTitle) {
	                target.setAttribute('title', target.oldTitle);
	            }
	        }
	
	        /**
	         * Initilizes mouse events on container element
	         */
	    }, {
	        key: 'registerEvents',
	        value: function registerEvents() {
	            var self = this;
	            this.addEventListener(this.container, 'mouseover', function (e) {
	                if (e.target.hasAttribute(self.options.selectorAttribute)) {
	                    self.createTooltip(e.target, e.target.getAttribute('title'), true);
	                }
	            });
	
	            this.addEventListener(this.container, 'mouseout', function (e) {
	                if (e.target.hasAttribute(self.options.selectorAttribute)) {
	                    self.removeTooltip(e.target);
	                }
	            });
	            return this;
	        }
	    }]);
	
	    return Tooltip;
	})(_DestroyableWidget3['default']);
	
	exports['default'] = Tooltip;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL1Rvb2x0aXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUVJLFdBQVc7Ozs7a0NBQ0UsbUJBQW1COzs7Ozs7O0FBS2pELElBQU0sbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7Ozs7QUFJaEQsSUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7Ozs7O0FBS2hDLElBQU0sbUJBQW1CLEdBQUcsWUFBWSxDQUFDOzs7OztBQUt6QyxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDOzs7Ozs7SUFNdEIsT0FBTztjQUFQLE9BQU87Ozs7Ozs7O0FBT0UsYUFQVCxPQUFPLENBT0csaUJBQWlCLEVBQUUsT0FBTyxFQUFFOzhCQVB0QyxPQUFPOztBQVFMLG1DQVJGLE9BQU8sNkNBUUc7Ozs7QUFJUixZQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixZQUFZLFdBQVcsR0FDckQsaUJBQWlCLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOztBQUU5RCxZQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNqQixrQkFBTSx1REFBdUQsQ0FBQztTQUNqRTs7Ozs7O0FBTUQsWUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQzs7Ozs7QUFLN0IsWUFBSSxDQUFDLE9BQU8sR0FBRztBQUNYLDBCQUFjLEVBQUUsRUFBRTtBQUNsQiw2QkFBaUIsRUFBRSxjQUFjO1NBQ3BDLENBQUM7O0FBRUYsdUJBQWMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLElBQUksRUFBRSxDQUFDLENBQUM7S0FDOUM7Ozs7Ozs7OztpQkFs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dUJBQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDO2FBQ3pEO0FBQ0QsZ0JBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7QUFDM0Isc0JBQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNqRDtTQUNKOzs7Ozs7O2VBS2EsMEJBQUc7QUFDYixnQkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLGdCQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEVBQUU7QUFDNUQsb0JBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO0FBQ3ZELHdCQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ3RFO2FBQ0osQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUU7QUFDM0Qsb0JBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO0FBQ3ZELHdCQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDaEM7YUFDSixDQUFDLENBQUM7QUFDSCxtQkFBTyxJQUFJLENBQUM7U0FDZjs7O1dBNUlDLE9BQU87OztxQkFBUCxPQUFPIiwiZmlsZSI6Ii9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL1Rvb2x0aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IERhdmlkIEhlaWRyaWNoLCBCb3dsaW5nWCA8bWVAYm93bGluZ3guY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyohXG4gKiBGbGV4Q3NzLlRvb2x0aXBcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogQ29weXJpZ2h0IChjKSAyMDE1IERhdmlkIEhlaWRyaWNoLCBCb3dsaW5nWCA8bWVAYm93bGluZ3guY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFV0aWwgZnJvbSAndXRpbC9VdGlsJztcbmltcG9ydCBEZXN0cm95YWJsZVdpZGdldCBmcm9tICdEZXN0cm95YWJsZVdpZGdldCc7XG5cbi8qKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgQ0xBU1NfTkFNRVNfVE9PTFRJUCA9ICd0b29sdGlwLWNvbnRhaW5lcic7XG4vKipcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IENMQVNTX05BTUVTX09QRU4gPSAnb3Blbic7XG5cbi8qKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgQVRUUl9EQVRBX0NMQVNTTkFNRSA9ICdkYXRhLWNsYXNzJztcblxuLyoqXG4gKiBAdHlwZSB7SFRNTERvY3VtZW50fVxuICovXG5jb25zdCBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG5cbi8qKlxuICogU2ltcGxlIFRvb2x0aXBcbiAqL1xuZXhwb3J0IGRlZmF1bHRcbmNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBEZXN0cm95YWJsZVdpZGdldCB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgVG9vbHRpcFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8U3RyaW5nfSBEZWxlZ2F0ZUNvbnRhaW5lclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihEZWxlZ2F0ZUNvbnRhaW5lciwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIENvbnRhaW5lciB3aGVyZSBwb3NzaWJsZSBldmVudHMgYXJlIGNhcHR1cmVkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IERlbGVnYXRlQ29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgP1xuICAgICAgICAgICAgRGVsZWdhdGVDb250YWluZXIgOiBkb2MuZ2V0RWxlbWVudEJ5SWQoRGVsZWdhdGVDb250YWluZXIpO1xuXG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIHRocm93ICdDb3VsZCBub3QgY3JlYXRlIFRvb2x0aXAsIERlbGVnYXRlQ29udGFpbmVyIG5vdCBmb3VuZCc7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIENvbnRhaW5lciB3aGVyZSB0b29sdGlwcyBhcmUgc3RvcmVkIGZvciB0aGlzIGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudG9vbHRpcENvbnRhaW5lciA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmF1bHQgT3B0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGFpbmVyQ2xhc3M6ICcnLFxuICAgICAgICAgICAgc2VsZWN0b3JBdHRyaWJ1dGU6ICdkYXRhLXRvb2x0aXAnXG4gICAgICAgIH07XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMgfHwge30pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHNob3dzIGEgdG9vbHRpcFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCB3aGVyZSBpcyB0aGlzIHRvb2x0aXAgcG9zaXRpb25lZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0IHRleHQgY29udGVudCBpbiB0b29sdGlwLCB3aWxsIGJlIE5PVCBlc2NhcGVkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcmVtb3ZlVGl0bGVdIHJlbW92ZXMgdGl0bGUgZWxlbWVudCBpZiBnaXZlblxuICAgICAqL1xuICAgIGNyZWF0ZVRvb2x0aXAodGFyZ2V0LCB0ZXh0LCByZW1vdmVUaXRsZSkge1xuICAgICAgICAvLyBhYm9ydCBpZiB0ZXh0IGlzIGVtcHR5XG4gICAgICAgIGlmICghdGV4dCB8fCB0ZXh0ICYmIHRleHQudHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0b29sdGlwQ29udGFpbmVyID0gdGhpcy50b29sdGlwQ29udGFpbmVyO1xuXG4gICAgICAgIGlmICghdG9vbHRpcENvbnRhaW5lcikge1xuICAgICAgICAgICAgdG9vbHRpcENvbnRhaW5lciA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRvb2x0aXBDb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy50b29sdGlwQ29udGFpbmVyID0gdG9vbHRpcENvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZXN0b3JlQ2xhc3NOYW1lcyh0b29sdGlwQ29udGFpbmVyLCB0YXJnZXQpO1xuXG4gICAgICAgIHRvb2x0aXBDb250YWluZXIuc3R5bGUubGVmdCA9ICdhdXRvJztcbiAgICAgICAgdG9vbHRpcENvbnRhaW5lci5zdHlsZS50b3AgPSAnYXV0byc7XG4gICAgICAgIHRvb2x0aXBDb250YWluZXIuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgICAgdG9vbHRpcENvbnRhaW5lci5mbGV4VG9vbHRpcEN1cnJlbnRUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIGlmIChyZW1vdmVUaXRsZSkge1xuICAgICAgICAgICAgdGFyZ2V0Lm9sZFRpdGxlID0gdGV4dDtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBVdGlsLnNldHVwUG9zaXRpb25OZWFyYnkodGFyZ2V0LCB0b29sdGlwQ29udGFpbmVyLCB0aGlzLmNvbnRhaW5lciwgdHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgdG9vbHRpcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVTX09QRU4pO1xuXG4gICAgfVxuXG4gICAgX3Jlc3RvcmVDbGFzc05hbWVzKGNvbnRhaW5lciwgdGFyZ2V0KSB7XG4gICAgICAgIC8vIGFsbG93IGFkZGl0aW9uYWwgY2xhc3NuYW1lIHBlciB0b29sdGlwIG9uIHRhcmdldCBlbGVtZW50XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbQ0xBU1NfTkFNRVNfVE9PTFRJUCwgdGhpcy5vcHRpb25zLmNvbnRhaW5lckNsYXNzXSxcbiAgICAgICAgICAgIG1heWJlVGFyZ2V0Q2xhc3MgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKEFUVFJfREFUQV9DTEFTU05BTUUpO1xuICAgICAgICBpZiAobWF5YmVUYXJnZXRDbGFzcykge1xuICAgICAgICAgICAgY2xhc3NOYW1lcy5wdXNoKG1heWJlVGFyZ2V0Q2xhc3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBjbGFzc05hbWVzLmpvaW4oXCIgXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRDdXJyZW50VGFyZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b29sdGlwQ29udGFpbmVyID8gdGhpcy50b29sdGlwQ29udGFpbmVyLmZsZXhUb29sdGlwQ3VycmVudFRhcmdldCA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveXMgdGhpcyBXaWRnZXRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG5cbiAgICAgICAgaWYgKHRoaXMudG9vbHRpcENvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhpcy50b29sdGlwQ29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy50b29sdGlwQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgVG9vbHRpcCBvbiBnaXZlbiB0YXJnZXRcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbdGFyZ2V0XSwgaWYgbm90IGdpdmVuIHdpbGwgcmVtb3ZlIGN1cnJlbnQgb3BlbiB0b29sdGlwIG9uIHRoaXMgaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZW1vdmVUb29sdGlwKHRhcmdldCkge1xuICAgICAgICBpZiAoIXRhcmdldCAmJiB0aGlzLnRvb2x0aXBDb250YWluZXIpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHRoaXMudG9vbHRpcENvbnRhaW5lci5mbGV4VG9vbHRpcEN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudG9vbHRpcENvbnRhaW5lcikge1xuICAgICAgICAgICAgaWYgKHRoaXMudG9vbHRpcENvbnRhaW5lci5mbGV4VG9vbHRpcEN1cnJlbnRUYXJnZXQgIT09IHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudG9vbHRpcENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVTX09QRU4pO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMudG9vbHRpcENvbnRhaW5lci5mbGV4VG9vbHRpcEN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQub2xkVGl0bGUpIHtcbiAgICAgICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgdGFyZ2V0Lm9sZFRpdGxlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpbGl6ZXMgbW91c2UgZXZlbnRzIG9uIGNvbnRhaW5lciBlbGVtZW50XG4gICAgICovXG4gICAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5jb250YWluZXIsICdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZShzZWxmLm9wdGlvbnMuc2VsZWN0b3JBdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jcmVhdGVUb29sdGlwKGUudGFyZ2V0LCBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyksIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5jb250YWluZXIsICdtb3VzZW91dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuaGFzQXR0cmlidXRlKHNlbGYub3B0aW9ucy5zZWxlY3RvckF0dHJpYnV0ZSkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZVRvb2x0aXAoZS50YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */
	
	'use strict';
	
	var _createClass = __webpack_require__(34)["default"];
	
	var _classCallCheck = __webpack_require__(37)["default"];
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var PFX = ["webkit", "moz", "MS", "o", ""];
	
	var COL_LEFT_CLASS = 'is-collision-left';
	
	var COL_RIGHT_CLASS = 'is-collision-right';
	
	var COL_BOTTOM_CLASS = 'is-collision-bottom';
	
	/**
	 * Provides shared DOM-Utility functions
	 */
	
	var Util = (function () {
	    function Util() {
	        _classCallCheck(this, Util);
	    }
	
	    _createClass(Util, null, [{
	        key: "prefixedAnimateEvent",
	
	        /**
	         * Will register the right animation event based on browser
	         * @param element
	         * @param type
	         * @param callback
	         */
	        value: function prefixedAnimateEvent(element, type, callback) {
	            var thisFunction = function thisFunction(e) {
	                callback.apply(element, [e, thisFunction]);
	            };
	
	            for (var p = 0; p < PFX.length; p++) {
	                if (!PFX[p]) {
	                    type = type.toLowerCase();
	                }
	                var name = PFX[p] + type;
	                element.addEventListener(name, thisFunction, true);
	            }
	        }
	
	        /**
	         * Get correct transitionend event
	         * @returns {String}
	         * @private
	         */
	    }, {
	        key: "whichTransitionEndEvent",
	        value: function whichTransitionEndEvent() {
	            var t = undefined;
	            var el = document.createElement('fake');
	
	            var transitions = {
	                'transition': 'transitionend',
	                'OTransition': 'oTransitionEnd',
	                'MozTransition': 'transitionend',
	                'WebkitTransition': 'webkitTransitionEnd'
	            };
	
	            for (t in transitions) {
	                if (el.style[t] !== undefined) {
	                    return transitions[t];
	                }
	            }
	        }
	
	        /**
	         * Check if target is part of parent node
	         * @param target
	         * @param parent
	         * @returns {boolean}
	         */
	    }, {
	        key: "isPartOfNode",
	        value: function isPartOfNode(target, parent) {
	            if (!target || !parent) {
	                return false;
	            }
	            var now = target;
	            while (now !== parent && now !== null) {
	                if (now === parent) {
	                    break;
	                }
	                now = now.parentNode;
	            }
	            return now !== null;
	        }
	
	        /**
	         * Walks the tree until func returns true for given argument
	         * @param target
	         * @param func
	         * @returns {boolean|HTMLElement}
	         */
	    }, {
	        key: "parentsUntil",
	        value: function parentsUntil(target, func) {
	            if (!target) {
	                return false;
	            }
	            var now = target;
	            while (!func(now) && now !== null) {
	                now = now.parentNode;
	            }
	
	            return now;
	        }
	
	        /**
	         * Generates a unique id
	         * @return {String}
	         */
	    }, {
	        key: "guid",
	        value: function guid() {
	            function s4() {
	                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	            }
	
	            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	        }
	
	        /**
	         * Detects scrollbar width
	         * @see http://stackoverflow.com/questions/986937/how-can-i-get-the-browsers-scrollbar-sizes
	         * @returns {number}
	         */
	    }, {
	        key: "getScrollBarWidth",
	        value: function getScrollBarWidth() {
	
	            var doc = global.document,
	                inner = doc.createElement('p');
	            inner.style.width = "100%";
	            inner.style.height = "200px";
	
	            var outer = doc.createElement('div');
	            outer.style.position = "absolute";
	            outer.style.top = "0px";
	            outer.style.left = "0px";
	            outer.style.visibility = "hidden";
	            outer.style.width = "200px";
	            outer.style.height = "150px";
	            outer.style.overflow = "hidden";
	            outer.appendChild(inner);
	
	            doc.body.appendChild(outer);
	            var w1 = inner.offsetWidth;
	            outer.style.overflow = 'scroll';
	            var w2 = inner.offsetWidth;
	            if (w1 === w2) {
	                w2 = outer.clientWidth;
	            }
	            doc.body.removeChild(outer);
	
	            return w1 - w2;
	        }
	
	        /**
	         * Run an event once
	         * @param {String} ev
	         * @param {HTMLElement|HTMLDocument} target
	         * @param {Function} func
	         * @param {boolean} [capture]
	         */
	    }, {
	        key: "addEventOnce",
	        value: function addEventOnce(ev, target, func, capture) {
	            var thisFunction = function thisFunction(event) {
	                func(event, func);
	                target.removeEventListener(ev, thisFunction, capture);
	            };
	            return target.addEventListener(ev, thisFunction, capture);
	        }
	
	        /**
	         * Checks if an element is visible
	         * @param {HTMLElement} element
	         * @returns bool
	         */
	    }, {
	        key: "isVisible",
	        value: function isVisible(element) {
	            return element.offsetWidth > 0 && element.offsetHeight > 0;
	        }
	
	        /**
	         * Creates a camelCaseRepresentation of a dashed string
	         * @param {String} str
	         * @returns String
	         */
	    }, {
	        key: "dashToCamelCase",
	        value: function dashToCamelCase(str) {
	            return str.replace(/-([a-z])/g, function (g) {
	                return g[1].toUpperCase();
	            });
	        }
	
	        /**
	         * Creates a copy of `input`
	         * @param {*} input
	         * @return *
	         */
	    }, {
	        key: "copy",
	        value: function copy(input) {
	            return JSON.parse(JSON.stringify(input));
	        }
	
	        /**
	         * Reads options from element (data attributes) and applies to base
	         * @param {HTMLElement} element
	         * @param {Object} base
	         * @return {Object}
	         */
	    }, {
	        key: "applyOptionsFromElement",
	        value: function applyOptionsFromElement(element, base) {
	            if (!element) {
	                return base;
	            }
	            var attrs = element.attributes;
	            for (var i = 0; i < attrs.length; i++) {
	                var attr = attrs[i];
	                if (attr) {
	                    var s = Util.dashToCamelCase(attr.nodeName.replace('data-', '')),
	                        val = attr.nodeValue;
	                    if (base.hasOwnProperty(s)) {
	                        // skip functions
	                        if (typeof base[s] === 'function') {
	                            continue;
	                        }
	                        if (typeof base[s] === 'boolean') {
	                            base[s] = parseInt(val || 1) === 1;
	                        } else {
	                            base[s] = val;
	                        }
	                    }
	                }
	            }
	            return base;
	        }
	
	        /**
	         * Will position an element directly at given target
	         * Is aware of a given collision container to detect edges
	         * Will put elementToPosition either to left, center or right edge (prefer right)
	         *  and either to bottom or top (prefers bottom)
	         *
	         * You may overwrite preferred positioned with `centerHorizontal` and `positionTop`
	         *
	         * @param {HTMLElement} target the target container to align to
	         * @param {HTMLElement} elementToPosition the element to position
	         * @param {HTMLElement} collisionContainer the outer container to prevent collisions
	         * @param {bool} [centerHorizontal] set true to center element, otherwise it's put on the right border by default
	         * @param {bool} [positionTop] flip top, by default element is positioned to the bottom.
	         * @returns {HTMLElement}
	         */
	    }, {
	        key: "setupPositionNearby",
	        value: function setupPositionNearby(target, elementToPosition, collisionContainer, centerHorizontal, positionTop) {
	
	            // determine relative offsets
	            var amountTop = 0,
	                amountLeft = 0;
	            Util.parentsUntil(target.parentNode, function (el) {
	                if (!(el instanceof HTMLElement)) {
	                    return false;
	                }
	                var style = window.getComputedStyle(el);
	                if (Util.isPartOfNode(elementToPosition, el)) {
	                    if (style && style.position === 'relative') {
	                        amountTop += el.offsetTop || 0;
	                        amountLeft += el.offsetLeft || 0;
	                    }
	                    return false;
	                } else {
	                    return true;
	                }
	            });
	
	            var targetPosition = target.getBoundingClientRect(),
	                elementRect = elementToPosition.getBoundingClientRect(),
	                colRect = collisionContainer.getBoundingClientRect(),
	                targetTop = targetPosition.top - amountTop,
	                targetRight = targetPosition.right,
	                isCollisionTop = targetTop - elementRect.height <= 0,
	                isCollisionBottom = window.innerHeight < targetTop + amountTop + targetPosition.height + elementRect.height,
	                isCollisionLeft = targetRight < elementRect.width,
	                targetLeft = targetPosition.left,
	                isCollisionRight = targetLeft + elementRect.width > colRect.width,
	                classList = elementToPosition.classList;
	
	            classList.remove(COL_RIGHT_CLASS);
	            classList.remove(COL_LEFT_CLASS);
	            classList.remove(COL_BOTTOM_CLASS);
	
	            var calcTop = undefined,
	                calcLeft = undefined;
	            if (isCollisionLeft && !isCollisionRight) {
	                // put element to left if collision with left
	                calcLeft = targetPosition.left - colRect.left - amountLeft + 'px';
	                classList.add(COL_LEFT_CLASS);
	            } else {
	                // maybe center if no collision with either side
	                var rightPosition = targetRight - elementRect.width - colRect.left - amountLeft + 'px',
	                    leftCentered = (targetLeft + targetPosition.width / 2 - elementRect.width / 2 || 0) - colRect.left,
	                    collisionCentered = leftCentered + elementRect.width > colRect.width;
	                if (centerHorizontal && !collisionCentered) {
	                    calcLeft = leftCentered + 'px';
	                } else {
	                    classList.add(COL_RIGHT_CLASS);
	                    calcLeft = rightPosition;
	                }
	            }
	
	            if (isCollisionBottom || positionTop && !isCollisionTop) {
	                // Put Element on top if collision
	                calcTop = targetTop - elementRect.height - colRect.top + 'px';
	                classList.add(COL_BOTTOM_CLASS);
	            } else {
	                calcTop = targetTop + targetPosition.height - colRect.top + 'px';
	            }
	
	            elementToPosition.style.cssText = "top:" + calcTop + ";left:" + calcLeft + ";";
	
	            return elementToPosition;
	        }
	
	        /**
	         * Brings a given element into viewport
	         * @param {HTMLElement} el
	         * @param {int|function}[optionalOffset]
	         */
	    }, {
	        key: "scrollToElement",
	        value: function scrollToElement(el, optionalOffset) {
	            el.scrollIntoView();
	            // optionally use a additional scrollDif
	            if (optionalOffset) {
	                if (typeof optionalOffset === 'function') {
	                    optionalOffset = optionalOffset();
	                }
	                if (optionalOffset > 0) {
	                    var scrolledY = window.scrollY || window.pageYOffset;
	                    if (scrolledY) {
	                        window.scroll(0, scrolledY - optionalOffset);
	                    }
	                }
	            }
	        }
	    }]);
	
	    return Util;
	})();
	
	exports["default"] = Util;
	module.exports = exports["default"];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL3V0aWwvVXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkEsWUFBWSxDQUFDOzs7Ozs7Ozs7QUFFYixJQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQzs7QUFFN0MsSUFBTSxjQUFjLEdBQUcsbUJBQW1CLENBQUM7O0FBRTNDLElBQU0sZUFBZSxHQUFHLG9CQUFvQixDQUFDOztBQUU3QyxJQUFNLGdCQUFnQixHQUFHLHFCQUFxQixDQUFDOzs7Ozs7SUFNekMsSUFBSTthQUFKLElBQUk7OEJBQUosSUFBSTs7O2lCQUFKLElBQUk7Ozs7Ozs7OztlQVFxQiw4QkFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtBQUNqRCxnQkFBTSxZQUFZLEdBQUcsU0FBZixZQUFZLENBQWEsQ0FBQyxFQUFFO0FBQzlCLHdCQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO2FBQzlDLENBQUM7O0FBRUYsaUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2pDLG9CQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ1Qsd0JBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQzdCO0FBQ0Qsb0JBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDekIsdUJBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVB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RCxvQkFBSSxjQUFjLEdBQUcsQ0FBQyxFQUFFO0FBQ3BCLHdCQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUM7QUFDdkQsd0JBQUksU0FBUyxFQUFFO0FBQ1gsOEJBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFNBQVMsR0FBRyxjQUFjLENBQUMsQ0FBQztxQkFDaEQ7aUJBQ0o7YUFDSjtTQUNKOzs7V0FwVEMsSUFBSTs7O3FCQUFKLElBQUkiLCJmaWxlIjoiL1VzZXJzL2Jvd2xpbmd4L1Byb2pla3RlL2ZsZXhjc3Mvbm9kZV9tb2R1bGVzL2VzbGludC1sb2FkZXIvaW5kZXguanMhL1VzZXJzL2Jvd2xpbmd4L1Byb2pla3RlL2ZsZXhjc3Mvc3JjL21haW4vdXRpbC9VdGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBEYXZpZCBIZWlkcmljaCwgQm93bGluZ1ggPG1lQGJvd2xpbmd4LmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgUEZYID0gW1wid2Via2l0XCIsIFwibW96XCIsIFwiTVNcIiwgXCJvXCIsIFwiXCJdO1xuXG5jb25zdCBDT0xfTEVGVF9DTEFTUyA9ICdpcy1jb2xsaXNpb24tbGVmdCc7XG5cbmNvbnN0IENPTF9SSUdIVF9DTEFTUyA9ICdpcy1jb2xsaXNpb24tcmlnaHQnO1xuXG5jb25zdCBDT0xfQk9UVE9NX0NMQVNTID0gJ2lzLWNvbGxpc2lvbi1ib3R0b20nO1xuXG4vKipcbiAqIFByb3ZpZGVzIHNoYXJlZCBET00tVXRpbGl0eSBmdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGRlZmF1bHRcbmNsYXNzIFV0aWwge1xuXG4gICAgLyoqXG4gICAgICogV2lsbCByZWdpc3RlciB0aGUgcmlnaHQgYW5pbWF0aW9uIGV2ZW50IGJhc2VkIG9uIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgc3RhdGljIHByZWZpeGVkQW5pbWF0ZUV2ZW50KGVsZW1lbnQsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHRoaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseShlbGVtZW50LCBbZSwgdGhpc0Z1bmN0aW9uXSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBQRlgubGVuZ3RoOyBwKyspIHtcbiAgICAgICAgICAgIGlmICghUEZYW3BdKSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBuYW1lID0gUEZYW3BdICsgdHlwZTtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCB0aGlzRnVuY3Rpb24sIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNvcnJlY3QgdHJhbnNpdGlvbmVuZCBldmVudFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzdGF0aWMgd2hpY2hUcmFuc2l0aW9uRW5kRXZlbnQoKSB7XG4gICAgICAgIGxldCB0O1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zha2UnKTtcblxuICAgICAgICB2YXIgdHJhbnNpdGlvbnMgPSB7XG4gICAgICAgICAgICAndHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgICAgICAgICdPVHJhbnNpdGlvbic6ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgICAgICAgICAnTW96VHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgICAgICAgICdXZWJraXRUcmFuc2l0aW9uJzogJ3dlYmtpdFRyYW5zaXRpb25FbmQnXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yICh0IGluIHRyYW5zaXRpb25zKSB7XG4gICAgICAgICAgICBpZiAoZWwuc3R5bGVbdF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uc1t0XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRhcmdldCBpcyBwYXJ0IG9mIHBhcmVudCBub2RlXG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqIEBwYXJhbSBwYXJlbnRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNQYXJ0T2ZOb2RlKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgIGlmICghdGFyZ2V0IHx8ICFwYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbm93ID0gdGFyZ2V0O1xuICAgICAgICB3aGlsZSAobm93ICE9PSBwYXJlbnQgJiYgbm93ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobm93ID09PSBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vdyA9IG5vdy5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub3cgIT09IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2Fsa3MgdGhlIHRyZWUgdW50aWwgZnVuYyByZXR1cm5zIHRydWUgZm9yIGdpdmVuIGFyZ3VtZW50XG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqIEBwYXJhbSBmdW5jXG4gICAgICogQHJldHVybnMge2Jvb2xlYW58SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgc3RhdGljIHBhcmVudHNVbnRpbCh0YXJnZXQsIGZ1bmMpIHtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbm93ID0gdGFyZ2V0O1xuICAgICAgICB3aGlsZSAoIWZ1bmMobm93KSAmJiBub3cgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG5vdyA9IG5vdy5wYXJlbnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vdztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSB1bmlxdWUgaWRcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGd1aWQoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHM0KCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAgICAgICAgIC5zdWJzdHJpbmcoMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArXG4gICAgICAgICAgICBzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVjdHMgc2Nyb2xsYmFyIHdpZHRoXG4gICAgICogQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzk4NjkzNy9ob3ctY2FuLWktZ2V0LXRoZS1icm93c2Vycy1zY3JvbGxiYXItc2l6ZXNcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRTY3JvbGxCYXJXaWR0aCgpIHtcblxuICAgICAgICBjb25zdCBkb2MgPSBnbG9iYWwuZG9jdW1lbnQsIGlubmVyID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaW5uZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgICAgaW5uZXIuc3R5bGUuaGVpZ2h0ID0gXCIyMDBweFwiO1xuXG4gICAgICAgIGNvbnN0IG91dGVyID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvdXRlci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgb3V0ZXIuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgICAgb3V0ZXIuc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICBvdXRlci5zdHlsZS53aWR0aCA9IFwiMjAwcHhcIjtcbiAgICAgICAgb3V0ZXIuc3R5bGUuaGVpZ2h0ID0gXCIxNTBweFwiO1xuICAgICAgICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcblxuICAgICAgICBkb2MuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XG4gICAgICAgIGNvbnN0IHcxID0gaW5uZXIub2Zmc2V0V2lkdGg7XG4gICAgICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgICAgIGxldCB3MiA9IGlubmVyLm9mZnNldFdpZHRoO1xuICAgICAgICBpZiAodzEgPT09IHcyKSB7XG4gICAgICAgICAgICB3MiA9IG91dGVyLmNsaWVudFdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGRvYy5ib2R5LnJlbW92ZUNoaWxkKG91dGVyKTtcblxuICAgICAgICByZXR1cm4gKHcxIC0gdzIpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUnVuIGFuIGV2ZW50IG9uY2VcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fEhUTUxEb2N1bWVudH0gdGFyZ2V0XG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NhcHR1cmVdXG4gICAgICovXG4gICAgc3RhdGljIGFkZEV2ZW50T25jZShldiwgdGFyZ2V0LCBmdW5jLCBjYXB0dXJlKSB7XG4gICAgICAgIGNvbnN0IHRoaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIHRoaXNGdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgZnVuYyhldmVudCwgZnVuYyk7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldiwgdGhpc0Z1bmN0aW9uLCBjYXB0dXJlKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2LCB0aGlzRnVuY3Rpb24sIGNhcHR1cmUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBhbiBlbGVtZW50IGlzIHZpc2libGVcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIHN0YXRpYyBpc1Zpc2libGUoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRXaWR0aCA+IDAgJiYgZWxlbWVudC5vZmZzZXRIZWlnaHQgPiAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjYW1lbENhc2VSZXByZXNlbnRhdGlvbiBvZiBhIGRhc2hlZCBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICAgICogQHJldHVybnMgU3RyaW5nXG4gICAgICovXG4gICAgc3RhdGljIGRhc2hUb0NhbWVsQ2FzZShzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbiAoZykge1xuICAgICAgICAgICAgcmV0dXJuIGdbMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgYGlucHV0YFxuICAgICAqIEBwYXJhbSB7Kn0gaW5wdXRcbiAgICAgKiBAcmV0dXJuICpcbiAgICAgKi9cbiAgICBzdGF0aWMgY29weShpbnB1dCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpbnB1dCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWRzIG9wdGlvbnMgZnJvbSBlbGVtZW50IChkYXRhIGF0dHJpYnV0ZXMpIGFuZCBhcHBsaWVzIHRvIGJhc2VcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGJhc2VcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgc3RhdGljIGFwcGx5T3B0aW9uc0Zyb21FbGVtZW50KGVsZW1lbnQsIGJhc2UpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gYmFzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhdHRycyA9IGVsZW1lbnQuYXR0cmlidXRlcztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHIgPSBhdHRyc1tpXTtcbiAgICAgICAgICAgIGlmIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgbGV0IHMgPSBVdGlsLmRhc2hUb0NhbWVsQ2FzZShhdHRyLm5vZGVOYW1lLnJlcGxhY2UoJ2RhdGEtJywgJycpKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gYXR0ci5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGJhc2UuaGFzT3duUHJvcGVydHkocykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2tpcCBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBiYXNlW3NdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJhc2Vbc10gPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVtzXSA9IHBhcnNlSW50KHZhbCB8fCAxKSA9PT0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2Vbc10gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2lsbCBwb3NpdGlvbiBhbiBlbGVtZW50IGRpcmVjdGx5IGF0IGdpdmVuIHRhcmdldFxuICAgICAqIElzIGF3YXJlIG9mIGEgZ2l2ZW4gY29sbGlzaW9uIGNvbnRhaW5lciB0byBkZXRlY3QgZWRnZXNcbiAgICAgKiBXaWxsIHB1dCBlbGVtZW50VG9Qb3NpdGlvbiBlaXRoZXIgdG8gbGVmdCwgY2VudGVyIG9yIHJpZ2h0IGVkZ2UgKHByZWZlciByaWdodClcbiAgICAgKiAgYW5kIGVpdGhlciB0byBib3R0b20gb3IgdG9wIChwcmVmZXJzIGJvdHRvbSlcbiAgICAgKlxuICAgICAqIFlvdSBtYXkgb3ZlcndyaXRlIHByZWZlcnJlZCBwb3NpdGlvbmVkIHdpdGggYGNlbnRlckhvcml6b250YWxgIGFuZCBgcG9zaXRpb25Ub3BgXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgdGhlIHRhcmdldCBjb250YWluZXIgdG8gYWxpZ24gdG9cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50VG9Qb3NpdGlvbiB0aGUgZWxlbWVudCB0byBwb3NpdGlvblxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbGxpc2lvbkNvbnRhaW5lciB0aGUgb3V0ZXIgY29udGFpbmVyIHRvIHByZXZlbnQgY29sbGlzaW9uc1xuICAgICAqIEBwYXJhbSB7Ym9vbH0gW2NlbnRlckhvcml6b250YWxdIHNldCB0cnVlIHRvIGNlbnRlciBlbGVtZW50LCBvdGhlcndpc2UgaXQncyBwdXQgb24gdGhlIHJpZ2h0IGJvcmRlciBieSBkZWZhdWx0XG4gICAgICogQHBhcmFtIHtib29sfSBbcG9zaXRpb25Ub3BdIGZsaXAgdG9wLCBieSBkZWZhdWx0IGVsZW1lbnQgaXMgcG9zaXRpb25lZCB0byB0aGUgYm90dG9tLlxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0dXBQb3NpdGlvbk5lYXJieSh0YXJnZXQsIGVsZW1lbnRUb1Bvc2l0aW9uLCBjb2xsaXNpb25Db250YWluZXIsIGNlbnRlckhvcml6b250YWwsIHBvc2l0aW9uVG9wKSB7XG5cbiAgICAgICAgLy8gZGV0ZXJtaW5lIHJlbGF0aXZlIG9mZnNldHNcbiAgICAgICAgbGV0IGFtb3VudFRvcCA9IDAsIGFtb3VudExlZnQgPSAwO1xuICAgICAgICBVdGlsLnBhcmVudHNVbnRpbCh0YXJnZXQucGFyZW50Tm9kZSwgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBpZiAoIShlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICAgICAgICAgIGlmIChVdGlsLmlzUGFydE9mTm9kZShlbGVtZW50VG9Qb3NpdGlvbiwgZWwpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlICYmIHN0eWxlLnBvc2l0aW9uID09PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudFRvcCArPSBlbC5vZmZzZXRUb3AgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50TGVmdCArPSBlbC5vZmZzZXRMZWZ0IHx8IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgZWxlbWVudFJlY3QgPSBlbGVtZW50VG9Qb3NpdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgIGNvbFJlY3QgPSBjb2xsaXNpb25Db250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICB0YXJnZXRUb3AgPSB0YXJnZXRQb3NpdGlvbi50b3AgLSBhbW91bnRUb3AsIHRhcmdldFJpZ2h0ID0gdGFyZ2V0UG9zaXRpb24ucmlnaHQsXG4gICAgICAgICAgICBpc0NvbGxpc2lvblRvcCA9ICh0YXJnZXRUb3AgLSBlbGVtZW50UmVjdC5oZWlnaHQpIDw9IDAsXG4gICAgICAgICAgICBpc0NvbGxpc2lvbkJvdHRvbSA9IHdpbmRvdy5pbm5lckhlaWdodCA8ICh0YXJnZXRUb3AgKyBhbW91bnRUb3AgKyB0YXJnZXRQb3NpdGlvbi5oZWlnaHQgKyBlbGVtZW50UmVjdC5oZWlnaHQpLFxuICAgICAgICAgICAgaXNDb2xsaXNpb25MZWZ0ID0gdGFyZ2V0UmlnaHQgPCBlbGVtZW50UmVjdC53aWR0aCwgdGFyZ2V0TGVmdCA9IHRhcmdldFBvc2l0aW9uLmxlZnQsXG4gICAgICAgICAgICBpc0NvbGxpc2lvblJpZ2h0ID0gKHRhcmdldExlZnQgKyBlbGVtZW50UmVjdC53aWR0aCkgPiBjb2xSZWN0LndpZHRoLFxuICAgICAgICAgICAgY2xhc3NMaXN0ID0gZWxlbWVudFRvUG9zaXRpb24uY2xhc3NMaXN0O1xuXG4gICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoQ09MX1JJR0hUX0NMQVNTKTtcbiAgICAgICAgY2xhc3NMaXN0LnJlbW92ZShDT0xfTEVGVF9DTEFTUyk7XG4gICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoQ09MX0JPVFRPTV9DTEFTUyk7XG5cbiAgICAgICAgbGV0IGNhbGNUb3AsIGNhbGNMZWZ0O1xuICAgICAgICBpZiAoaXNDb2xsaXNpb25MZWZ0ICYmICFpc0NvbGxpc2lvblJpZ2h0KSB7XG4gICAgICAgICAgICAvLyBwdXQgZWxlbWVudCB0byBsZWZ0IGlmIGNvbGxpc2lvbiB3aXRoIGxlZnRcbiAgICAgICAgICAgIGNhbGNMZWZ0ID0gKHRhcmdldFBvc2l0aW9uLmxlZnQgLSBjb2xSZWN0LmxlZnQgLSBhbW91bnRMZWZ0KSArICdweCc7XG4gICAgICAgICAgICBjbGFzc0xpc3QuYWRkKENPTF9MRUZUX0NMQVNTKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG1heWJlIGNlbnRlciBpZiBubyBjb2xsaXNpb24gd2l0aCBlaXRoZXIgc2lkZVxuICAgICAgICAgICAgdmFyIHJpZ2h0UG9zaXRpb24gPSAodGFyZ2V0UmlnaHQgLSBlbGVtZW50UmVjdC53aWR0aCAtIGNvbFJlY3QubGVmdCAtIGFtb3VudExlZnQpICsgJ3B4JyxcbiAgICAgICAgICAgICAgICBsZWZ0Q2VudGVyZWQgPSAoKHRhcmdldExlZnQgKyB0YXJnZXRQb3NpdGlvbi53aWR0aCAvIDIpIC1cbiAgICAgICAgICAgICAgICAgICAgKGVsZW1lbnRSZWN0LndpZHRoIC8gMikgfHwgMCkgLSBjb2xSZWN0LmxlZnQsXG4gICAgICAgICAgICAgICAgY29sbGlzaW9uQ2VudGVyZWQgPSAobGVmdENlbnRlcmVkICsgZWxlbWVudFJlY3Qud2lkdGgpID4gY29sUmVjdC53aWR0aDtcbiAgICAgICAgICAgIGlmIChjZW50ZXJIb3Jpem9udGFsICYmICFjb2xsaXNpb25DZW50ZXJlZCkge1xuICAgICAgICAgICAgICAgIGNhbGNMZWZ0ID0gbGVmdENlbnRlcmVkICsgJ3B4JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xhc3NMaXN0LmFkZChDT0xfUklHSFRfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIGNhbGNMZWZ0ID0gcmlnaHRQb3NpdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0NvbGxpc2lvbkJvdHRvbSB8fCAocG9zaXRpb25Ub3AgJiYgIWlzQ29sbGlzaW9uVG9wKSkge1xuICAgICAgICAgICAgLy8gUHV0IEVsZW1lbnQgb24gdG9wIGlmIGNvbGxpc2lvblxuICAgICAgICAgICAgY2FsY1RvcCA9ICh0YXJnZXRUb3AgLSBlbGVtZW50UmVjdC5oZWlnaHQpIC0gY29sUmVjdC50b3AgKyAncHgnO1xuICAgICAgICAgICAgY2xhc3NMaXN0LmFkZChDT0xfQk9UVE9NX0NMQVNTKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbGNUb3AgPSAodGFyZ2V0VG9wICsgdGFyZ2V0UG9zaXRpb24uaGVpZ2h0KSAtIGNvbFJlY3QudG9wICsgJ3B4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnRUb1Bvc2l0aW9uLnN0eWxlLmNzc1RleHQgPSBgdG9wOiR7Y2FsY1RvcH07bGVmdDoke2NhbGNMZWZ0fTtgO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50VG9Qb3NpdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCcmluZ3MgYSBnaXZlbiBlbGVtZW50IGludG8gdmlld3BvcnRcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7aW50fGZ1bmN0aW9ufVtvcHRpb25hbE9mZnNldF1cbiAgICAgKi9cbiAgICBzdGF0aWMgc2Nyb2xsVG9FbGVtZW50KGVsLCBvcHRpb25hbE9mZnNldCkge1xuICAgICAgICBlbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAvLyBvcHRpb25hbGx5IHVzZSBhIGFkZGl0aW9uYWwgc2Nyb2xsRGlmXG4gICAgICAgIGlmIChvcHRpb25hbE9mZnNldCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25hbE9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbmFsT2Zmc2V0ID0gb3B0aW9uYWxPZmZzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbE9mZnNldCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxlZFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbGVkWSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIHNjcm9sbGVkWSAtIG9wdGlvbmFsT2Zmc2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */
	
	'use strict';
	
	/**
	 * Provides a Basic Widget
	 */
	
	var _createClass = __webpack_require__(34)['default'];
	
	var _classCallCheck = __webpack_require__(37)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var DestroyableWidget = (function () {
	    function DestroyableWidget() {
	        _classCallCheck(this, DestroyableWidget);
	
	        this.listeners = [];
	    }
	
	    /**
	     * Destroys a Widget
	     */
	
	    _createClass(DestroyableWidget, [{
	        key: 'destroy',
	        value: function destroy() {
	            this.listeners.forEach(function (listener) {
	                listener.element.removeEventListener.apply(listener.element, listener.args);
	            });
	            this.listeners = [];
	        }
	
	        /**
	         * Adds an event and registers it later to remove bindings
	         * @param {HTMLElement} element
	         * @param {String} name
	         * @param {Function} listener
	         * @param {boolean} [capture]
	         * @returns {Function}
	         */
	    }, {
	        key: 'addEventListener',
	        value: function addEventListener(element, name, listener, capture) {
	            this.listeners.push({
	                element: element,
	                args: [name, listener, capture]
	            });
	            element.addEventListener(name, listener, capture);
	            return listener;
	        }
	    }]);
	
	    return DestroyableWidget;
	})();
	
	exports['default'] = DestroyableWidget;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL0Rlc3Ryb3lhYmxlV2lkZ2V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lBS1EsaUJBQWlCO0FBRXZCLGFBRk0saUJBQWlCLEdBRXBCOzhCQUZHLGlCQUFpQjs7QUFHOUIsWUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDdkI7Ozs7OztpQkFKZ0IsaUJBQWlCOztlQVMzQixtQkFBRztBQUNOLGdCQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVEsRUFBSztBQUNqQyx3QkFBUSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDL0UsQ0FBQyxDQUFDO0FBQ0gsZ0JBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1NBQ3ZCOzs7Ozs7Ozs7Ozs7ZUFVZSwwQkFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDL0MsZ0JBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO0FBQ2hCLHVCQUFPLEVBQUUsT0FBTztBQUNoQixvQkFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7YUFDbEMsQ0FBQyxDQUFDO0FBQ0gsbUJBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2xELG1CQUFPLFFBQVEsQ0FBQztTQUNuQjs7O1dBL0JnQixpQkFBaUI7OztxQkFBakIsaUJBQWlCIiwiZmlsZSI6Ii9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL0Rlc3Ryb3lhYmxlV2lkZ2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBEYXZpZCBIZWlkcmljaCwgQm93bGluZ1ggPG1lQGJvd2xpbmd4LmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBQcm92aWRlcyBhIEJhc2ljIFdpZGdldFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXN0cm95YWJsZVdpZGdldCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyBhIFdpZGdldFxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgICBsaXN0ZW5lci5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkobGlzdGVuZXIuZWxlbWVudCwgbGlzdGVuZXIuYXJncyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gZXZlbnQgYW5kIHJlZ2lzdGVycyBpdCBsYXRlciB0byByZW1vdmUgYmluZGluZ3NcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NhcHR1cmVdXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoZWxlbWVudCwgbmFtZSwgbGlzdGVuZXIsIGNhcHR1cmUpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICAgICAgYXJnczogW25hbWUsIGxpc3RlbmVyLCBjYXB0dXJlXVxuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgIH1cblxufSJdfQ==

/***/ },
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _Tooltip = __webpack_require__(97);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	exports['default'] = _Tooltip2['default'];
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL21vZHVsZXMvVG9vbHRpcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7O3VCQUVPLFNBQVMiLCJmaWxlIjoiL1VzZXJzL2Jvd2xpbmd4L1Byb2pla3RlL2ZsZXhjc3Mvbm9kZV9tb2R1bGVzL2VzbGludC1sb2FkZXIvaW5kZXguanMhL1VzZXJzL2Jvd2xpbmd4L1Byb2pla3RlL2ZsZXhjc3Mvc3JjL21haW4vbW9kdWxlcy9Ub29sdGlwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgVG9vbHRpcCBmcm9tICdUb29sdGlwJztcblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcDtcbiJdfQ==

/***/ },
/* 114 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;
//# sourceMappingURL=../maps/tooltip.map