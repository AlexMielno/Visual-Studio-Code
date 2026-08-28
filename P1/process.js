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
