const elements = [
  { number: 1, symbol: 'h', name: 'hydrogen', mass: 1.008 },
  { number: 2, symbol: 'he', name: 'helium', mass: 4.0026 },
  { number: 3, symbol: 'li', name: 'lithium', mass: 6.94 },
  { number: 4, symbol: 'be', name: 'beryllium', mass: 9.0122 },
  { number: 5, symbol: 'b', name: 'boron', mass: 10.81 },
  { number: 6, symbol: 'c', name: 'carbon', mass: 12.011 },
  { number: 7, symbol: 'n', name: 'nitrogen', mass: 14.007 },
  { number: 8, symbol: 'o', name: 'oxygen', mass: 15.999 },
  { number: 9, symbol: 'f', name: 'fluorine', mass: 18.998 },
  { number: 10, symbol: 'ne', name: 'neon', mass: 20.180 },
  { number: 11, symbol: 'na', name: 'sodium', mass: 22.990 },
  { number: 12, symbol: 'mg', name: 'magnesium', mass: 24.305 },
  { number: 13, symbol: 'al', name: 'aluminum', mass: 26.982 },
  { number: 14, symbol: 'si', name: 'silicon', mass: 28.085 },
  { number: 15, symbol: 'p', name: 'phosphorus', mass: 30.974 },
  { number: 16, symbol: 's', name: 'sulfur', mass: 32.06 },
  { number: 17, symbol: 'cl', name: 'chlorine', mass: 35.45 },
  { number: 18, symbol: 'ar', name: 'argon', mass: 39.948 },
  { number: 19, symbol: 'k', name: 'potassium', mass: 39.098 },
  { number: 20, symbol: 'ca', name: 'calcium', mass: 40.078 },
  { number: 21, symbol: 'sc', name: 'scandium', mass: 44.956 },
  { number: 22, symbol: 'ti', name: 'titanium', mass: 47.867 },
  { number: 23, symbol: 'v', name: 'vanadium', mass: 50.942 },
  { number: 24, symbol: 'cr', name: 'chromium', mass: 51.996 },
  { number: 25, symbol: 'mn', name: 'manganese', mass: 54.938 },
  { number: 26, symbol: 'fe', name: 'iron', mass: 55.845 },
  { number: 27, symbol: 'co', name: 'cobalt', mass: 58.933 },
  { number: 28, symbol: 'ni', name: 'nickel', mass: 58.693 },
  { number: 29, symbol: 'cu', name: 'copper', mass: 63.546 },
  { number: 30, symbol: 'zn', name: 'zinc', mass: 65.38 },
  { number: 31, symbol: 'ga', name: 'gallium', mass: 69.723 },
  { number: 32, symbol: 'ge', name: 'germanium', mass: 72.630 },
  { number: 33, symbol: 'as', name: 'arsenic', mass: 74.922 },
  { number: 34, symbol: 'se', name: 'selenium', mass: 78.971 },
  { number: 35, symbol: 'br', name: 'bromine', mass: 79.904 },
  { number: 36, symbol: 'kr', name: 'krypton', mass: 83.798 },
  { number: 37, symbol: 'rb', name: 'rubidium', mass: 85.468 },
  { number: 38, symbol: 'sr', name: 'strontium', mass: 87.62 },
  { number: 39, symbol: 'y', name: 'yttrium', mass: 88.906 },
  { number: 40, symbol: 'zr', name: 'zirconium', mass: 91.224 },
  { number: 41, symbol: 'nb', name: 'niobium', mass: 92.906 },
  { number: 42, symbol: 'mo', name: 'molybdenum', mass: 95.95 },
  { number: 43, symbol: 'tc', name: 'technetium', mass: 98 },
  { number: 44, symbol: 'ru', name: 'ruthenium', mass: 101.07 },
  { number: 45, symbol: 'rh', name: 'rhodium', mass: 102.91 },
  { number: 46, symbol: 'pd', name: 'palladium', mass: 106.42 },
  { number: 47, symbol: 'ag', name: 'silver', mass: 107.87 },
  { number: 48, symbol: 'cd', name: 'cadmium', mass: 112.41 },
  { number: 49, symbol: 'in', name: 'indium', mass: 114.82 },
  { number: 50, symbol: 'sn', name: 'tin', mass: 118.71 },
  { number: 51, symbol: 'sb', name: 'antimony', mass: 121.76 },
  { number: 52, symbol: 'te', name: 'tellurium', mass: 127.60 },
  { number: 53, symbol: 'i', name: 'iodine', mass: 126.90 },
  { number: 54, symbol: 'xe', name: 'xenon', mass: 131.29 },
  { number: 55, symbol: 'cs', name: 'cesium', mass: 132.91 },
  { number: 56, symbol: 'ba', name: 'barium', mass: 137.33 },
  { number: 57, symbol: 'la', name: 'lanthanum', mass: 138.91 },
  { number: 58, symbol: 'ce', name: 'cerium', mass: 140.12 },
  { number: 59, symbol: 'pr', name: 'praseodymium', mass: 140.91 },
  { number: 60, symbol: 'nd', name: 'neodymium', mass: 144.24 },
  { number: 61, symbol: 'pm', name: 'promethium', mass: 145 },
  { number: 62, symbol: 'sm', name: 'samarium', mass: 150.36 },
  { number: 63, symbol: 'eu', name: 'europium', mass: 151.96 },
  { number: 64, symbol: 'gd', name: 'gadolinium', mass: 157.25 },
  { number: 65, symbol: 'tb', name: 'terbium', mass: 158.93 },
  { number: 66, symbol: 'dy', name: 'dysprosium', mass: 162.50 },
  { number: 67, symbol: 'ho', name: 'holmium', mass: 164.93 },
  { number: 68, symbol: 'er', name: 'erbium', mass: 167.26 },
  { number: 69, symbol: 'tm', name: 'thulium', mass: 168.93 },
  { number: 70, symbol: 'yb', name: 'ytterbium', mass: 173.05 },
  { number: 71, symbol: 'lu', name: 'lutetium', mass: 174.97 },
  { number: 72, symbol: 'hf', name: 'hafnium', mass: 178.49 },
  { number: 73, symbol: 'ta', name: 'tantalum', mass: 180.95 },
  { number: 74, symbol: 'w', name: 'tungsten', mass: 183.84 },
  { number: 75, symbol: 're', name: 'rhenium', mass: 186.21 },
  { number: 76, symbol: 'os', name: 'osmium', mass: 190.23 },
  { number: 77, symbol: 'ir', name: 'iridium', mass: 192.22 },
  { number: 78, symbol: 'pt', name: 'platinum', mass: 195.08 },
  { number: 79, symbol: 'au', name: 'gold', mass: 196.97 },
  { number: 80, symbol: 'hg', name: 'mercury', mass: 200.59 },
  { number: 81, symbol: 'tl', name: 'thallium', mass: 204.38 },
  { number: 82, symbol: 'pb', name: 'lead', mass: 207.2 },
  { number: 83, symbol: 'bi', name: 'bismuth', mass: 208.98 },
  { number: 84, symbol: 'po', name: 'polonium', mass: 209 },
  { number: 85, symbol: 'at', name: 'astatine', mass: 210 },
  { number: 86, symbol: 'rn', name: 'radon', mass: 222 },
  { number: 87, symbol: 'fr', name: 'francium', mass: 223 },
  { number: 88, symbol: 'ra', name: 'radium', mass: 226 },
  { number: 89, symbol: 'ac', name: 'actinium', mass: 227 },
  { number: 90, symbol: 'th', name: 'thorium', mass: 232.04 },
  { number: 91, symbol: 'pa', name: 'protactinium', mass: 231.04 },
  { number: 92, symbol: 'u', name: 'uranium', mass: 238.03 },
  { number: 93, symbol: 'np', name: 'neptunium', mass: 237 },
  { number: 94, symbol: 'pu', name: 'plutonium', mass: 244 },
  { number: 95, symbol: 'am', name: 'americium', mass: 243 },
  { number: 96, symbol: 'cm', name: 'curium', mass: 247 },
  { number: 97, symbol: 'bk', name: 'berkelium', mass: 247 },
  { number: 98, symbol: 'cf', name: 'californium', mass: 251 },
  { number: 99, symbol: 'es', name: 'einsteinium', mass: 252 },
  { number: 100, symbol: 'fm', name: 'fermium', mass: 257 },
  { number: 101, symbol: 'md', name: 'mendelevium', mass: 258 },
  { number: 102, symbol: 'no', name: 'nobelium', mass: 259 },
  { number: 103, symbol: 'lr', name: 'lawrencium', mass: 266 },
  { number: 104, symbol: 'rf', name: 'rutherfordium', mass: 267 },
  { number: 105, symbol: 'db', name: 'dubnium', mass: 268 },
  { number: 106, symbol: 'sg', name: 'seaborgium', mass: 269 },
  { number: 107, symbol: 'bh', name: 'bohrium', mass: 270 },
  { number: 108, symbol: 'hs', name: 'hassium', mass: 277 },
  { number: 109, symbol: 'mt', name: 'meitnerium', mass: 278 },
  { number: 110, symbol: 'ds', name: 'darmstadtium', mass: 281 },
  { number: 111, symbol: 'rg', name: 'roentgenium', mass: 282 },
  { number: 112, symbol: 'cn', name: 'copernicium', mass: 285 },
  { number: 113, symbol: 'fl', name: 'flerovium', mass: 289 },
  { number: 114, symbol: 'lv', name: 'livermorium', mass: 293 },
  { number: 115, symbol: 'ts', name: 'tennessine', mass: 294 },
  { number: 116, symbol: 'og', name: 'oganesson', mass: 294 },
  { number: 117, symbol: 'uu', name: 'ununseptium', mass: 294 },
  { number: 118, symbol: 'uuo', name: 'unoctium', mass: 294 }
];

const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const resultDiv = document.getElementById('result');

searchBtn.addEventListener('click', () => {
  const query = searchInput.value.toLowerCase().trim();

  const element = elements.find(el => {
    return el.name.toLowerCase().includes(query) ||
           el.symbol.toLowerCase().includes(query) ||
           el.number.toString().includes(query) ||
           el.mass.toString().includes(query);
  });

  resultDiv.innerHTML = '';

  if (element) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <strong>${element.name} (${element.symbol})</strong><br>
      atomic number: ${element.number}<br>
      atomic mass: ${element.mass}
    `;
    resultDiv.appendChild(card);
  } else {
    resultDiv.textContent = 'no element found';
  }
});
