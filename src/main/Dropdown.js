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
 * FlexCss.Dropdown
 * Licensed under the MIT License (MIT)
 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
 */

import Util from './util/Util';
import Settings from './util/Settings';
import Event from './util/Event';
import Widget from './Widget';
import FixedWindow from './lib/FixedWindow';

/**
 * @type {string}
 */
const ATTR_CC = 'data-collision-container';
/**
 * @type {string}
 */
const ATTR_DARKENER = 'data-darkener-container';
/**
 * @type {string}
 */
const ATTR_ENABLE_EVENT_BUBBLE = 'data-enable-event-bubble';
/**
 * @type {string}
 */
const DARKENER_INIT = 'init';
/**
 * @type {string}
 */
const ATTR_DATA_TARGET = 'data-target';
/**
 * @type {string}
 */
const ATTR_CLOSE_DROPDOWN = 'data-close-dropdown';
/**
 * @type {string}
 */
const ATTR_NAME = 'data-dropdown';
/**
 * @type {string}
 */
const STATE_LOADING = 'loading';

const CLS_DARKENER_DROPDOWN = 'darkener-dropdown';
/**
 * @type {string}
 */
const CLS_OPEN = 'open';

/**
 * @type {string}
 */
const CLS_DROPDOWN = 'dropdown';

/**
 * @type {string}
 */
export const EVENT_DROPDOWN_CLOSED = 'flexcss.dropdown.closed';

/**
 * A Dropdown
 */
class Dropdown {
    constructor(DelegateContainer, Darkener) {
        const doc = global.document;

        /**
         * Container Element
         * @type {HTMLElement}
         */
        this.container = DelegateContainer instanceof HTMLElement ?
            DelegateContainer : doc.getElementById(DelegateContainer);

        this.currentOpen = null;
        this.currentTarget = null;
        /**
         * @type {HTMLElement}
         */
        this.darkener = Darkener instanceof HTMLElement ? Darkener : document.getElementById(Darkener);

        this.destroyOnClose = false;

        if (!this.darkener || !this.container) {
            throw new Error('required elements not found (darkener and container element)');
        }
    }

    /**
     * Method that handles delegation events for dropdowns
     * @param e
     * @returns {boolean}
     * @private
     */
    _delegateFunction(e) {
        const currentOpen = this.currentOpen;
        const target = Util.closestCallback(e.target, n => n instanceof HTMLElement && n.hasAttribute(ATTR_NAME));
        const targetIsCurrent = target === this.currentTarget;

        if (currentOpen && !Util.isPartOfNode(e.target, currentOpen) || targetIsCurrent) {
            this.close();
            if (targetIsCurrent) {
                e.preventDefault();
            }
            return targetIsCurrent ? false : this._delegateFunction(e);
        }

        if (target && !currentOpen) {

            if (!target.getAttribute(ATTR_ENABLE_EVENT_BUBBLE)) {
                e.preventDefault();
                e.stopImmediatePropagation();
            }

            if (target.isLoading) {
                return false;
            }
            this.createDropdown(target);
        } else {
            if (currentOpen) {
                if (e.target.hasAttribute(ATTR_CLOSE_DROPDOWN)) {
                    if (!e.target.getAttribute(ATTR_ENABLE_EVENT_BUBBLE)) {
                        e.preventDefault();
                    }
                    this.close();
                }
                if (!Util.isPartOfNode(e.target, currentOpen)) {
                    this.close();
                }
            }
        }
    }

    /**
     * Register Events for this dropdown container
     * @returns {Dropdown}
     */
    registerEvents() {
        FixedWindow.getInstance().addScreenConstraint(Dropdown, (width) => width < Settings.get().smallBreakpoint);
        this.container.addEventListener(Settings.getTabEvent(), this._delegateFunction.bind(this), true);
        return this;
    }

    /**
     * Destroys this instance, unbinds events
     * @returns {Dropdown}
     */
    destroy() {
        this.container.removeEventListener(Settings.getTabEvent(), this._delegateFunction.bind(this), true);
        return this;
    }


    /**
     * Destroys instance on close of dropdown
     * @param v
     * @returns {Dropdown}
     */
    setDestroyOnClose(v) {
        this.destroyOnClose = v;
        return this;
    }


    /**
     * Will add the right class to container for specific darkener id
     * @param instance
     * @param show
     */
    toggleDarkenerToggler(instance, show) {
        const cls = `toggle-${(instance.id || CLS_DARKENER_DROPDOWN)}`;
        const classList = this.container.classList;
        if (show) {
            classList.add(cls);
        } else {
            classList.remove(cls);
        }
    }

