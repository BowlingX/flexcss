/**
 * Simpler Event dispatching
 */
class EventHandler {

    /**
     * @param {HTMLElement} target
     * @param {String} name
     */
    constructor(target, name) {

        this.target = target;
        this.defaultOptions = {
            bubbles: true,
            cancelable: true
        };

        this.name = name;
    }

    /**
     * Set more options
     * @param {Object} options
     * @returns {EventHandler}
     */
    withOptions(options) {
        Object.assign(this.defaultOptions, (options || {}));
        return this;
    }

    /**
     * @param {Event} e
     * @returns {EventHandler}
     */
    withOriginal(e) {
        this.defaultOptions.originalEvent = e;
        return this;
    }

    /**
     * @param {*} o
     * @returns {EventHandler}
     */
    withDetail(o) {
        this.defaultOptions.detail = o;
        return this;
    }

    /**
     * @returns {Window.CustomEvent}
     */
    fire() {
        var e = new CustomEvent(this.name, this.defaultOptions);
        this.target.dispatchEvent(e);
        return e;
    }
}

export default class Event {
    /**
     * Dispatches a custom event
     * @param {HTMLElement} target
     * @param {String} name
     * @returns {EventHandler}
     */
    static dispatch(target, name) {
        return new EventHandler(target, name);
    }

    /**
     * Dispatches a custom event
     * @param {HTMLElement} target
     * @param {String} name
     * @param {Object} [options]
     * @returns {Window.CustomEvent}
     */
    static dispatchAndFire(target, name, options) {
        return new EventHandler(target, name).withOptions(options).fire();
    }
}
