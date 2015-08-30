/**
 * Provides a Basic Widget
 */
export default class DestroyableWidget {

    constructor() {
        this.listeners = [];
    }

    /**
     * Destroys a Widget
     */
    destroy() {
        this.listeners.forEach((listener) => {
            listener.element.removeEventListener.apply(listener.args);
        });
        delete this.listeners;
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
            element: element,
            args: [name, listener, capture]
        });
        element.addEventListener(name, listener, capture);
        return listener;
    }

}