
    //@ts-check
    (function () {
    function define(custEl) {
    let tagName = custEl.is;
    if (customElements.get(tagName)) {
        console.warn('Already registered ' + tagName);
        return;
    }
    customElements.define(tagName, custEl);
}
const disabled = 'disabled';
/**
 * Base class for many xtal- components
 * @param superClass
 */
function XtallatX(superClass) {
    return class extends superClass {
        constructor() {
            super(...arguments);
            this._evCount = {};
        }
        static get observedAttributes() {
            return [disabled];
        }
        /**
         * Any component that emits events should not do so if it is disabled.
         * Note that this is not enforced, but the disabled property is made available.
         * Users of this mix-in should ensure not to call "de" if this property is set to true.
         */
        get disabled() {
            return this._disabled;
        }
        set disabled(val) {
            this.attr(disabled, val, '');
        }
        /**
         * Set attribute value.
         * @param name
         * @param val
         * @param trueVal String to set attribute if true.
         */
        attr(name, val, trueVal) {
            const v = val ? 'set' : 'remove'; //verb
            this[v + 'Attribute'](name, trueVal || val);
        }
        /**
         * Turn number into string with even and odd values easy to query via css.
         * @param n
         */
        to$(n) {
            const mod = n % 2;
            return (n - mod) / 2 + '-' + mod;
        }
        /**
         * Increment event count
         * @param name
         */
        incAttr(name) {
            const ec = this._evCount;
            if (name in ec) {
                ec[name]++;
            }
            else {
                ec[name] = 0;
            }
            this.attr('data-' + name, this.to$(ec[name]));
        }
        attributeChangedCallback(name, oldVal, newVal) {
            switch (name) {
                case disabled:
                    this._disabled = newVal !== null;
                    break;
            }
        }
        /**
         * Dispatch Custom Event
         * @param name Name of event to dispatch ("-changed" will be appended if asIs is false)
         * @param detail Information to be passed with the event
         * @param asIs If true, don't append event name with '-changed'
         */
        de(name, detail, asIs) {
            const eventName = name + (asIs ? '' : '-changed');
            const newEvent = new CustomEvent(eventName, {
                detail: detail,
                bubbles: true,
                composed: false,
            });
            this.dispatchEvent(newEvent);
            this.incAttr(eventName);
            return newEvent;
        }
        /**
         * Needed for asynchronous loading
         * @param props Array of property names to "upgrade", without losing value set while element was Unknown
         */
        _upgradeProperties(props) {
            props.forEach(prop => {
                if (this.hasOwnProperty(prop)) {
                    let value = this[prop];
                    delete this[prop];
                    this[prop] = value;
                }
            });
        }
    };
}
/**
 * Hi :-) This is a class representing a Siema.
 */
 class Siema {
    /**
     * Create a Siema.
     * @param {Object} options - Optional settings object.
     */
    constructor(options) {
      // Merge defaults with user's settings
      this.config = Siema.mergeSettings(options);
  
      // Resolve selector's type
      this.selector = typeof this.config.selector === 'string' ? document.querySelector(this.config.selector) : this.config.selector;
  
      // Early throw if selector doesn't exists
      if (this.selector === null) {
        throw new Error('Something wrong with your selector 😭');
      }
  
      // update perPage number dependable of user value
      this.resolveSlidesNumber();
  
      // Create global references
      this.selectorWidth = this.selector.offsetWidth;
      this.innerElements = [].slice.call(this.selector.children);
      this.currentSlide = this.config.loop ?
        this.config.startIndex % this.innerElements.length :
        Math.max(0, Math.min(this.config.startIndex, this.innerElements.length - this.perPage));
      this.transformProperty = Siema.webkitOrNot();
  
      // Bind all event handlers for referencability
      ['resizeHandler', 'touchstartHandler', 'touchendHandler', 'touchmoveHandler', 'mousedownHandler', 'mouseupHandler', 'mouseleaveHandler', 'mousemoveHandler', 'clickHandler'].forEach(method => {
        this[method] = this[method].bind(this);
      });
  
      // Build markup and apply required styling to elements
      this.init();
    }
  
  
    /**
     * Overrides default settings with custom ones.
     * @param {Object} options - Optional settings object.
     * @returns {Object} - Custom Siema settings.
     */
    static mergeSettings(options) {
      const settings = {
        selector: '.siema',
        duration: 200,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: false,
        rtl: false,
        onInit: () => {},
        onChange: () => {},
      };
  
      const userSttings = options;
      for (const attrname in userSttings) {
        settings[attrname] = userSttings[attrname];
      }
  
      return settings;
    }
  
  
    /**
     * Determine if browser supports unprefixed transform property.
     * Google Chrome since version 26 supports prefix-less transform
     * @returns {string} - Transform property supported by client.
     */
    static webkitOrNot() {
      const style = document.documentElement.style;
      if (typeof style.transform === 'string') {
        return 'transform';
      }
      return 'WebkitTransform';
    }
  
    /**
     * Attaches listeners to required events.
     */
    attachEvents() {
      // Resize element on window resize
      window.addEventListener('resize', this.resizeHandler);
  
      // If element is draggable / swipable, add event handlers
      if (this.config.draggable) {
        // Keep track pointer hold and dragging distance
        this.pointerDown = false;
        this.drag = {
          startX: 0,
          endX: 0,
          startY: 0,
          letItGo: null,
          preventClick: false,
        };
  
        // Touch events
        this.selector.addEventListener('touchstart', this.touchstartHandler);
        this.selector.addEventListener('touchend', this.touchendHandler);
        this.selector.addEventListener('touchmove', this.touchmoveHandler);
  
        // Mouse events
        this.selector.addEventListener('mousedown', this.mousedownHandler);
        this.selector.addEventListener('mouseup', this.mouseupHandler);
        this.selector.addEventListener('mouseleave', this.mouseleaveHandler);
        this.selector.addEventListener('mousemove', this.mousemoveHandler);
  
        // Click
        this.selector.addEventListener('click', this.clickHandler);
      }
    }
  
  
    /**
     * Detaches listeners from required events.
     */
    detachEvents() {
      window.removeEventListener('resize', this.resizeHandler);
      this.selector.removeEventListener('touchstart', this.touchstartHandler);
      this.selector.removeEventListener('touchend', this.touchendHandler);
      this.selector.removeEventListener('touchmove', this.touchmoveHandler);
      this.selector.removeEventListener('mousedown', this.mousedownHandler);
      this.selector.removeEventListener('mouseup', this.mouseupHandler);
      this.selector.removeEventListener('mouseleave', this.mouseleaveHandler);
      this.selector.removeEventListener('mousemove', this.mousemoveHandler);
      this.selector.removeEventListener('click', this.clickHandler);
    }
  
  
    /**
     * Builds the markup and attaches listeners to required events.
     */
    init() {
      this.attachEvents();
  
      // hide everything out of selector's boundaries
      this.selector.style.overflow = 'hidden';
  
      // rtl or ltr
      this.selector.style.direction = this.config.rtl ? 'rtl' : 'ltr';
  
      // build a frame and slide to a currentSlide
      this.buildSliderFrame();
  
      this.config.onInit.call(this);
    }
  
  
    /**
     * Build a sliderFrame and slide to a current item.
     */
    buildSliderFrame() {
      const widthItem = this.selectorWidth / this.perPage;
      const itemsToBuild = this.config.loop ? this.innerElements.length + (2 * this.perPage) : this.innerElements.length;
  
      // Create frame and apply styling
      this.sliderFrame = document.createElement('div');
      this.sliderFrame.style.width = `${widthItem * itemsToBuild}px`;
      this.enableTransition();
  
      if (this.config.draggable) {
        this.selector.style.cursor = '-webkit-grab';
      }
  
      // Create a document fragment to put slides into it
      const docFragment = document.createDocumentFragment();
  
      // Loop through the slides, add styling and add them to document fragment
      if (this.config.loop) {
        for (let i = this.innerElements.length - this.perPage; i < this.innerElements.length; i++) {
          const element = this.buildSliderFrameItem(this.innerElements[i].cloneNode(true));
          docFragment.appendChild(element);
        }
      }
      for (let i = 0; i < this.innerElements.length; i++) {
        const element = this.buildSliderFrameItem(this.innerElements[i]);
        docFragment.appendChild(element);
      }
      if (this.config.loop) {
        for (let i = 0; i < this.perPage; i++) {
          const element = this.buildSliderFrameItem(this.innerElements[i].cloneNode(true));
          docFragment.appendChild(element);
        }
      }
  
      // Add fragment to the frame
      this.sliderFrame.appendChild(docFragment);
  
      // Clear selector (just in case something is there) and insert a frame
      this.selector.innerHTML = '';
      this.selector.appendChild(this.sliderFrame);
  
      // Go to currently active slide after initial build
      this.slideToCurrent();
    }
  
    buildSliderFrameItem(elm) {
      const elementContainer = document.createElement('div');
      elementContainer.style.cssFloat = this.config.rtl ? 'right' : 'left';
      elementContainer.style.float = this.config.rtl ? 'right' : 'left';
      elementContainer.style.width = `${this.config.loop ? 100 / (this.innerElements.length + (this.perPage * 2)) : 100 / (this.innerElements.length)}%`;
      elementContainer.appendChild(elm);
      return elementContainer;
    }
  
  
    /**
     * Determinates slides number accordingly to clients viewport.
     */
    resolveSlidesNumber() {
      if (typeof this.config.perPage === 'number') {
        this.perPage = this.config.perPage;
      }
      else if (typeof this.config.perPage === 'object') {
        this.perPage = 1;
        for (const viewport in this.config.perPage) {
          if (window.innerWidth >= viewport) {
            this.perPage = this.config.perPage[viewport];
          }
        }
      }
    }
  
  
    /**
     * Go to previous slide.
     * @param {number} [howManySlides=1] - How many items to slide backward.
     * @param {function} callback - Optional callback function.
     */
    prev(howManySlides = 1, callback) {
      // early return when there is nothing to slide
      if (this.innerElements.length <= this.perPage) {
        return;
      }
  
      const beforeChange = this.currentSlide;
  
      if (this.config.loop) {
        const isNewIndexClone = this.currentSlide - howManySlides < 0;
        if (isNewIndexClone) {
          this.disableTransition();
  
          const mirrorSlideIndex = this.currentSlide + this.innerElements.length;
          const mirrorSlideIndexOffset = this.perPage;
          const moveTo = mirrorSlideIndex + mirrorSlideIndexOffset;
          const offset = (this.config.rtl ? 1 : -1) * moveTo * (this.selectorWidth / this.perPage);
          const dragDistance = this.config.draggable ? this.drag.endX - this.drag.startX : 0;
  
          this.sliderFrame.style[this.transformProperty] = `translate3d(${offset + dragDistance}px, 0, 0)`;
          this.currentSlide = mirrorSlideIndex - howManySlides;
        }
        else {
          this.currentSlide = this.currentSlide - howManySlides;
        }
      }
      else {
        this.currentSlide = Math.max(this.currentSlide - howManySlides, 0);
      }
  
      if (beforeChange !== this.currentSlide) {
        this.slideToCurrent(this.config.loop);
        this.config.onChange.call(this);
        if (callback) {
          callback.call(this);
        }
      }
    }
  
  
    /**
     * Go to next slide.
     * @param {number} [howManySlides=1] - How many items to slide forward.
     * @param {function} callback - Optional callback function.
     */
    next(howManySlides = 1, callback) {
      // early return when there is nothing to slide
      if (this.innerElements.length <= this.perPage) {
        return;
      }
  
      const beforeChange = this.currentSlide;
  
      if (this.config.loop) {
        const isNewIndexClone = this.currentSlide + howManySlides > this.innerElements.length - this.perPage;
        if (isNewIndexClone) {
          this.disableTransition();
  
          const mirrorSlideIndex = this.currentSlide - this.innerElements.length;
          const mirrorSlideIndexOffset = this.perPage;
          const moveTo = mirrorSlideIndex + mirrorSlideIndexOffset;
          const offset = (this.config.rtl ? 1 : -1) * moveTo * (this.selectorWidth / this.perPage);
          const dragDistance = this.config.draggable ? this.drag.endX - this.drag.startX : 0;
  
          this.sliderFrame.style[this.transformProperty] = `translate3d(${offset + dragDistance}px, 0, 0)`;
          this.currentSlide = mirrorSlideIndex + howManySlides;
        }
        else {
          this.currentSlide = this.currentSlide + howManySlides;
        }
      }
      else {
        this.currentSlide = Math.min(this.currentSlide + howManySlides, this.innerElements.length - this.perPage);
      }
      if (beforeChange !== this.currentSlide) {
        this.slideToCurrent(this.config.loop);
        this.config.onChange.call(this);
        if (callback) {
          callback.call(this);
        }
      }
    }
  
  
    /**
     * Disable transition on sliderFrame.
     */
    disableTransition() {
      this.sliderFrame.style.webkitTransition = `all 0ms ${this.config.easing}`;
      this.sliderFrame.style.transition = `all 0ms ${this.config.easing}`;
    }
  
  
    /**
     * Enable transition on sliderFrame.
     */
    enableTransition() {
      this.sliderFrame.style.webkitTransition = `all ${this.config.duration}ms ${this.config.easing}`;
      this.sliderFrame.style.transition = `all ${this.config.duration}ms ${this.config.easing}`;
    }
  
  
    /**
     * Go to slide with particular index
     * @param {number} index - Item index to slide to.
     * @param {function} callback - Optional callback function.
     */
    goTo(index, callback) {
      if (this.innerElements.length <= this.perPage) {
        return;
      }
      const beforeChange = this.currentSlide;
      this.currentSlide = this.config.loop ?
        index % this.innerElements.length :
        Math.min(Math.max(index, 0), this.innerElements.length - this.perPage);
      if (beforeChange !== this.currentSlide) {
        this.slideToCurrent();
        this.config.onChange.call(this);
        if (callback) {
          callback.call(this);
        }
      }
    }
  
  
    /**
     * Moves sliders frame to position of currently active slide
     */
    slideToCurrent(enableTransition) {
      const currentSlide = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide;
      const offset = (this.config.rtl ? 1 : -1) * currentSlide * (this.selectorWidth / this.perPage);
  
      if (enableTransition) {
        // This one is tricky, I know but this is a perfect explanation:
        // https://youtu.be/cCOL7MC4Pl0
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.enableTransition();
            this.sliderFrame.style[this.transformProperty] = `translate3d(${offset}px, 0, 0)`;
          });
        });
      }
      else {
        this.sliderFrame.style[this.transformProperty] = `translate3d(${offset}px, 0, 0)`;
      }
    }
  
  
    /**
     * Recalculate drag /swipe event and reposition the frame of a slider
     */
    updateAfterDrag() {
      const movement = (this.config.rtl ? -1 : 1) * (this.drag.endX - this.drag.startX);
      const movementDistance = Math.abs(movement);
      const howManySliderToSlide = this.config.multipleDrag ? Math.ceil(movementDistance / (this.selectorWidth / this.perPage)) : 1;
  
      const slideToNegativeClone = movement > 0 && this.currentSlide - howManySliderToSlide < 0;
      const slideToPositiveClone = movement < 0 && this.currentSlide + howManySliderToSlide > this.innerElements.length - this.perPage;
  
      if (movement > 0 && movementDistance > this.config.threshold && this.innerElements.length > this.perPage) {
        this.prev(howManySliderToSlide);
      }
      else if (movement < 0 && movementDistance > this.config.threshold && this.innerElements.length > this.perPage) {
        this.next(howManySliderToSlide);
      }
      this.slideToCurrent(slideToNegativeClone || slideToPositiveClone);
    }
  
  
    /**
     * When window resizes, resize slider components as well
     */
    resizeHandler() {
      // update perPage number dependable of user value
      this.resolveSlidesNumber();
  
      // relcalculate currentSlide
      // prevent hiding items when browser width increases
      if (this.currentSlide + this.perPage > this.innerElements.length) {
        this.currentSlide = this.innerElements.length <= this.perPage ? 0 : this.innerElements.length - this.perPage;
      }
  
      this.selectorWidth = this.selector.offsetWidth;
  
      this.buildSliderFrame();
    }
  
  
    /**
     * Clear drag after touchend and mouseup event
     */
    clearDrag() {
      this.drag = {
        startX: 0,
        endX: 0,
        startY: 0,
        letItGo: null,
        preventClick: this.drag.preventClick
      };
    }
  
  
    /**
     * touchstart event handler
     */
    touchstartHandler(e) {
      // Prevent dragging / swiping on inputs, selects and textareas
      const ignoreSiema = ['TEXTAREA', 'OPTION', 'INPUT', 'SELECT'].indexOf(e.target.nodeName) !== -1;
      if (ignoreSiema) {
        return;
      }
  
      e.stopPropagation();
      this.pointerDown = true;
      this.drag.startX = e.touches[0].pageX;
      this.drag.startY = e.touches[0].pageY;
    }
  
  
    /**
     * touchend event handler
     */
    touchendHandler(e) {
      e.stopPropagation();
      this.pointerDown = false;
      this.enableTransition();
      if (this.drag.endX) {
        this.updateAfterDrag();
      }
      this.clearDrag();
    }
  
  
    /**
     * touchmove event handler
     */
    touchmoveHandler(e) {
      e.stopPropagation();
  
      if (this.drag.letItGo === null) {
        this.drag.letItGo = Math.abs(this.drag.startY - e.touches[0].pageY) < Math.abs(this.drag.startX - e.touches[0].pageX);
      }
  
      if (this.pointerDown && this.drag.letItGo) {
        e.preventDefault();
        this.drag.endX = e.touches[0].pageX;
        this.sliderFrame.style.webkitTransition = `all 0ms ${this.config.easing}`;
        this.sliderFrame.style.transition = `all 0ms ${this.config.easing}`;
  
        const currentSlide = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide;
        const currentOffset = currentSlide * (this.selectorWidth / this.perPage);
        const dragOffset = (this.drag.endX - this.drag.startX);
        const offset = this.config.rtl ? currentOffset + dragOffset : currentOffset - dragOffset;
        this.sliderFrame.style[this.transformProperty] = `translate3d(${(this.config.rtl ? 1 : -1) * offset}px, 0, 0)`;
      }
    }
  
  
    /**
     * mousedown event handler
     */
    mousedownHandler(e) {
      // Prevent dragging / swiping on inputs, selects and textareas
      const ignoreSiema = ['TEXTAREA', 'OPTION', 'INPUT', 'SELECT'].indexOf(e.target.nodeName) !== -1;
      if (ignoreSiema) {
        return;
      }
  
      e.preventDefault();
      e.stopPropagation();
      this.pointerDown = true;
      this.drag.startX = e.pageX;
    }
  
  
    /**
     * mouseup event handler
     */
    mouseupHandler(e) {
      e.stopPropagation();
      this.pointerDown = false;
      this.selector.style.cursor = '-webkit-grab';
      this.enableTransition();
      if (this.drag.endX) {
        this.updateAfterDrag();
      }
      this.clearDrag();
    }
  
  
    /**
     * mousemove event handler
     */
    mousemoveHandler(e) {
      e.preventDefault();
      if (this.pointerDown) {
        // if dragged element is a link
        // mark preventClick prop as a true
        // to detemine about browser redirection later on
        if (e.target.nodeName === 'A') {
          this.drag.preventClick = true;
        }
  
        this.drag.endX = e.pageX;
        this.selector.style.cursor = '-webkit-grabbing';
        this.sliderFrame.style.webkitTransition = `all 0ms ${this.config.easing}`;
        this.sliderFrame.style.transition = `all 0ms ${this.config.easing}`;
  
        const currentSlide = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide;
        const currentOffset = currentSlide * (this.selectorWidth / this.perPage);
        const dragOffset = (this.drag.endX - this.drag.startX);
        const offset = this.config.rtl ? currentOffset + dragOffset : currentOffset - dragOffset;
        this.sliderFrame.style[this.transformProperty] = `translate3d(${(this.config.rtl ? 1 : -1) * offset}px, 0, 0)`;
      }
    }
  
  
    /**
     * mouseleave event handler
     */
    mouseleaveHandler(e) {
      if (this.pointerDown) {
        this.pointerDown = false;
        this.selector.style.cursor = '-webkit-grab';
        this.drag.endX = e.pageX;
        this.drag.preventClick = false;
        this.enableTransition();
        this.updateAfterDrag();
        this.clearDrag();
      }
    }
  
  
    /**
     * click event handler
     */
    clickHandler(e) {
      // if the dragged element is a link
      // prevent browsers from folowing the link
      if (this.drag.preventClick) {
        e.preventDefault();
      }
      this.drag.preventClick = false;
    }
  
  
    /**
     * Remove item from carousel.
     * @param {number} index - Item index to remove.
     * @param {function} callback - Optional callback to call after remove.
     */
    remove(index, callback) {
      if (index < 0 || index >= this.innerElements.length) {
        throw new Error('Item to remove doesn\'t exist 😭');
      }
  
      // Shift sliderFrame back by one item when:
      // 1. Item with lower index than currenSlide is removed.
      // 2. Last item is removed.
      const lowerIndex = index < this.currentSlide;
      const lastItem = this.currentSlide + this.perPage - 1 === index;
  
      if (lowerIndex || lastItem) {
        this.currentSlide--;
      }
  
      this.innerElements.splice(index, 1);
  
      // build a frame and slide to a currentSlide
      this.buildSliderFrame();
  
      if (callback) {
        callback.call(this);
      }
    }
  
  
    /**
     * Insert item to carousel at particular index.
     * @param {HTMLElement} item - Item to insert.
     * @param {number} index - Index of new new item insertion.
     * @param {function} callback - Optional callback to call after insert.
     */
    insert(item, index, callback) {
      if (index < 0 || index > this.innerElements.length + 1) {
        throw new Error('Unable to inset it at this index 😭');
      }
      if (this.innerElements.indexOf(item) !== -1) {
        throw new Error('The same item in a carousel? Really? Nope 😭');
      }
  
      // Avoid shifting content
      const shouldItShift = index <= this.currentSlide > 0 && this.innerElements.length;
      this.currentSlide = shouldItShift ? this.currentSlide + 1 : this.currentSlide;
  
      this.innerElements.splice(index, 0, item);
  
      // build a frame and slide to a currentSlide
      this.buildSliderFrame();
  
      if (callback) {
        callback.call(this);
      }
    }
  
  
    /**
     * Prepernd item to carousel.
     * @param {HTMLElement} item - Item to prepend.
     * @param {function} callback - Optional callback to call after prepend.
     */
    prepend(item, callback) {
      this.insert(item, 0);
      if (callback) {
        callback.call(this);
      }
    }
  
  
    /**
     * Append item to carousel.
     * @param {HTMLElement} item - Item to append.
     * @param {function} callback - Optional callback to call after append.
     */
    append(item, callback) {
      this.insert(item, this.innerElements.length + 1);
      if (callback) {
        callback.call(this);
      }
    }
  
  
    /**
     * Removes listeners and optionally restores to initial markup
     * @param {boolean} restoreMarkup - Determinants about restoring an initial markup.
     * @param {function} callback - Optional callback function.
     */
    destroy(restoreMarkup = false, callback) {
      this.detachEvents();
  
      this.selector.style.cursor = 'auto';
  
      if (restoreMarkup) {
        const slides = document.createDocumentFragment();
        for (let i = 0; i < this.innerElements.length; i++) {
          slides.appendChild(this.innerElements[i]);
        }
        this.selector.innerHTML = '';
        this.selector.appendChild(slides);
        this.selector.removeAttribute('style');
      }
  
      if (callback) {
        callback.call(this);
      }
    }
  }
const duration = 'duration';
const easing = 'easing';
const per_page = 'per-page';
const start_index = 'start-index';
const undraggable = 'undraggable';
const single_drag = 'single-drag';
const threshold = 'threshold';
const loop = 'loop';
const selected = 'selected';
const attr_for_selected = 'attr-for-selected';
const new_selection = 'new-selection';
/**
 * <xtal-siema></xtal-siema> is a vanilla web component wrapper around the Siema caousel api
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
    connectToSiema() {
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
    set pageJump(val) {
        const inc = typeof (val) === 'number' ? val : parseInt(val);
        this.newSelection = this.selected + inc;
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
            const leafNode = childNodes[this.selected].firstChild;
            if (leafNode)
                leafNode.removeAttribute(this.attrForSelected);
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
        this.connectToSiema();
        setTimeout(() => {
            this.invokeResizeHack();
        }, 100);
    }
}
define(XtalSiema);
    })();  
        