const prompt = require("prompt-sync")();
let movimientos = (mov,jugador,salir=true) => {

    
   if (mov === "derecha") {
    jugador.posicionActual[1] += 1;
}else if (mov === "izquierda") {
    jugador.posicionActual[1] -= 1;     
}else if (mov === "arriba") {
    jugador.posicionActual[0] -= 1;
}else if (mov === "abajo") {
    jugador.posicionActual[0] += 1;
}else{

    const mensaje = prompt("Esta seguro que quiere salir (si/no): ");
    if (mensaje === "si") {
        console.clear();
        return salir = false;
        
    }
}

return salir;

}

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

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




module.exports = {movimientos, imprimirMapa, numeroAleatorio};