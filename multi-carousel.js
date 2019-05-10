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
  static get is() { return 'multi-carousel'; }

  static get properties() {
    return {
      property1: { type: String },
      property2: { type: Number }
    };
  }

  static get styles(){
    return css`
      :host {
        display: block;
      }
    `;
  }
  
  constructor() {
    super();
    this.property1 = 'Year';
    this.property2 = 2019;
  }

  render() {
    return html`
      <div class="container">
        <h2>${this.property1}</h2>
        <h3>${this.property2}</h3>
      </div>
    `;
  }
}

window.customElements.define(MultiCarousel.is, MultiCarousel);