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

	module.exports = __webpack_require__(111);


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
/* 8 */
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
	 * FlexCss.Form
	 * Licensed under the MIT License (MIT)
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 */
	
	'use strict';
	
	/*global HTMLFormElement, fetch, FormData, clearTimeout, NodeList*/
	
	var _get = __webpack_require__(9)['default'];
	
	var _inherits = __webpack_require__(23)['default'];
	
	var _createClass = __webpack_require__(34)['default'];
	
	var _classCallCheck = __webpack_require__(37)['default'];
	
	var _Promise = __webpack_require__(38)['default'];
	
	var _Object$assign = __webpack_require__(79)['default'];
	
	var _Array$from = __webpack_require__(85)['default'];
	
	var _Object$keys = __webpack_require__(88)['default'];
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	var _defaults = __webpack_require__(91)['default'];
	
	var _interopExportWildcard = __webpack_require__(96)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _Tooltip = __webpack_require__(97);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _utilEvent = __webpack_require__(100);
	
	var _utilEvent2 = _interopRequireDefault(_utilEvent);
	
	var _utilUtil = __webpack_require__(98);
	
	var _utilUtil2 = _interopRequireDefault(_utilUtil);
	
	var _utilSettings = __webpack_require__(101);
	
	var _utilSettings2 = _interopRequireDefault(_utilSettings);
	
	var _DestroyableWidget2 = __webpack_require__(99);
	
	var _DestroyableWidget3 = _interopRequireDefault(_DestroyableWidget2);
	
	var _isomorphicFetch = __webpack_require__(102);
	
	_defaults(exports, _interopExportWildcard(_isomorphicFetch, _defaults));
	
	var LOADING_CLASS = 'loading';
	var DATA_ELEMENT_INVALID = 'data-flexcss-invalid';
	var REMOTE = 'data-remote';
	var REMOTE_ACTION = 'data-remote-action';
	var ATTR_DISABLE_INLINE = 'data-disable-inline-validation';
	var ATTR_DISABLE_REALTIME = 'data-disable-realtime-validation';
	var ATTR_VALIDATOR = 'data-validate';
	var ATTR_DATA_CUSTOM_MESSAGE = 'data-validation-message';
	var ATTR_DATA_CUSTOM_LABEL = 'data-custom-label';
	var ATTR_VALIDATE_VISIBILITY = 'data-validate-visibility';
	var ATTR_ERROR_TARGET_ID = 'data-error-target';
	var ATTR_DEPENDS = 'data-depends-selector';
	var CONST_USE_JSON = 'json';
	var CONST_REALTIME_EVENT = 'input';
	var FOCUS_TOOLTIP_DELAY = 20;
	var CLICK_TOOLTIP_DELAY = 150;
	/**
	 * Triggered when form is fully initialized and handlers are binded
	 * @type {string}
	 */
	var EVENT_FORM_READY = 'flexcss.form.ready';
	exports.EVENT_FORM_READY = EVENT_FORM_READY;
	/**
	 * Fires when a form is submitted, cancelable
	 * @type {string}
	 */
	var EVENT_FORM_SUBMIT = 'flexcss.form.submit';
	exports.EVENT_FORM_SUBMIT = EVENT_FORM_SUBMIT;
	/**
	 * Fired directly after the form has been submitted via ajax
	 * @type {string}
	 */
	var EVENT_FORM_AFTER_AJAX_SUBMIT = 'flexcss.form.afterAjaxSubmit';
	exports.EVENT_FORM_AFTER_AJAX_SUBMIT = EVENT_FORM_AFTER_AJAX_SUBMIT;
	/**
	 * Fired when ajax events did complete
	 * @type {string}
	 */
	var EVENT_FORM_AJAX_COMPLETED = 'flexcss.form.ajaxCompleted';
	
	exports.EVENT_FORM_AJAX_COMPLETED = EVENT_FORM_AJAX_COMPLETED;
	/**
	 * A HTML5 Form Validation replacement
	 */
	
	var Form = (function (_DestroyableWidget) {
	    _inherits(Form, _DestroyableWidget);
	
	    /**
	     * @param {HTMLElement} form
	     * @param [options] optional options
	     */
	
	    function Form(form, options) {
	        _classCallCheck(this, Form);
	
	        _get(Object.getPrototypeOf(Form.prototype), 'constructor', this).call(this);
	
	        if (!(form instanceof HTMLFormElement)) {
	            throw 'argument {0} form needs to be an form element';
	        }
	
	        /**
	         * The Form
	         * @type {HTMLElement}
	         */
	        this.form = form;
	
	        /**
	         * @type {Tooltip}
	         */
	        this.tooltips = null;
	
	        /**
	         * @type {Promise}
	         */
	        this.currentValidationFuture = new _Promise(function () {});
	
	        /**
	         * Default options
	         * @type {Object}
	         */
	        this.options = {
	            // if true creates tooltips above element, uses FlexCss Tooltips
	            createTooltips: true,
	            // if true appends error message after input element
	            appendError: false,
	            // type of ajax submit
	            ajaxSubmitType: 'POST',
	            // json content type if ajax method is set to json
	            ajaxJsonContentType: 'application/json; charset=utf-8',
	            // allow inline validation
	            inlineValidation: true,
	            // validate in realtime (on `input` event)
	            realtime: true,
	            // timeout when realtime event should be captured
	            realtimeTimeout: 250,
	            // formatting method for an error
	            formatErrorTooltip: function formatErrorTooltip(error) {
	                return '<i class="icon-attention"></i> ' + error;
	            },
	            // the class that will be put on the element to mark it failed validation
	            inputErrorClass: 'invalid',
	            // the container class for error messages below an element
	            containerErrorClass: 'form-error',
	            // additional options for fetch
	            fetchOptions: {
	                credentials: 'include'
	            },
	            // the container for tooltips
	            tooltipContainer: form,
	            // if you have a fixed header, either set a number or function here
	            scrollToElementDiff: 0
	        };
	
	        // overwrite default options
	        _Object$assign(this.options, options);
	
	        // apply settings from attributes
	        _utilUtil2['default'].applyOptionsFromElement(form, this.options);
	
	        // set form class as widget
	        // Forms are very different to classical widgets,
	        // we will not use our base widget class for this but just self
	        form.hfWidgetInstance = this;
	
	        /**
	         * A List of Validators
	         * @type {Object}
	         * @private
	         */
	        this._validators = Form.globalValidators;
	
	        /**
	         * @type {Function}
	         * @private
	         */
	        this._remoteValidationFunction = null;
	
	        this.initFormValidation();
	    }
	
	    /**
	     * Global validators
	     * @type {Array}
	     */
	
	    _createClass(Form, [{
	        key: 'destroy',
	        value: function destroy() {
	            _get(Object.getPrototypeOf(Form.prototype), 'destroy', this).call(this);
	            if (this.tooltips) {
	                this.tooltips.destroy();
	            }
	        }
	
	        /**
	         * Submits this form, either via ajax or just classical (default)
	         * @param {HTMLFormElement} thisForm
	         * @param {Event} e
	         * @private
	         * @returns {Promise|boolean} returns false if submit is cancled
	         */
	    }, {
	        key: '_submitFunction',
	        value: function _submitFunction(thisForm, e) {
	            var shouldUseAjax = thisForm.getAttribute(REMOTE),
	                ajaxPostUrl = thisForm.getAttribute(REMOTE_ACTION) || thisForm.getAttribute('action') || window.location.href,
	                useJson = CONST_USE_JSON === shouldUseAjax,
	                self = this;
	
	            var ev = _utilEvent2['default'].dispatch(thisForm, EVENT_FORM_SUBMIT).withOriginal(e).fire();
	
	            // abort execution is event was prevented
	            if (ev.defaultPrevented) {
	                self._formStopLoading();
	                return false;
	            }
	
	            if (shouldUseAjax === null) {
	                // submit
	                return thisForm.submit();
	            }
	            // prevent form from submit normally
	            e.preventDefault();
	
	            // add information that this is an XMLHttpRequest request (used by some frameworks)
	            var defaultHeaders = {
	                'X-Requested-With': 'XMLHttpRequest'
	            };
	
	            // setup default headers
	            if (useJson) {
	                _Object$assign(defaultHeaders, {
	                    'Content-Type': this.options.ajaxJsonContentType
	                });
	            }
	            var defaultOptions = _Object$assign(this.options.fetchOptions, {
	                headers: defaultHeaders,
	                method: this.options.ajaxSubmitType
	            });
	
	            // support either JSON request payload or normal payload submission
	            var serverCall = useJson ? fetch(ajaxPostUrl, _Object$assign(defaultOptions, {
	                body: JSON.stringify(this.serialize())
	            })) : fetch(ajaxPostUrl, _Object$assign(defaultOptions, {
	                body: new FormData(thisForm)
	            }));
	
	            _utilEvent2['default'].dispatch(thisForm, EVENT_FORM_AFTER_AJAX_SUBMIT).withOriginal(e).fire();
	
	            return serverCall.then(function (r) {
	                (self._remoteValidationFunction || Form.globalRemoteValidationFunction).apply(self, [r]);
	
	                _utilEvent2['default'].dispatch(thisForm, EVENT_FORM_AJAX_COMPLETED).withOriginal(e).withDetail({ response: r }).fire();
	                // always remove error class
	                self._formStopLoading();
	            });
	        }
	
	        /**
	         * Serializes a form to a json object
	         * @returns {Object}
	         */
	    }, {
	        key: 'serialize',
	        value: function serialize() {
	            var selectors = ['input[name]:not([type="radio"]):enabled', 'input[type="radio"][name]:checked', 'select[name]:enabled', 'textarea[name]:enabled'],
	                inputs = this.form.querySelectorAll(selectors.join(',')),
	                result = {};
	
	            Array.prototype.forEach.call(inputs, function (input) {
	                var exists = result[input.name],
	                    value = input.value;
	                if (exists instanceof Array) {
	                    exists.push(value);
	                } else if (exists) {
	                    result[input.name] = [result[input.name], value];
	                } else {
	                    result[input.name] = value;
	                }
	            });
	
	            return result;
	        }
	
	        /**
	         * Handles the chain of validation on given fields
	         *
	         * @param {HTMLElement|Array|NodeList} field
	         * @param [focus] optional focus first error
	         * @returns {Promise}
	         */
	    }, {
	        key: 'handleValidation',
	        value: function handleValidation(field, focus) {
	            var _this = this;
	
	            var fields = field instanceof Array || field instanceof NodeList ? field : [field];
	            return this._handleValidation(fields, focus, true).then((function (r) {
	                if (!r.foundAnyError) {
	                    // remove tooltips
	                    if (_this.tooltips) {
	                        _this.tooltips.removeTooltip();
	                    }
	                }
	                return r;
	            }).bind(this));
	        }
	
	        /**
	         * Handles errors on given node list
	         * @param {NodeList} toValidateFields
	         * @param {boolean} focus
	         * @param {boolean} scoped if true, will only validate the fields `invalidFields`
	         * @returns {Promise}
	         * @private
	         */
	    }, {
	        key: '_handleValidation',
	        value: function _handleValidation(toValidateFields, focus, scoped) {
	            var self = this;
	            var arr = Form._createArrayFromInvalidFieldList(toValidateFields),
	                isLocalInvalid = arr.length > 0;
	            // focus must appear in the same frame for iOS devices
	            if (isLocalInvalid && focus) {
	                self._focusElement(arr[0]);
	            }
	            var validation = scoped ? this._customValidationsForElements(toValidateFields) : self.validateCustomFields();
	            return validation.then(function (r) {
	                if (isLocalInvalid) {
	                    // combine browser and custom validators
	                    r.foundAnyError = true;
	                }
	                // get a unique field list of all fields that need to be checked and rendered
	                // it's possible that we have duplicates in non scoped mode
	                var thisToValidateFields = scoped ? toValidateFields : _Array$from(arr).concat(r.checkedFields);
	                r.checkedFields = thisToValidateFields;
	                var foundInvalidFields = self.prepareErrors(thisToValidateFields, false),
	                    firstInvalidField = foundInvalidFields[0];
	                if (firstInvalidField) {
	                    if (focus) {
	                        self._focusElement(firstInvalidField);
	                        // if element could not be focused:
	                        if (document.activeElement !== firstInvalidField) {
	                            self._handleTooltipHideClickAfterChange();
	                        }
	                    } else {
	                        self._handleTooltipHideClickAfterChange();
	                    }
	                    self.showAndOrCreateTooltip(firstInvalidField);
	                }
	                return r;
	            });
	        }
	
	        /**
	         * @param {HTMLElement} field
	         * @param {ValidityState} validity
	         * @returns {*}
	         * @private
	         */
	
	    }, {
	        key: '_setupErrorMessages',
	        value: function _setupErrorMessages(field, validity) {
	            return Form.globalErrorMessageHandler ? Form.globalErrorMessageHandler.apply(this, [field, validity]) : false;
	        }
	
	        /**
	         * Handles class labels for elements
	         * @param {Object} fields
	         * @private
	         */
	    }, {
	        key: '_handleLabels',
	        value: function _handleLabels(fields) {
	            _Object$keys(fields).forEach((function (id) {
	                var labels = this.getForm().querySelectorAll('[for="' + id + '"]'),
	                    invalid = fields[id];
	                if (labels.length) {
	                    for (var labelsIndex = 0; labelsIndex < labels.length; labelsIndex++) {
	                        var labelEl = labels[labelsIndex];
	                        // we can't use toggle attribute, not supported in IE
	                        if (invalid) {
	                            this._markElementInvalid(labelEl);
	                        } else {
	                            this._markElementValid(labelEl);
	                        }
	                    }
	                }
	            }).bind(this));
	        }
	
	        /**
	         * @param el
	         * @private
	         */
	    }, {
	        key: '_markElementInvalid',
	        value: function _markElementInvalid(el) {
	            el.setAttribute(DATA_ELEMENT_INVALID, "true");
	            el.classList.add(this.options.inputErrorClass);
	        }
	
	        /**
	         * @param el
	         * @private
	         */
	    }, {
	        key: '_markElementValid',
	        value: function _markElementValid(el) {
	            el.removeAttribute(DATA_ELEMENT_INVALID);
	            el.classList.remove(this.options.inputErrorClass);
	        }
	
	        /**
	         * A List of invalid elements (:invalid)
	         * @returns {Array}
	         * @private
	         */
	    }, {
	        key: '_getInvalidElements',
	        value: function _getInvalidElements() {
	            return Array.prototype.filter.call(this.getForm().querySelectorAll(":invalid"), function (r) {
	                return !(r instanceof HTMLFieldSetElement);
	            });
	        }
	
	        /**
	         * @param {HTMLElement} thisParent
	         * @private
	         */
	    }, {
	        key: '_removeElementErrors',
	        value: function _removeElementErrors(thisParent) {
	            var errors = thisParent.querySelectorAll('.' + this.options.containerErrorClass),
	                inputsWithErrorClasses = thisParent.querySelectorAll('[' + DATA_ELEMENT_INVALID + ']');
	            for (var elementErrorIndex = 0; elementErrorIndex < errors.length; elementErrorIndex++) {
	                errors[elementErrorIndex].parentNode.removeChild(errors[elementErrorIndex]);
	            }
	            for (var inputErrorIndex = 0; inputErrorIndex < inputsWithErrorClasses.length; inputErrorIndex++) {
	                var el = inputsWithErrorClasses[inputErrorIndex];
	                this._markElementValid(el);
	            }
	        }
	
	        /**
	         * Registers a custom validator
	         * @param {String} name
	         * @param {Function} validator a validation function should always return either a Future(true) or Future(false)
	         * even when the field has been invalidated with `setCustomValidity`, because of different browser `bugs`
	         * we can't rely on that
	         * @returns {Form}
	         */
	    }, {
	        key: 'registerValidator',
	        value: function registerValidator(name, validator) {
	            this._validators[name] = validator;
	            return this;
	        }
	
	        /**
	         * Runs async validation
	         * @param {String} validationRef
	         * @param {HTMLElement} field
	         * @returns {Promise}
	         * @private
	         */
	    }, {
	        key: '_runValidation',
	        value: function _runValidation(validationRef, field) {
	            if (!this._validators[validationRef]) {
	                throw 'Could not found validator: ' + validationRef;
	            }
	            var cl = field.classList,
	                future = this._validators[validationRef].apply(this, [field, this.form]);
	            cl.add(LOADING_CLASS);
	            future.then(function () {
	                cl.remove(LOADING_CLASS);
	            });
	            return future;
	        }
	
	        /**
	         * Run custom validations for elements, validations are done async do support XHR Requests or other stuff
	         *
	         * @param {Array|NodeList} fields
	         * @returns {Promise} contains either true if validations passed or false if something went wrong
	         * @private
	         */
	    }, {
	        key: '_customValidationsForElements',
	        value: function _customValidationsForElements(fields) {
	            var futures = [],
	                fieldsLength = fields.length,
	                checkedFields = [];
	            for (var iVal = 0; iVal < fieldsLength; iVal++) {
	                var field = fields[iVal],
	                    validationRef = field.getAttribute(ATTR_VALIDATOR),
	                    validity = field.validity;
	                if (this._validators[validationRef]) {
	                    // use local validation first and then continue with custom validations
	                    if (Form._shouldNotValidateField(field) || validity && !validity.customError && !validity.valid) {
	                        continue;
	                    }
	                    checkedFields.push(field);
	                    futures.push(this._runValidation(validationRef, field));
	                } else {
	                    if (validationRef) {
	                        console.warn('data-validate was set but no validator was found');
	                    }
	                }
	            }
	            return _Promise.all(futures).then(function (allFutures) {
	                var l = allFutures.length;
	                var result = {
	                    checkedFields: checkedFields,
	                    foundAnyError: false
	                };
	                for (var fI = 0; fI < l; fI++) {
	                    if (!allFutures[fI]) {
	                        result.foundAnyError = true;
	                        break;
	                    }
	                }
	                return result;
	            });
	        }
	
	        /**
	         * Remove all errors for this form
	         * @returns {Form}
	         */
	    }, {
	        key: 'removeErrors',
	        value: function removeErrors() {
	            this._removeElementErrors(this.form);
	            if (this.tooltips) {
	                this.tooltips.removeTooltip();
	            }
	            return this;
	        }
	
	        /**
	         * Will handle errors for given fields
	         * @param {Array|NodeList} fields
	         * @param {Boolean} removeAllErrors
	         */
	    }, {
	        key: 'prepareErrors',
	        value: function prepareErrors(fields, removeAllErrors) {
	            if (removeAllErrors) {
	                this.removeErrors();
	            }
	            var labelGroups = {},
	                invalidFields = [];
	
	            function handleAdditionalLabels(isInvalid, thisLabelGroup, field) {
	                var additionalLabels = field.getAttribute(ATTR_DATA_CUSTOM_LABEL) || field.id,
	                    group = thisLabelGroup[additionalLabels];
	                if (additionalLabels) {
	                    // check additionally if field is currently marked as invalid
	                    // so the label is not marked as error if no field is marked as one
	                    group = group ? group : isInvalid;
	                    thisLabelGroup[additionalLabels] = group;
	                }
	            }
	
	            // We save all validations in an extra property because we need to reset the validity due some
	            // implementation errors in other browsers then chrome
	            for (var i = 0; i < fields.length; i++) {
	                var field = fields[i],
	                    errorTarget = Form._findErrorTarget(field),
	                    _parent = errorTarget.parentNode,
	                    validity = field.validity,
	                    isInvalid = validity && !validity.valid;
	                if (Form._shouldNotValidateField(field)) {
	                    continue;
	                }
	                field.flexFormsSavedValidity = JSON.parse(JSON.stringify(validity));
	                handleAdditionalLabels(isInvalid, labelGroups, field);
	                if (isInvalid) {
	                    if (!removeAllErrors) {
	                        // Remove current errors:
	                        this._removeElementErrors(_parent);
	                    }
	                    // setup custom error messages:
	                    this._setupErrorMessages(field, validity);
	                    var msg = field.validationMessage;
	
	                    // mark fields as invalid
	                    this._markElementInvalid(errorTarget);
	                    this._markElementInvalid(field);
	
	                    if (this.options.appendError) {
	                        _parent.insertAdjacentHTML("beforeend", '<div class="' + this.options.containerErrorClass + '">' + msg + '</div>');
	                    }
	                    invalidFields.push(field);
	                    field.flexFormsSavedValidationMessage = msg;
	                } else {
	                    // restore invalid fields
	                    this._markElementValid(errorTarget);
	                    this._markElementValid(field);
	
	                    // cleanup
	                    delete field.flexFormsSavedValidationMessage;
	
	                    // remove error markup
	                    this._removeElementErrors(_parent);
	                }
	                // We have to reset the custom validity here to allow native validations work again
	                field.setCustomValidity('');
	            }
	            // if validates a single field we need to check the linked fields to a label:
	            if (fields.length === 1) {
	                var field = fields[0];
	                var id = field.getAttribute(ATTR_DATA_CUSTOM_LABEL) || field.id;
	                if (id) {
	                    var linkedFields = _Array$from(this.getForm().querySelectorAll('[' + ATTR_DATA_CUSTOM_LABEL + '="' + id + '"], #' + id));
	                    linkedFields.forEach((function (thisField) {
	                        var validity = thisField.validity,
	                            isInvalid = validity && !validity.valid && this._isElementInvalidElement(thisField);
	                        handleAdditionalLabels(isInvalid, labelGroups, thisField);
	                    }).bind(this));
	                }
	            }
	            this._handleLabels(labelGroups);
	            return invalidFields;
	        }
	
	        /**
	         * Validates all custom fields
	         * @returns {Promise}
	         */
	    }, {
	        key: 'validateCustomFields',
	        value: function validateCustomFields() {
	            return this._customValidationsForElements(this.form.querySelectorAll("[data-validate]"));
	        }
	
	        /**
	         * Tests if a field should be validated
	         * @param {HTMLElement} field
	         * @returns {boolean}
	         * @private
	         */
	    }, {
	        key: 'getForm',
	
	        /**
	         * This form
	         * @returns {HTMLElement}
	         */
	        value: function getForm() {
	            return this.form;
	        }
	
	        /**
	         * Registers a function that handles remote validation
	         * @param {Function} func
	         * @returns {Form}
	         */
	    }, {
	        key: 'registerRemoteValidation',
	        value: function registerRemoteValidation(func) {
	            this._remoteValidationFunction = func;
	            return this;
	        }
	
	        /**
	         * Formats the error content for the tooltip
	         * @param {String} error
	         * @returns {String}
	         * @private
	         */
	    }, {
	        key: '_formatErrorTooltip',
	        value: function _formatErrorTooltip(error) {
	            return this.options.formatErrorTooltip.apply(this, [error]);
	        }
	
	        /**
	         * Tries to find a custom error target on given target
	         * @param target
	         * @returns {HTMLElement}
	         * @private
	         */
	    }, {
	        key: 'showAndOrCreateTooltip',
	
	        /**
	         * Creates a tooltip at given element, will only create a new instance if not created
	         * @param {HTMLElement} target
	         * @param {Boolean} [remove]
	         */
	        value: function showAndOrCreateTooltip(target, remove) {
	            var self = this;
	            if (!this.tooltips && this.options.createTooltips) {
	                this.tooltips = new _Tooltip2['default'](this.options.tooltipContainer, {
	                    containerClass: 'error-tooltip'
	                });
	            }
	            if (!this.options.createTooltips) {
	                return false;
	            }
	
	            if (!target.flexFormsSavedValidity) {
	                return false;
	            }
	            var errorTarget = Form._findErrorTarget(target);
	            if (!target.flexFormsSavedValidity.valid && self._isElementInvalidElement(errorTarget)) {
	                self.tooltips.createTooltip(errorTarget, self._formatErrorTooltip(target.flexFormsSavedValidationMessage), false);
	                return true;
	            } else {
	                if (remove) {
	                    self.tooltips.removeTooltip();
	                }
	            }
	            return false;
	        }
	
	        /**
	         * Checks if element is marked as invalid
	         * @param {HTMLElement} el
	         * @returns {boolean}
	         * @private
	         */
	    }, {
	        key: '_isElementInvalidElement',
	        value: function _isElementInvalidElement(el) {
	            return el.hasAttribute(DATA_ELEMENT_INVALID);
	        }
	
	        /**
	         * Handles invalid event of a form
	         * @param {Event} e
	         * @returns {Promise|boolean}
	         * @private
	         */
	    }, {
	        key: '_checkIsInvalid',
	        value: function _checkIsInvalid(e) {
	            e.preventDefault();
	            var invalidFields = this.getForm().querySelectorAll(":invalid");
	            return this._handleValidation(invalidFields, true, false);
	        }
	
	        /**
	         * Will query dependent fields (by selector) that should be validated with given field
	         * @param field
	         * @returns {NodeList|[]}
	         * @private
	         */
	    }, {
	        key: '_getDependentFields',
	        value: function _getDependentFields(field) {
	            var fieldSelector = field.getAttribute(ATTR_DEPENDS),
	                base = [field];
	            if (fieldSelector) {
	                base.push.apply(base, Array.prototype.slice.apply(this.getForm().querySelectorAll(fieldSelector)));
	            }
	            return base;
	        }
	
	        /**
	         * @private
	         * @param {HTMLElement} [target]
	         */
	    }, {
	        key: '_handleTooltipInline',
	        value: function _handleTooltipInline(target) {
	            if (this.tooltips) {
	                this.tooltips.removeTooltip(target);
	            }
	        }
	
	        /**
	         * Initializes validation for a given form, registers event handlers
	         */
	    }, {
	        key: 'initFormValidation',
	        value: function initFormValidation() {
	            var _this2 = this;
	
	            // Suppress the default bubbles
	            var form = this.getForm(),
	                self = this,
	                invalidEvent = 'invalid';
	
	            /**
	             * Validates if is valid realtime element
	             * @param {HTMLElement} target
	             * @returns {boolean}
	             * @private
	             */
	            function _checkIsValidRealtimeElement(target) {
	                return !target.hasAttribute(ATTR_DISABLE_REALTIME) && !target.hasAttribute(ATTR_DISABLE_INLINE);
	            }
	
	            form.addEventListener(invalidEvent, function (e) {
	                e.preventDefault();
	            }, true);
	
	            _utilUtil2['default'].addEventOnce(invalidEvent, form, function handleInvalid(e) {
	                self._formLoading();
	                var result = self._checkIsInvalid(e);
	                if (result) {
	                    self.currentValidationFuture = new _Promise(function (resolve) {
	                        result.then(function (r) {
	                            setTimeout(function () {
	                                _utilUtil2['default'].addEventOnce(invalidEvent, form, handleInvalid, true);
	                            }, 0);
	                            resolve(r);
	                            self._formStopLoading();
	                            if (!r.foundAnyError) {
	                                self._formLoading();
	                                self._handleSubmit(e);
	                            }
	                        });
	                    });
	                }
	            }, true);
	
	            this.addEventListener(form, 'reset', function () {
	                _this2.removeErrors();
	            });
	
	            // Timeout for keys:
	            var TIMEOUT_KEYDOWN,
	                KEYDOWN_RUNNING = false;
	
	            // resets keydown events
	            function clearKeyDownTimeout() {
	                KEYDOWN_RUNNING = false;
	                clearTimeout(TIMEOUT_KEYDOWN);
	            }
	
	            // setup custom realtime event if given
	            if (self.options.realtime) {
	                this.addEventListener(form, CONST_REALTIME_EVENT, function (e) {
	                    if (self._formIsLoading()) {
	                        return;
	                    }
	                    var target = e.target;
	                    clearTimeout(TIMEOUT_KEYDOWN);
	                    if (KEYDOWN_RUNNING) {
	                        return;
	                    }
	                    TIMEOUT_KEYDOWN = setTimeout(function () {
	                        var isStillTarget = document.activeElement === e.target;
	                        if (!_checkIsValidRealtimeElement(target)) {
	                            return;
	                        }
	                        if (isStillTarget) {
	                            self._handleTooltipInline();
	                        }
	                        KEYDOWN_RUNNING = true;
	                        var dependentFields = self._getDependentFields(target);
	                        self._customValidationsForElements(dependentFields).then(function () {
	                            self.prepareErrors(dependentFields, false);
	                            if (isStillTarget) {
	                                self.showAndOrCreateTooltip(e.target);
	                            }
	                            // future must be resolved before another event can be started
	                            KEYDOWN_RUNNING = false;
	                        });
	                    }, self.options.realtimeTimeout);
	                }, true);
	            }
	
	            /**
	             * Validates if target is a valid input field to check blur and focus events
	             *
	             * @param {HTMLElement} target
	             * @returns {boolean}
	             * @private
	             */
	            function _checkIsValidBlurFocusElement(target) {
	                var attr = target.getAttribute("type");
	                return attr !== "radio" && attr !== "checkbox" && attr !== "submit";
	            }
	
	            /**
	             * Validates if is valid inline-check element
	             * @param {HTMLElement} target
	             * @returns {boolean}
	             * @private
	             */
	            function _checkIsValidInlineCheckElement(target) {
	                return !target.hasAttribute(ATTR_DISABLE_INLINE);
	            }
	
	            this.addEventListener(form, 'blur', function (e) {
	                // do not hide tooltip after change event
	                if (!e.target.flexcssKeepTooltips) {
	                    self._handleTooltipInline(e.target);
	                }
	                delete e.target.flexcssKeepTooltips;
	            }, true);
	
	            // handle focus on input elements
	            // will show an error if field is invalid
	            this.addEventListener(form, "focus", function (e) {
	                if (self._formIsLoading()) {
	                    return;
	                }
	                // do not track errors for checkbox and radios on focus:
	                if (!_checkIsValidBlurFocusElement(e.target)) {
	                    return;
	                }
	                // we need to delay this a little, because Firefox and Safari do not show a tooltip after it
	                // just have been hidden (on blur). Maybe fix this with a queue later
	                setTimeout(function () {
	                    self.showAndOrCreateTooltip(e.target);
	                }, FOCUS_TOOLTIP_DELAY);
	            }, true);
	
	            if (self.options.inlineValidation) {
	                // Handle change for checkbox, radios and selects
	                this.addEventListener(form, "change", function (e) {
	                    var target = e.target;
	                    if (self._formIsLoading() || !_checkIsValidInlineCheckElement(target)) {
	                        return;
	                    }
	                    clearKeyDownTimeout();
	                    var name = target.getAttribute('name');
	                    var inputs = name ? form.querySelectorAll('[name="' + name + '"]') : [target];
	                    // we only support dependent fields for a single widgets right now
	                    if (inputs.length === 1) {
	                        inputs = self._getDependentFields(target);
	                    }
	                    self._customValidationsForElements(inputs).then(function () {
	                        self.prepareErrors(inputs, false);
	                        target.flexcssKeepTooltips = self.showAndOrCreateTooltip(target, true);
	                        if (target.flexcssKeepTooltips) {
	                            self._handleTooltipHideClickAfterChange();
	                        }
	                    });
	                });
	            }
	
	            // prevent default if form is invalid
	            this.addEventListener(form, "submit", function listener(e) {
	                self._submitListener(e, listener);
	            });
	
	            _utilEvent2['default'].dispatchAndFire(form, EVENT_FORM_READY);
	        }
	
	        /* Loading states, unfortunately we can't check if a promise is pending :/*/
	        /* TODO: Maybe wrap promise to extend this functionality */
	
	    }, {
	        key: '_formLoading',
	        value: function _formLoading() {
	            this.getForm().classList.add(LOADING_CLASS);
	        }
	    }, {
	        key: '_formStopLoading',
	        value: function _formStopLoading() {
	            this.getForm().classList.remove(LOADING_CLASS);
	        }
	    }, {
	        key: '_formIsLoading',
	        value: function _formIsLoading() {
	            return this.getForm().classList.contains(LOADING_CLASS);
	        }
	
	        // this defines the logic after a change event when a tooltip is shown
	        // because we call this method inside the change event, the click would be immeditally executed with the change
	        // event when not using setTimeout(). There might be another solution for this...
	    }, {
	        key: '_handleTooltipHideClickAfterChange',
	        value: function _handleTooltipHideClickAfterChange() {
	            var self = this;
	            if (this.options.createTooltips) {
	                setTimeout(function () {
	                    _utilUtil2['default'].addEventOnce(_utilSettings2['default'].getTabEvent(), global.document.body, function (t) {
	                        if (!self._isElementInvalidElement(t.target)) {
	                            self._handleTooltipInline();
	                        }
	                    });
	                }, CLICK_TOOLTIP_DELAY);
	            }
	        }
	    }, {
	        key: '_focusElement',
	        value: function _focusElement(el) {
	            el.focus();
	            _utilUtil2['default'].scrollToElement(el, this.options.scrollToElementDiff);
	        }
	
	        /**
	         * Listener that is executed on form submit
	         * @param e
	         * @param submitListener
	         * @returns {boolean}
	         * @private
	         */
	    }, {
	        key: '_submitListener',
	        value: function _submitListener(e, submitListener) {
	
	            var form = this.getForm(),
	                self = this,
	                submitEvent = 'submit';
	
	            if (this._formIsLoading()) {
	                e.preventDefault();
	                return false;
	            }
	            this._formLoading();
	            form.removeEventListener(submitEvent, submitListener);
	            this.removeErrors();
	            e.preventDefault();
	            // reset:
	            if (form.checkValidity()) {
	                form.addEventListener(submitEvent, submitListener);
	                // It's possible that the form is valid but the custom validations need to be checked again:
	                self.currentValidationFuture = new _Promise(function (resolve) {
	                    var validation = self.validateCustomFields();
	                    validation.then(function (r) {
	                        // because custom validators may mark multiple fields as invalid, we get all of them in the form
	                        var fields = self._getInvalidElements(),
	                            errors = self.prepareErrors(fields, false),
	                            firstError = errors[0];
	                        if (firstError) {
	                            self._focusElement(firstError);
	                            self.showAndOrCreateTooltip(firstError, true);
	                        }
	                        resolve(r);
	                    });
	                });
	                self.currentValidationFuture.then(function (r) {
	                    if (!r.foundAnyError) {
	                        // Handle submitting the form to server:
	                        self._handleSubmit(e);
	                    } else {
	                        self._formStopLoading();
	                    }
	                });
	            } else {
	                self._formStopLoading();
	                form.addEventListener(submitEvent, submitListener);
	            }
	        }
	
	        /**
	         * Handles submitting, optionally allows to stop submitting
	         * @param e
	         * @private
	         */
	    }, {
	        key: '_handleSubmit',
	        value: function _handleSubmit(e) {
	            this._submitFunction(this.form, e);
	        }
	
	        /**
	         * Registers a global event Handler
	         * @param errorFunc
	         */
	    }], [{
	        key: '_shouldNotValidateField',
	        value: function _shouldNotValidateField(field) {
	            var target = Form._findErrorTarget(field);
	            return target instanceof HTMLFieldSetElement || target.hasAttribute(ATTR_VALIDATE_VISIBILITY) && !_utilUtil2['default'].isVisible(target);
	        }
	
	        /**
	         * Creates an array from a node list with invalid items
	         * This Method expicitly checks if field should not be validated so it can be used to foucs a field
	         * @param list
	         * @returns {Array}
	         * @private
	         */
	    }, {
	        key: '_createArrayFromInvalidFieldList',
	        value: function _createArrayFromInvalidFieldList(list) {
	            var arr = [];
	            for (var i = 0; i < list.length; ++i) {
	                var n = list[i];
	                if (n.validity && !n.validity.valid) {
	                    if (!Form._shouldNotValidateField(n)) {
	                        arr.push(n);
	                    }
	                }
	            }
	            return arr;
	        }
	    }, {
	        key: '_findErrorTarget',
	        value: function _findErrorTarget(target) {
	            var el = target.getAttribute(ATTR_ERROR_TARGET_ID) || target,
	                foundTarget = el instanceof HTMLElement ? el : global.document.getElementById(el);
	            if (!foundTarget) {
	                throw 'Given error target did not exsits:' + target;
	            }
	            return foundTarget;
	        }
	    }, {
	        key: 'registerErrorMessageHandler',
	        value: function registerErrorMessageHandler(errorFunc) {
	            Form.globalErrorMessageHandler = errorFunc;
	        }
	
	        /**
	         * Initialize forms for a specific selector
	         * @param {String} selector
	         * @param {Object} [options]
	         * @return {array.<Form>}
	         */
	    }, {
	        key: 'init',
	        value: function init(selector, options) {
	            var forms = selector instanceof HTMLElement ? selector.querySelectorAll('form') : document.querySelectorAll(selector),
	                instances = [];
	            for (var i = 0; i < forms.length; i++) {
	                instances.push(new Form(forms[i], options));
	            }
	            return instances;
	        }
	
	        /**
	         * Registers a global validator that is usable on all form instances
	         * @param {String} name
	         * @param {Function} validator
	         * @returns {Function}
	         */
	    }, {
	        key: 'registerValidator',
	        value: function registerValidator(name, validator) {
	            Form.globalValidators[name] = validator;
	            return Form;
	        }
	
	        /**
	         * Registers a global function that is called when a form should validate the response of a server
	         * @param {Function} func
	         * @returns {Form}
	         */
	    }, {
	        key: 'registerGlobalRemoteValidationFunction',
	        value: function registerGlobalRemoteValidationFunction(func) {
	            Form.globalRemoteValidationFunction = func;
	            return Form;
	        }
	    }]);
	
	    return Form;
	})(_DestroyableWidget3['default']);
	
	exports['default'] = Form;
	Form.globalValidators = [];
	
	/**
	 * Global Remote validation function
	 */
	Form.globalRemoteValidationFunction = function () {};
	
	/**
	 * Handles custom error messages extracts custom message by default
	 */
	Form.globalErrorMessageHandler = function (field, validity) {
	    if (!validity.customError) {
	        var customMsg = field.getAttribute(ATTR_DATA_CUSTOM_MESSAGE);
	        if (customMsg) {
	            field.setCustomValidity(customMsg);
	        }
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL0Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUtPLFNBQVM7Ozs7eUJBRVgsWUFBWTs7Ozt3QkFDYixXQUFXOzs7OzRCQUNQLGVBQWU7Ozs7a0NBQ04sbUJBQW1COzs7OytCQUpuQyxrQkFBa0I7Ozs7QUFNaEMsSUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDO0FBQ2hDLElBQU0sb0JBQW9CLEdBQUcsc0JBQXNCLENBQUM7QUFDcEQsSUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDO0FBQzdCLElBQU0sYUFBYSxHQUFHLG9CQUFvQixDQUFDO0FBQzNDLElBQU0sbUJBQW1CLEdBQUcsZ0NBQWdDLENBQUM7QUFDN0QsSUFBTSxxQkFBcUIsR0FBRyxrQ0FBa0MsQ0FBQztBQUNqRSxJQUFNLGNBQWMsR0FBRyxlQUFlLENBQUM7QUFDdkMsSUFBTSx3QkFBd0IsR0FBRyx5QkFBeUIsQ0FBQztBQUMzRCxJQUFNLHNCQUFzQixHQUFHLG1CQUFtQixDQUFDO0FBQ25ELElBQU0sd0JBQXdCLEdBQUcsMEJBQTBCLENBQUM7QUFDNUQsSUFBTSxvQkFBb0IsR0FBRyxtQkFBbUIsQ0FBQztBQUNqRCxJQUFNLFlBQVksR0FBRyx1QkFBdUIsQ0FBQztBQUM3QyxJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUM7QUFDOUIsSUFBTSxvQkFBb0IsR0FBRyxPQUFPLENBQUM7QUFDckMsSUFBTSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7QUFDL0IsSUFBTSxtQkFBbUIsR0FBRyxHQUFHLENBQUM7Ozs7O0FBS3pCLElBQU0sZ0JBQWdCLEdBQUcsb0JBQW9C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LENBQUMseUJBQXlCLEdBQUcsVUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFLO0FBQ2xELFFBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFO0FBQ3ZCLFlBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUM3RCxZQUFJLFNBQVMsRUFBRTtBQUNYLGlCQUFLLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdEM7S0FDSjtDQUNKLENBQUMiLCJmaWxlIjoiL1VzZXJzL2Jvd2xpbmd4L1Byb2pla3RlL2ZsZXhjc3Mvbm9kZV9tb2R1bGVzL2VzbGludC1sb2FkZXIvaW5kZXguanMhL1VzZXJzL2Jvd2xpbmd4L1Byb2pla3RlL2ZsZXhjc3Mvc3JjL21haW4vRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgRGF2aWQgSGVpZHJpY2gsIEJvd2xpbmdYIDxtZUBib3dsaW5neC5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiFcbiAqIEZsZXhDc3MuRm9ybVxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgRGF2aWQgSGVpZHJpY2gsIEJvd2xpbmdYIDxtZUBib3dsaW5neC5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbi8qZ2xvYmFsIEhUTUxGb3JtRWxlbWVudCwgZmV0Y2gsIEZvcm1EYXRhLCBjbGVhclRpbWVvdXQsIE5vZGVMaXN0Ki9cblxuaW1wb3J0IFRvb2x0aXAgZnJvbSAnVG9vbHRpcCc7XG5leHBvcnQgKiBmcm9tICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCBFdmVudCBmcm9tICd1dGlsL0V2ZW50JztcbmltcG9ydCBVdGlsIGZyb20gJ3V0aWwvVXRpbCc7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAndXRpbC9TZXR0aW5ncyc7XG5pbXBvcnQgRGVzdHJveWFibGVXaWRnZXQgZnJvbSAnRGVzdHJveWFibGVXaWRnZXQnO1xuXG5jb25zdCBMT0FESU5HX0NMQVNTID0gJ2xvYWRpbmcnO1xuY29uc3QgREFUQV9FTEVNRU5UX0lOVkFMSUQgPSAnZGF0YS1mbGV4Y3NzLWludmFsaWQnO1xuY29uc3QgUkVNT1RFID0gJ2RhdGEtcmVtb3RlJztcbmNvbnN0IFJFTU9URV9BQ1RJT04gPSAnZGF0YS1yZW1vdGUtYWN0aW9uJztcbmNvbnN0IEFUVFJfRElTQUJMRV9JTkxJTkUgPSAnZGF0YS1kaXNhYmxlLWlubGluZS12YWxpZGF0aW9uJztcbmNvbnN0IEFUVFJfRElTQUJMRV9SRUFMVElNRSA9ICdkYXRhLWRpc2FibGUtcmVhbHRpbWUtdmFsaWRhdGlvbic7XG5jb25zdCBBVFRSX1ZBTElEQVRPUiA9ICdkYXRhLXZhbGlkYXRlJztcbmNvbnN0IEFUVFJfREFUQV9DVVNUT01fTUVTU0FHRSA9ICdkYXRhLXZhbGlkYXRpb24tbWVzc2FnZSc7XG5jb25zdCBBVFRSX0RBVEFfQ1VTVE9NX0xBQkVMID0gJ2RhdGEtY3VzdG9tLWxhYmVsJztcbmNvbnN0IEFUVFJfVkFMSURBVEVfVklTSUJJTElUWSA9ICdkYXRhLXZhbGlkYXRlLXZpc2liaWxpdHknO1xuY29uc3QgQVRUUl9FUlJPUl9UQVJHRVRfSUQgPSAnZGF0YS1lcnJvci10YXJnZXQnO1xuY29uc3QgQVRUUl9ERVBFTkRTID0gJ2RhdGEtZGVwZW5kcy1zZWxlY3Rvcic7XG5jb25zdCBDT05TVF9VU0VfSlNPTiA9ICdqc29uJztcbmNvbnN0IENPTlNUX1JFQUxUSU1FX0VWRU5UID0gJ2lucHV0JztcbmNvbnN0IEZPQ1VTX1RPT0xUSVBfREVMQVkgPSAyMDtcbmNvbnN0IENMSUNLX1RPT0xUSVBfREVMQVkgPSAxNTA7XG4vKipcbiAqIFRyaWdnZXJlZCB3aGVuIGZvcm0gaXMgZnVsbHkgaW5pdGlhbGl6ZWQgYW5kIGhhbmRsZXJzIGFyZSBiaW5kZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBFVkVOVF9GT1JNX1JFQURZID0gJ2ZsZXhjc3MuZm9ybS5yZWFkeSc7XG4vKipcbiAqIEZpcmVzIHdoZW4gYSBmb3JtIGlzIHN1Ym1pdHRlZCwgY2FuY2VsYWJsZVxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEVWRU5UX0ZPUk1fU1VCTUlUID0gJ2ZsZXhjc3MuZm9ybS5zdWJtaXQnO1xuLyoqXG4gKiBGaXJlZCBkaXJlY3RseSBhZnRlciB0aGUgZm9ybSBoYXMgYmVlbiBzdWJtaXR0ZWQgdmlhIGFqYXhcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBFVkVOVF9GT1JNX0FGVEVSX0FKQVhfU1VCTUlUID0gJ2ZsZXhjc3MuZm9ybS5hZnRlckFqYXhTdWJtaXQnO1xuLyoqXG4gKiBGaXJlZCB3aGVuIGFqYXggZXZlbnRzIGRpZCBjb21wbGV0ZVxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEVWRU5UX0ZPUk1fQUpBWF9DT01QTEVURUQgPSAnZmxleGNzcy5mb3JtLmFqYXhDb21wbGV0ZWQnO1xuXG4vKipcbiAqIEEgSFRNTDUgRm9ybSBWYWxpZGF0aW9uIHJlcGxhY2VtZW50XG4gKi9cblxuZXhwb3J0IGRlZmF1bHRcbmNsYXNzIEZvcm0gZXh0ZW5kcyBEZXN0cm95YWJsZVdpZGdldCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybVxuICAgICAqIEBwYXJhbSBbb3B0aW9uc10gb3B0aW9uYWwgb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGZvcm0sIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBpZiAoIShmb3JtIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgJ2FyZ3VtZW50IHswfSBmb3JtIG5lZWRzIHRvIGJlIGFuIGZvcm0gZWxlbWVudCc7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIEZvcm1cbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge1Rvb2x0aXB9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRvb2x0aXBzID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge1Byb21pc2V9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmN1cnJlbnRWYWxpZGF0aW9uRnV0dXJlID0gbmV3IFByb21pc2UoKCkgPT4ge1xuICAgICAgICB9KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBvcHRpb25zXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAvLyBpZiB0cnVlIGNyZWF0ZXMgdG9vbHRpcHMgYWJvdmUgZWxlbWVudCwgdXNlcyBGbGV4Q3NzIFRvb2x0aXBzXG4gICAgICAgICAgICBjcmVhdGVUb29sdGlwczogdHJ1ZSxcbiAgICAgICAgICAgIC8vIGlmIHRydWUgYXBwZW5kcyBlcnJvciBtZXNzYWdlIGFmdGVyIGlucHV0IGVsZW1lbnRcbiAgICAgICAgICAgIGFwcGVuZEVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIHR5cGUgb2YgYWpheCBzdWJtaXRcbiAgICAgICAgICAgIGFqYXhTdWJtaXRUeXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAvLyBqc29uIGNvbnRlbnQgdHlwZSBpZiBhamF4IG1ldGhvZCBpcyBzZXQgdG8ganNvblxuICAgICAgICAgICAgYWpheEpzb25Db250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgICAgICAgICAgLy8gYWxsb3cgaW5saW5lIHZhbGlkYXRpb25cbiAgICAgICAgICAgIGlubGluZVZhbGlkYXRpb246IHRydWUsXG4gICAgICAgICAgICAvLyB2YWxpZGF0ZSBpbiByZWFsdGltZSAob24gYGlucHV0YCBldmVudClcbiAgICAgICAgICAgIHJlYWx0aW1lOiB0cnVlLFxuICAgICAgICAgICAgLy8gdGltZW91dCB3aGVuIHJlYWx0aW1lIGV2ZW50IHNob3VsZCBiZSBjYXB0dXJlZFxuICAgICAgICAgICAgcmVhbHRpbWVUaW1lb3V0OiAyNTAsXG4gICAgICAgICAgICAvLyBmb3JtYXR0aW5nIG1ldGhvZCBmb3IgYW4gZXJyb3JcbiAgICAgICAgICAgIGZvcm1hdEVycm9yVG9vbHRpcDogKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICc8aSBjbGFzcz1cImljb24tYXR0ZW50aW9uXCI+PC9pPiAnICsgZXJyb3I7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gdGhlIGNsYXNzIHRoYXQgd2lsbCBiZSBwdXQgb24gdGhlIGVsZW1lbnQgdG8gbWFyayBpdCBmYWlsZWQgdmFsaWRhdGlvblxuICAgICAgICAgICAgaW5wdXRFcnJvckNsYXNzOiAnaW52YWxpZCcsXG4gICAgICAgICAgICAvLyB0aGUgY29udGFpbmVyIGNsYXNzIGZvciBlcnJvciBtZXNzYWdlcyBiZWxvdyBhbiBlbGVtZW50XG4gICAgICAgICAgICBjb250YWluZXJFcnJvckNsYXNzOiAnZm9ybS1lcnJvcicsXG4gICAgICAgICAgICAvLyBhZGRpdGlvbmFsIG9wdGlvbnMgZm9yIGZldGNoXG4gICAgICAgICAgICBmZXRjaE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gdGhlIGNvbnRhaW5lciBmb3IgdG9vbHRpcHNcbiAgICAgICAgICAgIHRvb2x0aXBDb250YWluZXI6IGZvcm0sXG4gICAgICAgICAgICAvLyBpZiB5b3UgaGF2ZSBhIGZpeGVkIGhlYWRlciwgZWl0aGVyIHNldCBhIG51bWJlciBvciBmdW5jdGlvbiBoZXJlXG4gICAgICAgICAgICBzY3JvbGxUb0VsZW1lbnREaWZmOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gb3ZlcndyaXRlIGRlZmF1bHQgb3B0aW9uc1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gYXBwbHkgc2V0dGluZ3MgZnJvbSBhdHRyaWJ1dGVzXG4gICAgICAgIFV0aWwuYXBwbHlPcHRpb25zRnJvbUVsZW1lbnQoZm9ybSwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgICAvLyBzZXQgZm9ybSBjbGFzcyBhcyB3aWRnZXRcbiAgICAgICAgLy8gRm9ybXMgYXJlIHZlcnkgZGlmZmVyZW50IHRvIGNsYXNzaWNhbCB3aWRnZXRzLFxuICAgICAgICAvLyB3ZSB3aWxsIG5vdCB1c2Ugb3VyIGJhc2Ugd2lkZ2V0IGNsYXNzIGZvciB0aGlzIGJ1dCBqdXN0IHNlbGZcbiAgICAgICAgZm9ybS5oZldpZGdldEluc3RhbmNlID0gdGhpcztcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBMaXN0IG9mIFZhbGlkYXRvcnNcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRvcnMgPSBGb3JtLmdsb2JhbFZhbGlkYXRvcnM7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3JlbW90ZVZhbGlkYXRpb25GdW5jdGlvbiA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5pbml0Rm9ybVZhbGlkYXRpb24oKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgICAgIGlmICh0aGlzLnRvb2x0aXBzKSB7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBzLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdHMgdGhpcyBmb3JtLCBlaXRoZXIgdmlhIGFqYXggb3IganVzdCBjbGFzc2ljYWwgKGRlZmF1bHQpXG4gICAgICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IHRoaXNGb3JtXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMge1Byb21pc2V8Ym9vbGVhbn0gcmV0dXJucyBmYWxzZSBpZiBzdWJtaXQgaXMgY2FuY2xlZFxuICAgICAqL1xuICAgIF9zdWJtaXRGdW5jdGlvbih0aGlzRm9ybSwgZSkge1xuICAgICAgICB2YXIgc2hvdWxkVXNlQWpheCA9IHRoaXNGb3JtLmdldEF0dHJpYnV0ZShSRU1PVEUpLCBhamF4UG9zdFVybCA9XG4gICAgICAgICAgICAgICAgdGhpc0Zvcm0uZ2V0QXR0cmlidXRlKFJFTU9URV9BQ1RJT04pIHx8XG4gICAgICAgICAgICAgICAgdGhpc0Zvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSB8fCB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHVzZUpzb24gPSBDT05TVF9VU0VfSlNPTiA9PT0gc2hvdWxkVXNlQWpheCwgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGV2ID0gRXZlbnQuZGlzcGF0Y2godGhpc0Zvcm0sIEVWRU5UX0ZPUk1fU1VCTUlUKS53aXRoT3JpZ2luYWwoZSkuZmlyZSgpO1xuXG4gICAgICAgIC8vIGFib3J0IGV4ZWN1dGlvbiBpcyBldmVudCB3YXMgcHJldmVudGVkXG4gICAgICAgIGlmIChldi5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICBzZWxmLl9mb3JtU3RvcExvYWRpbmcoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaG91bGRVc2VBamF4ID09PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBzdWJtaXRcbiAgICAgICAgICAgIHJldHVybiB0aGlzRm9ybS5zdWJtaXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBwcmV2ZW50IGZvcm0gZnJvbSBzdWJtaXQgbm9ybWFsbHlcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIGFkZCBpbmZvcm1hdGlvbiB0aGF0IHRoaXMgaXMgYW4gWE1MSHR0cFJlcXVlc3QgcmVxdWVzdCAodXNlZCBieSBzb21lIGZyYW1ld29ya3MpXG4gICAgICAgIGxldCBkZWZhdWx0SGVhZGVycyA9IHtcbiAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHNldHVwIGRlZmF1bHQgaGVhZGVyc1xuICAgICAgICBpZiAodXNlSnNvbikge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0SGVhZGVycywge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiB0aGlzLm9wdGlvbnMuYWpheEpzb25Db250ZW50VHlwZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRlZmF1bHRPcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuZmV0Y2hPcHRpb25zLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiBkZWZhdWx0SGVhZGVycyxcbiAgICAgICAgICAgIG1ldGhvZDogdGhpcy5vcHRpb25zLmFqYXhTdWJtaXRUeXBlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHN1cHBvcnQgZWl0aGVyIEpTT04gcmVxdWVzdCBwYXlsb2FkIG9yIG5vcm1hbCBwYXlsb2FkIHN1Ym1pc3Npb25cbiAgICAgICAgdmFyIHNlcnZlckNhbGwgPSB1c2VKc29uID8gZmV0Y2goYWpheFBvc3RVcmwsIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIHtcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuc2VyaWFsaXplKCkpXG4gICAgICAgIH0pKSA6IGZldGNoKGFqYXhQb3N0VXJsLCBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCB7XG4gICAgICAgICAgICBib2R5OiBuZXcgRm9ybURhdGEodGhpc0Zvcm0pXG4gICAgICAgIH0pKTtcblxuICAgICAgICBFdmVudC5kaXNwYXRjaCh0aGlzRm9ybSwgRVZFTlRfRk9STV9BRlRFUl9BSkFYX1NVQk1JVCkud2l0aE9yaWdpbmFsKGUpLmZpcmUoKTtcblxuICAgICAgICByZXR1cm4gc2VydmVyQ2FsbC50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAoc2VsZi5fcmVtb3RlVmFsaWRhdGlvbkZ1bmN0aW9uIHx8IEZvcm0uZ2xvYmFsUmVtb3RlVmFsaWRhdGlvbkZ1bmN0aW9uKS5hcHBseShzZWxmLCBbcl0pO1xuXG4gICAgICAgICAgICBFdmVudC5kaXNwYXRjaCh0aGlzRm9ybSwgRVZFTlRfRk9STV9BSkFYX0NPTVBMRVRFRCkud2l0aE9yaWdpbmFsKGUpLndpdGhEZXRhaWwoe3Jlc3BvbnNlOiByfSkuZmlyZSgpO1xuICAgICAgICAgICAgLy8gYWx3YXlzIHJlbW92ZSBlcnJvciBjbGFzc1xuICAgICAgICAgICAgc2VsZi5fZm9ybVN0b3BMb2FkaW5nKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZXMgYSBmb3JtIHRvIGEganNvbiBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9ycyA9IFtcbiAgICAgICAgICAgICdpbnB1dFtuYW1lXTpub3QoW3R5cGU9XCJyYWRpb1wiXSk6ZW5hYmxlZCcsXG4gICAgICAgICAgICAnaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWVdOmNoZWNrZWQnLFxuICAgICAgICAgICAgJ3NlbGVjdFtuYW1lXTplbmFibGVkJyxcbiAgICAgICAgICAgICd0ZXh0YXJlYVtuYW1lXTplbmFibGVkJ1xuICAgICAgICBdLCBpbnB1dHMgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcnMuam9pbignLCcpKSwgcmVzdWx0ID0ge307XG5cbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChpbnB1dHMsIGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICAgICAgdmFyIGV4aXN0cyA9IHJlc3VsdFtpbnB1dC5uYW1lXSwgdmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGlmIChleGlzdHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGV4aXN0cy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2lucHV0Lm5hbWVdID0gW3Jlc3VsdFtpbnB1dC5uYW1lXSwgdmFsdWVdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbaW5wdXQubmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSBjaGFpbiBvZiB2YWxpZGF0aW9uIG9uIGdpdmVuIGZpZWxkc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxBcnJheXxOb2RlTGlzdH0gZmllbGRcbiAgICAgKiBAcGFyYW0gW2ZvY3VzXSBvcHRpb25hbCBmb2N1cyBmaXJzdCBlcnJvclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGhhbmRsZVZhbGlkYXRpb24oZmllbGQsIGZvY3VzKSB7XG4gICAgICAgIHZhciBmaWVsZHMgPSAoZmllbGQgaW5zdGFuY2VvZiBBcnJheSB8fCBmaWVsZCBpbnN0YW5jZW9mIE5vZGVMaXN0KSA/IGZpZWxkIDogW2ZpZWxkXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZVZhbGlkYXRpb24oZmllbGRzLCBmb2N1cywgdHJ1ZSkudGhlbigoKHIpID0+IHtcbiAgICAgICAgICAgIGlmICghci5mb3VuZEFueUVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRvb2x0aXBzXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b29sdGlwcy5yZW1vdmVUb29sdGlwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH0pLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgZXJyb3JzIG9uIGdpdmVuIG5vZGUgbGlzdFxuICAgICAqIEBwYXJhbSB7Tm9kZUxpc3R9IHRvVmFsaWRhdGVGaWVsZHNcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGZvY3VzXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzY29wZWQgaWYgdHJ1ZSwgd2lsbCBvbmx5IHZhbGlkYXRlIHRoZSBmaWVsZHMgYGludmFsaWRGaWVsZHNgXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfaGFuZGxlVmFsaWRhdGlvbih0b1ZhbGlkYXRlRmllbGRzLCBmb2N1cywgc2NvcGVkKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGFyciA9IEZvcm0uX2NyZWF0ZUFycmF5RnJvbUludmFsaWRGaWVsZExpc3QodG9WYWxpZGF0ZUZpZWxkcyksIGlzTG9jYWxJbnZhbGlkID0gYXJyLmxlbmd0aCA+IDA7XG4gICAgICAgIC8vIGZvY3VzIG11c3QgYXBwZWFyIGluIHRoZSBzYW1lIGZyYW1lIGZvciBpT1MgZGV2aWNlc1xuICAgICAgICBpZiAoaXNMb2NhbEludmFsaWQgJiYgZm9jdXMpIHtcbiAgICAgICAgICAgIHNlbGYuX2ZvY3VzRWxlbWVudChhcnJbMF0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWxpZGF0aW9uID0gc2NvcGVkID8gdGhpcy5fY3VzdG9tVmFsaWRhdGlvbnNGb3JFbGVtZW50cyh0b1ZhbGlkYXRlRmllbGRzKSA6XG4gICAgICAgICAgICBzZWxmLnZhbGlkYXRlQ3VzdG9tRmllbGRzKCk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0aW9uLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0xvY2FsSW52YWxpZCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbWJpbmUgYnJvd3NlciBhbmQgY3VzdG9tIHZhbGlkYXRvcnNcbiAgICAgICAgICAgICAgICByLmZvdW5kQW55RXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZ2V0IGEgdW5pcXVlIGZpZWxkIGxpc3Qgb2YgYWxsIGZpZWxkcyB0aGF0IG5lZWQgdG8gYmUgY2hlY2tlZCBhbmQgcmVuZGVyZWRcbiAgICAgICAgICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCB3ZSBoYXZlIGR1cGxpY2F0ZXMgaW4gbm9uIHNjb3BlZCBtb2RlXG4gICAgICAgICAgICBsZXQgdGhpc1RvVmFsaWRhdGVGaWVsZHMgPSBzY29wZWQgPyB0b1ZhbGlkYXRlRmllbGRzIDpcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGFycikuY29uY2F0KHIuY2hlY2tlZEZpZWxkcyk7XG4gICAgICAgICAgICByLmNoZWNrZWRGaWVsZHMgPSB0aGlzVG9WYWxpZGF0ZUZpZWxkcztcbiAgICAgICAgICAgIGxldCBmb3VuZEludmFsaWRGaWVsZHMgPSBzZWxmLnByZXBhcmVFcnJvcnModGhpc1RvVmFsaWRhdGVGaWVsZHMsIGZhbHNlKSxcbiAgICAgICAgICAgICAgICBmaXJzdEludmFsaWRGaWVsZCA9IGZvdW5kSW52YWxpZEZpZWxkc1swXTtcbiAgICAgICAgICAgIGlmIChmaXJzdEludmFsaWRGaWVsZCkge1xuICAgICAgICAgICAgICAgIGlmIChmb2N1cykge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl9mb2N1c0VsZW1lbnQoZmlyc3RJbnZhbGlkRmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiBlbGVtZW50IGNvdWxkIG5vdCBiZSBmb2N1c2VkOlxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gZmlyc3RJbnZhbGlkRmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2hhbmRsZVRvb2x0aXBIaWRlQ2xpY2tBZnRlckNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5faGFuZGxlVG9vbHRpcEhpZGVDbGlja0FmdGVyQ2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGYuc2hvd0FuZE9yQ3JlYXRlVG9vbHRpcChmaXJzdEludmFsaWRGaWVsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZmllbGRcbiAgICAgKiBAcGFyYW0ge1ZhbGlkaXR5U3RhdGV9IHZhbGlkaXR5XG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cblxuICAgIF9zZXR1cEVycm9yTWVzc2FnZXMoZmllbGQsIHZhbGlkaXR5KSB7XG4gICAgICAgIHJldHVybiBGb3JtLmdsb2JhbEVycm9yTWVzc2FnZUhhbmRsZXIgP1xuICAgICAgICAgICAgRm9ybS5nbG9iYWxFcnJvck1lc3NhZ2VIYW5kbGVyLmFwcGx5KHRoaXMsIFtmaWVsZCwgdmFsaWRpdHldKSA6IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgY2xhc3MgbGFiZWxzIGZvciBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9oYW5kbGVMYWJlbHMoZmllbGRzKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGZpZWxkcykuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIGxldCBsYWJlbHMgPSB0aGlzLmdldEZvcm0oKS5xdWVyeVNlbGVjdG9yQWxsKCdbZm9yPVwiJyArIGlkICsgJ1wiXScpLCBpbnZhbGlkID0gZmllbGRzW2lkXTtcbiAgICAgICAgICAgIGlmIChsYWJlbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbGFiZWxzSW5kZXggPSAwOyBsYWJlbHNJbmRleCA8IGxhYmVscy5sZW5ndGg7IGxhYmVsc0luZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsRWwgPSBsYWJlbHNbbGFiZWxzSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBjYW4ndCB1c2UgdG9nZ2xlIGF0dHJpYnV0ZSwgbm90IHN1cHBvcnRlZCBpbiBJRVxuICAgICAgICAgICAgICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWFya0VsZW1lbnRJbnZhbGlkKGxhYmVsRWwpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWFya0VsZW1lbnRWYWxpZChsYWJlbEVsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9tYXJrRWxlbWVudEludmFsaWQoZWwpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKERBVEFfRUxFTUVOVF9JTlZBTElELCBcInRydWVcIik7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQodGhpcy5vcHRpb25zLmlucHV0RXJyb3JDbGFzcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfbWFya0VsZW1lbnRWYWxpZChlbCkge1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoREFUQV9FTEVNRU5UX0lOVkFMSUQpO1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3B0aW9ucy5pbnB1dEVycm9yQ2xhc3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgTGlzdCBvZiBpbnZhbGlkIGVsZW1lbnRzICg6aW52YWxpZClcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZ2V0SW52YWxpZEVsZW1lbnRzKCkge1xuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKHRoaXMuZ2V0Rm9ybSgpLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6aW52YWxpZFwiKSwgZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgIHJldHVybiAhKHIgaW5zdGFuY2VvZiBIVE1MRmllbGRTZXRFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGhpc1BhcmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3JlbW92ZUVsZW1lbnRFcnJvcnModGhpc1BhcmVudCkge1xuICAgICAgICBsZXQgZXJyb3JzID0gdGhpc1BhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMub3B0aW9ucy5jb250YWluZXJFcnJvckNsYXNzKSwgaW5wdXRzV2l0aEVycm9yQ2xhc3NlcyA9XG4gICAgICAgICAgICB0aGlzUGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske0RBVEFfRUxFTUVOVF9JTlZBTElEfV1gKTtcbiAgICAgICAgZm9yIChsZXQgZWxlbWVudEVycm9ySW5kZXggPSAwOyBlbGVtZW50RXJyb3JJbmRleCA8IGVycm9ycy5sZW5ndGg7IGVsZW1lbnRFcnJvckluZGV4KyspIHtcbiAgICAgICAgICAgIGVycm9yc1tlbGVtZW50RXJyb3JJbmRleF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlcnJvcnNbZWxlbWVudEVycm9ySW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpbnB1dEVycm9ySW5kZXggPSAwOyBpbnB1dEVycm9ySW5kZXggPCBpbnB1dHNXaXRoRXJyb3JDbGFzc2VzLmxlbmd0aDsgaW5wdXRFcnJvckluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBlbCA9IGlucHV0c1dpdGhFcnJvckNsYXNzZXNbaW5wdXRFcnJvckluZGV4XTtcbiAgICAgICAgICAgIHRoaXMuX21hcmtFbGVtZW50VmFsaWQoZWwpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYSBjdXN0b20gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB2YWxpZGF0b3IgYSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHNob3VsZCBhbHdheXMgcmV0dXJuIGVpdGhlciBhIEZ1dHVyZSh0cnVlKSBvciBGdXR1cmUoZmFsc2UpXG4gICAgICogZXZlbiB3aGVuIHRoZSBmaWVsZCBoYXMgYmVlbiBpbnZhbGlkYXRlZCB3aXRoIGBzZXRDdXN0b21WYWxpZGl0eWAsIGJlY2F1c2Ugb2YgZGlmZmVyZW50IGJyb3dzZXIgYGJ1Z3NgXG4gICAgICogd2UgY2FuJ3QgcmVseSBvbiB0aGF0XG4gICAgICogQHJldHVybnMge0Zvcm19XG4gICAgICovXG4gICAgcmVnaXN0ZXJWYWxpZGF0b3IobmFtZSwgdmFsaWRhdG9yKSB7XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRvcnNbbmFtZV0gPSB2YWxpZGF0b3I7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1bnMgYXN5bmMgdmFsaWRhdGlvblxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWxpZGF0aW9uUmVmXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZmllbGRcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9ydW5WYWxpZGF0aW9uKHZhbGlkYXRpb25SZWYsIGZpZWxkKSB7XG4gICAgICAgIGlmICghdGhpcy5fdmFsaWRhdG9yc1t2YWxpZGF0aW9uUmVmXSkge1xuICAgICAgICAgICAgdGhyb3cgJ0NvdWxkIG5vdCBmb3VuZCB2YWxpZGF0b3I6ICcgKyB2YWxpZGF0aW9uUmVmO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjbCA9IGZpZWxkLmNsYXNzTGlzdCwgZnV0dXJlID0gdGhpcy5fdmFsaWRhdG9yc1t2YWxpZGF0aW9uUmVmXS5hcHBseSh0aGlzLCBbZmllbGQsIHRoaXMuZm9ybV0pO1xuICAgICAgICBjbC5hZGQoTE9BRElOR19DTEFTUyk7XG4gICAgICAgIGZ1dHVyZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNsLnJlbW92ZShMT0FESU5HX0NMQVNTKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmdXR1cmU7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSdW4gY3VzdG9tIHZhbGlkYXRpb25zIGZvciBlbGVtZW50cywgdmFsaWRhdGlvbnMgYXJlIGRvbmUgYXN5bmMgZG8gc3VwcG9ydCBYSFIgUmVxdWVzdHMgb3Igb3RoZXIgc3R1ZmZcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl8Tm9kZUxpc3R9IGZpZWxkc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfSBjb250YWlucyBlaXRoZXIgdHJ1ZSBpZiB2YWxpZGF0aW9ucyBwYXNzZWQgb3IgZmFsc2UgaWYgc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9jdXN0b21WYWxpZGF0aW9uc0ZvckVsZW1lbnRzKGZpZWxkcykge1xuICAgICAgICB2YXIgZnV0dXJlcyA9IFtdLCBmaWVsZHNMZW5ndGggPSBmaWVsZHMubGVuZ3RoLCBjaGVja2VkRmllbGRzID0gW107XG4gICAgICAgIGZvciAodmFyIGlWYWwgPSAwOyBpVmFsIDwgZmllbGRzTGVuZ3RoOyBpVmFsKyspIHtcbiAgICAgICAgICAgIHZhciBmaWVsZCA9IGZpZWxkc1tpVmFsXSwgdmFsaWRhdGlvblJlZiA9IGZpZWxkLmdldEF0dHJpYnV0ZShBVFRSX1ZBTElEQVRPUiksIHZhbGlkaXR5ID0gZmllbGQudmFsaWRpdHk7XG4gICAgICAgICAgICBpZiAodGhpcy5fdmFsaWRhdG9yc1t2YWxpZGF0aW9uUmVmXSkge1xuICAgICAgICAgICAgICAgIC8vIHVzZSBsb2NhbCB2YWxpZGF0aW9uIGZpcnN0IGFuZCB0aGVuIGNvbnRpbnVlIHdpdGggY3VzdG9tIHZhbGlkYXRpb25zXG4gICAgICAgICAgICAgICAgaWYgKEZvcm0uX3Nob3VsZE5vdFZhbGlkYXRlRmllbGQoZmllbGQpIHx8ICh2YWxpZGl0eSAmJiAhdmFsaWRpdHkuY3VzdG9tRXJyb3IgJiYgIXZhbGlkaXR5LnZhbGlkKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hlY2tlZEZpZWxkcy5wdXNoKGZpZWxkKTtcbiAgICAgICAgICAgICAgICBmdXR1cmVzLnB1c2godGhpcy5fcnVuVmFsaWRhdGlvbih2YWxpZGF0aW9uUmVmLCBmaWVsZCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblJlZikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2RhdGEtdmFsaWRhdGUgd2FzIHNldCBidXQgbm8gdmFsaWRhdG9yIHdhcyBmb3VuZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoZnV0dXJlcykudGhlbihmdW5jdGlvbiAoYWxsRnV0dXJlcykge1xuICAgICAgICAgICAgbGV0IGwgPSBhbGxGdXR1cmVzLmxlbmd0aDtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZEZpZWxkczogY2hlY2tlZEZpZWxkcyxcbiAgICAgICAgICAgICAgICBmb3VuZEFueUVycm9yOiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAodmFyIGZJID0gMDsgZkkgPCBsOyBmSSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhbGxGdXR1cmVzW2ZJXSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZm91bmRBbnlFcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgZXJyb3JzIGZvciB0aGlzIGZvcm1cbiAgICAgKiBAcmV0dXJucyB7Rm9ybX1cbiAgICAgKi9cbiAgICByZW1vdmVFcnJvcnMoKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUVsZW1lbnRFcnJvcnModGhpcy5mb3JtKTtcbiAgICAgICAgaWYgKHRoaXMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcHMucmVtb3ZlVG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdpbGwgaGFuZGxlIGVycm9ycyBmb3IgZ2l2ZW4gZmllbGRzXG4gICAgICogQHBhcmFtIHtBcnJheXxOb2RlTGlzdH0gZmllbGRzXG4gICAgICogQHBhcmFtIHtCb29sZWFufSByZW1vdmVBbGxFcnJvcnNcbiAgICAgKi9cbiAgICBwcmVwYXJlRXJyb3JzKGZpZWxkcywgcmVtb3ZlQWxsRXJyb3JzKSB7XG4gICAgICAgIGlmIChyZW1vdmVBbGxFcnJvcnMpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXJyb3JzKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxhYmVsR3JvdXBzID0ge30sIGludmFsaWRGaWVsZHMgPSBbXTtcblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVBZGRpdGlvbmFsTGFiZWxzKGlzSW52YWxpZCwgdGhpc0xhYmVsR3JvdXAsIGZpZWxkKSB7XG4gICAgICAgICAgICBsZXQgYWRkaXRpb25hbExhYmVscyA9IGZpZWxkLmdldEF0dHJpYnV0ZShBVFRSX0RBVEFfQ1VTVE9NX0xBQkVMKSB8fFxuICAgICAgICAgICAgICAgIGZpZWxkLmlkLCBncm91cCA9IHRoaXNMYWJlbEdyb3VwW2FkZGl0aW9uYWxMYWJlbHNdO1xuICAgICAgICAgICAgaWYgKGFkZGl0aW9uYWxMYWJlbHMpIHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBhZGRpdGlvbmFsbHkgaWYgZmllbGQgaXMgY3VycmVudGx5IG1hcmtlZCBhcyBpbnZhbGlkXG4gICAgICAgICAgICAgICAgLy8gc28gdGhlIGxhYmVsIGlzIG5vdCBtYXJrZWQgYXMgZXJyb3IgaWYgbm8gZmllbGQgaXMgbWFya2VkIGFzIG9uZVxuICAgICAgICAgICAgICAgIGdyb3VwID0gZ3JvdXAgPyBncm91cCA6IGlzSW52YWxpZDtcbiAgICAgICAgICAgICAgICB0aGlzTGFiZWxHcm91cFthZGRpdGlvbmFsTGFiZWxzXSA9IGdyb3VwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2Ugc2F2ZSBhbGwgdmFsaWRhdGlvbnMgaW4gYW4gZXh0cmEgcHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJlc2V0IHRoZSB2YWxpZGl0eSBkdWUgc29tZVxuICAgICAgICAvLyBpbXBsZW1lbnRhdGlvbiBlcnJvcnMgaW4gb3RoZXIgYnJvd3NlcnMgdGhlbiBjaHJvbWVcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBmaWVsZCA9IGZpZWxkc1tpXSwgZXJyb3JUYXJnZXQgPSBGb3JtLl9maW5kRXJyb3JUYXJnZXQoZmllbGQpLCBwYXJlbnQgPSBlcnJvclRhcmdldC5wYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgIHZhbGlkaXR5ID0gZmllbGQudmFsaWRpdHksIGlzSW52YWxpZCA9IHZhbGlkaXR5ICYmICF2YWxpZGl0eS52YWxpZDtcbiAgICAgICAgICAgIGlmIChGb3JtLl9zaG91bGROb3RWYWxpZGF0ZUZpZWxkKGZpZWxkKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmllbGQuZmxleEZvcm1zU2F2ZWRWYWxpZGl0eSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsaWRpdHkpKTtcbiAgICAgICAgICAgIGhhbmRsZUFkZGl0aW9uYWxMYWJlbHMoaXNJbnZhbGlkLCBsYWJlbEdyb3VwcywgZmllbGQpO1xuICAgICAgICAgICAgaWYgKGlzSW52YWxpZCkge1xuICAgICAgICAgICAgICAgIGlmICghcmVtb3ZlQWxsRXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBjdXJyZW50IGVycm9yczpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlRWxlbWVudEVycm9ycyhwYXJlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBzZXR1cCBjdXN0b20gZXJyb3IgbWVzc2FnZXM6XG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0dXBFcnJvck1lc3NhZ2VzKGZpZWxkLCB2YWxpZGl0eSk7XG4gICAgICAgICAgICAgICAgbGV0IG1zZyA9IGZpZWxkLnZhbGlkYXRpb25NZXNzYWdlO1xuXG4gICAgICAgICAgICAgICAgLy8gbWFyayBmaWVsZHMgYXMgaW52YWxpZFxuICAgICAgICAgICAgICAgIHRoaXMuX21hcmtFbGVtZW50SW52YWxpZChlcnJvclRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFya0VsZW1lbnRJbnZhbGlkKGZpZWxkKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXBwZW5kRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCIke3RoaXMub3B0aW9ucy5jb250YWluZXJFcnJvckNsYXNzfVwiPiR7bXNnfTwvZGl2PmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goZmllbGQpO1xuICAgICAgICAgICAgICAgIGZpZWxkLmZsZXhGb3Jtc1NhdmVkVmFsaWRhdGlvbk1lc3NhZ2UgPSBtc2c7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHJlc3RvcmUgaW52YWxpZCBmaWVsZHNcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXJrRWxlbWVudFZhbGlkKGVycm9yVGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXJrRWxlbWVudFZhbGlkKGZpZWxkKTtcblxuICAgICAgICAgICAgICAgIC8vIGNsZWFudXBcbiAgICAgICAgICAgICAgICBkZWxldGUgZmllbGQuZmxleEZvcm1zU2F2ZWRWYWxpZGF0aW9uTWVzc2FnZTtcblxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBlcnJvciBtYXJrdXBcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVFbGVtZW50RXJyb3JzKHBhcmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBXZSBoYXZlIHRvIHJlc2V0IHRoZSBjdXN0b20gdmFsaWRpdHkgaGVyZSB0byBhbGxvdyBuYXRpdmUgdmFsaWRhdGlvbnMgd29yayBhZ2FpblxuICAgICAgICAgICAgZmllbGQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHZhbGlkYXRlcyBhIHNpbmdsZSBmaWVsZCB3ZSBuZWVkIHRvIGNoZWNrIHRoZSBsaW5rZWQgZmllbGRzIHRvIGEgbGFiZWw6XG4gICAgICAgIGlmIChmaWVsZHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBsZXQgZmllbGQgPSBmaWVsZHNbMF07XG4gICAgICAgICAgICBsZXQgaWQgPSBmaWVsZC5nZXRBdHRyaWJ1dGUoQVRUUl9EQVRBX0NVU1RPTV9MQUJFTCkgfHwgZmllbGQuaWQ7XG4gICAgICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgbGlua2VkRmllbGRzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRGb3JtKCkucXVlcnlTZWxlY3RvckFsbChgWyR7QVRUUl9EQVRBX0NVU1RPTV9MQUJFTH09XCIke2lkfVwiXSwgIyR7aWR9YCkpO1xuICAgICAgICAgICAgICAgIGxpbmtlZEZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uICh0aGlzRmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbGlkaXR5ID0gdGhpc0ZpZWxkLnZhbGlkaXR5LCBpc0ludmFsaWQgPSB2YWxpZGl0eSAmJiAhdmFsaWRpdHkudmFsaWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzRWxlbWVudEludmFsaWRFbGVtZW50KHRoaXNGaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUFkZGl0aW9uYWxMYWJlbHMoaXNJbnZhbGlkLCBsYWJlbEdyb3VwcywgdGhpc0ZpZWxkKTtcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2hhbmRsZUxhYmVscyhsYWJlbEdyb3Vwcyk7XG4gICAgICAgIHJldHVybiBpbnZhbGlkRmllbGRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlcyBhbGwgY3VzdG9tIGZpZWxkc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIHZhbGlkYXRlQ3VzdG9tRmllbGRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VzdG9tVmFsaWRhdGlvbnNGb3JFbGVtZW50cyhcbiAgICAgICAgICAgIHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdmFsaWRhdGVdXCIpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUZXN0cyBpZiBhIGZpZWxkIHNob3VsZCBiZSB2YWxpZGF0ZWRcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmaWVsZFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc3RhdGljIF9zaG91bGROb3RWYWxpZGF0ZUZpZWxkKGZpZWxkKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBGb3JtLl9maW5kRXJyb3JUYXJnZXQoZmllbGQpO1xuICAgICAgICByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgSFRNTEZpZWxkU2V0RWxlbWVudCB8fFxuICAgICAgICAgICAgKHRhcmdldC5oYXNBdHRyaWJ1dGUoQVRUUl9WQUxJREFURV9WSVNJQklMSVRZKSAmJiAhVXRpbC5pc1Zpc2libGUodGFyZ2V0KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBhcnJheSBmcm9tIGEgbm9kZSBsaXN0IHdpdGggaW52YWxpZCBpdGVtc1xuICAgICAqIFRoaXMgTWV0aG9kIGV4cGljaXRseSBjaGVja3MgaWYgZmllbGQgc2hvdWxkIG5vdCBiZSB2YWxpZGF0ZWQgc28gaXQgY2FuIGJlIHVzZWQgdG8gZm91Y3MgYSBmaWVsZFxuICAgICAqIEBwYXJhbSBsaXN0XG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc3RhdGljIF9jcmVhdGVBcnJheUZyb21JbnZhbGlkRmllbGRMaXN0KGxpc3QpIHtcbiAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBuID0gbGlzdFtpXTtcbiAgICAgICAgICAgIGlmIChuLnZhbGlkaXR5ICYmICFuLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFGb3JtLl9zaG91bGROb3RWYWxpZGF0ZUZpZWxkKG4pKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKG4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogVGhpcyBmb3JtXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldEZvcm0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIHJlbW90ZSB2YWxpZGF0aW9uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY1xuICAgICAqIEByZXR1cm5zIHtGb3JtfVxuICAgICAqL1xuICAgIHJlZ2lzdGVyUmVtb3RlVmFsaWRhdGlvbihmdW5jKSB7XG4gICAgICAgIHRoaXMuX3JlbW90ZVZhbGlkYXRpb25GdW5jdGlvbiA9IGZ1bmM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRm9ybWF0cyB0aGUgZXJyb3IgY29udGVudCBmb3IgdGhlIHRvb2x0aXBcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXJyb3JcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2Zvcm1hdEVycm9yVG9vbHRpcChlcnJvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZvcm1hdEVycm9yVG9vbHRpcC5hcHBseSh0aGlzLCBbZXJyb3JdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmllcyB0byBmaW5kIGEgY3VzdG9tIGVycm9yIHRhcmdldCBvbiBnaXZlbiB0YXJnZXRcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc3RhdGljIF9maW5kRXJyb3JUYXJnZXQodGFyZ2V0KSB7XG4gICAgICAgIHZhciBlbCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoQVRUUl9FUlJPUl9UQVJHRVRfSUQpIHx8IHRhcmdldCxcbiAgICAgICAgICAgIGZvdW5kVGFyZ2V0ID0gZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGVsIDogZ2xvYmFsLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsKTtcbiAgICAgICAgaWYgKCFmb3VuZFRhcmdldCkge1xuICAgICAgICAgICAgdGhyb3cgJ0dpdmVuIGVycm9yIHRhcmdldCBkaWQgbm90IGV4c2l0czonICsgdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3VuZFRhcmdldDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgdG9vbHRpcCBhdCBnaXZlbiBlbGVtZW50LCB3aWxsIG9ubHkgY3JlYXRlIGEgbmV3IGluc3RhbmNlIGlmIG5vdCBjcmVhdGVkXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcmVtb3ZlXVxuICAgICAqL1xuICAgIHNob3dBbmRPckNyZWF0ZVRvb2x0aXAodGFyZ2V0LCByZW1vdmUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMudG9vbHRpcHMgJiYgdGhpcy5vcHRpb25zLmNyZWF0ZVRvb2x0aXBzKSB7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBzID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zLnRvb2x0aXBDb250YWluZXIsIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzczogJ2Vycm9yLXRvb2x0aXAnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5jcmVhdGVUb29sdGlwcykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0YXJnZXQuZmxleEZvcm1zU2F2ZWRWYWxpZGl0eSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvclRhcmdldCA9IEZvcm0uX2ZpbmRFcnJvclRhcmdldCh0YXJnZXQpO1xuICAgICAgICBpZiAoIXRhcmdldC5mbGV4Rm9ybXNTYXZlZFZhbGlkaXR5LnZhbGlkICYmIHNlbGYuX2lzRWxlbWVudEludmFsaWRFbGVtZW50KGVycm9yVGFyZ2V0KSkge1xuICAgICAgICAgICAgc2VsZi50b29sdGlwcy5jcmVhdGVUb29sdGlwKGVycm9yVGFyZ2V0LFxuICAgICAgICAgICAgICAgIHNlbGYuX2Zvcm1hdEVycm9yVG9vbHRpcCh0YXJnZXQuZmxleEZvcm1zU2F2ZWRWYWxpZGF0aW9uTWVzc2FnZSksIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHJlbW92ZSkge1xuICAgICAgICAgICAgICAgIHNlbGYudG9vbHRpcHMucmVtb3ZlVG9vbHRpcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgZWxlbWVudCBpcyBtYXJrZWQgYXMgaW52YWxpZFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfaXNFbGVtZW50SW52YWxpZEVsZW1lbnQoZWwpIHtcbiAgICAgICAgcmV0dXJuIGVsLmhhc0F0dHJpYnV0ZShEQVRBX0VMRU1FTlRfSU5WQUxJRCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBpbnZhbGlkIGV2ZW50IG9mIGEgZm9ybVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZXxib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2NoZWNrSXNJbnZhbGlkKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgaW52YWxpZEZpZWxkcyA9IHRoaXMuZ2V0Rm9ybSgpLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6aW52YWxpZFwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZVZhbGlkYXRpb24oaW52YWxpZEZpZWxkcywgdHJ1ZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdpbGwgcXVlcnkgZGVwZW5kZW50IGZpZWxkcyAoYnkgc2VsZWN0b3IpIHRoYXQgc2hvdWxkIGJlIHZhbGlkYXRlZCB3aXRoIGdpdmVuIGZpZWxkXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICogQHJldHVybnMge05vZGVMaXN0fFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2dldERlcGVuZGVudEZpZWxkcyhmaWVsZCkge1xuICAgICAgICBsZXQgZmllbGRTZWxlY3RvciA9IGZpZWxkLmdldEF0dHJpYnV0ZShBVFRSX0RFUEVORFMpLCBiYXNlID0gW2ZpZWxkXTtcbiAgICAgICAgaWYgKGZpZWxkU2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGJhc2UucHVzaC5hcHBseShiYXNlLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRGb3JtKCkucXVlcnlTZWxlY3RvckFsbChmaWVsZFNlbGVjdG9yKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiYXNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW3RhcmdldF1cbiAgICAgKi9cbiAgICBfaGFuZGxlVG9vbHRpcElubGluZSh0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRoaXMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcHMucmVtb3ZlVG9vbHRpcCh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgdmFsaWRhdGlvbiBmb3IgYSBnaXZlbiBmb3JtLCByZWdpc3RlcnMgZXZlbnQgaGFuZGxlcnNcbiAgICAgKi9cbiAgICBpbml0Rm9ybVZhbGlkYXRpb24oKSB7XG4gICAgICAgIC8vIFN1cHByZXNzIHRoZSBkZWZhdWx0IGJ1YmJsZXNcbiAgICAgICAgdmFyIGZvcm0gPSB0aGlzLmdldEZvcm0oKSxcbiAgICAgICAgICAgIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgaW52YWxpZEV2ZW50ID0gJ2ludmFsaWQnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZGF0ZXMgaWYgaXMgdmFsaWQgcmVhbHRpbWUgZWxlbWVudFxuICAgICAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfY2hlY2tJc1ZhbGlkUmVhbHRpbWVFbGVtZW50KHRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuICF0YXJnZXQuaGFzQXR0cmlidXRlKEFUVFJfRElTQUJMRV9SRUFMVElNRSkgJiYgIXRhcmdldC5oYXNBdHRyaWJ1dGUoQVRUUl9ESVNBQkxFX0lOTElORSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoaW52YWxpZEV2ZW50LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICBVdGlsLmFkZEV2ZW50T25jZShpbnZhbGlkRXZlbnQsIGZvcm0sIGZ1bmN0aW9uIGhhbmRsZUludmFsaWQoZSkge1xuICAgICAgICAgICAgc2VsZi5fZm9ybUxvYWRpbmcoKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBzZWxmLl9jaGVja0lzSW52YWxpZChlKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRWYWxpZGF0aW9uRnV0dXJlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFV0aWwuYWRkRXZlbnRPbmNlKGludmFsaWRFdmVudCwgZm9ybSwgaGFuZGxlSW52YWxpZCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9mb3JtU3RvcExvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghci5mb3VuZEFueUVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fZm9ybUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9oYW5kbGVTdWJtaXQoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZm9ybSwgJ3Jlc2V0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFcnJvcnMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVGltZW91dCBmb3Iga2V5czpcbiAgICAgICAgdmFyIFRJTUVPVVRfS0VZRE9XTiwgS0VZRE9XTl9SVU5OSU5HID0gZmFsc2U7XG5cbiAgICAgICAgLy8gcmVzZXRzIGtleWRvd24gZXZlbnRzXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyS2V5RG93blRpbWVvdXQoKSB7XG4gICAgICAgICAgICBLRVlET1dOX1JVTk5JTkcgPSBmYWxzZTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChUSU1FT1VUX0tFWURPV04pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0dXAgY3VzdG9tIHJlYWx0aW1lIGV2ZW50IGlmIGdpdmVuXG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMucmVhbHRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihmb3JtLCBDT05TVF9SRUFMVElNRV9FVkVOVCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5fZm9ybUlzTG9hZGluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChUSU1FT1VUX0tFWURPV04pO1xuICAgICAgICAgICAgICAgIGlmIChLRVlET1dOX1JVTk5JTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBUSU1FT1VUX0tFWURPV04gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzU3RpbGxUYXJnZXQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBlLnRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfY2hlY2tJc1ZhbGlkUmVhbHRpbWVFbGVtZW50KHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNTdGlsbFRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5faGFuZGxlVG9vbHRpcElubGluZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEtFWURPV05fUlVOTklORyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZXBlbmRlbnRGaWVsZHMgPSBzZWxmLl9nZXREZXBlbmRlbnRGaWVsZHModGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fY3VzdG9tVmFsaWRhdGlvbnNGb3JFbGVtZW50cyhkZXBlbmRlbnRGaWVsZHMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcmVwYXJlRXJyb3JzKGRlcGVuZGVudEZpZWxkcywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzU3RpbGxUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNob3dBbmRPckNyZWF0ZVRvb2x0aXAoZS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZnV0dXJlIG11c3QgYmUgcmVzb2x2ZWQgYmVmb3JlIGFub3RoZXIgZXZlbnQgY2FuIGJlIHN0YXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIEtFWURPV05fUlVOTklORyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCBzZWxmLm9wdGlvbnMucmVhbHRpbWVUaW1lb3V0KTtcbiAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkYXRlcyBpZiB0YXJnZXQgaXMgYSB2YWxpZCBpbnB1dCBmaWVsZCB0byBjaGVjayBibHVyIGFuZCBmb2N1cyBldmVudHNcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX2NoZWNrSXNWYWxpZEJsdXJGb2N1c0VsZW1lbnQodGFyZ2V0KSB7XG4gICAgICAgICAgICBsZXQgYXR0ciA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIChhdHRyICE9PSBcInJhZGlvXCIgJiYgYXR0ciAhPT0gXCJjaGVja2JveFwiICYmIGF0dHIgIT09IFwic3VibWl0XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkYXRlcyBpZiBpcyB2YWxpZCBpbmxpbmUtY2hlY2sgZWxlbWVudFxuICAgICAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfY2hlY2tJc1ZhbGlkSW5saW5lQ2hlY2tFbGVtZW50KHRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuICF0YXJnZXQuaGFzQXR0cmlidXRlKEFUVFJfRElTQUJMRV9JTkxJTkUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGZvcm0sICdibHVyJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdCBoaWRlIHRvb2x0aXAgYWZ0ZXIgY2hhbmdlIGV2ZW50XG4gICAgICAgICAgICBpZiAoIWUudGFyZ2V0LmZsZXhjc3NLZWVwVG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9oYW5kbGVUb29sdGlwSW5saW5lKGUudGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGV0ZSBlLnRhcmdldC5mbGV4Y3NzS2VlcFRvb2x0aXBzO1xuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICAvLyBoYW5kbGUgZm9jdXMgb24gaW5wdXQgZWxlbWVudHNcbiAgICAgICAgLy8gd2lsbCBzaG93IGFuIGVycm9yIGlmIGZpZWxkIGlzIGludmFsaWRcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGZvcm0sIFwiZm9jdXNcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLl9mb3JtSXNMb2FkaW5nKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkbyBub3QgdHJhY2sgZXJyb3JzIGZvciBjaGVja2JveCBhbmQgcmFkaW9zIG9uIGZvY3VzOlxuICAgICAgICAgICAgaWYgKCFfY2hlY2tJc1ZhbGlkQmx1ckZvY3VzRWxlbWVudChlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGRlbGF5IHRoaXMgYSBsaXR0bGUsIGJlY2F1c2UgRmlyZWZveCBhbmQgU2FmYXJpIGRvIG5vdCBzaG93IGEgdG9vbHRpcCBhZnRlciBpdFxuICAgICAgICAgICAgLy8ganVzdCBoYXZlIGJlZW4gaGlkZGVuIChvbiBibHVyKS4gTWF5YmUgZml4IHRoaXMgd2l0aCBhIHF1ZXVlIGxhdGVyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNob3dBbmRPckNyZWF0ZVRvb2x0aXAoZS50YXJnZXQpO1xuICAgICAgICAgICAgfSwgRk9DVVNfVE9PTFRJUF9ERUxBWSk7XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMuaW5saW5lVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgLy8gSGFuZGxlIGNoYW5nZSBmb3IgY2hlY2tib3gsIHJhZGlvcyBhbmQgc2VsZWN0c1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGZvcm0sIFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuX2Zvcm1Jc0xvYWRpbmcoKSB8fCAhX2NoZWNrSXNWYWxpZElubGluZUNoZWNrRWxlbWVudCh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2xlYXJLZXlEb3duVGltZW91dCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0cyA9IG5hbWUgPyBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwiJyArIG5hbWUgKyAnXCJdJykgOiBbdGFyZ2V0XTtcbiAgICAgICAgICAgICAgICAvLyB3ZSBvbmx5IHN1cHBvcnQgZGVwZW5kZW50IGZpZWxkcyBmb3IgYSBzaW5nbGUgd2lkZ2V0cyByaWdodCBub3dcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dHMgPSBzZWxmLl9nZXREZXBlbmRlbnRGaWVsZHModGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi5fY3VzdG9tVmFsaWRhdGlvbnNGb3JFbGVtZW50cyhpbnB1dHMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnByZXBhcmVFcnJvcnMoaW5wdXRzLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5mbGV4Y3NzS2VlcFRvb2x0aXBzID0gc2VsZi5zaG93QW5kT3JDcmVhdGVUb29sdGlwKHRhcmdldCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuZmxleGNzc0tlZXBUb29sdGlwcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5faGFuZGxlVG9vbHRpcEhpZGVDbGlja0FmdGVyQ2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJldmVudCBkZWZhdWx0IGlmIGZvcm0gaXMgaW52YWxpZFxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZm9ybSwgXCJzdWJtaXRcIiwgZnVuY3Rpb24gbGlzdGVuZXIoZSkge1xuICAgICAgICAgICAgc2VsZi5fc3VibWl0TGlzdGVuZXIoZSwgbGlzdGVuZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBFdmVudC5kaXNwYXRjaEFuZEZpcmUoZm9ybSwgRVZFTlRfRk9STV9SRUFEWSk7XG4gICAgfVxuXG4gICAgLyogTG9hZGluZyBzdGF0ZXMsIHVuZm9ydHVuYXRlbHkgd2UgY2FuJ3QgY2hlY2sgaWYgYSBwcm9taXNlIGlzIHBlbmRpbmcgOi8qL1xuICAgIC8qIFRPRE86IE1heWJlIHdyYXAgcHJvbWlzZSB0byBleHRlbmQgdGhpcyBmdW5jdGlvbmFsaXR5ICovXG5cbiAgICBfZm9ybUxvYWRpbmcoKSB7XG4gICAgICAgIHRoaXMuZ2V0Rm9ybSgpLmNsYXNzTGlzdC5hZGQoTE9BRElOR19DTEFTUyk7XG4gICAgfVxuXG4gICAgX2Zvcm1TdG9wTG9hZGluZygpIHtcbiAgICAgICAgdGhpcy5nZXRGb3JtKCkuY2xhc3NMaXN0LnJlbW92ZShMT0FESU5HX0NMQVNTKTtcbiAgICB9XG5cbiAgICBfZm9ybUlzTG9hZGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Rm9ybSgpLmNsYXNzTGlzdC5jb250YWlucyhMT0FESU5HX0NMQVNTKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIGRlZmluZXMgdGhlIGxvZ2ljIGFmdGVyIGEgY2hhbmdlIGV2ZW50IHdoZW4gYSB0b29sdGlwIGlzIHNob3duXG4gICAgLy8gYmVjYXVzZSB3ZSBjYWxsIHRoaXMgbWV0aG9kIGluc2lkZSB0aGUgY2hhbmdlIGV2ZW50LCB0aGUgY2xpY2sgd291bGQgYmUgaW1tZWRpdGFsbHkgZXhlY3V0ZWQgd2l0aCB0aGUgY2hhbmdlXG4gICAgLy8gZXZlbnQgd2hlbiBub3QgdXNpbmcgc2V0VGltZW91dCgpLiBUaGVyZSBtaWdodCBiZSBhbm90aGVyIHNvbHV0aW9uIGZvciB0aGlzLi4uXG4gICAgX2hhbmRsZVRvb2x0aXBIaWRlQ2xpY2tBZnRlckNoYW5nZSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY3JlYXRlVG9vbHRpcHMpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIFV0aWwuYWRkRXZlbnRPbmNlKFNldHRpbmdzLmdldFRhYkV2ZW50KCksIGdsb2JhbC5kb2N1bWVudC5ib2R5LCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGYuX2lzRWxlbWVudEludmFsaWRFbGVtZW50KHQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5faGFuZGxlVG9vbHRpcElubGluZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBDTElDS19UT09MVElQX0RFTEFZKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9mb2N1c0VsZW1lbnQoZWwpIHtcbiAgICAgICAgZWwuZm9jdXMoKTtcbiAgICAgICAgVXRpbC5zY3JvbGxUb0VsZW1lbnQoZWwsIHRoaXMub3B0aW9ucy5zY3JvbGxUb0VsZW1lbnREaWZmKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW5lciB0aGF0IGlzIGV4ZWN1dGVkIG9uIGZvcm0gc3VibWl0XG4gICAgICogQHBhcmFtIGVcbiAgICAgKiBAcGFyYW0gc3VibWl0TGlzdGVuZXJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9zdWJtaXRMaXN0ZW5lcihlLCBzdWJtaXRMaXN0ZW5lcikge1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLmdldEZvcm0oKSxcbiAgICAgICAgICAgIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgc3VibWl0RXZlbnQgPSAnc3VibWl0JztcblxuICAgICAgICBpZiAodGhpcy5fZm9ybUlzTG9hZGluZygpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZm9ybUxvYWRpbmcoKTtcbiAgICAgICAgZm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKHN1Ym1pdEV2ZW50LCBzdWJtaXRMaXN0ZW5lcik7XG4gICAgICAgIHRoaXMucmVtb3ZlRXJyb3JzKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gcmVzZXQ6XG4gICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKHN1Ym1pdEV2ZW50LCBzdWJtaXRMaXN0ZW5lcik7XG4gICAgICAgICAgICAvLyBJdCdzIHBvc3NpYmxlIHRoYXQgdGhlIGZvcm0gaXMgdmFsaWQgYnV0IHRoZSBjdXN0b20gdmFsaWRhdGlvbnMgbmVlZCB0byBiZSBjaGVja2VkIGFnYWluOlxuICAgICAgICAgICAgc2VsZi5jdXJyZW50VmFsaWRhdGlvbkZ1dHVyZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkYXRpb24gPSBzZWxmLnZhbGlkYXRlQ3VzdG9tRmllbGRzKCk7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbi50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJlY2F1c2UgY3VzdG9tIHZhbGlkYXRvcnMgbWF5IG1hcmsgbXVsdGlwbGUgZmllbGRzIGFzIGludmFsaWQsIHdlIGdldCBhbGwgb2YgdGhlbSBpbiB0aGUgZm9ybVxuICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGRzID0gc2VsZi5fZ2V0SW52YWxpZEVsZW1lbnRzKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBzZWxmLnByZXBhcmVFcnJvcnMoZmllbGRzLCBmYWxzZSksIGZpcnN0RXJyb3IgPSBlcnJvcnNbMF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9mb2N1c0VsZW1lbnQoZmlyc3RFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNob3dBbmRPckNyZWF0ZVRvb2x0aXAoZmlyc3RFcnJvciwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZi5jdXJyZW50VmFsaWRhdGlvbkZ1dHVyZS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyLmZvdW5kQW55RXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIHN1Ym1pdHRpbmcgdGhlIGZvcm0gdG8gc2VydmVyOlxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9oYW5kbGVTdWJtaXQoZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fZm9ybVN0b3BMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLl9mb3JtU3RvcExvYWRpbmcoKTtcbiAgICAgICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihzdWJtaXRFdmVudCwgc3VibWl0TGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHN1Ym1pdHRpbmcsIG9wdGlvbmFsbHkgYWxsb3dzIHRvIHN0b3Agc3VibWl0dGluZ1xuICAgICAqIEBwYXJhbSBlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgdGhpcy5fc3VibWl0RnVuY3Rpb24odGhpcy5mb3JtLCBlKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhIGdsb2JhbCBldmVudCBIYW5kbGVyXG4gICAgICogQHBhcmFtIGVycm9yRnVuY1xuICAgICAqL1xuICAgIHN0YXRpYyByZWdpc3RlckVycm9yTWVzc2FnZUhhbmRsZXIoZXJyb3JGdW5jKSB7XG4gICAgICAgIEZvcm0uZ2xvYmFsRXJyb3JNZXNzYWdlSGFuZGxlciA9IGVycm9yRnVuYztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIGZvcm1zIGZvciBhIHNwZWNpZmljIHNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEByZXR1cm4ge2FycmF5LjxGb3JtPn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaW5pdChzZWxlY3Rvciwgb3B0aW9ucykge1xuICAgICAgICB2YXIgZm9ybXMgPSBzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpIDpcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLCBpbnN0YW5jZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW5zdGFuY2VzLnB1c2gobmV3IEZvcm0oZm9ybXNbaV0sIG9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5zdGFuY2VzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgZ2xvYmFsIHZhbGlkYXRvciB0aGF0IGlzIHVzYWJsZSBvbiBhbGwgZm9ybSBpbnN0YW5jZXNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHZhbGlkYXRvclxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgcmVnaXN0ZXJWYWxpZGF0b3IobmFtZSwgdmFsaWRhdG9yKSB7XG4gICAgICAgIEZvcm0uZ2xvYmFsVmFsaWRhdG9yc1tuYW1lXSA9IHZhbGlkYXRvcjtcbiAgICAgICAgcmV0dXJuIEZvcm07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgZ2xvYmFsIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSBmb3JtIHNob3VsZCB2YWxpZGF0ZSB0aGUgcmVzcG9uc2Ugb2YgYSBzZXJ2ZXJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jXG4gICAgICogQHJldHVybnMge0Zvcm19XG4gICAgICovXG4gICAgc3RhdGljIHJlZ2lzdGVyR2xvYmFsUmVtb3RlVmFsaWRhdGlvbkZ1bmN0aW9uKGZ1bmMpIHtcbiAgICAgICAgRm9ybS5nbG9iYWxSZW1vdGVWYWxpZGF0aW9uRnVuY3Rpb24gPSBmdW5jO1xuICAgICAgICByZXR1cm4gRm9ybTtcbiAgICB9XG59XG5cblxuLyoqXG4gKiBHbG9iYWwgdmFsaWRhdG9yc1xuICogQHR5cGUge0FycmF5fVxuICovXG5Gb3JtLmdsb2JhbFZhbGlkYXRvcnMgPSBbXTtcblxuLyoqXG4gKiBHbG9iYWwgUmVtb3RlIHZhbGlkYXRpb24gZnVuY3Rpb25cbiAqL1xuRm9ybS5nbG9iYWxSZW1vdGVWYWxpZGF0aW9uRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG59O1xuXG4vKipcbiAqIEhhbmRsZXMgY3VzdG9tIGVycm9yIG1lc3NhZ2VzIGV4dHJhY3RzIGN1c3RvbSBtZXNzYWdlIGJ5IGRlZmF1bHRcbiAqL1xuRm9ybS5nbG9iYWxFcnJvck1lc3NhZ2VIYW5kbGVyID0gKGZpZWxkLCB2YWxpZGl0eSkgPT4ge1xuICAgIGlmICghdmFsaWRpdHkuY3VzdG9tRXJyb3IpIHtcbiAgICAgICAgbGV0IGN1c3RvbU1zZyA9IGZpZWxkLmdldEF0dHJpYnV0ZShBVFRSX0RBVEFfQ1VTVE9NX01FU1NBR0UpO1xuICAgICAgICBpZiAoY3VzdG9tTXNnKSB7XG4gICAgICAgICAgICBmaWVsZC5zZXRDdXN0b21WYWxpZGl0eShjdXN0b21Nc2cpO1xuICAgICAgICB9XG4gICAgfVxufTtcbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(39), __esModule: true };

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(40);
	__webpack_require__(41);
	__webpack_require__(58);
	__webpack_require__(62);
	module.exports = __webpack_require__(21).Promise;

/***/ },
/* 40 */
/***/ function(module, exports) {



/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(42)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(44)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var toInteger = __webpack_require__(43)
	  , defined   = __webpack_require__(17);
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY         = __webpack_require__(45)
	  , $def            = __webpack_require__(19)
	  , $redef          = __webpack_require__(46)
	  , hide            = __webpack_require__(47)
	  , has             = __webpack_require__(50)
	  , SYMBOL_ITERATOR = __webpack_require__(51)('iterator')
	  , Iterators       = __webpack_require__(54)
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values';
	var returnThis = function(){ return this; };
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  __webpack_require__(55)(Constructor, NAME, next);
	  var createMethod = function(kind){
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || createMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = __webpack_require__(12).getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    __webpack_require__(56)(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
	  }
	  // Define iterator
	  if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      keys:    IS_SET            ? _default : createMethod(KEYS),
	      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * __webpack_require__(57), NAME, methods);
	  }
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(47);

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(12)
	  , createDesc = __webpack_require__(48);
	module.exports = __webpack_require__(49) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(22)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 50 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(52)('wks')
	  , Symbol = __webpack_require__(20).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || __webpack_require__(53))('Symbol.' + name));
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(20)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(12)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(47)(IteratorPrototype, __webpack_require__(51)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: __webpack_require__(48)(1,next)});
	  __webpack_require__(56)(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var has  = __webpack_require__(50)
	  , hide = __webpack_require__(47)
	  , TAG  = __webpack_require__(51)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))hide(it, TAG, tag);
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	// Safari has buggy iterators w/o `next`
	module.exports = 'keys' in [] && !('next' in [].keys());

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(59);
	var Iterators = __webpack_require__(54);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var setUnscope = __webpack_require__(60)
	  , step       = __webpack_require__(61)
	  , Iterators  = __webpack_require__(54)
	  , toIObject  = __webpack_require__(14);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	__webpack_require__(44)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	setUnscope('keys');
	setUnscope('values');
	setUnscope('entries');

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(12)
	  , LIBRARY    = __webpack_require__(45)
	  , global     = __webpack_require__(20)
	  , ctx        = __webpack_require__(32)
	  , classof    = __webpack_require__(63)
	  , $def       = __webpack_require__(19)
	  , isObject   = __webpack_require__(30)
	  , anObject   = __webpack_require__(31)
	  , aFunction  = __webpack_require__(33)
	  , strictNew  = __webpack_require__(64)
	  , forOf      = __webpack_require__(65)
	  , setProto   = __webpack_require__(29).set
	  , same       = __webpack_require__(70)
	  , species    = __webpack_require__(71)
	  , SPECIES    = __webpack_require__(51)('species')
	  , RECORD     = __webpack_require__(53)('record')
	  , asap       = __webpack_require__(72)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};
	
	var useNative = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(49)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var isPromise = function(it){
	  return isObject(it) && (useNative ? classof(it) == 'Promise' : RECORD in it);
	};
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(react){
	      var cb = ok ? react.ok : react.fail
	        , ret, then;
	      try {
	        if(cb){
	          if(!ok)record.h = true;
	          ret = cb === true ? value : cb(value);
	          if(ret === react.P){
	            react.rej(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(ret)){
	            then.call(ret, react.res, react.rej);
	          } else react.res(ret);
	        } else react.rej(value);
	      } catch(err){
	        react.rej(err);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      asap(function(){
	        if(isUnhandled(record.p)){
	          if(isNode){
	            process.emit('unhandledRejection', value, record.p);
	          } else if(global.console && console.error){
	            console.error('Unhandled promise rejection', value);
	          }
	        }
	        record.a = undefined;
	      });
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise[RECORD]
	    , chain  = record.a || record.c
	    , i      = 0
	    , react;
	  if(record.h)return false;
	  while(chain.length > i){
	    react = chain[i++];
	    if(react.fail || !isUnhandled(react.P))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!useNative){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    this[RECORD] = record;
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(77)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var S = anObject(anObject(this).constructor)[SPECIES];
	      var react = {
	        ok:   typeof onFulfilled == 'function' ? onFulfilled : true,
	        fail: typeof onRejected == 'function'  ? onRejected  : false
	      };
	      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
	        react.res = aFunction(res);
	        react.rej = aFunction(rej);
	      });
	      var record = this[RECORD];
	      record.c.push(react);
	      if(record.a)record.a.push(react);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	// export
	$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
	__webpack_require__(56)(P, PROMISE);
	species(P);
	species(Wrapper = __webpack_require__(21)[PROMISE]);
	
	// statics
	$def($def.S + $def.F * !useNative, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    return new this(function(res, rej){ rej(r); });
	  }
	});
	$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    return isPromise(x) && sameConstructor(x.constructor, this)
	      ? x : new this(function(res){ res(x); });
	  }
	});
	$def($def.S + $def.F * !(useNative && __webpack_require__(78)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C      = getConstructor(this)
	      , values = [];
	    return new C(function(res, rej){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        C.resolve(promise).then(function(value){
	          results[index] = value;
	          --remaining || res(results);
	        }, rej);
	      });
	      else res(results);
	    });
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C = getConstructor(this);
	    return new C(function(res, rej){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(res, rej);
	      });
	    });
	  }
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(16)
	  , TAG = __webpack_require__(51)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(32)
	  , call        = __webpack_require__(66)
	  , isArrayIter = __webpack_require__(67)
	  , anObject    = __webpack_require__(31)
	  , toLength    = __webpack_require__(68)
	  , getIterFn   = __webpack_require__(69);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(31);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(54)
	  , ITERATOR  = __webpack_require__(51)('iterator');
	module.exports = function(it){
	  return (Iterators.Array || Array.prototype[ITERATOR]) === it;
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(43)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(63)
	  , ITERATOR  = __webpack_require__(51)('iterator')
	  , Iterators = __webpack_require__(54);
	module.exports = __webpack_require__(21).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $       = __webpack_require__(12)
	  , SPECIES = __webpack_require__(51)('species');
	module.exports = function(C){
	  if(__webpack_require__(49) && !(SPECIES in C))$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(20)
	  , macrotask = __webpack_require__(73).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , head, last, notify;
	
	function flush(){
	  while(head){
	    head.fn.call(); // <- currently we use it only for Promise - try / catch not required
	    head = head.next;
	  } last = undefined;
	}
	
	// Node.js
	if(__webpack_require__(16)(process) == 'process'){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx                = __webpack_require__(32)
	  , invoke             = __webpack_require__(74)
	  , html               = __webpack_require__(75)
	  , cel                = __webpack_require__(76)
	  , global             = __webpack_require__(20)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(16)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScript){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "module.exports = require('./$.global').document && document.documentElement;";

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(30)
	  , document = __webpack_require__(20).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var $redef = __webpack_require__(46);
	module.exports = function(target, src){
	  for(var key in src)$redef(target, key, src[key]);
	  return target;
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var SYMBOL_ITERATOR = __webpack_require__(51)('iterator')
	  , SAFE_CLOSING    = false;
	try {
	  var riter = [7][SYMBOL_ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	module.exports = function(exec){
	  if(!SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[SYMBOL_ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[SYMBOL_ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
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
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(41);
	__webpack_require__(87);
	module.exports = __webpack_require__(21).Array.from;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(32)
	  , $def        = __webpack_require__(19)
	  , toObject    = __webpack_require__(83)
	  , call        = __webpack_require__(66)
	  , isArrayIter = __webpack_require__(67)
	  , toLength    = __webpack_require__(68)
	  , getIterFn   = __webpack_require__(69);
	$def($def.S + $def.F * !__webpack_require__(78)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , mapfn   = arguments[1]
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, arguments[2], 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      for(result = new C(length = toLength(O.length)); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(90);
	module.exports = __webpack_require__(21).Object.keys;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(83);
	
	__webpack_require__(18)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$getOwnPropertyNames = __webpack_require__(92)["default"];
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(10)["default"];
	
	var _Object$defineProperty = __webpack_require__(35)["default"];
	
	exports["default"] = function (obj, defaults) {
	  var keys = _Object$getOwnPropertyNames(defaults);
	
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	
	    var value = _Object$getOwnPropertyDescriptor(defaults, key);
	
	    if (value && value.configurable && obj[key] === undefined) {
	      _Object$defineProperty(obj, key, value);
	    }
	  }
	
	  return obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(12);
	__webpack_require__(94);
	module.exports = function getOwnPropertyNames(it){
	  return $.getNames(it);
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(18)('getOwnPropertyNames', function(){
	  return __webpack_require__(95).get;
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toString  = {}.toString
	  , toIObject = __webpack_require__(14)
	  , getNames  = __webpack_require__(12).getNames;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj, defaults) {
	  var newObj = defaults({}, obj);
	  delete newObj["default"];
	  return newObj;
	};
	
	exports.__esModule = true;

/***/ },
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
/* 100 */
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
	/*global CustomEvent*/
	
	'use strict';
	
	// polyfill for custom events to make thinks work in IE
	// The needed polyfill is so small that I embedded it here
	
	var _createClass = __webpack_require__(34)['default'];
	
	var _classCallCheck = __webpack_require__(37)['default'];
	
	var _Object$assign = __webpack_require__(79)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	void (function () {
	    if (!global.CustomEvent || typeof global.CustomEvent !== 'function') {
	        var CustomEvent;
	        CustomEvent = function (event, params) {
	            var evt;
	            params = params || {
	                bubbles: false,
	                cancelable: false,
	                detail: undefined
	            };
	            evt = document.createEvent("CustomEvent");
	            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	            return evt;
	        };
	        CustomEvent.prototype = global.Event.prototype;
	        global.CustomEvent = CustomEvent;
	    }
	})();
	/**
	 * Simpler Event dispatching
	 */
	
	var EventHandler = (function () {
	
	    /**
	     * @param {HTMLElement} target
	     * @param {String} name
	     */
	
	    function EventHandler(target, name) {
	        _classCallCheck(this, EventHandler);
	
	        this.target = target;
	        this.defaultOptions = {
	            bubbles: true,
	            cancelable: true
	        };
	
	        this.name = name;
	    }
	
	    /**
	     * Set more options
	     * @param {Object} options
	     * @returns {EventHandler}
	     */
	
	    _createClass(EventHandler, [{
	        key: 'withOptions',
	        value: function withOptions(options) {
	            _Object$assign(this.defaultOptions, options || {});
	            return this;
	        }
	
	        /**
	         * Call with the originalEvent
	         * @param {Event} e
	         * @returns {EventHandler}
	         */
	    }, {
	        key: 'withOriginal',
	        value: function withOriginal(e) {
	            return this.withDetail({
	                originalEvent: e
	            });
	        }
	
	        /**
	         * Extends the detail part of the event
	         * @param {Object} o
	         * @returns {EventHandler}
	         */
	    }, {
	        key: 'withDetail',
	        value: function withDetail(o) {
	            if (!this.defaultOptions.detail) {
	                this.defaultOptions.detail = {};
	            }
	            _Object$assign(this.defaultOptions.detail, o);
	            return this;
	        }
	
	        /**
	         * @returns {Window.CustomEvent}
	         */
	    }, {
	        key: 'fire',
	        value: function fire() {
	            var e = new CustomEvent(this.name, this.defaultOptions);
	            if (this.target) {
	                this.target.dispatchEvent(e);
	            }
	            return e;
	        }
	    }]);
	
	    return EventHandler;
	})();
	
	var Event = (function () {
	    function Event() {
	        _classCallCheck(this, Event);
	    }
	
	    _createClass(Event, null, [{
	        key: 'dispatch',
	
	        /**
	         * Prepares to dispatch a custom event (without firing)
	         * @param {HTMLElement} target
	         * @param {String} name
	         * @returns {EventHandler}
	         */
	        value: function dispatch(target, name) {
	            return new EventHandler(target, name);
	        }
	
	        /**
	         * Dispatches a custom event and fires it directly
	         * @param {HTMLElement} target
	         * @param {String} name
	         * @param {Object} [options]
	         * @returns {Window.CustomEvent}
	         */
	    }, {
	        key: 'dispatchAndFire',
	        value: function dispatchAndFire(target, name, options) {
	            return new EventHandler(target, name).withOptions(options).fire();
	        }
	    }]);
	
	    return Event;
	})();
	
	exports['default'] = Event;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL3V0aWwvRXZlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBSWIsS0FBSyxDQUFBLFlBQVk7QUFDYixRQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxPQUFPLE1BQU0sQ0FBQyxXQUFXLEtBQUssVUFBVSxFQUFFO0FBQ2pFLFlBQUksV0FBVyxDQUFDO0FBQ2hCLG1CQUFXLEdBQUcsVUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQ25DLGdCQUFJLEdBQUcsQ0FBQztBQUNSLGtCQUFNLEdBQUcsTUFBTSxJQUFJO0FBQ1gsdUJBQU8sRUFBRSxLQUFLO0FBQ2QsMEJBQVUsRUFBRSxLQUFLO0FBQ2pCLHNCQUFNLEVBQUUsU0FBUzthQUNwQixDQUFDO0FBQ04sZUFBRyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDMUMsZUFBRyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3RSxtQkFBTyxHQUFHLENBQUM7U0FDZCxDQUFDO0FBQ0YsbUJBQVcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7QUFDL0MsY0FBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7S0FDcEM7Q0FDSixDQUFBLEVBQUUsQ0FBQzs7Ozs7SUFJRSxZQUFZOzs7Ozs7O0FBTUgsYUFOVCxZQUFZLENBTUYsTUFBTSxFQUFFLElBQUksRUFBRTs4QkFOeEIsWUFBWTs7QUFRVixZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixZQUFJLENBQUMsY0FBYyxHQUFHO0FBQ2xCLG1CQUFPLEVBQUUsSUFBSTtBQUNiLHNCQUFVLEVBQUUsSUFBSTtTQUNuQixDQUFDOztBQUVGLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ3BCOzs7Ozs7OztpQkFmQyxZQUFZOztlQXNCSCxxQkFBQyxPQUFPLEVBQUU7QUFDakIsMkJBQWMsSUFBSSxDQUFDLGNBQWMsRUFBRyxPQUFPLElBQUksRUFBRSxDQUFFLENBQUM7QUFDcEQsbUJBQU8sSUFBSSxDQUFDO1NBQ2Y7Ozs7Ozs7OztlQU9XLHNCQUFDLENBQUMsRUFBRTtBQUNaLG1CQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDbkIsNkJBQWEsRUFBRSxDQUFDO2FBQ25CLENBQUMsQ0FBQztTQUNOOzs7Ozs7Ozs7ZUFPUyxvQkFBQyxDQUFDLEVBQUU7QUFDVixnQkFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO0FBQzdCLG9CQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7YUFDbkM7QUFDRCwyQkFBYyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3QyxtQkFBTyxJQUFJLENBQUM7U0FDZjs7Ozs7OztlQUtHLGdCQUFHO0FBQ0gsZ0JBQUksQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3hELGdCQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDYixvQkFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEM7QUFDRCxtQkFBTyxDQUFDLENBQUM7U0FDWjs7O1dBNURDLFlBQVk7OztJQWdFWixLQUFLO2FBQUwsS0FBSzs4QkFBTCxLQUFLOzs7aUJBQUwsS0FBSzs7Ozs7Ozs7O2VBT1Esa0JBQUMsTUFBTSxFQUFFLElBQUksRUFBRTtBQUMxQixtQkFBTyxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDekM7Ozs7Ozs7Ozs7O2VBU3FCLHlCQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQzFDLG1CQUFPLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDckU7OztXQXBCQyxLQUFLOzs7cUJBQUwsS0FBSyIsImZpbGUiOiIvVXNlcnMvYm93bGluZ3gvUHJvamVrdGUvZmxleGNzcy9ub2RlX21vZHVsZXMvZXNsaW50LWxvYWRlci9pbmRleC5qcyEvVXNlcnMvYm93bGluZ3gvUHJvamVrdGUvZmxleGNzcy9zcmMvbWFpbi91dGlsL0V2ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBEYXZpZCBIZWlkcmljaCwgQm93bGluZ1ggPG1lQGJvd2xpbmd4LmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKmdsb2JhbCBDdXN0b21FdmVudCovXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gcG9seWZpbGwgZm9yIGN1c3RvbSBldmVudHMgdG8gbWFrZSB0aGlua3Mgd29yayBpbiBJRVxuLy8gVGhlIG5lZWRlZCBwb2x5ZmlsbCBpcyBzbyBzbWFsbCB0aGF0IEkgZW1iZWRkZWQgaXQgaGVyZVxudm9pZCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFnbG9iYWwuQ3VzdG9tRXZlbnQgfHwgdHlwZW9mIGdsb2JhbC5DdXN0b21FdmVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgQ3VzdG9tRXZlbnQ7XG4gICAgICAgIEN1c3RvbUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50LCBwYXJhbXMpIHtcbiAgICAgICAgICAgIHZhciBldnQ7XG4gICAgICAgICAgICBwYXJhbXMgPSBwYXJhbXMgfHwge1xuICAgICAgICAgICAgICAgICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7XG4gICAgICAgICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xuICAgICAgICAgICAgcmV0dXJuIGV2dDtcbiAgICAgICAgfTtcbiAgICAgICAgQ3VzdG9tRXZlbnQucHJvdG90eXBlID0gZ2xvYmFsLkV2ZW50LnByb3RvdHlwZTtcbiAgICAgICAgZ2xvYmFsLkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnQ7XG4gICAgfVxufSgpO1xuLyoqXG4gKiBTaW1wbGVyIEV2ZW50IGRpc3BhdGNoaW5nXG4gKi9cbmNsYXNzIEV2ZW50SGFuZGxlciB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgbmFtZSkge1xuXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBtb3JlIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIHtFdmVudEhhbmRsZXJ9XG4gICAgICovXG4gICAgd2l0aE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuZGVmYXVsdE9wdGlvbnMsIChvcHRpb25zIHx8IHt9KSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGwgd2l0aCB0aGUgb3JpZ2luYWxFdmVudFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcmV0dXJucyB7RXZlbnRIYW5kbGVyfVxuICAgICAqL1xuICAgIHdpdGhPcmlnaW5hbChlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndpdGhEZXRhaWwoe1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRlbmRzIHRoZSBkZXRhaWwgcGFydCBvZiB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb1xuICAgICAqIEByZXR1cm5zIHtFdmVudEhhbmRsZXJ9XG4gICAgICovXG4gICAgd2l0aERldGFpbChvKSB7XG4gICAgICAgIGlmICghdGhpcy5kZWZhdWx0T3B0aW9ucy5kZXRhaWwpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMuZGV0YWlsID0ge307XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRlZmF1bHRPcHRpb25zLmRldGFpbCwgbyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtXaW5kb3cuQ3VzdG9tRXZlbnR9XG4gICAgICovXG4gICAgZmlyZSgpIHtcbiAgICAgICAgdmFyIGUgPSBuZXcgQ3VzdG9tRXZlbnQodGhpcy5uYW1lLCB0aGlzLmRlZmF1bHRPcHRpb25zKTtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5kaXNwYXRjaEV2ZW50KGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHRcbmNsYXNzIEV2ZW50IHtcbiAgICAvKipcbiAgICAgKiBQcmVwYXJlcyB0byBkaXNwYXRjaCBhIGN1c3RvbSBldmVudCAod2l0aG91dCBmaXJpbmcpXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7RXZlbnRIYW5kbGVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBkaXNwYXRjaCh0YXJnZXQsIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFdmVudEhhbmRsZXIodGFyZ2V0LCBuYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IGFuZCBmaXJlcyBpdCBkaXJlY3RseVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEByZXR1cm5zIHtXaW5kb3cuQ3VzdG9tRXZlbnR9XG4gICAgICovXG4gICAgc3RhdGljIGRpc3BhdGNoQW5kRmlyZSh0YXJnZXQsIG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFdmVudEhhbmRsZXIodGFyZ2V0LCBuYW1lKS53aXRoT3B0aW9ucyhvcHRpb25zKS5maXJlKCk7XG4gICAgfVxufVxuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 101 */
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
	
	var _createClass = __webpack_require__(34)['default'];
	
	var _classCallCheck = __webpack_require__(37)['default'];
	
	var _Object$assign = __webpack_require__(79)['default'];
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _utilUtil = __webpack_require__(98);
	
	var _utilUtil2 = _interopRequireDefault(_utilUtil);
	
	var DOM_COMPLETE = 'complete';
	
	// we attach global settings to global once because settings might be shared a lot of times trough the application
	// Maybe find a better way to handle that scenario
	if (!global.FLEXCSS_GLOBAL_SETTINGS) {
	    (function () {
	
	        global.FLEXCSS_GLOBAL_SETTINGS = {
	            // defined breakpoint for small devices < n
	            smallBreakpoint: 768,
	            // nodes that should be updated when no scrollbar is expected
	            scrollbarUpdateNodes: global.document.body !== null ? [global.document.body] : [],
	            // additional Delay until darkener is fully hidden
	            darkenerFadeDelay: 100,
	            // class that is added if canvas has been toggled
	            canvasToggledClass: 'toggled-canvas'
	        };
	
	        global.FLEXCSS_CONST_IS_IOS = null;
	
	        global.FLEXCSS_CONST_IS_TOUCH = null;
	
	        global.FLEXCSS_CONST_IS_IE = null;
	
	        global.FLEXCSS_CONST_TAB_EVENT = 'click';
	
	        var init = function init() {
	            // Measure scrollbar width
	            global.FLEXCSS_CONST_SCROLLBAR_WIDTH = _utilUtil2['default'].getScrollBarWidth();
	            // detect right transition end event
	            global.FLEXCSS_CONST_TRANSITION_EVENT = _utilUtil2['default'].whichTransitionEndEvent();
	        };
	
	        if (global.document.readyState === DOM_COMPLETE) {
	            init();
	        } else {
	            // it's possible that global.document.body is not available if the document is not
	            // loaded completely
	            document.addEventListener('DOMContentLoaded', function () {
	                init();
	            });
	        }
	    })();
	}
	
	/**
	 * Utility class that setups global settings
	 */
	
	var Settings = (function () {
	    function Settings() {
	        _classCallCheck(this, Settings);
	    }
	
	    _createClass(Settings, null, [{
	        key: 'setup',
	
	        /**
	         * Setup global settings, overwrite default values
	         * @param {Object} settings
	         */
	        value: function setup(settings) {
	            _Object$assign(global.FLEXCSS_GLOBAL_SETTINGS, settings);
	        }
	
	        /**
	         * Access to global settings
	         * @returns {Object}
	         */
	    }, {
	        key: 'get',
	        value: function get() {
	            return global.FLEXCSS_GLOBAL_SETTINGS;
	        }
	
	        /**
	         * Detects a IOS Device, caches subsequent calls
	         * @returns {boolean}
	         */
	    }, {
	        key: 'isIosDevice',
	        value: function isIosDevice() {
	            if (!global.FLEXCSS_CONST_IS_IOS) {
	                global.FLEXCSS_CONST_IS_IOS = global.navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
	            }
	
	            return global.FLEXCSS_CONST_IS_IOS;
	        }
	
	        /**
	         * Detects a touch device, caches subsequent calls
	         * @returns {boolean}
	         */
	    }, {
	        key: 'isTouchDevice',
	        value: function isTouchDevice() {
	            if (!global.FLEXCSS_CONST_IS_TOUCH) {
	                global.FLEXCSS_CONST_IS_TOUCH = 'ontouchstart' in window || !!global.navigator.msMaxTouchPoints;
	            }
	            return global.FLEXCSS_CONST_IS_TOUCH;
	        }
	
	        /**
	         * Checks if current browser is Internet Explorer
	         * @returns {boolean|*}
	         */
	    }, {
	        key: 'isIE',
	        value: function isIE() {
	            if (!global.FLEXCSS_CONST_IS_IE) {
	                global.FLEXCSS_CONST_IS_IE = "ActiveXObject" in window;
	            }
	            return global.FLEXCSS_CONST_IS_IE;
	        }
	
	        /**
	         * @returns {String}
	         */
	    }, {
	        key: 'getTransitionEvent',
	        value: function getTransitionEvent() {
	            return global.FLEXCSS_CONST_TRANSITION_EVENT;
	        }
	
	        /**
	         * @returns {int}
	         */
	    }, {
	        key: 'getScrollbarWidth',
	        value: function getScrollbarWidth() {
	            return global.FLEXCSS_CONST_SCROLLBAR_WIDTH;
	        }
	
	        /**
	         * @returns {String}
	         */
	    }, {
	        key: 'getTabEvent',
	        value: function getTabEvent() {
	            return global.FLEXCSS_CONST_TAB_EVENT;
	        }
	    }]);
	
	    return Settings;
	})();
	
	exports['default'] = Settings;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL3V0aWwvU2V0dGluZ3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozt3QkFFSSxXQUFXOzs7O0FBRTVCLElBQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQzs7OztBQUloQyxJQUFJLENBQUMsTUFBTSxDQUFDLHVCQUF1QixFQUFFOzs7QUFFakMsY0FBTSxDQUFDLHVCQUF1QixHQUFHOztBQUU3QiwyQkFBZSxFQUFFLEdBQUc7O0FBRXBCLGdDQUFvQixFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTs7QUFFakYsNkJBQWlCLEVBQUUsR0FBRzs7QUFFdEIsOEJBQWtCLEVBQUUsZ0JBQWdCO1NBQ3ZDLENBQUM7O0FBRUYsY0FBTSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQzs7QUFFbkMsY0FBTSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQzs7QUFFckMsY0FBTSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQzs7QUFFbEMsY0FBTSxDQUFDLHVCQUF1QixHQUFHLE9BQU8sQ0FBQzs7QUFFekMsWUFBTSxJQUFJLEdBQUcsU0FBUCxJQUFJLEdBQVM7O0FBRWYsa0JBQU0sQ0FBQyw2QkFBNkIsR0FBRyxzQkFBSyxpQkFBaUIsRUFBRSxDQUFDOztBQUVoRSxrQkFBTSxDQUFDLDhCQUE4QixHQUFHLHNCQUFLLHVCQUF1QixFQUFFLENBQUM7U0FDMUUsQ0FBQzs7QUFFRixZQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxLQUFLLFlBQVksRUFBRTtBQUM3QyxnQkFBSSxFQUFFLENBQUM7U0FDVixNQUFNOzs7QUFHSCxvQkFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07QUFDaEQsb0JBQUksRUFBRSxDQUFDO2FBQ1YsQ0FBQyxDQUFDO1NBQ047O0NBQ0o7Ozs7OztJQU1LLFFBQVE7YUFBUixRQUFROzhCQUFSLFFBQVE7OztpQkFBUixRQUFROzs7Ozs7O2VBTUUsZUFBQyxRQUFRLEVBQUU7QUFDbkIsMkJBQWMsTUFBTSxDQUFDLHVCQUF1QixFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzNEOzs7Ozs7OztlQU1TLGVBQUc7QUFDVCxtQkFBTyxNQUFNLENBQUMsdUJBQXVCLENBQUM7U0FDekM7Ozs7Ozs7O2VBTWlCLHVCQUFHO0FBQ2pCLGdCQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFO0FBQzlCLHNCQUFNLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7YUFDekY7O0FBRUQsbUJBQU8sTUFBTSxDQUFDLG9CQUFvQixDQUFDO1NBQ3RDOzs7Ozs7OztlQU1tQix5QkFBRztBQUNuQixnQkFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRTtBQUNoQyxzQkFBTSxDQUFDLHNCQUFzQixHQUFHLGNBQWMsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEFBQUMsQ0FBQzthQUNyRztBQUNELG1CQUFPLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQztTQUN4Qzs7Ozs7Ozs7ZUFNVSxnQkFBRztBQUNWLGdCQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFO0FBQzdCLHNCQUFNLENBQUMsbUJBQW1CLEdBQUcsZUFBZSxJQUFJLE1BQU0sQ0FBQzthQUMxRDtBQUNELG1CQUFPLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztTQUNyQzs7Ozs7OztlQUt3Qiw4QkFBRztBQUN4QixtQkFBTyxNQUFNLENBQUMsOEJBQThCLENBQUM7U0FDaEQ7Ozs7Ozs7ZUFLdUIsNkJBQUc7QUFDdkIsbUJBQU8sTUFBTSxDQUFDLDZCQUE2QixDQUFDO1NBQy9DOzs7Ozs7O2VBS2lCLHVCQUFHO0FBQ2pCLG1CQUFPLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztTQUN6Qzs7O1dBdkVDLFFBQVE7OztxQkFBUixRQUFRIiwiZmlsZSI6Ii9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL3V0aWwvU2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IERhdmlkIEhlaWRyaWNoLCBCb3dsaW5nWCA8bWVAYm93bGluZ3guY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFV0aWwgZnJvbSAndXRpbC9VdGlsJztcblxuY29uc3QgRE9NX0NPTVBMRVRFID0gJ2NvbXBsZXRlJztcblxuLy8gd2UgYXR0YWNoIGdsb2JhbCBzZXR0aW5ncyB0byBnbG9iYWwgb25jZSBiZWNhdXNlIHNldHRpbmdzIG1pZ2h0IGJlIHNoYXJlZCBhIGxvdCBvZiB0aW1lcyB0cm91Z2ggdGhlIGFwcGxpY2F0aW9uXG4vLyBNYXliZSBmaW5kIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhhdCBzY2VuYXJpb1xuaWYgKCFnbG9iYWwuRkxFWENTU19HTE9CQUxfU0VUVElOR1MpIHtcblxuICAgIGdsb2JhbC5GTEVYQ1NTX0dMT0JBTF9TRVRUSU5HUyA9IHtcbiAgICAgICAgLy8gZGVmaW5lZCBicmVha3BvaW50IGZvciBzbWFsbCBkZXZpY2VzIDwgblxuICAgICAgICBzbWFsbEJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgLy8gbm9kZXMgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCB3aGVuIG5vIHNjcm9sbGJhciBpcyBleHBlY3RlZFxuICAgICAgICBzY3JvbGxiYXJVcGRhdGVOb2RlczogZ2xvYmFsLmRvY3VtZW50LmJvZHkgIT09IG51bGwgPyBbZ2xvYmFsLmRvY3VtZW50LmJvZHldIDogW10sXG4gICAgICAgIC8vIGFkZGl0aW9uYWwgRGVsYXkgdW50aWwgZGFya2VuZXIgaXMgZnVsbHkgaGlkZGVuXG4gICAgICAgIGRhcmtlbmVyRmFkZURlbGF5OiAxMDAsXG4gICAgICAgIC8vIGNsYXNzIHRoYXQgaXMgYWRkZWQgaWYgY2FudmFzIGhhcyBiZWVuIHRvZ2dsZWRcbiAgICAgICAgY2FudmFzVG9nZ2xlZENsYXNzOiAndG9nZ2xlZC1jYW52YXMnXG4gICAgfTtcblxuICAgIGdsb2JhbC5GTEVYQ1NTX0NPTlNUX0lTX0lPUyA9IG51bGw7XG5cbiAgICBnbG9iYWwuRkxFWENTU19DT05TVF9JU19UT1VDSCA9IG51bGw7XG5cbiAgICBnbG9iYWwuRkxFWENTU19DT05TVF9JU19JRSA9IG51bGw7XG5cbiAgICBnbG9iYWwuRkxFWENTU19DT05TVF9UQUJfRVZFTlQgPSAnY2xpY2snO1xuXG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgLy8gTWVhc3VyZSBzY3JvbGxiYXIgd2lkdGhcbiAgICAgICAgZ2xvYmFsLkZMRVhDU1NfQ09OU1RfU0NST0xMQkFSX1dJRFRIID0gVXRpbC5nZXRTY3JvbGxCYXJXaWR0aCgpO1xuICAgICAgICAvLyBkZXRlY3QgcmlnaHQgdHJhbnNpdGlvbiBlbmQgZXZlbnRcbiAgICAgICAgZ2xvYmFsLkZMRVhDU1NfQ09OU1RfVFJBTlNJVElPTl9FVkVOVCA9IFV0aWwud2hpY2hUcmFuc2l0aW9uRW5kRXZlbnQoKTtcbiAgICB9O1xuXG4gICAgaWYgKGdsb2JhbC5kb2N1bWVudC5yZWFkeVN0YXRlID09PSBET01fQ09NUExFVEUpIHtcbiAgICAgICAgaW5pdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCBnbG9iYWwuZG9jdW1lbnQuYm9keSBpcyBub3QgYXZhaWxhYmxlIGlmIHRoZSBkb2N1bWVudCBpcyBub3RcbiAgICAgICAgLy8gbG9hZGVkIGNvbXBsZXRlbHlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIGluaXQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIFV0aWxpdHkgY2xhc3MgdGhhdCBzZXR1cHMgZ2xvYmFsIHNldHRpbmdzXG4gKi9cbmV4cG9ydCBkZWZhdWx0XG5jbGFzcyBTZXR0aW5ncyB7XG5cbiAgICAvKipcbiAgICAgKiBTZXR1cCBnbG9iYWwgc2V0dGluZ3MsIG92ZXJ3cml0ZSBkZWZhdWx0IHZhbHVlc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZXR0aW5nc1xuICAgICAqL1xuICAgIHN0YXRpYyBzZXR1cChzZXR0aW5ncykge1xuICAgICAgICBPYmplY3QuYXNzaWduKGdsb2JhbC5GTEVYQ1NTX0dMT0JBTF9TRVRUSU5HUywgc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VzcyB0byBnbG9iYWwgc2V0dGluZ3NcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQoKSB7XG4gICAgICAgIHJldHVybiBnbG9iYWwuRkxFWENTU19HTE9CQUxfU0VUVElOR1M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZWN0cyBhIElPUyBEZXZpY2UsIGNhY2hlcyBzdWJzZXF1ZW50IGNhbGxzXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzSW9zRGV2aWNlKCkge1xuICAgICAgICBpZiAoIWdsb2JhbC5GTEVYQ1NTX0NPTlNUX0lTX0lPUykge1xuICAgICAgICAgICAgZ2xvYmFsLkZMRVhDU1NfQ09OU1RfSVNfSU9TID0gZ2xvYmFsLm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUGFkfGlQaG9uZXxpUG9kKS9pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnbG9iYWwuRkxFWENTU19DT05TVF9JU19JT1M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZWN0cyBhIHRvdWNoIGRldmljZSwgY2FjaGVzIHN1YnNlcXVlbnQgY2FsbHNcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNUb3VjaERldmljZSgpIHtcbiAgICAgICAgaWYgKCFnbG9iYWwuRkxFWENTU19DT05TVF9JU19UT1VDSCkge1xuICAgICAgICAgICAgZ2xvYmFsLkZMRVhDU1NfQ09OU1RfSVNfVE9VQ0ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgISEoZ2xvYmFsLm5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2xvYmFsLkZMRVhDU1NfQ09OU1RfSVNfVE9VQ0g7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIGN1cnJlbnQgYnJvd3NlciBpcyBJbnRlcm5ldCBFeHBsb3JlclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufCp9XG4gICAgICovXG4gICAgc3RhdGljIGlzSUUoKSB7XG4gICAgICAgIGlmICghZ2xvYmFsLkZMRVhDU1NfQ09OU1RfSVNfSUUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5GTEVYQ1NTX0NPTlNUX0lTX0lFID0gXCJBY3RpdmVYT2JqZWN0XCIgaW4gd2luZG93O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnbG9iYWwuRkxFWENTU19DT05TVF9JU19JRTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRUcmFuc2l0aW9uRXZlbnQoKSB7XG4gICAgICAgIHJldHVybiBnbG9iYWwuRkxFWENTU19DT05TVF9UUkFOU0lUSU9OX0VWRU5UO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtpbnR9XG4gICAgICovXG4gICAgc3RhdGljIGdldFNjcm9sbGJhcldpZHRoKCkge1xuICAgICAgICByZXR1cm4gZ2xvYmFsLkZMRVhDU1NfQ09OU1RfU0NST0xMQkFSX1dJRFRIO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGdldFRhYkV2ZW50KCkge1xuICAgICAgICByZXR1cm4gZ2xvYmFsLkZMRVhDU1NfQ09OU1RfVEFCX0VWRU5UO1xuICAgIH1cbn1cbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// the whatwg-fetch polyfill installs the fetch() function
	// on the global object (window or self)
	//
	// Return that as the export for use in Webpack, Browserify etc.
	__webpack_require__(103);
	module.exports = self.fetch.bind(self);


/***/ },
/* 103 */
/***/ function(module, exports) {

	(function() {
	  'use strict';
	
	  if (self.fetch) {
	    return
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = name.toString();
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = value.toString();
	    }
	    return value
	  }
	
	  function Headers(headers) {
	    this.map = {}
	
	    var self = this
	    if (headers instanceof Headers) {
	      headers.forEach(function(name, values) {
	        values.forEach(function(value) {
	          self.append(name, value)
	        })
	      })
	
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        self.append(name, headers[name])
	      })
	    }
	  }
	
	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var list = this.map[name]
	    if (!list) {
	      list = []
	      this.map[name] = list
	    }
	    list.push(value)
	  }
	
	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }
	
	  Headers.prototype.get = function(name) {
	    var values = this.map[normalizeName(name)]
	    return values ? values[0] : null
	  }
	
	  Headers.prototype.getAll = function(name) {
	    return this.map[normalizeName(name)] || []
	  }
	
	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }
	
	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)]
	  }
	
	  // Instead of iterable for now.
	  Headers.prototype.forEach = function(callback) {
	    var self = this
	    Object.getOwnPropertyNames(this.map).forEach(function(name) {
	      callback(name, self.map[name])
	    })
	  }
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }
	
	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    reader.readAsArrayBuffer(blob)
	    return fileReaderReady(reader)
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    reader.readAsText(blob)
	    return fileReaderReady(reader)
	  }
	
	  var support = {
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob();
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self
	  }
	
	  function Body() {
	    this.bodyUsed = false
	
	
	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (!body) {
	        this._bodyText = ''
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	    }
	
	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }
	
	      this.arrayBuffer = function() {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }
	
	      this.text = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text')
	        } else {
	          return Promise.resolve(this._bodyText)
	        }
	      }
	    } else {
	      this.text = function() {
	        var rejected = consumed(this)
	        return rejected ? rejected : Promise.resolve(this._bodyText)
	      }
	    }
	
	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }
	
	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }
	
	    return this
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }
	
	  function Request(url, options) {
	    options = options || {}
	    this.url = url
	
	    this.credentials = options.credentials || 'omit'
	    this.headers = new Headers(options.headers)
	    this.method = normalizeMethod(options.method || 'GET')
	    this.mode = options.mode || null
	    this.referrer = null
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && options.body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(options.body)
	  }
	
	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }
	
	  function headers(xhr) {
	    var head = new Headers()
	    var pairs = xhr.getAllResponseHeaders().trim().split('\n')
	    pairs.forEach(function(header) {
	      var split = header.trim().split(':')
	      var key = split.shift().trim()
	      var value = split.join(':').trim()
	      head.append(key, value)
	    })
	    return head
	  }
	
	  Body.call(Request.prototype)
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }
	
	    this._initBody(bodyInit)
	    this.type = 'default'
	    this.url = null
	    this.status = options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = options.statusText
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
	    this.url = options.url || ''
	  }
	
	  Body.call(Response.prototype)
	
	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;
	
	  self.fetch = function(input, init) {
	    // TODO: Request constructor should accept input, init
	    var request
	    if (Request.prototype.isPrototypeOf(input) && !init) {
	      request = input
	    } else {
	      request = new Request(input, init)
	    }
	
	    return new Promise(function(resolve, reject) {
	      var xhr = new XMLHttpRequest()
	
	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL
	        }
	
	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL')
	        }
	
	        return;
	      }
	
	      xhr.onload = function() {
	        var status = (xhr.status === 1223) ? 204 : xhr.status
	        if (status < 100 || status > 599) {
	          reject(new TypeError('Network request failed'))
	          return
	        }
	        var options = {
	          status: status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        }
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options))
	      }
	
	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.open(request.method, request.url, true)
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }
	
	      request.headers.forEach(function(name, values) {
	        values.forEach(function(value) {
	          xhr.setRequestHeader(name, value)
	        })
	      })
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})();


