import Util from 'util/Util';
import Settings from 'util/Settings';
import Event from 'util/Event';
import Widget from 'Widget';

/**
 * @type {string}
 */
const ATTR_CC = 'data-collision-container';
/**
 * @type {string}
 */
const ATTR_DARKENER = 'data-darkener-container';
/**
 * @type {string}
 */
const DARKENER_INIT = 'init';
/**
 * @type {string}
 */
const ATTR_DATA_TARGET = 'data-target';
/**
 * @type {string}
 */
const ATTR_CLOSE_DROPDOWN = 'data-close-dropdown';
/**
 * @type {string}
 */
const ATTR_NAME = 'data-dropdown';
/**
 * @type {string}
 */
const STATE_LOADING = 'loading';

const CLS_DARKENER_DROPDOWN = 'darkener-dropdown';
/**
 * @type {string}
 */
const CLS_OPEN = 'open';

/**
 * @type {string}
 */
const CLS_DROPDOWN = 'dropdown';

/**
 * @type {string}
 */
export const EVENT_DROPDOWN_CLOSED = 'flexcss.dropdown.closed';

/**
 * A Dropdown
 */
export default
class Dropdown {
    constructor(DelegateContainer, Darkener) {

        var doc = global.document;

        /**
         * Container Element
         * @type {HTMLElement}
         */
        this.container = DelegateContainer instanceof HTMLElement ?
            DelegateContainer : doc.getElementById(DelegateContainer);

        this.currentOpen = null;
        /**
         * @type {HTMLElement}
         */
        this.darkener = Darkener instanceof HTMLElement ? Darkener : document.getElementById(Darkener);

        this.destroyOnClose = false;

        if (!this.darkener || !this.container) {
            throw 'required elements not found (darkener and container element)';
        }

    }

    /**
     * Method that handles delegation events for dropdowns
     * @param e
     * @returns {*}
     * @private
     */
    _delegateFunction(e) {
        var currentOpen = this.currentOpen;
        if (currentOpen && !Util.isPartOfNode(e.target, currentOpen)) {
            this.close();
            return this._delegateFunction(e);
        }
        var targetHas = e.target.hasAttribute(ATTR_NAME),
            parentHas = e.target.parentNode ?
                e.target.parentNode.hasAttribute(ATTR_NAME) : false,
            target = targetHas ? e.target : e.target.parentNode;

        if (targetHas || parentHas && !currentOpen) {
            e.preventDefault();
            e.stopImmediatePropagation();

            if (target.isLoading) {
                return;
            }
            this.createDropdown(target);
        } else {
            if (currentOpen) {
                if (e.target.hasAttribute(ATTR_CLOSE_DROPDOWN)) {
                    e.preventDefault();
                    this.close();
                }
                if (!Util.isPartOfNode(e.target, currentOpen)) {
                    this.close();
                }
            }
        }
    }

    /**
     * Register Events for this dropdown container
     * @returns {Dropdown}
     */
    registerEvents() {
        this.container.addEventListener(Settings.getTabEvent(), this._delegateFunction.bind(this), true);
        return this;
    }

    /**
     * Destroys this instance, unbinds events
     * @returns {Dropdown}
     */
    destroy() {
        this.container.removeEventListener(Settings.getTabEvent(), this._delegateFunction.bind(this), true);
        return this;
    }


    /**
     * Destroys instance on close of dropdown
     * @param v
     * @returns {Dropdown}
     */
    setDestroyOnClose(v) {
        this.destroyOnClose = v;
        return this;
    }


    /**
     * Will add the right class to container for specific darkener id
     * @param instance
     * @param show
     */
    toggleDarkenerToggler(instance, show) {
        var cls = 'toggle-' + (instance.id || CLS_DARKENER_DROPDOWN),
            classList = this.container.classList;
        if (show) {
            classList.add(cls);
        } else {
            classList.remove(cls);
        }
    }

