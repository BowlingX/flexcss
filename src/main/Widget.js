/**
 * A Widget is a
 */
export default
class Widget {

    /**
     * Creates a new Widget
     * @param [element], optional define the content of widget
     */
    constructor(element) {
        if (element) {
            this.element = element instanceof HTMLElement ? element : global.document.getElementById(element);
            this.element.hfWidgetInstance = this;
        }
        /**
         *
         * @type {Promise}
         */
        this.asyncContent = null;
    }

    /**
     *
     * @returns {Promise}
     */
    getAsync() {
        return this.asyncContent;
    }

    /**
     * @param {Promise} async
     * @returns {Widget}
     */
    setAsync(async) {
        this.asyncContent = async;
        return this;
    }

}