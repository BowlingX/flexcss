/**
 * A HTML5 Validation replacement
 */
void function (document, window, $) {
    "use strict";

    var ERROR_CLASS_NAME = 'form-error', INPUT_ERROR_CLASS = 'invalid', LOADING_CLASS = 'loading',
        ARIA_INVALID = 'aria-invalid', REMOTE = 'data-remote', REMOTE_ACTION = 'data-remote-action',
        ATTR_DISABLE_INLINE = 'data-disable-inline-validation';
    if (!window.FlexCss) {
        window.FlexCss = {};
    }

    var FlexCss = window.FlexCss;

    /**
     * jQuery helper to serialize a form to json
     * @returns {{}}
     */
    $.fn.serializeFormJSON = function () {

        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    /**
     * Enhanced flexcss forms
     * @param {HTMLElement} form
     * @param {Object} options
     * @constructor
     */
    FlexCss.Form = function (form, options) {

        var self = this;

        if (!(self instanceof FlexCss.Form)) {
            throw 'Form: static instances are not supported';
        }

        self.tooltips = null;

        self.options = {
            // if true creates tooltips above element, uses FlexCss Tooltips
            createTooltips: true,
            // if true appends error message after input element
            appendError: false,
            // type of ajax submit
            ajaxSubmitType: 'POST',
            // json content type if ajax method is set to json
            ajaxJsonContentType: 'application/json; charset=utf-8',
            // allow inline validation
            inlineValidation: true
        };

        self.options = $.extend(self.options, options);

        // set form class as widget
        // Forms are very different to classical widgets,
        // we will not use our base widget class for this but just self
        self.hfWidgetInstance = self;

        /**
         * Submits this form, either via ajax or just classical (default)
         * @param {HTMLElement} thisForm
         * @param {Event} e
         * @returns {*}
         */
        self.submitFunction = function (thisForm, e) {
            var shouldUseAjax = thisForm.getAttribute(REMOTE), ajaxPostUrl =
                    thisForm.getAttribute(REMOTE_ACTION) ||
                    thisForm.getAttribute('action') || window.location.href,
                useJson = 'json' === shouldUseAjax;

            var ev =  jQuery.Event('flexcss.form.submit');
            $(thisForm).trigger(ev, [e, self, thisForm]);
            // abort execution is event was prevented
            if (ev.isDefaultPrevented()) {
                thisForm.classList.remove(LOADING_CLASS);
                return false;
            }

            if (null === shouldUseAjax) {
                // submit
                return thisForm.submit();
            }

            thisForm.classList.add(LOADING_CLASS);

            // prevent form from submit normally
            e.preventDefault();

            // support either JSON request payload or normal payload submission
            var serverCall = useJson ? $.ajax({
                contentType: self.options.ajaxJsonContentType,
                type: self.options.ajaxSubmitType,
                url: ajaxPostUrl,
                data: JSON.stringify($(thisForm).serializeFormJSON())
            }) : $.ajax({
                type: self.options.ajaxSubmitType,
                url: ajaxPostUrl,
                data: $(thisForm).serialize()
            });

            $(thisForm).trigger('flexcss.form.afterAjaxSubmit', [e, self, thisForm]);

            serverCall.then(function (r) {
                return $.Deferred().resolve(r);
            }).always(function (r) {

                (self._remoteValidationFunction || FlexCss.Form.globalRemoteValidationFunction).apply(self, [r]);

                $(thisForm).trigger('flexcss.form.ajaxCompleted', [e, self, thisForm, r]);
                // always remove error class
                thisForm.classList.remove(LOADING_CLASS);
            });
        };

        /**
         * This form
         * @returns {HTMLElement}
         */
        self.getForm = function () {
            return form;
        };

        /**
         * A List of Validators
         * @type {Object}
         * @private
         */
        self._validators = FlexCss.Form.globalValidators;

        /**
         * @type {Function}
         * @private
         */
        self._remoteValidationFunction = null;

        /**
         * Registers a function that handles remote validation
         * @param {Function} func
         * @returns {window.FlexCss.Form}
         */
        self.registerRemoteValidation = function (func) {
            self._remoteValidationFunction = func;
            return self;
        };

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
         * even when the field has been invalidated with `setCustomValidity`, because of different browser `bugs`
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
         * @returns {*}
         * @private
         */
        function _runValidation(validationRef, field) {
            if (!self._validators[validationRef]) {
                throw 'Could not found validator: ' + validationRef;
            }
            var cl = field.classList, future = self._validators[validationRef].apply(self, [field, form]);
            cl.add(LOADING_CLASS);
            future.always(function () {
                cl.remove(LOADING_CLASS);
            });
            return future;
        }

        /**
         * Run custom validations for elements, validations are done async do support XHR Requests or other stuff
         *
         * @param {Array|NodeList} fields
         * @returns {$.Deferred} contains either true if validations passed or false if something went wrong
         * @private
         */
        function _customValidationsForElements(fields) {
            var futures = [], fieldsLength = fields.length, checkedFields = [];
            for (var iVal = 0; iVal < fieldsLength; iVal++) {
                var field = fields[iVal], validationRef = field.getAttribute('data-validate'), validity = field.validity;
                if (self._validators[validationRef]) {
                    // use local validation first and then continue with custom validations
                    if (!validity.customError && !validity.valid) {
                        continue;
                    }
                    checkedFields.push(field);
                    futures.push(_runValidation(validationRef, field));
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
         * Remove all errors for this form
         * @returns {window.FlexCss.Form}
         */
        self.removeErrors = function(){
            _removeElementErrors(form);
            return self;
        };

        /**
         * Will handle errors for given fields
         * @param {Array|NodeList} fields
         * @param {Boolean} removeAllErrors
         */
        self.prepareErrors = function (fields, removeAllErrors) {
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
                    var message = field.validationMessage;
                    if (self.options.appendError) {
                        parent.insertAdjacentHTML("beforeend", '<div class="' + ERROR_CLASS_NAME + '">' +
                        message +
                        "</div>");
                    }
                    field.flexFormsSavedValidationMessage = message;
                } else {
                    field.classList.remove('invalid');
                    field.setAttribute(ARIA_INVALID, 'false');

                    _removeElementErrors(parent);
                }
                // FIXME: We have to reset the custom validity here to allow native validations work again
                field.setCustomValidity('');
            }
        };

        function validateCustomFields() {
            return _customValidationsForElements(
                form.querySelectorAll("[data-validate]"));
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
         * @param {Boolean} [remove]
         * @private
         */
        function _showAndOrCreateTooltip(target, remove) {
            if (!self.tooltips && self.options.createTooltips) {
                self.tooltips = new FlexCss.Tooltip(form, {
                    containerClass: 'error-tooltip'
                });
            }

            if (!self.options.createTooltips) {
                return;
            }

            setTimeout(function () {
                if (!target.flexFormsSavedValidity) {
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

        self.showAndOrCreateTooltip = _showAndOrCreateTooltip;

        /**
         * Initializes validation for a given form, registers event handlers
         */
        function initFormValidation() {
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
                        _showAndOrCreateTooltip(arr[0]);
                    }, 0);
                }
                currentValidationFuture = $.Deferred();

                var validation = validateCustomFields();
                self.prepareErrors(arr, true);
                validation.done(function (r) {
                    self.prepareErrors(r.checkedFields, false);
                    currentValidationFuture.resolve(r);
                    invalidFormFired = false;
                });

            }, true);

            // handle focus out for text elements
            // Will show an error if field was invalid the first time
            form.addEventListener("blur", function (e) {
                if (self.tooltips) {
                    self.tooltips.removeTooltip(e.target);
                }
                var target = e.target, hasError = false;

                if (!_checkIsValidBlurFocusElement(target)) {
                    return;
                }

                if (target.classList.contains(INPUT_ERROR_CLASS)) {
                    hasError = true;
                }
                _customValidationsForElements([e.target]).done(function () {
                    self.prepareErrors([e.target], false);
                    if (!hasError) {
                        _showAndOrCreateTooltip(e.target);
                    }
                });

            }, true);

            /**
             * Validates if target is a valid input field to check blur and focus events
             *
             * @param {HTMLElement} target
             * @returns {boolean}
             */
            function _checkIsValidBlurFocusElement(target) {

                if(!self.options.inlineValidation) {
                    return false;
                }

                var attr = target.getAttribute('type'), maybeDisableOnBlur = target.hasAttribute(ATTR_DISABLE_INLINE);
                if (maybeDisableOnBlur) {
                    return false;
                }
                return !((attr === 'checkbox' || attr === 'option' || attr === 'submit' || !(target instanceof HTMLSelectElement || target instanceof HTMLInputElement ||
                target instanceof HTMLTextAreaElement)));
            }

            // handle focus on input elements
            // will show an error if field is invalid
            form.addEventListener("focus", function (e) {
                // do not track errors for checkbox and radios on focus:
                if (!_checkIsValidBlurFocusElement(e.target)) {
                    return;
                }
                _showAndOrCreateTooltip(e.target);
            }, true);

            // Handle change for checkbox, radios and selects
            form.addEventListener("change", function (e) {
                var name = e.target.getAttribute('name');
                if (name) {
                    var inputs = form.querySelectorAll('[name="' + name + '"]');
                    _customValidationsForElements(inputs).done(function () {
                        self.prepareErrors(inputs, false);
                        _showAndOrCreateTooltip(e.target, true);
                    });
                }
            });

            // prevent default if form is invalid
            var submitListener = function (e) {

                if (form.classList.contains(LOADING_CLASS)) {
                    e.preventDefault();
                    return false;
                }

                form.classList.add(LOADING_CLASS);
                form.removeEventListener("submit", submitListener);
                _removeElementErrors(form);
                e.preventDefault();
                // reset:
                if (form.checkValidity()) {
                    form.addEventListener("submit", submitListener);
                    // Custom validations did never pass
                    currentValidationFuture = $.Deferred();
                    var validation = validateCustomFields();
                    validation.done(function (r) {
                        // focus first invalid field:
                        for (var i = 0; i < r.checkedFields.length; i++) {
                            var f = r.checkedFields[i];
                            if (!f.validity.valid) {
                                // Focus element and show tooltip, we explicitly showing tooltip here, because
                                // element might have focus already
                                _showAndOrCreateTooltip(f, true);
                                f.focus();
                                break;
                            }
                        }
                        self.prepareErrors(r.checkedFields, false);
                        currentValidationFuture.resolve(r);
                    });
                    currentValidationFuture.done(function (r) {
                        form.classList.remove(LOADING_CLASS);
                        if (!r.foundAnyError) {
                            // Handle submitting the form to server:
                            self._handleSubmit(e);
                        }
                    });
                } else {
                    form.classList.remove(LOADING_CLASS);
                    form.addEventListener("submit", submitListener);
                }
            };
            form.addEventListener("submit", submitListener);
        }

        initFormValidation();

        /**
         * Handles submitting, optionally allows to stop submitting
         * @param e
         * @private
         */
        self._handleSubmit = function (e) {
            var obj = {
                abort: false
            };
            $(form).trigger('flexcss.form.beforeSubmit', [e, self, form, obj]);
            if (obj.abort === true) {
                return false;
            }
            self.submitFunction.apply(self, [form, e]);
        };

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
        var forms = selector instanceof HTMLElement ? selector.querySelectorAll('form') : document.querySelectorAll(selector);
        for (var i = 0; i < forms.length; i++) {
            new FlexCss.Form(forms[i], options);
        }
    };

    FlexCss.Form.globalValidators = [];
    FlexCss.Form.globalRemoteValidationFunction = function () {
    };

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

    /**
     * Registers a global function that is called when a form should validate the response of a server
     * @param {Function} func
     * @returns {Function}
     */
    FlexCss.Form.registerGlobalRemoteValidationFunction = function (func) {
        FlexCss.Form.globalRemoteValidationFunction = func;
        return FlexCss.Form;
    };

    // initilize forms for all forms
    FlexCss.Form.init("form", {});

}(document, window, jQuery);