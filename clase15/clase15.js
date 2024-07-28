//funciones anonimas

let saludo = function(){
console.log("Hola de nuevo");
}
//funcion anonima de tipo arrow
let saludoDos = ()=>"Hola de nuevo 2";

//funciones declaradas
function saludar(){
  console.log("Hola de nuevo");
}
//programacion sicronica o ejecusion lineal o sincronica
//Significa que un proceso empieza termina y sigue el otro. 

//programacion asicronica 
//permite ejecutar multiples tareas a la vez.

//setTimeout funcion que permite realizar tareas de manera sincronica.

//setTimeout(function QUE EN ESTA PROGRAMACION 
//ASINCRONA SE LLAMA CALLBACK(osea funcion llamada de vuelta),milisegundos)
 
//calback es una funcion 
/*SIGNIFICA QUE EJECUTA UN PROCESO QUE SE DEBE EJECUTAR DENTRO DE 3 SEGUNDOS
//los procesos asincronicos vienen por peticiones al servidor
//se resuelven al final de los demas procesos.

console.log("Hola desde el presente")
setTimeout(function(){console.log("Hola desde el futuro")},3000);
console.log("FIN")
console.log("Inicio")
setTimeout(function(){console.log("Mitad")},0);
console.log("Final")*/

//callstack sirve para poder deshacer los llamados tiene arquitactura del tipo LIFO
//el ultimo que entra es el primero que sale.

function primerLlamado(){
   segundoLlamado();
}
function segundoLlamado(){
    tercerLlamado();
}
function tercerLlamado(){
  console.log("Gracias por su compra");
}
primerLlamado();