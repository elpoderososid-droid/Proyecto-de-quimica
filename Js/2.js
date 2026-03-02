const container = document.querySelector('.container');
const filterBtn = document.getElementById('btn-f');

filterBtn.addEventListener('click', () => {
    container.classList.toggle('show-groups');
    
    // Cambiar el texto del botón según el estado
    if (container.classList.contains('show-groups')) {
        filterBtn.textContent = '✨ Vista normal';
    } else {
        filterBtn.textContent = '🎨 Colorear por grupo';
    }
});


/*arrays*/
const elementosTablaPeriodica = [
  {
    "nombre": "Hidrógeno",
    "simbolo": "H",
    "numeroAtomico": 1,
    "masaAtomica": 1.008,
    "tipo": "No metal",
    "estado": "Gaseoso",
    "grupo": 1,
    "descripcion": "El hidrógeno es el elemento químico más ligero y abundante del universo."
  },
  {
    "nombre": "Helio",
    "simbolo": "He",
    "numeroAtomico": 2,
    "masaAtomica": 4.0026,
    "tipo": "Gas noble",
    "estado": "Gaseoso",
    "grupo": 18,
    "descripcion": "El helio es un gas noble incoloro, inodoro e insípido, utilizado en globos y como refrigerante criogénico."
  },
  {
    "nombre": "Litio",
    "simbolo": "Li",
    "numeroAtomico": 3,
    "masaAtomica": 6.94,
    "tipo": "Metal alcalino",
    "estado": "Sólido",
    "grupo": 1,
    "descripcion": "El litio es el metal más ligero, utilizado en baterías recargables y tratamientos psiquiátricos."
  },
  {
    "nombre": "Berilio",
    "simbolo": "Be",
    "numeroAtomico": 4,
    "masaAtomica": 9.0122,
    "tipo": "Metal alcalinotérreo",
    "estado": "Sólido",
    "grupo": 2,
    "descripcion": "El berilio es un metal ligero y resistente, utilizado en aleaciones para aplicaciones aeroespaciales."
  },
  {
    "nombre": "Boro",
    "simbolo": "B",
    "numeroAtomico": 5,
    "masaAtomica": 10.81,
    "tipo": "Metaloide",
    "estado": "Sólido",
    "grupo": 13,
    "descripcion": "El boro es un metaloide duro utilizado en compuestos de vidrio borosilicato y como semiconductor."
  },
  {
    "nombre": "Carbono",
    "simbolo": "C",
    "numeroAtomico": 6,
    "masaAtomica": 12.011,
    "tipo": "No metal",
    "estado": "Sólido",
    "grupo": 14,
    "descripcion": "El carbono es la base de la química orgánica y existe en formas como diamante, grafito y fullerenos."
  },
  {
    "nombre": "Nitrógeno",
    "simbolo": "N",
    "numeroAtomico": 7,
    "masaAtomica": 14.007,
    "tipo": "No metal",
    "estado": "Gaseoso",
    "grupo": 15,
    "descripcion": "El nitrógeno constituye el 78% de la atmósfera terrestre y es esencial para la vida."
  },
  {
    "nombre": "Oxígeno",
    "simbolo": "O",
    "numeroAtomico": 8,
    "masaAtomica": 15.999,
    "tipo": "No metal",
    "estado": "Gaseoso",
    "grupo": 16,
    "descripcion": "El oxígeno es esencial para la respiración y es el elemento más abundante en la corteza terrestre."
  },
  {
    "nombre": "Flúor",
    "simbolo": "F",
    "numeroAtomico": 9,
    "masaAtomica": 18.998,
    "tipo": "Halógeno",
    "estado": "Gaseoso",
    "grupo": 17,
    "descripcion": "El flúor es el elemento más electronegativo y reactivo, utilizado en pastas dentales y refrigerantes."
  },
  {
    "nombre": "Neón",
    "simbolo": "Ne",
    "numeroAtomico": 10,
    "masaAtomica": 20.180,
    "tipo": "Gas noble",
    "estado": "Gaseoso",
    "grupo": 18,
    "descripcion": "El neón produce una luz rojiza característica cuando se ioniza, utilizado en letreros luminosos."
  },
  {
    "nombre": "Sodio",
    "simbolo": "Na",
    "numeroAtomico": 11,
    "masaAtomica": 22.990,
    "tipo": "Metal alcalino",
    "estado": "Sólido",
    "grupo": 1,
    "descripcion": "El sodio es un metal blando y reactivo, esencial para la vida y componente de la sal común."
  },
  {
    "nombre": "Magnesio",
    "simbolo": "Mg",
    "numeroAtomico": 12,
    "masaAtomica": 24.305,
    "tipo": "Metal alcalinotérreo",
    "estado": "Sólido",
    "grupo": 2,
    "descripcion": "El magnesio es un metal ligero utilizado en aleaciones y esencial para la fotosíntesis."
  },
  {
    "nombre": "Aluminio",
    "simbolo": "Al",
    "numeroAtomico": 13,
    "masaAtomica": 26.982,
    "tipo": "Metal del bloque p",
    "estado": "Sólido",
    "grupo": 13,
    "descripcion": "El aluminio es un metal ligero, resistente a la corrosión y el más abundante en la corteza terrestre."
  },
  {
    "nombre": "Silicio",
    "simbolo": "Si",
    "numeroAtomico": 14,
    "masaAtomica": 28.085,
    "tipo": "Metaloide",
    "estado": "Sólido",
    "grupo": 14,
    "descripcion": "El silicio es el segundo elemento más abundante y fundamental en la industria electrónica."
  },
  {
    "nombre": "Fósforo",
    "simbolo": "P",
    "numeroAtomico": 15,
    "masaAtomica": 30.974,
    "tipo": "No metal",
    "estado": "Sólido",
    "grupo": 15,
    "descripcion": "El fósforo es esencial para la vida y existe en formas blanca, roja y negra."
  },
  {
    "nombre": "Azufre",
    "simbolo": "S",
    "numeroAtomico": 16,
    "masaAtomica": 32.06,
    "tipo": "No metal",
    "estado": "Sólido",
    "grupo": 16,
    "descripcion": "El azufre es conocido por su color amarillo y olor característico, utilizado en fertilizantes."
  },
  {
    "nombre": "Cloro",
    "simbolo": "Cl",
    "numeroAtomico": 17,
    "masaAtomica": 35.45,
    "tipo": "Halógeno",
    "estado": "Gaseoso",
    "grupo": 17,
    "descripcion": "El cloro es un gas verde-amarillento utilizado como desinfectante y en la producción de PVC."
  },
  {
    "nombre": "Argón",
    "simbolo": "Ar",
    "numeroAtomico": 18,
    "masaAtomica": 39.948,
    "tipo": "Gas noble",
    "estado": "Gaseoso",
    "grupo": 18,
    "descripcion": "El argón es un gas inerte utilizado en iluminación y como atmósfera protectora en soldadura."
  },
  {
    "nombre": "Potasio",
    "simbolo": "K",
    "numeroAtomico": 19,
    "masaAtomica": 39.098,
    "tipo": "Metal alcalino",
    "estado": "Sólido",
    "grupo": 1,
    "descripcion": "El potasio es esencial para la función celular y se encuentra en fertilizantes."
  },
  {
    "nombre": "Calcio",
    "simbolo": "Ca",
    "numeroAtomico": 20,
    "masaAtomica": 40.078,
    "tipo": "Metal alcalinotérreo",
    "estado": "Sólido",
    "grupo": 2,
    "descripcion": "El calcio es fundamental para huesos y dientes, y se encuentra en la caliza."
  },
  {
    "nombre": "Escandio",
    "simbolo": "Sc",
    "numeroAtomico": 21,
    "masaAtomica": 44.956,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El escandio se utiliza en aleaciones de aluminio para aplicaciones aeroespaciales."
  },
  {
    "nombre": "Titanio",
    "simbolo": "Ti",
    "numeroAtomico": 22,
    "masaAtomica": 47.867,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 4,
    "descripcion": "El titanio es conocido por su alta resistencia y baja densidad, utilizado en implantes y aviones."
  },
  {
    "nombre": "Vanadio",
    "simbolo": "V",
    "numeroAtomico": 23,
    "masaAtomica": 50.942,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 5,
    "descripcion": "El vanadio se utiliza en aleaciones de acero para aumentar su resistencia."
  },
  {
    "nombre": "Cromo",
    "simbolo": "Cr",
    "numeroAtomico": 24,
    "masaAtomica": 51.996,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 6,
    "descripcion": "El cromo se utiliza para cromado y en aleaciones resistentes a la corrosión."
  },
  {
    "nombre": "Manganeso",
    "simbolo": "Mn",
    "numeroAtomico": 25,
    "masaAtomica": 54.938,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 7,
    "descripcion": "El manganeso es esencial para la producción de acero y para la fotosíntesis."
  },
  {
    "nombre": "Hierro",
    "simbolo": "Fe",
    "numeroAtomico": 26,
    "masaAtomica": 55.845,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 8,
    "descripcion": "El hierro es el metal más utilizado, componente principal del acero y esencial para la sangre."
  },
  {
    "nombre": "Cobalto",
    "simbolo": "Co",
    "numeroAtomico": 27,
    "masaAtomica": 58.933,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 9,
    "descripcion": "El cobalto se utiliza en imanes, baterías y como pigmento azul."
  },
  {
    "nombre": "Níquel",
    "simbolo": "Ni",
    "numeroAtomico": 28,
    "masaAtomica": 58.693,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 10,
    "descripcion": "El níquel es resistente a la corrosión, utilizado en monedas y aleaciones."
  },
  {
    "nombre": "Cobre",
    "simbolo": "Cu",
    "numeroAtomico": 29,
    "masaAtomica": 63.546,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 11,
    "descripcion": "El cobre es excelente conductor eléctrico, utilizado en cables y tuberías."
  },
  {
    "nombre": "Zinc",
    "simbolo": "Zn",
    "numeroAtomico": 30,
    "masaAtomica": 65.38,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 12,
    "descripcion": "El zinc se utiliza para galvanizar acero y es esencial para el sistema inmunológico."
  },
  {
    "nombre": "Galio",
    "simbolo": "Ga",
    "numeroAtomico": 31,
    "masaAtomica": 69.723,
    "tipo": "Metal del bloque p",
    "estado": "Sólido",
    "grupo": 13,
    "descripcion": "El galio tiene un punto de fusión bajo y se utiliza en semiconductores."
  },
  {
    "nombre": "Germanio",
    "simbolo": "Ge",
    "numeroAtomico": 32,
    "masaAtomica": 72.63,
    "tipo": "Metaloide",
    "estado": "Sólido",
    "grupo": 14,
    "descripcion": "El germanio fue el primer material semiconductor utilizado en transistores."
  },
  {
    "nombre": "Arsénico",
    "simbolo": "As",
    "numeroAtomico": 33,
    "masaAtomica": 74.922,
    "tipo": "Metaloide",
    "estado": "Sólido",
    "grupo": 15,
    "descripcion": "El arsénico es tóxico pero se utiliza en aleaciones y semiconductores."
  },
  {
    "nombre": "Selenio",
    "simbolo": "Se",
    "numeroAtomico": 34,
    "masaAtomica": 78.96,
    "tipo": "No metal",
    "estado": "Sólido",
    "grupo": 16,
    "descripcion": "El selenio es esencial en pequeñas cantidades y se utiliza en celdas fotovoltaicas."
  },
  {
    "nombre": "Bromo",
    "simbolo": "Br",
    "numeroAtomico": 35,
    "masaAtomica": 79.904,
    "tipo": "Halógeno",
    "estado": "Líquido",
    "grupo": 17,
    "descripcion": "El bromo es el único elemento no metálico líquido a temperatura ambiente."
  },
  {
    "nombre": "Kriptón",
    "simbolo": "Kr",
    "numeroAtomico": 36,
    "masaAtomica": 83.798,
    "tipo": "Gas noble",
    "estado": "Gaseoso",
    "grupo": 18,
    "descripcion": "El kriptón se utiliza en iluminación de alta eficiencia y láseres."
  },
  {
    "nombre": "Rubidio",
    "simbolo": "Rb",
    "numeroAtomico": 37,
    "masaAtomica": 85.468,
    "tipo": "Metal alcalino",
    "estado": "Sólido",
    "grupo": 1,
    "descripcion": "El rubidio es un metal muy reactivo utilizado en relojes atómicos."
  },
  {
    "nombre": "Estroncio",
    "simbolo": "Sr",
    "numeroAtomico": 38,
    "masaAtomica": 87.62,
    "tipo": "Metal alcalinotérreo",
    "estado": "Sólido",
    "grupo": 2,
    "descripcion": "El estroncio se utiliza en fuegos artificiales para producir color rojo."
  },
  {
    "nombre": "Itrio",
    "simbolo": "Y",
    "numeroAtomico": 39,
    "masaAtomica": 88.906,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El itrio se utiliza en superconductores y fósforos para pantallas."
  },
  {
    "nombre": "Zirconio",
    "simbolo": "Zr",
    "numeroAtomico": 40,
    "masaAtomica": 91.224,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 4,
    "descripcion": "El zirconio es resistente a la corrosión, utilizado en reactores nucleares."
  },
  {
    "nombre": "Niobio",
    "simbolo": "Nb",
    "numeroAtomico": 41,
    "masaAtomica": 92.906,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 5,
    "descripcion": "El niobio se utiliza en aleaciones para mejorar la resistencia."
  },
  {
    "nombre": "Molibdeno",
    "simbolo": "Mo",
    "numeroAtomico": 42,
    "masaAtomica": 95.95,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 6,
    "descripcion": "El molibdeno tiene un punto de fusión muy alto, utilizado en aceros especiales."
  },
  {
    "nombre": "Tecnecio",
    "simbolo": "Tc",
    "numeroAtomico": 43,
    "masaAtomica": 98,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 7,
    "descripcion": "El tecnecio es el primer elemento producido artificialmente, utilizado en medicina nuclear."
  },
  {
    "nombre": "Rutenio",
    "simbolo": "Ru",
    "numeroAtomico": 44,
    "masaAtomica": 101.07,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 8,
    "descripcion": "El rutenio es un metal del grupo del platino, utilizado como catalizador."
  },
  {
    "nombre": "Rodio",
    "simbolo": "Rh",
    "numeroAtomico": 45,
    "masaAtomica": 102.91,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 9,
    "descripcion": "El rodio se utiliza en catalizadores automotrices y joyería."
  },
  {
    "nombre": "Paladio",
    "simbolo": "Pd",
    "numeroAtomico": 46,
    "masaAtomica": 106.42,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 10,
    "descripcion": "El paladio absorbe hidrógeno y se utiliza en catalizadores y joyería."
  },
  {
    "nombre": "Plata",
    "simbolo": "Ag",
    "numeroAtomico": 47,
    "masaAtomica": 107.87,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 11,
    "descripcion": "La plata es el mejor conductor eléctrico y térmico, utilizada en joyería y electrónica."
  },
  {
    "nombre": "Cadmio",
    "simbolo": "Cd",
    "numeroAtomico": 48,
    "masaAtomica": 112.41,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 12,
    "descripcion": "El cadmio se utiliza en baterías recargables y como pigmento."
  },
  {
    "nombre": "Indio",
    "simbolo": "In",
    "numeroAtomico": 49,
    "masaAtomica": 114.82,
    "tipo": "Metal del bloque p",
    "estado": "Sólido",
    "grupo": 13,
    "descripcion": "El indio se utiliza en pantallas táctiles y paneles solares."
  },
  {
    "nombre": "Estaño",
    "simbolo": "Sn",
    "numeroAtomico": 50,
    "masaAtomica": 118.71,
    "tipo": "Metal del bloque p",
    "estado": "Sólido",
    "grupo": 14,
    "descripcion": "El estaño se utiliza en soldaduras y para recubrir acero (hojalata)."
  },
  {
    "nombre": "Antimonio",
    "simbolo": "Sb",
    "numeroAtomico": 51,
    "masaAtomica": 121.76,
    "tipo": "Metaloide",
    "estado": "Sólido",
    "grupo": 15,
    "descripcion": "El antimonio se utiliza en retardantes de llama y aleaciones."
  },
  {
    "nombre": "Telurio",
    "simbolo": "Te",
    "numeroAtomico": 52,
    "masaAtomica": 127.6,
    "tipo": "Metaloide",
    "estado": "Sólido",
    "grupo": 16,
    "descripcion": "El telurio se utiliza en aleaciones y dispositivos termoeléctricos."
  },
  {
    "nombre": "Yodo",
    "simbolo": "I",
    "numeroAtomico": 53,
    "masaAtomica": 126.9,
    "tipo": "Halógeno",
    "estado": "Sólido",
    "grupo": 17,
    "descripcion": "El yodo es esencial para la función tiroidea y se utiliza como antiséptico."
  },
  {
    "nombre": "Xenón",
    "simbolo": "Xe",
    "numeroAtomico": 54,
    "masaAtomica": 131.29,
    "tipo": "Gas noble",
    "estado": "Gaseoso",
    "grupo": 18,
    "descripcion": "El xenón se utiliza en lámparas de flash y anestesia."
  },
  {
    "nombre": "Cesio",
    "simbolo": "Cs",
    "numeroAtomico": 55,
    "masaAtomica": 132.91,
    "tipo": "Metal alcalino",
    "estado": "Sólido",
    "grupo": 1,
    "descripcion": "El cesio es el metal más reactivo, utilizado en relojes atómicos."
  },
  {
    "nombre": "Bario",
    "simbolo": "Ba",
    "numeroAtomico": 56,
    "masaAtomica": 137.33,
    "tipo": "Metal alcalinotérreo",
    "estado": "Sólido",
    "grupo": 2,
    "descripcion": "El bario se utiliza en medicina para estudios gastrointestinales."
  },
  {
    "nombre": "Lantano",
    "simbolo": "La",
    "numeroAtomico": 57,
    "masaAtomica": 138.91,
    "tipo": "Lantánido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El lantano es el primer elemento de la serie de los lantánidos."
  },
  {
    "nombre": "Cerio",
    "simbolo": "Ce",
    "numeroAtomico": 58,
    "masaAtomica": 140.12,
    "tipo": "Lantánido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El cerio se utiliza en catalizadores y para pulir vidrio."
  },
  {
    "nombre": "Praseodimio",
    "simbolo": "Pr",
    "numeroAtomico": 59,
    "masaAtomica": 140.91,
    "tipo": "Lantánido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El praseodimio se utiliza en aleaciones para imanes."
  },
  {
    "nombre": "Neodimio",
    "simbolo": "Nd",
    "numeroAtomico": 60,
    "masaAtomica": 144.24,
    "tipo": "Lantánido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El neodimio forma los imanes permanentes más potentes."
  },
  {
    "nombre": "Prometio",
    "simbolo": "Pm",
    "numeroAtomico": 61,
    "masaAtomica": 145,
    "tipo": "Lantánido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El prometio es radiactivo y no tiene isótopos estables."
  },
  {
    "nombre": "Samario",
    "simbolo": "Sm",
    "numeroAtomico": 62,
    "masaAtomica": 150.36,
    "tipo": "Lantánido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El samario se utiliza en imanes y reactores nucleares."
  },
  {
    "nombre": "Europio",
    "simbolo": "Eu",
    "numeroAtomico": 63,
    "masaAtomica": 151.96,
    "tipo": "Lantánido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El europio se utiliza en fósforos rojos para pantallas."
  },
  {
    "nombre": "Gadolinio",
    "simbolo": "Gd",
    "numeroAtomico": 64,
    "masaAtomica": 157.25,
    "tipo": "Lantánido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El gadolinio se utiliza en resonancia magnética como contraste."
  },
  {
    "nombre": "Terbio",
    "simbolo": "Tb",
    "numeroAtomico": 65,
    "masaAtomica": 158.93,
    "tipo": "Lantánido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El terbio se utiliza en dispositivos electrónicos y aleaciones."
  },
  {
    "nombre": "Disprosio",
    "simbolo": "Dy",
    "numeroAtomico": 66,
    "masaAtomica": 162.5,
    "tipo": "Lantánido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El disprosio se utiliza en imanes de alta temperatura."
  },
  {
    "nombre": "Holmio",
    "simbolo": "Ho",
    "numeroAtomico": 67,
    "masaAtomica": 164.93,
    "tipo": "Lantánido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El holmio tiene el momento magnético más alto de todos los elementos."
  },
  {
    "nombre": "Erbio",
    "simbolo": "Er",
    "numeroAtomico": 68,
    "masaAtomica": 167.26,
    "tipo": "Lantánido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El erbio se utiliza en amplificadores de fibra óptica."
  },
  {
    "nombre": "Tulio",
    "simbolo": "Tm",
    "numeroAtomico": 69,
    "masaAtomica": 168.93,
    "tipo": "Lantánido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El tulio es el lantánido menos abundante, utilizado en láseres."
  },
  {
    "nombre": "Iterbio",
    "simbolo": "Yb",
    "numeroAtomico": 70,
    "masaAtomica": 173.05,
    "tipo": "Lantánido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El iterbio se utiliza en aleaciones y dispositivos electrónicos."
  },
  {
    "nombre": "Lutecio",
    "simbolo": "Lu",
    "numeroAtomico": 71,
    "masaAtomica": 174.97,
    "tipo": "Lantánido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El lutecio es el último elemento de la serie de los lantánidos."
  },
  {
    "nombre": "Hafnio",
    "simbolo": "Hf",
    "numeroAtomico": 72,
    "masaAtomica": 178.49,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 4,
    "descripcion": "El hafnio se utiliza en reactores nucleares por su capacidad de absorber neutrones."
  },
  {
    "nombre": "Tantalio",
    "simbolo": "Ta",
    "numeroAtomico": 73,
    "masaAtomica": 180.95,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 5,
    "descripcion": "El tantalio es resistente a la corrosión, utilizado en capacitores electrónicos."
  },
  {
    "nombre": "Wolframio",
    "simbolo": "W",
    "numeroAtomico": 74,
    "masaAtomica": 183.84,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 6,
    "descripcion": "El wolframio tiene el punto de fusión más alto de todos los metales."
  },
  {
    "nombre": "Renio",
    "simbolo": "Re",
    "numeroAtomico": 75,
    "masaAtomica": 186.21,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 7,
    "descripcion": "El renio es uno de los elementos más raros, utilizado en aleaciones."
  },
  {
    "nombre": "Osmio",
    "simbolo": "Os",
    "numeroAtomico": 76,
    "masaAtomica": 190.23,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 8,
    "descripcion": "El osmio es el elemento más denso, utilizado en aleaciones duras."
  },
  {
    "nombre": "Iridio",
    "simbolo": "Ir",
    "numeroAtomico": 77,
    "masaAtomica": 192.22,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 9,
    "descripcion": "El iridio es resistente a la corrosión, utilizado en contactos eléctricos."
  },
  {
    "nombre": "Platino",
    "simbolo": "Pt",
    "numeroAtomico": 78,
    "masaAtomica": 195.08,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 10,
    "descripcion": "El platino es un metal precioso utilizado en joyería y catalizadores."
  },
  {
    "nombre": "Oro",
    "simbolo": "Au",
    "numeroAtomico": 79,
    "masaAtomica": 196.97,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 11,
    "descripcion": "El oro es un metal noble maleable, utilizado en joyería y electrónica."
  },
  {
    "nombre": "Mercurio",
    "simbolo": "Hg",
    "numeroAtomico": 80,
    "masaAtomica": 200.59,
    "tipo": "Metal de transición",
    "estado": "Líquido",
    "grupo": 12,
    "descripcion": "El mercurio es el único metal líquido a temperatura ambiente."
  },
  {
    "nombre": "Talio",
    "simbolo": "Tl",
    "numeroAtomico": 81,
    "masaAtomica": 204.38,
    "tipo": "Metal del bloque p",
    "estado": "Sólido",
    "grupo": 13,
    "descripcion": "El talio es tóxico, utilizado en electrónica y medicina."
  },
  {
    "nombre": "Plomo",
    "simbolo": "Pb",
    "numeroAtomico": 82,
    "masaAtomica": 207.2,
    "tipo": "Metal del bloque p",
    "estado": "Sólido",
    "grupo": 14,
    "descripcion": "El plomo es denso y resistente a la corrosión, utilizado en baterías."
  },
  {
    "nombre": "Bismuto",
    "simbolo": "Bi",
    "numeroAtomico": 83,
    "masaAtomica": 208.98,
    "tipo": "Metal del bloque p",
    "estado": "Sólido",
    "grupo": 15,
    "descripcion": "El bismuto es el elemento más pesado no radiactivo."
  },
  {
    "nombre": "Polonio",
    "simbolo": "Po",
    "numeroAtomico": 84,
    "masaAtomica": 209,
    "tipo": "Metaloide",
    "estado": "Sólido",
    "grupo": 16,
    "descripcion": "El polonio es altamente radiactivo, descubierto por Marie Curie."
  },
  {
    "nombre": "Ástato",
    "simbolo": "At",
    "numeroAtomico": 85,
    "masaAtomica": 210,
    "tipo": "Halógeno",
    "estado": "Sólido",
    "grupo": 17,
    "descripcion": "El ástato es extremadamente raro y radiactivo."
  },
  {
    "nombre": "Radón",
    "simbolo": "Rn",
    "numeroAtomico": 86,
    "masaAtomica": 222,
    "tipo": "Gas noble",
    "estado": "Gaseoso",
    "grupo": 18,
    "descripcion": "El radón es un gas radiactivo que se filtra del suelo."
  },
  {
    "nombre": "Francio",
    "simbolo": "Fr",
    "numeroAtomico": 87,
    "masaAtomica": 223,
    "tipo": "Metal alcalino",
    "estado": "Sólido",
    "grupo": 1,
    "descripcion": "El francio es extremadamente raro y radiactivo."
  },
  {
    "nombre": "Radio",
    "simbolo": "Ra",
    "numeroAtomico": 88,
    "masaAtomica": 226,
    "tipo": "Metal alcalinotérreo",
    "estado": "Sólido",
    "grupo": 2,
    "descripcion": "El radio fue descubierto por Marie Curie, utilizado en tratamientos contra el cáncer."
  },
  {
    "nombre": "Actinio",
    "simbolo": "Ac",
    "numeroAtomico": 89,
    "masaAtomica": 227,
    "tipo": "Actínido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El actinio es radiactivo, utilizado en investigación."
  },
  {
    "nombre": "Torio",
    "simbolo": "Th",
    "numeroAtomico": 90,
    "masaAtomica": 232.04,
    "tipo": "Actínido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El torio se investiga como combustible nuclear alternativo."
  },
  {
    "nombre": "Protactinio",
    "simbolo": "Pa",
    "numeroAtomico": 91,
    "masaAtomica": 231.04,
    "tipo": "Actínido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El protactinio es raro y radiactivo."
  },
  {
    "nombre": "Uranio",
    "simbolo": "U",
    "numeroAtomico": 92,
    "masaAtomica": 238.03,
    "tipo": "Actínido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El uranio se utiliza como combustible nuclear y en armamento."
  },
  {
    "nombre": "Neptunio",
    "simbolo": "Np",
    "numeroAtomico": 93,
    "masaAtomica": 237,
    "tipo": "Actínido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El neptunio es un elemento transuránico radiactivo."
  },
  {
    "nombre": "Plutonio",
    "simbolo": "Pu",
    "numeroAtomico": 94,
    "masaAtomica": 244,
    "tipo": "Actínido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El plutonio se utiliza en armas nucleares y generadores termoeléctricos."
  },
  {
    "nombre": "Americio",
    "simbolo": "Am",
    "numeroAtomico": 95,
    "masaAtomica": 243,
    "tipo": "Actínido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El americio se utiliza en detectores de humo."
  },
  {
    "nombre": "Curio",
    "simbolo": "Cm",
    "numeroAtomico": 96,
    "masaAtomica": 247,
    "tipo": "Actínido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El curio se utiliza en generadores de energía espacial."
  },
  {
    "nombre": "Berkelio",
    "simbolo": "Bk",
    "numeroAtomico": 97,
    "masaAtomica": 247,
    "tipo": "Actínido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El berkelio es un elemento sintético radiactivo."
  },
  {
    "nombre": "Californio",
    "simbolo": "Cf",
    "numeroAtomico": 98,
    "masaAtomica": 251,
    "tipo": "Actínido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El californio se utiliza como fuente de neutrones."
  },
  {
    "nombre": "Einstenio",
    "simbolo": "Es",
    "numeroAtomico": 99,
    "masaAtomica": 252,
    "tipo": "Actínido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El einstenio fue descubierto en restos de explosiones nucleares."
  },
  {
    "nombre": "Fermio",
    "simbolo": "Fm",
    "numeroAtomico": 100,
    "masaAtomica": 257,
    "tipo": "Actínido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El fermio es un elemento sintético altamente radiactivo."
  },
  {
    "nombre": "Mendelevio",
    "simbolo": "Md",
    "numeroAtomico": 101,
    "masaAtomica": 258,
    "tipo": "Actínido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El mendelevio fue el primer elemento producido átomo por átomo."
  },
  {
    "nombre": "Nobelio",
    "simbolo": "No",
    "numeroAtomico": 102,
    "masaAtomica": 259,
    "tipo": "Actínido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El nobelio es un elemento sintético radiactivo."
  },
  {
    "nombre": "Lawrencio",
    "simbolo": "Lr",
    "numeroAtomico": 103,
    "masaAtomica": 266,
    "tipo": "Actínido",
    "estado": "Sólido",
    "grupo": 3,
    "descripcion": "El lawrencio es el último elemento de la serie de los actínidos."
  },
  {
    "nombre": "Rutherfordio",
    "simbolo": "Rf",
    "numeroAtomico": 104,
    "masaAtomica": 267,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 4,
    "descripcion": "El rutherfordio es un elemento sintético de corta vida."
  },
  {
    "nombre": "Dubnio",
    "simbolo": "Db",
    "numeroAtomico": 105,
    "masaAtomica": 268,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 5,
    "descripcion": "El dubnio es un elemento sintético altamente radiactivo."
  },
  {
    "nombre": "Seaborgio",
    "simbolo": "Sg",
    "numeroAtomico": 106,
    "masaAtomica": 269,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 6,
    "descripcion": "El seaborgio fue nombrado en honor a Glenn T. Seaborg."
  },
  {
    "nombre": "Bohrio",
    "simbolo": "Bh",
    "numeroAtomico": 107,
    "masaAtomica": 270,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 7,
    "descripcion": "El bohrio es un elemento sintético radiactivo."
  },
  {
    "nombre": "Hasio",
    "simbolo": "Hs",
    "numeroAtomico": 108,
    "masaAtomica": 277,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 8,
    "descripcion": "El hasio es un elemento sintético descubierto en Alemania."
  },
  {
    "nombre": "Meitnerio",
    "simbolo": "Mt",
    "numeroAtomico": 109,
    "masaAtomica": 278,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 9,
    "descripcion": "El meitnerio fue nombrado en honor a Lise Meitner."
  },
  {
    "nombre": "Darmstatio",
    "simbolo": "Ds",
    "numeroAtomico": 110,
    "masaAtomica": 281,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 10,
    "descripcion": "El darmstatio es un elemento sintético radiactivo."
  },
  {
    "nombre": "Roentgenio",
    "simbolo": "Rg",
    "numeroAtomico": 111,
    "masaAtomica": 282,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 11,
    "descripcion": "El roentgenio fue nombrado en honor a Wilhelm Röntgen."
  },
  {
    "nombre": "Copernicio",
    "simbolo": "Cn",
    "numeroAtomico": 112,
    "masaAtomica": 285,
    "tipo": "Metal de transición",
    "estado": "Sólido",
    "grupo": 12,
    "descripcion": "El copernicio fue nombrado en honor a Nicolás Copérnico."
  },
  {
    "nombre": "Nihonio",
    "simbolo": "Nh",
    "numeroAtomico": 113,
    "masaAtomica": 286,
    "tipo": "Metal del bloque p",
    "estado": "Sólido",
    "grupo": 13,
    "descripcion": "El nihonio fue descubierto por científicos japoneses."
  },
  {
    "nombre": "Flerovio",
    "simbolo": "Fl",
    "numeroAtomico": 114,
    "masaAtomica": 289,
    "tipo": "Metal del bloque p",
    "estado": "Sólido",
    "grupo": 14,
    "descripcion": "El flerovio fue nombrado en honor al Laboratorio Flerov."
  },
  {
    "nombre": "Moscovio",
    "simbolo": "Mc",
    "numeroAtomico": 115,
    "masaAtomica": 290,
    "tipo": "Metal del bloque p",
    "estado": "Sólido",
    "grupo": 15,
    "descripcion": "El moscovio fue nombrado en honor a la región de Moscú."
  },
  {
    "nombre": "Livermorio",
    "simbolo": "Lv",
    "numeroAtomico": 116,
    "masaAtomica": 293,
    "tipo": "Metal del bloque p",
    "estado": "Sólido",
    "grupo": 16,
    "descripcion": "El livermorio fue nombrado en honor al Laboratorio Livermore."
  },
  {
    "nombre": "Teneso",
    "simbolo": "Ts",
    "numeroAtomico": 117,
    "masaAtomica": 294,
    "tipo": "Halógeno",
    "estado": "Sólido",
    "grupo": 17,
    "descripcion": "El teneso fue nombrado en honor a la región de Tennessee."
  },
  {
    "nombre": "Oganesón",
    "simbolo": "Og",
    "numeroAtomico": 118,
    "masaAtomica": 294,
    "tipo": "Gas noble",
    "estado": "Gaseoso",
    "grupo": 18,
    "descripcion": "El oganesón es el elemento más pesado sintetizado hasta la fecha."
  }
];

