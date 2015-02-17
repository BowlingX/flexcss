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
export default class Settings {

    /**
     * Setup global settings, overwrite default values
     * @param {Object} settings
     */
    static setup(settings) {
        Object.assign(GLOBAL_SETTINGS, settings);
    }

    static get() {
        return GLOBAL_SETTINGS;
    }
}

// Settings Statics, used by widgets

// Measure scrollbar width
Settings.CONST_SCROLLBAR_WIDTH = Util.getScrollBarWidth();
// detect right transition end event
Settings.CONST_TRANSITION_EVENT = Util.whichTransitionEndEvent();

Settings.CONST_TAB_EVENT = 'click';