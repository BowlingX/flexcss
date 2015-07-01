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
 * FlexCss.LightBox
 * Licensed under the MIT License (MIT)
 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
 */

'use strict';

/* global Image, TouchEvent*/

import Modal from 'Modal';
import {EVENT_MODAL_CLOSED} from 'Modal';
import Settings from 'util/Settings';
import Widget from 'Widget';

const ATTR_MAX_WIDTH = 'data-original-width';
const ATTR_MAX_HEIGHT = 'data-original-height';
const ATTR_SRC = 'data-src';

const CLS_HAS_PREV = 'has-prev';
const CLS_HAS_NEXT = 'has-next';
const CLS_LOADING = 'loading';

const ATTR_NO_THUMBNAIL = 'data-no-thumbnail';
const ATTR_DATA_HREF = 'data-href';
const ATTR_HREF = 'href';

const KEY_NEXT = 39;
const KEY_PREV = 37;
const ATTR_CLOSE = 'data-close-modal';
/**
 * A Simple LightBox
 */
export default
class LightBox {

    /**
     * Creates a new Lightbox
     * @param DelegateContainer
     * @param AttributeSelector
     * @param ModalAppend
     * @param [options]
     */
    constructor(DelegateContainer, AttributeSelector, ModalAppend, options) {

        var thisDelegateContainer = DelegateContainer instanceof HTMLElement ? DelegateContainer :
            document.getElementById(DelegateContainer);

        this._modalAppend = ModalAppend || DelegateContainer;
        /**
         * @type {Function}
         */
        this._resizeEvent = null;
        /**
         * @type {Function}
         */
        this._keyboardNextEvent = null;
        /**
         * @type {Promise}
         */
        this._future = null;
        /**
         * @type {Promise}
         */
        this._nextFuture = this._future;
        /**
         * @type {HTMLElement}
         */
        this._imageContainer = null;
        /**
         * @type {HTMLElement}
         */
        this._modalContainerDiv = null;
        /**
         * @type {HTMLElement}
         */
        this._contentContainer = null;
        /**
         * @type {HTMLElement}
         */
        this._closerContainerDiv = null;
        /**
         * @type {HTMLElement}
         */
        this._delegateContainer = thisDelegateContainer;
        /**
         * @type {HTMLElement}
         */
        this._attributeSelector = AttributeSelector;
        /**
         * @type {Widget}
         */
        this._widget = null;
        /**
         * @type {boolean}
         */
        this._isOpen = false;
        /**
         * @type {HTMLElement}
         */
        this.target = null;
        /**
         * @type {HTMLElement}
         */
        this.img = null;
        /**
         * @type {boolean}
         */
        this._isLoading = false;

        /**
         * Default options
         */
        this.options = {
            // set if prev and next should be available
            registerPrevNextEvents: true,
            // set if modal should be closed after last image
            closeOnLast: true,
            // called when next image is requested (either by keyboard or click), return false to abort
            onNext: function () {
                return true;
            },
            onClose: function () {
            },
            getNext: null,
            getPrev: null,
            // called when underlying target changed
            onSwitchImage: function () {
            }
        };

        Object.assign(this.options, options);
    }

    /**
     * @param {HTMLElement} node
     * @returns {HTMLElement|null}
     */
    findImmediateNextTarget(node) {
        if (node && node.children[0].hasAttribute(this._attributeSelector)) {
            return node.children[0];
        }
        return null;
    }

    /**
     * Will fetch the next element of a lightBox
     * @param {HTMLElement} target
     * @returns {null|HTMLElement}
     */
    getNext(target) {
        if (this.options.getNext) {
            return this.options.getNext.apply(this, [target]);
        }
        return this.findImmediateNextTarget(target.parentNode.nextElementSibling);
    }

    /**
     * Will fetch the previous element of a lightBox
     * @param {HTMLElement} target
     * @returns {null|HTMLElement}
     */
    getPrev(target) {
        if (this.options.getPrev) {
            return this.options.getPrev.apply(this, [target]);
        }
        return this.findImmediateNextTarget(target.parentNode.previousElementSibling);
    }

    /**
     * Registers events for delegate container
     */
    registerEvents(onOpen) {
        this._delegateContainer.addEventListener(Settings.getTabEvent(), function (e) {
            var target = e.target, parent = target.parentNode,
                validTarget = target.hasAttribute(this._attributeSelector),
                parentIsValid = parent && parent.hasAttribute(this._attributeSelector);
            if (!validTarget && parentIsValid) {
                validTarget = true;
                target = parent;
            }
            if (validTarget) {
                e.preventDefault();
                this.open(target).then(function (r) {
                    if (onOpen) {
                        onOpen.apply(this, [r, target]);
                    }
                }.bind(this));
            }
        }.bind(this));
    }

    /**
     * @returns {HTMLElement}
     */
    getContentContainer() {
        return this._contentContainer;
    }

