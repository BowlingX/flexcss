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

/*!
 * FlexCss.Form
 * Licensed under the MIT License (MIT)
 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
 */

'use strict';


/*global HTMLFormElement, fetch, FormData, clearTimeout, NodeList*/

import Tooltip from 'Tooltip';
export * from 'isomorphic-fetch';
import Event from 'util/Event';
import Util from 'util/Util';
import Settings from 'util/Settings';

const LOADING_CLASS = 'loading';
const DATA_ELEMENT_INVALID = 'data-flexcss-invalid';
const REMOTE = 'data-remote';
const REMOTE_ACTION = 'data-remote-action';
const ATTR_DISABLE_INLINE = 'data-disable-inline-validation';
const ATTR_DISABLE_REALTIME = 'data-disable-realtime-validation';
const ATTR_VALIDATOR = 'data-validate';
const ATTR_DATA_CUSTOM_MESSAGE = 'data-validation-message';
const ATTR_DATA_CUSTOM_LABEL = 'data-custom-label';
const ATTR_VALIDATE_VISIBILITY = 'data-validate-visibility';
const ATTR_ERROR_TARGET_ID = 'data-error-target';
const ATTR_DEPENDS = 'data-depends-selector';
const CONST_USE_JSON = 'json';
const CONST_REALTIME_EVENT = 'input';
const FOCUS_TOOLTIP_DELAY = 20;
const CLICK_TOOLTIP_DELAY = 150;
/**
 * Triggered when form is fully initialized and handlers are binded
 * @type {string}
 */
export const EVENT_FORM_READY = 'flexcss.form.ready';
/**
 * Fires when a form is submitted, cancelable
 * @type {string}
 */
export const EVENT_FORM_SUBMIT = 'flexcss.form.submit';
/**
 * Fired directly after the form has been submitted via ajax
 * @type {string}
 */
export const EVENT_FORM_AFTER_AJAX_SUBMIT = 'flexcss.form.afterAjaxSubmit';
/**
 * Fired when ajax events did complete
 * @type {string}
 */
export const EVENT_FORM_AJAX_COMPLETED = 'flexcss.form.ajaxCompleted';

/**
 * A HTML5 Form Validation replacement
 */

