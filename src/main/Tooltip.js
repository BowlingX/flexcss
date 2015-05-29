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
 * FlexCss.Tooltip
 * Licensed under the MIT License (MIT)
 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
 */

'use strict';

import Util from 'util/Util';
/**
 * @type {string}
 */
const CLASS_NAMES_TOOLTIP = 'tooltip-container';
/**
 * @type {string}
 */
const CLASS_NAMES_OPEN = 'open';

/**
 * @type {string}
 */
const ATTR_DATA_CLASSNAME = 'data-class';

/**
 * @type {HTMLDocument}
 */
const doc = global.document;

/**
 * Simple Tooltip
 */
export default
class Tooltip {

    /**
     * Creates a Tooltip
     * @param {HTMLElement|String} DelegateContainer
     * @param {Object} options
     */
    constructor(DelegateContainer, options) {

        /**
         * The Container where possible events are captured
         */
        this.container = DelegateContainer instanceof HTMLElement ?
            DelegateContainer : doc.getElementById(DelegateContainer);

        if (!this.container) {
            throw 'Could not create Tooltip, DelegateContainer not found';
        }

        /**
         * The Container where tooltips are stored for this instance
         * @type {HTMLElement}
         */
        this.tooltipContainer = null;

        /**
         * Default Options
         */
        this.options = {
            containerClass: '',
            selectorAttribute: 'data-tooltip'
        };

        Object.assign(this.options, options);
    }

    /**
     * Creates and shows a tooltip
     * @param {HTMLElement} target where is this tooltip positioned
     * @param {String} text text content in tooltip, will be NOT escaped
     * @param {Boolean} removeTitle removes title element if given
     */
    createTooltip(target, text, removeTitle) {
        // abort if text is empty
        if (!text || text && text.trim() === '') {
            return;
        }
        let tooltipContainer = this.tooltipContainer;

        if (!tooltipContainer) {
            tooltipContainer = doc.createElement('div');
            this._restoreClassNames(tooltipContainer, target);
            this.container.appendChild(tooltipContainer);
            this.tooltipContainer = tooltipContainer;
        }
        tooltipContainer.style.left = 'auto';
        tooltipContainer.style.top = 'auto';
        tooltipContainer.innerHTML = text;
        tooltipContainer.flexTooltipCurrentTarget = target;
        if (removeTitle) {
            target.oldTitle = text;
            target.removeAttribute('title');
        }

        Util.setupPositionNearby(target, tooltipContainer, this.container, true, true);

        tooltipContainer.classList.add(CLASS_NAMES_OPEN);

    }

    _restoreClassNames(container, target) {
        // allow additional classname per tooltip on target element
        const classNames = [CLASS_NAMES_TOOLTIP, this.options.containerClass],
            maybeTargetClass = target.getAttribute(ATTR_DATA_CLASSNAME);
        if (maybeTargetClass) {
            classNames.push(maybeTargetClass);
        }
        container.className = classNames.join(" ");
        return this;
    }

    /**
     * @returns {HTMLElement|null}
     */
    getCurrentTarget() {
        return this.tooltipContainer ? this.tooltipContainer.flexTooltipCurrentTarget : null;
    }

    /**
     * Removes a Tooltip on given target
     * @param {HTMLElement} [target], if not given will remove current open tooltip on this instance
     */
    removeTooltip(target) {
        if (!target && this.tooltipContainer) {
            target = this.tooltipContainer.flexTooltipCurrentTarget;
        }
        if (this.tooltipContainer) {
            if (this.tooltipContainer.flexTooltipCurrentTarget !== target) {
                return;
            }
            this.tooltipContainer.classList.remove(CLASS_NAMES_OPEN);
            delete this.tooltipContainer.flexTooltipCurrentTarget;
        }
        if (target && target.oldTitle) {
            target.setAttribute('title', target.oldTitle);
        }
    }

    /**
     * Initilizes mouse events on container element
     */
    registerEvents() {
        const self = this;
        this.container.addEventListener('mouseover', function (e) {
            if (e.target.hasAttribute(self.options.selectorAttribute)) {
                self.createTooltip(e.target, e.target.getAttribute('title'), true);
            }
        });

        this.container.addEventListener('mouseout', function (e) {
            if (e.target.hasAttribute(self.options.selectorAttribute)) {
                self.removeTooltip(e.target);
            }
        });
        return this;
    }
}
