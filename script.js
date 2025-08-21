const elementsData = [
  { atomicNumber: 1, symbol: 'H', name: 'Hydrogen', category: 'nonmetals', group: '1A', atomicMass: 1.008, electronConfiguration: '1s1', density: 0.00008988, meltingPoint: 13.99, boilingPoint: 20.271, description: 'Hydrogen is the chemical element with atomic number 1.' },
  { atomicNumber: 2, symbol: 'He', name: 'Helium', category: 'noble_gases', group: '18A', atomicMass: 4.0026, electronConfiguration: '1s2', density: 0.0001786, meltingPoint: 0.0, boilingPoint: 4.222, description: 'Helium is a colorless, odorless, tasteless, inert, monatomic gas that heads the noble gas group in the periodic table.' },
  { atomicNumber: 3, symbol: 'Li', name: 'Lithium', category: 'alkali_metals', group: '1A', atomicMass: 6.94, electronConfiguration: '1s2 2s1', density: 0.534, meltingPoint: 453.65, boilingPoint: 1560, description: 'Lithium is a chemical element with symbol Li and atomic number 3.' },
  { atomicNumber: 4, symbol: 'Be', name: 'Beryllium', category: 'alkaline_earth_metals', group: '2A', atomicMass: 9.0122, electronConfiguration: '1s2 2s2', density: 1.848, meltingPoint: 1560, boilingPoint: 2742, description: 'Beryllium is a chemical element with symbol Be and atomic number 4.' },
  { atomicNumber: 5, symbol: 'B', name: 'Boron', category: 'metalloids', group: '3A', atomicMass: 10.81, electronConfiguration: '1s2 2s2 2p1', density: 2.34, meltingPoint: 2349, boilingPoint: 4200, description: 'Boron is a chemical element with symbol B and atomic number 5.' },
  { atomicNumber: 6, symbol: 'C', name: 'Carbon', category: 'nonmetals', group: '4A', atomicMass: 12.011, electronConfiguration: '1s2 2s2 2p2', density: 2.267, meltingPoint: 3915, boilingPoint: 4027, description: 'Carbon is a chemical element with symbol C and atomic number 6.' },
  { atomicNumber: 7, symbol: 'N', name: 'Nitrogen', category: 'nonmetals', group: '5A', atomicMass: 14.007, electronConfiguration: '1s2 2s2 2p3', density: 0.0012506, meltingPoint: 63.15, boilingPoint: 77.355, description: 'Nitrogen is a chemical element with symbol N and atomic number 7.' },
  { atomicNumber: 8, symbol: 'O', name: 'Oxygen', category: 'nonmetals', group: '6A', atomicMass: 15.999, electronConfiguration: '1s2 2s2 2p4', density: 0.001429, meltingPoint: 54.36, boilingPoint: 90.188, description: 'Oxygen is a chemical element with symbol O and atomic number 8.' },
  { atomicNumber: 9, symbol: 'F', name: 'Fluorine', category: 'halogens', group: '7A', atomicMass: 18.998, electronConfiguration: '1s2 2s2 2p5', density: 0.001696, meltingPoint: 53.48, boilingPoint: 85.03, description: 'Fluorine is a chemical element with symbol F and atomic number 9.' },
  { atomicNumber: 10, symbol: 'Ne', name: 'Neon', category: 'noble_gases', group: '18A', atomicMass: 20.180, electronConfiguration: '1s2 2s2 2p6', density: 0.0008999, meltingPoint: 24.56, boilingPoint: 27.104, description: 'Neon is a chemical element with symbol Ne and atomic number 10.' },
  { atomicNumber: 11, symbol: 'Na', name: 'Sodium', category: 'alkali_metals', group: '1A', atomicMass: 22.990, electronConfiguration: '[Ne] 3s1', density: 0.968, meltingPoint: 370.944, boilingPoint: 1156.090, description: 'Sodium is a chemical element with symbol Na and atomic number 11.' },
  { atomicNumber: 12, symbol: 'Mg', name: 'Magnesium', category: 'alkaline_earth_metals', group: '2A', atomicMass: 24.305, electronConfiguration: '[Ne] 3s2', density: 1.738, meltingPoint: 923, boilingPoint: 1363, description: 'Magnesium is a chemical element with symbol Mg and atomic number 12.' },
  { atomicNumber: 13, symbol: 'Al', name: 'Aluminum', category: 'post_transition_metals', group: '3A', atomicMass: 26.982, electronConfiguration: '[Ne] 3s2 3p1', density: 2.70, meltingPoint: 933.47, boilingPoint: 2792, description: 'Aluminum is a chemical element with symbol Al and atomic number 13.' },
  { atomicNumber: 14, symbol: 'Si', name: 'Silicon', category: 'metalloids', group: '4A', atomicMass: 28.085, electronConfiguration: '[Ne] 3s2 3p2', density: 2.3296, meltingPoint: 1687, boilingPoint: 3538, description: 'Silicon is a chemical element with symbol Si and atomic number 14.' },
  { atomicNumber: 15, symbol: 'P', name: 'Phosphorus', category: 'nonmetals', group: '5A', atomicMass: 30.974, electronConfiguration: '[Ne] 3s2 3p3', density: 1.823, meltingPoint: 317.3, boilingPoint: 553.7, description: 'Phosphorus is a chemical element with symbol P and atomic number 15.' },
  { atomicNumber: 16, symbol: 'S', name: 'Sulfur', category: 'nonmetals', group: '6A', atomicMass: 32.06, electronConfiguration: '[Ne] 3s2 3p4', density: 1.96, meltingPoint: 388.36, boilingPoint: 717.8, description: 'Sulfur is a chemical element with symbol S and atomic number 16.' },
  { atomicNumber: 17, symbol: 'Cl', name: 'Chlorine', category: 'halogens', group: '7A', atomicMass: 35.45, electronConfiguration: '[Ne] 3s2 3p5', density: 0.003214, meltingPoint: 171.6, boilingPoint: 239.11, description: 'Chlorine is a chemical element with symbol Cl and atomic number 17.' },
  { atomicNumber: 18, symbol: 'Ar', name: 'Argon', category: 'noble_gases', group: '18A', atomicMass: 39.948, electronConfiguration: '[Ne] 3s2 3p6', density: 0.0017837, meltingPoint: 83.96, boilingPoint: 87.30, description: 'Argon is a chemical element with symbol Ar and atomic number 18.' },
  { atomicNumber: 19, symbol: 'K', name: 'Potassium', category: 'alkali_metals', group: '1A', atomicMass: 39.098, electronConfiguration: '[Ar] 4s1', density: 0.89, meltingPoint: 336.7, boilingPoint: 1032, description: 'Potassium is a chemical element with symbol K and atomic number 19.' },
  { atomicNumber: 20, symbol: 'Ca', name: 'Calcium', category: 'alkaline_earth_metals', group: '2A', atomicMass: 40.078, electronConfiguration: '[Ar] 4s2', density: 1.55, meltingPoint: 1115, boilingPoint: 1757, description: 'Calcium is a chemical element with symbol Ca and atomic number 20.' },
  { atomicNumber: 21, symbol: 'Sc', name: 'Scandium', category: 'transition_metals', group: '3B', atomicMass: 44.956, electronConfiguration: '[Ar] 3d1 4s2', density: 2.985, meltingPoint: 1814, boilingPoint: 3109, description: 'Scandium is a chemical element with symbol Sc and atomic number 21.' },
  { atomicNumber: 22, symbol: 'Ti', name: 'Titanium', category: 'transition_metals', group: '4B', atomicMass: 47.867, electronConfiguration: '[Ar] 3d2 4s2', density: 4.506, meltingPoint: 1941, boilingPoint: 3560, description: 'Titanium is a chemical element with symbol Ti and atomic number 22.' },
  { atomicNumber: 23, symbol: 'V', name: 'Vanadium', category: 'transition_metals', group: '5B', atomicMass: 50.942, electronConfiguration: '[Ar] 3d3 4s2', density: 6.0, meltingPoint: 2183, boilingPoint: 3680, description: 'Vanadium is a chemical element with symbol V and atomic number 23.' },
  { atomicNumber: 24, symbol: 'Cr', name: 'Chromium', category: 'transition_metals', group: '6B', atomicMass: 51.996, electronConfiguration: '[Ar] 3d5 4s1', density: 7.15, meltingPoint: 2180, boilingPoint: 2944, description: 'Chromium is a chemical element with symbol Cr and atomic number 24.' },
  { atomicNumber: 25, symbol: 'Mn', name: 'Manganese', category: 'transition_metals', group: '7B', atomicMass: 54.938, electronConfiguration: '[Ar] 3d5 4s2', density: 7.3, meltingPoint: 1519, boilingPoint: 2334, description: 'Manganese is a chemical element with symbol Mn and atomic number 25.' },
  { atomicNumber: 26, symbol: 'Fe', name: 'Iron', category: 'transition_metals', group: '8B', atomicMass: 55.845, electronConfiguration: '[Ar] 3d6 4s2', density: 7.874, meltingPoint: 1811, boilingPoint: 3134, description: 'Iron is a chemical element with symbol Fe and atomic number 26.' },
  { atomicNumber: 27, symbol: 'Co', name: 'Cobalt', category: 'transition_metals', group: '9B', atomicMass: 58.933, electronConfiguration: '[Ar] 3d7 4s2', density: 8.86, meltingPoint: 1768, boilingPoint: 3200, description: 'Cobalt is a chemical element with symbol Co and atomic number 27.' },
  { atomicNumber: 28, symbol: 'Ni', name: 'Nickel', category: 'transition_metals', group: '10B', atomicMass: 58.693, electronConfiguration: '[Ar] 3d8 4s2', density: 8.912, meltingPoint: 1728, boilingPoint: 3003, description: 'Nickel is a chemical element with symbol Ni and atomic number 28.' },
  { atomicNumber: 29, symbol: 'Cu', name: 'Copper', category: 'transition_metals', group: '11B', atomicMass: 63.546, electronConfiguration: '[Ar] 3d10 4s1', density: 8.933, meltingPoint: 1357.77, boilingPoint: 2835, description: 'Copper is a chemical element with symbol Cu and atomic number 29.' },
  { atomicNumber: 30, symbol: 'Zn', name: 'Zinc', category: 'transition_metals', group: '12B', atomicMass: 65.38, electronConfiguration: '[Ar] 3d10 4s2', density: 7.134, meltingPoint: 692.68, boilingPoint: 1180, description: 'Zinc is a chemical element with symbol Zn and atomic number 30.' },
  { atomicNumber: 31, symbol: 'Ga', name: 'Gallium', category: 'post_transition_metals', group: '3A', atomicMass: 69.723, electronConfiguration: '[Ar] 3d10 4s2 4p1', density: 5.91, meltingPoint: 302.9146, boilingPoint: 2673, description: 'Gallium is a chemical element with symbol Ga and atomic number 31.' },
  { atomicNumber: 32, symbol: 'Ge', name: 'Germanium', category: 'metalloids', group: '4A', atomicMass: 72.630, electronConfiguration: '[Ar] 3d10 4s2 4p2', density: 5.323, meltingPoint: 1211.40, boilingPoint: 3106, description: 'Germanium is a chemical element with symbol Ge and atomic number 32.' },
  { atomicNumber: 33, symbol: 'As', name: 'Arsenic', category: 'metalloids', group: '5A', atomicMass: 74.922, electronConfiguration: '[Ar] 3d10 4s2 4p3', density: 5.727, meltingPoint: 1090, boilingPoint: 887, description: 'Arsenic is a chemical element with symbol As and atomic number 33.' },
  { atomicNumber: 34, symbol: 'Se', name: 'Selenium', category: 'nonmetals', group: '6A', atomicMass: 78.971, electronConfiguration: '[Ar] 3d10 4s2 4p4', density: 4.809, meltingPoint: 453, boilingPoint: 958, description: 'Selenium is a chemical element with symbol Se and atomic number 34.' },
  { atomicNumber: 35, symbol: 'Br', name: 'Bromine', category: 'halogens', group: '7A', atomicMass: 79.904, electronConfiguration: '[Ar] 3d10 4s2 4p5', density: 3.1028, meltingPoint: 265.8, boilingPoint: 332.0, description: 'Bromine is a chemical element with symbol Br and atomic number 35.' },
  { atomicNumber: 36, symbol: 'Kr', name: 'Krypton', category: 'noble_gases', group: '18A', atomicMass: 83.798, electronConfiguration: '[Ar] 3d10 4s2 4p6', density: 0.003733, meltingPoint: 115.79, boilingPoint: 119.93, description: 'Krypton is a chemical element with symbol Kr and atomic number 36.' },
  { atomicNumber: 37, symbol: 'Rb', name: 'Rubidium', category: 'alkali_metals', group: '1A', atomicMass: 85.468, electronConfiguration: '[Kr] 5s1', density: 1.532, meltingPoint: 312.46, boilingPoint: 961, description: 'Rubidium is a chemical element with symbol Rb and atomic number 37.' },
  { atomicNumber: 38, symbol: 'Sr', name: 'Strontium', category: 'alkaline_earth_metals', group: '2A', atomicMass: 87.62, electronConfiguration: '[Kr] 5s2', density: 2.64, meltingPoint: 1050, boilingPoint: 1655, description: 'Strontium is a chemical element with symbol Sr and atomic number 38.' },
  { atomicNumber: 39, symbol: 'Y', name: 'Yttrium', category: 'transition_metals', group: '3B', atomicMass: 88.906, electronConfiguration: '[Kr] 4d1 5s2', density: 4.469, meltingPoint: 1799, boilingPoint: 3203, description: 'Yttrium is a chemical element with symbol Y and atomic number 39.' },
  { atomicNumber: 40, symbol: 'Zr', name: 'Zirconium', category: 'transition_metals', group: '4B', atomicMass: 91.224, electronConfiguration: '[Kr] 4d2 5s2', density: 6.52, meltingPoint: 2128, boilingPoint: 4682, description: 'Zirconium is a chemical element with symbol Zr and atomic number 40.' },
  { atomicNumber: 41, symbol: 'Nb', name: 'Niobium', category: 'transition_metals', group: '5B', atomicMass: 92.906, electronConfiguration: '[Kr] 4d4 5s1', density: 8.57, meltingPoint: 2750, boilingPoint: 5017, description: 'Niobium is a chemical element with symbol Nb and atomic number 41.' },
  { atomicNumber: 42, symbol: 'Mo', name: 'Molybdenum', category: 'transition_metals', group: '6B', atomicMass: 95.95, electronConfiguration: '[Kr] 4d5 5s1', density: 10.2, meltingPoint: 2896, boilingPoint: 4912, description: 'Molybdenum is a chemical element with symbol Mo and atomic number 42.' },
  { atomicNumber: 43, symbol: 'Tc', name: 'Technetium', category: 'transition_metals', group: '7B', atomicMass: 98, electronConfiguration: '[Kr] 4d5 5s2', density: 11, meltingPoint: 2430, boilingPoint: 4538, description: 'Technetium is a chemical element with symbol Tc and atomic number 43.' },
  { atomicNumber: 44, symbol: 'Ru', name: 'Ruthenium', category: 'transition_metals', group: '8B', atomicMass: 101.07, electronConfiguration: '[Kr] 4d7 5s1', density: 12.1, meltingPoint: 2607, boilingPoint: 4423, description: 'Ruthenium is a chemical element with symbol Ru and atomic number 44.' },
  { atomicNumber: 45, symbol: 'Rh', name: 'Rhodium', category: 'transition_metals', group: '9B', atomicMass: 102.91, electronConfiguration: '[Kr] 4d8 5s1', density: 12.4, meltingPoint: 2237, boilingPoint: 3968, description: 'Rhodium is a chemical element with symbol Rh and atomic number 45.' },
  { atomicNumber: 46, symbol: 'Pd', name: 'Palladium', category: 'transition_metals', group: '10B', atomicMass: 106.42, electronConfiguration: '[Kr] 4d10', density: 12.0, meltingPoint: 1828.05, boilingPoint: 3236, description: 'Palladium is a chemical element with symbol Pd and atomic number 46.' },
  { atomicNumber: 47, symbol: 'Ag', name: 'Silver', category: 'transition_metals', group: '11B', atomicMass: 107.87, electronConfiguration: '[Kr] 4d10 5s1', density: 10.501, meltingPoint: 1234.93, boilingPoint: 2435, description: 'Silver is a chemical element with symbol Ag and atomic number 47.' },
  { atomicNumber: 48, symbol: 'Cd', name: 'Cadmium', category: 'transition_metals', group: '12B', atomicMass: 112.41, electronConfiguration: '[Kr] 4d10 5s2', density: 8.69, meltingPoint: 594.22, boilingPoint: 1040, description: 'Cadmium is a chemical element with symbol Cd and atomic number 48.' },
  { atomicNumber: 49, symbol: 'In', name: 'Indium', category: 'post_transition_metals', group: '3A', atomicMass: 114.82, electronConfiguration: '[Kr] 4d10 5s2 5p1', density: 7.31, meltingPoint: 429.75, boilingPoint: 2345, description: 'Indium is a chemical element with symbol In and atomic number 49.' },
  { atomicNumber: 50, symbol: 'Sn', name: 'Tin', category: 'post_transition_metals', group: '4A', atomicMass: 118.71, electronConfiguration: '[Kr] 4d10 5s2 5p2', density: 7.287, meltingPoint: 505.08, boilingPoint: 2875, description: 'Tin is a chemical element with symbol Sn and atomic number 50.' },
  { atomicNumber: 51, symbol: 'Sb', name: 'Antimony', category: 'metalloids', group: '5A', atomicMass: 121.76, electronConfiguration: '[Kr] 4d10 5s2 5p3', density: 6.685, meltingPoint: 903.78, boilingPoint: 1860, description: 'Antimony is a chemical element with symbol Sb and atomic number 51.' },
  { atomicNumber: 52, symbol: 'Te', name: 'Tellurium', category: 'metalloids', group: '6A', atomicMass: 127.60, electronConfiguration: '[Kr] 4d10 5s2 5p4', density: 6.232, meltingPoint: 722.66, boilingPoint: 1261, description: 'Tellurium is a chemical element with symbol Te and atomic number 52.' },
  { atomicNumber: 53, symbol: 'I', name: 'Iodine', category: 'halogens', group: '7A', atomicMass: 126.90, electronConfiguration: '[Kr] 4d10 5s2 5p5', density: 4.933, meltingPoint: 386.85, boilingPoint: 457.4, description: 'Iodine is a chemical element with symbol I and atomic number 53.' },
  { atomicNumber: 54, symbol: 'Xe', name: 'Xenon', category: 'noble_gases', group: '18A', atomicMass: 131.29, electronConfiguration: '[Kr] 4d10 5s2 5p6', density: 0.005887, meltingPoint: 161.4, boilingPoint: 165.03, description: 'Xenon is a chemical element with symbol Xe and atomic number 54.' },
  { atomicNumber: 55, symbol: 'Cs', name: 'Cesium', category: 'alkali_metals', group: '1A', atomicMass: 132.91, electronConfiguration: '[Xe] 6s1', density: 1.873, meltingPoint: 301.7, boilingPoint: 944, description: 'Cesium is a chemical element with symbol Cs and atomic number 55.' },
  { atomicNumber: 56, symbol: 'Ba', name: 'Barium', category: 'alkaline_earth_metals', group: '2A', atomicMass: 137.33, electronConfiguration: '[Xe] 6s2', density: 3.62, meltingPoint: 1000, boilingPoint: 2170, description: 'Barium is a chemical element with symbol Ba and atomic number 56.' },
  { atomicNumber: 57, symbol: 'La', name: 'Lanthanum', category: 'lanthanides', group: 'L', atomicMass: 138.91, electronConfiguration: '[Xe] 5d1 6s2', density: 6.145, meltingPoint: 1193, boilingPoint: 3737, description: 'Lanthanum is a chemical element with symbol La and atomic number 57.' },
  { atomicNumber: 58, symbol: 'Ce', name: 'Cerium', category: 'lanthanides', group: 'L', atomicMass: 140.12, electronConfiguration: '[Xe] 4f1 5d1 6s2', density: 6.770, meltingPoint: 1068, boilingPoint: 3716, description: 'Cerium is a chemical element with symbol Ce and atomic number 58.' },
  { atomicNumber: 59, symbol: 'Pr', name: 'Praseodymium', category: 'lanthanides', group: 'L', atomicMass: 140.91, electronConfiguration: '[Xe] 4f3 6s2', density: 6.77, meltingPoint: 1208, boilingPoint: 3793, description: 'Praseodymium is a chemical element with symbol Pr and atomic number 59.' },
  { atomicNumber: 60, symbol: 'Nd', name: 'Neodymium', category: 'lanthanides', group: 'L', atomicMass: 144.24, electronConfiguration: '[Xe] 4f4 6s2', density: 7.01, meltingPoint: 1297, boilingPoint: 3347, description: 'Neodymium is a chemical element with symbol Nd and atomic number 60.' },
  { atomicNumber: 61, symbol: 'Pm', name: 'Promethium', category: 'lanthanides', group: 'L', atomicMass: 145, electronConfiguration: '[Xe] 4f5 6s2', density: 7.26, meltingPoint: 1315, boilingPoint: 3273, description: 'Promethium is a chemical element with symbol Pm and atomic number 61.' },
  { atomicNumber: 62, symbol: 'Sm', name: 'Samarium', category: 'lanthanides', group: 'L', atomicMass: 150.36, electronConfiguration: '[Xe] 4f6 6s2', density: 7.52, meltingPoint: 1345, boilingPoint: 2067, description: 'Samarium is a chemical element with symbol Sm and atomic number 62.' },
  { atomicNumber: 63, symbol: 'Eu', name: 'Europium', category: 'lanthanides', group: 'L', atomicMass: 151.96, electronConfiguration: '[Xe] 4f7 6s2', density: 5.244, meltingPoint: 1099, boilingPoint: 1802, description: 'Europium is a chemical element with symbol Eu and atomic number 63.' },
  { atomicNumber: 64, symbol: 'Gd', name: 'Gadolinium', category: 'lanthanides', group: 'L', atomicMass: 157.25, electronConfiguration: '[Xe] 4f7 5d1 6s2', density: 7.90, meltingPoint: 1585, boilingPoint: 3546, description: 'Gadolinium is a chemical element with symbol Gd and atomic number 64.' },
  { atomicNumber: 65, symbol: 'Tb', name: 'Terbium', category: 'lanthanides', group: 'L', atomicMass: 158.93, electronConfiguration: '[Xe] 4f9 6s2', density: 8.23, meltingPoint: 1629, boilingPoint: 3503, description: 'Terbium is a chemical element with symbol Tb and atomic number 65.' },
  { atomicNumber: 66, symbol: 'Dy', name: 'Dysprosium', category: 'lanthanides', group: 'L', atomicMass: 162.50, electronConfiguration: '[Xe] 4f10 6s2', density: 8.55, meltingPoint: 1680, boilingPoint: 2840, description: 'Dysprosium is a chemical element with symbol Dy and atomic number 66.' },
  { atomicNumber: 67, symbol: 'Ho', name: 'Holmium', category: 'lanthanides', group: 'L', atomicMass: 164.93, electronConfiguration: '[Xe] 4f11 6s2', density: 8.80, meltingPoint: 1734, boilingPoint: 2993, description: 'Holmium is a chemical element with symbol Ho and atomic number 67.' },
  { atomicNumber: 68, symbol: 'Er', name: 'Erbium', category: 'lanthanides', group: 'L', atomicMass: 167.26, electronConfiguration: '[Xe] 4f12 6s2', density: 9.07, meltingPoint: 1802, boilingPoint: 3141, description: 'Erbium is a chemical element with symbol Er and atomic number 68.' },
  { atomicNumber: 69, symbol: 'Tm', name: 'Thulium', category: 'lanthanides', group: 'L', atomicMass: 168.93, electronConfiguration: '[Xe] 4f13 6s2', density: 9.32, meltingPoint: 1818, boilingPoint: 2223, description: 'Thulium is a chemical element with symbol Tm and atomic number 69.' },
  { atomicNumber: 70, symbol: 'Yb', name: 'Ytterbium', category: 'lanthanides', group: 'L', atomicMass: 173.05, electronConfiguration: '[Xe] 4f14 6s2', density: 6.90, meltingPoint: 1097, boilingPoint: 1469, description: 'Ytterbium is a chemical element with symbol Yb and atomic number 70.' },
  { atomicNumber: 71, symbol: 'Lu', name: 'Lutetium', category: 'lanthanides', group: 'L', atomicMass: 174.97, electronConfiguration: '[Xe] 4f14 5d1 6s2', density: 9.84, meltingPoint: 1925, boilingPoint: 3675, description: 'Lutetium is a chemical element with symbol Lu and atomic number 71.' },
  { atomicNumber: 72, symbol: 'Hf', name: 'Hafnium', category: 'transition_metals', group: '4B', atomicMass: 178.49, electronConfiguration: '[Xe] 4f14 5d2 6s2', density: 13.3, meltingPoint: 2506, boilingPoint: 4876, description: 'Hafnium is a chemical element with symbol Hf and atomic number 72.' },
  { atomicNumber: 73, symbol: 'Ta', name: 'Tantalum', category: 'transition_metals', group: '5B', atomicMass: 180.95, electronConfiguration: '[Xe] 4f14 5d3 6s2', density: 16.4, meltingPoint: 3290, boilingPoint: 5731, description: 'Tantalum is a chemical element with symbol Ta and atomic number 73.' },
  { atomicNumber: 74, symbol: 'W', name: 'Tungsten', category: 'transition_metals', group: '6B', atomicMass: 183.84, electronConfiguration: '[Xe] 4f14 5d4 6s2', density: 19.3, meltingPoint: 3695, boilingPoint: 5828, description: 'Tungsten is a chemical element with symbol W and atomic number 74.' },
  { atomicNumber: 75, symbol: 'Re', name: 'Rhenium', category: 'transition_metals', group: '7B', atomicMass: 186.21, electronConfiguration: '[Xe] 4f14 5d5 6s2', density: 20.8, meltingPoint: 3459, boilingPoint: 5869, description: 'Rhenium is a chemical element with symbol Re and atomic number 75.' },
  { atomicNumber: 76, symbol: 'Os', name: 'Osmium', category: 'transition_metals', group: '8B', atomicMass: 190.23, electronConfiguration: '[Xe] 4f14 5d6 6s2', density: 22.61, meltingPoint: 3306, boilingPoint: 5285, description: 'Osmium is a chemical element with symbol Os and atomic number 76.' },
  { atomicNumber: 77, symbol: 'Ir', name: 'Iridium', category: 'transition_metals', group: '9B', atomicMass: 192.22, electronConfiguration: '[Xe] 4f14 5d7 6s2', density: 22.56, meltingPoint: 2739, boilingPoint: 4701, description: 'Iridium is a chemical element with symbol Ir and atomic number 77.' },
  { atomicNumber: 78, symbol: 'Pt', name: 'Platinum', category: 'transition_metals', group: '10B', atomicMass: 195.08, electronConfiguration: '[Xe] 4f14 5d9 6s1', density: 21.46, meltingPoint: 2041.4, boilingPoint: 4098, description: 'Platinum is a chemical element with symbol Pt and atomic number 78.' },
  { atomicNumber: 79, symbol: 'Au', name: 'Gold', category: 'transition_metals', group: '11B', atomicMass: 196.97, electronConfiguration: '[Xe] 4f14 5d10 6s1', density: 19.282, meltingPoint: 1337.33, boilingPoint: 3129, description: 'Gold is a chemical element with symbol Au and atomic number 79.' },
  { atomicNumber: 80, symbol: 'Hg', name: 'Mercury', category: 'transition_metals', group: '12B', atomicMass: 200.59, electronConfiguration: '[Xe] 4f14 5d10 6s2', density: 13.5336, meltingPoint: 234.43, boilingPoint: 629.88, description: 'Mercury is a chemical element with symbol Hg and atomic number 80.' },
  { atomicNumber: 81, symbol: 'Tl', name: 'Thallium', category: 'post_transition_metals', group: '3A', atomicMass: 204.38, electronConfiguration: '[Xe] 4f14 5d10 6s2 6p1', density: 11.8, meltingPoint: 577, boilingPoint: 1746, description: 'Thallium is a chemical element with symbol Tl and atomic number 81.' },
  { atomicNumber: 82, symbol: 'Pb', name: 'Lead', category: 'post_transition_metals', group: '4A', atomicMass: 207.2, electronConfiguration: '[Xe] 4f14 5d10 6s2 6p2', density: 11.342, meltingPoint: 600.61, boilingPoint: 2022, description: 'Lead is a chemical element with symbol Pb and atomic number 82.' },
  { atomicNumber: 83, symbol: 'Bi', name: 'Bismuth', category: 'post_transition_metals', group: '5A', atomicMass: 208.98, electronConfiguration: '[Xe] 4f14 5d10 6s2 6p3', density: 9.807, meltingPoint: 544.7, boilingPoint: 1837, description: 'Bismuth is a chemical element with symbol Bi and atomic number 83.' },
  { atomicNumber: 84, symbol: 'Po', name: 'Polonium', category: 'post_transition_metals', group: '6A', atomicMass: 209, electronConfiguration: '[Xe] 4f14 5d10 6s2 6p4', density: 9.20, meltingPoint: 527, boilingPoint: 1235, description: 'Polonium is a chemical element with symbol Po and atomic number 84.' },
  { atomicNumber: 85, symbol: 'At', name: 'Astatine', category: 'halogens', group: '7A', atomicMass: 210, electronConfiguration: '[Xe] 4f14 5d10 6s2 6p5', density: 7, meltingPoint: 575, boilingPoint: 610, description: 'Astatine is a chemical element with symbol At and atomic number 85.' },
  { atomicNumber: 86, symbol: 'Rn', name: 'Radon', category: 'noble_gases', group: '18A', atomicMass: 222, electronConfiguration: '[Xe] 4f14 5d10 6s2 6p6', density: 0.00973, meltingPoint: 202, boilingPoint: 211.3, description: 'Radon is a chemical element with symbol Rn and atomic number 86.' },
  { atomicNumber: 87, symbol: 'Fr', name: 'Francium', category: 'alkali_metals', group: '1A', atomicMass: 223, electronConfiguration: '[Rn] 7s1', density: 1.87, meltingPoint: 300, boilingPoint: 950, description: 'Francium is a chemical element with symbol Fr and atomic number 87.' },
  { atomicNumber: 88, symbol: 'Ra', name: 'Radium', category: 'alkaline_earth_metals', group: '2A', atomicMass: 226, electronConfiguration: '[Rn] 7s2', density: 5.5, meltingPoint: 973, boilingPoint: 2010, description: 'Radium is a chemical element with symbol Ra and atomic number 88.' },
  { atomicNumber: 89, symbol: 'Ac', name: 'Actinium', category: 'actinides', group: 'A', atomicMass: 227, electronConfiguration: '[Rn] 6d1 7s2', density: 10.07, meltingPoint: 1323, boilingPoint: 3471, description: 'Actinium is a chemical element with symbol Ac and atomic number 89.' },
  { atomicNumber: 90, symbol: 'Th', name: 'Thorium', category: 'actinides', group: 'A', atomicMass: 232.04, electronConfiguration: '[Rn] 6d2 7s2', density: 11.72, meltingPoint: 2115, boilingPoint: 5061, description: 'Thorium is a chemical element with symbol Th and atomic number 90.' },
  { atomicNumber: 91, symbol: 'Pa', name: 'Protactinium', category: 'actinides', group: 'A', atomicMass: 231.04, electronConfiguration: '[Rn] 5f2 6d1 7s2', density: 15.37, meltingPoint: 1841, boilingPoint: 4300, description: 'Protactinium is a chemical element with symbol Pa and atomic number 91.' },
  { atomicNumber: 92, symbol: 'U', name: 'Uranium', category: 'actinides', group: 'A', atomicMass: 238.03, electronConfiguration: '[Rn] 5f3 6d1 7s2', density: 19.1, meltingPoint: 1405.3, boilingPoint: 4404, description: 'Uranium is a chemical element with symbol U and atomic number 92.' },
  { atomicNumber: 93, symbol: 'Np', name: 'Neptunium', category: 'actinides', group: 'A', atomicMass: 237, electronConfiguration: '[Rn] 5f4 6d1 7s2', density: 20.45, meltingPoint: 917, boilingPoint: 4273, description: 'Neptunium is a chemical element with symbol Np and atomic number 93.' },
  { atomicNumber: 94, symbol: 'Pu', name: 'Plutonium', category: 'actinides', group: 'A', atomicMass: 244, electronConfiguration: '[Rn] 5f6 7s2', density: 19.86, meltingPoint: 912.5, boilingPoint: 3501, description: 'Plutonium is a chemical element with symbol Pu and atomic number 94.' },
  { atomicNumber: 95, symbol: 'Am', name: 'Americium', category: 'actinides', group: 'A', atomicMass: 243, electronConfiguration: '[Rn] 5f7 7s2', density: 13.69, meltingPoint: 1449, boilingPoint: 2880, description: 'Americium is a chemical element with symbol Am and atomic number 95.' },
  { atomicNumber: 96, symbol: 'Cm', name: 'Curium', category: 'actinides', group: 'A', atomicMass: 247, electronConfiguration: '[Rn] 5f7 6d1 7s2', density: 13.51, meltingPoint: 1613, boilingPoint: 3383, description: 'Curium is a chemical element with symbol Cm and atomic number 96.' },
  { atomicNumber: 97, symbol: 'Bk', name: 'Berkelium', category: 'actinides', group: 'A', atomicMass: 247, electronConfiguration: '[Rn] 5f9 7s2', density: 14.79, meltingPoint: 1259, boilingPoint: 2900, description: 'Berkelium is a chemical element with symbol Bk and atomic number 97.' },
  { atomicNumber: 98, symbol: 'Cf', name: 'Californium', category: 'actinides', group: 'A', atomicMass: 251, electronConfiguration: '[Rn] 5f10 7s2', density: 15.1, meltingPoint: 1173, boilingPoint: 1743, description: 'Californium is a chemical element with symbol Cf and atomic number 98.' },
  { atomicNumber: 99, symbol: 'Es', name: 'Einsteinium', category: 'actinides', group: 'A', atomicMass: 252, electronConfiguration: '[Rn] 5f11 7s2', density: 8.84, meltingPoint: 1133, boilingPoint: 1269, description: 'Einsteinium is a chemical element with symbol Es and atomic number 99.' },
  { atomicNumber: 100, symbol: 'Fm', name: 'Fermium', category: 'actinides', group: 'A', atomicMass: 257, electronConfiguration: '[Rn] 5f12 7s2', density: null, meltingPoint: 1800, boilingPoint: null, description: 'Fermium is a chemical element with symbol Fm and atomic number 100.' },
  { atomicNumber: 101, symbol: 'Md', name: 'Mendelevium', category: 'actinides', group: 'A', atomicMass: 258, electronConfiguration: '[Rn] 5f13 7s2', density: null, meltingPoint: 1100, boilingPoint: null, description: 'Mendelevium is a chemical element with symbol Md and atomic number 101.' },
  { atomicNumber: 102, symbol: 'No', name: 'Nobelium', category: 'actinides', group: 'A', atomicMass: 259, electronConfiguration: '[Rn] 5f14 7s2', density: null, meltingPoint: 1100, boilingPoint: null, description: 'Nobelium is a chemical element with symbol No and atomic number 102.' },
  { atomicNumber: 103, symbol: 'Lr', name: 'Lawrencium', category: 'actinides', group: 'A', atomicMass: 262, electronConfiguration: '[Rn] 5f14 7s2 7p1', density: null, meltingPoint: 1900, boilingPoint: null, description: 'Lawrencium is a chemical element with symbol Lr and atomic number 103.' },
  { atomicNumber: 104, symbol: 'Rf', name: 'Rutherfordium', category: 'transition_metals', group: '4B', atomicMass: 267, electronConfiguration: '[Rn] 5f14 6d2 7s2', density: null, meltingPoint: 2400, boilingPoint: 5800, description: 'Rutherfordium is a chemical element with symbol Rf and atomic number 104.' },
  { atomicNumber: 105, symbol: 'Db', name: 'Dubnium', category: 'transition_metals', group: '5B', atomicMass: 270, electronConfiguration: '[Rn] 5f14 6d3 7s2', density: null, meltingPoint: null, boilingPoint: null, description: 'Dubnium is a chemical element with symbol Db and atomic number 105.' },
  { atomicNumber: 106, symbol: 'Sg', name: 'Seaborgium', category: 'transition_metals', group: '6B', atomicMass: 271, electronConfiguration: '[Rn] 5f14 6d4 7s2', density: null, meltingPoint: null, boilingPoint: null, description: 'Seaborgium is a chemical element with symbol Sg and atomic number 106.' },
  { atomicNumber: 107, symbol: 'Bh', name: 'Bohrium', category: 'transition_metals', group: '7B', atomicMass: 270, electronConfiguration: '[Rn] 5f14 6d5 7s2', density: null, meltingPoint: null, boilingPoint: null, description: 'Bohrium is a chemical element with symbol Bh and atomic number 107.' },
  { atomicNumber: 108, symbol: 'Hs', name: 'Hassium', category: 'transition_metals', group: '8B', atomicMass: 277, electronConfiguration: '[Rn] 5f14 6d6 7s2', density: null, meltingPoint: null, boilingPoint: null, description: 'Hassium is a chemical element with symbol Hs and atomic number 108.' },
  { atomicNumber: 109, symbol: 'Mt', name: 'Meitnerium', category: 'transition_metals', group: '9B', atomicMass: 278, electronConfiguration: '[Rn] 5f14 6d7 7s2', density: null, meltingPoint: null, boilingPoint: null, description: 'Meitnerium is a chemical element with symbol Mt and atomic number 109.' },
  { atomicNumber: 110, symbol: 'Ds', name: 'Darmstadtium', category: 'transition_metals', group: '10B', atomicMass: 281, electronConfiguration: '[Rn] 5f14 6d8 7s2', density: null, meltingPoint: null, boilingPoint: null, description: 'Darmstadtium is a chemical element with symbol Ds and atomic number 110.' },
  { atomicNumber: 111, symbol: 'Rg', name: 'Roentgenium', category: 'transition_metals', group: '11B', atomicMass: 282, electronConfiguration: '[Rn] 5f14 6d9 7s2', density: null, meltingPoint: null, boilingPoint: null, description: 'Roentgenium is a chemical element with symbol Rg and atomic number 111.' },
  { atomicNumber: 112, symbol: 'Cn', name: 'Copernicium', category: 'transition_metals', group: '12B', atomicMass: 285, electronConfiguration: '[Rn] 5f14 6d10 7s2', density: null, meltingPoint: null, boilingPoint: null, description: 'Copernicium is a chemical element with symbol Cn and atomic number 112.' },
  { atomicNumber: 113, symbol: 'Nh', name: 'Nihonium', category: 'post_transition_metals', group: '3A', atomicMass: 286, electronConfiguration: '[Rn] 5f14 6d10 7s2 7p1', density: null, meltingPoint: null, boilingPoint: null, description: 'Nihonium is a chemical element with symbol Nh and atomic number 113.' },
  { atomicNumber: 114, symbol: 'Fl', name: 'Flerovium', category: 'post_transition_metals', group: '4A', atomicMass: 289, electronConfiguration: '[Rn] 5f14 6d10 7s2 7p2', density: null, meltingPoint: null, boilingPoint: null, description: 'Flerovium is a chemical element with symbol Fl and atomic number 114.' },
  { atomicNumber: 115, symbol: 'Mc', name: 'Moscovium', category: 'post_transition_metals', group: '5A', atomicMass: 290, electronConfiguration: '[Rn] 5f14 6d10 7s2 7p3', density: null, meltingPoint: null, boilingPoint: null, description: 'Moscovium is a chemical element with symbol Mc and atomic number 115.' },
  { atomicNumber: 116, symbol: 'Lv', name: 'Livermorium', category: 'post_transition_metals', group: '6A', atomicMass: 293, electronConfiguration: '[Rn] 5f14 6d10 7s2 7p4', density: null, meltingPoint: null, boilingPoint: null, description: 'Livermorium is a chemical element with symbol Lv and atomic number 116.' },
  { atomicNumber: 117, symbol: 'Ts', name: 'Tennessine', category: 'halogens', group: '7A', atomicMass: 294, electronConfiguration: '[Rn] 5f14 6d10 7s2 7p5', density: null, meltingPoint: null, boilingPoint: null, description: 'Tennessine is a chemical element with symbol Ts and atomic number 117.' },
  { atomicNumber: 118, symbol: 'Og', name: 'Oganesson', category: 'noble_gases', group: '18A', atomicMass: 294, electronConfiguration: '[Rn] 5f14 6d10 7s2 7p6', density: null, meltingPoint: null, boilingPoint: null, description: 'Oganesson is a chemical element with symbol Og and atomic number 118.' }
];

