/*global KeyboardEvent*/

const HTML_ELEMENT = global.document.documentElement;
const ATTR_CREATE_NEW = 'data-new-instance';
const ATTR_CLOSE = 'data-close-modal';
const CLS_CONTAINER_CURRENT = 'front';
const ATTR_NAME = 'data-modal';
const CLS_OPEN = 'open';
const CURRENT_CLASS = 'current';
const PART_OF_STACK_CLASS = 'part-of-stack';
const CLS_MODAL_OPEN = 'modal-open';
import Settings from 'util/Settings';
import $ from 'jquery';
import Event from 'util/Event';
import Util from 'util/Util';

const EVENT_MODAL_CLOSED = 'flexcss.modal.closed';
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
                cl.remove(CURRENT_CLASS);
                cl.remove(PART_OF_STACK_CLASS);
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
            last.classList.add('part-of-stack');
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
            var n = this.modalContainer.childNodes[i], isCurrent = n.classList.contains(CURRENT_CLASS);
            if (n === co) {
                co.classList.add(CURRENT_CLASS);
                co.classList.remove(PART_OF_STACK_CLASS);
            } else {
                n.classList.remove(CURRENT_CLASS);
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
            var scrollTop = window.pageYOffset,
                c = self.dataMainPageContainer;
            self.currentScrollTop = scrollTop;
            if (c) {
                c.style.top = scrollTop * -1 + 'px';
                c.style.position = 'fixed';
            }
            Settings.get().scrollbarUpdateNodes.forEach(function (n) {
                n.style.paddingRight = parseInt(window.getComputedStyle(n).paddingRight) +
                Settings.CONST_SCROLLBAR_WIDTH + 'px';
            });
        }
    }

    /**
     * Creates this instance
     * @param e
     * @returns {*} (Future, undefined if in unstable state)
     */
    createWidget(e) {
        if (this.loading) {
            return;
        }

        // check if another modal has registered events on this dom path:
        if (e && e.target) {
            var foundInstance = Util.parentsUntil(e.target, function (node) {
                return node.flexModalInstance;
            });

            // if another instance has been found, abort
            if (foundInstance !== this.container) {
                return;
            }
        }
        var targetContent, future, widget, target, hasTarget = true,
            isHtmlElement = e instanceof HTMLElement, isWidget = e instanceof FlexCss.Widget;
        if (isHtmlElement || isWidget) {
            if (isHtmlElement) {
                targetContent = e;
                widget = e.hfWidgetInstance;
            } else {
                widget = e;
                targetContent = widget.widget;
            }
        } else {
            target = e.target;
            hasTarget = target.hasAttribute(ATTR_NAME);
            targetContent = target.getAttribute(ATTR_NAME);
            widget = target.hfWidgetInstance;

            if (target.hasAttribute(ATTR_CREATE_NEW) && !e.newInstance) {
                var newInstance = new FlexCss.Modal(this.container)
                    .setDestroyOnFinish(true);
                e.newInstance = true;
                newInstance.fromEvent(e).then(function () {
                    newInstance.registerEvents(newInstance.getModalContainer());
                });
                return;
            }

            if (hasTarget) {
                e.stopImmediatePropagation();
                e.preventDefault();
            }
        }
        if (!hasTarget) {
            return;
        }

        var modalContainerClasses = this.modalContainer ? this.modalContainer.classList : [];

        if (!this.modalContainer) {
            this.modalContainer = doc.createElement('div');
            this.modalContainer.className = 'modal-container ' + CLS_OPEN;
            var closeModalFunction = function (e) {
                if (loading || FlexCss.MODAL_JUST_OPENED) {
                    return;
                }
                if (FlexCss.isPartOfNode(e.target, currentOpen)) {
                    if (!e.target.hasAttribute(ATTR_CLOSE)) {
                        return;
                    }
                }
                self.close(e);
            };

            FlexCss.SETTINGS.clickEvents.forEach(function (e) {
                this.modalContainer.addEventListener(e, closeModalFunction, true);
            });

            modalContainerClasses = this.modalContainer.classList;
            container.appendChild(this.modalContainer);

        } else {
            modalContainerClasses.add(CLS_OPEN);
        }

        var loader, toggleLoader = function (show) {
            if (show) {
                loader = doc.createElement('div');
                loader.className = 'loader-container';
                var loaderLoader = doc.createElement('div');
                loaderLoader.className = 'loader';
                loader.appendChild(loaderLoader);
                modalContainer.appendChild(this.loader);
            } else {
                loader.parentNode.removeChild(this.loader);
            }
        };

        this.handleScrollbar();

        modalContainerClasses.add(CLS_CONTAINER_CURRENT);
        modalContainerClasses.add('loading');
        this.loading = true;
        toggleLoader(true);
        if (widget instanceof FlexCss.Widget && widget.getAsync()) {
            future = widget.runAsync().then(function (r) {
                if (r instanceof HTMLElement || r instanceof DocumentFragment) {
                    widget.setWidget(r);
                    return r;
                } else {
                    // Create container Element:
                    var element = doc.createElement('div');
                    element.className = self.options.classNames;
                    element.innerHTML = r;
                    element.id = Util.guid();
                    // Setup modal as widget to widget instance:
                    widget.setWidget(element);
                    return element;
                }
            });
        } else {
            var el = targetContent instanceof HTMLElement ||
            targetContent instanceof DocumentFragment ? targetContent : doc.getElementById(targetContent);
            if (el) {
                // If Widget is bound to content container, use this as our widget
                if (el.hfWidgetInstance) {
                    widget = el.hfWidgetInstance;
                }
                future = new Promise((resolve) => {
                    resolve(el);
                });
            } else {
                throw 'Could not found given modal element with ID: ' + targetContent;
            }
        }

        var self = this;

        return future.then(function (el) {
            el.hfWidgetInstance = widget;
            el.hfContainerInstance = self;

            modalContainer.appendChild(el);
            modalContainerClasses.remove('loading');
            self.loading = false;
            toggleLoader(false);

            self.open(el, true);

            return el;
        });
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