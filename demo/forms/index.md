---
layout: default
title: Forms
weight: 2
---

# Forms

* Table of Contents
{:toc}

# Form-Validation

<code>FlexCss</code> contains a comprehensive form library with a solid JavaScript
plugin that utilises HTML5 Form-Validation. <code>FlexCss.Form</code> overwrites the default behaviour of the
browser to support a <strong>consistent UI</strong> across all browsers and adds support for custom validators and
inline validation (on <code>blur</code> and optional in realtime with <code>keyup</code>).

----

## Features

- Plugin-In replacement for HTML5-Form-Validation
    - Zero-Configuration for build-in input-types, patterns and required fields
    - Fully I18n support trough build-in Browser-Support
- Standalone just **~14kB**  compressed
- Inline-Validation <code>blur</code> or <code>realtime</code>
- Custom-Validation/Validators
- Submitting and Validating a form via XHR (<code>json</code> or <code>form</code> encoded)
- Beautiful validation UI (Tooltip or inline)
- Event System


----

## Getting started

Initialize the plugin for all forms on a page with the following line:

{% highlight javascript %}
FlexCss.Form.init('form', optionalOptions);
{% endhighlight%}

The first param <code>form</code> may be a selector defined by <code>Document.querySelector()</code>.
    The second one allows to overwrite <code>defaultOptions</code> for each form. All Options may be set trough a
    <code>data</code> attribute.

{% highlight javascript %}
{
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
// validate in realtime (on `realtimeEventKey` event)
realtime: true,
// timeout when realtime event should be captured (throttling)
realtimeTimeout: 250,
// event that should be used for realtime
realtimeEventKey: 'keyup'
}
{% endhighlight%}
<hr>

### Set options trough <code>data-attributes</code>
<p>All Options can be set per form instance via <code>data-attributes</code> and will overwrite
    options that may have been set before. Boolean values are set trough integer values with <code>1 = true</code> and
    <code>0 = false</code> or just the attribute for <code>true</code> everything else is treated as <code>String</code>.
</p>
{% highlight html %}
<form data-create-tooltips="0" data-ajax-submit-type="GET">

</form>
{% endhighlight%}
<hr>

## A Simple form with E-Mail-Validation
<p>The following form has an HTML5 <code>email</code> input type defined, the input field is also <code>required</code>.
</p>
{% highlight html %}
<input type="email" required/>
{% endhighlight%}
<hr>
<form>
    <fieldset>
        <div class="control-group">
            <label for="email-field">A simple E-Mail-Input</label>

            <div class="controls">
                <input required type="email" id="email-field">
            </div>
        </div>
    </fieldset>
    <div class="form-actions">
        <button class="button small" type="submit">validate</button>
    </div>
</form>
<hr>
<p>Another form, but with disabled tooltips and <code>appendError</code> set to true</p>
<form data-append-error data-create-tooltips="0">
    <fieldset>
        <div class="control-group">
            <label for="email-field-2">E-Mail</label>

            <div class="controls">
                <input required type="email" id="email-field-2">
            </div>
        </div>
        <div class="control-group">
            <label for="text-field">Password</label>

            <div class="controls">
                <input required type="password" id="text-field">
            </div>
        </div>
    </fieldset>
    <div class="form-actions">
        <button class="button small" type="submit">login</button>
    </div>
</form>
<hr>
{% highlight html %}
<form data-append-error data-create-tooltips="0">
    <!-- [...] -->
</form>
{% endhighlight%}
<hr>
## Custom Messages
<p>By Default all error messages are provided by the browser. The Default <code>errorMessageHandler</code> supports
    custom messages trough the <code>data-validation-message</code> attribute. You can provide your own Message handler
    by using the following static class method:</p>
{% highlight javascript %}
FlexCss.Form.registerErrorMessageHandler(
    function(field, validity){

    }
);
{% endhighlight%}
<hr>
<p>The following form contains one field with a custom error message</p>
<form>
    <fieldset>
        <div class="control-group">
            <label for="email-field-custom">E-Mail</label>

            <div class="controls">
                <input required data-validation-message="Dude, E-Mail please!" type="email"
                       id="email-field-custom">
            </div>
        </div>
    </fieldset>
    <div class="form-actions">
        <button class="button small" type="submit">subscribe</button>
    </div>
</form>
<hr>
### Example
{% highlight html %}
<input required data-validation-message="Dude, E-Mail please!" type="email">
{% endhighlight%}
<hr>
## Custom Validation
<p>Following form has custom validators registered. One will try to ask for a free username on the server.
    A second one will make sure that the passwords are equal.
    Before running custom validations, all default validators will be asked (like
    <code>required</code>, <code>type</code> etc.).
