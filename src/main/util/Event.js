/*global CustomEvent*/

// polyfill for custom events to make thinks work in IE
// The needed polyfill is so small that I embedded it here
void function () {
    "use strict";
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
}();
/**
 * Simpler Event dispatching
 */
class EventHandler {

    /**
     * @param {HTMLElement} target
     * @param {String} name
     */
    constructor(target, name) {

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
    withOptions(options) {
        Object.assign(this.defaultOptions, (options || {}));
        return this;
    }

    /**
     * Call with the originalEvent
     * @param {Event} e
     * @returns {EventHandler}
     */
    withOriginal(e) {
        return this.withDetail({
            originalEvent:e
        });
    }

    /**
     * Extends the detail part of the event
     * @param {Object} o
     * @returns {EventHandler}
     */
    withDetail(o) {
        if(!this.defaultOptions.detail) {
            this.defaultOptions.detail = {};
        }
        Object.assign(this.defaultOptions.detail, o);
        return this;
    }

    /**
     * @returns {Window.CustomEvent}
     */
    fire() {
        var e = new CustomEvent(this.name, this.defaultOptions);
        if (this.target) {
            this.target.dispatchEvent(e);
        }
        return e;
    }
}

export default
class Event {
    /**
     * Prepares to dispatch a custom event (without firing)
     * @param {HTMLElement} target
     * @param {String} name
     * @returns {EventHandler}
     */
    static dispatch(target, name) {
        return new EventHandler(target, name);
    }

    /**
     * Dispatches a custom event and fires it directly
     * @param {HTMLElement} target
     * @param {String} name
     * @param {Object} [options]
     * @returns {Window.CustomEvent}
     */
    static dispatchAndFire(target, name, options) {
        return new EventHandler(target, name).withOptions(options).fire();
    }
}
