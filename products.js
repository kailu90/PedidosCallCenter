
//******DEFINICIÓN DE PRECIOS POR CLASES**//
const preciosEntradas = {
    bruschettas: { "Unidad": 16500 },
    panDeAjo:    { "Unidad": 3800 }
};
const preciosPastas = {
    alBurro:         { "Unidad": 23000 },
    bolognesa:       { "Unidad": 36000 },
    polloChampiñon:  { "Unidad": 36000 },
    carbonara:       { "Unidad": 32500 },
    marinera:        { "Unidad": 42000 },
    pestoCamarones:  { "Unidad": 38000 },
    alfredoPollo:    { "Unidad": 36000 },
    amatriziana:     { "Unidad": 32000 }
};
const preciosLasañas = {
    lasañaMixta: { "Personal": 34000, "Mini": 24500},
    LasañaNapolitanaPolloChampiñon: { "Personal": 34000, "Mini": 24500},
    lasañaVegetalesPollo: { "Personal": 34000, "Mini": 24500},
    lasañaMolle: { "Personal": 34000, "Mini": 24500},
    lasañaPolloChampiñones: { "Personal": 34000, "Mini": 24500},
    lasañaBolognesa: { "Personal": 34000, "Mini": 24500},
    lasañaVegetariana: { "Personal": 34000, "Mini": 24500},
    lasañaMarinera: { "Personal": 42000}
};
const preciosPizzas = {
    superEstofada: { "Porción": 16500, "Pequeña": 66000, "Mediana": 76000, "Grande": 92000, "Jumbo": 110000 },
    estofada:      { "Porción": 15500, "Pequeña": 51000, "Mediana": 61000, "Grande": 76000, "Jumbo": 91000 },
    especial:      { "Porción": 16500, "Personal": 38000, "Pequeña": 66000, "Mediana": 76000, "Grande": 92000, "Jumbo": 110000 },
    gourmet:       { "Personal": 42000 },
    clasica:       { "Porción": 13800, "Personal": 31000, "Pequeña": 47000, "Mediana": 55000, "Grande": 70000, "Jumbo": 79000 },
    tipica:        { "Porción": 15500, "Personal": 33000, "Pequeña": 51000, "Mediana": 61000, "Grande": 76000, "Jumbo": 91000 }
};
const preciosEstandarAdiciones = { 
    "Porción": 3100, 
    "Personal": 5500, 
    "Pequeña": 8000, 
    "Mediana": 8500, 
    "Grande": 9500, 
    "Jumbo": 11000 
};

const preciosVariedades = {
    calzone: { "Personal": 24000, "Grande": 53000 },
    stromboli: { "Unidad": 28000 },
    maizGratinado: { "Sencillo": 21000, "Con Pollo (50 gr)": 26000 },
    champiñonesGratinados: { "Unidad": 26000 }
};
const preciosHamburguesas = {
    hamburguesaSencilla: { "Unidad": 24000 },
    hamburguesaEspecial: { "Unidad": 27000 },
    hamburguesaEstofada: { "Unidad": 28000 },
    hamburguesaGolden:   { "Unidad": 28000 },
    hamburguesaDobleCarne: { "Unidad": 33000 }
};
const preciosSanduches = {
    sanduchePolloJamon: { "Unidad": 22000 },
    sanducheAtun:       { "Unidad": 28000 }
};
const preciosEnsaladas = {
    ensaladaPrimaveraPollo: { "Unidad": 29000 },
    ensaladaPrimaveraAtun:  { "Unidad": 32000 },
    ensaladaMolle:          { "Unidad": 32000 },
    ensaladaTijuana:        { "Unidad": 32500 }
};
const preciosBebidas = {
    // Limonadas
    limonadaNatural:    { "Unidad": 9900 },
    limonadaCerezada:   { "Unidad": 13200 },
    limonadaCoco:       { "Unidad": 16000 },
    limonadaHierbabuena:{ "Unidad": 11500 },
    
    // Cervezas
    cervezaNacional:    { "Unidad": 6600 }, // Poker - Costeña
    cervezaPremium:     { "Unidad": 7300 }, // Club - Aguila - Redds
    cervezaCorona:      { "Unidad": 10500 },
    vasoMichelado:      { "Unidad": 22000 },

    // Jugos Naturales
    jugoEnAgua:         { "Unidad": 9500 },
    jugoEnLeche:        { "Unidad": 11600 },
    jugoMandarina:      { "Unidad": 16500 },

    // Refrescos
    jugoHitVidrio:      { "Unidad": 4800 },
    gaseosa:            { "350 ml": 4300, "400 ml": 5800, "1.5 ltr": 8500 },
    agua:               { "Unidad": 4700 },

    // Especialidades
    malteadas:          { "Unidad": 17000 },
    granizados:         { "Unidad": 16000 },
    sodasMicheladas:    { "Unidad": 16500 },
    tamarindoMichelado: { "Unidad": 10500 },
    infusiones:         { "Unidad": 7200 },
    brownieHelado:      { "Unidad": 12700 }
};






