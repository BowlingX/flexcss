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
import Util from './Util';

// we attach global settings to global once because settings might be shared a lot of times trough the application
// Maybe find a better way to handle that scenario
if (!global.FLEXCSS_GLOBAL_SETTINGS) {
    global.FLEXCSS_GLOBAL_SETTINGS = {
        // defined breakpoint for small devices < n
        smallBreakpoint: 768,
        // nodes that should be updated when no scrollbar is expected
        scrollbarUpdateNodes: global.document.body !== null ? [global.document.body] : [],
        // additional Delay until darkener is fully hidden
        darkenerFadeDelay: 100,
        // class that is added if canvas has been toggled
        canvasToggledClass: 'toggled-canvas'
    };

    global.FLEXCSS_CONST_IS_IOS = null;

    global.FLEXCSS_CONST_IS_TOUCH = null;

    global.FLEXCSS_CONST_IS_IE = null;

    global.FLEXCSS_CONST_TAB_EVENT = 'click';

    global.FLEXCSS_IS_SMALL_SCREEN = false;

    const init = () => {
        // Measure scrollbar width
        global.FLEXCSS_CONST_SCROLLBAR_WIDTH = Util.getScrollBarWidth();
        // detect right transition end event
        global.FLEXCSS_CONST_TRANSITION_EVENT = Util.whichTransitionEndEvent();
    };

    if (global.document.readyState !== 'loading') {
        init();
    } else {
        // it's possible that global.document.body is not available if the document is not
        // loaded completely
        document.addEventListener('DOMContentLoaded', () => {
            init();
        });
    }
}

/**
 * Utility class that setups global settings
 */
class Settings {

    /**
     * Setup global settings, overwrite default values
     * @param {Object} settings
     */
    static setup(settings) {
        Object.assign(global.FLEXCSS_GLOBAL_SETTINGS, settings);
    }

    /**
     * Access to global settings
     * @returns {Object}
     */
    static get() {
        return global.FLEXCSS_GLOBAL_SETTINGS;
    }

    /**
     * Detects a IOS Device, caches subsequent calls
     * @returns {boolean}
     */
    static isIosDevice() {
        if (!global.FLEXCSS_CONST_IS_IOS) {
            global.FLEXCSS_CONST_IS_IOS = global.navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
        }

        return global.FLEXCSS_CONST_IS_IOS;
    }

    /**
     * @returns {boolean}
     */
    static isSmallScreen() {
        return window.innerWidth < Settings.get().smallBreakpoint;
    }

    /**
     * Detects a touch device, caches subsequent calls
     * @returns {boolean}
     */
    static isTouchDevice() {
        if (!global.FLEXCSS_CONST_IS_TOUCH) {
            global.FLEXCSS_CONST_IS_TOUCH = 'ontouchstart' in window || !!(global.navigator.msMaxTouchPoints);
        }
        return global.FLEXCSS_CONST_IS_TOUCH;
    }

    /**
     * Checks if current browser is Internet Explorer
     * @returns {boolean|*}
     */
    static isIE() {
        if (!global.FLEXCSS_CONST_IS_IE) {
            global.FLEXCSS_CONST_IS_IE = "ActiveXObject" in window;
        }
        return global.FLEXCSS_CONST_IS_IE;
    }

    /**
     * @returns {String}
     */
    static getTransitionEvent() {
        return global.FLEXCSS_CONST_TRANSITION_EVENT;
    }

    /**
     * @returns {int}
     */
    static getScrollbarWidth() {
        return global.FLEXCSS_CONST_SCROLLBAR_WIDTH;
    }

    /**
     * @returns {String}
     */
    static getTabEvent() {
        return global.FLEXCSS_CONST_TAB_EVENT;
    }
}

export default Settings;
