//********FUNCION DE RENDERIZADO DE TODOS LOS PRODUCTOS DISPONIBLE*******/
let carrito = [];

//********Variable para poder utilizar los sabores de las pizzas en los calzones*/
let modoCalzoneActivo = false;

// Inicializar interfaz y llama funciones necesarias.
function init() {
    renderCategories();
    crearBuscador();
    seleccionarCategoria("Pizzas");    
}

// Inyeccción de barra buscadora por nombre de productos
function crearBuscador() {
    const grid = document.getElementById('productGrid');
    const buscadorHTML = `
        <div class="search-container no-print" style="grid-column: 1 / -1; margin-bottom: 20px;">
            <input type="text" id="productSearch" 
                   placeholder="🔍 Buscar producto (ej: Hawaiana, Pollo, Carne...)" 
                   oninput="ejecutarFiltro()" 
                   style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px;">
        </div>
    `;
    // Insertar justo antes del grid
    grid.insertAdjacentHTML('beforebegin', buscadorHTML);
}

//Función para mostrar el sidebar lado izquierdo.
function renderCategories() {
    const nav = document.getElementById('categoryNav');
    const categoriasVisibles = [
        "Entradas",
        "Pastas", 
        "Lasañas", 
        "Pizzas", 
        "Adiciones",         
        "Calzones", 
        "Hamburguesas", 
        "Sandwiches", 
        "Ensaladas", 
        "Bebidas",
        "Especialidades", 
        "Postres"
    ];
    
    nav.innerHTML = categoriasVisibles.map(c => `
        <button class="cat-btn" onclick="seleccionarCategoria('${c}')">${c}</button>
    `).join('');
}

// Selección categoria para mostrar variedad según categoria.
function seleccionarCategoria(categoria) {
    modoCalzoneActivo = (categoria === "Calzones");
    
    // Limpiar el texto de búsqueda al cambiar de categoría
    const input = document.getElementById('productSearch');
    if (input) input.value = "";
    
    renderProducts(categoria);
}

 // Muestra sabor según categoria para mostrar variedad según categoria.
function renderProducts(categoria) {
    const grid = document.getElementById('productGrid');
    let productos = [];

    //Agrupamos los productos según la categoría seleccionada, para mostrar las diferentes variaciones.
    if (categoria === "Pizzas" || categoria === "Calzones") {
        const llavesPizzas = ["Pizzas Super Estofadas", "Pizzas Estofadas", "Pizzas Especiales", "Pizzas Gourmet", "Pizzas Clásicas", "Pizzas Típicas"];
        llavesPizzas.forEach(key => {
            if (menuData[key]) productos = [...productos, ...menuData[key]];
        });
    } else if (categoria === "Bebidas") {
        const llavesBebidas = ["Limonadas", "Jarra de Té", "Cervezas", "Jugos Naturales", "Refrescos", "Especialidades"];
        llavesBebidas.forEach(key => {
            if (menuData[key]) productos = [...productos, ...menuData[key]];
        });
    } else {
        // Para categorías directas como "Entradas" o "Pastas"
        productos = menuData[categoria] || [];
    }

    // 2. Renderizamos las tarjetas
    grid.innerHTML = productos.map(p => {
        // SEGURIDAD: Validamos que p.opciones exista antes de usar Object.values
        const opciones = modoCalzoneActivo ? (preciosVariedades.calzone || {}) : (p.opciones || {});
        
        const listaPrecios = Object.values(opciones);

        // Si el producto no tiene precios (por un error en products.js), lo saltamos
        if (listaPrecios.length === 0) {
            console.error(`Error: El producto "${p.nombre}" no tiene opciones de precio.`);
            return ''; 
        }

        const precioMin = Math.min(...listaPrecios);
        const precioMostrar = listaPrecios.length > 1 
            ? `$${precioMin.toLocaleString()}+` 
            : `$${listaPrecios[0].toLocaleString()}`;

        const prefijo = modoCalzoneActivo ? "Calzone " : "";
        const nombreCompleto = `${prefijo}${p.nombre}`;

        return `
            <div class="card" data-nombre="${nombreCompleto}" onclick='prepararSeleccion(${JSON.stringify(p)}, ${modoCalzoneActivo})'>
                <h4>${nombreCompleto}</h4>
                ${p.descripcion ? `<p class="product-desc">${p.descripcion}</p>` : ''}
                <p class="price">${precioMostrar}</p>
            </div>
        `;
    }).join('');
}

