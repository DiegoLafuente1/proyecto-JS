alert ("Bienvenido/a a Tiendafit, a continuacion se le mostraran los productos disponibles")

let  Productos = parseFloat (prompt("indique del 1 al 5 que producto quiere comprar : \n 1- Proteina Chocolate $2500 \n 2- Proteina vainilla $2600 \n 3- Proteina frutilla $2400 \n 4- Creatina 350g $1500 \n 5- Creatina 500g $1400 \n Para confirmar la compra o salir apriete 0")) 

let seleccionarUnidades;

let total = 0;

const cantidad = (cant, precio) => {
    return cant * precio
}

while (Productos != 0) {
    switch (Productos) {
        case 1 :
            seleccionarUnidades = parseFloat(prompt("Proteina chocolate - indique la cantidad que desea llevar de este producto"))
                total += cantidad (seleccionarUnidades, 2500)
            break;
        case 2 :
            seleccionarUnidades = parseFloat(prompt("Proteina vainilla - indique la cantidad que desea llevar de este producto"))
                total += cantidad (seleccionarUnidades, 2600)
            break;
        case 3 :
            seleccionarUnidades = parseFloat(prompt("Proteina frutilla - indique la cantidad que desea llevar de este producto"))
                total += cantidad (seleccionarUnidades, 2400)
            break;
        case 4 :
            seleccionarUnidades = parseFloat(prompt("Creatina 350g  - indique la cantidad que desea llevar de este producto"))
                total += cantidad (seleccionarUnidades, 1500)
            break;
        case 5 :
            seleccionarUnidades = parseFloat(prompt("Creatina 500g - indique la cantidad que desea llevar de este producto"))
                total += cantidad (seleccionarUnidades, 1400)
            break;
        default :
            break;
    }
    Productos = parseFloat (prompt("indique del 1 al 5 que producto quiere comprar : \n 1- Proteina Chocolate $2500 \n 2- Proteina vainilla $2600 \n 3- Proteina frutilla $2400 \n 4- Creatina 350g $1500 \n 5- Creatina 500g $1400 \n Para confirmar la compra o salir apriete 0"))
}

alert ("El total de la compra es : $" + total)

alert ("Gracias por confiar en nosotros!!")