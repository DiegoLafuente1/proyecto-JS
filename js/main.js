let productos = [];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const botonBuscar = document.getElementById("btnBuscar");
const inputBusqueda = document.getElementById("inputBusqueda");
const contenedorResultados = document.getElementById("contenedorResultados");
const listaCarrito = document.getElementById("lista-carrito");
const totalElement = document.getElementById("total");
const botonComprar = document.getElementById("botonComprar");
const carritoIcono = document.getElementById('carrito-icono');
const carritoNumero = document.getElementById('carrito-cantidad');
const Carrito = document.getElementById('carrito');


let carritoVisible = false;

function cargarDatosDeProductos() {
    const elementosProductos = document.querySelectorAll(".producto");

    elementosProductos.forEach((elemento, index) => {
        const nombreProducto = productos[index].nombre;
        const precioProducto = productos[index].precio;
        const imgProducto = productos[index].img;

        elemento.querySelector("h3").textContent = nombreProducto;
        elemento.querySelector("p").textContent = `$${precioProducto}`;
        elemento.querySelector("img").setAttribute("src", imgProducto);
    });
}


function actualizarCarrito() {
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }

    let total = 0;

    carrito.forEach((producto, index) => {
        const { nombre, precio, cantidad } = producto;
        total += precio * cantidad;

        const itemCarrito = document.createElement("li");

        const botonDisminuir = document.createElement("button");
        botonDisminuir.textContent = "-";
        botonDisminuir.classList.add("boton-disminuir");
        botonDisminuir.addEventListener("click", (e) => {
            e.stopPropagation();
            if (cantidad > 1) {
                producto.cantidad--;
                actualizarCarrito();
            }
        });

        const cantidadProducto = document.createElement("span");
        cantidadProducto.textContent = cantidad;

        const botonAumentar = document.createElement("button");
        botonAumentar.textContent = "+";
        botonAumentar.classList.add("boton-aumentar");
        botonAumentar.addEventListener("click", (e) => {
            e.stopPropagation(); 
            producto.cantidad++;
            actualizarCarrito();
        });

        const botonEliminar = document.createElement("button");
        botonEliminar.classList.add("boton-eliminar");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", () => {
            event.stopPropagation();
            carrito.splice(index, 1);
            actualizarCarrito();
        });

        itemCarrito.appendChild(botonDisminuir);
        itemCarrito.appendChild(cantidadProducto);
        itemCarrito.appendChild(botonAumentar);

        const nombreProducto = document.createElement("span");
        nombreProducto.textContent = nombre;

        itemCarrito.appendChild(nombreProducto);

        const totalProducto = document.createElement("span");
        totalProducto.textContent = `Total: $${(precio * cantidad).toFixed(2)}`;

        itemCarrito.appendChild(totalProducto);
        itemCarrito.appendChild(botonEliminar);

        listaCarrito.appendChild(itemCarrito);
    });

    totalElement.textContent = total.toFixed(2);

    const contadorCarrito = document.getElementById("carrito-cantidad");
    contadorCarrito.textContent = carrito.length.toString();

    console.log("Carrito actualizado:", carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


function agregarEventosAgregarAlCarrito() {
    const botonesComprar = document.querySelectorAll(".producto button");
    botonesComprar.forEach((boton) => {
        boton.addEventListener("click", () => {
            const producto = boton.parentElement;
            const nombre = producto.querySelector("h3").textContent;
            const precio = parseFloat(boton.parentElement.querySelector("button").getAttribute("data-precio"));
            const productoExistente = carrito.find((item) => item.nombre === nombre);

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Producto agregado al carrito',
                text: `Has agregado ${nombre} al carrito`,
                showConfirmButton: false,
                timer: 1500
            });

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
}

function filtrarProductos() {
    const textoBusqueda = inputBusqueda.value.toLowerCase();
    const productosDOM = document.querySelectorAll(".producto");

    productosDOM.forEach(producto => {
        const nombre = producto.querySelector("h3").textContent.toLowerCase();

        if (nombre.includes(textoBusqueda)) {
            producto.style.display = "block";
        } else {
            producto.style.display = "none";
        }
    });
}

function toggleCarrito() {
    if (!carritoVisible) {
        Carrito.style.right = '0';
        carritoVisible = true;
    } else {
        Carrito.style.right = '-400px';
        carritoVisible = false;
    }
}

botonBuscar.addEventListener("click", filtrarProductos);
inputBusqueda.addEventListener("click", filtrarProductos);
botonComprar.addEventListener("click", () => {
    if (carrito.length === 0) {
    } else {
        Swal.fire({
            title: 'Tu compra ha sido realizada con éxito!!',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });

        carrito = [];
        actualizarCarrito();
    }
});

carritoIcono.addEventListener('click', toggleCarrito);
carritoNumero.addEventListener('click', toggleCarrito);
document.addEventListener('click', (event) => {
    if (!Carrito.contains(event.target) && event.target !== carritoIcono && event.target !== carritoNumero) {
        Carrito.style.right = '-400px';
        carritoVisible = false;
    }
});

async function cargarDatosDesdeJSON() {
    try {
        const response = await fetch('productos.json');
        if (!response.ok) {
            throw new Error('No se pudo cargar el archivo JSON.');
        }
        productos = await response.json();
        cargarDatosDeProductos();
        agregarEventosAgregarAlCarrito();
    } catch (error) {
        console.error('Error al cargar los datos desde JSON:', error);
    }
}


window.addEventListener("load", () => {
    cargarCarritoDesdeLocalStorage();
});


window.addEventListener("beforeunload", () => {
    guardarCarritoEnLocalStorage();
});


function cargarCarritoDesdeLocalStorage() {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarCarrito();
    }
}


function guardarCarritoEnLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

cargarDatosDesdeJSON();
