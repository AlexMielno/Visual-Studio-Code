const {tienda} = require("./parametros.js");  
const {numeroAleatorio} = require("./acciones.js");
const prompt = require("prompt-sync")();
const {jugador} = require("./parametros.js");
const {validarCompra} = require("./acciones.js");
const {validarVenta} = require("./acciones.js");
const {actualizarCostosInventario} = require("./acciones.js");

function mostrarTienda(tienda,jugador) {
    
    const selectTienda= numeroAleatorio(0, tienda.nombre.length - 1);
    console.log("Bienvenido a la tienda: " + tienda.nombre[selectTienda]);
    console.log(`Has logrado encontrar la tienda oculta ${tienda.nombre[selectTienda]}`);
  let ciclo = true;
  let i=0;
    while (ciclo ===  true) {
    const opciones = prompt(`Que desea?: "Comprar", "Vender", "Salir": `);

    if (opciones === "Comprar") {
        console.log(`Tienes ${jugador.oro} de oro`);
        console.log("Que desea comprar?:");
        let articulosDisponibles= tienda.articulo.map(items=>{ return ` Articulo: ${items.posicion}.-${items.nombre}, Cuesta: ${items.precio}`});
        console.log(` ${articulosDisponibles.join('\n')} \n`);
        const compra = prompt("Seleccione el número del artículo que desea comprar: ");

        validarCompra(jugador, tienda, compra);

       }else if (opciones === "Vender") {

        if(i===0){
        actualizarCostosInventario(jugador);
        i++;
        }

        console.log("Que desea vender?:");
        let vender=jugador.inventario.map((items,indice=0)=>{return `${indice+1}.-${items.nombre}, Te puedo dar: ${items.costo}`});
        console.log(vender.join('\n'));
const venta = prompt("Seleccione el número del artículo que desea vender: ");
validarVenta(jugador, venta);
console.log(`Ahora tienes ${jugador.oro} de oro`);

       }else if (opciones === "Salir") {
        console.log("Gracias por visitar la tienda");
        ciclo = false;
       }

      

}

}
mostrarTienda(tienda,jugador);