//Ejecutamos el filtro para buscar por nombre de productos ---
function ejecutarFiltro() {
    const query = document.getElementById('productSearch').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // Obtenemos el nombre desde el atributo data-nombre que pusimos arriba
        const nombreProducto = card.getAttribute('data-nombre').toLowerCase();
        card.style.display = nombreProducto.includes(query) ? "block" : "none";
    });
}

// Intermediario para inyectar los precios correctos antes de abrir el modal
function prepararSeleccion(producto, esCalzone) {
    let productoFinal = { ...producto };
    if (esCalzone) {
        productoFinal.nombre = `Calzone ${producto.nombre}`;
        productoFinal.opciones = preciosVariedades.calzone;
    }
    abrirSeleccion(productoFinal);
}

// Nueva función para manejar la lógica de tamaños/opciones
function abrirSeleccion(producto) {
    console.log("entré a abrirSeleccion")
    const opciones = Object.keys(producto.opciones);

    // Si solo tiene una opción (ej: "Unidad"), se agrega directo
    if (opciones.length === 1) {
        const tamano = opciones[0];
        const precio = producto.opciones[tamano];
        confirmarAgregar(producto.nombre, tamano, precio);
    } else {
        // Si tiene varios tamaños, activamos tu modal del HTML
        const modal = document.getElementById('modal-seleccion');
        const titulo = document.getElementById('modal-titulo');
        const gridOpciones = document.getElementById('opciones-tamano');

        titulo.innerText = producto.nombre;
        gridOpciones.innerHTML = Object.entries(producto.opciones).map(([tam, pre]) => `
            <button class="btn-tamano" onclick="confirmarAgregar('${producto.nombre}', '${tam}', ${pre}); cerrarModal()">
                ${tam} <br> <strong>$${pre.toLocaleString()}</strong>
            </button>
        `).join('');

        modal.style.display = 'flex';
    }
}

function confirmarAgregar(nombre, tamano, precio) {
    console.log("entré a confirmasAgregar")
    // Creamos un objeto único para el carrito
    const itemPedido = {
        id: Date.now(), // ID temporal para poder borrarlo
        nombre: `${nombre} (${tamano})`,
        precio: precio
    };
    
    carrito.push(itemPedido);
    actualizarComanda();
}

function cerrarModal() {
    console.log("entré a cerrarModal")
    document.getElementById('modal-seleccion').style.display = 'none';
}






//*******FUNCIONES DEL CARRITO DONDE AÑADIMOS DATOS DE PEDIDO********/
function actualizarComanda() {
    const container = document.getElementById('orderItems');
    const totalDisp = document.getElementById('totalDisplay');
    
    if(carrito.length === 0) {
        container.innerHTML = '<p class="empty-msg">No hay productos</p>';
        totalDisp.innerText = "$0";
        return;
    }

    container.innerHTML = carrito.map((item, index) => `
        <div class="item-row">
            <span>${item.nombre}</span>
            <div>
                <strong>$${item.precio.toLocaleString()}</strong>
                <button onclick="eliminarItem(${index})" class="btn-delete">🗑️</button>
            </div>
        </div>
    `).join('');

    const total = carrito.reduce((sum, item) => sum + item.precio, 0);
    totalDisp.innerText = `$${total.toLocaleString()}`;
}

