import './components/country-list';
import './components/covid-data';
import './components/news-list';
import Icon from '../assets/images/coronavirus.png';

const axios = require('axios');

const main = async () => {
  console.log(process.env.API_KEY);
  const countryList = document.querySelector('country-list');
  const covidData = document.querySelector('covid-data');
  const newsList = document.querySelector('news-list');
  const link = document.querySelector('link');
  link.type = 'image/x-icon';
  link.rel = 'icon';
  link.href = Icon;

  try {
    const countries = await axios.get('https://api.covid19api.com/countries');
    countryList.countries = countries;
    const news = await axios.get(`https://newsapi.org/v2/everything?q=covid-19&from=2022-12-14&apiKey=${process.env.API_KEY}`);
    newsList.news = news.data.articles;
  } catch (error) {
    console.log(error.message);
  }

  const loadData = (confirmed, death, recovered) => {
    const tempConfirmed = confirmed.data[confirmed.data.length - 1];
    const tempDeath = death.data[death.data.length - 1];
    const tempRecovered = recovered.data[recovered.data.length - 1];
    const result = [tempDeath, tempConfirmed, tempRecovered];
    covidData.result = result;
  };

  const onSelectedCountry = async () => {
    try {
      covidData.renderLoading();
      const confirmedCases = await axios.get(`https://api.covid19api.com/total/country/${countryList.country}/status/confirmed`);
      const deathCases = await axios.get(`https://api.covid19api.com/total/country/${countryList.country}/status/deaths`);
      const recoveredCases = await axios.get(`https://api.covid19api.com/total/country/${countryList.country}/status/recovered`);
      loadData(confirmedCases, deathCases, recoveredCases);
    } catch (error) {
      return error.message;
    }
  };

  countryList.addEventListener('change', onSelectedCountry);
};
export default main;