//*CATALOGO DE VARIEDADES VINCULADO A SU CLASE****//
const menuData = {
//*******Variedades entradas***********/
    "Entradas" : [
        { nombre: "Bruschettas", opciones: preciosEntradas.bruschettas, descripcion: "Pan francés, tomate en rodajas, pepperoni, queso gratinado, aceite de oliva y albahaca."},
        { nombre: "Pan De Ajo", opciones: preciosEntradas.panDeAjo , descripcion: "5 deliciosos panes de ajo."}
    ],
//*******Variedades Pastas***********/    
    "Pastas": [
        { nombre: "Al Burro", opciones: preciosPastas.alBurro , descripcion: "Salteado en mantequilla, queso parmesano y albahaca fresca."},
        { nombre: "Bolognesa", opciones: preciosPastas.bolognesa, descripcion: "Carne a la bolognesa en salsa napolitana y queso parmesano." },
        { nombre: "Pollo Champiñón", opciones: preciosPastas.polloChampiñon , descripcion: "Trozos de pollo, champiñones salteados, salsa napolitana y queso parmesano." },
        { nombre: "Carbonara", opciones: preciosPastas.carbonara, descripcion: "Ajo, cebolla, tocineta, salsa blanca, perejil y queso parmesano."  },
        { nombre: "Marinera", opciones: preciosPastas.marinera , descripcion: "Anillos de calamar, camarones, mejillones, calamar pota, salsa napolitana y queso parmesano." },
        { nombre: "Pesto Camarones", opciones: preciosPastas.pestoCamarones , descripcion: "Anillos de calamar, camarones, mejillones, calamar pota, salsa napolitana y queso parmesano."  },
        { nombre: "Alfredo Pollo", opciones: preciosPastas.alfredoPollo , descripcion: "Pollo, cebolla, salsa blanca, salpimienta, psata de ajo y queso parmesano." },
        { nombre: "Amatriziana", opciones: preciosPastas.amatriziana, descripcion: "Tocineta, cebolla, tomates pelados, pasta de ajo, salsa napolitana, pimienta roja y queso parmesano." }
    ],
//*******Variedades Lasañas**********/  
    "Lasañas": [
        { nombre: "Lasaña Mixta", opciones: preciosLasañas.lasañaMixta , descripcion: "Carne a la bolognesa, pollo, champiñones y salsa napolitana."  },
        { nombre: "Napolitana Pollo Champiñon", opciones: preciosLasañas.LasañaNapolitanaPolloChampiñon , descripcion: "Pollo, cahampiñones, rodajas de tomate, salsa napolitana y albahaca genovesa."  },
        { nombre: "Lasaña Vegetales Pollo", opciones: preciosLasañas.lasañaVegetalesPollo , descripcion: "Pollo, cebolla, tomate, pimentón asado, aceitunas, champiñones, y salsa napolitana." },
        { nombre: "Lasaña Molle", opciones: preciosLasañas.lasañaMolle , descripcion: "Pollo, champiñones y salsa napolitana." },
        { nombre: "Lasaña Pollo Champiñones", opciones: preciosLasañas.lasañaPolloChampiñones },
        { nombre: "Lasaña Bolognesa", opciones: preciosLasañas.lasañaBolognesa },
        { nombre: "Lasaña Vegetariana", opciones: preciosLasañas.lasañaVegetariana },
        { nombre: "Lasaña Marinera", opciones: preciosLasañas.lasañaMarinera }
    ],

//*****Variedades de los sabores de las pizzas********/
    "Pizzas Super Estofadas": [
        { nombre: "Super Estofada de Carnes", opciones: preciosPizzas.superEstofada },
        { nombre: "Super Estofada Hawaiana", opciones: preciosPizzas.superEstofada },
        { nombre: "Super Estofada Suprema", opciones: preciosPizzas.superEstofada }
    ],
    "Pizzas Estofadas": [
        { nombre: "Estofada de Carnes", opciones: preciosPizzas.estofada },
        { nombre: "Estofada Hawaiana", opciones: preciosPizzas.estofada },
        { nombre: "Estofada Suprema", opciones: preciosPizzas.estofada }
    ],
    "Pizzas Especiales": [
        { nombre: "Mexicana", opciones: preciosPizzas.especial },
        { nombre: "Indio", opciones: preciosPizzas.especial },
        { nombre: "Suprema Pepperoni", opciones: preciosPizzas.especial },
        { nombre: "Criolla", opciones: preciosPizzas.especial },
        { nombre: "Hawaiana Chic", opciones: preciosPizzas.especial },
        { nombre: "Teriyaki", opciones: preciosPizzas.especial },
        { nombre: "Carnivora", opciones: preciosPizzas.especial },
        { nombre: "Bolognesa", opciones: preciosPizzas.especial },
        { nombre: "Mediterranea", opciones: preciosPizzas.especial },
        { nombre: "Ventana", opciones: preciosPizzas.especial },
        { nombre: "Paisa", opciones: preciosPizzas.especial },
        { nombre: "Pizza Molle", opciones: preciosPizzas.especial }        
    ],
    "Pizzas Gourmet": [
        { nombre: "Personal Camaron", opciones: preciosPizzas.gourmet }     
    ],
    "Pizzas Clásicas": [
        { nombre: "Pollo y Queso", opciones: preciosPizzas.clasica },
        { nombre: "Champiñones y Queso", opciones: preciosPizzas.clasica },
        { nombre: "Jamon y Queso", opciones: preciosPizzas.clasica  },
        { nombre: "Doble Queso", opciones: preciosPizzas.clasica },
        { nombre: "Hawaiana", opciones: preciosPizzas.clasica },
        { nombre: "Carnes", opciones: preciosPizzas.clasica },
        { nombre: "Napolitana", opciones: preciosPizzas.clasica }
    ],
    "Pizzas Típicas": [
        { nombre: "California", opciones: preciosPizzas.tipica },
        { nombre: "Pollo Miel - Mostaza", opciones: preciosPizzas.tipica },
        { nombre: "Caprichosa", opciones: preciosPizzas.tipica },
        { nombre: "Samba", opciones: preciosPizzas.tipica },
        { nombre: "Ciruelas y Tocineta", opciones: preciosPizzas.tipica },
        { nombre: "Toc", opciones: preciosPizzas.tipica },
        { nombre: "Vegetariana", opciones: preciosPizzas.tipica },
        { nombre: "Frutti Molle", opciones: preciosPizzas.tipica },
        { nombre: "Bocadillo Tocineta", opciones: preciosPizzas.tipica },
        { nombre: "Suprema", opciones: preciosPizzas.tipica },
        { nombre: "Pollo Bbq", opciones: preciosPizzas.tipica },
        { nombre: "Pollo Champiñones", opciones: preciosPizzas.tipica },
        { nombre: "Pepperoni Americano", opciones: preciosPizzas.tipica }        
    ],
    //*****Variedades de los sabores de las Adiciones********/
     "Adiciones": [
        { nombre: "Adicion Jalapeño", opciones: preciosEstandarAdiciones },
        { nombre: "Adicion Salami", opciones: preciosEstandarAdiciones },
        { nombre: "Adicion Salchicha", opciones: preciosEstandarAdiciones },
        { nombre: "Adicion Cebolla", opciones: preciosEstandarAdiciones },
        { nombre: "Adicion Aceitunas", opciones: preciosEstandarAdiciones },
        { nombre: "Adicion Queso", opciones: preciosEstandarAdiciones },
        { nombre: "Adicion Pollo", opciones: preciosEstandarAdiciones },
        { nombre: "Adicion Champiñones", opciones: preciosEstandarAdiciones },
        { nombre: "Adicion Jamón", opciones: preciosEstandarAdiciones },
        { nombre: "Adicion Maíz Tierno", opciones: preciosEstandarAdiciones },
        { nombre: "Adicion Tocineta", opciones: preciosEstandarAdiciones },
        { nombre: "Adicion Tomate", opciones: preciosEstandarAdiciones },
        { nombre: "Adicion Pepperoni", opciones: preciosEstandarAdiciones },
        { nombre: "Adicion Maduro", opciones: preciosEstandarAdiciones }
    ],
     //*****Variedades de los sabores de las VARIEDADES*******/
    "Variedades": [
        { nombre: "Calzone", opciones: preciosVariedades.calzone },
        { nombre: "Stromboli", opciones: preciosVariedades.stromboli },
        { nombre: "Maíz Gratinado Sencillo", opciones: { "Sencillo": preciosVariedades.maizGratinado.Sencillo } },
        { nombre: "Maíz Gratinado con Pollo", opciones: { "Con Pollo": preciosVariedades.maizGratinado["Con Pollo (50 gr)"] }},
        { nombre: "Champiñones Gratinados", opciones: preciosVariedades.champiñonesGratinados }
    ],
    //**Variedades de Hamburguesas**/
      "Hamburguesas": [
        { nombre: "Sencilla", opciones: preciosHamburguesas.hamburguesaSencilla},
        { nombre: "Especial", opciones: preciosHamburguesas.hamburguesaEspecial},
        { nombre: "Estofada", opciones: preciosHamburguesas.hamburguesaEstofada},
        { nombre: "Golden", opciones: preciosHamburguesas.hamburguesaGolden},
        { nombre: "Doble Carne", opciones: preciosHamburguesas.hamburguesaDobleCarne}
    ],
    //**Variedades de Sanduches***/
    "Sanduches": [
        { nombre: "Sanduche Pollo Jamon", opciones: preciosSanduches.sanduchePolloJamon},
        { nombre: "Sanduche Atun", opciones: preciosSanduches.sanducheAtun }
    ],
    //**Variedades de Ensaladas***/
    "Ensaladas": [
        { nombre: "Ensalada Primavera Pollo", opciones: preciosEnsaladas.ensaladaPrimaveraPollo},
        { nombre: "Ensalada Primavera Atun", opciones: preciosEnsaladas.ensaladaPrimaveraAtun},
        { nombre: "Ensalada Molle", opciones: preciosEnsaladas.ensaladaMolle },
        { nombre: "Ensalada Tijuana",opciones: preciosEnsaladas.ensaladaTijuana }
    ],
    //**Variedades de Bebidas***/
     "Limonadas": [
    { nombre: "Natural", opciones: preciosBebidas.limonadaNatural },
    { nombre: "Cerezada", opciones: preciosBebidas.limonadaCerezada },
    { nombre: "Coco", opciones: preciosBebidas.limonadaCoco },
    { nombre: "Hierbabuena", opciones: preciosBebidas.limonadaHierbabuena }
    ],

    "Cervezas": [
        { nombre: "Nacional (Poker/Costeña)", opciones: preciosBebidas.cervezaNacional },
        { nombre: "Premium (Club/Aguila/Redds)", opciones: preciosBebidas.cervezaPremium },
        { nombre: "Corona", opciones: preciosBebidas.cervezaCorona },
        { nombre: "Vaso Michelado", opciones: preciosBebidas.vasoMichelado }
    ],

    "Jugos Naturales": [
        { nombre: "En Agua", opciones: preciosBebidas.jugoEnAgua },
        { nombre: "En Leche", opciones: preciosBebidas.jugoEnLeche },
        { nombre: "Mandarina", opciones: preciosBebidas.jugoMandarina }
    ],

    "Refrescos": [
        { nombre: "Jugo Hit Vidrio", opciones: preciosBebidas.jugoHitVidrio },
        { nombre: "Gaseosa", opciones: preciosBebidas.gaseosa },
        { nombre: "Agua", opciones: preciosBebidas.agua }
    ],

    "Especialidades": [
        { nombre: "Malteadas", opciones: preciosBebidas.malteadas },
        { nombre: "Granizados", opciones: preciosBebidas.granizados },
        { nombre: "Sodas Micheladas", opciones: preciosBebidas.sodasMicheladas },
        { nombre: "Tamarindo Michelado", opciones: preciosBebidas.tamarindoMichelado },
        { nombre: "Infusiones", opciones: preciosBebidas.infusiones },
        { nombre: "Brownie con Helado", opciones: preciosBebidas.brownieHelado }
    ]
        
    };


