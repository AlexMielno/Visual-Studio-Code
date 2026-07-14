const prompt = require("prompt-sync")();

function imprimirMapa(mapa, jugador) {
   

    let Xmap=mapa.tamano;
    let Ymap=mapa.tamano;
    let Xjug=jugador.posicionActual[0];
    let Yjug=jugador.posicionActual[1];
    let matriz=[];
    for (let i = 0; i < Xmap; i++) {

        matriz[i] = [];

    for (let j = 0; j < Ymap; j++) {
        if (i === Xjug && j === Yjug) {
       matriz[i][j]= "👻"
    }else{
        matriz[i][j]= " "
    }
    }

    }

console.table(matriz);
console.log("El jugador se encuentra en la posicion: " + jugador.posicionActual);
}    


let mapa= {
    tamano:10,
    posicionInicial:[0,0],
    posicionFinal:[9,9]

};

let jugador={
    nombre:"Juan",
    posicionActual:[0,0]
};

console.log("El tamano del mapa es: " + mapa.tamano);
console.log("La posicion inicial del mapa es: " + mapa.posicionInicial);
console.log("La posicion final del mapa es: " + mapa.posicionFinal);

let cambiarNombre = prompt("Introduce un nuevo nombre del jugador:");
jugador.nombre = cambiarNombre;

console.log("El nuevo nombre de la persona es: " + jugador.nombre);


for (let i = true; i===true;){


let movimiento = prompt("Introduce un movimiento (arriba, abajo, izquierda, derecha):");

if (movimiento === "arriba") {
    jugador.posicionActual[1] += 1;
}else if (movimiento === "abajo") {
    jugador.posicionActual[1] -= 1;     
}else if (movimiento === "izquierda") {
    jugador.posicionActual[0] -= 1;
}else if (movimiento === "derecha") {
    jugador.posicionActual[0] += 1;
}else{
    break;
}

console.log("La posicion actual del jugador es: " + jugador.posicionActual);

console.clear();

imprimirMapa(mapa,jugador);


if (jugador.posicionActual[0] === mapa.posicionFinal[0] && jugador.posicionActual[1] === mapa.posicionFinal[1]) {
    i = false;
        console.log("Felicidades, has llegado a la meta");
}


}