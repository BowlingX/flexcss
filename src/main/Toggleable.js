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
 * FlexCss.Toggleable
 * Licensed under the MIT License (MIT)
 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
 */

import Settings from './util/Settings';
import Widget from './Widget';
import Util from './util/Util';
import Event from './util/Event';

/**
 * Event that is fired when a tab is closed
 * @type {string}
 */

export const EVENT_TAB_CLOSED = 'flexcss.tab.closed';

/**
 * Event that is fired when a tab has been opened
 * @type {string}
 */
export const EVENT_TAB_OPENED = 'flexcss.tab.opened';
/**
 * @type {string}
 */
const ATTR_NAME = 'data-toggle';
/**
 * @type {string}
 */
const ACTIVE_CLASS = 'active';
/**
 * @type {string}
 */
const LOADING_CLASS = 'loading';

/**
 * @type {string}
 */
const ATTR_TOGGLE_LIST = 'data-toggle-list';

/**
 * Creates a toggleable element, either for tabs or a single toggle
 */
class Toggleable {
    constructor(ContainerId) {
        const doc = global.document;

        this.container = ContainerId instanceof HTMLElement ? ContainerId :
            doc.getElementById(ContainerId);

        this.loading = false;

        if (!this.container) {
            throw new Error('Toggleable container with id "' + ContainerId + '" not found');
        }
    }

    /**
     * Listener
     * @param {Event} e
     * @private
     */
    _listener(e) {
        let target = e.target;
        const parent = target.parentNode;
        const doc = global.document;

        // support target child element to clicked
        if (!target.hasAttribute(ATTR_NAME)) {
            if (parent && parent.hasAttribute(ATTR_NAME)) {
                target = parent;
            } else {
                return;
            }
        }

        if (!target.hasAttribute(ATTR_NAME)) {
            return;
        }

        const refId = target.getAttribute(ATTR_NAME);
        const ref = doc.getElementById(refId);

        e.preventDefault();

        if (this.loading) {
            return;
        }

        this.toggleTarget(ref, target);
    }

    /**
     * Registers Events for this instance
     * @returns {Toggleable}
     */
    registerEvents() {
        this.container.addEventListener(Settings.getTabEvent(), this._listener.bind(this));
        return this;
    }

    /**
     * Toggles given `ref`
     * @param {HTMLElement|Node} ref
     * @param {HTMLElement|Node} [selfTarget] optional target node
     */
    toggleTarget(ref, selfTarget) {
        let target = selfTarget;
        if (!target && !ref) {
            return;
        }
        if (!target) {
            target = document.querySelector(`[${ATTR_NAME}="${ref.id}"]`);
        }

        let maybeToggleNode;
        let future;
        const elClassList = target.classList;
        let parentClassList;
        const parent = target.parentNode;
        const doc = global.document;

        future = new Promise((resolve, failure) => {
            if (ref) {
                resolve(ref);
            } else {
                const widget = Widget.findWidget(target);
                const async = widget ? widget.getAsync() : null;
                if (Widget.isWidget(widget) && async) {
                    future = async.then((r) => {
                        if (r instanceof HTMLElement) {
                            const id = Util.guid();
                            r.id = id;
                            target.setAttribute(ATTR_NAME, id);
                            resolve(r);
                        } else {
                            throw new Error(`Dynamically creating toggle-content is not supported right now.
                            Return an HTMLElement instance`);
                        }
                    });
                } else {
                    failure('Target not given');
                }
            }
        });

        if (parent) {
            maybeToggleNode = Util.parentsUntil(target, (node) => {
                return node && node.hasAttribute && node.hasAttribute(ATTR_TOGGLE_LIST);
            });

            parentClassList = parent.classList;
            // Abort if element is already active and if is part of a toggle list
            if (maybeToggleNode) {
                if (!parentClassList.contains(ACTIVE_CLASS)) {
                    parentClassList.toggle(ACTIVE_CLASS);
                    parentClassList.add(LOADING_CLASS);
                } else {
                    return;
                }
            }

            if (maybeToggleNode) {
                for (let i = 0; i < maybeToggleNode.children.length; i++) {
                    const n = maybeToggleNode.children[i];
                    const targetRef = n.children[0];
                    if (n !== parent) {
                        n.classList.remove(ACTIVE_CLASS);
                        if (targetRef) {
                            const attr = targetRef.getAttribute(ATTR_NAME);
                            const el = attr ? doc.getElementById(attr) : null;
                            if (el) {
                                Event.dispatchAndFire(el, EVENT_TAB_CLOSED);
                                el.classList.remove(ACTIVE_CLASS);
                                targetRef.classList.remove(ACTIVE_CLASS);
                            }
                        }
                    }
                }
            }
        }
        if (elClassList) {
            elClassList.toggle(ACTIVE_CLASS);
            elClassList.add(LOADING_CLASS);
        }
        this.loading = true;
        future.then((r) => {
            Event.dispatchAndFire(r, EVENT_TAB_OPENED);
            Toggleable._handleLoaded(target);
            r.classList.toggle(ACTIVE_CLASS);
            this.loading = false;
        }).catch(() => {
            this.loading = false;
            Toggleable._handleLoaded(target);
        });
    }

    /**
     * @param el
     * @private
     */
    static _handleLoaded(el) {
        const parentClassList = el.parentNode.classList;
        el.classList.remove(LOADING_CLASS);
        if (parentClassList) {
            parentClassList.remove(LOADING_CLASS);
        }
    }
}

export default Toggleable;
