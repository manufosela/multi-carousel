import { LitElement, html, css } from 'lit-element';

/**
 * `multi-carousel`
 * MultiCarousel
 *
 * @customElement
 * @polymer
 * @litElement
 * @demo demo/index.html
 */

class MultiCarousel extends LitElement {
  static get is() {
    return 'multi-carousel';
  }

  static get properties() {
    return {
      numslides: { type: Number },
      arrayContent: { type: Array },
      master: { type: Boolean },
      masterId: { type: String, attribute: 'master-id' },
      slideChecked: { type: Number, attribute: 'slide-checked-number' }
    };
  }

  constructor() {
    super();
    this.master = false;
    this.masterId = '';
    this.slideChecked = 1;
  }

  connectedCallback() {
    super.connectedCallback();

    if (this.masterId !== '') {
      document.addEventListener('multicarouselnextslide', this.nextslide.bind(this));
    }

    this.arrayContent = this.children;
    this.numslides = this.arrayContent.length + 1;
    this.opArr = Array.apply(null, {length: this.numslides}).map(Number.call, Number);
    this.opArr.shift(); //Delete 0 element

    this.cssliderStyles = html`${this.opArr.map(val => `.csslider > input:nth-of-type(${val}):checked ~ ul li:first-of-type { margin-left: -${(val - 1) * 100}%; }`).join('\n')}`;
    this.cssliderInputStyles = html`${this.opArr.map(val => `.csslider > input:nth-of-type(${val}):checked ~ .navigation label:nth-of-type(${val}):after`).join(', ')} { opacity: 1; }`;
    this.cssliderInputCheckedStyles = html`.csslider.infinity > input:first-of-type:checked ~ .arrows label.goto-last,
    ${this.opArr.map(val => `.csslider > input:nth-of-type(${val}):checked ~ .arrows > label:nth-of-type(${val - 1})`).join(', ')} {
      display: block;
      left: 0;
      right: auto;
      -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }`;

    this.cssliderInfinityStyles = html`.csslider.infinity > input:last-of-type:checked ~ .arrows label.goto-first,
    ${this.opArr.map(val => `.csslider > input:nth-of-type(${val}):checked ~ .arrows > label:nth-of-type(${val+1})`).join(', ')} {
      display: block;
      right: 0;
      left: auto;
      -moz-transform: rotate(225deg);
      -ms-transform: rotate(225deg);
      -o-transform: rotate(225deg);
      -webkit-transform: rotate(225deg);
      transform: rotate(225deg);
    }`;
    this.htmlInputs = `${this.opArr.map(val => html`<input type="radio" name="slides" id="slides_${val}"/>`)}`;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('multicarouselnextslide', this.nextSlide.bind(this));
  }

