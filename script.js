import { elementsData } from './elementsData.js';

const tableDiv = document.getElementById('periodicTable');
const searchInput = document.getElementById('searchInput');
const sortAtomicNumberBtn = document.getElementById('sortAtomicNumber');
const sortAtomicMassBtn = document.getElementById('sortAtomicMass');

const categoryColors = {
    alkali_metals: '#FF7F50',
    alkaline_earth_metals: '#F4A460',
    transition_metals: '#A9A9A9',
    post_transition_metals: '#6B8E23',
    metalloids: '#CD853F',
    nonmetals: '#20B2AA',
    halogens: '#9370DB',
    noble_gases: '#FFD700',
    lanthanides: '#8A2BE2',
    actinides: '#DEB887',
};

function groupToColumn(group) {
    const map = {
        '1A': 1, '2A': 2, '3A': 13, '4A': 14, '5A': 15, '6A': 16, '7A': 17, '8A': 18,
        '3B': 3, '4B': 4, '5B': 5, '6B': 6, '7B': 7, '8B': 8, '9B': 9, '10B': 10, '11B': 11, '12B': 12,
    };
    return map[group];
}

function displayElement(element) {
    const card = document.createElement('div');
    card.className = 'element-card';
    card.style.backgroundColor = categoryColors[element.category] || '#E0E0E0';
    
    if (element.category === 'lanthanides' || element.category === 'actinides') {
        document.getElementById('lanthanideActinideBlock').appendChild(card);
    } else {
        card.style.gridColumn = groupToColumn(element.group);
        card.style.gridRow = element.period;
        tableDiv.appendChild(card);
    }

    card.innerHTML = `
        <strong>${element.symbol}</strong><br>
        <small>${element.atomicNumber}</small><br>
        <span class="name">${element.name}</span>
    `;
}

function displayAllElements(elements = elementsData) {
    tableDiv.innerHTML = '';
    document.getElementById('lanthanideActinideBlock').innerHTML = '';
    elements.forEach(displayElement);
}

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = elementsData.filter(el =>
        el.name.toLowerCase().includes(query) || el.symbol.toLowerCase().includes(query)
    );
    displayAllElements(filtered);
});

let atomicNumberAscending = true;
sortAtomicNumberBtn.addEventListener('click', () => {
    const sorted = [...elementsData].sort((a, b) => {
        return atomicNumberAscending ? a.atomicNumber - b.atomicNumber : b.atomicNumber - a.atomicNumber;
    });
    atomicNumberAscending = !atomicNumberAscending;
    displayAllElements(sorted);
});

let atomicMassAscending = true;
sortAtomicMassBtn.addEventListener('click', () => {
    const sorted = [...elementsData].sort((a, b) => {
        return atomicMassAscending ? a.atomicMass - b.atomicMass : b.atomicMass - a.atomicMass;
    });
    atomicMassAscending = !atomicMassAscending;
    displayAllElements(sorted);
});

document.addEventListener('DOMContentLoaded', () => displayAllElements());