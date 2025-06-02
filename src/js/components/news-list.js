import './news-item';

class NewsList extends HTMLElement {
  set news(news) {
    this._news = news.filter((article) => (article.author !== null));
    this._news.splice(10);
    this.render();
  }

  render() {
    this.innerHTML = '<h3 style="margin-top: 10px; margin-bottom: 20px;">Berita Covid-19</h3>';
    this._news.forEach((article) => {
      const articleItem = document.createElement('news-item');
      articleItem.article = article;

      this.appendChild(articleItem);
    });
  }
}
customElements.define('news-list', NewsList);
