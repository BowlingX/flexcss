/**
 * A HTML5 Validation replacement
 */
(function (document, window) {
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

        function setupErrorMessages(field, validity) {
            return FlexCss.Form.globalErrorMessageHandler ?
                FlexCss.Form.globalErrorMessageHandler.apply(self, [field, validity]) : false;
        }

        function removeElementErrors(thisParent) {
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
         * Will handle errors for given fields
         * @param {HTMLElement} form
         * @param {Array} fields
         * @param {Bool} removeAllErrors
         */
        function prepareErrors(form, fields, removeAllErrors) {
            if (removeAllErrors) {
                removeElementErrors(form);
            }
            for (var i = 0; i < fields.length; i++) {
                var field = fields[i], parent = field.parentNode, validity = field.validity;
                if (validity && !validity.valid) {
                    if (!removeAllErrors) {
                        // Remove current errors:
                        removeElementErrors(parent);
                    }
                    // setup custom error messages:
                    setupErrorMessages(field, validity);
                    field.classList.add('invalid');
                    parent.insertAdjacentHTML("beforeend", '<div class="' + ERROR_CLASS_NAME + '">' +
                    field.validationMessage +
                    "</div>");
                } else {
                    field.classList.remove('invalid');
                    removeElementErrors(parent);
                }
            }
        }

        function initFormValidation(form) {
            // Suppress the default bubbles
            form.addEventListener("invalid", function (e) {
                e.preventDefault();
                var invalidFields = form.querySelectorAll(":invalid");

                prepareErrors(form, invalidFields, true);

                // focus the first field:
                if (invalidFields.length > 0) {
                    setTimeout(function () {
                        invalidFields[0].focus();
                    }, 0);
                }
            }, true);

            // handle focus out for text elements
            form.addEventListener("focusout", function (e) {
                prepareErrors(form, [e.target], false);
            }, false);

            // Handle change for checkbox, radios and selects
            form.addEventListener("change", function (e) {
                var name = e.target.getAttribute('name');
                if (name) {
                    var inputs = form.querySelectorAll('input[name="' + name + '"]');
                    prepareErrors(form, inputs, false);
                }
            });

            // prevent default if form is invalid
            form.addEventListener("submit", function (event) {
                if (!this.checkValidity()) {
                    event.preventDefault();
                }
            });

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

})(document, window);