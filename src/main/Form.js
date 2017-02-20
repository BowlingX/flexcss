/* global HTMLFormElement, fetch, FormData, clearTimeout, NodeList */

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

import Tooltip from './Tooltip';
import 'isomorphic-fetch';
import Event from './util/Event';
import Util from './util/Util';
import Settings from './util/Settings';
import DestroyableWidget from './DestroyableWidget';

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

class Form extends DestroyableWidget {
    /**
     * @param {HTMLElement} form
     * @param [options] optional options
     */
    constructor(form, options) {
        super();

        if (!(form instanceof HTMLFormElement)) {
            throw new Error('argument {0} form needs to be an form element');
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
                return `<i class="icon-attention"></i> ${error}`;
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
            tooltipOptions: {
                containerClass: 'error-tooltip'
            },
            shouldScrollToElement: true,
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

    destroy() {
        super.destroy();
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
    _submitFunction(thisForm, e) {
        const self = this;
        const shouldUseAjax = thisForm.getAttribute(REMOTE);
        const ajaxPostUrl = thisForm.getAttribute(REMOTE_ACTION) ||
                thisForm.getAttribute('action') || window.location.href;

        const useJson = CONST_USE_JSON === shouldUseAjax;

        const ev = Event.dispatch(thisForm, EVENT_FORM_SUBMIT).withOriginal(e).fire();

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
        const defaultHeaders = {
            'X-Requested-With': 'XMLHttpRequest'
        };

        // setup default headers
        if (useJson) {
            Object.assign(defaultHeaders, {
                'Content-Type': this.options.ajaxJsonContentType
            });
        }
        const defaultOptions = Object.assign(this.options.fetchOptions, {
            headers: defaultHeaders,
            method: this.options.ajaxSubmitType
        });

        // support either JSON request payload or normal payload submission
        const serverCall = useJson ? fetch(ajaxPostUrl, Object.assign(defaultOptions, {
            body: JSON.stringify(this.serialize())
        })) : fetch(ajaxPostUrl, Object.assign(defaultOptions, {
            body: new FormData(thisForm)
        }));

        Event.dispatch(thisForm, EVENT_FORM_AFTER_AJAX_SUBMIT).withOriginal(e).fire();

        return serverCall.then((r) => {
            (self._remoteValidationFunction || Form.globalRemoteValidationFunction).apply(self, [r]);

            Event.dispatch(thisForm, EVENT_FORM_AJAX_COMPLETED).withOriginal(e).withDetail({ response: r }).fire();
            // always remove error class
            self._formStopLoading();
        });
    }

    /**
     * Serializes a form to a json object
     * @returns {Object}
     */
    serialize() {
        const selectors = [
            'input[name]:not([type="radio"]):enabled',
            'input[type="radio"][name]:checked',
            'select[name]:enabled',
            'textarea[name]:enabled'
        ];
        const inputs = this.form.querySelectorAll(selectors.join(','));
        const result = {};

        Array.prototype.forEach.call(inputs, (input) => {
            const exists = result[input.name];
            const value = input.value;
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
        const fields = (field instanceof Array || field instanceof NodeList) ? field : [field];
        return this._handleValidation(fields, focus, true).then((r) => {
            if (!r.foundAnyError) {
                // remove tooltips
                if (this.tooltips) {
                    this.tooltips.removeTooltip();
                }
            }
            return r;
        });
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
        const self = this;
        const arr = Form._createArrayFromInvalidFieldList(toValidateFields);
        const isLocalInvalid = arr.length > 0;

        // focus must appear in the same frame for iOS devices
        if (isLocalInvalid && focus) {
            self._focusElement(arr[0]);
        }

        const validation = scoped
            ? this._customValidationsForElements(toValidateFields)
            : self.validateCustomFields();
        return validation.then((r) => {
            if (isLocalInvalid) {
                // combine browser and custom validators
                r.foundAnyError = true;
            }
            // get a unique field list of all fields that need to be checked and rendered
            // it's possible that we have duplicates in non scoped mode
            const thisToValidateFields = scoped
                ? toValidateFields
                : Array.from(arr).concat(r.checkedFields);
            r.checkedFields = thisToValidateFields;
            const foundInvalidFields = self.prepareErrors(thisToValidateFields, false);
            const firstInvalidField = foundInvalidFields[0];
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
        Object.keys(fields).forEach((id) => {
            const labels = this.getForm().querySelectorAll(`[for="${id}"]`);
            const invalid = fields[id];
            if (labels.length) {
                for (let labelsIndex = 0; labelsIndex < labels.length; labelsIndex++) {
                    const labelEl = labels[labelsIndex];
                    // we can't use toggle attribute, not supported in IE
                    if (invalid) {
                        this._markElementInvalid(labelEl);
                    } else {
                        this._markElementValid(labelEl);
                    }
                }
            }
        });
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
        return Array.prototype.filter.call(this.getForm().querySelectorAll(":invalid"), (r) => {
            return !(r instanceof HTMLFieldSetElement);
        });
    }

    /**
     * @param {HTMLElement} thisParent
     * @private
     */
    _removeElementErrors(thisParent) {
        const errors = thisParent.querySelectorAll(`.${this.options.containerErrorClass}`);
        const inputsWithErrorClasses = thisParent.querySelectorAll(`[${DATA_ELEMENT_INVALID}]`);
        for (let elementErrorIndex = 0; elementErrorIndex < errors.length; elementErrorIndex++) {
            errors[elementErrorIndex].parentNode.removeChild(errors[elementErrorIndex]);
        }
        for (let inputErrorIndex = 0; inputErrorIndex < inputsWithErrorClasses.length; inputErrorIndex++) {
            const el = inputsWithErrorClasses[inputErrorIndex];
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
            throw new Error(`Could not found validator: ${validationRef}`);
        }
        const cl = field.classList;
        const future = this._validators[validationRef].apply(this, [field, this.form]);
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
        const futures = [];
        const fieldsLength = fields.length;
        const checkedFields = [];
        for (let iVal = 0; iVal < fieldsLength; iVal++) {
            const field = fields[iVal];
            const validationRef = field.getAttribute(ATTR_VALIDATOR);
            const validity = field.validity;
            if (this._validators[validationRef]) {
                // use local validation first and then continue with custom validations
                if (Form._shouldNotValidateField(field) || (validity && !validity.customError && !validity.valid)) {
                    continue;
                }
                checkedFields.push(field);
                futures.push(this._runValidation(validationRef, field));
            } else {
                if (validationRef) {
                    // console.warn('data-validate was set but no validator was found');
                }
            }
        }
        return Promise.all(futures).then((allFutures) => {
            const l = allFutures.length;
            const result = {
                checkedFields,
                foundAnyError: false
            };
            for (let fI = 0; fI < l; fI++) {
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
        const labelGroups = {};
        const invalidFields = [];

        function handleAdditionalLabels(isInvalid, thisLabelGroup, field) {
            const additionalLabels = field.getAttribute(ATTR_DATA_CUSTOM_LABEL) || field.id;
            let group = thisLabelGroup[additionalLabels];
            if (additionalLabels) {
                // check additionally if field is currently marked as invalid
                // so the label is not marked as error if no field is marked as one
                group = group || isInvalid;
                thisLabelGroup[additionalLabels] = group;
            }
        }

        // We save all validations in an extra property because we need to reset the validity due some
        // implementation errors in other browsers then chrome
        for (let i = 0; i < fields.length; i++) {
            const field = fields[i];
            const errorTarget = Form._findErrorTarget(field);
            const parent = errorTarget.parentNode;
            const validity = field.validity;
            const isInvalid = validity && !validity.valid;
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
                const msg = field.validationMessage;

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
            const field = fields[0];
            const id = field.getAttribute(ATTR_DATA_CUSTOM_LABEL) || field.id;
            if (id) {
                const linkedFields = Array.from(
                    this.getForm().querySelectorAll(`[${ATTR_DATA_CUSTOM_LABEL}="${id}"], #${id}`));
                linkedFields.forEach((thisField) => {
                    const validity = thisField.validity;
                    const isInvalid = validity && !validity.valid && this._isElementInvalidElement(thisField);
                    handleAdditionalLabels(isInvalid, labelGroups, thisField);
                });
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
        const target = Form._findErrorTarget(field);
        return target instanceof HTMLFieldSetElement || field.validity === undefined ||
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
        const arr = [];
        for (let i = 0; i < list.length; ++i) {
            const n = list[i];
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
        const el = target.getAttribute(ATTR_ERROR_TARGET_ID) || target;
        const foundTarget = el instanceof HTMLElement ? el : global.document.getElementById(el);
        if (!foundTarget) {
            throw new Error(`Given error target did not exists: ${target}`);
        }
        return foundTarget;
    }

    /**
     * Creates a tooltip at given element, will only create a new instance if not created
     * @param {HTMLElement} target
     * @param {Boolean} [remove]
     */
    showAndOrCreateTooltip(target, remove) {
        const self = this;
        if (!this.tooltips && this.options.createTooltips) {
            this.tooltips = new Tooltip(this.options.tooltipContainer, this.options.tooltipOptions);
        }
        if (!this.options.createTooltips) {
            return false;
        }

        if (!target.flexFormsSavedValidity) {
            return false;
        }
        const errorTarget = Form._findErrorTarget(target);
        let result = false;
        if (!target.flexFormsSavedValidity.valid && self._isElementInvalidElement(errorTarget)) {
            self.tooltips.createTooltip(
                errorTarget,
                self._formatErrorTooltip(target.flexFormsSavedValidationMessage), false
            );
            result = true;
        } else {
            if (remove) {
                self.tooltips.removeTooltip();
            }
        }
        return result;
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
        const invalidFields = this.getForm().querySelectorAll(":invalid");
        return this._handleValidation(invalidFields, true, false);
    }

    /**
     * Will query dependent fields (by selector) that should be validated with given field
     * @param field
     * @returns {NodeList|[]}
     * @private
     */
    _getDependentFields(field) {
        const fieldSelector = field.getAttribute(ATTR_DEPENDS);
        const base = [field];
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
        const self = this;
        const form = this.getForm();
        const invalidEvent = 'invalid';

        /**
         * Validates if is valid realtime element
         * @param {HTMLElement} target
         * @returns {boolean}
         * @private
         */
        function _checkIsValidRealtimeElement(target) {
            return !target.hasAttribute(ATTR_DISABLE_REALTIME) && !target.hasAttribute(ATTR_DISABLE_INLINE);
        }

        form.addEventListener(invalidEvent, (e) => {
            e.preventDefault();
        }, true);

        Util.addEventOnce(invalidEvent, form, function handleInvalid(e) {
            self._formLoading();
            const result = self._checkIsInvalid(e);
            if (result) {
                self.currentValidationFuture = new Promise((resolve) => {
                    result.then((r) => {
                        setTimeout(() => {
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

        this.addEventListener(form, 'reset', () => {
            this.removeErrors();
        });

        // Timeout for keys:
        let TIMEOUT_KEYDOWN;
        let KEYDOWN_RUNNING = false;

        // resets keydown events
        function clearKeyDownTimeout() {
            KEYDOWN_RUNNING = false;
            clearTimeout(TIMEOUT_KEYDOWN);
        }

        // setup custom realtime event if given
        if (self.options.realtime) {
            this.addEventListener(form, CONST_REALTIME_EVENT, (e) => {
                if (self._formIsLoading()) {
                    return;
                }
                const target = e.target;
                clearTimeout(TIMEOUT_KEYDOWN);
                if (KEYDOWN_RUNNING) {
                    return;
                }
                TIMEOUT_KEYDOWN = setTimeout(() => {
                    const isStillTarget = document.activeElement === e.target;
                    if (!_checkIsValidRealtimeElement(target)) {
                        return;
                    }
                    if (isStillTarget) {
                        self._handleTooltipInline();
                    }
                    KEYDOWN_RUNNING = true;
                    const dependentFields = self._getDependentFields(target);
                    self._customValidationsForElements(dependentFields).then(() => {
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
            const attr = target.getAttribute("type");
            return (attr !== "radio" && attr !== "checkbox" && attr !== "submit");
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

        this.addEventListener(form, 'blur', (e) => {
            // do not hide tooltip after change event
            if (!e.target.flexcssKeepTooltips) {
                self._handleTooltipInline(e.target);
            }
            delete e.target.flexcssKeepTooltips;
        }, true);

        // handle focus on input elements
        // will show an error if field is invalid
        this.addEventListener(form, "focus", (e) => {
            if (self._formIsLoading()) {
                return;
            }
            // do not track errors for checkbox and radios on focus:
            if (!_checkIsValidBlurFocusElement(e.target)) {
                return;
            }
            // we need to delay this a little, because Firefox and Safari do not show a tooltip after it
            // just have been hidden (on blur). Maybe fix this with a queue later
            setTimeout(() => {
                self.showAndOrCreateTooltip(e.target);
            }, FOCUS_TOOLTIP_DELAY);
        }, true);

        if (self.options.inlineValidation) {
            // Handle change for checkbox, radios and selects
            this.addEventListener(form, "change", (e) => {
                const target = e.target;
                if (self._formIsLoading() || !_checkIsValidInlineCheckElement(target)) {
                    return;
                }
                clearKeyDownTimeout();
                const name = target.getAttribute('name');
                let inputs = name ? form.querySelectorAll(`[name="${name}"]`) : [target];
                // we only support dependent fields for a single widgets right now
                if (inputs.length === 1) {
                    inputs = self._getDependentFields(target);
                }
                self._customValidationsForElements(inputs).then(() => {
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
            setTimeout(() => {
                Util.addEventOnce(Settings.getTabEvent(), global.document.body, (t) => {
                    if (!self._isElementInvalidElement(t.target)) {
                        self._handleTooltipInline();
                    }
                });
            }, CLICK_TOOLTIP_DELAY);
        }
    }

    _focusElement(el) {
        el.focus();
        if (this.options.shouldScrollToElement) {
            Util.scrollToElement(el, this.options.scrollToElementDiff);
        }
    }

    /**
     * Listener that is executed on form submit
     * @param e
     * @param submitListener
     * @returns {boolean}
     * @private
     */
    _submitListener(e, submitListener) {
        const form = this.getForm();
        const self = this;
        const submitEvent = 'submit';

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
                const validation = self.validateCustomFields();
                validation.then((r) => {
                    // because custom validators may mark multiple fields as invalid, we get all of them in the form
                    const fields = self._getInvalidElements();
                    const errors = self.prepareErrors(fields, false);
                    const firstError = errors[0];
                    if (firstError) {
                        self._focusElement(firstError);
                        self.showAndOrCreateTooltip(firstError, true);
                    }
                    resolve(r);
                });
            });
            self.currentValidationFuture.then((r) => {
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
        const forms = selector instanceof HTMLElement ? selector.querySelectorAll('form') :
            document.querySelectorAll(selector);
        const instances = [];
        for (let i = 0; i < forms.length; i++) {
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
Form.globalRemoteValidationFunction = () => {
};

/**
 * Handles custom error messages extracts custom message by default
 */
Form.globalErrorMessageHandler = (field, validity) => {
    if (!validity.customError) {
        const customMsg = field.getAttribute(ATTR_DATA_CUSTOM_MESSAGE);
        if (customMsg) {
            field.setCustomValidity(customMsg);
        }
    }
};

export default Form;
