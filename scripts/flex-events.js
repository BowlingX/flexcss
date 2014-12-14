/* global CustomEvent */

/**
 * Provides some custom events
 */

void function (document, window) {
    "use strict";
    /**
     * Polyfill CustomEvent for Browser who are not supported
     */
    void function () {
        if (!('CustomEvent' in window)) {
            var CustomEvent = function CustomEvent(event, params) {
                params = params || {bubbles: false, cancelable: false, detail: undefined};
                var evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
            };

            CustomEvent.prototype = window.Event.prototype;

            window.CustomEvent = CustomEvent;
        }
    }();

    var MOVE = false, TAB_EVENT = 'tab', tabDelay = new Date().getTime();

    document.addEventListener('touchmove', function () {
        MOVE = true;
    }, false);
    document.addEventListener('touchstart', function () {
        MOVE = false;
    }, false);

    function dispatchTabEvent(target, oe) {
        var event = new CustomEvent(TAB_EVENT, {
            detail: {
                cancelable: true,
                bubbles: true,
                originalEvent: oe
            }
        });
        target.dispatchEvent(event);
    }

    document.addEventListener('touchend', function (e) {
        if (!MOVE) {
            tabDelay = new Date().getTime();
            dispatchTabEvent(e.target, e);
        }
    }, false);

    document.addEventListener('click', function (e) {
        if ((new Date().getTime() - tabDelay) > 10) {
            dispatchTabEvent(e.target, e);
        }
    }, false);

}(document, window);