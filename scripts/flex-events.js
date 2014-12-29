/* global CustomEvent */

/**
 * Provides some custom events
 */
void function (document, window, $) {
    "use strict";

    /**
     * Polyfill CustomEvent for Browser who are not supported
     */
    void function () {
        var CustomEvent = function CustomEvent(event, params) {
            params = params || {bubbles: false, cancelable: false, detail: undefined};
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        };

        CustomEvent.prototype = window.Event.prototype;

        window.CustomEvent = CustomEvent;
    }();

    if (!window.FlexCss) {
        window.FlexCss = {};
    }

    void function (FlexCss) {

        /**
         * Tab Event
         * @type {string}
         */
        FlexCss.CONST_FLEX_EVENT_TAB = 'tab';

        /**
         * Triggers an catchable event on element
         * @param {HTMLElement} element
         * @param {String} name
         * @param {Boolean} [bubbles] defaults to true
         */
        FlexCss.triggerEvent = function(element, name, bubbles) {
            var thisBubbles = bubbles !== undefined? bubbles : true;
            if ("createEvent" in document) {
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent(name, thisBubbles, true);
                element.dispatchEvent(evt);
            }
            else
                element.fireEvent("on"+name);
        };

        /**
         * A Custom Tab Event
         * @param {HTMLElement} container
         * @param [options]
         * @constructor
         */
        FlexCss.TabEvent = function (container, options) {

            var MOVE = false, TAB_EVENT = FlexCss.CONST_FLEX_EVENT_TAB,
                tabDelay = new Date().getTime(), _options = {
                tabDelay: 10
            };

            $.extend(_options, options);

            container.addEventListener('touchmove', function () {
                MOVE = true;
            }, false);
            container.addEventListener('touchstart', function () {
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

            container.addEventListener('touchend', function (e) {
                if (!MOVE) {
                    tabDelay = new Date().getTime();
                    dispatchTabEvent(e.target, e);
                }
            }, false);

            container.addEventListener('click', function (e) {
                if ((new Date().getTime() - tabDelay) > _options.tabDelay) {
                    dispatchTabEvent(e.target, e);
                }
            }, false);
        };

    }(window.FlexCss);

}(document, window, jQuery);