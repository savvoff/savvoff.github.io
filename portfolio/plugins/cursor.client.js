import { gsap } from 'gsap';
import { lerp, getMousePos } from './js/utils';

// Track the mouse position
let mouse = { x: 0, y: 0 };
window.addEventListener('mousemove', ev => mouse = getMousePos(ev));

export class Cursor {
  constructor(el) {
    this.DOM = { el: el };
    this.DOM.svg = this.DOM.el.querySelector('.cursor__svg');
    this.DOM.circle = this.DOM.svg.querySelector('.cursor__svg-circle');
    this.DOM.circle.style.transformOrigin = '50% 50%';
    this.DOM.text = this.DOM.el.querySelector('.cursor__text');

    this.DOM.el.style.opacity = 0;

    this.bounds = this.DOM.svg.getBoundingClientRect();

    this.renderedStyles = {
      tx: { previous: 0, current: 0, amt: 0.2 },
      ty: { previous: 0, current: 0, amt: 0.2 },
      txTrail: { previous: 0, current: 0, amt: 0.03 },
      tyTrail: { previous: 0, current: 0, amt: 0.03 },
      txText: { previous: 0, current: 0, amt: 0.1 },
      tyText: { previous: 0, current: 0, amt: 0.1 },
      scale: { previous: 1, current: 1, amt: 0.15 },
      scaleTrail: { previous: 0, current: 0, amt: 0.01 }
    };

    this.makeTrail();

    this.onMouseMoveEv = this.updateRender.bind(this);

    this.addEventListeners();
  }

  updateRender() {
    this.renderedStyles.tx.previous = this.renderedStyles.tx.current
      = this.renderedStyles.txTrail.current = this.renderedStyles.txText.previous
      = this.renderedStyles.txText.current
      = mouse.x - this.bounds.width / 2;
    this.renderedStyles.ty.previous = this.renderedStyles.ty.current
      = this.renderedStyles.tyTrail.current = this.renderedStyles.tyText.previous
      = this.renderedStyles.tyText.current
      = mouse.y - this.bounds.height / 2;

    gsap.to(this.DOM.el, { duration: 0.9, ease: 'Power3.easeOut', opacity: 1 });
    requestAnimationFrame(() => this.render());
    window.removeEventListener('mousemove', this.onMouseMoveEv);
  };

  makeTrail() {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    this.DOM.trail = trail;
    this.DOM.el.parentNode.insertBefore(trail, this.DOM.el);
  }

  active() {
    this.renderedStyles['scale'].current = 1.75;
  }

  enter(ev) {
    if (ev.currentTarget.classList.contains('grid__item')) {
      const color = ev.currentTarget.dataset.color;
      const colorArr = gsap.utils.splitColor(color); 
      this.DOM.trail.style.setProperty('--gradient-1', `rgba(${colorArr.join(',')},0.6)`);
      this.DOM.trail.style.setProperty('--gradient-2', `rgba(${colorArr.join(',')},0)`);
    }
    this.renderedStyles['scale'].current = 1.5;
  }

  leave() {
    this.renderedStyles['scale'].current = 1;
  }

  render() {
    this.renderedStyles['tx'].current = this.renderedStyles['txText'].current = this.renderedStyles['txTrail'].current = mouse.x - this.bounds.width / 2;
    this.renderedStyles['ty'].current = this.renderedStyles['tyText'].current = this.renderedStyles['tyTrail'].current = mouse.y - this.bounds.height / 2;
    
    for (const key in this.renderedStyles) {
      this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
    }

    this.DOM.svg.style.transform = `translateX(${(this.renderedStyles['tx'].previous)}px) translateY(${this.renderedStyles['ty'].previous}px)`;
    this.DOM.trail.style.transform = `translateX(${(this.renderedStyles['txTrail'].previous)}px) translateY(${this.renderedStyles['tyTrail'].previous}px) scale(${this.renderedStyles['scaleTrail'].previous})`;
    this.DOM.text.style.transform = `translateX(${(this.renderedStyles['txText'].previous)}px) translateY(${this.renderedStyles['tyText'].previous}px)`;
    this.DOM.circle.style.transform = `scale(${this.renderedStyles['scale'].previous})`;
    requestAnimationFrame(() => this.render());
  }
  
  addEventListeners() {
    window.addEventListener('mousemove', this.onMouseMoveEv);
    document.addEventListener('mousedown', () => this.active());
    document.addEventListener('mouseup', () => this.leave());
    [...document.querySelectorAll('a, button, .grid__item')].forEach(link => {
      link.addEventListener('mouseenter', (ev) => this.enter(ev));
      link.addEventListener('mouseleave', (ev) => this.leave(ev));
    });
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('cursor', (el) => new Cursor(el))
})
