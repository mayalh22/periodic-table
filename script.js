const elements = [
    { number: 1, symbol: 'H', name: 'hydrogen', mass: 1.008 },
    { number: 2, symbol: 'He', name: 'helium', mass: 4.0026 },
    { number: 3, symbol: 'Li', name: 'lithium', mass: 6.94 },
    // add the rest of the elements up to 118
];

const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const resultDiv = document.getElementById('result');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase().trim();
    const element = elements.find(el => 
        el.name.toLowerCase() === query ||
        el.symbol.toLowerCase() === query ||
        el.number.toString() === query ||
        el.mass.toString() === query
    );

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
