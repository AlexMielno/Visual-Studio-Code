

function digito(boton){
const escribir=document.getElementById("texto");


escribir.value+=boton.innerHTML;

}

function calcular(input){

const calculadora=document.querySelector("#calculadora");
const textCalculate=document.querySelector(input);
let datos=[];
let text=[...textCalculate.value];

datos=text.reduce((prev,curr,index)=>{
   let termino=0;
    if (!isNaN(curr)){
return prev=prev+curr*10;
    }else{
termino=prev+curr;
return prev=0;
    }
if (index=text.length){
return termino+=prev;
}

})

textCalculate.value+=`=${datos}`;

}
