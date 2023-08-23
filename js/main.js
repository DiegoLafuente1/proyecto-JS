const elementos = [
    { nombre: "Proteina chocolate", valor: 2500},
    { nombre: "Proteina vainilla", valor: 2600},
    { nombre: "Proteina frutilla", valor: 2400},
    { nombre: "Creatina 350g", valor: 1500},
    { nombre: "Creatina 500g", valor: 1400},
];

console.log (elementos);

alert ("Bienvenido/a a Tiendafit, a continuacion se le mostraran los productos disponibles");

let  Productos = parseFloat (prompt("indique del 1 al 5 que producto quiere comprar : \n 1- Proteina Chocolate $2500 \n 2- Proteina vainilla $2600 \n 3- Proteina frutilla $2400 \n 4- Creatina 350g $1500 \n 5- Creatina 500g $1400 \n Para confirmar la compra o salir apriete 0")); 

let seleccionarUnidades;

let total = 0;

let arrayProductos = []

const cantidad = (cant, precio) => {
    return cant * precio
};

while (Productos != 0) {	
    switch (Productos) {
        case 1 :
            seleccionarUnidades = parseFloat(prompt("Proteina chocolate - indique la cantidad que desea llevar de este producto"))
                total += cantidad (seleccionarUnidades, 2500)
                arrayProductos.push(`Proteina chocolate, ${seleccionarUnidades}, ${total}`)
            break;
        case 2 :
            seleccionarUnidades = parseFloat(prompt("Proteina vainilla - indique la cantidad que desea llevar de este producto"))
                total += cantidad (seleccionarUnidades, 2600)
                arrayProductos.push(`Proteina vainilla, ${seleccionarUnidades}, ${total}`)
            break;
        case 3 :
            seleccionarUnidades = parseFloat(prompt("Proteina frutilla - indique la cantidad que desea llevar de este producto"))
                total += cantidad (seleccionarUnidades, 2400)
                arrayProductos.push(`Proteina frutilla, ${seleccionarUnidades}, ${total}`)
            break;
        case 4 :
            seleccionarUnidades = parseFloat(prompt("Creatina 350g  - indique la cantidad que desea llevar de este producto"))
                total += cantidad (seleccionarUnidades, 1500)
                arrayProductos.push(`Creatina 350g, ${seleccionarUnidades}, ${total}`)
            break;
        case 5 :
            seleccionarUnidades = parseFloat(prompt("Creatina 500g - indique la cantidad que desea llevar de este producto"))
                total += cantidad (seleccionarUnidades, 1400)
                arrayProductos.push(`Creatina 500g, ${seleccionarUnidades}, ${total}`)
            break;
        default :	
            break;
    }

    Productos = parseFloat (prompt("indique del 1 al 5 que producto quiere comprar : \n 1- Proteina Chocolate $2500 \n 2- Proteina vainilla $2600 \n 3- Proteina frutilla $2400 \n 4- Creatina 350g $1500 \n 5- Creatina 500g $1400 \n Para confirmar la compra o salir apriete 0"))
};

console.log(arrayProductos)

console.log ('El total de la compra es : $' + total)

alert ("El total de la compra es : $" + total)

alert ("Gracias por confiar en nosotros!!")