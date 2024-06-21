//FUNCIONES DE ORDEN SUPERIOR
//Funcion declarada
//function saludar(){
//    console.log("hola")
//}
//FUNCION ANONIMA ==> QUE LA FUNCION NO TIENE NOMBRE==> SIGNIFICA QUE NO SE PUEDE INVOCAR
//para usarla necesariamente hay que utilizar algun referenciador si o si.en este guardarla en una variable
let saludo=function(){
    console.log("Hola desde la funcion anonima")
}
saludo();
//funciones de tipo Arrow funcion//pertenece a lo que se llama sugar sintaxis (sintaxis dulce o simple) 
// busca hacer las sintaxis de forma mas simple y elegante y mejor escritura
// la palabra functions se reemplaza por => y no lleva curli braquet si es de 
//una sola linea la instruccion.

//let saludoArrow=()=>console.log("Hola");
//saludoArrow();
let saludoArrow=()=>10;
console.log(saludoArrow());

// RETORNA FUNCIONES //
function doble(num){
    return num * 2
}

let resultaDodoble=doble(15);
console.log("El doble",resultaDodoble)

function crearMultiplicador(multiplicador){

    return function(num){
        return num * multiplicador;
    }
}
let tripleNumAnonimo=crearMultiplicador(3);
console.log(tripleNumAnonimo(25));

//recibir una funcion por parametro

function saludarUsuario(nombre){
   console.log("Hola : ",nombre);
}
let listaUsuario=["Pedro","Juan","Laura","Macarena"];

function saludarATodos(arr,fnSaludar){
     for (let alumno of arr){
        fnSaludar(alumno);
     }
}
//si coloco saludarUsuario() me retorna un undefine ya que no retorna nada
//cuando va a pasar una funcion por parametros se debe pasar la referencia no el resultado
// esto se conoce como callbak , ya que no estoy usando la funcion si no su referencia

saludarATodos(listaUsuario,saludarUsuario);
// esto tambien se podria usar de esta manera


