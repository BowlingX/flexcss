/* global Image*/

/**
 * A Simple LightBox
 */
void function (document, window, $) {
    "use strict";

    if (!window.FlexCss) {
        window.FlexCss = {};
    }

    var FlexCss = window.FlexCss;


    /**
     * A LightBox Widget
     *
     * @param {HTMLElement|String} DelegateContainer
     * @param {String} AttributeSelector
     * @param {HTMLElement|String} ModalAppend
     * @param {object} options
     * @constructor
     */
    FlexCss.LightBox = function (DelegateContainer, AttributeSelector, ModalAppend, options) {
        var modalContainer = new FlexCss.Modal(ModalAppend || DelegateContainer), self = this, resizeEvent,
            keyboardNextEvent;
        DelegateContainer = DelegateContainer instanceof HTMLElement ? DelegateContainer :
            document.getElementById(DelegateContainer);


        var future = $.Deferred(), nextFuture = future, imageContainer,
            modalContainerDiv, contentContainer, closerContainerDiv;
        /**
         * lightbox widget
         * @type {FlexCss.Widget}
         */
        self.widget = null;

        self.isOpen = false;

        self.modal = modalContainer;

        /**
         * Default options
         */
        self.options = {
            // set if prev and next should be available
            registerPrevNextEvents: true,
            // set if modal should be closed after last image
            closeOnLast: false,
            // called when next image is requested (either by keyboard or click
            onNext: function () {
                return true;
            },
            onClose: function () {
            },
            // called when underlying target changed
            onSwitchImage: function () {
            }
        };


        $.extend(self.options, options);

        /**
         * Will fetch the next element of a lightBox
         * @param {HTMLElement} target
         * @returns {null|HTMLElement}
         */
        self.getNext = function (target) {
            var next = target.parentNode.nextElementSibling;
            if (next && next.children[0].hasAttribute(AttributeSelector)) {
                return next.children[0];
            }
            return null;
        };

        /**
         * Will fetch the previous element of a lightBox
         * @param {HTMLElement} target
         * @returns {null|HTMLElement}
         */
        self.getPrev = function (target) {
            var previous = target.parentNode.previousElementSibling;
            if (previous && previous.children[0].hasAttribute(AttributeSelector)) {
                return previous.children[0];
            }
            return null;
        };

        /**
         * Registers events for delegate container
         */
        self.registerEvents = function (onOpen) {
            DelegateContainer.addEventListener(FlexCss.CONST_FLEX_EVENT_TAB, function (e) {
                var target = e.target, parent = target.parentNode,
                    validTarget = target.hasAttribute(AttributeSelector),
                    parentIsValid = parent.hasAttribute(AttributeSelector);
                if (!validTarget && parentIsValid) {
                    validTarget = true;
                    target = parent;
                }
                if (validTarget) {
                    e.preventDefault();
                    self.open(target).then(function (r) {
                        if (onOpen) {
                            onOpen.apply(self, [r, target]);
                        }
                    });
                }
            }, true);
        };


        /**
         * @returns {HTMLElement}
         */
        self.getContentContainer = function () {
            return contentContainer;
        };

        /**
         * Will show a lightBox on given target
         * @param {HTMLElement} target
         * @returns {$.Deferred|*}
         */
        self.open = function (target) {
            if (!target) {
                return false;
            }
            // if lightbox is open, we just switch to the new target image
            if (self.isOpen && target) {
                return self.switchImage(target).then(function () {
                    return $.Deferred().resolve(self);
                });
            }
            self.isOpen = true;

            // reoload futures
            future = $.Deferred();
            nextFuture = future;

            /**
             * Setup max-width and max-height
             * @param target
             * @param img
             * @param loadedImage
             * @private
             */
            self._setupMaxWidthHeight = function (target, img, loadedImage) {
                var nextMaxWidth = target.getAttribute(FlexCss.LightBox.ATTR_MAX_WIDTH),
                    nextMaxHeight = target.getAttribute(FlexCss.LightBox.ATTR_MAX_HEIGHT);
                if (nextMaxWidth && nextMaxHeight) {
                    img.style.maxWidth = nextMaxWidth + "px";
                    img.style.maxHeight = nextMaxHeight + "px";
                } else {
                    img.style.maxWidth = loadedImage.width + "px";
                    img.style.maxHeight = loadedImage.height + "px";
                }
            };

            /**
             * Setup Widget for modal
             * @type {FlexCss.Widget}
             */
            self.widget = new FlexCss.Widget().registerAsyncContent(function () {
                // thumbnail is either target itself or expected to be first childNode
                var thumbnail = target.hasAttribute('data-no-thumbnail') ? target : (target.children[0] || target);

                var imgHighResolution = target.getAttribute('data-href') || target.getAttribute('href'),
                    imgSrc = thumbnail.getAttribute(FlexCss.LightBox.ATTR_SRC) || thumbnail.src || imgHighResolution;

                var imageObj = new Image();
                imageObj.src = imgSrc;
                imageContainer = document.createElement('div');
                modalContainerDiv = document.createElement('div');
                closerContainerDiv = document.createElement('i');
                contentContainer = document.createElement('div');

                closerContainerDiv.className = 'modal-close modal-close-lightbox icon-cancel-1';
                closerContainerDiv.setAttribute('data-close-modal', 'data-close-modal');

                modalContainerDiv.className = 'modal image-modal';
                modalContainerDiv.appendChild(imageContainer);
                modalContainerDiv.appendChild(contentContainer);
                modalContainerDiv.appendChild(closerContainerDiv);
                contentContainer.className = 'content-container';
                self.widget.setWidget(modalContainerDiv);

                imageObj.addEventListener('load', function () {
                    imageContainer.className = 'image-container';
                    var img = document.createElement('img');
                    img.src = imgSrc;
                    self._setupMaxWidthHeight(target, img, imageObj);
                    imageContainer.appendChild(img);
                    imageContainer.style['backgroundImage'] = 'url('+imgSrc+')';
                    var calculateContainer = function () {
                        if (FlexCss.CONST_IS_IE) {
                            setTimeout(function () {
                                imageContainer.style.height = img.offsetHeight + 'px';
                            }, 0);
                        }
                    };
                    future.resolve(modalContainerDiv).then(function () {
                        calculateContainer();
                    });

                    if (FlexCss.CONST_IS_IE) {
                        resizeEvent = window.addEventListener('resize', function () {
                            setTimeout(function () {
                                imageContainer.style.height = img.offsetHeight + 'px';
                            }, 0);
                        });
                    }

                    /**
                     * Switches to the next image
                     * @param {boolean} direction
                     */
                    self.switchImageByDirection = function (direction) {
                        var next = direction ? self.getPrev(target) : self.getNext(target);
                        if (self.options.onNext.apply(self, [next])) {
                            return self.switchImage(next);
                        }
                    };


                    /**
                     * Switch to a specific image
                     * @param next
                     * @returns {*}
                     */
                    self.switchImage = function (next) {
                        var future = $.Deferred();
                        nextFuture = future;
                        // notify observers about image switching
                        self.options.onSwitchImage.apply(self, [future]);
                        if (next) {
                            var nextThumb = next.hasAttribute('data-no-thumbnail') ? next : (next.children[0] || next),
                                nextHighRes = next.getAttribute('data-href') ||
                                    next.getAttribute('href'),
                                nextSource = nextThumb.getAttribute(FlexCss.LightBox.ATTR_SRC) || nextThumb.src || nextHighRes,
                                nextImgObject = new Image();
                            if (!nextSource) {
                                future.reject(next);
                                return future;
                            }
                            target = next;
                            nextImgObject.src = nextSource;
                            imageContainer.classList.add('loading');
                            nextImgObject.addEventListener('load', function () {
                                img.src = nextSource;
                                imageContainer.style['backgroundImage'] = 'url('+nextSource+')';
                                self._setupMaxWidthHeight(nextThumb, img, nextImgObject);
                                calculateContainer();
                                highRes(nextThumb, nextHighRes);
                                self._setupPrevNextStates();
                                imageContainer.classList.remove('loading');
                                future.resolve(nextSource, target);
                            });
                        } else {
                            future.reject();
                        }


                        return future;
                    };

                    /**
                     * Checks if lightbox is currently loading
                     * @returns {boolean}
                     */
                    self.isLoading = function () {
                        return 'pending' === nextFuture.state();
                    };

                    /**
                     * Checks if modal should be closed
                     * @private
                     */
                    self._runOptionalClose = function () {
                        if (self.options.closeOnLast) {
                            self.modal.close();
                        }
                    };

                    self._setupPrevNextStates = function () {
                        var hasPrev = self.getPrev(target), hasNext = self.getNext(target),
                            hasPrevClass = 'has-prev', hasNextClass = 'has-next';

                        // because IE does not support the second toggle parameter, we need to do this manually
                        if(hasPrev) {
                            imageContainer.classList.add(hasPrevClass);
                        } else {
                            imageContainer.classList.remove(hasPrevClass);
                        }
                        if(hasNext) {
                            imageContainer.classList.add(hasNextClass);
                        } else {
                            imageContainer.classList.remove(hasNextClass);
                        }
                    };

                    if (self.options.registerPrevNextEvents) {

                        self._setupPrevNextStates();
                        // prev or next on touch/click
                        imageContainer.addEventListener(FlexCss.CONST_FLEX_EVENT_TAB, function (e) {
                            if (self.isLoading()) {
                                return;
                            }
                            e.preventDefault();

                            var ev = e.detail.originalEvent;

                            var pageX = window.TouchEvent && ev instanceof TouchEvent ?
                                ev.changedTouches[0].pageX : ev.pageX;

                            var rect = imageContainer.getBoundingClientRect(), imgX = rect.left,
                                wrapperWidth = rect.width,
                                posX = pageX - imgX;

                            self.switchImageByDirection(wrapperWidth / 2 > posX).fail(function () {
                                self._runOptionalClose();
                            });
                        }, true);

                        // register keyboard events
                        keyboardNextEvent = function (e) {
                            if (e.keyCode === 39 || e.keyCode === 37) {
                                if (self.isLoading()) {
                                    return;
                                }
                                self.switchImageByDirection(e.keyCode === 37).fail(function () {
                                    self._runOptionalClose();
                                });
                            }
                        };
                        window.addEventListener('keydown', keyboardNextEvent);
                    } else {
                        imageContainer.addEventListener(FlexCss.CONST_FLEX_EVENT_TAB, function () {
                            self._runOptionalClose();
                        }, true);
                    }

                    function highRes(thisThumbnail, thisImgHighResolution) {
                        var future = $.Deferred();
                        if (thisImgHighResolution && thisThumbnail.src !== thisImgHighResolution) {
                            var highImageObj = new Image();
                            highImageObj.src = imgHighResolution;
                            highImageObj.addEventListener('load', function () {
                                // if current image is still available
                                if (thisThumbnail.src === img.src) {
                                    img.src = thisImgHighResolution;
                                    imageContainer.style['backgroundImage'] = 'url('+thisImgHighResolution+')';
                                }
                                future.resolve(this);
                            });
                        } else {
                            future.resolve(null);
                        }
                        return future;
                    }

                    highRes(thumbnail, imgHighResolution, imageObj);
                });
                return future;

            }).onClose(function () {
                self.options.onClose.apply(self);
                self.isOpen = false;
                this.destroy();

                // unbind events
                if (keyboardNextEvent) {
                    window.removeEventListener('keydown', keyboardNextEvent);
                }
                if (resizeEvent) {
                    window.removeEventListener('resize', resizeEvent);
                }
            });
            if (self.widget) {
                // make sure we close stack before
                return modalContainer.close().fromWidget(self.widget).then(function () {
                    return future.then(function () {
                        return $.Deferred().resolve(self);
                    });
                });
            } else return false;
        };


    };

    FlexCss.LightBox.ATTR_MAX_WIDTH = 'data-original-width';
    FlexCss.LightBox.ATTR_MAX_HEIGHT = 'data-original-height';
    FlexCss.LightBox.ATTR_SRC = 'data-src';


}(document, window, jQuery);
