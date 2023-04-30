import { html, LitElement } from 'lit';
import { MultiCarouselStyles } from './multi-carousel-styles.js';

export class MultiCarousel extends LitElement {
  static get properties() {
    return {
      numslides: { type: Number },
      arrayContent: { type: Array },
      master: { type: Boolean },
      masterId: { type: String, attribute: 'master-id' },
      slideChecked: { type: Number, attribute: 'slide-checked-number' },
      noNavigation: { type: Boolean, attribute: 'no-arrows' },
      noArrows: { type: Boolean, attribute: 'no-nav' }
    };
  }

  static get styles() {
    return [MultiCarouselStyles];
  }

  constructor() {
    super();
    this.master = false;
    this.masterId = '';
    this.slideChecked = 1;
    this.noArrows = false;
    this.noNavigation = false;
  }

  connectedCallback() {
    super.connectedCallback();

    this.arrayContent = this.children;
    this.numslides = this.arrayContent.length + 1;
    this.opArr = [...Array(this.numslides).keys()];  // OLD SCHOOL ES5: Array.apply(null, {length: this.numslides}).map(Number.call, Number);
    this.opArr.shift(); // Delete 0 element

    this.cssliderStyles = html`${this.opArr.map(val => `.csslider > input:nth-of-type(${val}):checked ~ ul li:first-of-type { margin-left: -${(val - 1) * 100}%; }`).join('\n')}`;
    this.cssliderInputStyles = html`${this.opArr.map(val => `.csslider > input:nth-of-type(${val}):checked ~ .navigation label:nth-of-type(${val}):after`).join(', ')} { opacity: 1; }`;
    this.cssliderInputCheckedStyles = html`.csslider.infinity > input:first-of-type:checked ~ .arrows label.goto-last,
    ${this.opArr.map(val => `.csslider > input:nth-of-type(${val}):checked ~ .arrows > label:nth-of-type(${val - 1})`).join(', ')} {
      display: block;
      left: 0;
      right: auto;
      transform: rotate(45deg);
    }`;

    this.cssliderInfinityStyles = html`.csslider.infinity > input:last-of-type:checked ~ .arrows label.goto-first,
    ${this.opArr.map(val => `.csslider > input:nth-of-type(${val}):checked ~ .arrows > label:nth-of-type(${val+1})`).join(', ')} {
      display: block;
      right: 0;
      left: auto;
      transform: rotate(225deg);
    }`;
    this.htmlInputs = `${this.opArr.map(val => html`<input type="radio" name="slides" id="slides_${val}"/>`)}`;
    
    this.nextSlide = this.nextSlide.bind(this);
    if (this.masterId !== '') {
      document.addEventListener('multicarouselnextslide', this.nextSlide);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.masterId !== '') {
      document.removeEventListener('multicarouselnextslide', this.nextSlide);
    }
  }

  nextSlide(ev) {
    const masterId = ev.detail.masterid;
    console.log(masterId, this.masterId);
    if (masterId === this.masterId) {
      const { slide } = ev.detail;
      this.shadowRoot.querySelector(`label[for="slides_${  slide  }"]`).click();
    }
  }

  _gotonav(ev) {
    const slideChecked = ev.target.getAttribute('for').split('_')[1];
    if (this.master) {
      const event = new CustomEvent('multicarouselnextslide', {
        detail: {
          masterid: this.id,
          slide: slideChecked
        }
      });
      document.dispatchEvent(event);
    }
  }

  _getNav() {
    const arrowClass = (this.masterId !== '') ? 'noshow' : '';
    const arrows = html`<div class="arrows">
      ${this.opArr.map(val => html`<label class="${arrowClass}" for="slides_${val}" @click="${this._gotonav}" @keydown="${this._gotonav}"></label>` )}
      <label class="goto-first ${arrowClass}" for="slides_1" @click="${this._gotonav}" @keydown="${this._gotonav}"></label>
      <label class="goto-last ${arrowClass}" for="slides_${this.numslides - 1}" @click="${this._gotonav}" @keydown="${this._gotonav}"></label>
    </div>`;
    return arrows;
  }

  _getArrows() {
    const nav = html`<div class="navigation"> 
      <div>
        ${this.opArr.map(val => html`<label for="slides_${val}" @click="${this._gotonav}" @keydown="${this._gotonav}"></label>` )}
      </div>
    </div>`;
    return (this.masterId !== '') ? '' : nav;
  }

  render() {
    return html`
      <style>
        ${this.cssliderInputStyles}
        ${this.cssliderInputCheckedStyles}
        ${this.cssliderInfinityStyles}
        ${this.cssliderStyles}
      </style>
      <div class="csslider infinity" id="theslider">
        ${this.opArr.map(val => {
    let res;
    if (val !== 1) {
      res = html`<input type="radio" name="slides" id="slides_${val}" />`;
    } else {
      res = html`<input type="radio" name="slides" id="slides_${val}" checked />`;
    }
    return res;
  })}
        <ul>
          ${this.opArr.map(val => html`<li>${this.arrayContent[val - 1]}</li>` )}
        </ul>
        
        ${this.noArrows ? '' : this._getArrows()}
        ${this.noNavigation ? '' : this._getNav()}
      </div>
    `;
  }
}
