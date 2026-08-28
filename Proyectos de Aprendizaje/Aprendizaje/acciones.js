const prompt = require("prompt-sync")();

let movimientos = (mov,jugador,salir=true) => {
console.log(`${jugador.inventario.length}`);
let ciclo1=0;
   while(mov==="Inventario" || ciclo1===0){

    if(ciclo1===1){
        mov= prompt("Introduce un movimiento (arriba, abajo, izquierda, derecha, Inventario): ");
    }

ciclo1=1;
   if (mov === "derecha") {
    jugador.posicionActual[1] += 1;
}else if (mov === "izquierda") {
    jugador.posicionActual[1] -= 1;     
}else if (mov === "arriba") {
    jugador.posicionActual[0] -= 1;
}else if (mov === "abajo") {
    jugador.posicionActual[0] += 1;
}else if (mov === "Inventario" && jugador.inventario.length>0) {
    console.log("Que articulo desea Utilizar?: ");
let inventario= jugador.inventario.map((items,index=0)=>{return `${index+1}.-${items.nombre}, Te puede dar: ${items.vida} de vida`});
console.log(inventario.join('\n'));
const uso = prompt("Seleccione el número del artículo que desea utilizar: ");
jugador.vida +=jugador.inventario[uso-1].vida;
jugador.inventario.splice(uso-1);
console.log(`Vida recuperada: ${jugador.vida}, tu inventario se redujo a: ${jugador.inventario.map(items=>{return `${items}`})}`)
}else if (mov === "Inventario" && jugador.inventario.length===0) {
    console.log("No tienes articulos en tu inventario");
}else{

    const mensaje = prompt("Esta seguro que quiere salir (si/no): ");
    if (mensaje === "si") {
        console.clear();
        return salir = false;
        
    }
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

function validarCompra(jugador, tienda,N) {
    console.log("El jugador tiene: " + jugador.oro + " de oro"+ " y el articulo cuesta: " + tienda.articulo[N-1].precio);
    if(jugador.oro>=tienda.articulo[N-1].precio){
    jugador.inventario.push(tienda.articulo[N-1]);
        jugador.oro -= tienda.articulo[N-1].precio;
    }else{
        console.log("No tienes suficiente oro para comprar este articulo");
    }
}

function actualizarCostosInventario(jugador) {
    jugador.inventario.forEach(item => {
        item.costo = numeroAleatorio(0.5, 0.7) * item.precio;
        
    });
}

function validarVenta(jugador, N) {
    jugador.oro += jugador.inventario[N-1].costo;
    jugador.inventario.splice(N-1, 1);
}

module.exports = {movimientos, imprimirMapa, numeroAleatorio,validarCompra, validarVenta, actualizarCostosInventario};