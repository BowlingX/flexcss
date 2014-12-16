/* global HTMLImageElement, Image*/

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
     * @param DelegateContainer
     * @param AttributeSelector
     * @param ModalAppend
     * @constructor
     */
    FlexCss.LightBox = function (DelegateContainer, AttributeSelector, ModalAppend) {
        var modalContainer = new FlexCss.Modal(ModalAppend), self = this;

        /**
         * Will fetch the next element of a lightBox
         * @param {HTMLElement} target
         * @returns {null|HTMLElement}
         */
        self.getNext = function (target) {
            var next = target.parentNode.nextElementSibling;
            if (next) {
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
            if (previous) {
                return previous.children[0];
            }
            return null;
        };

        ['click', 'touchend'].forEach(function (ev) {
            DelegateContainer.addEventListener(ev, function (e) {
                if (FlexCss.TOUCHMOVE) {
                    return;
                }
                var target = e.target, parent = target.parentNode,
                    validTarget = target.hasAttribute(AttributeSelector),
                    parentIsValid = parent.hasAttribute(AttributeSelector), resizeEvent;
                if (!validTarget && parentIsValid) {
                    validTarget = true;
                    target = parent;
                }
                if (validTarget) {
                    e.preventDefault();

                    var widget = new FlexCss.Widget().registerAsyncContent(function () {
                        // thumbnail is either target itself or expected to be first childNode
                        var thumbnail = target instanceof HTMLImageElement || target.children[0],
                            future = $.Deferred(), nextFuture = future;

                        var imgHighResolution = target.getAttribute('data-href') || target.getAttribute('href'),
                            imgSrc = thumbnail.getAttribute('data-src') || thumbnail.src;

                        var imageObj = new Image();
                        imageObj.src = imgSrc;
                        var imageContainer = document.createElement('div'),
                            modalContainer = document.createElement('div'),
                            contentContainer = document.createElement('div');


                        modalContainer.className = 'modal image-modal';
                        modalContainer.appendChild(imageContainer);
                        modalContainer.appendChild(contentContainer);
                        contentContainer.className = 'content-container';
                        widget.setWidget(modalContainer);

                        imageObj.addEventListener('load', function () {
                            imageContainer.className = 'image-container';
                            var img = document.createElement('img');
                            img.src = imgSrc;
                            imageContainer.appendChild(img);

                            var calculateContainer = function () {
                                if (FlexCss.CONST_IS_IE) {
                                    setTimeout(function () {
                                        imageContainer.style.height = img.offsetHeight + 'px';
                                    }, 0);
                                }
                            };

                            future.resolve(modalContainer).then(function () {
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
                             * @param direction
                             */
                            self.switchImage = function (direction) {
                                var next = direction ? self.getPrev(target) : self.getNext(target),
                                    future = $.Deferred();
                                if (next) {
                                    target = next;
                                    var nextThumb = next.children[0];
                                    var nextSource = nextThumb.getAttribute('data-src') || nextThumb.src;
                                    var nextImgObject = new Image();
                                    nextImgObject.src = nextSource;
                                    nextImgObject.addEventListener('load', function () {
                                        img.src = nextSource;
                                        calculateContainer();
                                        highRes(nextThumb, next.getAttribute('data-href') ||
                                        next.getAttribute('href'));
                                        future.resolve(nextSource);
                                    });
                                } else {
                                    future.resolve(null);
                                }
                                return future;
                            };

                            // prev or next on touch/click
                            imageContainer.addEventListener(FlexCss.CONST_FLEX_EVENT_TAB, function (ev) {
                                if (FlexCss.TOUCHMOVE || 'resolved' !== nextFuture.state()) {
                                    return;
                                }
                                ev.preventDefault();

                                var pageX = window.TouchEvent && ev instanceof TouchEvent ?
                                    ev.changedTouches[0].pageX : ev.pageX;

                                var rect = imageContainer.getBoundingClientRect(), imgX = rect.left,
                                    wrapperWidth = rect.width,
                                    posX = pageX - imgX;

                                nextFuture = self.switchImage(wrapperWidth / 2 > posX);
                            });

                            function highRes(thisThumbnail, thisImgHighResolution) {
                                var future = $.Deferred();
                                if (thisThumbnail.src !== thisImgHighResolution) {
                                    var highImageObj = new Image();
                                    highImageObj.src = imgHighResolution;
                                    highImageObj.addEventListener('load', function () {
                                        // if current image is still available
                                        if (thisThumbnail.src === img.src) {
                                            img.src = thisImgHighResolution;
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
                        this.destroy();
                        if (resizeEvent) {
                            window.removeEventListener('resize', resizeEvent);
                        }
                    });
                    modalContainer.fromWidget(widget);
                }
            }, false);

        });

    };

}(document, window, jQuery);
