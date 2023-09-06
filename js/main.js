const productos = [
    { id: 1, nombre: "Proteina chocolate", precio: 2500, img: "imagenes/prote choco.jpg"},
    { id: 2, nombre: "Proteina vainilla", precio: 2600, img: "imagenes/prote vainilla.jpg"},
    { id: 3, nombre: "Proteina frutilla", precio: 2400, img: "imagenes/prote frutilla.png"},
    { id: 4, nombre: "Creatina 350g", precio: 1500, img: "imagenes/creatina 350.webp"},
    { id: 5, nombre: "Creatina 500g", precio: 1400, img: "imagenes/creatina 500g.webp"},
];

const botonBuscar = document.getElementById("btnBuscar");
const inputBusqueda = document.getElementById("inputBusqueda");
const contenedorResultados = document.getElementById("contenedorResultados");

botonBuscar.addEventListener("click", () => {
    const terminoBusqueda = inputBusqueda.value.trim().toLowerCase();
    const productosEncontrados = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(terminoBusqueda)
    );

    if (productosEncontrados.length === 0) {
        contenedorResultados.textContent = "No se encontraron productos.";
    } else {
        contenedorResultados.innerHTML = ""; 

        productosEncontrados.forEach((producto) => {
            const productoDiv = document.createElement("div");
            productoDiv.classList.add("producto");
            
            const imagen = document.createElement("img");
            imagen.src = producto.img;
            imagen.alt = producto.nombre;
            imagen.classList.add("imagen-pequena");
            
            const nombre = document.createElement("h2");
            nombre.textContent = producto.nombre;
            
            const precio = document.createElement("p");
            precio.textContent = `Precio: $${producto.precio}`;
            
            productoDiv.appendChild(imagen);
            productoDiv.appendChild(nombre);
            productoDiv.appendChild(precio);
            
            contenedorResultados.appendChild(productoDiv);
        });

        localStorage.setItem("productosEncontrados", JSON.stringify(productosEncontrados));
    }
});