/**
 * A HTML5 Validation replacement
 */
(function (document, window, $) {
    "use strict";

    var ERROR_CLASS_NAME = 'form-error', INPUT_ERROR_CLASS = 'invalid', LOADING_CLASS = 'loading',
        ARIA_INVALID ='aria-invalid';
    if (!window.FlexCss) {
        window.FlexCss = {};
    }

    var FlexCss = window.FlexCss;


    /**
     * Enhanced flexcss forms
     * @param {HTMLElement} formElement
     * @param {Object} options
     * @constructor
     */
    FlexCss.Form = function (formElement, options) {

        var self = this;

        self.tooltips = null;

        self.options = {
            createTooltips: true,
            appendError: false
        };

        self.options = $.extend(self.options, options);

        self.hfWidgetInstance = self;

        /**
         * A List of Validators
         * @type {Object}
         * @private
         */
        self._validators = FlexCss.Form.globalValidators;

        /**
         * @param {HTMLElement} field
         * @param {ValidityState} validity
         * @returns {*}
         * @private
         */
        function _setupErrorMessages(field, validity) {
            return FlexCss.Form.globalErrorMessageHandler ?
                FlexCss.Form.globalErrorMessageHandler.apply(self, [field, validity]) : false;
        }

        /**
         *
         * @param {HTMLElement} thisParent
         * @private
         */
        function _removeElementErrors(thisParent) {
            var errors = thisParent.querySelectorAll('.' + ERROR_CLASS_NAME), inputsWithErrorClasses =
                thisParent.querySelectorAll('.' + INPUT_ERROR_CLASS);
            for (var elementErrorIndex = 0; elementErrorIndex < errors.length; elementErrorIndex++) {
                errors[elementErrorIndex].parentNode.removeChild(errors[elementErrorIndex]);
            }
            for (var inputErrorIndex = 0; inputErrorIndex < inputsWithErrorClasses.length; inputErrorIndex++) {
                inputsWithErrorClasses[inputErrorIndex].classList.remove(INPUT_ERROR_CLASS);
                if (self.tooltips) {
                    self.tooltips.removeTooltip(inputsWithErrorClasses[inputErrorIndex]);
                }
            }
        }

        /**
         * Registers a custom validator
         * @param {String} name
         * @param {Function} validator a validation function should always return either a Future(true) or Future(false)
         * even when the field has been invalidated with `setCustomValidity`, because of different browser bugs
         * we can't rely on that
         * @returns {window.FlexCss.Form}
         */
        self.registerValidator = function (name, validator) {
            self._validators[name] = validator;
            return self;
        };

        /**
         * Runs async validation
         * @param {String} validationRef
         * @param {HTMLElement} field
         * @param {HTMLElement} form
         * @returns {*}
         * @private
         */
        function _runValidation(validationRef, field, form) {
            if (!self._validators[validationRef]) {
                throw 'Could not found validator: ' + validationRef;
            }
            var cl = field.classList, future = self._validators[validationRef].apply(self, [field, form]);
            cl.add(LOADING_CLASS);
            future.done(function () {
                cl.remove(LOADING_CLASS);
            });
            return future;
        }

        /**
         * Run custom validations for elements, validations are done async do support XHR Requests or other stuff
         *
         * @param {HTMLElement} form
         * @param {Array|NodeList} fields
         * @returns {$.Deferred} contains either true if validations passed or false if something went wrong
         * @private
         */
        function _customValidationsForElements(form, fields) {
            var futures = [], fieldsLength = fields.length, checkedFields = [];
            for (var iVal = 0; iVal < fieldsLength; iVal++) {
                var field = fields[iVal], validationRef = field.getAttribute('data-validate'), validity = field.validity;
                if (self._validators[validationRef]) {
                    // use local validation first and then continue with custom validations
                    if (!validity.customError && !validity.valid) {
                        continue;
                    }
                    checkedFields.push(field);
                    futures.push(_runValidation(validationRef, field, form));
                }
            }
            return $.when.apply(self, futures).then(function () {
                var allFutures = arguments, l = allFutures.length;
                var result = {
                    checkedFields: checkedFields,
                    foundAnyError: false
                };

                for (var fI = 0; fI < l; fI++) {
                    if (!allFutures[fI]) {
                        result.foundAnyError = true;
                    }
                }
                return $.Deferred().resolve(result);
            });
        }

        /**
         * Will handle errors for given fields
         * @param {HTMLElement} form
         * @param {Array|NodeList} fields
         * @param {Boolean} removeAllErrors
         */
        function prepareErrors(form, fields, removeAllErrors) {
            if (removeAllErrors) {
                _removeElementErrors(form);
            }
            // We save all validations in an extra property because we need to reset the validity due some
            // implementation errors in other browsers then chrome
            for (var i = 0; i < fields.length; i++) {
                var field = fields[i], parent = field.parentNode, validity = field.validity;
                field.flexFormsSavedValidity = JSON.parse(JSON.stringify(validity));
                if (validity && !validity.valid) {
                    if (!removeAllErrors) {
                        // Remove current errors:
                        _removeElementErrors(parent);
                    }
                    // setup custom error messages:
                    _setupErrorMessages(field, validity);
                    field.classList.add('invalid');
                    field.setAttribute(ARIA_INVALID, 'true');
                    if (self.options.appendError) {
                        parent.insertAdjacentHTML("beforeend", '<div class="' + ERROR_CLASS_NAME + '">' +
                        field.validationMessage +
                        "</div>");
                    }
                    field.flexFormsSavedValidationMessage = field.validationMessage;
                } else {
                    field.classList.remove('invalid');
                    field.setAttribute(ARIA_INVALID, 'false');

                    _removeElementErrors(parent);
                }
                // FIXME: We have to reset the custom validity here to allow native validations work again

                field.setCustomValidity('');
            }
        }

        function validateCustomFields(form) {
            return _customValidationsForElements(
                form, form.querySelectorAll("[data-validate]"));
        }

        /**
         * Creates an array from a node list with invalid items
         * On Firefox also Fieldset's seems to be invalid, remove them
         * @param list
         * @returns {Array}
         * @private
         */
        function _createArrayFromInvalidFieldList(list) {
            var arr = [];
            for (var i = 0; i < list.length; ++i) {
                var n = list[i];
                if (!(n instanceof HTMLFieldSetElement)) {
                    arr.push(n);
                }
            }
            return arr;
        }

        /**
         * Formats the error content for the tooltip
         * @param {String} error
         * @returns {String}
         * @private
         */
        function _formatErrorTooltip(error) {
            return '<i class="icon-attention"></i> ' + error;
        }

        /**
         * Creates a tooltip at given element, will create a new instance if not created
         * @param {HTMLElement} target
         * @param {HTMLElement} form
         * @param {Boolean} [remove]
         * @private
         */
        function _showAndOrCreateTooltip(target, form, remove) {
            if (!self.tooltips && self.options.createTooltips) {
                self.tooltips = new FlexCss.Tooltip(form, {
                    containerClass: 'error-tooltip'
                });
            }

            setTimeout(function () {
                if(!target.flexFormsSavedValidity) {
                    return;
                }
                if (!target.flexFormsSavedValidity.valid && target.classList.contains(INPUT_ERROR_CLASS)) {
                    self.tooltips.createTooltip(target,
                       _formatErrorTooltip(target.flexFormsSavedValidationMessage), false);
                } else {
                    if (remove) {
                        self.tooltips.removeTooltip(target);
                    }
                }
            }, 0);

        }

        /**
         * Initializes validation for a given form, registers event handlers
         * @param {HTMLElement} form
         */
        function initFormValidation(form) {
            // Suppress the default bubbles
            var invalidFormFired = false, currentValidationFuture;
            form.addEventListener("invalid", function (e) {
                e.preventDefault();
                var invalidFields = form.querySelectorAll(":invalid");
                var arr = _createArrayFromInvalidFieldList(invalidFields);
                // Prevent fire this N times:
                if (arr.indexOf(e.target) > 0) {
                    return;
                }
                // focus the first field:
                if (arr.length > 0) {
                    setTimeout(function () {
                        arr[0].focus();
                        _showAndOrCreateTooltip(arr[0], form);
                    }, 0);
                }
                currentValidationFuture = $.Deferred();

                var validation = validateCustomFields(form);
                prepareErrors(form, arr, true);
                validation.done(function (r) {
                    prepareErrors(form, r.checkedFields, false);
                    currentValidationFuture.resolve(r);
                    invalidFormFired = false;
                });

            }, true);

            // handle focus out for text elements
            form.addEventListener("blur", function (e) {
                if (self.tooltips) {
                    self.tooltips.removeTooltip(e.target);
                }
                var target = e.target, hasError = false;

                if(!_checkIsValidBlurFocusElement(target)) {
                    return;
                }

                if (target.classList.contains(INPUT_ERROR_CLASS)) {
                    hasError = true;
                }
                _customValidationsForElements(form, [e.target]).done(function () {
                    prepareErrors(form, [e.target], false);
                    if (!hasError) {
                        _showAndOrCreateTooltip(e.target, form);
                    }
                });

            }, true);

            /**
             * Validates if target is a valid input field to check blur and focus events
             * @param {HTMLElement} target
             * @returns {boolean}
             */
            function _checkIsValidBlurFocusElement(target) {
                var attr = target.getAttribute('type');
                return !((attr === 'checkbox' || attr === 'option' || attr === 'submit' ||
                    target instanceof HTMLSelectElement || !(target instanceof HTMLInputElement ||
                target instanceof HTMLTextAreaElement)));
            }
            form.addEventListener("focus", function (e) {
                // do not track errors for checkbox and radios on focus:
                if(!_checkIsValidBlurFocusElement(e.target)) {
                    return;
                }
                _showAndOrCreateTooltip(e.target, form);
            }, true);

            // Handle change for checkbox, radios and selects
            form.addEventListener("change", function (e) {
                var name = e.target.getAttribute('name');
                if (name) {
                    var inputs = form.querySelectorAll('[name="' + name + '"]');
                    _customValidationsForElements(form, inputs).done(function () {
                        prepareErrors(form, inputs, false);
                        _showAndOrCreateTooltip(e.target, form, true);
                    });
                }
            });

            // prevent default if form is invalid
            var submitListener = function (e) {
                e.preventDefault();
                if (form.classList.contains(LOADING_CLASS)) {
                    return false;
                }
                form.classList.add(LOADING_CLASS);
                form.removeEventListener("submit", submitListener);
                _removeElementErrors(form);
                // reset:
                if (form.checkValidity()) {
                    form.addEventListener("submit", submitListener);
                    console.log("check");
                    // Custom validations did never pass
                    currentValidationFuture = $.Deferred();
                    var validation = validateCustomFields(form);
                    validation.done(function (r) {
                        prepareErrors(form, r.checkedFields, false);
                        currentValidationFuture.resolve(r);
                    });
                    currentValidationFuture.done(function (r) {
                        form.removeEventListener("submit", submitListener);
                        form.classList.remove(LOADING_CLASS);
                        if (r.foundAnyError) {
                            form.addEventListener("submit", submitListener);
                        } else {
                            form.submit();
                        }
                    });
                } else {
                    form.classList.remove(LOADING_CLASS);
                    form.addEventListener("submit", submitListener);
                }
            };
            form.addEventListener("submit", submitListener);
        }

        initFormValidation(formElement);
    };

    FlexCss.Form.globalErrorMessageHandler = function () {
    };

    /**
     * Registers a global event Handler
     * @param errorFunc
     */
    FlexCss.Form.registerErrorMessageHandler = function (errorFunc) {
        FlexCss.Form.globalErrorMessageHandler = errorFunc;
    };

    /**
     * Initialize forms for a specific selector
     * @param {String} selector
     * @param {Object} options
     */
    FlexCss.Form.init = function (selector, options) {
        var forms = document.querySelectorAll(selector);
        for (var i = 0; i < forms.length; i++) {
            new FlexCss.Form(forms[i], options);
        }
    };

    FlexCss.Form.globalValidators = [];

    /**
     * Registers a global validator that is usable on all form instasnces
     * @param {String} name
     * @param {Function} validator
     * @returns {Function}
     */
    FlexCss.Form.registerValidator = function (name, validator) {
        FlexCss.Form.globalValidators[name] = validator;
        return FlexCss.Form;
    };

    // initilize forms for all forms
    FlexCss.Form.init("form", {});

})(document, window, jQuery);