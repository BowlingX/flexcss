/**
 * A Widget provides async content on a specific target (e.g. a modal link)
 */
export default
class Widget {

    /**
     * Creates a new Widget
     * @param [element], optional define the content of widget
     */
    constructor(element) {

        /**
         *
         * @type {Promise}
         */
        this.asyncContent = null;

        /**
         * @type {boolean}
         */
        this._isWidget = true;

        if (element) {
            /**
             * @type {HTMLElement}
             */
            this.element = element instanceof HTMLElement ? element : global.document.getElementById(element);
            if (this.element) {
                this.element.hfWidgetInstance = this;
                this.setAsync((() => {
                    return new Promise(((s) => {
                        s(this.element);
                    }).bind(this));
                }).bind(this));
            } else {
                throw 'Could not found element with ID: ' + element;
            }
        }
        /**
         * The final resulted content that a widget did create (e.g. a modal container)
         * @type {HTMLElement}
         */
        this.finalContent = null;
    }

    /**
     *
     * @returns {Promise}
     */
    getAsync() {
        return this.asyncContent();
    }

    /**
     * @param {() => Promise} async
     * @returns {Widget}
     */
    setAsync(async) {
        this.asyncContent = async;
        return this;
    }

    /**
     * @returns {HTMLElement}
     */
    getFinalContent() {
        return this.finalContent;
    }
    /**
     * @param {HTMLElement} element
     * @returns {Widget}
     */
    setElement(element) {
        this.element = element;
        return this;
    }

    /**
     * Destroys the generated content of this widget
     * @returns {boolean}
     */
    destroy() {

        if (this.finalContent && this.finalContent.parentNode) {
            this.finalContent.parentNode.removeChild(this.finalContent);
            return true;
        }

        delete this.element;
        delete this.asyncContent;
        delete this.finalContent;

        return false;
    }

    /**
     * Will find a widget on an Element
     * @param {HTMLElement} element
     * @returns {Widget|undefined}
     */
    static findWidget(element) {
        return element? element.hfWidgetInstance : undefined;
    }

    /**
     * Checks if a given object is an instance
     * @param {Object} self
     * @returns {boolean}
     */
    static isWidget(self) {
        return self instanceof Widget || typeof self === 'object' && self.hasOwnProperty('_isWidget');
    }

}