import { Siema } from './siema.js';
import { XtallatX, define, hydrate } from 'xtal-element/xtal-latx.js';
const linkSiemaInstance = ({ self, undraggable, duration, easing, loop, singleDrag, perPage, startIndex, threshold }) => {
    console.log('inLinkiemaInstance');
    self.style.display = 'block';
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
};
const linkGoTo = ({ self, siemaInstance, newSelection }) => {
    if (!siemaInstance || newSelection < 0)
        return;
    siemaInstance.goTo(newSelection);
    self.resize = true;
};
const invokeResize = ({ self, resize }) => {
    var event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    self.dispatchEvent(event);
};
/**
 * xta-siema is a web component wrapper around the Siema carousel api
 * (https://pawelgrzybek.com/siema/ ).
 * @element xtal-siema
 */
class XtalSiema extends XtallatX(hydrate(HTMLElement)) {
    constructor() {
        super(...arguments);
        this.readyToInit = true;
        this.readyToUpdate = true;
        this.propActions = [
            linkSiemaInstance,
            linkGoTo,
            invokeResize
        ];
    }
    set pageJump(val) {
        const inc = typeof (val) === 'number' ? val : parseInt(val);
        this.newSelection = this.selected + inc;
    }
    handleChange() {
        const childNodes = this.querySelector('div').childNodes;
        if (this.attrForSelected && childNodes && childNodes.length > this.selected) {
            const leafNode = childNodes[this.selected].firstChild;
            if (leafNode)
                leafNode.removeAttribute(this.attrForSelected);
        }
        this.selected = (this.siemaInstance.currentSlide);
        if (this.attrForSelected && childNodes && childNodes.length > this.selected) {
            const leafNode = childNodes[this.selected].firstChild;
            if (leafNode)
                leafNode.setAttribute(this.attrForSelected, '');
        }
    }
}
XtalSiema.is = 'xtal-siema';
XtalSiema.attributeProps = ({ selected, siemaInstance, duration, easing, perPage, startIndex, undraggable, singleDrag, threshold, loop, attrForSelected, newSelection, resize }) => ({
    bool: [undraggable, singleDrag, loop, resize],
    obj: [siemaInstance],
    num: [duration, perPage, startIndex, threshold, newSelection, selected],
    notify: [selected],
    str: [easing, attrForSelected],
    reflect: [selected, newSelection]
});
XtalSiema.defaultValues = {
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
};
define(XtalSiema);
