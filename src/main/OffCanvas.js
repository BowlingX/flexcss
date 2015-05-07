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

/*!
 * FlexCss.OffCanvas
 * Licensed under the MIT License (MIT)
 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
 */

import Settings from 'util/Settings';
import Util from 'util/Util';

/**
 * @type {string}
 */
const ATTR_CLOSE_SIDEBAR = 'data-close-offcanvas';

/**
 * @type {string}
 */
const ATTR_TARGET = 'data-offcanvas';
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
const HIDE_FACTOR = 3;

/**
 * A OffCanvas Implementation
 */
export default
class OffCanvas {

    /**
     * Creates an off-canvas navigation
     * @param {HTMLElement|String} NavigationId
     * @param {HTMLElement|String} Darkener
     * @param {int} factor positive will expect right sidebar, positive left
     * @param {bool} [disableTouch] if true all touch events are disabled
     * @constructor
     */
    constructor(NavigationId, Darkener, factor, disableTouch) {

        var doc = global.document, touched = 0,
            navigationContainer = NavigationId instanceof HTMLElement ?
                NavigationId : doc.getElementById(NavigationId),
            darkener = Darkener instanceof HTMLElement ? Darkener : doc.getElementById(Darkener),
            DARKENER_CLASS_TOGGLE = 'toggle-' + darkener.id || 'darkener',
            DARKENER_CLASS_INSTANT_TOGGLE = `${DARKENER_CLASS_TOGGLE}-open`,
            resetStyles = function (s) {
                s.transform = '';
                s.transition = '';
                s.webkitTransform = '';
                s.webkitTransition = '';
            },
            shouldNotTouch = function () {
                return window.innerWidth >= Settings.get().smallBreakpoint;
            };

        if (!darkener || !navigationContainer) {
            throw 'Could not find needed elements (Darkener and/or NavigationId)';
        }

        this.darkener = darkener;
        this.darkenerClassToggle = DARKENER_CLASS_TOGGLE;
        this.darkenerClassToggleInstant = DARKENER_CLASS_INSTANT_TOGGLE;

        this.navigationContainer = navigationContainer;
        this.navigationContainerId = navigationContainer.id;

        // create id if id does not exist
        if (!this.navigationContainerId) {
            this.navigationContainerId = Util.guid();
            navigationContainer.id = this.navigationContainerId;
        }

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
                var x = e.touches[0].clientX, target = navigationContainer,
                    style = target.style, calc = touched - x,
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
                        this._remove(() => {
                            resetStyles(style);
                        });
                        this._removeInstant();
                    } else {
                        resetStyles(style);
                    }
                }.bind(this));
            }.bind(this));
        }
    }

    /**
     * @private
     */
    _remove(callback) {
        Util.addEventOnce(Settings.getTransitionEvent(), this.navigationContainer, function () {
            // add timeout because transition event fires a little to early
            setTimeout(function () {
                requestAnimationFrame(function () {
                    let body = global.document.body;
                    OffCanvas.currentOpen = null;
                    body.classList.remove(TOGGLE_CLASS);
                    body.classList.remove(this.darkenerClassToggle);
                    if(callback) {
                        callback();
                    }
                }.bind(this));
            }.bind(this), Settings.get().darkenerFadeDelay);
        }.bind(this));
    }

    /**
     * @private
     */
    _removeInstant() {
        this.navigationContainer.classList.remove(OPEN_CLASS);
        global.document.body.classList.remove(this.darkenerClassToggleInstant);
        this.darkener.classList.remove(INIT_CLASS);
    }

    /**
     * Toggles a an off-canvas element
     * @param e
     * @private
     */
    _toggle(e) {
        e.preventDefault();
        var bodyClass = global.document.body.classList, darkenerClass = this.darkener.classList,
            DARKENER_CLASS_TOGGLE = this.darkenerClassToggle,
            DARKENER_CLASS_INSTANT_TOGGLE = this.darkenerClassToggleInstant,
            navigationControllerClassList = this.navigationContainer.classList;
        if (this.navigationContainer.classList.contains(OPEN_CLASS)) {
            this._remove();
            this._removeInstant(navigationControllerClassList);
        } else if(!OffCanvas.currentOpen) {
            OffCanvas.currentOpen = this;
            bodyClass.add(DARKENER_CLASS_INSTANT_TOGGLE);
            bodyClass.add(TOGGLE_CLASS);
            bodyClass.add(DARKENER_CLASS_TOGGLE);
            darkenerClass.add(INIT_CLASS);
            navigationControllerClassList.add(OPEN_CLASS);
        }
    }

    /**
     * Register events
     * @param [delegate]
     */
    registerEvents(delegate) {
        delegate = delegate || global.document;
        delegate.addEventListener(Settings.getTabEvent(), function (e) {
            if(OffCanvas.currentOpen && OffCanvas.currentOpen !== this) {
                return;
            }
            let id = this.navigationContainerId, validTarget = e.target.getAttribute(ATTR_TARGET) === id;
            if (!Util.isPartOfNode(e.target, this.navigationContainer)) {
                if (validTarget || (OffCanvas.currentOpen === this && e.target === this.darkener)) {
                    this._toggle(e);
                }
            } else {
                if (e.target.hasAttribute(ATTR_CLOSE_SIDEBAR)) {
                    this._toggle(e);
                }
            }
        }.bind(this));
    }
}

OffCanvas.currentOpen = null;