    /**
     * Closes Dropdown on current instance
     * @return {Boolean|Promise}
     */
    close() {
        const currentOpen = this.currentOpen;
        if (!currentOpen) {
            return false;
        }
        const darkenerInstance = currentOpen.flexDarkenerInstance || this.darkener;
        const thisCurrentOpen = currentOpen;

        const future = new Promise((resolve) => {
            if (window.getComputedStyle(currentOpen).position === 'fixed') {
                Util.addEventOnce(Settings.getTransitionEvent(), currentOpen, function scheduler(e) {
                    if (e.target !== currentOpen) {
                        return Util.addEventOnce(Settings.getTransitionEvent(), currentOpen, scheduler.bind(this));
                    }
                    requestAnimationFrame(() => {
                        Event.dispatchAndFire(thisCurrentOpen, EVENT_DROPDOWN_CLOSED);
                        // if a new dropdown has been opened in the meantime, do not remove darkener
                        if (this.currentOpen !== null) {
                            return false;
                        }
                        this.toggleDarkenerToggler(darkenerInstance, false);
                        resolve(true);
                    });
                }.bind(this));
            } else {
                resolve(true);
                Event.dispatchAndFire(thisCurrentOpen, EVENT_DROPDOWN_CLOSED);
            }
        });

        FixedWindow.getInstance().close();
        currentOpen.classList.remove(CLS_OPEN);

        if (currentOpen.flexDarkenerInstance) {
            currentOpen.flexDarkenerInstance.classList.remove(DARKENER_INIT);
        } else {
            this.darkener.classList.remove(DARKENER_INIT);
        }

        this.currentOpen = null;
        this.currentTarget = null;

        if (this.destroyOnClose) {
            this.destroy();
        }

        return future;
    }

    /**
     * Creates a dropdown on given target and opens it
     * @param {HTMLElement} target target where this dropdown is placed
     * @param {FlexCss.Widget} [thisWidget] if given will use widget instead of widget instance
     * @return {FlexCss.Dropdown}
     */
    createDropdown(target, thisWidget) {
        const doc = global.document;

        if (!target) {
            throw new Error('Dropdown target not found');
        }

        const widget = thisWidget || Widget.findWidget(target);
        let future;
        const data = target.getAttribute(ATTR_NAME);
        const dropdownContainerElement = doc.getElementById(data);
        const async = !dropdownContainerElement && Widget.isWidget(widget) ? widget.getAsync() : false;

        if (async) {
            target.classList.add(STATE_LOADING);
            target.isLoading = true;
            future = async.then((r) => {
                if (r instanceof HTMLElement) {
                    if (r.id) {
                        target.setAttribute(ATTR_NAME, r.id);
                    }
                    return r;
                }
                // Create container Element:
                const element = doc.createElement('div');
                element.className = CLS_DROPDOWN;
                element.innerHTML = r;
                element.id = Util.guid();
                // Cache target for later use:
                target.setAttribute(ATTR_NAME, element.id);
                this.container.appendChild(element);
                return element;
            }).then((r) => {
                target.isLoading = false;
                target.classList.remove(STATE_LOADING);
                return r;
            });
        } else {
            if (!dropdownContainerElement) {
                throw new Error(`Could not found Dropdown container with ID "${data}"`);
            }
            future = new Promise((r) => {
                r(dropdownContainerElement);
            });
        }

        future.then((dropdownContent) => {
            if (this.currentOpen) {
                this.close();
            }
            // Skip one frame to show animation
            target.dropdownContent = dropdownContent;
            const isAbsolute = global.getComputedStyle(dropdownContent).position === 'absolute';
            dropdownContent.hfWidgetInstance = this;

            if (!target.flexCollisionContainer) {
                const collisionC = target.getAttribute(ATTR_CC);
                target.flexCollisionContainer = collisionC ?
                doc.getElementById(collisionC) || document.documentElement : document.documentElement;
            }

            dropdownContent.classList.toggle(CLS_OPEN);
            if (dropdownContent.classList.contains(CLS_OPEN)) {
                this.currentOpen = dropdownContent;
                this.currentTarget = target;
            }
            FixedWindow.getInstance().open(this, dropdownContent);
            if (isAbsolute) {
                // Check collision:
                let selfTarget = target.getAttribute(ATTR_DATA_TARGET);
                selfTarget = selfTarget ? doc.getElementById(selfTarget) : target;
                Util.setupPositionNearby(selfTarget, dropdownContent, target.flexCollisionContainer);
            } else {
                // optionally get custom darkener container for target
                const d = target.getAttribute(ATTR_DARKENER);
                if (d) {
                    dropdownContent.flexDarkenerInstance = doc.getElementById(d);
                    (dropdownContent.flexDarkenerInstance || this.darkener).classList.toggle(DARKENER_INIT);
                } else {
                    this.darkener.classList.toggle(DARKENER_INIT);
                }
                this.toggleDarkenerToggler(dropdownContent.flexDarkenerInstance || this.darkener, true);

                dropdownContent.style.left = '0';
                dropdownContent.style.top = 'auto';
            }
        });
    }

}

export default Dropdown;
