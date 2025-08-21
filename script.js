import { elementsData } from './elementsData.js';

const tableDiv = document.getElementById('periodicTable');
const searchInput = document.getElementById('searchInput');
const sortButton = document.getElementById('sortButton');

const categoryColors = {
  alkali_metals: '#f49306',
  alkaline_earth_metals: '#a5bb1a',
  transition_metals: '#dedde2',
  post_transition_metals: '#6db8be',
  metalloids: '#e0858e',
  nonmetals: '#9ec6aa',
  halogens: '#a7bd40',
  noble_gases: '#c7da91'
};

function groupToColumn(group) {
  const map = { '1A':1,'2A':2,'3A':13,'4A':14,'5A':15,'6A':16,'7A':17,'8A':18 };
  return map[group] || 1;
}

function displayElement(element) {
  const card = document.createElement('div');
  card.className = 'element-card';
  card.style.backgroundColor = categoryColors[element.category] || '#FFFFFF';
  card.style.gridColumn = groupToColumn(element.group);
  card.style.gridRow = element.period;
  card.innerHTML = `
    <strong>${element.symbol}</strong><br>
    ${element.atomicNumber}<br>
    ${element.name}
  `;
  tableDiv.appendChild(card);
}

function displayAllElements(elements = elementsData) {
  tableDiv.innerHTML = '';
  elements.forEach(displayElement);
}

// Live search
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = elementsData.filter(el =>
    el.name.toLowerCase().includes(query) || el.symbol.toLowerCase().includes(query)
  );
  displayAllElements(filtered);
});

// Sorting
let ascending = true;
sortButton.addEventListener('click', () => {
  const sorted = [...elementsData].sort((a,b) =>
    ascending ? a.atomicNumber - b.atomicNumber : b.atomicNumber - a.atomicNumber
  );
  ascending = !ascending;
  displayAllElements(sorted);
});

// Initial display
document.addEventListener('DOMContentLoaded', () => displayAllElements());
