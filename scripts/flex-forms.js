(function (document) {
    "use strict";

    var ERROR_CLASS_NAME = '.error-message';

    function initFormValidation(form) {
        // Suppress the default bubbles
        form.addEventListener("invalid", function (e) {
            e.preventDefault();
            var invalidFields = form.querySelectorAll(":invalid"),
                errorMessages = form.querySelectorAll(ERROR_CLASS_NAME),
                parent;

            // Remove any existing messages
            for (var i = 0; i < errorMessages.length; i++) {
                errorMessages[i].parentNode.removeChild(errorMessages[i]);
            }

            for (var i = 0; i < invalidFields.length; i++) {
                parent = invalidFields[i].parentNode;
                parent.insertAdjacentHTML("beforeend", "<div class='error-message'>" +
                invalidFields[i].validationMessage +
                "</div>");
            }
            // focus the first field:
            if (invalidFields.length > 0) {
                setTimeout(function () {
                    invalidFields[0].focus();
                }, 0);
            }
        }, true);

        form.addEventListener("focusout", function (e) {
            var target = e.target, parent = target.parentNode, errors = parent.querySelectorAll(ERROR_CLASS_NAME);
            console.log(target.validity.valid);
            if (!target.validity.valid) {
                // Remove any existing messages
                for (var i = 0; i < errors.length; i++) {
                    errors[i].parentNode.removeChild(errors[i]);
                }
                parent.insertAdjacentHTML("beforeend", "<div class='error-message'>" +
                target.validationMessage + "</div>");
            } else {
                // Remove any existing messages
                for (var i = 0; i < errors.length; i++) {
                    errors[i].parentNode.removeChild(errors[i]);
                }
            }
        }, false);


        form.addEventListener("submit", function (event) {
            if (!this.checkValidity()) {
                event.preventDefault();
            }
            console.log("submit");
        });

    }

    var forms = document.querySelectorAll("form");
    for (var i = 0; i < forms.length; i++) {
        initFormValidation(forms[i]);
    }

})(document);