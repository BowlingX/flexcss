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

const PFX = ["webkit", "moz", "MS", "o", ""];

const COL_LEFT_CLASS = 'is-collision-left';

const COL_RIGHT_CLASS = 'is-collision-right';

const COL_BOTTOM_CLASS = 'is-collision-bottom';

/**
 * Provides shared DOM-Utility functions
 */
class Util {

    /**
     * Will register the right animation event based on browser
     * @param element
     * @param type
     * @param callback
     */
    static prefixedAnimateEvent(element, type, callback) {
        const thisFunction = function thisFunction(e) {
            callback.apply(element, [e, thisFunction]);
        };

        for (let p = 0; p < PFX.length; p++) {
            let thisType = type;
            if (!PFX[p]) {
                thisType = type.toLowerCase();
            }
            const name = PFX[p] + thisType;
            element.addEventListener(name, thisFunction, true);
        }
    }

    /**
     * Get correct transitionend event
     * @returns {String}
     * @private
     */
    static whichTransitionEndEvent() {
        const el = document.createElement('fake');

        const transitions = {
            transition: 'transitionend',
            OTransition: 'oTransitionEnd',
            MozTransition: 'transitionend',
            WebkitTransition: 'webkitTransitionEnd'
        };

        for (const [key, value] of Object.entries(transitions)) {
            if (el.style[key] !== undefined) {
                return value;
            }
        }
    }

    /**
     * Check if target is part of parent node
     * @param target
     * @param parent
     * @returns {boolean}
     */
    static isPartOfNode(target, parent) {
        if (!target || !parent) {
            return false;
        }
        let now = target;
        while (now !== parent && now !== null) {
            if (now === parent) {
                break;
            }
            now = now.parentNode;
        }
        return now !== null;
    }

    /**
     * Finds the closest element including itself matching a callback
     * @param {Node} el
     * @param {Function} callback
     * @returns {Node|boolean}
     */
    static closestCallback(el, callback) {
        let element = el;
        while (element !== null) {
            if (callback(element)) {
                return element;
            }
            element = element.parentNode;
        }
        return false;
    }

    /**
     * Walks the tree until func returns true for given argument
     * @param target
     * @param func
     * @returns {boolean|HTMLElement}
     */
    static parentsUntil(target, func) {
        if (!target) {
            return false;
        }
        let now = target;
        while (!func(now) && now !== null) {
            now = now.parentNode;
        }

        return now;
    }

