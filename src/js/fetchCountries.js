import Notiflix from 'notiflix';
import { renderCountryList } from './renderCountryList';
import { renderSingleCountry } from './renderSingleCountry';
import { countryListBoxEl } from '../index';
import { countryInfoEl } from '../index';

export function fetchCountries(countryName) {
  fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      if (!response.ok) {
        Notiflix.Notify.failure('Oops, there is no country with that name');
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(countryList => {
      if (countryList.length > 10) {
        countryListBoxEl.innerHTML = '';
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (countryList.length > 1 && countryList.length < 11) {
        countryInfoEl.innerHTML = '';
        countryListBoxEl.innerHTML = renderCountryList(countryList);
      } else if (countryList.length === 1) {
        countryListBoxEl.innerHTML = '';
        countryInfoEl.innerHTML = renderSingleCountry(countryList);
      }

      console.log(countryList);
    })
    .catch(console.warn);
}