/***/ },
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _Form = __webpack_require__(8);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	var _Tooltip = __webpack_require__(97);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _utilSettings = __webpack_require__(101);
	
	var _utilSettings2 = _interopRequireDefault(_utilSettings);
	
	// default export as component object
	exports['default'] = {
	    Form: _Form2['default'],
	    Settings: _utilSettings2['default'],
	    Tooltip: _Tooltip2['default']
	};
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL21vZHVsZXMvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7O29CQUVJLE1BQU07Ozs7dUJBQ0gsU0FBUzs7Ozs0QkFDUixlQUFlOzs7OztxQkFHckI7QUFDWCxRQUFJLG1CQUFNO0FBQ1YsWUFBUSwyQkFBVTtBQUNsQixXQUFPLHNCQUFTO0NBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL21vZHVsZXMvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEZvcm0gZnJvbSAnRm9ybSc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdUb29sdGlwJztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICd1dGlsL1NldHRpbmdzJztcblxuLy8gZGVmYXVsdCBleHBvcnQgYXMgY29tcG9uZW50IG9iamVjdFxuZXhwb3J0IGRlZmF1bHQge1xuICAgIEZvcm06IEZvcm0sXG4gICAgU2V0dGluZ3M6IFNldHRpbmdzLFxuICAgIFRvb2x0aXA6IFRvb2x0aXBcbn07XG4iXX0=

/***/ }
/******/ ])
});
;
//# sourceMappingURL=../maps/form.map