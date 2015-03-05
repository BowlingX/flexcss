import Settings from 'util/Settings';
import Util from 'util/Util';

/**
 * @type {string}
 */
const ATTR_CLOSE_SIDEBAR = 'data-close-sidebar';
/**
 * @type {string}
 */
const TOGGLE_CLASS = 'toggled-canvas';
/**
 * @type {string}
 */
const INIT_CLASS = 'init';
/**
 * @type {string}
 */
const OPEN_CLASS = 'open';
/**
 * @type {number}
 */
const HIDE_FACTOR = 7;

/**
 * A OffCanvas Implementation
 */
export default
class OffCanvas {

    /**
     * Creates an off-canvas navigation
     * @param {HTMLElement|String} NavigationId
     * @param {HTMLElement|String} ToggleNavigationId
     * @param {HTMLElement|String} Darkener
     * @param {int} factor positive will expect right sidebar, positive left
     * @param {bool} [disableTouch] if true all touch events are disabled
     * @constructor
     */
    constructor(NavigationId, ToggleNavigationId, Darkener, factor, disableTouch) {

        var doc = global.document, touched = 0, body = doc.body,
            navigationContainer = NavigationId instanceof HTMLElement ?
                NavigationId : doc.getElementById(NavigationId),
            toggler = ToggleNavigationId instanceof HTMLElement ?
                ToggleNavigationId : doc.getElementById(ToggleNavigationId),
            darkener = Darkener instanceof HTMLElement ? Darkener : doc.getElementById(Darkener),
            DARKENER_CLASS_TOGGLE = 'toggle-' + darkener.id || 'darkener',
            resetStyles = function (s) {
                s.transform = '';
                s.transition = '';
                s.webkitTransform = '';
                s.webkitTransition = '';
            },
            shouldNotTouch = function () {
                return window.innerWidth >= Settings.get().smallBreakpoint;
            };

        if (!disableTouch) {
            navigationContainer.addEventListener('touchstart', function (e) {
                requestAnimationFrame(function () {
                    if (shouldNotTouch()) {
                        return;
                    }
                    touched = e.touches[0].clientX;
                    var target = navigationContainer, style = target.style;
                    target.mustHide = false;
                    style.transition = 'transform 0s ease';
                    style.webkitTransition = '-webkit-transform 0s ease';

                });
            });
            navigationContainer.addEventListener('touchmove', function (e) {

                if (shouldNotTouch()) {
                    return;
                }
                var x = e.touches[0].clientX, target = navigationContainer, style = target.style, calc = touched - x,
                    bounds = target.getBoundingClientRect(),
                    compare = factor > 0 ? calc <= 0 : calc >= 0;
                if (compare) {
                    target.mustHide = factor > 0 ? calc * -1 >
                    bounds.width / HIDE_FACTOR : calc > bounds.width / HIDE_FACTOR;
                    style.transform = 'translate3d(' + (calc * -1) + 'px,0,0)';
                    style.webkitTransform = 'translate3d(' + (calc * -1) + 'px,0,0)';
                }
            });
            navigationContainer.addEventListener('touchend', function () {

                requestAnimationFrame(function () {
                    if (shouldNotTouch()) {
                        return;
                    }
                    var target = navigationContainer, style = target.style;

                    if (target.mustHide) {
                        var width = target.getBoundingClientRect().width * factor;
                        style.transition = 'transform .2s ease';
                        style.webkitTransition = '-webkit-transform .2s ease';

                        style.transform = 'translate3d(' + width + 'px,0,0)';
                        style.webkitTransform = 'translate3d(' + width + 'px,0,0)';

                        Util.addEventOnce(Settings.CONST_TRANSITION_EVENT, target, function () {
                            // add timeout because transition event fires a little to early
                            setTimeout(function () {
                                resetStyles(style);
                                body.classList.remove(TOGGLE_CLASS);
                                body.classList.remove(DARKENER_CLASS_TOGGLE);
                            }, Settings.get().darkenerFadeDelay);
                        });

                        target.classList.remove(OPEN_CLASS);
                        darkener.classList.remove(INIT_CLASS);


                    } else {
                        resetStyles(style);
                    }
                });
            });
        }
        var togglerF = function (e) {
            e.preventDefault();
            var bodyClass = body.classList, darkenerClass = darkener.classList;
            if (navigationContainer.classList.contains(OPEN_CLASS)) {
                Util.addEventOnce(Settings.CONST_TRANSITION_EVENT, navigationContainer, function () {
                    // add timeout because transition event fires a little to early
                    setTimeout(function () {
                        bodyClass.remove(TOGGLE_CLASS);
                        bodyClass.remove(DARKENER_CLASS_TOGGLE);
                    }, Settings.get().darkenerFadeDelay);
                });
                navigationContainer.classList.remove(OPEN_CLASS);
                darkener.classList.remove(INIT_CLASS);

            } else {
                bodyClass.add(TOGGLE_CLASS);
                bodyClass.add(DARKENER_CLASS_TOGGLE);
                darkenerClass.add(INIT_CLASS);
                navigationContainer.classList.add(OPEN_CLASS);
            }
        };
        toggler.addEventListener('touchstart', function (e) {
            e.target.oldClassNames = e.target.className;
            e.target.className = 'active ' + e.target.oldClassNames;
        });

        toggler.addEventListener('touchend', function (e) {
            e.target.className = e.target.oldClassNames;
        });

        toggler.addEventListener(Settings.CONST_TAB_EVENT, togglerF);

        var closer = function (e) {
            if (navigationContainer.classList.contains(OPEN_CLASS)) {
                if (e.target === darkener || e.target.hasAttribute(ATTR_CLOSE_SIDEBAR)) {
                    e.preventDefault();
                    togglerF(e);
                }
            }
        };

        body.addEventListener(Settings.CONST_TAB_EVENT, closer);
    }
}