import Settings from '../util/Settings';
import debounce from './debounce';
import Event from '../util/Event';

const CLS_FIXED_WINDOW = 'fixed-window-open';

export const EVENT_BEFORE_FIXED_ADD = 'flexcss.fixedWindow.beforeAdd';
export const EVENT_AFTER_FIXED_REMOVE = 'flexcss.fixedWindow.afterRemove';

/**
 * @type {FixedWindow}
 */
let fixedWindowInstance;

export default class FixedWindow {

    constructor() {
        this.widgets = [];
        this.currentScrollTop = 0;
        this.fixedScreenConstraints = [];
        this.windowWidth = 0;
        this.isFixedWindowActive = false;
    }

    /**
     * Adds a constraint to detect if the window needs to be changed when the screensize changes
     *
     * @param {Function} widget
     * @param {Function} fixedBreakpointFn gets a width argument, return true to open a window
     */
    addScreenConstraint(widget, fixedBreakpointFn) {
        this.fixedScreenConstraints[widget] = fixedBreakpointFn;
    }

    /**
     * @private
     */
    _checkFixedNeeded() {
        if (this.widgets.length === 0) {
            return;
        }
        const widgets = new Set(this.widgets);
        const widgetsThatRequireFixedWindow = Array.from(widgets).some((widget) => {
            return this.fixedScreenConstraints[widget] && this.fixedScreenConstraints[widget](this.windowWidth);
        });
        if (!widgetsThatRequireFixedWindow) {
            this._removeFixedContainer();
        } else {
            this._addFixedContainer();
        }
    }

    /**
     * @private
     */
    _addFixedContainer() {
        if (this.isFixedWindowActive) {
            return;
        }
        Event.dispatchAndFire(global.document, EVENT_BEFORE_FIXED_ADD);
        // this causes layout and should be optimized
        // At lest we write in a batch later
        this.currentScrollTop = global.pageYOffset;
        Settings.get().scrollbarUpdateNodes.map((n) => {
            let foundProperty = 'paddingRight';
            let direction = 1;
            let node = n;
            if (n instanceof Array) {
                const [whatNode, property, d] = n;
                foundProperty = property;
                node = whatNode;
                direction = d || 1;
            }
            return {
                node,
                property: foundProperty,
                value: `${parseInt(global.getComputedStyle(node)[foundProperty], 10) +
                (!node.__fixedWindowMod__ ? (Settings.getScrollbarWidth() * direction) : 0)}px`
            };
        }).forEach((d) => {
            d.node.__fixedWindowMod__ = true;
            d.node.style[d.property] = d.value;
        });

        global.document.documentElement.classList.add(CLS_FIXED_WINDOW);
        global.document.body.style.cssText += `top:${this.currentScrollTop * -1}px;position:fixed`;

        this.isFixedWindowActive = true;
    }

    /**
     * @private
     */
    _removeFixedContainer() {
        if (this.isFixedWindowActive) {
            global.document.body.style.position = "static";
            global.document.body.style.top = "0px";
            // reset scrollTop
            global.document.documentElement.scrollTop = this.currentScrollTop;
            global.document.body.scrollTop = this.currentScrollTop;
            Settings.get().scrollbarUpdateNodes.forEach((node) => {
                if (node instanceof Array) {
                    const [whatNode, property] = node;
                    delete whatNode.__fixedWindowMod__;
                    whatNode.style[property] = '';
                } else {
                    delete node.__fixedWindowMod__;
                    node.style.paddingRight = '';
                }
            });
            global.document.documentElement.classList.remove(CLS_FIXED_WINDOW);
            Event.dispatchAndFire(global.document, EVENT_AFTER_FIXED_REMOVE);
            this.isFixedWindowActive = false;
        }
    }

    /**
     * Will close a window when no widgets are opened that need one
     */
    resizeListener() {
        this.windowWidth = global.innerWidth;
        this._checkFixedNeeded();
    }

    /**
     * @returns {FixedWindow}
     */
    static getInstance() {
        if (!fixedWindowInstance) {
            fixedWindowInstance = new FixedWindow();
            fixedWindowInstance.windowWidth = global.innerWidth;
            global.addEventListener(
                'resize',
                debounce(fixedWindowInstance.resizeListener.bind(fixedWindowInstance), 500)
            );
        }
        return fixedWindowInstance;
    }

    /**
     * Request a close of the fixed window
     * @returns {Promise}
     */
    close() {
        return new Promise((resolve) => {
            this.widgets.pop();
            if (this.widgets.length === 0) {
                // restore scrollPosition:
                requestAnimationFrame(() => {
                    this._removeFixedContainer();
                    resolve();
                });
            }
        });
    }

    /**
     * Request to open a fixed windows
     * @param {Object|DestroyableWidget} instance
     */
    open(instance) {
        let fixed = false;
        if (typeof instance === 'object') {
            const cn = instance.constructor;
            const fixedWidget = this.fixedScreenConstraints[instance.constructor];
            if (cn && fixedWidget) {
                fixed = fixedWidget(this.windowWidth);
            }
            // open a new window if there is no window active
            if (this.widgets.length === 0) {
                if (fixed) {
                    this._addFixedContainer();
                }
            }
            this.widgets.push(cn);
        }
    }
}
