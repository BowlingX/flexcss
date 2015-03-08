/* global Image, TouchEvent*/

import Modal from 'Modal';
import {EVENT_MODAL_CLOSED} from 'Modal';
import Settings from 'util/Settings';
import Widget from 'Widget';

const ATTR_MAX_WIDTH = 'data-original-width';
const ATTR_MAX_HEIGHT = 'data-original-height';
const ATTR_SRC = 'data-src';
/**
 * A Simple LightBox
 */
export default
class LightBox {
    /**
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
         * lightbox widget
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
         * Default options
         */
        this.options = {
            // set if prev and next should be available
            registerPrevNextEvents: true,
            // set if modal should be closed after last image
            closeOnLast: true,
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

        Object.assign(this.options, options);
    }

    getNext(target) {
        var next = target.parentNode.nextElementSibling;
        if (next && next.children[0].hasAttribute(this._attributeSelector)) {
            return next.children[0];
        }
        return null;
    }

    /**
     * Will fetch the previous element of a lightBox
     * @param {HTMLElement} target
     * @returns {null|HTMLElement}
     */
    getPrev(target) {
        var previous = target.parentNode.previousElementSibling;
        if (previous && previous.children[0].hasAttribute(this._attributeSelector)) {
            return previous.children[0];
        }
        return null;
    }

    /**
     * Registers events for delegate container
     */
    registerEvents(onOpen) {
        this._delegateContainer.addEventListener(Settings.CONST_TAB_EVENT, function (e) {
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
    _setupMaxWidthHeight(target, img, loadedImage) {
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
    }

    /**
     * Checks if lightbox is currently loading
     * @returns {boolean}
     */
    isLoading() {
        return this.loading;
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
            hasPrevClass = 'has-prev', hasNextClass = 'has-next';
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
            }, 0);
        }
    }

    /**
     * Switch to a specific image
     * @param next
     * @returns {*}
     */
    switchImage(next) {
        var self = this, img = this.img;
        self._nextFuture = new Promise(((resolve, reject) => {
            // notify observers about image switching
            self.options.onSwitchImage.apply(self, [self._nextFuture]);
            if (next) {
                var nextThumb = next.hasAttribute('data-no-thumbnail') ? next : (next.children[0] || next),
                    nextHighRes = next.getAttribute('data-href') ||
                        next.getAttribute('href'),
                    nextSource = nextThumb.getAttribute(ATTR_SRC) || nextThumb.src || nextHighRes,
                    nextImgObject = new Image();

                if (!nextSource) {
                    reject(next);
                    return;
                }
                // set new target to next element
                this.target = next;
                nextImgObject.src = nextSource;
                self._imageContainer.classList.add('loading');
                nextImgObject.addEventListener('load', function () {
                    img.src = nextSource;
                    self._imageContainer.style.backgroundImage = 'url('+nextSource+')';
                    self._setupMaxWidthHeight(nextThumb, img, nextImgObject);
                    self._calculateContainer(img);
                    self.highRes(nextThumb, nextHighRes);
                    self._setupPrevNextStates();
                    self._imageContainer.classList.remove('loading');
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
     * @returns {Promise}
     */
    highRes(thisThumbnail, thisImgHighResolution) {
        return new Promise((resolve) => {
            if (thisImgHighResolution && thisThumbnail.src !== thisImgHighResolution) {
                var highImageObj = new Image();
                highImageObj.src = thisImgHighResolution;
                highImageObj.addEventListener('load', function () {
                    // if current image is still available
                    if (thisThumbnail.src === this.img.src) {
                        this.img.src = thisImgHighResolution;
                        this._imageContainer.style.backgroundImage = 'url('+thisImgHighResolution+')';
                    }
                    resolve(this);
                }.bind(this));
            } else {
                resolve(null);
            }
        });
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
            var thumbnail = target.hasAttribute('data-no-thumbnail') ? target : (target.children[0] || target);

            var imgHighResolution = target.getAttribute('data-href') || target.getAttribute('href'),
                imgSrc = thumbnail.getAttribute(ATTR_SRC) || thumbnail.src || imgHighResolution;

            var imageObj = new Image();
            imageObj.src = imgSrc;
            this._imageContainer = document.createElement('div');
            this._modalContainerDiv = document.createElement('div');
            this._closerContainerDiv = document.createElement('i');
            this._contentContainer = document.createElement('div');

            this._closerContainerDiv.className = 'modal-close modal-close-lightbox icon-cancel-1';
            this._closerContainerDiv.setAttribute('data-close-modal', 'data-close-modal');

            this._modalContainerDiv.className = 'modal image-modal';
            this._modalContainerDiv.appendChild(this._imageContainer);
            this._modalContainerDiv.appendChild(this._contentContainer);
            this._modalContainerDiv.appendChild(this._closerContainerDiv);
            this._contentContainer.className = 'content-container';
            this._future = new Promise(((resolve) => {
                imageObj.addEventListener('load', function () {
                    this._imageContainer.className = 'image-container';
                    var img = document.createElement('img');
                    // current image
                    this.img = img;

                    img.src = imgSrc;
                    self._setupMaxWidthHeight(target, img, imageObj);
                    this._imageContainer.appendChild(img);
                    this._imageContainer.style.backgroundImage = 'url('+imgSrc+')';

                    resolve(self._modalContainerDiv);

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
                        self._imageContainer.addEventListener(Settings.CONST_TAB_EVENT, function (e) {
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
                        }, true);

                        // register keyboard events
                        self._keyboardNextEvent = function (e) {
                            if (e.keyCode === 39 || e.keyCode === 37) {
                                if (self.isLoading()) {
                                    return;
                                }
                                self.switchImageByDirection(e.keyCode === 37).catch(function () {
                                    self._runOptionalClose();
                                });
                            }
                        };
                        global.addEventListener('keydown', self._keyboardNextEvent);
                    } else {
                        self._imageContainer.addEventListener(Settings.CONST_TAB_EVENT, function () {
                            self._runOptionalClose();
                        }, true);
                    }

                    self.highRes(thumbnail, imgHighResolution);
                }.bind(this));
            }).bind(this));
            this._future.then(function () {
                self._calculateContainer(this.img);
            });
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
        } else return false;
    }

}