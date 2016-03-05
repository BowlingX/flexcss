import Settings from '../util/Settings';
import debounce from './debounce';
import Event from '../util/Event';
import Util from '../util/Util';
import scrollLoop from '../lib/scrollLoop';

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
        this.touchListener = null;
        this.scrollLoop = scrollLoop();
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
     * @returns {null|DestroyableWidget}
     */
    getCurrentWidget() {
        return this.widgets.length > 0 ? this.widgets[this.widgets.length - 1] : null;
    }

    /**
     * @private
     */
    _checkFixedNeeded() {
        if (this.widgets.length === 0) {
            return;
        }
        const widgets = new Set(this.widgets);
        const widgetsThatRequireFixedWindow = Array.from(widgets).some(({ widget }) => {
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
        Event.dispatchAndFire(global.document, EVENT_BEFORE_FIXED_ADD, {
            detail: this.getCurrentWidget()
        });
        // this causes layout and should be optimized
        // At lest we write in a batch later
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

        this.touchListener = (e) => {
            e.preventDefault();
        };

        let shouldNotMove = false;
        this.touchStartListener = (e) => {
            const { element } = this.getCurrentWidget();
            if (Util.isPartOfNode(e.target, element)) {
                if (element.scrollTop === 0) {
                    element.scrollTop = 1;
                    shouldNotMove = true;
                } else if (element.scrollHeight === element.scrollTop + element.offsetHeight) {
                    shouldNotMove = true;
                    element.scrollTop -= 1;
                }
            }
        };

        global.addEventListener('touchmove', this.touchListener, false);
        global.document.body.addEventListener('touchstart', this.touchStartListener);

        this.touchMoveListener = (e) => {
            const { element } = this.getCurrentWidget();
            if (Util.isPartOfNode(e.target, element)) {
                if (!shouldNotMove) {
                    e.stopImmediatePropagation();
                }
                shouldNotMove = false;
            }
        };
        global.document.body.addEventListener('touchmove', this.touchMoveListener);

        global.document.documentElement.classList.add(CLS_FIXED_WINDOW);
        this.isFixedWindowActive = true;
    }

    /**
     * @private
     */
    _removeFixedContainer() {
        if (this.isFixedWindowActive) {
            // cleanup event listeners
            global.removeEventListener('touchmove', this.touchListener, false);
            global.document.body.removeEventListener('touchstart', this.touchStartListener);
            global.document.body.removeEventListener('touchmove', this.touchMoveListener);

            // reset scrollbar nodes
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
            const eventHandler = fixedWindowInstance.resizeListener.bind(fixedWindowInstance);
            global.addEventListener(
                'resize',
                debounce(eventHandler, 500)
            );
            global.addEventListener('orientationchange', eventHandler);
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
     * @param {HTMLElement} element
     */
    open(instance, element) {
        let fixed = false;
        if (typeof instance === 'object') {
            const widget = instance.constructor;
            const fixedWidget = this.fixedScreenConstraints[instance.constructor];
            if (widget && fixedWidget) {
                fixed = fixedWidget(this.windowWidth);
            }
            const length = this.widgets.length;
            this.widgets.push(
                {
                    widget,
                    element
                }
            );
            // open a new window if there is no window active
            if (length === 0) {
                if (fixed) {
                    this._addFixedContainer();
                }
            }
        }
    }
}