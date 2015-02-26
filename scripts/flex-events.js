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
        FlexCss.triggerEvent = function (element, name, bubbles) {
            var thisBubbles = bubbles !== undefined ? bubbles : true;
            if ("createEvent" in document) {
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent(name, thisBubbles, true);
                element.dispatchEvent(evt);
            }
            else
                element.fireEvent("on" + name);
        };

        /**
         * A Custom Tab Event
         * @param {HTMLElement} container
         * @param [options]
         * @constructor
         */
        FlexCss.TabEvent = function (container, options) {

            var MOVE = false, TAB_EVENT = FlexCss.CONST_FLEX_EVENT_TAB,
                ATTR_DELEGATE_CLICK = 'data-delegate-click',
                tabDelay = new Date().getTime(), clickDelay = new Date().getTime(),
                _options = {
                    tabDelay: 30
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
                        cancelable: true,
                        bubbles: true,
                        detail: {
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
                if (!MOVE && ((new Date().getTime() - clickDelay) > _options.tabDelay)) {
                    tabDelay = new Date().getTime();
                    // trigger click event on target element to run click handlers
                    // add timeout to prevent elements underneath to be clicked
                    if (e.target && e.target.hasAttribute(ATTR_DELEGATE_CLICK)) {
                        setTimeout(function () {
                            $(e.target).trigger('click');
                        }, 10);
                    }
                    dispatchTabEvent(e.target, e);
                }
            }, false);

            container.addEventListener('click', function (e) {
                var time = (new Date().getTime() - tabDelay);
                if (time > _options.tabDelay && time < _options.tabDelay + 100) {
                    clickDelay = new Date().getTime();
                    dispatchTabEvent(e.target, e);
                }
            }, false);
        };

    }(window.FlexCss);

}(document, window, jQuery);