</p>
<form>
    <fieldset>
        <legend>Register your Account</legend>
        <div class="control-group">
            <label for="username-field-custom">Username</label>

            <div class="controls">
                <input data-validate="inline-validate" required type="text"
                       id="username-field-custom">

                <p>Try "BowlingX", this user might be available ;)</p>
            </div>
        </div>
        <div class="control-group">
            <label for="password-field">Password</label>

            <div class="controls">
                <input required type="password" id="password-field">
            </div>
        </div>
        <div class="control-group">
            <label for="password-field-confirm">Password again</label>

            <div class="controls">
                <input data-validate="equals" data-validate-equals="password-field" required type="password"
                       id="password-field-confirm">
            </div>
        </div>
        <div class="control-group">
            <label class="checkbox no-label">
                <input name="agb" type="checkbox" value="true" required>
                <span class="checkbox-container">Yeah, please sign me up for the Newsletter</span>
            </label>
        </div>

    </fieldset>
    <div class="form-actions">
        <button class="button small" type="submit">register</button>
    </div>
</form>
<script type="application/javascript">
    document.addEventListener('DOMContentLoaded', function () {
        FlexCss.Form.registerValidator('inline-validate', function (field) {
            return new Promise(function (r) {
                setTimeout(function () {
                    if (field.value !== 'BowlingX') {
                        field.classList.remove('valid');
                        field.setCustomValidity('The server could not validate your name, try "BowlingX".');
                        r(false);
                    } else {
                        field.classList.add('valid');
                        r(true);
                    }
                }, 500);
            });
        });

        FlexCss.Form.registerValidator('equals', function (field) {
            var fieldThatShouldBeEqual = field.getAttribute('data-validate-equals'),
                    fieldValue = document.getElementById(fieldThatShouldBeEqual);
            return new Promise(function (r) {
                var equals = field.value === fieldValue.value;
                if (!equals) {
                    field.setCustomValidity('Passwords do not match.');
                }
                r(equals);
            });
        });
    });
</script>
<hr>
<p><code>FlexCss.Form</code> expects all <code>Validators</code> to return a promise with either
    <strong><code>false</code></strong> for invalid or <strong><code>true</code></strong> for a valid
    result. Registering a custom validator is easy like:</p>
{% highlight javascript %}
FlexCss.Form.registerValidator('inline-validate', function (field) {
    return new Promise(function (resolve) {
        resolve(true) // or resolve(false)
    });
});
{% endhighlight%}
<p>Validators can be set with the <code>data-validate</code> attribute.</p>
<hr>
### Setup Error-Messages in validator

<p>Sample of <code>equals</code> validator. A field's error message can bet set with
    <code>field.setCustomValidity</code></p>

{% highlight javascript %}
FlexCss.Form.registerValidator('equals', function (field) {
    var fieldThatShouldBeEqual = field.getAttribute('data-validate-equals'),
        fieldValue = document.getElementById(fieldThatShouldBeEqual);
        return new Promise(function (r) {
            var equals = field.value === fieldValue.value;
            if (!equals) {
                field.setCustomValidity('Passwords do not match.');
            }
        r(equals);
    });
});
{%endhighlight%}
<hr>

## Exclude hidden fields

<p>Due the dynamic of a form, it's sometimes necessary to check if a field is hidden and skip validation.
    Because this check might be expansive we opt in for it with <code>data-validate-visibility</code> on <strong>each
        field</strong> that
    might be invisible in the future.</p>
### Example

<p>The following form shows a toggleable Region that will be validated when visible</p>
<hr>
<form>
    <fieldset class="toggle-hide" id="toggle-invisible">
        <legend><a data-toggle="toggle-invisible">A Toggleable legend <i class="icon-right-open"></i></a>
            <p class="small-font weight-normal">You should really open this, there might be Dragons behind ;)</p>
        </legend>
        <div class="toggle-container">
            <div class="control-group">
                <label for="hide-1">Username</label>

                <div class="controls">
                    <input id="hide-1" type="text" required data-validate-visibility/>
                </div>
            </div>
            <div class="control-group">
                <label for="hide-2">About me</label>

                <div class="controls">
                    <textarea id="hide-2" required data-validate-visibility></textarea>
                </div>
            </div>
        </div>
    </fieldset>
    <fieldset>
        <legend>User-Profile</legend>
        <div class="control-group">
            <label for="hide-3">Website</label>

            <div class="controls">
                <input id="hide-3" type="url" required/>
            </div>
        </div>
    </fieldset>
    <div class="form-actions">
        <div>
            <button class="button indent-label small left">save</button>
            <button class="button  small secondary" type="reset">reset form</button>
        </div>
    </div>
</form>
<hr>

