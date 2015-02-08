const CLASS_NAMES_TOOLTIP = 'tooltip-container';
const CLASS_NAMES_TOP = 'arrow-top';
const CLASS_NAMES_BOTTOM = 'arrow-bottom';
const CLASS_NAMES_OPEN = 'open';
var doc = document;

export default
class Tooltip {

    /**
     * Creates a Tooltip
     * @param {HTMLElement|String} DelegateContainer
     * @param {Object} options
     */
    constructor(DelegateContainer, options) {

        /**
         * The Container where possible events are captured
         */
        this.container = DelegateContainer instanceof HTMLElement ?
            DelegateContainer : doc.getElementById(DelegateContainer);

        if (!this.container) {
            throw 'Could not create Tooltip, DelegateContainer not found';
        }

        /**
         * The Container where tooltips are stored for this instance
         * @type {HTMLElement}
         */
        this.tooltipContainer = null;

        /**
         * Default Options
         */
        this.options = {
            containerClass: ''
        };

        Object.assign(this.options, options);
    }

    /**
     * Creates and shows a tooltip
     * @param {HTMLElement} target where is this tooltip positioned
     * @param {String} text text content in tooltip, will be NOT escaped
     * @param {Boolean} removeTitle removes title element if given
     */
    createTooltip(target, text, removeTitle) {
        // abort if text is empty
        var self = this;
        if (!text || text && text.trim() === '') {
            return;
        }
        var tooltipContainer = this.tooltipContainer;

        if (!tooltipContainer) {
            tooltipContainer = doc.createElement('div');
            tooltipContainer.className = [CLASS_NAMES_TOOLTIP, self.options.containerClass].join(" ");
            this.container.appendChild(tooltipContainer);
            this.tooltipContainer = tooltipContainer;
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
            colRect = this.container.getBoundingClientRect();

        // detect if we have a collision with top/or bottom, we do not support left/right
        var containerRect = tooltipContainer.getBoundingClientRect(), targetTop = targetRect.top,
            isCollisionTop = 0 >= (targetTop - containerRect.height),
            classList = tooltipContainer.classList;
        if (isCollisionTop) {
            tooltipContainer.style.top = (targetRect.bottom) - colRect.top + 'px';
            classList.remove(CLASS_NAMES_BOTTOM);
            classList.add(CLASS_NAMES_TOP);
        } else {
            classList.remove(CLASS_NAMES_TOP);
            classList.add(CLASS_NAMES_BOTTOM);
            tooltipContainer.style.top = (targetTop - containerRect.height) - colRect.top + 'px';
        }
        tooltipContainer.style.left = ((targetRect.left + targetRect.width / 2) -
        (containerRect.width / 2) || 0) - colRect.left + 'px';
        classList.add(CLASS_NAMES_OPEN);

    }

    /**
     * Removes a Tooltip on given target
     * @param {HTMLElement} target
     */
    removeTooltip(target) {
        if (this.tooltipContainer) {
            if (this.tooltipContainer.flexTooltipCurrentTarget !== target) {
                return;
            }
            this.tooltipContainer.classList.remove('open');
        }
        if (target.oldTitle) {
            target.setAttribute('title', target.oldTitle);
        }
    }

    /**
     * Initilizes mouse events on container element
     */
    registerEvents() {
        var self = this;
        this.container.addEventListener('mouseover', function (e) {
            if (e.target.hasAttribute('data-tooltip')) {
                self.createTooltip(e.target, e.target.getAttribute('title'), true);
            }
        });

        this.container.addEventListener('mouseout', function (e) {
            if (e.target.hasAttribute('data-tooltip')) {
                self.removeTooltip(e.target);
            }
        });
        return this;
    }
}