    /**
     * Closes Dropdown on current instance
     * @return {Boolean|Promise}
     */
    close() {
        var currentOpen = this.currentOpen;
        if (!currentOpen) {
            return false;
        }
        var future, darkenerInstance = currentOpen.flexDarkenerInstance || this.darkener, thisCurrentOpen = currentOpen;

        future = new Promise((resolve) => {
            if (window.getComputedStyle(currentOpen).position === 'fixed') {
                Util.addEventOnce(Settings.getTransitionEvent(), currentOpen, function () {
                    setTimeout(function () {
                        Event.dispatchAndFire(thisCurrentOpen, EVENT_DROPDOWN_CLOSED);
                        // if a new dropdown has been opened in the meantime, do not remove darkener
                        if (null !== this.currentOpen) {
                            return;
                        }
                        this.toggleDarkenerToggler(darkenerInstance, false);
                        this.container.classList.remove(Settings.get().canvasToggledClass);
                        resolve(true);
                    }.bind(this), Settings.get().darkenerFadeDelay);
                }.bind(this));
            } else {
                resolve(true);
                Event.dispatchAndFire(thisCurrentOpen, EVENT_DROPDOWN_CLOSED);
            }
        });

        currentOpen.classList.remove(CLS_OPEN);

        if (currentOpen.flexDarkenerInstance) {
            currentOpen.flexDarkenerInstance.classList.remove(DARKENER_INIT);
        } else {
            this.darkener.classList.remove(DARKENER_INIT);
        }

        this.currentOpen = null;

        if (this.destroyOnClose) {
            this.destroy();
        }

        return future;
    }

    /**
     * Creates a dropdown on given target and opens it
     * @param {HTMLElement} target target where this dropdown is placed
     * @param {FlexCss.Widget} [thisWidget] if given will use widget instead of widget instance
     * @return {FlexCss.Dropdown}
     */
    createDropdown(target, thisWidget) {
        var doc = global.document;

        if (!target) {
            throw 'Dropdown target not found';
        }

        var widget = thisWidget || Widget.findWidget(target), future,
            data = target.getAttribute(ATTR_NAME), dropdownContainerElement = doc.getElementById(data),
            async = !dropdownContainerElement && widget instanceof Widget ? widget.getAsync() : false;

        if (async) {
            target.classList.add(STATE_LOADING);
            target.isLoading = true;
            future = async.then(function (r) {
                if (r instanceof HTMLElement) {
                    if (r.id) {
                        target.setAttribute(ATTR_NAME, r.id);
                    }
                    return r;
                } else {
                    // Create container Element:
                    var element = doc.createElement('div');
                    element.className = CLS_DROPDOWN;
                    element.innerHTML = r;
                    element.id = Util.guid();
                    // Cache target for later use:
                    target.setAttribute(ATTR_NAME, element.id);
                    this.container.appendChild(element);
                    return element;
                }
            }).then(function (r) {
                target.isLoading = false;
                target.classList.remove(STATE_LOADING);
                return r;
            });
        } else {
            if (!dropdownContainerElement) {
                throw 'Could not found Dropdown container with ID "' + data + '"';
            }
            future = new Promise((r) => {
                r(dropdownContainerElement);
            });
        }

        future.then(function (dropdownContent) {
            if (this.currentOpen) {
                this.close();
            }
            // Skip one frame to show animation
            target.dropdownContent = dropdownContent;
            var isAbsolute = global.getComputedStyle(dropdownContent).position === 'absolute';

            if (!target.flexCollisionContainer) {
                var collisionC = target.getAttribute(ATTR_CC);
                target.flexCollisionContainer = collisionC ?
                doc.getElementById(collisionC) || document.body : document.body;
            }

            dropdownContent.classList.toggle(CLS_OPEN);
            if (dropdownContent.classList.contains(CLS_OPEN)) {
                this.currentOpen = dropdownContent;
            }
            if (isAbsolute) {
                // Check collision:
                var selfTarget = target.getAttribute(ATTR_DATA_TARGET);
                selfTarget = selfTarget ? doc.getElementById(selfTarget) : target;
                Util.setupPositionNearby(selfTarget, dropdownContent, target.flexCollisionContainer);
            } else {
                this.container.classList.add(Settings.get().canvasToggledClass);
                // optionally get custom darkener container for target
                var d = target.getAttribute(ATTR_DARKENER);
                if (d) {
                    dropdownContent.flexDarkenerInstance = doc.getElementById(d);
                    (dropdownContent.flexDarkenerInstance || this.darkener).classList.toggle(DARKENER_INIT);
                } else {
                    this.darkener.classList.toggle(DARKENER_INIT);
                }

                this.toggleDarkenerToggler(dropdownContent.flexDarkenerInstance || this.darkener, true);

                dropdownContent.style.left = '0';
                dropdownContent.style.top = 'auto';
            }
        }.bind(this));
    }

}