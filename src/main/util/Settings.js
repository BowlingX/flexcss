/**
 * Global Settings
 */
let GLOBAL_SETTINGS = {
    //
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