  static get styles() {
    return css`
      :host {
        --main-color: #000;
        --slides-bg-color: #FFF;
        --slides-border: 10px solid var(--slides-bg-color);
        --slides-border-radius:0px;
        --slides-padding: 0;
        --slides-width: 820px;
        --slides-height: 420px;
        --hover-arrow-color: #FF0;
        --nav-point-color: #3A3A3A;

        height: 100%;
        overflow-x: hidden;
        text-align: center;
        font: 400 100% 'Raleway', 'Lato';
        background-color: transparent;
        color: var(--main-color);
        padding-bottom: 60px;
      }
      .csslider {
        margin: auto 3em;
        text-align:center;
        -moz-perspective: 1300px;
        -ms-perspective: 1300px;
        -webkit-perspective: 1300px;
        perspective: 1300px;
        display: inline-block;
        position: relative;
        margin-bottom: 22px;
      }
      .csslider > input {
        display: none;
      }
      .csslider > ul {
        position: relative;
        width: var(--slides-width);
        height: var(--slides-height);
        z-index: 1;
        font-size: 0;
        line-height: 0;
        background-color: var(--slides-bg-color);
        border: var(--slides-border);
        border-radius: var(--slides-border-radius);
        margin: 0 auto;
        padding: 0;
        overflow: hidden;
        white-space: nowrap;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }
      .csslider > ul > li {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 100%;
        padding: var(--slides-padding);
        overflow: hidden;
        font-size: 15px;
        font-size: initial;
        line-height: normal;
        -moz-transition: all 0.5s cubic-bezier(0.4, 1.3, 0.65, 1);
        -o-transition: all 0.5s ease-out;
        -webkit-transition: all 0.5s cubic-bezier(0.4, 1.3, 0.65, 1);
        transition: all 0.5s cubic-bezier(0.4, 1.3, 0.65, 1);
        vertical-align: top;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        white-space: normal;
      }
      .csslider > ul > li.scrollable {
        overflow-y: scroll;
      }
      .csslider > .navigation {
        position: absolute;
        bottom: -8px;
        left: 50%;
        z-index: 10;
        margin-bottom: -10px;
        font-size: 0;
        line-height: 0;
        text-align: center;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      .csslider > .navigation > div {
        margin-left: -100%;
      }
      .csslider > .navigation label {
        position: relative;
        display: inline-block;
        cursor: pointer;
        border-radius: 50%;
        margin: 0 4px;
        padding: 4px;
        background: var(--nav-point-color);
      }
      .csslider > .navigation label:hover:after {
        opacity: 1;
      }
      .csslider > .navigation label:after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -6px;
        margin-top: -6px;
        background: #71ad37;
        border-radius: 50%;
        padding: 6px;
        opacity: 0;
      }
      .csslider > .arrows {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      .csslider.inside .navigation {
        bottom: 10px;
        margin-bottom: 10px;
      }
      .csslider.inside .navigation label {
        border: 1px solid #7e7e7e;
      }

      .csslider > .arrows {
        position: absolute;
        left: -31px;
        top: 50%;
        width: 100%;
        height: 26px;
        padding: 0 31px;
        z-index: 0;
        -moz-box-sizing: content-box;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
      }
      .csslider > .arrows label {
        display: none;
        position: absolute;
        top: -50%;
        padding: 13px;
        box-shadow: inset 2px -2px 0 1px var(--main-color);
        cursor: pointer;
        -moz-transition: box-shadow 0.15s, margin 0.15s;
        -o-transition: box-shadow 0.15s, margin 0.15s;
        -webkit-transition: box-shadow 0.15s, margin 0.15s;
        transition: box-shadow 0.15s, margin 0.15s;
      }
      .csslider > .arrows label:hover {
        box-shadow: inset 3px -3px 0 2px var(--hover-arrow-color);
        margin: 0 0px;
      }
      .csslider > .arrows label:before {
        content: '';
        position: absolute;
        top: -100%;
        left: -100%;
        height: 300%;
        width: 300%;
      }
      .noshow { 
        visibility: hidden;
      }
      
      @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v15/S6uyw4BMUTPHjx4wWw.ttf) format('truetype');
      }
      @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        src: local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptug8zYS_SKggPNyC0ISg.ttf) format('truetype');
      }
      @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        src: local('Raleway Bold'), local('Raleway-Bold'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptrg8zYS_SKggPNwJYtWqZPBQ.ttf) format('truetype');
      }

      ::-webkit-scrollbar {
        width: 2px;
        background: rgba(255, 255, 255, 0.1);
      }
      ::-webkit-scrollbar-track {
        background: none;
      }
      ::-webkit-scrollbar-thumb {
        background: rgba(74, 168, 0, 0.6);
      }
      ul,
      ol {
        padding-left: 40px;
      }
      #theslider {
        font-family: 'Lato';
      }

      .scrollable p {
        padding: 30px;
        text-align: justify;
        line-height: 140%;
        font-size: 120%;
      }
           
      @-webkit-keyframes sign-anim {
        to {
          background-position: 0 -7140px;
        }
      }
      @-moz-keyframes sign-anim {
        to {
          background-position: 0 -7140px;
        }
      }
      @keyframes sign-anim {
        to {
          background-position: 0 -7140px;
        }
      }
    `;
  }

  nextslide(ev) {
    let masterId = ev.detail.masterid;
    if (masterId === this.masterId) {
      let slide = ev.detail.slide;
      this.shadowRoot.querySelector('label[for="slides_' + slide + '"]').click();
    }
  }

  _gotonav(ev) {
    let slideChecked = ev.target.getAttribute('for').split('_')[1];
    if (this.master) {
      let event = new CustomEvent('multicarouselnextslide', {
        detail: {
          masterid: this.id,
          slide: slideChecked
        }
      });
      document.dispatchEvent(event);
    }
  }

  _getArrows() {
    let arrowClass = (this.masterId !== '') ? 'noshow' : '';
    let arrows = html`<div class="arrows">
      ${this.opArr.map(val => html`<label class="${arrowClass}" for="slides_${val}" @click="${this._gotonav}"></label>` )}
      <label class="goto-first ${arrowClass}" for="slides_1" @click="${this._gotonav}"></label>
      <label class="goto-last ${arrowClass}" for="slides_${this.numslides - 1}" @click="${this._gotonav}"></label>
    </div>`;
    return arrows;
  }

  _getNav() {
    let nav = html`<div class="navigation"> 
      <div>
        ${this.opArr.map(val => html`<label for="slides_${val}" @click="${this._gotonav}"></label>` )}
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
        
        ${this._getArrows()}
        ${this._getNav()}
      </div>
    `;
  }
}

window.customElements.define(MultiCarousel.is, MultiCarousel);