import Util from 'util/Util';
/**
 * @type {string}
 */
const CLASS_NAMES_TOOLTIP = 'tooltip-container';
/**
 * @type {string}
 */
const CLASS_NAMES_OPEN = 'open';

var doc = global.document;

/**
 * Simple Tooltip
 */
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

        Util.setupPositionNearby(target, tooltipContainer, this.container, true, true);

        tooltipContainer.classList.add(CLASS_NAMES_OPEN);

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