/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/*!
 * FlexCss.Modal
 * Licensed under the MIT License (MIT)
 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
 */

'use strict';


/*global KeyboardEvent*/

import Settings from 'util/Settings';
import Event from 'util/Event';
import Util from 'util/Util';
import Widget from 'Widget';

const HTML_ELEMENT = global.document.documentElement;
const KEY_ESC = 27;
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
const CLS_ANIM_END = 'modal-anim-end';
const CLS_LOADER_CONTAINER = 'loader-container';
const CLS_LOADER = 'loader';

/* Events */

/**
 * Event triggered when modal is closed
 * @type {string}
 */
export const EVENT_MODAL_CLOSED = 'flexcss.modal.closed';
/**
 * Event triggered before a modal is closed, cancelable
 * @type {string}
 */
export const EVENT_MODAL_BEFORE_CLOSED = 'flexcss.modal.beforeClose';
/**
 * Event triggered when a modal is opened
 * @type {string}
 */
export const EVENT_MODAL_OPENED = 'flexcss.modal.opened';

/**
 * Event triggered when modal is initilized, called on target
 * @type {string}
 */
export const EVENT_MODAL_INIT = 'flexcss.modal.init';

/**
 * Triggered when the content of an async modal on a target is loaded, called on target
 * @type {string}
 */
