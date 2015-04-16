const PFX = ["webkit", "moz", "MS", "o", ""];

const COL_LEFT_CLASS = 'is-collision-left';

const COL_RIGHT_CLASS = 'is-collision-right';

const COL_BOTTOM_CLASS = 'is-collision-bottom';

/**
 * Provides some shared Util functions
 */
export default
class Util {

    /**
     * Will register the right animation event based on browser
     * @param element
     * @param type
     * @param callback
     */
    static prefixedAnimateEvent(element, type, callback) {
        var thisFunction = function (e) {
            callback.apply(element, [e, thisFunction]);
        };

        for (var p = 0; p < PFX.length; p++) {
            if (!PFX[p]) type = type.toLowerCase();
            var name = PFX[p] + type;
            element.addEventListener(name, thisFunction, true);
        }
    }

    /**
     * Get correct transitionend event
     * @returns {String}
     * @private
     */
    static whichTransitionEndEvent() {
        var t, el = document.createElement('fakeelement');

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
    }

    /**
     * Check if target is part of parent node
     * @param target
     * @param parent
     * @returns {boolean}
     */
    static isPartOfNode(target, parent) {
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
    }

    /**
     * Walks the tree until func returns true for given argument
     * @param target
     * @param func
     * @returns {HTMLElement}
     */
    static parentsUntil(target, func) {
        if (!target) {
            return false;
        }
        var now = target;
        while (!func(now) && now !== null) {
            now = now.parentNode;
        }

        return now;
    }

    /**
     * Generates a unique id
     * @return {String}
     */
    static guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    /**
     * Detects scrollbar width
     * @see http://stackoverflow.com/questions/986937/how-can-i-get-the-browsers-scrollbar-sizes
     * @returns {number}
     */
    static getScrollBarWidth() {

        var doc = global.document, inner = doc.createElement('p');
        inner.style.width = "100%";
        inner.style.height = "200px";

        var outer = doc.createElement('div');
        outer.style.position = "absolute";
        outer.style.top = "0px";
        outer.style.left = "0px";
        outer.style.visibility = "hidden";
        outer.style.width = "200px";
        outer.style.height = "150px";
        outer.style.overflow = "hidden";
        outer.appendChild(inner);

        doc.body.appendChild(outer);
        var w1 = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        var w2 = inner.offsetWidth;
        if (w1 === w2) {
            w2 = outer.clientWidth;
        }
        doc.body.removeChild(outer);

        return (w1 - w2);
    }


    /**
     * Run an event once
     * @param {String} ev
     * @param {HTMLElement} target
     * @param {Function} func
     */
    static addEventOnce(ev, target, func) {
        var thisFunction = function (event) {
            func(event);
            target.removeEventListener(ev, thisFunction);
        };
        return target.addEventListener(ev, thisFunction);
    }

    /**
     * Creates a camelCaseRepresentation of a dashed string
     * @param {String} str
     * @returns String
     */
    static dashToCamelCase(str) {
        return str.replace(/-([a-z])/g, function (g) {
            return g[1].toUpperCase();
        });
    }

    /**
     * Reads options from element (data attributes) and applies to base
     * @param {HTMLElement} element
     * @param {Object} base
     * @return {Object}
     */
    static applyOptionsFromElement(element, base) {
        if (!element) {
            return base;
        }
        let attrs = element.attributes;
        for (let i = 0; i<attrs.length; i++) {
            let attr = attrs[i];
            if(attr) {
                let s = Util.dashToCamelCase(attr.nodeName.replace('data-', '')),
                    val = attr.nodeValue;
                if (base.hasOwnProperty(s)) {
                    if ('boolean' === typeof base[s]) {
                        base[s] = 1 === parseInt(val || 1);
                    } else {
                        base[s] = val;
                    }
                }
            }
        }
        return base;
    }

    /**
     * Will position an element directly at given target
     * Is aware of a given collision container to detect edges
     * Will put elementToPosition either to left, center or right edge (prefer right)
     *  and either to bottom or top (prefers bottom)
     *
     * You may overwrite preferred positioned with `centerHorizontal` and `positionTop`
     *
     * @param {HTMLElement} target the target container to align to
     * @param {HTMLElement} elementToPosition the element to position
     * @param {HTMLElement} collisionContainer the outer container to prevent collisions
     * @param {bool} [centerHorizontal] set true to center element, otherwise it's put on the right border by default
     * @param {bool} [positionTop] flip top, by default element is positioned to the bottom.
     * @returns {HTMLElement}
     */
    static setupPositionNearby(target, elementToPosition, collisionContainer, centerHorizontal, positionTop) {

        // determine relative offsets
        var amountTop = 0, amountLeft = 0;
        Util.parentsUntil(target.parentNode, function (el) {
            if (!(el instanceof HTMLElement)) {
                return false;
            }
            var style = window.getComputedStyle(el);
            if (Util.isPartOfNode(elementToPosition, el)) {
                if (style && style.position === 'relative') {
                    amountTop += el.offsetTop || 0;
                    amountLeft += el.offsetLeft || 0;
                }
                return false;
            } else {
                return true;
            }
        });

        var targetPosition = target.getBoundingClientRect(),
            elementRect = elementToPosition.getBoundingClientRect(),
            colRect = collisionContainer.getBoundingClientRect(),
            targetTop = targetPosition.top - amountTop, targetRight = targetPosition.right,
            isCollisionTop = 0 >= (targetTop - elementRect.height),
            isCollisionBottom = window.innerHeight < (targetTop + amountTop + targetPosition.height + elementRect.height),
            isCollisionLeft = targetRight < elementRect.width, targetLeft = targetPosition.left,
            isCollisionRight = (targetLeft + elementRect.width) > colRect.width,
            classList = elementToPosition.classList;

        classList.remove(COL_RIGHT_CLASS);
        classList.remove(COL_LEFT_CLASS);
        classList.remove(COL_BOTTOM_CLASS);

        let calcTop, calcLeft;
        if (isCollisionLeft && !isCollisionRight) {
            // put element to left if collision with left
            calcLeft = (targetPosition.left - colRect.left - amountLeft) + 'px';
            classList.add(COL_LEFT_CLASS);
        } else {
            // maybe center if no collision with either side
            var rightPosition = (targetRight - elementRect.width - colRect.left - amountLeft) + 'px',
                leftCentered = ((targetLeft + targetPosition.width / 2) -
                    (elementRect.width / 2) || 0) - colRect.left,
                collisionCentered = (leftCentered + elementRect.width) > colRect.width;
            if (centerHorizontal && !collisionCentered) {
                calcLeft = leftCentered + 'px';
            } else {
                classList.add(COL_RIGHT_CLASS);
                calcLeft = rightPosition;
            }
        }

        if (isCollisionBottom || (positionTop && !isCollisionTop)) {
            // Put Element on top if collision
            calcTop = (targetTop - elementRect.height) - colRect.top + 'px';
            classList.add(COL_BOTTOM_CLASS);
        } else {
           calcTop = (targetTop + targetPosition.height) - colRect.top + 'px';
        }

        elementToPosition.style.cssText += `top:${calcTop};left:${calcLeft}`;

        return elementToPosition;
    }

}