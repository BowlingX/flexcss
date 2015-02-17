/**
 * A Widget is a
 */
export default
class Widget {
    
    /**
     * @param element
     */
    constructor(element) {
        this.element = element instanceof HTMLElement ? element : global.document.getElementById(element);
        this.element.hfWidgetInstance = this;
        /**
         *
         * @type {Promise}
         */
        this.asyncContent = new Promise(() => {
        });
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