export const EVENT_MODAL_ASYNC_TARGET_LOADED = 'flexcss.modal.asyncTargetLoaded';

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
            destroyOnFinish: false,
            fixedContainer: true,
            containerClassNames: ''
        };

        Object.assign(this.options, options);

        // Container where events are delegated
        this.eventContainer = null;
        this.eventFunction = null;

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
        var t = Modal._modalInstances.indexOf(n), self = this;
        if (t > -1) {
            Modal._modalInstances.splice(t, 1);
            if (Modal._modalInstances.length === 0) {
                // restore scrollPosition:
                if (self.dataMainPageContainer) {
                    setTimeout(function () {
                        if (self.options.fixedContainer) {
                            self.dataMainPageContainer.style.position = "static";
                            self.dataMainPageContainer.style.top = "0px";
                            // reset scrollTop
                            document.documentElement.scrollTop = self.currentScrollTop;
                            document.body.scrollTop = self.currentScrollTop;
                        }
                        Settings.get().scrollbarUpdateNodes.forEach(function (node) {
                            node.style.paddingRight = '';
                        });
                        HTML_ELEMENT.classList.remove(CLS_MODAL_OPEN);
                    }, 0);
                }
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

        const options = self.currentOpen ? Util.applyOptionsFromElement(
            self.currentOpen, Util.copy(self.options)) : self.options;

        // close only on keyboard if instance should
        if (!options.closeOnEscape && e instanceof KeyboardEvent) {
            return false;
        }

        // close only on background if instance should
        if (!options.closeOnBackgroundClick && e &&
            e.type === Settings.getTabEvent() && !e.target.hasAttribute(ATTR_CLOSE)) {
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
            if (ev.defaultPrevented) {
                return false;
            }

            this._finishState(self.currentOpen);
            // if there is an previous modal
            if (self.currentOpen.prevModal) {
                // switch to the next modal
                return self.switchModals(self.currentOpen.prevModal,
                    self.currentOpen.prevModal.prevModal || null);
            }

            // finally trigger closed event
            Event.dispatch(self.currentOpen, EVENT_MODAL_CLOSED).withOriginal(e).fire();

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
                self._finishState(node);
                cl.remove(CLS_CURRENT);
                cl.remove(CLS_PART_OF_STACK);
            }
            if (lastContainer) {
                lastContainer.parentNode.classList.add(CLS_CONTAINER_CURRENT);
            }
        }

        if (self.destroyOnFinish) {
            self.destroy();
        }
        return self;
    }

    /**
     * Resets a target when newly initilizes
     * @param target
     * @private
     */
    _finishState(target) {
        target.classList.remove(CLS_ANIM_END);
    }

    /**
     * Handler called when a Modal has finished an animation
     * @param e
     * @param self
     * @private
     */
    _finishAnim(e, self) {
        e.target.classList.add(CLS_ANIM_END);
        e.target.removeEventListener(e.type, self, true);
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
            this._finishState(last);
            Util.prefixedAnimateEvent(last, 'AnimationEnd', this._finishAnim);
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
        Util.prefixedAnimateEvent(co, 'AnimationEnd', this._finishAnim);

        for (var i = 0; i < this.modalContainer.childNodes.length; i++) {
            var n = this.modalContainer.childNodes[i], isCurrent = n.classList.contains(CLS_CURRENT);
            if (n === co) {
                co.classList.add(CLS_CURRENT);
                co.classList.remove(CLS_PART_OF_STACK);
                this._finishState(co);
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
        if (Modal._modalInstances.length === 0) {
            // save current scrollTop:
            let scrollTop, c;
            if (self.options.fixedContainer) {
                scrollTop = global.pageYOffset;
                c = self.dataMainPageContainer;
                self.currentScrollTop = scrollTop;
            }
            // this causes reflow/paint and should be optimized
            // At lest we write in a batch later
            Settings.get().scrollbarUpdateNodes.map(function (n) {
                return {
                    n: n, padding: parseInt(global.getComputedStyle(n).paddingRight) +
                    Settings.getScrollbarWidth() + 'px'
                };
            }).forEach(function (d) {
                d.n.style.paddingRight = d.padding;
            });
            if (self.options.fixedContainer) {
                if (c) {
                    c.style.cssText += `top:${scrollTop * -1 + 'px'};position:fixed`;
                }
            }
            HTML_ELEMENT.classList.add(CLS_MODAL_OPEN);
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
                return node && node.flexModalInstance;
            });

            // if another instance has been found, abort
            if (foundInstance !== this.container) {
                return false;
            }
        }
        var targetContent, future, widget, target, hasTarget = true,
            isHtmlElement = e instanceof HTMLElement, isWidget = Widget.isWidget(e);
        if (isHtmlElement || isWidget) {
            if (isHtmlElement) {
                targetContent = e;
            } else {
                widget = e;
                targetContent = widget.element;
            }
        } else {
            target = e.target;
            if (!target) {
                throw 'Could not find target, did you pass an event, a HTMLElement or an Widget?';
            }
            hasTarget = target.hasAttribute(ATTR_NAME);
            targetContent = target.getAttribute(ATTR_NAME);
            widget = Widget.findWidget(target);
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

        let modalContainerClasses = this.modalContainer ? this.modalContainer.classList : [];

        // lazy create modal container
        if (!this.modalContainer) {
            this.modalContainer = global.document.createElement('div');
            this.modalContainer.className = `${CLS_MODAL_CONTAINER} ${this.options.containerClassNames} ${CLS_OPEN}`;
            const closeModalFunction = function (ce) {
                if (self.loading) {
                    return false;
                }
                if (Util.isPartOfNode(ce.target, self.currentOpen)) {
                    if (!ce.target.hasAttribute(ATTR_CLOSE)) {
                        return false;
                    }
                }
                self.close(ce);
            };

            this.modalContainer.addEventListener(Settings.getTabEvent(), closeModalFunction, false);

            modalContainerClasses = this.modalContainer.classList;
            this.container.appendChild(this.modalContainer);

        } else {
            modalContainerClasses.add(CLS_OPEN);
        }

        let loader, doc = global.document, toggleLoader = function (show) {
            if (show) {
                loader = doc.createElement('div');
                loader.className = CLS_LOADER_CONTAINER;
                var loaderLoader = doc.createElement('div');
                loaderLoader.className = CLS_LOADER;
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
        var async = widget ? widget.getAsync() : null;
        if (Widget.isWidget(widget) && async) {
            future = async.then(function (r) {
                var result;
                if (r instanceof HTMLElement || r instanceof DocumentFragment) {
                    result = r;
                } else {
                    // Create container Element:
                    var element = doc.createElement('div');
                    element.className = self.options.classNames;
                    element.innerHTML = r;
                    element.id = Util.guid();
                    result = element;
                }
                widget.finalContent = result;
                Event.dispatchAndFire(target, EVENT_MODAL_ASYNC_TARGET_LOADED);
                return result;
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

        Event.dispatchAndFire(target, EVENT_MODAL_INIT);

        return future.then((thisEl) => {
            thisEl.hfWidgetInstance = self;
            self.modalContainer.appendChild(thisEl);
            modalContainerClasses.remove('loading');
            self.loading = false;
            toggleLoader(false);

            self.open(thisEl, true, e);

            return thisEl;
        });
    }

    /**
     * Open's an already rendered modal
     * @param {HTMLElement} modal
     * @param {Boolean} [internal], set to true to prevent container management
     * @param {Boolean} [maybeEvent], optional event-object that triggered open
     */
    open(modal, internal, maybeEvent) {


        if (!internal) {
            this.modalContainer.classList.add('open');
            this.handleScrollbar();
        }
        this.switchModals(modal, this.currentOpen);

        Event.dispatch(modal, EVENT_MODAL_OPENED).withOriginal(maybeEvent).fire();
    }


    registerEvents(delegate) {
        var delegateContainer = delegate || this.container, self = this;

        // register modal instance so we can detect multiple registrars
        delegateContainer.flexModalInstance = self;
        self.eventFunction = function () {
            self.createWidget.apply(self, arguments);
        };
        delegateContainer.addEventListener(Settings.getTabEvent(), self.eventFunction, false);

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
        let self = this, modalContainer = this.modalContainer;
        const isEmptyContainer = modalContainer.childNodes.length === 0;
        // Remove event listener on destroy, do not remove DOM node
        if (self.eventContainer) {
            self.eventContainer.removeEventListener(Settings.getTabEvent(), self.eventFunction, true);
        }

        if (isEmptyContainer) {
            if (modalContainer.parentNode) {
                modalContainer.parentNode.removeChild(modalContainer);
            }
        }
        if (global.MutationObserver) {
            var observer = new MutationObserver(function (mutations) {
                mutations.forEach(function () {
                    if (isEmptyContainer) {
                        modalContainer.parentNode.removeChild(modalContainer);
                        observer.disconnect();
                    }
                });
            });
            observer.observe(modalContainer, {childList: true});
        } else {
            modalContainer.addEventListener('DOMNodeRemoved', function (e) {
                if (e.target !== modalContainer && (modalContainer.childNodes.length - 1) === 0) {
                    modalContainer.parentNode.removeChild(modalContainer);
                }
            });
        }
    }
}


// Static variable that keeps track of all open modals
Modal._modalInstances = [];

// Global keydown listener for modal
global.addEventListener('keydown', function (e) {
    if (e.keyCode === KEY_ESC) {
        var lastModal = Modal._modalInstances[Modal._modalInstances.length - 1];
        if (lastModal) {
            Widget.findWidget(lastModal).close(e);
        }
    }
});
