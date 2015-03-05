import Settings from 'util/Settings';

export default
class OffCanvas {

    /**
     * Creates an off-canvas navigation
     * @param {HTMLElement|String} NavigationId
     * @param {HTMLElement|String} ToggleNavigationId
     * @param {HTMLElement|String} Darkener
     * @param {int} factor
     * @param {bool} [disableTouch] if true all touch events are disabled
     * @constructor
     */
    constructor(NavigationId, ToggleNavigationId, Darkener, factor, disableTouch) {

        var doc = document, touched = 0, body = doc.body,
            navigationContainer = NavigationId instanceof HTMLElement ?
                NavigationId : doc.getElementById(NavigationId),
            toggler = ToggleNavigationId instanceof HTMLElement ?
                ToggleNavigationId : doc.getElementById(ToggleNavigationId),
            darkener = Darkener instanceof HTMLElement ? Darkener : doc.getElementById(Darkener),
            DARKENER_CLASS_TOGGLE = 'toggle-' + Darkener, ATTR_CLOSE_SIDEBAR = 'data-close-sidebar',
            resetStyles = function (s) {
                s.transform = '';
                s.transition = '';
                s.webkitTransform = '';
                s.webkitTransition = '';
            }, HIDE_FACTOR = 7,
            OPEN_CLASS = 'open', INIT_CLASS = 'init', TOGGLE_CLASS = FlexCss.CONST_CANVAS_TOGGLE,
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

                        FlexCss.addEventOnce(FlexCss.CONST_TRANSITION_EVENT, target, function () {
                            // add timeout because transition event fires a little to early
                            setTimeout(function () {
                                resetStyles(style);
                                body.classList.remove(TOGGLE_CLASS);
                                body.classList.remove(DARKENER_CLASS_TOGGLE);
                            }, FlexCss.SETTINGS.darkenerFadeDelay);
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
                FlexCss.addEventOnce(FlexCss.CONST_TRANSITION_EVENT, navigationContainer, function () {
                    // add timeout because transition event fires a little to early
                    setTimeout(function () {
                        bodyClass.remove(TOGGLE_CLASS);
                        bodyClass.remove(DARKENER_CLASS_TOGGLE);
                    }, FlexCss.SETTINGS.darkenerFadeDelay);
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

        toggler.addEventListener(FlexCss.CONST_FLEX_EVENT_TAB, togglerF, true);

        var closer = function (e) {
            if (navigationContainer.classList.contains(OPEN_CLASS)) {
                if (e.target === darkener || e.target.hasAttribute(ATTR_CLOSE_SIDEBAR)) {
                    e.preventDefault();
                    togglerF(e);
                }
            }
        };

        FlexCss.SETTINGS.clickEvents.forEach(function (e) {
            body.addEventListener(e, closer, true);
        });

    }

;
}