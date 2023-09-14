const productos = [
    { id: 1, nombre: "Proteina chocolate", precio: 2500, img: "imagenes/prote choco.jpg"},
    { id: 2, nombre: "Proteina vainilla", precio: 2600, img: "imagenes/prote vainilla.jpg"},
    { id: 3, nombre: "Proteina galleta", precio: 2400, img: "imagenes/proteina galleta.webp"},
    { id: 4, nombre: "Creatina 350g", precio: 1500, img: "imagenes/creatina 350.webp"},
    { id: 5, nombre: "Creatina 500g", precio: 1400, img: "imagenes/creatina 500g.webp"},
    { id: 6, nombre: "Crema mani 500g", precio: 800, img: "imagenes/mani.webp"},
    { id: 7, nombre: "Mancuernas 2kg ", precio: 1000, img: "imagenes/mancuernas 2kg.webp"},
    { id: 8, nombre: "Mancuernas 5kg", precio: 1500, img: "imagenes/mancuernas 5kg.webp"},
    { id: 9, nombre: "Mancuernas 10kg", precio: 2000, img: "imagenes/mancuernas 7kg.webp"},
    { id: 10, nombre: "Mancuernas 15kg", precio: 2500, img: "imagenes/mancuernas 10kg.webp"},
    { id: 11, nombre: "Creatina 500g", precio: 1400, img: "imagenes/creatina 500g.webp"},
];

const botonBuscar = document.getElementById("btnBuscar");
const inputBusqueda = document.getElementById("inputBusqueda");
const contenedorResultados = document.getElementById("contenedorResultados");

const carrito = [];
const listaCarrito = document.getElementById("lista-carrito");
const totalElement = document.getElementById("total");

function actualizarCarrito() {
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }

    let total = 0;

    carrito.forEach((producto) => {
        const { nombre, precio, cantidad } = producto;
        total += precio * cantidad;

        const itemCarrito = document.createElement("li");
        itemCarrito.textContent = `${nombre} - Cantidad: ${cantidad} - Total: $${(precio * cantidad).toFixed(2)}`;
        listaCarrito.appendChild(itemCarrito);
    });
    totalElement.textContent = total.toFixed(2);

    console.log("Carrito actualizado:", carrito);
    console.log("Total:", total.toFixed(2));
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const botonesComprar = document.querySelectorAll(".producto button");

botonesComprar.forEach((boton) => {
    boton.addEventListener("click", () => {
        const producto = boton.parentElement;
        const nombre = producto.querySelector("h3").textContent;
        const precio = parseFloat(boton.parentElement.querySelector("button").getAttribute("data-precio"));
        const productoExistente = carrito.find((item) => item.nombre === nombre);

        if (productoExistente) {
            productoExistente.cantidad++;
        } else {
            carrito.push({
                nombre,
                precio,
                cantidad: 1,
            });
        }

        actualizarCarrito();

        console.log("Producto seleccionado:", { nombre, precio });
        localStorage.setItem("carrito", JSON.stringify(carrito));
    });
});


function filtrarProductos() {
    const textoBusqueda = inputBusqueda.value.toLowerCase();
    const productos = document.querySelectorAll(".producto");

    productos.forEach(producto => {
        const nombre = producto.querySelector("h3").textContent.toLowerCase();

        if (nombre.includes(textoBusqueda)) {
            producto.style.display = "block";  
        } else {
            producto.style.display = "none";
        }
    });
}


inputBusqueda.addEventListener("keyup", filtrarProductos);