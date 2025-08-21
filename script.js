import { elementsData } from './elementsData.js';

const tableDiv = document.getElementById('periodicTable');
const searchInput = document.getElementById('searchInput');
const sortAtomicNumberBtn = document.getElementById('sortAtomicNumber');
const sortAtomicMassBtn = document.getElementById('sortAtomicMass');

const categoryColors = {
    alkali_metals: '#f49306',
    alkaline_earth_metals: '#a5bb1a',
    transition_metals: '#dedde2',
    post_transition_metals: '#6db8be',
    metalloids: '#e0858e',
    nonmetals: '#9ec6aa',
    halogens: '#a7bd40',
    noble_gases: '#c7da91',
    lanthanides: '#b2c8e8',
    actinides: '#e8b2c8',
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
    card.style.backgroundColor = categoryColors[element.category] || '#FFFFFF';
    
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

// Fixed sorting and search logic
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
