/*global KeyboardEvent*/

import Settings from 'util/Settings';
import $ from 'jquery';
import Event from 'util/Event';
import Util from 'util/Util';
import Widget from 'Widget';

const HTML_ELEMENT = global.document.documentElement;

/* Attribute Names */
const ATTR_CREATE_NEW = 'data-new-instance';
const ATTR_CLOSE = 'data-close-modal';
const ATTR_NAME = 'data-modal';

/* Class names */
const CLS_CONTAINER_CURRENT = 'front';
const CLS_OPEN = 'open';
const CLS_CURRENT = 'current';
const CLS_PART_OF_STACK = 'part-of-stack';
const CLS_MODAL_OPEN = 'modal-open';
const CLS_MODAL_CONTAINER = 'modal-container';

/* Events */

/**
 * Event triggered when modal is closed
 * @type {string}
 */
const EVENT_MODAL_CLOSED = 'flexcss.modal.closed';
/**
 * Event triggered before a modal is closed, cancelable
 * @type {string}
 */
const EVENT_MODAL_BEFORE_CLOSED = 'flexcss.modal.beforeClose';

/**
 * A Modal Implementation
 */
export default
class Modal {
    constructor(DelegateContainer, options) {
        var doc = global.document, container = DelegateContainer instanceof HTMLElement ?
            DelegateContainer : doc.getElementById(DelegateContainer);

        // Instance vars:
        if (!container) {
            throw 'Could not found container element by given ID/Element: ' + DelegateContainer;
        }

        this.currentOpen = null;

        this.loading = false;


        this.container = container;

        /**
         * Default Options
         */
        this.options = {
            classNames: 'modal',
            closeOnEscape: true,
            closeOnBackgroundClick: true,
            destroyOnFinish: false
        };

        Object.assign(this.options, options);

        // Container where events are delegated
        this.eventContainer = null;

        this.dataMainPageContainer = global.document.body;

        this.currentScrollTop = 0;

        this.modalContainer = null;

        // Destroy full modal instance when no dialogs are bind to?
        // Otherwise container is recycled
        this.destroyOnFinish = this.options.destroyOnFinish;
    }

    /**
     * Removes this modal from global stack
     * Will handle fixing main html element too
     * @private
     * @param n
     */
    _removeModalFromStack(n) {
        var t = Modal._modalInstances.indexOf(n);
        if (t > -1) {
            Modal._modalInstances.splice(t, 1);
            if (0 === FlexCss._modalInstances.length) {
                HTML_ELEMENT.classList.remove(CLS_MODAL_OPEN);
                Settings.get().scrollbarUpdateNodes.forEach(function (n) {
                    // restore scrollPosition:
                    if (this.dataMainPageContainer) {
                        this.dataMainPageContainer.style.position = "static";
                        this.dataMainPageContainer.style.top = "0px";
                        // FIXME: Replace
                        $(window, document.body).scrollTop(this.currentScrollTop);
                    }
                    n.style.paddingRight = '';
                });

            }
        }
    }


    /**
     * Modal container that contains all `stacked` modals for this instance
     * @returns {HTMLElement}
     */
    getModalContainer() {
        return this.modalContainer;
    }

    /**
     * Closes the current open modal of this stack
     * @params [e], optional event
     * @returns {*}
     */
    close(e) {
        var self = this;

        // close only on keyboard if instance should
        if (!self.options.closeOnEscape && e instanceof KeyboardEvent) {
            return false;
        }

        // close only on background if instance should
        if (!self.options.closeOnBackgroundClick && e &&
            e.type === FlexCss.CONST_FLEX_EVENT_TAB && !e.target.hasAttribute(ATTR_CLOSE)) {
            return false;
        }

        // if an instance is currently loading, prevent from closing
        if (self.loading) {
            return false;
        }

        if (e) {
            e.preventDefault();
        }

        if (self.currentOpen) {
            // dispatch beforeClose event, if prevented prevent modal from closing
            var ev = Event.dispatchAndFire(self.currentOpen, EVENT_MODAL_BEFORE_CLOSED);
            if (ev.isDefaultPrevented()) {
                return false;
            }

            self.currentOpen.removeAttribute('style');

            // if there is an previous modal
            if (self.currentOpen.prevModal) {
                // switch to the next modal
                return self.switchModals(self.currentOpen.prevModal,
                    self.currentOpen.prevModal.prevModal || null);
            }

            // finally trigger closed event
            Event.dispatchAndFire(self.currentOpen, EVENT_MODAL_CLOSED);

        }
        self._removeModalFromStack(self.currentOpen);

        // Full stack closed:
        self.currentOpen = null;
        if (self.modalContainer) {
            // setup next open
            var lastContainer = Modal._modalInstances[Modal._modalInstances.length - 1],
                classList = self.modalContainer.classList;
            classList.remove(CLS_CONTAINER_CURRENT);
            classList.remove(CLS_OPEN);
            // Remove all current classes from child-nodes
            for (var i = 0; i < self.modalContainer.childNodes.length; i++) {
                var node = self.modalContainer.childNodes[i], cl = node.classList;
                // remove applied styles
                node.removeAttribute('style');
                cl.remove(CLS_CURRENT);
                cl.remove(CLS_PART_OF_STACK);
            }
            if (lastContainer) {
                lastContainer.parentNode.classList.add(CLS_CONTAINER_CURRENT);
            }
        }

        if (self.options.destroyOnFinish) {
            self.destroy();
        }
        return self;
    }

