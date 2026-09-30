import gsap from 'gsap';
import { lerp, getMousePos, calcWinsize, getTranslateValues } from './utils';

// Calculate the viewport size
let winsize = typeof window !== 'undefined' ? calcWinsize() : { width: 1920, height: 1080 };
if (typeof window !== 'undefined') {
  window.addEventListener('resize', () => winsize = calcWinsize());
}

// Track the mouse position
let mousepos = { x: 0, y: 0 };
if (typeof window !== 'undefined') {
  window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));
}

export class MagneticFx {
  constructor(el) {
    // DOM elements
    this.DOM = { el: el };
    // amounts the element will translated
    this.renderedStyles = {
      tx: { previous: 0, current: 0, amt: 0.04 },
      ty: { previous: 0, current: 0, amt: 0.04 }
    };
    // calculate size/position
    this.calculateSizePosition();
    // init events
    this.initEvents();
  }
  /**
   * Calculates size and position of element accounting for active translations
   */
  calculateSizePosition() {
    if (typeof window === 'undefined') {
      return;
    }
    // Current scroll
    this.scrollVal = { x: window.scrollX, y: window.scrollY };
    // Get current translated values on the element
    const { x, y } = getTranslateValues(this.DOM.el);
    // Get bounding rect
    const currentBoundingRect = this.DOM.el.getBoundingClientRect();
    // Compute untranslated rect
    this.rect = {
      left: currentBoundingRect.left - (parseFloat(x) || 0),
      top: currentBoundingRect.top - (parseFloat(y) || 0),
      width: currentBoundingRect.width,
      height: currentBoundingRect.height,
    };
  }

  /**
   * Initializes event listeners
   */
  initEvents() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => {
        this.calculateSizePosition();
      });
    }

    this.DOM.el.addEventListener('mouseenter', () => {
      this.calculateSizePosition();
      this.hoverTimeout = setTimeout(() => {
        // Set to last translated values after hovering out
        const { x, y } = getTranslateValues(this.DOM.el);
        this.renderedStyles['tx'].previous = parseFloat(x) || 0;
        this.renderedStyles['ty'].previous = parseFloat(y) || 0;
        // Start the render loop animation (rAF)
        this.loopRender();
      }, 10);
    });

    this.DOM.el.addEventListener('mouseleave', () => {
      if (this.hoverTimeout) {
        clearTimeout(this.hoverTimeout);
      }
      // Stop the render loop animation (rAF)
      this.stopRendering();
      this.renderedStyles['tx'].current = 0;
      this.renderedStyles['ty'].current = 0;
    });
  }
  // start the render loop animation (rAF)
  loopRender() {
    if (!this.requestId) {
      this.requestId = requestAnimationFrame(() => this.render());
    }
  }
  // stop the render loop animation (rAF)
  stopRendering() {
    if (this.requestId) {
      window.cancelAnimationFrame(this.requestId);
      this.requestId = undefined;
    }
  }
  render() {
    this.requestId = undefined;

    const scrollDiff = {
      x: this.scrollVal.x - window.scrollX,
      y: this.scrollVal.y - window.scrollY
    };

    // new values for the translations
    this.renderedStyles['tx'].current = (mousepos.x - (scrollDiff.x + this.rect.left + this.rect.width / 2)) * .3;
    this.renderedStyles['ty'].current = (mousepos.y - (scrollDiff.y + this.rect.top + this.rect.height / 2)) * .3;

    for (const key in this.renderedStyles) {
      this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
    }

    gsap.set(this.DOM.el, {
      x: this.renderedStyles['tx'].previous,
      y: this.renderedStyles['ty'].previous
    })

    this.loopRender();
  }
}