    /**
     * Setup max-width and max-height
     * @param {HTMLElement} target
     * @param {HTMLElement} img
     * @param {HTMLElement} loadedImage
     * @private
     */
    static _setupMaxWidthHeight(target, img, loadedImage) {
        var nextMaxWidth = target.getAttribute(ATTR_MAX_WIDTH),
            nextMaxHeight = target.getAttribute(ATTR_MAX_HEIGHT);
        if (nextMaxWidth && nextMaxHeight) {
            img.style.maxWidth = nextMaxWidth + "px";
            img.style.maxHeight = nextMaxHeight + "px";
        } else {
            img.style.maxWidth = loadedImage.width + "px";
            img.style.maxHeight = loadedImage.height + "px";
        }
    }

    /**
     * Switches to the next image
     * @param {boolean} direction
     */
    switchImageByDirection(direction) {
        var next = direction ? this.getPrev(this.target) : this.getNext(this.target);
        if (this.options.onNext.apply(this, [next])) {
            return this.switchImage(next);
        }
        return new Promise((_, reject) => reject(next));
    }

    /**
     * Checks if lightbox is currently loading
     * @returns {boolean}
     */
    isLoading() {
        return this._isLoading;
    }

    /**
     * Checks if modal should be closed
     * @private
     */
    _runOptionalClose() {
        if (this.options.closeOnLast) {
            this.modal.close();
        }
    }

    _setupPrevNextStates() {
        var target = this.target, hasPrev = this.getPrev(target), hasNext = this.getNext(target),
            hasPrevClass = CLS_HAS_PREV, hasNextClass = CLS_HAS_NEXT;
        // because IE does not support the second toggle parameter, we need to do this manually
        if (hasPrev) {
            this._imageContainer.classList.add(hasPrevClass);
        } else {
            this._imageContainer.classList.remove(hasPrevClass);
        }
        if (hasNext) {
            this._imageContainer.classList.add(hasNextClass);
        } else {
            this._imageContainer.classList.remove(hasNextClass);
        }
    }

    /**
     * @param img
     * @private
     */
    _calculateContainer(img) {
        if (Settings.isIE()) {
            setTimeout(function () {
                this._imageContainer.style.height = img.offsetHeight + 'px';
            }.bind(this), 0);
        }
    }

    /**
     * Switch to a specific image
     * @param next
     * @returns {*}
     */
    switchImage(next) {
        var self = this, img = this.img;
        this._isLoading = true;
        self._nextFuture = new Promise(((resolve, reject) => {
            // notify observers about image switching
            self.options.onSwitchImage.apply(self, [self._nextFuture]);
            if (next) {
                var nextThumb = next.hasAttribute(ATTR_NO_THUMBNAIL) ? next : (next.children[0] || next),
                    nextHighRes = next.getAttribute(ATTR_DATA_HREF) ||
                        next.getAttribute(ATTR_HREF),
                    nextSource = nextThumb.getAttribute(ATTR_SRC) || nextThumb.src || nextHighRes,
                    nextImgObject = new Image();

                if (!nextSource) {
                    reject(next);
                    return;
                }
                // set new target to next element
                this.target = next;
                nextImgObject.src = nextSource;
                self._imageContainer.classList.add(CLS_LOADING);
                nextImgObject.addEventListener('load', function () {
                    img.src = nextSource;
                    self._imageContainer.style.backgroundImage = 'url(' + nextSource + ')';
                    LightBox._setupMaxWidthHeight(next, img, nextImgObject);
                    self._calculateContainer(img);
                    self.highRes(nextThumb, nextHighRes);
                    self._setupPrevNextStates();
                    self._imageContainer.classList.remove(CLS_LOADING);
                    this._isLoading = false;
                    resolve(nextSource, this.target);
                }.bind(this));
            } else {
                reject(this);
            }
        }).bind(this));
        return self._nextFuture;
    }


    /**
     * Setup High-Resolution picture
     * @param {HTMLElement} thisThumbnail
     * @param {String} thisImgHighResolution
     */
    highRes(thisThumbnail, thisImgHighResolution) {

        if (thisImgHighResolution && thisThumbnail.src !== thisImgHighResolution) {
            var highImageObj = new Image();
            highImageObj.src = thisImgHighResolution;
            highImageObj.addEventListener('load', function () {
                // if current image is still available
                if (this._getSrc(thisThumbnail) === this.img.src) {
                    this.img.src = thisImgHighResolution;
                    this._imageContainer.style.backgroundImage = 'url(' + thisImgHighResolution + ')';
                }
            }.bind(this));
        }
    }

    /**
     * Extracts the source of an image
     * @param target
     * @returns {String|null}
     * @private
     */
    _getSrc(target) {
        return target.getAttribute(ATTR_SRC) || target.src;
    }

