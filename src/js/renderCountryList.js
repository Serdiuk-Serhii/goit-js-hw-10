export function renderCountryList(List) {
  return List.map(({ flags, name }) => {
    return `
        <li>
            <img src='${flags.svg}' alt='${flags.alt}' width=50px />
            <span>${name.official}</span>
        </li>
        `;
  }).join('');
}
