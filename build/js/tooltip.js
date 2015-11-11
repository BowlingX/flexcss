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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(24);
	module.exports = __webpack_require__(25);


/***/ },

/***/ 10:
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
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Util = __webpack_require__(11);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _DestroyableWidget2 = __webpack_require__(12);
	
	var _DestroyableWidget3 = _interopRequireDefault(_DestroyableWidget2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	
	        /**
	         * The Container where possible events are captured
	         */
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tooltip).call(this));
	
	        _this.container = DelegateContainer instanceof HTMLElement ? DelegateContainer : doc.getElementById(DelegateContainer);
	
	        if (!_this.container) {
	            throw 'Could not create Tooltip, DelegateContainer not found';
	        }
	
	        /**
	         * The Container where tooltips are stored for this instance
	         * @type {HTMLElement}
	         */
	        _this.tooltipContainer = null;
	
	        /**
	         * Default Options
	         */
	        _this.options = {
	            containerClass: '',
	            selectorAttribute: 'data-tooltip'
	        };
	
	        Object.assign(_this.options, options || {});
	        return _this;
	    }
	
	    /**
	     * Creates and shows a tooltip
	     * @param {HTMLElement} target where is this tooltip positioned
	     * @param {String} text text content in tooltip, will be NOT escaped
	     * @param {Boolean} [removeTitle] removes title element if given
	     * @param {Node} [positionRelative]
	     */
	
	    _createClass(Tooltip, [{
	        key: 'createTooltip',
	        value: function createTooltip(target, text, removeTitle, positionRelative) {
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
	
	            _Util2.default.setupPositionNearby(positionRelative || target, tooltipContainer, this.container, true, true);
	
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
	})(_DestroyableWidget3.default);
	
	exports.default = Tooltip;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 11:
/***/ function(module, exports) {

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
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	         * @return Function created listener
	         */
	
	    }, {
	        key: "addEventOnce",
	        value: function addEventOnce(ev, target, func, capture) {
	            var thisFunction = function thisFunction(event) {
	                func(event, func);
	                target.removeEventListener(ev, thisFunction, capture);
	            };
	            target.addEventListener(ev, thisFunction, capture);
	            return thisFunction;
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
	         * @param {HTMLElement|ClientRect} target the target container to align to
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
	
	            var targetPosition = target instanceof HTMLElement ? target.getBoundingClientRect() : target,
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
	
	exports.default = Util;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 12:
/***/ function(module, exports) {

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
	
	'use strict'
	
	/**
	 * Provides a Basic Widget
	 */
	;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	
	exports.default = DestroyableWidget;

/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Tooltip = __webpack_require__(10);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Tooltip2.default;

/***/ },

/***/ 25:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ })
});
;
//# sourceMappingURL=../maps/tooltip.map