    /**
     * Will show a lightBox on given target
     * @param {HTMLElement} target
     * @returns {$.Deferred|*}
     */
    open(target) {
        var self = this;

        if (!target) {
            return false;
        }

        this.target = target;

        // if lightBox is open, we just switch to the new target image
        if (this._isOpen && target) {
            return this.switchImage(target).then(function () {
                return this;
            }.bind(this));
        }

        this._isOpen = true;

        /**
         * Setup Widget for modal
         * @type {Widget}
         */
        this._widget = new Widget().setAsync(function () {
            // thumbnail is either target itself or expected to be first childNode
            var thumbnail = target.hasAttribute(ATTR_NO_THUMBNAIL) ? target : (target.children[0] || target);

            var imgHighResolution = target.getAttribute(ATTR_DATA_HREF) || target.getAttribute(ATTR_HREF),
                imgSrc = this._getSrc(thumbnail) || imgHighResolution;

            var imageObj = new Image();
            imageObj.src = imgSrc;
            this._imageContainer = document.createElement('div');
            this._modalContainerDiv = document.createElement('div');
            this._closerContainerDiv = document.createElement('i');
            this._contentContainer = document.createElement('div');

            this._closerContainerDiv.className = 'modal-close modal-close-lightbox icon-cancel-1';
            this._closerContainerDiv.setAttribute(ATTR_CLOSE, ATTR_CLOSE);

            this._modalContainerDiv.className = 'modal image-modal';
            this._modalContainerDiv.appendChild(this._imageContainer);
            this._modalContainerDiv.appendChild(this._contentContainer);
            this._modalContainerDiv.appendChild(this._closerContainerDiv);
            this._contentContainer.className = 'content-container';
            this._isLoading = true;
            this._future = new Promise(((resolve) => {
                imageObj.addEventListener('load', function () {
                    this._imageContainer.className = 'image-container';
                    var img = document.createElement('img');
                    // current image
                    this.img = img;

                    img.src = imgSrc;
                    LightBox._setupMaxWidthHeight(target, img, imageObj);
                    this._imageContainer.appendChild(img);
                    this._imageContainer.style.backgroundImage = 'url(' + imgSrc + ')';

                    resolve(self._modalContainerDiv);
                    this._isLoading = false;

                    if (Settings.isIE()) {
                        self._resizeEvent = global.addEventListener('resize', function () {
                            setTimeout(function () {
                                self._imageContainer.style.height = img.offsetHeight + 'px';
                            }, 0);
                        });
                    }

                    if (self.options.registerPrevNextEvents) {
                        self._setupPrevNextStates();
                        // prev or next on touch/click
                        self._imageContainer.addEventListener(Settings.getTabEvent(), function (e) {
                            if (self.isLoading()) {
                                return;
                            }
                            e.preventDefault();

                            var ev = e;
                            var pageX = global.TouchEvent && ev instanceof TouchEvent ?
                                ev.changedTouches[0].pageX : ev.pageX;
                            var rect = self._imageContainer.getBoundingClientRect(), imgX = rect.left,
                                wrapperWidth = rect.width,
                                posX = pageX - imgX;

                            self.switchImageByDirection(wrapperWidth / 2 > posX).catch(function () {
                                self._runOptionalClose();
                            });
                        });

                        // register keyboard events
                        self._keyboardNextEvent = function (e) {
                            if (e.keyCode === KEY_NEXT || e.keyCode === KEY_PREV) {
                                if (self.isLoading()) {
                                    return;
                                }
                                self.switchImageByDirection(e.keyCode === KEY_PREV).catch(function () {
                                    self._runOptionalClose();
                                });
                            }
                        };
                        global.addEventListener('keydown', self._keyboardNextEvent);
                    } else {
                        self._imageContainer.addEventListener(Settings.getTabEvent(), function () {
                            self._runOptionalClose();
                        });
                    }

                    self.highRes(thumbnail, imgHighResolution);
                }.bind(this));
            }).bind(this));
            this._future.then(function () {
                self._calculateContainer(this.img);
            }.bind(this));
            self._modalContainerDiv.addEventListener(EVENT_MODAL_CLOSED, function () {
                // cleanup:
                this._modalContainerDiv.parentNode.removeChild(this._modalContainerDiv);
                this.options.onClose.apply(self);
                this._isOpen = false;
                this.modal.destroy();
                // unbind events
                if (this._keyboardNextEvent) {
                    global.removeEventListener('keydown', self._keyboardNextEvent);
                }
                if (this._resizeEvent) {
                    global.removeEventListener('resize', self._resizeEvent);
                }
            }.bind(this));

            return this._future;
        }.bind(this));

        this._nextFuture = this._future;

        if (self._widget) {
            this.modal = new Modal(this._modalAppend);
            // make sure we close stack before
            return this.modal.close().fromWidget(self._widget).then(function () {
                return self._future.then(function () {
                    return self;
                });
            });
        } else {
            return false;
        }
    }

}
