import Header from '../../assets/images/databox.png';

class HeroSection extends HTMLElement {
  connectedCallback() {
    this.alt = this.getAttribute('alt') || null;
    this.caption = this.getAttribute('caption') || null;

    this.innerHTML = `
      <figure>
        <img src="${Header}" alt="${this.alt}">
        <figcaption>${this.caption}</figcaption>
      </figure>
    `;
  }
}

customElements.define('hero-section', HeroSection);