## Disable inline-validation for single Fields

Sometimes your user might be feel uncomfortable with a field being inline validated (and just validate in on submit).
You can disable inline-validation on field by field basis with `data-disable-inline-validation`.

### Example

----

<form>
    <fieldset>
        <div class="control-group">
            <label for="textarea-field-custom">My Journey</label>

            <div class="controls">
                <textarea data-disable-inline-validation required data-validation-message="Please fill this field!" type="email"
                       id="textarea-field-custom"></textarea>
            </div>
        </div>
    </fieldset>
    <div class="form-actions">
      <div>
                  <button class="button indent-label small">save</button>
                  <button class="button  small secondary" type="reset">reset form</button>
      </div>
    </div>
</form>

----

## Group Inputs to one label

It may be a requirement to group multiple input invalid-states to one label.

The following example demonstrates that with 3 Select-Widgets defining a birthday field.
To archive this behaviour it's possible to define a `label` that should be set to `invalid` with the attribute
`data-custom-label`. It will only be valid if all referenced widgets are valid.
<hr>
<form>
<fieldset>
<div class="control-group">
    <label for="select-day">Birthday</label>
    <div class="controls">
        <div class="multi-form">
            <div class="select-day">
                <div class="select-element">
                    <select data-custom-label="select-day" id="select-day" name="day" required>
                        <option value="">-</option>
                        <option value="1">10</option>
                    </select>
                </div>
            </div>
            <div class="select-month">
                <div class="select-element">
                    <select data-custom-label="select-day" name="month" required>
                        <option value="">-</option>
                        <option value="1">October</option>
                    </select>
                </div>
            </div>
            <div class="select-year">
                <div class="select-element">
                    <select data-custom-label="select-day" name="year" required>
                        <option value="">-</option>
                        <option value="1">1985</option>
                    </select>
                </div>
            </div>

        </div>
        <p class="help-block">please provide your birthday, we will not publish your age...</p>
    </div>
</div>
</fieldset>
<div class="form-actions">
        <div>
            <button class="button indent-label small left">save</button>
            <button class="button  small secondary" type="reset">reset form</button>
        </div>
    </div>
</form>

-----------

## Events

`FlexCss.Form` has some build in event's that are fired as **`CustomEvent`** and are
catchable with `document.addEventListener(name)`.

|Name|Function|
|----|--------|
|`flexcss.form.ready`| Fires after form event's have been bind.
|`flexcss.form.submit`|Fires if a form has been submitted (and though successfully passed validation), the event is cancelable with `preventDefault()`.
|`flexcss.form.afterAjaxSubmit`| Fires right after the form has been submitted as XHR.
|`flexcss.form.ajaxCompleted`| Fires right after the ajax call has been completed (either successful or unsuccessful).

----

## Remote / XHR

It's possible to submit your form as XHR Request.

To enable that you just need to add an data-attribute
`data-remote` and optional `data-remote-action` to specify where to `POST` (default) the form.
You may also specify if the form should be submitted as `FormData` or as a `JSON` payload with either just `data-remote` or `data-remote="json"`

----


## Remote Validation

You may register a remote validation handler with

`FlexCss.Form.registerGlobalRemoteValidationFunction((request) => {})`

The instance of the form is bind to the callback function, so you can use the internal API.

----


### API
- `this.handleValidation(fieldsThatHaveErrorsArray, optionalFocus)` will validate the given fields and eventually focus the first error

----

### Example

Consult the [fetch-api](https://github.com/github/fetch) for more information how to handle a request promise

{% highlight javascript %}
FlexCss.Form.registerGlobalRemoteValidationFunction(function(req) {
 // TODO: .. code to extract error messages from server response
 req.text().then(function (responseText) {
     // TODO: .. code to extract the fields that have an error
     // A field is marked as invalid with the following HTML5-API:
     field.setCustomValidity('Invalid field state');

     var fieldsThatHaveErrorsArray = [/*[...]*/],
         firstErrorField = fieldsThatHaveErrorsArray[0];

     // handle validation for fields, (second parameter focuses first error)
     this.handleValidation(fieldsThatHaveErrorsArray, true);
 }.bind(this));
});
{% endhighlight %}

--------

## Other Frameworks

`FlexCss.Form` is a pure JavaScript solution and does not depend on a specific markup.
However I make the following assumptions:

- Invalid fields (and related labels) will get the class `invalid`.
- Elements should be nested in a wrapper div if you are using `appendError` (otherwise random things might happen).
- The `appendError` container has the class `form-error`

### Bootstrap

The following shows a sample implementation with Bootstrap
 (with both `createTooltips` and `appendError` enabled for demonstration)

{% include pens/form_bootstrap.html %}