    /**
     * Brings the given modal to front
     * @param co
     * @param last
     */
    switchModals(co, last) {
        co.prevModal = last;
        Modal._modalInstances.push(co);

        if (last) {
            last.classList.add(CLS_PART_OF_STACK);
        }
        // set new currentOpen
        this.currentOpen = co;

        // bring current container to the front
        var instances = Modal._modalInstances;

        for (var m = 0; m < instances.length; m++) {
            instances[m].parentNode.classList.remove(CLS_CONTAINER_CURRENT);
        }
        this.modalContainer.classList.add(CLS_CONTAINER_CURRENT);

        // remove animations if animations has been completed, fixes various bugs:
        // - fixes nested scrolling element issue in iOS Browsers / Mobile-Safari
        Util.PrefixedAnimateEvent(co, 'AnimationEnd', function (e, self) {
            e.target.style.animation = 'none';
            e.target.style.webkitAnimation = 'none';
            co.removeEventListener(e.type, self, true);
        });

        for (var i = 0; i < this.modalContainer.childNodes.length; i++) {
            var n = this.modalContainer.childNodes[i], isCurrent = n.classList.contains(CLS_CURRENT);
            if (n === co) {
                co.classList.add(CLS_CURRENT);
                co.classList.remove(CLS_PART_OF_STACK);
            } else {
                n.classList.remove(CLS_CURRENT);
                if (isCurrent) {
                    this._removeModalFromStack(n);
                    Event.dispatchAndFire(n, EVENT_MODAL_CLOSED);
                }
            }
        }
    }

    handleScrollbar() {
        var self = this;
        if (0 === Modal._modalInstances.length) {
            HTML_ELEMENT.classList.add(CLS_MODAL_OPEN);
            // save current scrollTop:
            var scrollTop = global.pageYOffset,
                c = self.dataMainPageContainer;
            self.currentScrollTop = scrollTop;
            if (c) {
                c.style.top = scrollTop * -1 + 'px';
                c.style.position = 'fixed';
            }
            Settings.get().scrollbarUpdateNodes.forEach(function (n) {
                n.style.paddingRight = parseInt(global.getComputedStyle(n).paddingRight) +
                Settings.CONST_SCROLLBAR_WIDTH + 'px';
            });
        }
    }

