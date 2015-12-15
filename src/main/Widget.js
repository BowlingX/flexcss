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
 * FlexCss.Widget
 * Licensed under the MIT License (MIT)
 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
 */

/**
 * A Widget provides async content on a specific target (e.g. a modal link)
 */
class Widget {

    /**
     * Creates a new Widget
     * @param [element], optional define the content of widget
     */
    constructor(element) {
        /**
         *
         * @type {Promise}
         */
        this.asyncContent = null;

        /**
         * @type {boolean}
         */
        this._isWidget = true;

        if (element) {
            /**
             * @type {HTMLElement}
             */
            this.element = element instanceof HTMLElement ? element : global.document.getElementById(element);
            if (this.element) {
                this.element.hfWidgetInstance = this;
                this.setAsync(() => {
                    return new Promise((s) => {
                        s(this.element);
                    });
                });
            } else {
                throw new Error(`Could not found element with ID: ${element}`);
            }
        }
        /**
         * The final resulted content that a widget did create (e.g. a modal container)
         * @type {HTMLElement}
         */
        this.finalContent = null;
    }

    /**
     *
     * @returns {Promise}
     */
    getAsync() {
        return this.asyncContent();
    }

    /**
     * @param {Function.<Promise>} async
     * @returns {Widget}
     */
    setAsync(async) {
        this.asyncContent = async;
        return this;
    }

    /**
     * @returns {HTMLElement}
     */
    getFinalContent() {
        return this.finalContent;
    }

    /**
     * @param {HTMLElement} element
     * @returns {Widget}
     */
    setElement(element) {
        this.element = element;
        return this;
    }

    /**
     * Destroys the generated content of this widget
     * @returns {boolean}
     */
    destroy() {
        if (this.finalContent && this.finalContent.parentNode) {
            this.finalContent.parentNode.removeChild(this.finalContent);
            return true;
        }

        delete this.element;
        delete this.asyncContent;
        delete this.finalContent;

        return false;
    }

    /**
     * Will find a widget on an Element
     * @param {HTMLElement} element
     * @returns {Widget|undefined}
     */
    static findWidget(element) {
        return element ? element.hfWidgetInstance : undefined;
    }

    /**
     * Checks if a given object is an instance
     * @param {Object} self
     * @returns {boolean}
     */
    static isWidget(self) {
        return self instanceof Widget || typeof self === 'object' && self.hasOwnProperty('_isWidget');
    }
}

export default Widget;
