void function (window, $) {
    "use strict";

    /*!
     * FlexCSS, Some useful UI Widgets for daily use :)
     * Copyright (c) 2014 David Heidrich (bowlingx.com)
     * Depends on jQuery futures and events
     */

    /**
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
            clickEvents: [FlexCss.CONST_FLEX_EVENT_TAB],

            scrollbarUpdateNodes: [window.document.body]
        };

        /**
         * Some initial stuff
         * @param document
         * @param [options] optional, overwrite default options
         */
        FlexCss.init = function (document, options) {

            $.extend(FlexCss.SETTINGS, options);

            // setup Tab events
            FlexCss.TabEvent(document);

            // Prevent accidental touches
            document.body.addEventListener('touchmove', function () {
                FlexCss.TOUCHMOVE = true;
            });
            document.body.addEventListener('touchstart', function () {
                FlexCss.TOUCHMOVE = false;
            });
            // Measure scrollbar width
            FlexCss.CONST_SCROLLBAR_WIDTH = FlexCss.getScrollBarWidth();
            // detect right transition end event
            FlexCss.CONST_TRANSITION_EVENT = FlexCss._whichTransitionEvent();


        };


        /**
         * Get correct transition event
         * @returns {*}
         * @private
         */
        FlexCss._whichTransitionEvent = function () {
            var t;
            var el = document.createElement('fakeelement');

            var transitions = {
                'transition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'MozTransition': 'transitionend',
                'WebkitTransition': 'webkitTransitionEnd'
            };

            for (t in transitions) {
                if (el.style[t] !== undefined) {
                    return transitions[t];
                }
            }
        };

        /**
         * Run an event once
         * @param {String} ev
         * @param {HTMLElement} target
         * @param {Function} func
         */
        FlexCss.addEventOnce = function (ev, target, func) {
            var thisFunction = function (event) {
                func(event);
                target.removeEventListener(ev, thisFunction);
            };
            return target.addEventListener(ev, thisFunction);
        };

        // Some constants:
        FlexCss.CONST_TRANSITION_EVENT = 'transitionend';
        FlexCss.CONST_SCROLLBAR_WIDTH = 15;
        FlexCss.CONST_ANIM_DARKENER = 200;
        FlexCss.CONST_CANVAS_TOGGLE = 'toggled-canvas';

        FlexCss.CONST_IS_IE = "ActiveXObject" in window;

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

                    FlexCss.addEventOnce(FlexCss.CONST_TRANSITION_EVENT, scrollContainer, function () {
                        scrollContainer.style.transition = 'none';
                        scrollContainer.style.webkitTransition = 'none';
                    });
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
            var doc = document, container = ContainerId instanceof HTMLElement ? ContainerId :
                    doc.getElementById(ContainerId),
                ATTR_NAME = 'data-toggle', ATTR_TOGGLE_LIST = 'data-toggle-list',
                ACTIVE_CLASS = 'active', LOADING_CLASS = 'loading', loading = false;
            if (!container) {
                throw 'Toggleable container with id "' + ContainerId + '" not found';
            }

            var listener = function (e) {
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

                if (!target.hasAttribute(ATTR_NAME)) {
                    return;
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
                                        $(target).trigger('flexcss.tab.closed', el);
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
                    $(target).trigger('flexcss.tab.opened', r);
                    elClassList.remove(LOADING_CLASS);
                    if (parentClassList) {
                        parentClassList.remove(LOADING_CLASS);
                    }
                    if (target.hfWidgetInstance) {
                        target.hfWidgetInstance.runOnOpen(r);
                    }
                    r.classList.toggle(ACTIVE_CLASS);
                    loading = false;
                });
            };

            FlexCss.SETTINGS.clickEvents.forEach(function (e) {
                container.addEventListener(e, listener, true);
            });

            return this;
        };

        /**
         * Creates an off-canvas navigation
         * @param {HTMLElement|String} NavigationId
         * @param {HTMLElement|String} ToggleNavigationId
         * @param {HTMLElement|String} Darkener
         * @param {int} factor
         * @constructor
         */
        FlexCss.CreateOffCanvas = function (NavigationId, ToggleNavigationId, Darkener, factor) {

            var doc = document, touched = 0, body = doc.body,
                navigationContainer = NavigationId instanceof HTMLElement ?
                    NavigationId : doc.getElementById(NavigationId),
                toggler = ToggleNavigationId instanceof HTMLElement ?
                    ToggleNavigationId : doc.getElementById(ToggleNavigationId),
                darkener = Darkener instanceof HTMLElement ? Darkener : doc.getElementById(Darkener),
                DARKENER_CLASS_TOGGLE = 'toggle-' + Darkener,
                resetStyles = function (s) {
                    s.transform = '';
                    s.transition = '';
                    s.webkitTransform = '';
                    s.webkitTransition = '';
                }, HIDE_FACTOR = 7,
                OPEN_CLASS = 'open', INIT_CLASS = 'init', TOGGLE_CLASS = FlexCss.CONST_CANVAS_TOGGLE,
                shouldNotTouch = function () {
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
                    target.mustHide = factor > 0 ? calc * -1 >
                    bounds.width / HIDE_FACTOR : calc > bounds.width / HIDE_FACTOR;
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

                        FlexCss.addEventOnce(FlexCss.CONST_TRANSITION_EVENT, target, function () {
                            // add timeout because transition event fires a little to early
                            setTimeout(function () {
                                resetStyles(style);
                                body.classList.remove(TOGGLE_CLASS);
                                body.classList.remove(DARKENER_CLASS_TOGGLE);
                            }, 50);
                        });

                        target.classList.remove(OPEN_CLASS);
                        darkener.classList.remove(INIT_CLASS);


                    } else {
                        resetStyles(style);
                    }
                });
            });
            var togglerF = function (e) {
                e.preventDefault();
                var bodyClass = body.classList, darkenerClass = darkener.classList;
                if (navigationContainer.classList.contains(OPEN_CLASS)) {
                    FlexCss.addEventOnce(FlexCss.CONST_TRANSITION_EVENT, navigationContainer, function () {
                        // add timeout because transition event fires a little to early
                        setTimeout(function () {
                            bodyClass.remove(TOGGLE_CLASS);
                            bodyClass.remove(DARKENER_CLASS_TOGGLE);
                        }, 50);
                    });
                    navigationContainer.classList.remove(OPEN_CLASS);
                    darkener.classList.remove(INIT_CLASS);

                } else {
                    bodyClass.add(TOGGLE_CLASS);
                    bodyClass.add(DARKENER_CLASS_TOGGLE);
                    darkenerClass.add(INIT_CLASS);
                    navigationContainer.classList.add(OPEN_CLASS);
                }
            };
            toggler.addEventListener('touchstart', function (e) {

                e.target.oldClassNames = e.target.className;
                e.target.className = 'active ' + e.target.oldClassNames;
            });

            toggler.addEventListener('touchend', function (e) {
                e.target.className = e.target.oldClassNames;
            });

            toggler.addEventListener(FlexCss.CONST_FLEX_EVENT_TAB, togglerF, true);

            var closer = function (e) {
                if (navigationContainer.classList.contains(OPEN_CLASS)) {
                    if (!FlexCss.isPartOfNode(e.target, toggler) && !FlexCss.isPartOfNode(e.target, navigationContainer)) {
                        togglerF(e);
                    }
                }
            };

            FlexCss.SETTINGS.clickEvents.forEach(function (e) {
                body.addEventListener(e, closer, true);
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
         * @param {String|HTMLElement} DelegateContainer
         * @param {Object} [options]
         * @returns {FlexCss.Tooltip}
         * @constructor
         */
        FlexCss.Tooltip = function (DelegateContainer, options) {
            var doc = document, container = DelegateContainer instanceof HTMLElement ?
                    DelegateContainer : doc.getElementById(DelegateContainer),
                tooltipContainer = null, self = this, CLASS_NAMES_TOOLTIP = 'tooltip-container';

            self.options = {
                containerClass: ''
            };

            if (!(self instanceof FlexCss.Tooltip)) {
                throw 'no static instances allowed';
            }

            $.extend(self.options, options);

            /**
             * Creates a Tooltip on given target
             * @param {HTMLElement} target
             * @param {String} text
             * @param {Boolean} removeTitle
             */
            self.createTooltip = function (target, text, removeTitle) {
                if (!tooltipContainer) {
                    tooltipContainer = doc.createElement('div');
                    tooltipContainer.className = [CLASS_NAMES_TOOLTIP, self.options.containerClass].join(" ");
                    container.appendChild(tooltipContainer);
                }
                tooltipContainer.style.left = 'auto';
                tooltipContainer.style.top = 'auto';
                tooltipContainer.innerHTML = text;
                tooltipContainer.flexTooltipCurrentTarget = target;
                if (removeTitle) {
                    target.oldTitle = text;
                    target.removeAttribute('title');
                }
                var targetRect = target.getBoundingClientRect(),
                    colRect = container.getBoundingClientRect();

                var containerRect = tooltipContainer.getBoundingClientRect(), targetTop = targetRect.top,
                    isCollisionTop = 0 >= (targetTop - targetRect.height - containerRect.height),
                    classList = tooltipContainer.classList;
                if (isCollisionTop) {
                    tooltipContainer.style.top = (targetRect.bottom) - colRect.top + 'px';
                    classList.remove('arrow-bottom');
                    classList.add('arrow-top');

                } else {
                    classList.remove('arrow-top');
                    classList.add('arrow-bottom');
                    tooltipContainer.style.top = (targetTop - containerRect.height) - colRect.top + 'px';
                }
                tooltipContainer.style.left = ((targetRect.left + targetRect.width / 2) -
                (containerRect.width / 2) || 0) - colRect.left + 'px';
                classList.add('open');

            };

            /**
             * Removes a Tooltip on given target
             * @param {HTMLElement} target
             */
            self.removeTooltip = function (target) {
                if (tooltipContainer) {
                    if (tooltipContainer.flexTooltipCurrentTarget !== target) {
                        return;
                    }
                    tooltipContainer.classList.remove('open');
                }
                if (target.oldTitle) {
                    target.setAttribute('title', target.oldTitle);
                }
            };

            /**
             * Initilizes events on container element
             */
            self.registerEvents = function () {
                container.addEventListener('mouseover', function (e) {
                    if (e.target.hasAttribute('data-tooltip')) {
                        self.createTooltip(e.target, e.target.getAttribute('title'), true);
                    }
                });

                container.addEventListener('mouseout', function (e) {
                    if (e.target.hasAttribute('data-tooltip')) {
                        self.removeTooltip(e.target);
                    }
                });

                return self;
            };


            return this;
        };

        /**
         * Register an Element as Widget and adds custom functionality
         *
         * Provides a small and simple event system
         * @param WidgetId
         * @returns {FlexCss.Widget}
         * @constructor
         */
        FlexCss.Widget = function (WidgetId) {
            var self = this;
            self.async = null;
            self.onCloseFunction = [];
            self.onOpenFunction = [];
            self.onBeforeCloseFunction = [];
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

            /**
             * Registers an on close handler
             * @param {Function} onCloseFunc
             * @returns {FlexCss.Widget}
             */
            this.onClose = function (onCloseFunc) {
                self.onCloseFunction.push(onCloseFunc);
                return self;
            };
            /**
             * Register an open function
             * @param {Function} onOpenFunc
             * @returns {FlexCss.Widget}
             */
            this.onOpen = function (onOpenFunc) {
                self.onOpenFunction.push(onOpenFunc);
                return self;
            };
            /**
             * Registers a before open event, return false to cancel closing
             * @param {Function} onBeforeClose
             * @returns {FlexCss.Widget}
             */
            this.onBeforeClose = function (onBeforeClose) {
                self.onBeforeCloseFunction.push(onBeforeClose);
                return self;
            };

            /**
             * @returns {null|*|FlexCss.Widget.async}
             */
            this.getAsync = function () {
                return self.async;
            };

            /**
             * Setup widget instance
             * @param {HTMLElement} widget
             * @returns {FlexCss.Widget}
             */
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

            /* Run event handlers */

            this.runOnClose = function () {
                for (var i = 0; i < self.onCloseFunction.length; i++) {
                    self.onCloseFunction[i].apply(self);
                }
            };

            this.runOnBeforeClose = function (e) {
                var result = true;
                for (var i = 0; i < self.onBeforeCloseFunction.length; i++) {
                    result = self.onBeforeCloseFunction[i].apply(self, [e]);
                    if (!result) {
                        break;
                    }
                }
                return result;
            };

            this.runOnOpen = function (e) {
                for (var i = 0; i < self.onOpenFunction.length; i++) {
                    self.onOpenFunction[i].apply(self, [e]);
                }
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

        /**
         * Factory for creating widgets
         * @param id
         * @returns {FlexCss.Widget}
         * @constructor
         */
        FlexCss.CreateWidget = function (id) {
            return new FlexCss.Widget(id);
        };

        /**
         * Creates a Dropdown for:
         * [data-select]
         * @param DelegateContainer
         * @param Darkener
         * @constructor
         */
        FlexCss.Dropdown = function (DelegateContainer, Darkener) {
            var doc = document, container = DelegateContainer instanceof HTMLElement ?
                    DelegateContainer : doc.getElementById(DelegateContainer),
                STATE_LOADING = 'loading', ATTR_NAME = 'data-select',
                currentOpen = null, darkener = Darkener instanceof HTMLElement ?
                    Darkener : document.getElementById(Darkener);

            var self = this;


            self.destroyOnClose = false;

            if (!darkener || !container) {
                throw 'required elements not found (darkener and container element)';
            }

            var DARKENER_CLASS_TOGGLE = 'toggle-' + (darkener.id || 'darkener-dropdown');

            // check for correct instance mode
            if (!(self instanceof FlexCss.Dropdown)) {
                throw 'no static instances allowed';
            }


            var delegateFunction = function (e) {
                if (currentOpen && !FlexCss.isPartOfNode(e.target, currentOpen)) {
                    self.close();
                    return delegateFunction(e);
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
                    self.createDropdown(target);
                } else {
                    if (currentOpen) {
                        if (e.target.hasAttribute('data-close-dropdown')) {
                            return self.close();
                        }
                        if (!FlexCss.isPartOfNode(e.target, currentOpen)) {
                            return self.close();
                        }
                    }
                }
            };

            /**
             * Register Events for this dropdown container
             * @returns {FlexCss.Dropdown}
             */
            self.registerEvents = function () {
                container.addEventListener(FlexCss.CONST_FLEX_EVENT_TAB, delegateFunction, true);
                return self;
            };

            /**
             * Destroys this instance, unbinds events
             * @returns {FlexCss.Dropdown}
             */
            self.destroy = function () {
                container.removeEventListener(FlexCss.CONST_FLEX_EVENT_TAB, delegateFunction, true);
                return self;
            };

            /**
             * Destroys instance on close of dropdown
             * @param v
             * @returns {FlexCss.Dropdown}
             */
            self.setDestroyOnClose = function(v) {
                self.destroyOnClose = v;
                return self;
            };

            /**
             * Closes Dropdown on current instance
             * @return {Boolean|$.Deferred}
             */
            self.close = function () {

                if (!currentOpen) {
                    return false;
                }
                var future = $.Deferred(), widget = currentOpen.hfWidgetInstance;

                if (window.getComputedStyle(currentOpen).position === 'fixed') {
                    FlexCss.addEventOnce(FlexCss.CONST_TRANSITION_EVENT, currentOpen, function () {
                        container.classList.remove(FlexCss.CONST_CANVAS_TOGGLE);
                        container.classList.remove(DARKENER_CLASS_TOGGLE);
                        $(currentOpen).trigger('flexcss.dropdown.closed');
                        if (widget) {
                            widget.runOnClose();
                        }
                        future.resolve(true);
                    });
                } else {
                    $(currentOpen).trigger('flexcss.dropdown.closed');
                    if (widget) {
                        currentOpen.hfWidgetInstance.runOnClose();
                    }
                }

                currentOpen.classList.remove('open');
                darkener.classList.remove('init');

                currentOpen = null;

                if (self.destroyOnClose) {
                    self.destroy();
                }
                return future;
            };

            /**
             * Creates a dropdown on given target and opens it
             * @param {HTMLElement} target target where this dropdown is placed
             * @param {FlexCss.Widget} [thisWidget] if given will use widget instead of widget instance
             * @return {FlexCss.Dropdown}
             */
            self.createDropdown = function (target, thisWidget) {

                if (!target) {
                    throw 'Dropdown target not found';
                }

                var widget = thisWidget || target.hfWidgetInstance, future = new $.Deferred(),
                    data = target.getAttribute(ATTR_NAME), dropdownContainerElement = doc.getElementById(data);

                if (!dropdownContainerElement && widget instanceof FlexCss.Widget && widget.getAsync()) {
                    target.classList.add(STATE_LOADING);
                    target.isLoading = true;
                    future = widget.runAsync().then(function (r) {
                        // It's possible to either
                        var f;
                        if (r instanceof HTMLElement) {
                            if (r.id) {
                                target.setAttribute(ATTR_NAME, r.id);
                            }
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
                        return f;
                    }).always(function () {
                        target.isLoading = false;
                        target.classList.remove(STATE_LOADING);
                    });
                } else {
                    if (!dropdownContainerElement) {
                        throw 'Could not found Dropdown container with ID "' + data + '"';
                    }
                    future = $.Deferred().resolve(dropdownContainerElement);
                }

                future.then(function (dropdownContent) {
                    if (currentOpen) {
                        self.close();
                    }
                    // Skip one frame to show animation
                    target.dropdownContent = dropdownContent;
                    var isAbsolute = window.getComputedStyle(dropdownContent).position === 'absolute';

                    if (!target.flexCollisionContainer) {
                        var collisionC = target.getAttribute('data-collision-container');
                        target.flexCollisionContainer = collisionC ?
                        doc.getElementById(collisionC) || document.body : document.body;
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
                        container.classList.add(DARKENER_CLASS_TOGGLE);
                        darkener.classList.toggle('init');
                        dropdownContent.style.left = '0';
                        dropdownContent.style.top = 'auto';
                    }
                });
            };

            return self;
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
                loading = false, ATTR_CREATE_NEW = 'data-new-instance', ATTR_CLOSE = 'data-close-modal';
            // Instance vars:

            if (!container) {
                throw 'Modal: Could not found container element by given ID: ' + DelegateContainer;
            }

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

                if (!self.options.closeOnBackgroundClick && (e instanceof MouseEvent || e instanceof TouchEvent)) {
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
                    containerClasses.add('modal-open');

                    FlexCss.SETTINGS.scrollbarUpdateNodes.forEach(function (n) {
                        n.style.paddingRight = parseInt(window.getComputedStyle(n)['padding-right']) +
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
    })(FlexCss, window);
}(window, jQuery);