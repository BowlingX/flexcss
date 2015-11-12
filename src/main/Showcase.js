'use strict';

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

import DestroyableWidget from 'DestroyableWidget';

class Showcase extends DestroyableWidget {


    constructor(container) {
        super();

        this.container = container;

        this.registerEvents();
    }


    registerEvents() {
        const innerContainer =  this.container.children[0],
              containerWidth = innerContainer.getBoundingClientRect().width,
              parentContainerWidth = this.container.getBoundingClientRect().width;
        const diff =  containerWidth - parentContainerWidth;

        let lastX = 0, lastMove;

        this.container.addEventListener('mouseenter', (e) => {
            const rect = this.container.getBoundingClientRect();

            lastX = e.clientX;
        });

        this.container.addEventListener('mousemove', (e) => {
            const rect = this.container.getBoundingClientRect();
            const nextX = e.clientX;
            const normalizedRight = Math.abs(nextX - rect.left) /  (rect.width / 2);
            requestAnimationFrame(() => {
                const moveX = ((1 - normalizedRight) * diff);
                innerContainer.style.webkitTransform = `translate3d(${moveX}px,0,0)`;
                innerContainer.style.transform = `translate3d(${moveX}px,0,0)`;
                lastMove = moveX;
            });
        })
    }

    static init(selector) {
        const elements = document.querySelectorAll(selector);
        return Array.prototype.slice.call(elements).map((el) => {
            return new Showcase(el);
        });
    }

}

export default Showcase;