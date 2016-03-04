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

/**
 * Provides a Basic Widget
 */
class DestroyableWidget {

    constructor() {
        this.listeners = [];
    }

    /**
     * Destroys a Widget
     */
    destroy() {
        this.listeners.forEach((listener) => {
            listener.element.removeEventListener.apply(listener.element, listener.args);
        });
        this.listeners = [];
    }

    /**
     * Adds an event and registers it later to remove bindings
     * @param {HTMLElement} element
     * @param {String} name
     * @param {Function} listener
     * @param {boolean} [capture]
     * @returns {Function}
     */
    addEventListener(element, name, listener, capture) {
        this.listeners.push({
            element,
            args: [name, listener, capture]
        });

        element.addEventListener(name, listener, capture);
        return listener;
    }

}

export default DestroyableWidget;
