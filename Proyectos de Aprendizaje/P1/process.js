function crearListaPrincipal(id){
const padre=document.querySelector(id)
const ul= document.createElement("ul");
ul.textContent="prueba exitosa ul";
padre.appendChild(ul);
}

function crearListaSecundaria(id){
const padre=document.querySelector(id)
const ol= document.createElement("ol");
ol.textContent="prueba exitosa ol";
padre.appendChild(ol);
}

function crearElemento(id){
const padre=document.querySelector(id)
const li= document.createElement("li");
li.textContent="prueba exitosa li";
padre.appendChild(li);

}

class Lista{
    constructor(id, nivel){
        id.this=id;
        nivel.this=nivel;
    }

    
}

function formularioVisible(){
const formulario=document.querySelector("#form1");

formulario.classList.
}

const Botton1 = document.querySelector("#Button1");
Botton1.addEventListener("click", ()=>formularioVisible);