let carrito = [];

// Inicializar interfaz
function init() {
    renderCategories();
    // Renderizamos la primera categoría disponible automáticamente
    const primeraCat = Object.keys(menuData)[0];
    renderProducts(primeraCat);
}

function renderCategories() {
    console.log("entré a renderCategories")
    const nav = document.getElementById('categoryNav');
    // Ahora obtenemos las llaves del objeto menuData
    const cats = Object.keys(menuData);
    
    nav.innerHTML = cats.map(c => `
        <button class="cat-btn" onclick="renderProducts('${c}')">${c}</button>
    `).join('');
}

function renderProducts(categoria) {
    console.log("entré a renderProducts")
    const grid = document.getElementById('productGrid');
    // Accedemos directamente al array de la categoría seleccionada
    const productos = menuData[categoria];
    
    grid.innerHTML = productos.map(p => {
        // Mostramos un precio base o un rango si tiene varias opciones
        const precios = Object.values(p.opciones);
        const precioMostrar = precios.length > 1 
            ? `$${Math.min(...precios).toLocaleString()}+` 
            : `$${precios[0].toLocaleString()}`;

        return `
            <div class="card" onclick='abrirSeleccion(${JSON.stringify(p)})'>
                <h4>${p.nombre}</h4>
                <p class="price">${precioMostrar}</p>
            </div>
        `;
    }).join('');
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
                <button onclick="eliminarItem(${index})" class="btn-delete">✕</button>
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

function procesarPedido() {
    if(carrito.length === 0) return alert("El pedido está vacío");
    const sede = document.getElementById('sedeSelector').value;
    alert("Imprimiendo pedido para sede: " + sede.toUpperCase());
    window.print();
}

// Iniciar
init();