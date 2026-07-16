const {tienda} = require("./parametros.js");  

function mostrarTienda(tienda,jugador) {
    const selectTienda= numeroAleatorio(0, tienda.nombre.length - 1);
    console.log("Bienvenido a la tienda: " + tienda.nombre[selectTienda]);
    console.log(`Has logrado encontrar la tienda oculta ${tienda.nombre[selectTienda]}`);
  
    while (let ciclo =  true) {
    const opciones = prompt(`Que desea?: "Comprar", "Vender", "Salir"`);

    if (opciones === "Comprar") {
        const compra= prompt("Que desea comprar?: (1) Pocion pequeña [oro=20], (2) Pocion Mediana [oro=40], (3) Pocion Grande [oro=70]");
       
       }
}

}