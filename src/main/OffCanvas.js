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

import Settings from './util/Settings';
import Util from './util/Util';
import Event from './util/Event';
import FixedWindow from './lib/FixedWindow';

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
 * @type {string}
 */
export const EVENT_TOGGLE = 'flexcss.offcanvas.toggle';

/**
 * A OffCanvas Implementation
 */
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
        const doc = global.document;
        let touchedX = 0;
        const navigationContainer = NavigationId instanceof HTMLElement ?
            NavigationId : doc.getElementById(NavigationId);
        const darkener = Darkener instanceof HTMLElement ? Darkener : doc.getElementById(Darkener);
        const DARKENER_CLASS_TOGGLE = `toggle-${darkener.id}` || 'darkener';
        const DARKENER_CLASS_INSTANT_TOGGLE = `${DARKENER_CLASS_TOGGLE}-open`;

        const shouldNotTouch = () => {
            return window.innerWidth >= Settings.get().smallBreakpoint;
        };

        if (!darkener || !navigationContainer) {
            throw new Error('Could not find needed elements (Darkener and/or NavigationId)');
        }

        this.darkener = darkener;
        this.darkenerClassToggle = DARKENER_CLASS_TOGGLE;
        this.darkenerClassToggleInstant = DARKENER_CLASS_INSTANT_TOGGLE;
        this.globalToggleClass = Settings.get().canvasToggledClass;

        this.navigationContainer = navigationContainer;
        this.navigationContainerId = navigationContainer.id;

        // create id if id does not exist
        if (!this.navigationContainerId) {
            this.navigationContainerId = Util.guid();
            navigationContainer.id = this.navigationContainerId;
        }

        if (!disableTouch) {
            navigationContainer.addEventListener('touchstart', (e) => {
                if (shouldNotTouch()) {
                    return;
                }
                touchedX = e.touches[0].clientX;
                navigationContainer.mustHide = false;
            });
            navigationContainer.addEventListener('touchmove', (e) => {
                if (shouldNotTouch()) {
                    return;
                }
                const { clientX } = e.touches[0];
                const target = navigationContainer;
                const style = target.style;
                const calcX = touchedX - clientX;
                const bounds = target.getBoundingClientRect();
                const compare = factor > 0 ? calcX <= 0 : calcX >= 0;
                if (compare) {
                    style.transition = 'transform 0s ease';
                    style.webkitTransition = '-webkit-transform 0s ease';
                    target.mustHide = factor > 0 ? calcX * -1 >
                    bounds.width / HIDE_FACTOR : calcX > bounds.width / HIDE_FACTOR;
                    const transform = `translate3d(${calcX * -1}px,0,0)`;
                    style.transform = transform;
                    style.webkitTransform = transform;
                }
            });
            navigationContainer.addEventListener('touchend', () => {
                if (shouldNotTouch()) {
                    return;
                }
                const target = navigationContainer;
                const style = target.style;
                if (target.mustHide) {
                    const width = target.getBoundingClientRect().width * factor;
                    style.transition = 'transform .2s ease';
                    style.webkitTransition = '-webkit-transform .2s ease';
                    const transform = `translate3d(${width}px,0,0)`;
                    style.transform = transform;
                    style.webkitTransform = transform;
                    this._remove().then(() => {
                        this.resetTransform(style);
                    });
                    this._removeInstant();
                } else {
                    this.resetTransform(style);
                }
            });
        }
    }

    /**
     * @param {Object} s
     */
    resetTransform(s) {
        s.transform = '';
        s.transition = '';
        s.webkitTransform = '';
        s.webkitTransition = '';
    }

    /**
     * @param {Object} [event]
     * @private
     */
    _remove(event) {
        return new Promise((resolve) => {
            Util.addEventOnce(Settings.getTransitionEvent(), this.navigationContainer, function scheduler(e) {
                if (e.srcElement !== this.navigationContainer) {
                    return Util.addEventOnce(Settings.getTransitionEvent(),
                        this.navigationContainer, scheduler.bind(this));
                }
                requestAnimationFrame(() => {
                    OffCanvas.currentOpen = null;
                    const docCls = global.document.documentElement.classList;
                    docCls.remove(this.darkenerClassToggle);
                    docCls.remove(this.globalToggleClass);
                    if (!!event) {
                        Event.dispatchAndFire(this.navigationContainer, EVENT_TOGGLE);
                    }
                    resolve();
                });
            }.bind(this));
        });
    }

    /**
     * @private
     */
    _removeInstant() {
        this.navigationContainer.classList.remove(OPEN_CLASS);
        global.document.documentElement.classList.remove(this.darkenerClassToggleInstant);
        this.darkener.classList.remove(INIT_CLASS);
        FixedWindow.getInstance().close();
    }

    /**
     * Toggles a an off-canvas element
     * @param [e]
     * @private
     */
    toggle(e) {
        if (e) {
            e.preventDefault();
        }
        this.resetTransform(this.navigationContainer.style);
        const darkenerClass = this.darkener.classList;
        const DARKENER_CLASS_TOGGLE = this.darkenerClassToggle;
        const DARKENER_CLASS_INSTANT_TOGGLE = this.darkenerClassToggleInstant;
        const navigationControllerClassList = this.navigationContainer.classList;
        if (!OffCanvas.currentOpen) {
            Util.addEventOnce(Settings.getTransitionEvent(), this.navigationContainer, () => {
                if (!!e) {
                    Event.dispatchAndFire(this.navigationContainer, EVENT_TOGGLE);
                }
            });
            OffCanvas.currentOpen = this;
            FixedWindow.getInstance().open(this);
            const docElementCls = global.document.documentElement.classList;
            docElementCls.add(this.globalToggleClass);
            docElementCls.add(DARKENER_CLASS_INSTANT_TOGGLE);
            docElementCls.add(DARKENER_CLASS_TOGGLE);
            darkenerClass.add(INIT_CLASS);
            navigationControllerClassList.add(OPEN_CLASS);
        } else {
            return this.close(e);
        }
    }

    close(event) {
        if (this.navigationContainer.classList.contains(OPEN_CLASS)) {
            const promise = this._remove(event);
            this._removeInstant();
            return promise;
        }
        return new Promise(r => r());
    }

    /**
     * Register events
     * @param [delegate]
     */
    registerEvents(delegate) {
        const thisDelegate = delegate || global.document;
        FixedWindow.getInstance().addScreenConstraint(OffCanvas, (width) => width < Settings.get().smallBreakpoint);
        thisDelegate.addEventListener(Settings.getTabEvent(), (e) => {
            if (OffCanvas.currentOpen && OffCanvas.currentOpen !== this) {
                return;
            }
            const id = this.navigationContainerId;
            const validTarget = e.target.getAttribute(ATTR_TARGET) === id;
            if (!Util.isPartOfNode(e.target, this.navigationContainer)) {
                if (validTarget || (OffCanvas.currentOpen === this && e.target === this.darkener)) {
                    this.toggle(e);
                }
            } else {
                if (e.target.hasAttribute(ATTR_CLOSE_SIDEBAR)) {
                    this.toggle(e);
                }
            }
        });
    }
}

OffCanvas.currentOpen = null;

export default OffCanvas;
