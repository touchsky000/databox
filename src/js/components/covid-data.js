const moment = require('moment');

class CovidData extends HTMLElement {
  connectedCallback() {
    moment.locale('id');
    this.renderEmpty();
  }

  set result(data) {
    this._result = data;
    this.render(this._result);
  }

  renderLoading() {
    this.innerHTML = '<div class="loader"></div>';
  }

  renderEmpty() {
    this.innerHTML = '';
  }

  render(data) {
    this.innerHTML = `
    <div class="data-title">
      <h4>Data Covid-19 di ${data[0].Country}</h4>
      <p>Tanggal : ${moment(data[0].Date).format('LL')}</p>
    </div>
    <div class="data-container">
      <div class="flex-item data-item grey">
      <iconify-icon inline icon="majesticons:skull-line" width="36" height="36"></iconify-icon> Korban Meninggal
        <p>${data[0].Cases} Jiwa</p>
      </div>
      <div class="flex-item data-item red">
      <iconify-icon inline icon="healthicons:virus-alt-outline" width="36" height="36"></iconify-icon> Pasien terkonfirmasi
        <p>${data[1].Cases} Pasien</p>
      </div>
      <div class="flex-item data-item green">
        <iconify-icon inline icon="mdi:cards-heart-outline" width="36" height="36"></iconify-icon> Pasien disembuhkan
        <p>${data[2].Cases} Pasien</p>
      </div>
    </div>
    `;
  }
}
customElements.define('covid-data', CovidData);
