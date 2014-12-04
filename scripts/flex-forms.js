/**
 * A HTML5 Validation replacement
 */
(function (document, window, $) {
    "use strict";

    var ERROR_CLASS_NAME = 'form-error', INPUT_ERROR_CLASS = 'invalid';

    if (!window.FlexCss) {
        window.FlexCss = {};
    }

    var FlexCss = window.FlexCss;

    /**
     * Enhanced flexcss forms
     * @param {HTMLElement} formElement
     * @constructor
     */
    FlexCss.Form = function (formElement) {

        var self = this;

        /**
         * A List of Validators
         * @type {Object}
         * @private
         */
        self._validators = [];

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
            }
        }

        /**
         * Registers a custom validator
         * @param {String} name
         * @param {Function} validator
         * @returns {window.FlexCss.Form}
         */
        self.registerValidator = function (name, validator) {
            self._validators[name] = validator;
            return self;
        };

        self.registerValidator('equals', function (field) {
            var def = $.Deferred();
            setTimeout(function () {
                field.setCustomValidity('Die Felder stimmen nicht überein');
                def.resolve(false);
            }, 500);
            return def;
        });

        /**
         * Run custom validations for elements, validations are done async do support XHR Requests or other stuff
         *
         * @param {HTMLElement} form
         * @param {Array|NodeList} fields
         * @returns {$.Deferred} contains either true if validations passed or false if something went wrong
         * @private
         */
        function _customValidationsForElements(form, fields) {
            var futures = [], fieldsLength = fields.length;
            for (var iVal = 0; iVal < fieldsLength; iVal++) {
                var field = fields[iVal], validationRef = field.getAttribute('data-validate'), validity = field.validity;
                if (self._validators[validationRef]) {
                    // use local validation first and then continue with custom validations
                    if (!validity.customError && !validity.valid) {
                        continue;
                    }
                    futures.push(self._validators[validationRef].apply(self, [field, form]));
                }
            }
            return $.when.apply(self, futures).then(function () {
                var allFutures = arguments, l = allFutures.length;
                var result = {
                    checkedFields: fields,
                    foundAnyError: false
                };

                for (var fI = 0; fI < l; fI++) {
                    if (!allFutures[fI]) {
                        result.foundAnyError = true;
                        return $.Deferred().resolve(result);
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
            for (var i = 0; i < fields.length; i++) {
                var field = fields[i], parent = field.parentNode, validity = field.validity;
                if (validity && !validity.valid) {
                    if (!removeAllErrors) {
                        // Remove current errors:
                        _removeElementErrors(parent);
                    }
                    // setup custom error messages:
                    _setupErrorMessages(field, validity);
                    field.classList.add('invalid');
                    parent.insertAdjacentHTML("beforeend", '<div class="' + ERROR_CLASS_NAME + '">' +
                    field.validationMessage +
                    "</div>");
                } else {
                    field.classList.remove('invalid');
                    _removeElementErrors(parent);
                }
                // FIXME: Safari seems to have a bug here and will not reset customError so we reset:
                field.setCustomValidity('');
            }
        }

        /**
         * Initializes validation for a given form, registers event handlers
         * @param {HTMLElement} form
         */
        function initFormValidation(form) {
            // Suppress the default bubbles
            var invalidFormFired = false, timeoutRunning = false,
                currentValidationFuture = $.Deferred();
            form.addEventListener("invalid", function (e) {
                e.preventDefault();
                var invalidFields;
                // focus the first field:
                if (!timeoutRunning) {
                    invalidFields = form.querySelectorAll(":invalid");
                    if (invalidFields.length > 0) {

                        timeoutRunning = true;
                        setTimeout(function () {
                            invalidFields[0].focus();
                            timeoutRunning = false;
                        }, 50);
                    }
                }

                currentValidationFuture = $.Deferred();

                if (invalidFormFired) {
                    return false;
                }

                invalidFormFired = true;
                if (invalidFormFired) {
                    var validation = _customValidationsForElements(
                        form, form.querySelectorAll("[data-validate]"));
                    prepareErrors(form, invalidFields, true);
                    validation.done(function (r) {
                        prepareErrors(form, r.checkedFields, false);
                        currentValidationFuture.resolve(r);
                    });
                }

            }, true);

            // handle focus out for text elements
            form.addEventListener("focusout", function (e) {
                var target = e.target, cl = target.classList;
                if (target instanceof HTMLSelectElement) {
                    return;
                }
                cl.add('loading');
                _customValidationsForElements(form, [e.target]).done(function () {
                    cl.remove('loading');
                    prepareErrors(form, [e.target], false);
                });
            }, false);
            // Handle change for checkbox, radios and selects
            form.addEventListener("change", function (e) {
                var name = e.target.getAttribute('name'), cl = e.target.classList;
                cl.add('loading');
                if (name) {
                    var inputs = form.querySelectorAll('[name="' + name + '"]');
                    _customValidationsForElements(form, inputs).done(function () {
                        cl.remove('loading');
                        prepareErrors(form, inputs, false);
                    });
                }
            });

            // prevent default if form is invalid
            var submitListener = function (e) {
                e.preventDefault();
                this.classList.add('loading');
                this.removeEventListener("submit", submitListener);
                var self = this, target = e.target;
                // reset:
                invalidFormFired = false;
                if (self.checkValidity()) {
                    // submit form
                    //form.submit();
                    currentValidationFuture.done(function (r) {
                        if (r.foundAnyError) {
                            self.addEventListener("submit", submitListener);
                        } else {
                            form.submit();
                        }
                    });
                } else {
                    self.addEventListener("submit", submitListener);
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
     * Initilizes forms for a specific selector
     * @param selector
     */
    FlexCss.Form.init = function (selector) {
        var forms = document.querySelectorAll(selector);
        for (var i = 0; i < forms.length; i++) {
            new FlexCss.Form(forms[i]);
        }
    };

    FlexCss.Form.init("form");

})(document, window, jQuery);