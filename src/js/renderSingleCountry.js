export function renderSingleCountry(countriesData) {
  const { flags, name, capital, population, languages } = countriesData[0];
  return `
    <p>
    <img src='${flags.svg}' alt='${flags.alt}' width=100px />
    <span class='country-name'>${name.official}</span>
    </p>
    <ul class='country-info-list'>
        <li>Capital: ${capital}</li>
        <li>Population: ${population}</li>
        <li>Languages: ${Object.values(languages)}</li>
    </ul>
    `;
}
