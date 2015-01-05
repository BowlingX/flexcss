/**
 * FlexCss Modal
 */

void function (document, window, $) {
    "use strict";

    if (!window.FlexCss) {
        window.FlexCss = {};
    }

    void function (FlexCss) {

        // Static variable that keeps track of all open modals
        FlexCss._modalInstances = [];

        // Global Widget keydown listener
        window.addEventListener('keydown', function (e) {
            if (27 === e.keyCode) {
                var lastModal = FlexCss._modalInstances[FlexCss._modalInstances.length - 1];
                if (lastModal) {
                    lastModal.hfContainerInstance.close(e);
                }
            }
        });

        FlexCss.MODAL_JUST_OPENED = false;

        /**
         * A Modal
         * @param {String} DelegateContainer id of container
         * @param {Object} [options]
         * @returns {FlexCss.Modal}
         * @constructor creates a Modal
         */
        FlexCss.Modal = function (DelegateContainer, options) {
            var doc = document, ATTR_NAME = 'data-modal',
                container = DelegateContainer instanceof HTMLElement ?
                    DelegateContainer : doc.getElementById(DelegateContainer),
                modalContainer = null, currentOpen, loader, self = this,
                loading = false, ATTR_CREATE_NEW = 'data-new-instance', ATTR_CLOSE = 'data-close-modal',
                htmlElement = document.documentElement;
            // Instance vars:

            if (!container) {
                throw 'Modal: Could not found container element by given ID: ' + DelegateContainer;
            }

            /**
             * Default Options
             */
            self.options = {
                classNames: 'modal',
                closeOnEscape: true,
                closeOnBackgroundClick: true
            };

            $.extend(self.options, options);

            // Container where events are delegated
            self.eventContainer = null;

            // Destroy full modal instance when no dialogs are bind to?
            // Otherwise container is recycled
            self.destroyOnFinish = false;

            /**
             * Removes this modal from global stack
             * @private
             * @param n
             */
            function _removeModalFromStack(n) {
                var t = FlexCss._modalInstances.indexOf(n);
                if (t > -1) {
                    FlexCss._modalInstances.splice(t, 1);
                    if (0 === FlexCss._modalInstances.length) {
                        htmlElement.classList.remove('modal-open');
                        FlexCss.SETTINGS.scrollbarUpdateNodes.forEach(function (n) {
                            n.style.paddingRight = '';
                        });

                    }
                }
            }

            /**
             * The Modal container
             * @returns {*}
             */
            self.getModalContainer = function () {
                return modalContainer;
            };

            /**
             * Closes the current open modal of this stack
             * @params [e], optional event
             * @returns {*}
             */
            self.close = function (e) {
                if (!self.options.closeOnEscape && e instanceof KeyboardEvent) {
                    return false;
                }

                if (!self.options.closeOnBackgroundClick && e && e.type === FlexCss.CONST_FLEX_EVENT_TAB &&
                    !e.target.hasAttribute(ATTR_CLOSE)) {
                    return false;
                }

                if (loading) {
                    return false;
                }
                if (currentOpen) {
                    var widget = currentOpen.hfWidgetInstance;
                    if (widget && !widget.runOnBeforeClose(e)) {
                        return false;
                    }
                    if (currentOpen.prevModal) {
                        return switchModals(currentOpen.prevModal,
                            currentOpen.prevModal.prevModal || null);
                    }
                    if (widget) {
                        $(currentOpen).trigger('flexcss.modal.closed', e);
                        widget.runOnClose();
                    }
                }
                _removeModalFromStack(currentOpen);

                // Full stack closed:
                currentOpen = null;
                if (modalContainer) {
                    modalContainer.classList.remove('open');
                    // Remove all current classes from childnodes
                    for (var i = 0; i < modalContainer.childNodes.length; i++) {
                        var cl = modalContainer.childNodes[i].classList;
                        cl.remove('current');
                        cl.remove('part-of-stack');
                    }
                }
                if (e) {
                    e.preventDefault();
                }

                if (self.destroyOnFinish) {
                    self.destroy();
                }
                return self;
            };

            /**
             * Brings the given modal to front
             * @param co
             * @param last
             */
            var switchModals = function (co, last) {
                co.prevModal = last;
                FlexCss._modalInstances.push(co);

                if (last) {
                    last.classList.add('part-of-stack');
                }
                currentOpen = co;
                for (var i = 0; i < modalContainer.childNodes.length; i++) {
                    var n = modalContainer.childNodes[i], isCurrent = n.classList.contains('current'),
                        widget = n.hfWidgetInstance;
                    if (n === co) {
                        co.classList.add('current');
                        co.classList.remove('part-of-stack');
                    } else {
                        n.classList.remove('current');
                        if (isCurrent) {
                            _removeModalFromStack(n);
                            if (widget) {
                                widget.runOnClose();
                            }
                        }
                    }
                }
            };

            /**
             * Creates this instance
             * @param e
             * @returns {*} (Future, undefined if in unstable state)
             */
            var createWidget = function (e) {
                if (loading) {
                    return;
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
                        var newInstance = new FlexCss.Modal(DelegateContainer)
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


                // FIXME: Because we have our own tab event now, this may be deprecated
                FlexCss.MODAL_JUST_OPENED = true;

                // FIXME: Double event fix for IOS (click event is fired so modal closes directly)
                // Maybe adjust
                setTimeout(function () {
                    FlexCss.MODAL_JUST_OPENED = false;
                }, 60);

                var modalContainerClasses = modalContainer ? modalContainer.classList : [];

                if (!modalContainer) {
                    modalContainer = doc.createElement('div');
                    modalContainer.className = 'modal-container open';
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
                        modalContainer.addEventListener(e, closeModalFunction, true);
                    });

                    modalContainerClasses = modalContainer.classList;
                    container.appendChild(modalContainer);

                } else {
                    modalContainerClasses.add('open');
                }

                var toggleLoader = function (show) {
                    if (show) {
                        loader = doc.createElement('div');
                        loader.className = 'loader-container';
                        var loaderLoader = doc.createElement('div');
                        loaderLoader.className = 'loader';
                        loader.appendChild(loaderLoader);
                        modalContainer.appendChild(loader);
                    } else {
                        loader.parentNode.removeChild(loader);
                    }
                };

                if (0 === FlexCss._modalInstances.length) {
                    htmlElement.classList.add('modal-open');
                    FlexCss.SETTINGS.scrollbarUpdateNodes.forEach(function (n) {
                        n.style.paddingRight = parseInt(window.getComputedStyle(n).paddingRight) +
                        FlexCss.CONST_SCROLLBAR_WIDTH + 'px';
                    });

                }
                modalContainerClasses.add('loading');
                loading = true;
                toggleLoader(true);
                if (widget instanceof FlexCss.Widget && widget.getAsync()) {
                    future = widget.runAsync().then(function (r) {
                        var f;
                        if (r instanceof HTMLElement || r instanceof DocumentFragment) {
                            f = $.Deferred().resolve(r);
                        } else {
                            // Create container Element:
                            var element = doc.createElement('div');
                            element.className = self.options.classNames;
                            element.innerHTML = r;
                            element.id = FlexCss.guid();
                            // Setup modal as widget to widget instance:
                            widget.setWidget(element);
                            f = $.Deferred().resolve(element);
                        }
                        return f;
                    });
                } else {
                    var el = targetContent instanceof HTMLElement ||
                    targetContent instanceof DocumentFragment ? targetContent : doc.getElementById(targetContent);
                    if (el) {
                        future = $.Deferred().resolve(el);
                    } else {
                        throw 'Could not found given modal element with ID: ' + targetContent;
                    }
                }

                return future.then(function (el) {
                    el.hfWidgetInstance = widget;
                    el.hfContainerInstance = self;
                    modalContainer.appendChild(el);
                    switchModals(el, currentOpen);
                    modalContainerClasses.remove('loading');
                    loading = false;
                    toggleLoader(false);

                    if (el.hfWidgetInstance) {
                        el.hfWidgetInstance.runOnOpen(el);
                    }

                    $(el).trigger('flexcss.modal.opened');
                    return $.Deferred().resolve(el);
                });
            };

            /**
             * Setup events on either default delegate container or given delegate
             * @param {HTMLElement} [delegate] optionally register another container
             * @returns {FlexCss.Modal}
             */
            this.registerEvents = function (delegate) {
                var delegateContainer = delegate || container;

                FlexCss.SETTINGS.clickEvents.forEach(function (e) {
                    delegateContainer.addEventListener(e, createWidget, true);
                });

                self.eventContainer = delegateContainer;
                return self;
            };

            /**
             * Creates a new Dialog Instance either directly from HTML Element or a Widget instance
             * @param {HTMLElement|FlexCss.Widget} widget instance or html element
             * @returns {$.Deferred}
             */
            this.fromWidget = function (widget) {
                return createWidget(widget);
            };

            /**
             * Creates a Widget from event
             * @param t
             * @returns {$.Deferred}
             */
            this.fromEvent = function (t) {
                return createWidget(t);
            };

            this.setDestroyOnFinish = function (v) {
                self.destroyOnFinish = v;
                return self;
            };

            /**
             * Destroy this widget instance, cleans empty DOM nodes
             * Will use fast MutationObserver if available, otherwise falls back to DOMNodeRemoved event
             */
            this.destroy = function () {
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
                if (window.MutationObserver) {
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
            };

            return self;
        };
    }(window.FlexCss);

}(document, window, jQuery);