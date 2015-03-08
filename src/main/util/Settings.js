import Util from 'util/Util';
/**
 * Global Settings
 */
let GLOBAL_SETTINGS = {
    // defined breakpoint for small devices < n
    smallBreakpoint: 768,
    // nodes that should be updated when no scrollbar is expected
    scrollbarUpdateNodes: [global.document.body],
    // additional Delay until darkener is fully hidden
    darkenerFadeDelay: 100
};

/**
 * Utility class that setups global settings
 */
export default
class Settings {

    /**
     * Setup global settings, overwrite default values
     * @param {Object} settings
     */
    static setup(settings) {
        Object.assign(GLOBAL_SETTINGS, settings);
    }

    /**
     * Access to global settings
     * @returns {Object}
     */
    static get() {
        return GLOBAL_SETTINGS;
    }

    /**
     * Detects a IOS Device, caches subsequent calls
     * @returns {boolean}
     */
    static isIosDevice() {
        if (!Settings._CONST_IS_IOS) {
            Settings._CONST_IS_IOS = global.navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
        }

        return Settings._CONST_IS_IOS;
    }

    /**
     * Detects a touch device, caches subsequent calls
     * @returns {boolean}
     */
    static isTouchDevice() {
        if (!Settings._CONST_IS_TOUCH) {
            Settings._CONST_IS_TOUCH = 'ontouchstart' in window || !!(global.navigator.msMaxTouchPoints);
        }
        return Settings._CONST_IS_TOUCH;
    }

    /**
     * Checks if current browser is Internet Explorer
     * @returns {boolean|*}
     */
    static isIE() {
        if (!Settings._CONST_IS_IE) {
            Settings._CONST_IS_IE = "ActiveXObject" in window;
        }
        return Settings._CONST_IS_IE;
    }
}

// Settings Statics, used by widgets

// Measure scrollbar width
Settings.CONST_SCROLLBAR_WIDTH = Util.getScrollBarWidth();
// detect right transition end event
Settings.CONST_TRANSITION_EVENT = Util.whichTransitionEndEvent();

Settings.CONST_TAB_EVENT = 'click';

Settings._CONST_IS_IOS = null;

Settings._CONST_IS_TOUCH = null;

Settings.CONST_CANVAS_TOGGLE = 'toggled-canvas';

Settings._CONST_IS_IE = null;