function usd(elemento){
    const sim = elemento.querySelector('.simbolo').textContent;
    const helio = elementosTablaPeriodica.find(e => e.simbolo === sim);
    const isd = document.getElementById("s")
    isd.textContent = `${helio.simbolo}`;
    const n = document.getElementById("name")
    n.textContent = `${helio.nombre}`
    const no = document.getElementById("No")
    no.textContent = `${helio.numeroAtomico}`
    const uz = document.getElementById("Ma")
    Ma.textContent = `${helio.masaAtomica} u`
    const last = document.getElementById("Gru")
    last.textContent = `${helio.grupo}`
    const Xd = document.getElementById("Es")
    Xd.textContent = `${helio.estado}`
    const using = document.getElementById("des")
    using.textContent = `${helio.descripcion}`
console.log(`Descripcion: ${helio.descripcion}`);
openModal()
}


  const overlay = document.getElementById("overlay");

/* FUNCIÓN PARA ABRIR */
const closeBtn = document.getElementById("closeModal");
closeBtn.onclick = () => overlay.style.display = "none";

function openModal() {
  overlay.style.display = "flex";
}

/* FUNCIÓN PARA CERRAR */
function closeModal() {
  overlay.style.display = "none";
}

/* Cerrar con click fuera */
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closeModal();
  }
});

/* Cerrar con ESC */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