function eliminarItem(index) {
    carrito.splice(index, 1);
    actualizarComanda();
}
//Funciónes del checkout del pedido.(datos del cliente)
function abrirCheckout() {
    if (carrito.length === 0) return alert("El carrito está vacío");
    
    const modal = document.getElementById('modal-checkout');
    modal.style.display = 'flex';
    
    // IMPORTANTE: El foco automático
    setTimeout(() => {
        document.getElementById('clienteNombre').focus();
    }, 100);
}
function cerrarCheckout() {
    document.getElementById('modal-checkout').style.display = 'none';
}

//función para realizar el proceso del pago y capturar toda la información necesaria.
function procesarPedidoFinal() {
    const datos = {
        telefono: document.getElementById('clienteTelefono').value, // Cambiado de barrio a teléfono
        nombre: document.getElementById('clienteNombre').value,
        direccion: document.getElementById('clienteDireccion').value,
        pago: document.getElementById('metodoPago').value,
        obs: document.getElementById('observaciones').value,
        sede: document.getElementById('sedeSelector').value
    };

    // Validación actualizada
    if (!datos.telefono || !datos.nombre || !datos.direccion || !datos.pago) {
        return alert("⚠️ Teléfono, Nombre, Dirección y Pago son obligatorios.");
    }

    cerrarCheckout();
    confirmarImpresion(datos);
}

function confirmarImpresion(datos) {
    const container = document.getElementById('orderItems');
    
    // 1. Evitar duplicados: Eliminamos cualquier encabezado previo antes de imprimir
    const seccionesPrevias = container.querySelectorAll('.info-cliente-ticket');
    seccionesPrevias.forEach(s => s.remove());

    // 2. Generar un número de pedido (puedes usar uno de tu BD o este aleatorio)
    const nPedido = Math.floor(Math.random() * 90000) + 10000;

    // 3. Crear el HTML con el Número de Pedido como protagonista
    const infoHtml = `
        <div class="info-cliente-ticket" style="font-family: 'Courier New', monospace; color: black;">
            <h2 style="text-align:center; margin:0; font-size: 16pt;">MOLLE PIZZA</h2>
            <p style="text-align:center; margin:5px 0; font-size: 12pt;">${datos.sede.toUpperCase()}</p>
            
            <div style="border: 3px solid black; text-align: center; padding: 10px; margin: 10px 0;">
                <span style="display: block; font-size: 14pt; font-weight: bold;">PEDIDO N°</span>
                <span style="display: block; font-size: 32pt; font-weight: 900;">#${nPedido}</span>
            </div>

            <div style="border-top: 1px dashed black; margin: 10px 0;"></div>
            
            <p style="margin: 4px 0;"><strong>CLIENTE:</strong> ${datos.nombre}</p>
            <p style="margin: 4px 0;"><strong>TEL:</strong> ${datos.telefono}</p>
            <p style="margin: 4px 0;"><strong>DIR:</strong> ${datos.direccion}</p>
            <p style="margin: 4px 0;"><strong>PAGO:</strong> ${datos.pago}</p>
            ${datos.obs ? `<p style="margin: 4px 0;"><strong>OBS:</strong> ${datos.obs}</p>` : ''}
            
            <div style="border-top: 1px solid black; margin: 10px 0;"></div>
            <p style="text-align:center; font-weight:bold; margin-bottom: 10px;">DETALLE DEL PEDIDO</p>
        </div>
    `;
    
    // Insertamos al inicio del contenedor
    container.insertAdjacentHTML('afterbegin', infoHtml);
    
    // 4. Pequeña pausa para asegurar que el DOM se actualice antes de abrir la ventana de impresión
    setTimeout(() => {
        window.print();
    }, 300);
}
// Iniciar
init();

//Limpiado automático del buscador con Escape
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        const input = document.getElementById('productSearch');
        if (input) {
            input.value = "";
            ejecutarFiltro(); // Resetea la vista de las cards
            input.focus();    // Devuelve el cursor al buscador
        }
        cerrarModal(); // También cerramos cualquier modal abierto
    }
});