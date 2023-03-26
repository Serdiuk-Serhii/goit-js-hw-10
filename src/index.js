import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';

export const countryListBoxEl = document.querySelector('.country-list');
export const countryInfoEl = document.querySelector('.country-info');

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');

inputEl.addEventListener('input', debounce(handleSearchInput, DEBOUNCE_DELAY));

function handleSearchInput() {
  let inputData = inputEl.value.trim();
  if (inputData === '') {
    countryListBoxEl.innerHTML = '';
    countryInfoEl.innerHTML = '';
  } else if (inputData !== '') {
    fetchCountries(inputData);
  }
}
