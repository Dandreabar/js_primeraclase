//EVENTOS
// hay multiples eventos para ejecutar en un proyecto
//Tengo tres formas distintas de ejecutar eventos
//la formula de la clase anterior es asignadole una funcion a la etiqueta
//no es la mas recomendada.
//function saludar(){
//   console.log("Hola buen dia");
//}
//let bntSaludar=document.getElementById("btnSaludar");
//cual es el elemento y como estan definido.
//bntSaludar.addEventListener("click",saludar);
// el primero se le esta pasando una referecia a una funcion
// en la segunda opcion se pasa la logica de una funcion anonima 
//bntSaludar.addEventListener("click",function(){
//    console.log("GUARDANDO REGISTRO");
//});
//
//bntSaludar.addEventListener("click",()=>console.log("GUARDANDO REGISTRO"));
// eventos del mouse
 //let btnDos=document.getElementById("btnDos");
 //btnDos.addEventListener("mousedown",(e)=>console.log("Se escucho mouse Down"));

 btnDos.addEventListener("click",function(e){
  // console.log("Se escucho mouse Down");
    console.log(e.button);
});
//
