    /**
     * Creates a Modal and opens it (later)
     * @param e
     * @returns {Promise|boolean}
     */
    createWidget(e) {
        var self = this;
        if (this.loading) {
            return false;
        }

        // check if another modal has registered events on this dom path:
        if (e && e.target) {
            var foundInstance = Util.parentsUntil(e.target, function (node) {
                return node.flexModalInstance;
            });

            // if another instance has been found, abort
            if (foundInstance !== this.container) {
                return false;
            }
        }
        var targetContent, future, widget, target, hasTarget = true,
            isHtmlElement = e instanceof HTMLElement, isWidget = e instanceof Widget;
        if (isHtmlElement || isWidget) {
            if (isHtmlElement) {
                targetContent = e;
            } else {
                widget = e;
                targetContent = widget.element;
            }
        } else {
            target = e.target;
            hasTarget = target.hasAttribute(ATTR_NAME);
            targetContent = target.getAttribute(ATTR_NAME);
            widget = target.hfWidgetInstance;
            if (target.hasAttribute(ATTR_CREATE_NEW) && !e.newInstance) {
                var newInstance = new Modal(this.container)
                    .setDestroyOnFinish(true);
                e.newInstance = true;
                newInstance.fromEvent(e).then(function () {
                    newInstance.registerEvents(newInstance.getModalContainer());
                });
                return false;
            }
            if (hasTarget) {
                e.stopImmediatePropagation();
                e.preventDefault();
            }
        }

        if (!hasTarget) {
            return false;
        }

        var modalContainerClasses = this.modalContainer ? this.modalContainer.classList : [];

        // lazy create modal container
        if (!this.modalContainer) {
            this.modalContainer = global.document.createElement('div');
            this.modalContainer.className = CLS_MODAL_CONTAINER + ' ' + CLS_OPEN;
            var closeModalFunction = function (e) {
                if (this.loading) {
                    return false;
                }
                if (Util.isPartOfNode(e.target, self.currentOpen)) {
                    if (!e.target.hasAttribute(ATTR_CLOSE)) {
                        return false;
                    }
                }
                self.close(e);
            };

            this.modalContainer.addEventListener(Settings.CONST_TAB_EVENT, closeModalFunction, false);

            modalContainerClasses = this.modalContainer.classList;
            this.container.appendChild(this.modalContainer);

        } else {
            modalContainerClasses.add(CLS_OPEN);
        }

        var loader, doc = global.document, toggleLoader = function (show) {
            if (show) {
                loader = doc.createElement('div');
                loader.className = 'loader-container';
                var loaderLoader = doc.createElement('div');
                loaderLoader.className = 'loader';
                loader.appendChild(loaderLoader);
                self.modalContainer.appendChild(loader);
            } else {
                loader.parentNode.removeChild(loader);
            }
        };

        this.handleScrollbar();

        modalContainerClasses.add(CLS_CONTAINER_CURRENT);
        modalContainerClasses.add('loading');
        this.loading = true;
        toggleLoader(true);
        if (widget instanceof Widget && widget.getAsync()) {
            future = widget.getAsync().then(function (r) {
                if (r instanceof HTMLElement || r instanceof DocumentFragment) {
                    return r;
                } else {
                    // Create container Element:
                    var element = doc.createElement('div');
                    element.className = self.options.classNames;
                    element.innerHTML = r;
                    element.id = Util.guid();
                    return element;
                }
            });
        } else {
            var el = targetContent instanceof HTMLElement ||
            targetContent instanceof DocumentFragment ? targetContent : doc.getElementById(targetContent);
            if (el) {
                future = new Promise((resolve) => {
                    resolve(el);
                });
            } else {
                throw 'Could not found given modal element (content) with ID: ' + targetContent;
            }
        }


        return future.then(function (el) {
            el.hfContainerInstance = self;
            self.modalContainer.appendChild(el);
            modalContainerClasses.remove('loading');
            self.loading = false;
            toggleLoader(false);

            self.open(el, true);

            return el;
        });
    }

    registerEvents(delegate) {
        var delegateContainer = delegate || this.container, self = this;

        // register modal instance so we can detect multiple registrars
        delegateContainer.flexModalInstance = self;
        delegateContainer.addEventListener(Settings.CONST_TAB_EVENT, self.createWidget, false);

        self.eventContainer = delegateContainer;
        return self;
    }


    /**
     * Creates a new Dialog Instance either directly from HTML Element or a Widget instance
     * @param {HTMLElement|Widget} widget instance or html element
     * @returns {Promise}
     */
    fromWidget(widget) {
        return this.createWidget(widget);
    }

    /**
     * Creates a Widget from event
     * @param e
     * @returns {Promise}
     */
    fromEvent(e) {
        return this.createWidget(e);
    }

    setDestroyOnFinish(v) {
        this.destroyOnFinish = v;
        return this;
    }

    /**
     * Destroy this widget instance, cleans empty DOM nodes
     * Will use fast MutationObserver if available, otherwise falls back to DOMNodeRemoved event
     */
    destroy() {
        var self = this, modalContainer = this.modalContainer;
        // Remove event listener on destroy, do not remove DOM node
        if (self.eventContainer) {
            FlexCss.SETTINGS.clickEvents.forEach(function (e) {
                self.eventContainer.removeEventListener(e, createWidget, true);
            });
        }

        if (0 === modalContainer.childNodes.length) {
            if (modalContainer.parentNode) {
                modalContainer.parentNode.removeChild(modalContainer);
            }
        }
        if (global.MutationObserver) {
            var observer = new MutationObserver(function (mutations) {
                mutations.forEach(function () {
                    if (0 === modalContainer.childNodes.length) {
                        modalContainer.parentNode.removeChild(modalContainer);
                        observer.disconnect();
                    }
                });
            });
            observer.observe(modalContainer, {childList: true});
        } else {
            modalContainer.addEventListener('DOMNodeRemoved', function (e) {
                if (e.target !== modalContainer && 0 === (modalContainer.childNodes.length - 1)) {
                    modalContainer.parentNode.removeChild(modalContainer);
                }
            });
        }
    }

;
}


// Static variable that keeps track of all open modals
Modal._modalInstances = [];

// Global keydown listener for modal
global.addEventListener('keydown', function (e) {
    if (27 === e.keyCode) {
        var lastModal = Modal._modalInstances[Modal._modalInstances.length - 1];
        if (lastModal) {
            lastModal.hfContainerInstance.close(e);
        }
    }
});

Modal.MODAL_JUST_OPENED = false;