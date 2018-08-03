import Siema from './siema.js';
import { XtallatX } from 'xtal-latx/xtal-latx.js';
const duration = 'duration';
const easing = 'easing';
const per_page = 'per-page';
const start_index = 'start-index';
const undraggable = 'undraggable';
const single_drag = 'sinle-drag';
const threshold = 'threshold';
const loop = 'loop';
const selected = 'selected';
const attr_for_selected = 'attr-for-selected';
const new_selection = 'new-selection';
/**
 * <xtal-siema></xtal-siema> is a vanilla-ish wrapper around the Siema caousel api
 * (https://pawelgrzybek.com/siema/ ).
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class XtalSiema extends XtallatX(HTMLElement) {
    constructor() {
        super(...arguments);
        this._duration = 200;
        this._easing = 'ease-out';
        this._perPage = 1;
        this._startIndex = 0;
        this._undraggable = false;
        this._singleDrag = false;
        this._threshold = 20;
        this._newSelection = -1;
        this._connected = false;
    }
    get SiemaInstance() {
        return this._siemaInstance;
    }
    static get is() { return 'xtal-siema'; }
    /**
     * Slide transition duration in milliseconds
     */
    get duration() {
        return this._duration;
    }
    set duration(val) {
        this.attr(duration, val.toString());
    }
    /**
 * It is like a CSS transition-timing-function — describes acceleration curve
 */
    get easing() {
        return this._easing;
    }
    set easing(val) {
        this.attr(easing, val);
    }
    /**
 * The number of slides to be shown. It accepts a number  or an object
 * for complex responsive layouts.
 */
    get perPage() {
        return this._perPage;
    }
    set perPage(val) {
        this.attr(per_page, val.toString());
    }
    /**
 * Index (zero-based) of the starting slide
 */
    get startIndex() {
        return this._startIndex;
    }
    set startIndex(val) {
        this.attr(start_index, val.toString());
    }
    /**
 * Do not use dragging and touch swiping
 */
    get undraggable() {
        return this._undraggable;
    }
    set undraggable(val) {
        this.attr(undraggable, val, '');
    }
    /**
 * Disallow dragging to move multiple slides.
 */
    get singleDrag() {
        return this._singleDrag;
    }
    set singleDrag(val) {
        this.attr(single_drag, val, '');
    }
    /**
 * Touch and mouse dragging threshold (in px)
 */
    get threshold() {
        return this._threshold;
    }
    set threshold(val) {
        this.attr(threshold, val.toString());
    }
    /**
     * Loop the slides around
     */
    get loop() {
        return this._loop;
    }
    set loop(val) {
        this.attr(loop, val, '');
    }
    get selected() {
        return this._selected;
    }
    set selected(val) {
        this._selected = val;
        this.de('selected', {
            value: val
        });
        this.attr(selected, val.toString());
    }
    get attrForSelected() {
        return this._attrForSelected;
    }
    set attrForSelected(val) {
        this.attr(attr_for_selected, val);
    }
    get newSelection() {
        return this._newSelection;
    }
    set newSelection(val) {
        this.attr(new_selection, val.toString());
    }
    static get observedAttributes() {
        return super.observedAttributes.concat([duration, easing, per_page, start_index, undraggable, single_drag, threshold, loop, attr_for_selected, new_selection]);
    }
    snakeToCamel(s) {
        return s.replace(/(\-\w)/g, function (m) { return m[1].toUpperCase(); });
    }
    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
        const unme = '_' + this.snakeToCamel(name);
        let action = 'connectToSiema';
        switch (name) {
            case per_page:
            case duration:
            case start_index:
            case threshold:
            case new_selection:
                this[unme] = parseFloat(newVal);
                break;
            case easing:
            case attr_for_selected:
                this[unme] = newVal;
                break;
            case undraggable:
            case single_drag:
            case loop:
                this[unme] = newVal !== null;
                break;
            case new_selection:
                this[unme] = parseFloat(newVal);
                action = 'onNewSelection';
                break;
        }
        this[action]();
    }
    connectToSiemma() {
        if (!this._connected)
            return;
        const _this = this;
        this._siemaInstance = new Siema({
            selector: this,
            draggable: !this.undraggable,
            duration: this.duration,
            easing: this.easing,
            loop: this.loop,
            multipleDrag: !this.singleDrag,
            perPage: this.perPage,
            startIndex: this.startIndex,
            threshold: this.threshold,
            onChange: function () {
                _this.handleChange();
            }
        });
    }
    onNewSelection() {
        if (this.newSelection < 0)
            return;
        if (!this._siemaInstance)
            return;
        //debugger;
        this._siemaInstance.goTo(this.newSelection);
        this.invokeResizeHack();
        //this['_setSelected'](this.newSelection);
    }
    invokeResizeHack() {
        var event = document.createEvent('HTMLEvents');
        event.initEvent('resize', true, false);
        this.dispatchEvent(event);
    }
    handleChange() {
        if (!this._siemaInstance)
            return;
        const childNodes = this.querySelector('div').childNodes;
        if (this.attrForSelected && childNodes && childNodes.length > this.selected) {
            childNodes[this.selected].removeAttribute(this.attrForSelected);
        }
        this.selected = (this._siemaInstance.currentSlide);
        if (this.attrForSelected && childNodes && childNodes.length > this.selected) {
            const leafNode = childNodes[this.selected].firstChild;
            if (leafNode)
                leafNode.setAttribute(this.attrForSelected, '');
        }
    }
    connectedCallback() {
        this._upgradeProperties(XtalSiema.observedAttributes.map(name => this.snakeToCamel(name)).concat('selected'));
        this._connected = true;
        this.style.display = 'block';
        this.selected = 0;
        this.connectToSiemma();
        setTimeout(() => {
            this.invokeResizeHack();
        }, 100);
    }
}
customElements.define(XtalSiema.is, XtalSiema);
//# sourceMappingURL=xtal-siema.js.map