const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const resultDiv = document.getElementById('result');

function displayElement(element) {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <strong>${element.name} (${element.symbol})</strong><br>
      atomic number: ${element.atomicNumber}<br>
      category: ${element.category.replace(/_/g, ' ')}<br>
      group: ${element.group}<br>
      atomic mass: ${element.atomicMass}<br>
      electron configuration: ${element.electronConfiguration}<br>
      density: ${element.density} g/cm³<br>
      melting point: ${element.meltingPoint} K<br>
      boiling point: ${element.boilingPoint} K<br>
      description: ${element.description}
      <br><button class="copy-btn">copy info</button>
    `;

    // copy to clipboard functionality
    card.querySelector('.copy-btn').addEventListener('click', () => {
        navigator.clipboard.writeText(`
${element.name} (${element.symbol})
atomic number: ${element.atomicNumber}
category: ${element.category.replace(/_/g, ' ')}
group: ${element.group}
atomic mass: ${element.atomicMass}
electron configuration: ${element.electronConfiguration}
density: ${element.density} g/cm³
melting point: ${element.meltingPoint} K
boiling point: ${element.boilingPoint} K
description: ${element.description}
        `);
        alert(`${element.name} info copied to clipboard!`);
    });

    resultDiv.appendChild(card);
}

function searchElements() {
    const query = searchInput.value.toLowerCase().trim();
    resultDiv.innerHTML = '';

    if (!query) return;

    const foundElements = elementsData.filter(el => 
        el.name.toLowerCase().includes(query) ||
        el.symbol.toLowerCase().includes(query) ||
        el.atomicNumber.toString() === query ||
        el.atomicMass.toString().includes(query) ||
        el.category.toLowerCase().includes(query)
    );

    if (foundElements.length) {
        foundElements.forEach(displayElement);
    } else {
        resultDiv.textContent = 'no element found';
    }
}

// search on button click
searchBtn.addEventListener('click', searchElements);

// live search as user types
searchInput.addEventListener('input', searchElements);
