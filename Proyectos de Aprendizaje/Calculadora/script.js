function digito(boton){
const escribir=document.getElementById("texto");
const boton=document.querySelector("boton")
const seleccion=boton.querySelectorAll("button");
escribir.value+=seleccion[0].innerHTML;

}