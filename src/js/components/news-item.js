class NewsItem extends HTMLElement {
  set article(article) {
    this._article = article;
    this.render();
  }

  openURL() {
    window.open(this._article.url);
  }

  render() {
    this.innerHTML = `
    <div class="article">
      <div class="article-image flex-item">
        <img src="${this._article.urlToImage}" style="max-width:100%"/>
      </div>
      <div class="article-text flex-item" id="${this._article.source.id}">
        <h4>${this._article.title}</h4>
        <p>By ${this._article.author}</p>
      </div>
    </div>
    `;
    this.addEventListener('click', this.openURL);
  }
}
customElements.define('news-item', NewsItem);