export default
class Form {
    /**
     * @param {HTMLElement} form
     * @param [options] optional options
     */
    constructor(form, options) {

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
        this.currentValidationFuture = new Promise(() => {
        });

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
            formatErrorTooltip: (error) => {
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
            // if you have a fixed header, either set a number or function here
            scrollToElementDiff: 0
        };

        // overwrite default options
        Object.assign(this.options, options);

        // apply settings from attributes
        Util.applyOptionsFromElement(form, this.options);

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
     * Submits this form, either via ajax or just classical (default)
     * @param {HTMLFormElement} thisForm
     * @param {Event} e
     * @private
     * @returns {Promise|boolean} returns false if submit is cancled
     */
    _submitFunction(thisForm, e) {
        var shouldUseAjax = thisForm.getAttribute(REMOTE), ajaxPostUrl =
                thisForm.getAttribute(REMOTE_ACTION) ||
                thisForm.getAttribute('action') || window.location.href,
            useJson = CONST_USE_JSON === shouldUseAjax, self = this;

        var ev = Event.dispatch(thisForm, EVENT_FORM_SUBMIT).withOriginal(e).fire();

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
        let defaultHeaders = {
            'X-Requested-With': 'XMLHttpRequest'
        };

        // setup default headers
        if (useJson) {
            Object.assign(defaultHeaders, {
                'Content-Type': this.options.ajaxJsonContentType
            });
        }
        let defaultOptions = Object.assign(this.options.fetchOptions, {
            headers: defaultHeaders,
            method: this.options.ajaxSubmitType
        });

        // support either JSON request payload or normal payload submission
        var serverCall = useJson ? fetch(ajaxPostUrl, Object.assign(defaultOptions, {
            body: JSON.stringify(this.serialize())
        })) : fetch(ajaxPostUrl, Object.assign(defaultOptions, {
            body: new FormData(thisForm)
        }));

        Event.dispatch(thisForm, EVENT_FORM_AFTER_AJAX_SUBMIT).withOriginal(e).fire();

        return serverCall.then((r) => {
            (self._remoteValidationFunction || Form.globalRemoteValidationFunction).apply(self, [r]);

            Event.dispatch(thisForm, EVENT_FORM_AJAX_COMPLETED).withOriginal(e).withDetail(r).fire();
            // always remove error class
            self._formStopLoading();
        });
    }

    /**
     * Serializes a form to a json object
     * @returns {Object}
     */
    serialize() {
        var selectors = [
            'input[name]:not([type="radio"]):enabled',
            'input[type="radio"][name]:checked',
            'select[name]:enabled',
            'textarea[name]:enabled'
        ], inputs = this.form.querySelectorAll(selectors.join(',')), result = {};

        Array.prototype.forEach.call(inputs, function (input) {
            var exists = result[input.name], value = input.value;
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
    handleValidation(field, focus) {
        var fields = (field instanceof Array || field instanceof NodeList) ? field : [field];
        return this._handleValidation(fields, focus, true).then(((r) => {
            if (!r.foundAnyError) {
                // remove tooltips
                if (this.tooltips) {
                    this.tooltips.removeTooltip();
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
    _handleValidation(toValidateFields, focus, scoped) {
        var self = this;
        var arr = Form._createArrayFromInvalidFieldList(toValidateFields), isLocalInvalid = arr.length > 0;
        // focus must appear in the same frame for iOS devices
        if (isLocalInvalid && focus) {
            self._focusElement(arr[0]);
        }
        var validation = scoped ? this._customValidationsForElements(toValidateFields) :
            self.validateCustomFields();
        return validation.then((r) => {
            if (isLocalInvalid) {
                // combine browser and custom validators
                r.foundAnyError = true;
            }
            // get a unique field list of all fields that need to be checked and rendered
            // it's possible that we have duplicates in non scoped mode
            let thisToValidateFields = scoped ? toValidateFields :
                Array.from(arr).concat(r.checkedFields);
            r.checkedFields = thisToValidateFields;
            let foundInvalidFields = self.prepareErrors(thisToValidateFields, false),
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

    _setupErrorMessages(field, validity) {
        return Form.globalErrorMessageHandler ?
            Form.globalErrorMessageHandler.apply(this, [field, validity]) : false;
    }

    /**
     * Handles class labels for elements
     * @param {Object} fields
     * @private
     */
    _handleLabels(fields) {
        Object.keys(fields).forEach(function (id) {
            let labels = this.getForm().querySelectorAll('[for="' + id + '"]'), invalid = fields[id];
            if (labels.length) {
                for (let labelsIndex = 0; labelsIndex < labels.length; labelsIndex++) {
                    let labelEl = labels[labelsIndex];
                    // we can't use toggle attribute, not supported in IE
                    if (invalid) {
                        this._markElementInvalid(labelEl);
                    } else {
                        this._markElementValid(labelEl);
                    }
                }
            }
        }.bind(this));
    }

    /**
     * @param el
     * @private
     */
    _markElementInvalid(el) {
        el.setAttribute(DATA_ELEMENT_INVALID, "true");
        el.classList.add(this.options.inputErrorClass);
    }

    /**
     * @param el
     * @private
     */
    _markElementValid(el) {
        el.removeAttribute(DATA_ELEMENT_INVALID);
        el.classList.remove(this.options.inputErrorClass);
    }

    /**
     * A List of invalid elements (:invalid)
     * @returns {Array}
     * @private
     */
    _getInvalidElements() {
        return Array.prototype.filter.call(this.getForm().querySelectorAll(":invalid"), function (r) {
            return !(r instanceof HTMLFieldSetElement);
        });
    }

    /**
     * @param {HTMLElement} thisParent
     * @private
     */
    _removeElementErrors(thisParent) {
        let errors = thisParent.querySelectorAll('.' + this.options.containerErrorClass), inputsWithErrorClasses =
            thisParent.querySelectorAll(`[${DATA_ELEMENT_INVALID}]`);
        for (let elementErrorIndex = 0; elementErrorIndex < errors.length; elementErrorIndex++) {
            errors[elementErrorIndex].parentNode.removeChild(errors[elementErrorIndex]);
        }
        for (let inputErrorIndex = 0; inputErrorIndex < inputsWithErrorClasses.length; inputErrorIndex++) {
            let el = inputsWithErrorClasses[inputErrorIndex];
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
    registerValidator(name, validator) {
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
    _runValidation(validationRef, field) {
        if (!this._validators[validationRef]) {
            throw 'Could not found validator: ' + validationRef;
        }
        var cl = field.classList, future = this._validators[validationRef].apply(this, [field, this.form]);
        cl.add(LOADING_CLASS);
        future.then(() => {
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
    _customValidationsForElements(fields) {
        var futures = [], fieldsLength = fields.length, checkedFields = [];
        for (var iVal = 0; iVal < fieldsLength; iVal++) {
            var field = fields[iVal], validationRef = field.getAttribute(ATTR_VALIDATOR), validity = field.validity;
            if (this._validators[validationRef]) {
                // use local validation first and then continue with custom validations
                if (Form._shouldNotValidateField(field) || (validity && !validity.customError && !validity.valid)) {
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
        return Promise.all(futures).then(function (allFutures) {
            let l = allFutures.length;
            let result = {
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
    removeErrors() {
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
    prepareErrors(fields, removeAllErrors) {
        if (removeAllErrors) {
            this.removeErrors();
        }
        let labelGroups = {}, invalidFields = [];

        function handleAdditionalLabels(isInvalid, thisLabelGroup, field) {
            let additionalLabels = field.getAttribute(ATTR_DATA_CUSTOM_LABEL) ||
                field.id, group = thisLabelGroup[additionalLabels];
            if (additionalLabels) {
                // check additionally if field is currently marked as invalid
                // so the label is not marked as error if no field is marked as one
                group = group ? group : isInvalid;
                thisLabelGroup[additionalLabels] = group;
            }
        }

        // We save all validations in an extra property because we need to reset the validity due some
        // implementation errors in other browsers then chrome
        for (let i = 0; i < fields.length; i++) {
            let field = fields[i], errorTarget = Form._findErrorTarget(field), parent = errorTarget.parentNode,
                validity = field.validity, isInvalid = validity && !validity.valid;
            if (Form._shouldNotValidateField(field)) {
                continue;
            }
            field.flexFormsSavedValidity = JSON.parse(JSON.stringify(validity));
            handleAdditionalLabels(isInvalid, labelGroups, field);
            if (isInvalid) {
                if (!removeAllErrors) {
                    // Remove current errors:
                    this._removeElementErrors(parent);
                }
                // setup custom error messages:
                this._setupErrorMessages(field, validity);
                let msg = field.validationMessage;

                // mark fields as invalid
                this._markElementInvalid(errorTarget);
                this._markElementInvalid(field);

                if (this.options.appendError) {
                    parent.insertAdjacentHTML("beforeend",
                        `<div class="${this.options.containerErrorClass}">${msg}</div>`);
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
                this._removeElementErrors(parent);
            }
            // We have to reset the custom validity here to allow native validations work again
            field.setCustomValidity('');
        }
        // if validates a single field we need to check the linked fields to a label:
        if (fields.length === 1) {
            let field = fields[0];
            let id = field.getAttribute(ATTR_DATA_CUSTOM_LABEL) || field.id;
            if (id) {
                let linkedFields = Array.from(
                    this.getForm().querySelectorAll(`[${ATTR_DATA_CUSTOM_LABEL}="${id}"], #${id}`));
                linkedFields.forEach(function (thisField) {
                    let validity = thisField.validity, isInvalid = validity && !validity.valid &&
                        this._isElementInvalidElement(thisField);
                    handleAdditionalLabels(isInvalid, labelGroups, thisField);
                }.bind(this));
            }
        }
        this._handleLabels(labelGroups);
        return invalidFields;
    }

    /**
     * Validates all custom fields
     * @returns {Promise}
     */
    validateCustomFields() {
        return this._customValidationsForElements(
            this.form.querySelectorAll("[data-validate]"));
    }

    /**
     * Tests if a field should be validated
     * @param {HTMLElement} field
     * @returns {boolean}
     * @private
     */
    static _shouldNotValidateField(field) {
        var target = Form._findErrorTarget(field);
        return target instanceof HTMLFieldSetElement ||
            (target.hasAttribute(ATTR_VALIDATE_VISIBILITY) && !Util.isVisible(target));
    }

    /**
     * Creates an array from a node list with invalid items
     * This Method expicitly checks if field should not be validated so it can be used to foucs a field
     * @param list
     * @returns {Array}
     * @private
     */
    static _createArrayFromInvalidFieldList(list) {
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


    /**
     * This form
     * @returns {HTMLElement}
     */
    getForm() {
        return this.form;
    }

    /**
     * Registers a function that handles remote validation
     * @param {Function} func
     * @returns {Form}
     */
    registerRemoteValidation(func) {
        this._remoteValidationFunction = func;
        return this;
    }


    /**
     * Formats the error content for the tooltip
     * @param {String} error
     * @returns {String}
     * @private
     */
    _formatErrorTooltip(error) {
        return this.options.formatErrorTooltip.apply(this, [error]);
    }

    /**
     * Tries to find a custom error target on given target
     * @param target
     * @returns {HTMLElement}
     * @private
     */
    static _findErrorTarget(target) {
        var el = target.getAttribute(ATTR_ERROR_TARGET_ID) || target,
            foundTarget = el instanceof HTMLElement ? el : global.document.getElementById(el);
        if (!foundTarget) {
            throw 'Given error target did not exsits:' + target;
        }
        return foundTarget;
    }

    /**
     * Creates a tooltip at given element, will only create a new instance if not created
     * @param {HTMLElement} target
     * @param {Boolean} [remove]
     */
    showAndOrCreateTooltip(target, remove) {
        var self = this;
        if (!this.tooltips && this.options.createTooltips) {
            this.tooltips = new Tooltip(this.getForm(), {
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
            self.tooltips.createTooltip(errorTarget,
                self._formatErrorTooltip(target.flexFormsSavedValidationMessage), false);
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
    _isElementInvalidElement(el) {
        return el.hasAttribute(DATA_ELEMENT_INVALID);
    }

    /**
     * Handles invalid event of a form
     * @param {Event} e
     * @returns {Promise|boolean}
     * @private
     */
    _checkIsInvalid(e) {
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
    _getDependentFields(field) {
        let fieldSelector = field.getAttribute(ATTR_DEPENDS), base = [field];
        if (fieldSelector) {
            base.push.apply(base, Array.prototype.slice.apply(
                this.getForm().querySelectorAll(fieldSelector)));
        }
        return base;
    }

    /**
     * @private
     * @param {HTMLElement} [target]
     */
    _handleTooltipInline(target) {
        if (this.tooltips) {
            this.tooltips.removeTooltip(target);
        }
    }

    /**
     * Initializes validation for a given form, registers event handlers
     */
    initFormValidation() {
        // Suppress the default bubbles
        var form = this.getForm(),
            self = this,
            invalidEvent = 'invalid';

        form.addEventListener(invalidEvent, function (e) {
            e.preventDefault();
        }, true);

        Util.addEventOnce(invalidEvent, form, function handleInvalid(e) {
            self._formLoading();
            var result = self._checkIsInvalid(e);
            if (result) {
                self.currentValidationFuture = new Promise((resolve) => {
                    result.then(function (r) {
                        setTimeout(function () {
                            Util.addEventOnce(invalidEvent, form, handleInvalid, true);
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

        form.addEventListener('reset', function () {
            this.removeErrors();
        }.bind(this));


        // Timeout for keys:
        var TIMEOUT_KEYDOWN, KEYDOWN_RUNNING = false;

        // resets keydown events
        function clearKeyDownTimeout() {
            KEYDOWN_RUNNING = false;
            clearTimeout(TIMEOUT_KEYDOWN);
        }

        // setup custom realtime event if given
        if (self.options.realtime) {
            form.addEventListener(CONST_REALTIME_EVENT, function (e) {
                if (self._formIsLoading()) {
                    return;
                }
                var target = e.target;
                clearTimeout(TIMEOUT_KEYDOWN);
                if (KEYDOWN_RUNNING) {
                    return;
                }
                TIMEOUT_KEYDOWN = setTimeout(() => {
                    let isStillTarget = document.activeElement === e.target;
                    if (!_checkIsValidRealtimeElement(target)) {
                        return;
                    }
                    if (isStillTarget) {
                        self._handleTooltipInline();
                    }
                    KEYDOWN_RUNNING = true;
                    let dependentFields = self._getDependentFields(target);
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
            let attr = target.getAttribute("type");
            return (attr !== "radio" && attr !== "checkbox" && attr !== "submit");
        }


        /**
         * Validates if is valid realtime element
         * @param {HTMLElement} target
         * @returns {boolean}
         * @private
         */
        function _checkIsValidRealtimeElement(target) {
            return !target.hasAttribute(ATTR_DISABLE_REALTIME) && !target.hasAttribute(ATTR_DISABLE_INLINE);
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

        form.addEventListener('blur', function (e) {
            // do not hide tooltip after change event
            if (!e.target.flexcssKeepTooltips) {
                self._handleTooltipInline(e.target);
            }
            delete e.target.flexcssKeepTooltips;
        }, true);

        // handle focus on input elements
        // will show an error if field is invalid
        form.addEventListener("focus", function (e) {
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
            form.addEventListener("change", function (e) {
                const target = e.target;
                if (self._formIsLoading() || !_checkIsValidInlineCheckElement(target)) {
                    return;
                }
                clearKeyDownTimeout();
                const name = target.getAttribute('name');
                let inputs = name ? form.querySelectorAll('[name="' + name + '"]') : [target];
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
        const submitListener = function (e) {
            self._submitListener(e, submitListener);
        };
        form.addEventListener("submit", submitListener);

        Event.dispatchAndFire(form, EVENT_FORM_READY);
    }

    /* Loading states, unfortunately we can't check if a promise is pending :/*/
    /* TODO: Maybe wrap promise to extend this functionality */

    _formLoading() {
        this.getForm().classList.add(LOADING_CLASS);
    }

    _formStopLoading() {
        this.getForm().classList.remove(LOADING_CLASS);
    }

    _formIsLoading() {
        return this.getForm().classList.contains(LOADING_CLASS);
    }

    // this defines the logic after a change event when a tooltip is shown
    // because we call this method inside the change event, the click would be immeditally executed with the change
    // event when not using setTimeout(). There might be another solution for this...
    _handleTooltipHideClickAfterChange() {
        const self = this;
        if (this.options.createTooltips) {
            setTimeout(function () {
                Util.addEventOnce(Settings.getTabEvent(), global.document.body, function (t) {
                    if (!self._isElementInvalidElement(t.target)) {
                        self._handleTooltipInline();
                    }
                });
            }, CLICK_TOOLTIP_DELAY);
        }
    }

    _focusElement(el) {
        el.focus();
        Util.scrollToElement(el, this.options.scrollToElementDiff);
    }

    /**
     * Listener that is executed on form submit
     * @param e
     * @param submitListener
     * @returns {boolean}
     * @private
     */
    _submitListener(e, submitListener) {

        const form = this.getForm(),
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
            self.currentValidationFuture = new Promise((resolve) => {
                var validation = self.validateCustomFields();
                validation.then(function (r) {
                    // because custom validators may mark multiple fields as invalid, we get all of them in the form
                    var fields = self._getInvalidElements(),
                        errors = self.prepareErrors(fields, false), firstError = errors[0];
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
    _handleSubmit(e) {
        this._submitFunction(this.form, e);
    }


    /**
     * Registers a global event Handler
     * @param errorFunc
     */
    static registerErrorMessageHandler(errorFunc) {
        Form.globalErrorMessageHandler = errorFunc;
    }

    /**
     * Initialize forms for a specific selector
     * @param {String} selector
     * @param {Object} [options]
     * @return {array.<Form>}
     */
    static init(selector, options) {
        var forms = selector instanceof HTMLElement ? selector.querySelectorAll('form') :
            document.querySelectorAll(selector), instances = [];
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
    static registerValidator(name, validator) {
        Form.globalValidators[name] = validator;
        return Form;
    }

    /**
     * Registers a global function that is called when a form should validate the response of a server
     * @param {Function} func
     * @returns {Form}
     */
    static registerGlobalRemoteValidationFunction(func) {
        Form.globalRemoteValidationFunction = func;
        return Form;
    }
}


/**
 * Global validators
 * @type {Array}
 */
Form.globalValidators = [];

/**
 * Global Remote validation function
 */
Form.globalRemoteValidationFunction = function () {
};

/**
 * Handles custom error messages extracts custom message by default
 */
Form.globalErrorMessageHandler = (field, validity) => {
    if (!validity.customError) {
        let customMsg = field.getAttribute(ATTR_DATA_CUSTOM_MESSAGE);
        if (customMsg) {
            field.setCustomValidity(customMsg);
        }
    }
};
