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

    function TabEvent(options) {

        var MOVE = false, TAB_EVENT = 'tab', tabDelay = new Date().getTime(), _options = {
            tabDelay: 10
        };

        $.extend(_options, options);

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
                }), _pd = CustomEvent.prototype.preventDefault,
                _ip = CustomEvent.prototype.stopImmediatePropagation;

            // pass through canceling events
            event.preventDefault = function () {
                _pd.call(oe);
                oe.preventDefault();
            };

            event.stopImmediatePropagation = function () {
                _ip.call(oe);
                oe.stopImmediatePropagation();
            };

            target.dispatchEvent(event);
        }

        document.addEventListener('touchend', function (e) {
            if (!MOVE) {
                tabDelay = new Date().getTime();
                dispatchTabEvent(e.target, e);
            }
        }, false);

        document.addEventListener('click', function (e) {
            if ((new Date().getTime() - tabDelay) > _options.tabDelay) {
                dispatchTabEvent(e.target, e);
            }
        }, false);
    }

    TabEvent();

}(document, window);