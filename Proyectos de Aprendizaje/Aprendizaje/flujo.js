const prompt = require("prompt-sync")();
const {parametro1} = require("./parametros.js");
const {movimientos} = require("./acciones.js");
const {imprimirMapa} = require("./acciones.js");
const {mapa} = require("./parametros.js");
const {jugador} = require("./parametros.js");
const {tienda} = require("./parametros.js");
const {trampa} = require("./parametros.js");

   


//Declaracion de condiciones del juego, por ahora constantes.

console.log("El tamano del mapa es: " + mapa.tamano);
console.log("La posicion inicial del mapa es: " + mapa.posicionInicial);
console.log("La posicion final del mapa es: " + mapa.posicionFinal);

//Nombre del jugador.

let cambiarNombre = prompt("Introduce un nuevo nombre del jugador:");
jugador.nombre = cambiarNombre;
console.log("El nuevo nombre de la persona es: " + jugador.nombre);

//Bucle principal del juego.
for (let i = true; i===true;){

let movimiento = prompt("Introduce un movimiento (arriba, abajo, izquierda, derecha, Inventario):");

i = movimientos(movimiento,jugador,i);

console.log("La posicion actual del jugador es: " + jugador.posicionActual);

console.clear();

imprimirMapa(mapa,jugador);

//Clausura de juego finalizado.
console.log("parametro bucle " + i);
if (jugador.posicionActual[0] === mapa.posicionFinal[0] && jugador.posicionActual[1] === mapa.posicionFinal[1]) {
    i = false;
        console.log("Felicidades, has llegado a la meta");
        console.clear();
}


}