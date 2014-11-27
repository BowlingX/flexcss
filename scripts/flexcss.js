/* jshint strict: true */

(function (window, $) {
    "use strict";

    /*!
     * Some useful UI Widgets for daily use :)
     * Copyright (c) 2014 David Heidrich (bowlingx.com)
     * Depends on jQuery futures and events
     * FIXME: Replace jQuery dependencies
     */

    if (!window.FlexCss) {
        window.FlexCss = {};
    }

    var FlexCss = window.FlexCss;

    /**
     * Some Basic Utility functions
     */
    (function (FlexCss) {

        // Global touch-move state
        FlexCss.TOUCHMOVE = false;

        // Global settings (used by all plugins)
        FlexCss.SETTINGS = {
            smallBreakpoint: 768,

            // Default click events to bind
            clickEvents: ['touchend', 'click']
        };

        /**
         * Some initial stuff
         * @param document
         * @param options optional, overwrite default options
         */
        FlexCss.init = function (document, options) {

            $.extend(FlexCss.SETTINGS, options);

            // Prevent accidental touches
            document.body.addEventListener('touchmove', function () {
                FlexCss.TOUCHMOVE = true;
            });
            document.body.addEventListener('touchstart', function () {
                FlexCss.TOUCHMOVE = false;
            });
            // Measure scrollbar width
            FlexCss.CONST_SCROLLBAR_WIDTH = FlexCss.getScrollBarWidth();

        };

        // Some constants:
        FlexCss.CONST_SCROLLBAR_WIDTH = 15;
        FlexCss.CONST_ANIM_DARKENER = 200;
        FlexCss.CONST_CANVAS_TOGGLE = 'toggled-canvas';

        /**
         * Check if target is part of parent node
         * @param target
         * @param parent
         * @returns {boolean}
         */
        FlexCss.isPartOfNode = function (target, parent) {
            if (!target || !parent) {
                return false;
            }
            var now = target;
            while (now !== parent && now !== null) {
                if (now === parent) {
                    break;
                }
                now = now.parentNode;
            }
            return null !== now;
        };

        /**
         * Walks the tree until func returns true for given argument
         * @param target
         * @param func
         * @returns {*}
         */
        FlexCss.parentsUntil = function (target, func) {
            if (!target) {
                return false;
            }
            var now = target;
            while (!func(now) && now !== null) {
                now = now.parentNode;
            }

            return now;
        };
        /**
         * Generates a unique id
         * @return string
         */
        FlexCss.guid = (function () {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }

            return function () {
                return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                    s4() + '-' + s4() + s4() + s4();
            };
        })();

        /**
         * Detects scrollbar width
         * @see http://stackoverflow.com/questions/986937/how-can-i-get-the-browsers-scrollbar-sizes
         * @returns {number}
         */
        FlexCss.getScrollBarWidth = function () {
            var inner = document.createElement('p');
            inner.style.width = "100%";
            inner.style.height = "200px";

            var outer = document.createElement('div');
            outer.style.position = "absolute";
            outer.style.top = "0px";
            outer.style.left = "0px";
            outer.style.visibility = "hidden";
            outer.style.width = "200px";
            outer.style.height = "150px";
            outer.style.overflow = "hidden";
            outer.appendChild(inner);

            document.body.appendChild(outer);
            var w1 = inner.offsetWidth;
            outer.style.overflow = 'scroll';
            var w2 = inner.offsetWidth;
            if (w1 === w2) {
                w2 = outer.clientWidth;
            }
            document.body.removeChild(outer);

            return (w1 - w2);
        };
    })(FlexCss);

    /**
     * Widgets
     */
    (function (FlexCss) {
        /**
         * Creates a scrollable container
         * @param ScrollId
         * @param OverflowContainer container that contains the scroll element (optional, will use ScrollId itself if not given)
         * @param offsetStart padding of the first element
         * @constructor
         */
        FlexCss.Scrollable = function (ScrollId, OverflowContainer, offsetStart) {
            var doc = document, firstTouch, touched = 0, last = 0,
                scrollContainer = doc.getElementById(ScrollId),
                overflowContainer = doc.getElementById(OverflowContainer) || scrollContainer,
                found, prevFound = [], scrolledRight = true, didScroll = false;

            offsetStart = offsetStart || 20;

            overflowContainer.addEventListener('touchstart', function (e) {
                requestAnimationFrame(function () {
                    didScroll = false;
                    firstTouch = e.touches[0].clientX;
                    touched = last + firstTouch;
                    var target = scrollContainer, cr = 0,
                        containerWidth = overflowContainer.offsetWidth;

                    for (var i = 0; i < target.children.length; i++) {
                        var node = target.children[i];
                        cr += node.offsetWidth;
                        // Found a (right side) node that is not fitting anymore
                        if (cr >= (containerWidth + (last - offsetStart))) {
                            found = {
                                n: node,
                                width: cr - node.offsetWidth
                            };
                            break;
                        }
                        found = null;
                    }

                });
            });

            overflowContainer.addEventListener('touchmove', function (e) {
                requestAnimationFrame(function () {
                    e.preventDefault();
                    didScroll = true;
                    var x = e.touches[0].clientX, target = scrollContainer, style = target.style, calc = touched - x;
                    // Save if users scrolled right or left
                    scrolledRight = firstTouch > x;
                    style.transform = 'translate3d(' + (calc * -1) + 'px,0,0)';
                    style.webkitTransform = 'translate3d(' + (calc * -1) + 'px,0,0)';
                    last = calc;
                });
            });

            overflowContainer.addEventListener('touchend', function () {
                requestAnimationFrame(function () {
                    if (!didScroll) {
                        return;
                    }
                    scrollContainer.style.transition = 'transform .2s ease';
                    scrollContainer.style.webkitTransition = '-webkit-transform .2s ease';
                    if ((scrolledRight && found) || prevFound.length > 0) {
                        if (scrolledRight) {
                            if (found) {
                                prevFound.push(found);
                                last = found.n.offsetLeft;
                            } else {
                                last = prevFound[prevFound.length - 1].n.offsetLeft;
                            }
                        } else {
                            prevFound.pop();
                            var previous = prevFound[prevFound.length - 1];
                            if (previous) {
                                last = previous.n.offsetLeft;
                            } else {
                                last = 0;
                            }
                        }
                    } else {
                        last = 0;
                    }
                    scrollContainer.style.transform = 'translate3d(' + (last * -1) + 'px,0,0)';
                    scrollContainer.style.webkitTransform = 'translate3d(' + (last * -1) + 'px,0,0)';
                    setTimeout(function () {
                        scrollContainer.style.transition = 'none';
                        scrollContainer.style.webkitTransition = 'none';
                    }, 250);
                });
            });
        };

        /**
         * Creates a toggleable element, either for tabs or a single toggle
         * @param ContainerId
         * @returns {FlexCss.Toggleable}
         * @constructor
         */
        FlexCss.Toggleable = function (ContainerId) {
            var doc = document, container = doc.getElementById(ContainerId),
                ATTR_NAME = 'data-toggle', ATTR_TOGGLE_LIST = 'data-toggle-list',
                ACTIVE_CLASS = 'active', LOADING_CLASS = 'loading', loading = false;
            if (!container) {
                throw 'Toggleable container with id "' + ContainerId + '" not found';
            }

            var listener = function (e) {
                if (FlexCss.TOUCHMOVE) {
                    return;
                }

                var target = e.target, parent = target.parentNode;

                // support target child element to clicked
                if (!target.hasAttribute(ATTR_NAME)) {
                    if (parent.hasAttribute(ATTR_NAME)) {
                        target = parent;
                        parent = target.parentNode;
                    } else {
                        return;
                    }
                }
                var refId = target.getAttribute(ATTR_NAME),
                    ref = doc.getElementById(refId), maybeToggleNode, future = $.Deferred(),
                    elClassList = target.classList, parentClassList;

                e.preventDefault();

                if (loading) {
                    return;
                }

                if (ref) {
                    future.resolve(ref);
                } else {
                    var widget = target.hfWidgetInstance;
                    if (widget instanceof FlexCss.Widget && widget.getAsync()) {
                        future = target.hfWidgetInstance.runAsync().then(function (r) {
                            if (r instanceof HTMLElement) {
                                var id = FlexCss.guid();
                                r.id = id;
                                target.setAttribute(ATTR_NAME, id);
                                return $.Deferred().resolve(r);
                            } else {
                                throw 'Dynamically creating toggle-content is not supported right now. ' +
                                'Return an HTMLElement instance';
                            }
                        });
                    } else {
                        throw 'Could not found content for tab, provide a widget instance';
                    }
                }

                if (parent) {
                    maybeToggleNode = FlexCss.parentsUntil(target, function (n) {
                        return n.hasAttribute(ATTR_TOGGLE_LIST);
                    });

                    parentClassList = parent.classList;
                    // Abort if element is already active and if is part of a toggle list
                    if (maybeToggleNode && !parentClassList.contains(ACTIVE_CLASS)) {
                        parentClassList.toggle(ACTIVE_CLASS);
                        parentClassList.add(LOADING_CLASS);
                    } else {
                        return;
                    }

                    if (maybeToggleNode) {
                        for (var i = 0; i < maybeToggleNode.children.length; i++) {
                            var n = maybeToggleNode.children[i], targetRef = n.children[0];
                            if (n !== parent) {
                                n.classList.remove(ACTIVE_CLASS);
                                if (targetRef) {
                                    var attr = targetRef.getAttribute(ATTR_NAME),
                                        el = attr ? doc.getElementById(attr) : null;
                                    if (el) {
                                        $(target).trigger('hf.tab.closed', el);
                                        el.classList.remove(ACTIVE_CLASS);
                                    }
                                }
                            }
                        }
                    }
                }
                elClassList.toggle(ACTIVE_CLASS);
                elClassList.add(LOADING_CLASS);

                loading = true;
                future.then(function (r) {
                    $(target).trigger('hf.tab.opened', r);
                    elClassList.remove(LOADING_CLASS);
                    if (parentClassList) {
                        parentClassList.remove(LOADING_CLASS);
                    }
                    r.classList.toggle(ACTIVE_CLASS);
                    loading = false;
                });
            };

            FlexCss.SETTINGS.clickEvents.forEach(function (e) {
                container.addEventListener(e, listener, false);
            });

            return this;
        };

        /**
         * Creates an off-canvas navigation
         * @param NavigationId
         * @param ToggleNavigationId
         * @param Darkener
         * @param factor
         * @constructor
         */
        FlexCss.CreateOffCanvas = function (NavigationId, ToggleNavigationId, Darkener, factor) {

            var doc = document, touched = 0, body = doc.getElementById('SiteBody'), navigationContainer = doc.getElementById(NavigationId),
                toggler = doc.getElementById(ToggleNavigationId), darkener = doc.getElementById(Darkener),
                resetStyles = function (s) {
                    s.transform = '';
                    s.transition = '';
                    s.webkitTransform = '';
                    s.webkitTransition = '';
                }, HIDE_FACTOR = 7,
                OPEN_CLASS = 'open', INIT_CLASS = 'init', TOGGLE_CLASS = FlexCss.CONST_CANVAS_TOGGLE,
                ANIM_DELAY = FlexCss.CONST_ANIM_DARKENER, shouldNotTouch = function () {
                    return window.innerWidth >= FlexCss.SETTINGS.smallBreakpoint;
                };

            navigationContainer.addEventListener('touchstart', function (e) {
                requestAnimationFrame(function () {
                    if (shouldNotTouch()) {
                        return;
                    }
                    touched = e.touches[0].clientX;
                    var target = navigationContainer, style = target.style;
                    target.mustHide = false;
                    style.transition = 'transform 0s ease';
                    style.webkitTransition = '-webkit-transform 0s ease';

                });
            });
            navigationContainer.addEventListener('touchmove', function (e) {

                if (shouldNotTouch()) {
                    return;
                }
                var x = e.touches[0].clientX, target = navigationContainer, style = target.style, calc = touched - x,
                    bounds = target.getBoundingClientRect(),
                    compare = factor > 0 ? calc <= 0 : calc >= 0;
                if (compare) {
                    target.mustHide = factor > 0 ? calc * -1 > bounds.width / HIDE_FACTOR : calc > bounds.width / HIDE_FACTOR;
                    style.transform = 'translate3d(' + (calc * -1) + 'px,0,0)';
                    style.webkitTransform = 'translate3d(' + (calc * -1) + 'px,0,0)';
                }
            });
            navigationContainer.addEventListener('touchend', function () {

                requestAnimationFrame(function () {
                    if (shouldNotTouch()) {
                        return;
                    }
                    var target = navigationContainer, style = target.style;

                    if (target.mustHide) {
                        var width = target.getBoundingClientRect().width * factor;
                        style.transition = 'transform .2s ease';
                        style.webkitTransition = '-webkit-transform .2s ease';

                        style.transform = 'translate3d(' + width + 'px,0,0)';
                        style.webkitTransform = 'translate3d(' + width + 'px,0,0)';

                        setTimeout(function () {
                            resetStyles(style);
                            target.classList.remove(OPEN_CLASS);
                            darkener.classList.remove(INIT_CLASS);
                            body.classList.remove(TOGGLE_CLASS);
                        }, ANIM_DELAY);
                    } else {
                        resetStyles(style);
                    }
                });
            });

            var togglerF = function (e) {
                e.preventDefault();
                if (navigationContainer.classList.contains(OPEN_CLASS)) {
                    setTimeout(function () {
                        body.classList.toggle(TOGGLE_CLASS);
                    }, ANIM_DELAY);
                } else {
                    body.classList.toggle(TOGGLE_CLASS);
                }
                darkener.classList.toggle(INIT_CLASS);
                navigationContainer.classList.toggle(OPEN_CLASS);
            };
            toggler.addEventListener('touchstart', togglerF);
            toggler.addEventListener('touchstart', function (e) {

                e.target.oldClassNames = e.target.className;
                e.target.className = 'active ' + e.target.oldClassNames;
            });
            toggler.addEventListener('touchend', function (e) {
                e.target.className = e.target.oldClassNames;
            });
            toggler.addEventListener('click', togglerF);

            var closer = function (e) {
                if (navigationContainer.classList.contains(OPEN_CLASS)) {
                    if (!FlexCss.isPartOfNode(e.target, toggler) && !FlexCss.isPartOfNode(e.target, navigationContainer)) {
                        togglerF(e);
                    }
                }
            };

            FlexCss.SETTINGS.clickEvents.forEach(function (e) {
                body.addEventListener(e, closer);
            });

        };
    })(FlexCss, window);

    /**
     * A Dropdown
     */
    (function (FlexCss, window) {

        /**
         * Will position an element directly at given target
         * Is aware of a given collision container to detect edges
         * Will put elementToPosition either to left or right edge (prefer right)
         *  and either to bottom or top (prefers bottom)
         *
         * @param target the target container to align to
         * @param elementToPosition the element to position
         * @param collisionContainer the outer container to prevent collisions
         * @returns {HTMLElement}
         * @constructor
         */
        FlexCss.SetupPositionNearby = function (target, elementToPosition, collisionContainer) {
            var targetPosition = target.getBoundingClientRect(),
                elementRect = elementToPosition.getBoundingClientRect(),
                colRect = collisionContainer.getBoundingClientRect(),
                targetTop = targetPosition.top, targetRight = targetPosition.right,
                isCollisionBottom = window.innerHeight < (targetTop + targetPosition.height + elementRect.height),
                isCollisionLeft = targetRight < elementRect.width,
                COL_LEFT_CLASS = 'is-collision-left';

            if (isCollisionLeft) {
                // put element to left if collision with left
                elementToPosition.style.left = targetPosition.left + 'px';
                elementToPosition.classList.add(COL_LEFT_CLASS);
            } else {
                elementToPosition.style.left = (targetRight - elementRect.width) + 'px';
                elementToPosition.classList.remove(COL_LEFT_CLASS);
            }
            if (isCollisionBottom) {
                // Put Element on top if collision
                elementToPosition.style.top = (targetTop - elementRect.height) - colRect.top + 'px';
            } else {
                elementToPosition.style.top = (targetTop + targetPosition.height) - colRect.top + 'px';
            }

            return elementToPosition;
        };

        /**
         * Creates a Tooltip for:
         * [data-tooltip]
         * @param DelegateContainer
         * @returns {FlexCss.CreateTooltip}
         * @constructor
         */
        FlexCss.CreateTooltip = function (DelegateContainer) {
            var doc = document, container = doc.getElementById(DelegateContainer),
                tooltipContainer = null;
            container.addEventListener('mouseover', function (e) {
                var target = e.target, targetRect = target.getBoundingClientRect(),
                    colRect = container.getBoundingClientRect(), title = target.getAttribute('title');
                if (target.hasAttribute('data-tooltip')) {
                    if (!tooltipContainer) {
                        tooltipContainer = doc.createElement('div');
                        tooltipContainer.id = 'TooltipContainer';
                        container.appendChild(tooltipContainer);
                    }
                    tooltipContainer.style.left = 'auto';
                    tooltipContainer.style.top = 'auto';
                    tooltipContainer.innerHTML = title;
                    target.oldTitle = title;
                    target.removeAttribute('title');
                    var containerRect = tooltipContainer.getBoundingClientRect(), targetTop = targetRect.top,
                        isCollisionTop = 0 >= (targetTop - targetRect.height - containerRect.height), classList = tooltipContainer.classList;
                    if (isCollisionTop) {
                        tooltipContainer.style.top = (targetRect.bottom) - colRect.top + 'px';
                        classList.remove('arrow-bottom');
                        classList.add('arrow-top');

                    } else {
                        classList.remove('arrow-top');
                        classList.add('arrow-bottom');
                        tooltipContainer.style.top = (targetTop - containerRect.height) - colRect.top + 'px';
                    }
                    tooltipContainer.style.left = ((targetRect.left + targetRect.width / 2) - (containerRect.width / 2) || 0) + 'px';
                    classList.add('open');

                }
            });

            container.addEventListener('mouseout', function (e) {
                if (e.target.hasAttribute('data-tooltip')) {
                    tooltipContainer.classList.remove('open');
                    e.target.setAttribute('title', e.target.oldTitle);
                }
            });

            return this;
        };

        /**
         * Register an Element as Widget and adds custom functionality
         * @param WidgetId
         * @returns {FlexCss.Widget}
         * @constructor
         */
        FlexCss.Widget = function (WidgetId) {
            var self = this;
            self.async = null;
            self.onCloseFunction = null;
            // A Binding to an DOM Element is optional
            self.widget = WidgetId ? (WidgetId instanceof HTMLElement ?
                WidgetId : document.getElementById(WidgetId)) : null;

            /**
             * Register Async content for this widget
             * @param func
             */
            this.registerAsyncContent = function (func) {
                self.async = func;
                return self;
            };

            this.onClose = function (onCloseFunc) {
                self.onCloseFunction = onCloseFunc;
                return self;
            };
            /**
             * Will run before a widget closes, return false to cancel close execution
             * @returns {*}
             */
            this.onBeforeClose = function (onBeforeClose) {
                self.onBeforeCloseFunction = onBeforeClose;
                return self;
            };

            /**
             * @returns {null|*|FlexCss.Widget.async}
             */
            this.getAsync = function () {
                return self.async;
            };

            this.setWidget = function (widget) {
                self.widget = widget;
                return self;
            };

            /**
             * Will run given async function
             * @returns {*}
             */
            this.runAsync = function () {
                return self.getAsync().apply(self);
            };

            this.runOnClose = function () {
                return self.onCloseFunction ? self.onCloseFunction.apply(self) : false;
            };

            this.runOnBeforeClose = function (e) {
                return self.onBeforeCloseFunction ? self.onBeforeCloseFunction.apply(self, e) : true;
            };

            // Register widget to element if given
            if (self.widget) {
                self.widget.hfWidgetInstance = self;
            }

            /**
             * Destroys this instance and removes element from DOM
             * @returns {boolean}
             */
            this.destroy = function () {
                if (self.widget && self.widget.parentNode) {
                    self.widget.parentNode.removeChild(self.widget);
                    return true;
                }
                return false;
            };

            return this;
        };

        FlexCss.CreateWidget = function (id) {
            return new FlexCss.Widget(id);
        };

        /**
         * Creates a Dropdown for:
         * [data-select]
         * @param DelegateContainer
         * @param Darkener
         * @param CollisionContainer
         * @constructor
         */
        FlexCss.CreateDropdown = function (DelegateContainer, Darkener) {
            var doc = document, container = doc.getElementById(DelegateContainer),
                STATE_LOADING = 'loading', ATTR_NAME = 'data-select',
                currentOpen = null, darkener = document.getElementById(Darkener), close = function () {
                    if (window.getComputedStyle(currentOpen).position === 'fixed') {
                        setTimeout(function () {
                            container.classList.remove(FlexCss.CONST_CANVAS_TOGGLE);
                        }, FlexCss.CONST_ANIM_DARKENER);
                    }
                    currentOpen.classList.remove('open');
                    darkener.classList.remove('init');
                    currentOpen = null;
                };
            var func = function (e) {

                if (FlexCss.TOUCHMOVE) {
                    return;
                }
                if (currentOpen && !FlexCss.isPartOfNode(e.target, currentOpen)) {
                    close();
                    return func(e);
                }
                var targetHas = e.target.hasAttribute(ATTR_NAME),
                    parentHas = e.target.parentNode ?
                        e.target.parentNode.hasAttribute(ATTR_NAME) : false,
                    target = targetHas ? e.target : e.target.parentNode;

                if (targetHas || parentHas) {
                    if (target.isLoading) {
                        return;
                    }
                    var widget = target.hfWidgetInstance, future = new $.Deferred(),
                        data = target.getAttribute(ATTR_NAME), dropdownContainerElement = doc.getElementById(data);
                    if (!dropdownContainerElement && widget instanceof FlexCss.Widget && widget.getAsync()) {
                        target.classList.add(STATE_LOADING);
                        target.isLoading = true;
                        future = widget.runAsync().then(function (r) {
                            // It's possible to either
                            var f;
                            if (r instanceof HTMLElement) {
                                target.setAttribute(ATTR_NAME, r.id);
                                f = $.Deferred().resolve(r);
                            } else {
                                // Create container Element:
                                var element = doc.createElement('div');
                                element.className = 'dropdown';
                                element.innerHTML = r;
                                element.id = FlexCss.guid();
                                // Cache target for later use:
                                target.setAttribute(ATTR_NAME, element.id);
                                container.appendChild(element);
                                f = $.Deferred();
                                // Wait a little bit till append child did process
                                setTimeout(function () {
                                    f.resolve(element);
                                }, 16);
                            }
                            target.isLoading = false;
                            target.classList.remove(STATE_LOADING);
                            return f;
                        });
                    } else {
                        if (!dropdownContainerElement) {
                            throw 'Could not found Dropdown container with ID "' + data + '"';
                        }
                        future = $.Deferred().resolve(dropdownContainerElement);
                    }

                    future.then(function (dropdownContent) {
                        if (currentOpen) {
                            close();
                        }
                        // Skip one frame to show animation
                        target.dropdownContent = dropdownContent;
                        var isAbsolute = window.getComputedStyle(dropdownContent).position === 'absolute';

                        if(!target.flexCollisionContainer) {
                            var collisionC = target.getAttribute('data-collision-container');
                            target.flexCollisionContainer = collisionC ? doc.getElementById(collisionC) || document.body : document.body;
                        }

                        dropdownContent.classList.toggle('open');
                        if (dropdownContent.classList.contains('open')) {
                            currentOpen = dropdownContent;
                        }
                        if (isAbsolute) {
                            // Check collision:
                            FlexCss.SetupPositionNearby(target, dropdownContent, target.flexCollisionContainer);
                        } else {
                            container.classList.add(FlexCss.CONST_CANVAS_TOGGLE);
                            darkener.classList.toggle('init');
                            dropdownContent.style.left = '0';
                            dropdownContent.style.top = 'auto';
                        }
                    });
                    e.preventDefault();
                } else {
                    if (currentOpen) {
                        if (e.target.hasAttribute('data-close-dropdown')) {
                            return close();
                        }
                        if (!FlexCss.isPartOfNode(e.target, currentOpen)) {
                            return close();
                        }
                    }
                }
            };

            FlexCss.SETTINGS.clickEvents.forEach(function (e) {
                container.addEventListener(e, func);
            });

            return this;
        };

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
         * @param DelegateContainer
         * @param options
         * @returns {FlexCss.Modal}
         * @constructor
         */
        FlexCss.Modal = function (DelegateContainer, options) {
            var doc = document, ATTR_NAME = 'data-modal',
                container = doc.getElementById(DelegateContainer),
                modalContainer = null, currentOpen, loader, self = this,
                loading = false, ATTR_CREATE_NEW = 'data-new-instance', ATTR_CLOSE = 'data-close-modal';
            // Instance vars:

            /**
             * Default Options
             */
            self.options = {
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
                        container.classList.remove('modal-open');
                        container.style.paddingRight = '';
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
             * @params force set true to force closing
             * @returns {*}
             */
            self.close = function (e) {

                if (!self.options.closeOnEscape && e instanceof KeyboardEvent) {
                    return false;
                }

                if (!self.options.closeOnBackgroundClick && (e instanceof MouseEvent || e instanceof TouchEvent)) {
                    return false;
                }

                var widget = currentOpen.hfWidgetInstance;
                if (widget && !widget.runOnBeforeClose(e)) {
                    return false;
                }
                if (loading) {
                    return false;
                }
                if (currentOpen) {
                    if (currentOpen.prevModal) {
                        return switchModals(currentOpen.prevModal,
                            currentOpen.prevModal.prevModal || null);
                    }
                    if (widget) {
                        $(currentOpen).trigger('hf.modal.closed', e);
                        widget.runOnClose();
                    }
                }
                _removeModalFromStack(currentOpen);

                // Full stack closed:
                currentOpen = null;

                modalContainer.classList.remove('open');
                e.preventDefault();

                // Remove all current classes from childnodes
                for (var i = 0; i < modalContainer.childNodes.length; i++) {
                    var cl = modalContainer.childNodes[i].classList;
                    cl.remove('current');
                    cl.remove('part-of-stack');
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
                    }
                } else {
                    if (FlexCss.TOUCHMOVE) {
                        return;
                    }

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


                FlexCss.MODAL_JUST_OPENED = true;

                // FIXME: Double event fix for IOS (click event is fired so modal closes directly)
                // Maybe adjust
                setTimeout(function () {
                    FlexCss.MODAL_JUST_OPENED = false;
                }, 60);

                var containerClasses = container.classList,
                    modalContainerClasses = modalContainer ? modalContainer.classList : [];

                if (!modalContainer) {
                    modalContainer = doc.createElement('div');
                    modalContainer.className = 'modal-container open';
                    var closeModalFunction = function (e) {
                        if (loading || FlexCss.MODAL_JUST_OPENED) {
                            return;
                        }
                        if (FlexCss.TOUCHMOVE) {
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
                        modalContainer.addEventListener(e, closeModalFunction, false);
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
                    containerClasses.add('modal-open');
                    container.style.paddingRight = FlexCss.CONST_SCROLLBAR_WIDTH + 'px';
                }
                modalContainerClasses.add('loading');
                loading = true;
                toggleLoader(true);
                if (widget instanceof FlexCss.Widget && widget.getAsync()) {
                    future = widget.runAsync().then(function (r) {
                        var f;
                        if (r instanceof HTMLElement) {
                            f = $.Deferred().resolve(r);
                        } else {
                            // Create container Element:
                            var element = doc.createElement('div');
                            element.className = 'modal';
                            element.innerHTML = r;
                            element.id = FlexCss.guid();
                            // Setup modal as widget to widget instance:
                            widget.setWidget(element);
                            f = $.Deferred().resolve(element);
                        }
                        return f;
                    });
                } else {
                    var el = doc.getElementById(targetContent);
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

                    $(el).trigger('hf.modal.opened');
                    return $.Deferred().resolve(el);
                });
            };

            /**
             * Setup events on either default delegate container or given delegate
             * @param delegate (optional)
             * @returns {FlexCss.Modal}
             */
            this.registerEvents = function (delegate) {
                var delegateContainer = delegate || container;

                FlexCss.SETTINGS.clickEvents.forEach(function (e) {
                    delegateContainer.addEventListener(e, createWidget, false);
                });

                self.eventContainer = delegateContainer;
                return self;
            };

            // Creates a dialog directly from a widget
            this.fromWidget = function (widget) {
                createWidget(widget);
                return widget;
            };

            /**
             * Creates a Widget from event
             * @param t
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
                        self.eventContainer.removeEventListener(e, createWidget, false);
                    });
                }

                if (0 === modalContainer.childNodes.length) {
                    modalContainer.parentNode.removeChild(modalContainer);
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
    })(FlexCss, window);
})(window, jQuery);