    /**
     * Generates a unique id
     * @return {String}
     */
    static guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
    }

    /**
     * Detects scrollbar width
     * @see http://stackoverflow.com/questions/986937/how-can-i-get-the-browsers-scrollbar-sizes
     * @returns {number}
     */
    static getScrollBarWidth() {
        const doc = global.document;
        const inner = doc.createElement('p');

        inner.style.width = "100%";
        inner.style.height = "200px";

        const outer = doc.createElement('div');
        outer.style.position = "absolute";
        outer.style.top = "0px";
        outer.style.left = "0px";
        outer.style.visibility = "hidden";
        outer.style.width = "200px";
        outer.style.height = "150px";
        outer.style.overflow = "hidden";
        outer.appendChild(inner);

        doc.body.appendChild(outer);
        const w1 = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        let w2 = inner.offsetWidth;
        if (w1 === w2) {
            w2 = outer.clientWidth;
        }
        doc.body.removeChild(outer);

        return (w1 - w2);
    }


    /**
     * Run an event once
     * @param {String} ev
     * @param {HTMLElement|HTMLDocument} target
     * @param {Function} func
     * @param {boolean} [capture]
     * @return Function created listener
     */
    static addEventOnce(ev, target, func, capture) {
        const thisFunction = function thisFunction(event) {
            func(event, func);
            target.removeEventListener(ev, thisFunction, capture);
        };
        target.addEventListener(ev, thisFunction, capture);
        return thisFunction;
    }

    /**
     * Checks if an element is visible
     * @param {HTMLElement} element
     * @returns bool
     */
    static isVisible(element) {
        return element.offsetWidth > 0 && element.offsetHeight > 0;
    }

    /**
     * Creates a camelCaseRepresentation of a dashed string
     * @param {String} str
     * @returns String
     */
    static dashToCamelCase(str) {
        return str.replace(/-([a-z])/g, (g) => {
            return g[1].toUpperCase();
        });
    }

    /**
     * Creates a copy of `input`
     * @param {*} input
     * @return *
     */
    static copy(input) {
        return JSON.parse(JSON.stringify(input));
    }

    /**
     * Reads options from element (data attributes) and applies to base
     * @param {HTMLElement} element
     * @param {Object} base
     * @return {Object}
     */
    static applyOptionsFromElement(element, base) {
        if (!element) {
            return base;
        }
        const attrs = element.attributes;
        for (let i = 0; i < attrs.length; i++) {
            const attr = attrs[i];
            if (attr) {
                const s = Util.dashToCamelCase(attr.nodeName.replace('data-', ''));
                const val = attr.nodeValue;
                if (base.hasOwnProperty(s)) {
                    // skip functions
                    if (typeof base[s] === 'function') {
                        continue;
                    }
                    if (typeof base[s] === 'boolean') {
                        base[s] = parseInt(val || 1, 10) === 1;
                    } else {
                        base[s] = val;
                    }
                }
            }
        }
        return base;
    }

    /**
     * Will position an element directly at given target
     * Is aware of a given collision container to detect edges
     * Will put elementToPosition either to left, center or right edge (prefer right)
     *  and either to bottom or top (prefers bottom)
     *
     * You may overwrite preferred positioned with `centerHorizontal` and `positionTop`
     *
     * @param {HTMLElement|ClientRect} target the target container to align to
     * @param {HTMLElement} elementToPosition the element to position
     * @param {HTMLElement} collisionContainer the outer container to prevent collisions
     * @param {boolean} [centerHorizontal] set true to center element, otherwise it's put on the right border by default
     * @param {boolean} [positionTop] flip top, by default element is positioned to the bottom.
     * @returns {HTMLElement}
     */
    static setupPositionNearby(target, elementToPosition, collisionContainer, centerHorizontal, positionTop) {
        // determine relative offsets
        let amountTop = 0;
        let amountLeft = 0;
        Util.parentsUntil(target.parentNode, (el) => {
            if (!(el instanceof HTMLElement)) {
                return false;
            }
            const style = window.getComputedStyle(el);
            if (Util.isPartOfNode(elementToPosition, el)) {
                if (style && style.position === 'relative') {
                    amountTop += el.offsetTop || 0;
                    amountLeft += el.offsetLeft || 0;
                }
                return false;
            }
            return true;
        });

        const targetPosition = target instanceof HTMLElement ? target.getBoundingClientRect() : target;
        const elementRect = elementToPosition.getBoundingClientRect();
        const colRect = collisionContainer.getBoundingClientRect();
        const targetTop = targetPosition.top - amountTop;
        const targetRight = targetPosition.right;
        const isCollisionTop = (targetTop - elementRect.height) <= 0;
        const isCollisionBottom =
            window.innerHeight < (targetTop + amountTop + targetPosition.height + elementRect.height);
        const isCollisionLeft = targetRight < elementRect.width;
        const targetLeft = targetPosition.left;
        const isCollisionRight = (targetLeft + elementRect.width) > colRect.width;
        const classList = elementToPosition.classList;

        classList.remove(COL_RIGHT_CLASS);
        classList.remove(COL_LEFT_CLASS);
        classList.remove(COL_BOTTOM_CLASS);

        let calcTop;
        let calcLeft;
        if (isCollisionLeft && !isCollisionRight) {
            // put element to left if collision with left
            calcLeft = `${(targetPosition.left - colRect.left - amountLeft)}px`;
            classList.add(COL_LEFT_CLASS);
        } else {
            // maybe center if no collision with either side
            const rightPosition = `${(targetRight - elementRect.width - colRect.left - amountLeft)}px`;
            const leftCentered = ((targetLeft + targetPosition.width / 2) -
                    (elementRect.width / 2) || 0) - colRect.left;
            const collisionCentered = (leftCentered + elementRect.width) > colRect.width;
            if (centerHorizontal && !collisionCentered) {
                calcLeft = `${leftCentered}px`;
            } else {
                classList.add(COL_RIGHT_CLASS);
                calcLeft = rightPosition;
            }
        }

        if (isCollisionBottom || (positionTop && !isCollisionTop)) {
            // Put Element on top if collision
            calcTop = `${(targetTop - elementRect.height) - colRect.top}px`;
            classList.add(COL_BOTTOM_CLASS);
        } else {
            calcTop = `${(targetTop + targetPosition.height) - colRect.top}px`;
        }

        elementToPosition.style.cssText = `top:${calcTop};left:${calcLeft};`;

        return elementToPosition;
    }

    /**
     * Brings a given element into viewport
     * @param {HTMLElement} el
     * @param {int|function}[optionalOffset]
     */
    static scrollToElement(el, optionalOffset) {
        el.scrollIntoView();
        let thisOffset = optionalOffset;
        // optionally use a additional scrollDif
        if (thisOffset) {
            if (typeof thisOffset === 'function') {
                thisOffset = optionalOffset();
            }
            const scrolledY = window.pageYOffset;
            window.scroll(0, scrolledY - thisOffset);
        }
    }
}

export default Util;
