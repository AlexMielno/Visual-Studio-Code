
const {numeroAleatorio} = require("./acciones.js");


let mapa= {
    tamano:10, 
    posicionInicial:[0,0],
    posicionFinal:[9,9],
    

};

let jugador={
    nombre:"Juan",
    posicionActual:[0,0],
    oro:100,
    vida:30, 
    inventario:[],
};

let tienda = {
    nombre:["Tesoro Subterraneo", "La alcoba del forjador", "El bazar del mercader"],
    posicion:[numeroAleatorio(mapa.posicionInicial[0], mapa.tamano-1), numeroAleatorio(mapa.posicionInicial[0], mapa.tamano-1)],
    articulos:[{nombre:"Pocion pequeña", precio:20,vida:5,posicion:1}, {nombre:"Pocion mediana", precio:40,vida:12,posicion:2}, {nombre:"Pocion grande", precio:70,vida:25,posicion:3}]
};

let trampa = {
    nombre:["Trampa de pinchos", "Trampa de fuego", "Trampa de hielo"],
    posicion:[numeroAleatorio(mapa.posicionInicial[0], mapa.tamano-1), numeroAleatorio(mapa.posicionInicial[0], mapa.tamano-1)]
};

module.exports = {tienda, mapa, jugador,trampa};


