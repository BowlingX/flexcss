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
/*global CustomEvent*/

'use strict';

// polyfill for custom events to make thinks work in IE
// The needed polyfill is so small that I embedded it here
void function () {
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
            originalEvent: e
        });
    }

    /**
     * Extends the detail part of the event
     * @param {Object} o
     * @returns {EventHandler}
     */
    withDetail(o) {
        if (!this.defaultOptions.detail) {
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

export default Event;