import {Siema} from './siema.js';
import {XtallatX, define, hydrate, AttributeProps} from 'xtal-element/xtal-latx.js';

const linkSiemaInstance = ({self, undraggable, duration, easing, loop, singleDrag, perPage, startIndex, threshold, handleChange}: XtalSiema) => {
    console.log('inLinkiemaInstance')
    self.siemaInstance = new Siema({
        selector: self,
        draggable: !undraggable,
        duration: duration,
        easing: easing,
        loop: loop,
        multipleDrag: !singleDrag,
        perPage: perPage,
        startIndex: startIndex,
        threshold: threshold,
        onChange: function () {
            self.handleChange();
        }
    });
}

const linkGoTo = ({self, siemaInstance, newSelection}: XtalSiema) => {
    if(!siemaInstance || newSelection < 0) return;
    siemaInstance.goTo(newSelection);
    self.resize = true;
}

const invokeResize = ({self, resize}: XtalSiema) =>{
    var event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    self.dispatchEvent(event);
}

/**
 * xta-siema is a web component wrapper around the Siema carousel api 
 * (https://pawelgrzybek.com/siema/ ).
 * @element xtal-siema
 */
class XtalSiema extends XtallatX(hydrate(HTMLElement))  {
    static is = 'xtal-siema';

    readyToInit = true;
    readyToUpdate = true;

    static attributeProps = ({
            selected, siemaInstance, duration, easing, perPage, startIndex, undraggable, singleDrag, threshold, loop,
            attrForSelected, newSelection, resize
    }: XtalSiema) =>({
        bool: [undraggable, singleDrag, loop, resize],
        obj: [siemaInstance],
        num: [duration, perPage, startIndex, threshold, newSelection, selected],
        notify: [selected],
        str: [easing, attrForSelected]
    } as AttributeProps)

    static defaultValues = {
        duration: 200,
        easing: 'ease-out',
        loop: false,
        newSelection: -1,
        perPage: 1,
        startIndex: 0,
        undraggable: false,
        selected: 0,
        singleDrag: false,
        threshold: 20,
    } as XtalSiema;

    propActions = [
        linkSiemaInstance,
        linkGoTo,
        invokeResize
    ]

    siemaInstance: any;

    /**
     * Slide transition duration in milliseconds
     * @attr
     */
    duration!: number;

    /**
     * It is like a CSS transition-timing-function — describes acceleration curve
     * @attr
     */
    easing!: string;
    
    /**
     * The number of slides to be shown. It accepts a number  or an object 
     * for complex responsive layouts.
     * @attr per-page
     */
    perPage!: number;

    /**
     * Index (zero-based) of the starting slide
     * @attr start-index
     */
    startIndex!: number

    /**
     * Do not use dragging and touch swiping
     * @attr undraggable
     */
    undraggable!: boolean;
    
    /**
     * Disallow dragging to move multiple slides.
     * @attr single-drag
     */
    singleDrag!: boolean;
    
    /**
     * Touch and mouse dragging threshold (in px)
     * @attr threshold
     */
    threshold!: number;

    /**
     * Loop the slides around
     * @attr
     */
    loop!: boolean;
    
    /**
     * Index of currently selected slide
     */
    selected!: number;

    attrForSelected!: string;
    
    newSelection!: number;

    resize!: boolean;

    set pageJump(val: number | string){
        const inc = typeof(val) === 'number' ? val : parseInt(val);
        this.newSelection = this.selected + inc;
    }

    handleChange() {
        const childNodes = this.querySelector('div')!.childNodes;
        if (this.attrForSelected && childNodes && childNodes.length > this.selected) {
            const leafNode = childNodes[this.selected].firstChild as HTMLElement;
            if(leafNode) leafNode.removeAttribute(this.attrForSelected);
        }
        this.selected = (this.siemaInstance.currentSlide);
        if (this.attrForSelected && childNodes && childNodes.length > this.selected) {
            const leafNode = childNodes[this.selected].firstChild as HTMLElement;
            if (leafNode) leafNode.setAttribute(this.attrForSelected, '');
        }
    }

}
define(XtalSiema);
