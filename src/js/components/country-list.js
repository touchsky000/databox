class CountryList extends HTMLElement {
  set countries(countries) {
    this._countries = countries.data;
    this.render();
  }

  get country() {
    return this.querySelector('#countries').value;
  }

  render() {
    this.innerHTML = `
    <div class="country-list">
        <select name="countries" id="countries">
        <option>Pilih negara yang ingin ditampilkan datanya</option>
        ${this._countries.map((country) => `<option value="${country.Slug}">${country.Country}</option>`)}
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        </select>
    </div>
    `;
  }
}

customElements.define('country-list', CountryList);
