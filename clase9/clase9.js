// DOOM (Nos permitira manupular la interfas del usuario)
// Document objet Model (Esun objeto que se genera en el navegador que 
// es una representacion virtual de mi pagina web html)

//METODOS DE ACCESO AL DOM
// getElementById Voy a buscar a la representacion del html
//el Id es un elemento unico que no se puede repetir en una pagina
// 
let Titulo = document.getElementById("tituloPrincipal");

console.log(Titulo);
// indica el texto que tiene la etiqueta
console.log(Titulo.innerText);
Titulo.innerText="Estoy cambiando el Texto de JS";
console.log(Titulo);
// getElementByClassName Traer "elementos" por su nombre de clase trae todos los datos
//de una clase entonces retorna un arreglo 

let parrafos= document.getElementsByClassName("parrafo");
console.log(parrafos);
console.log(parrafos[0]);
console.log(parrafos[1]);
console.log(parrafos[2]);

console.log(parrafos[1].innerText);
// getElementsByTagName   TRAE TODOS LOS ELEMENTOS POR EL MISMO NOMBRE
//LO TRANSFORMA EN UN ARREGLO

let li=document.getElementsByTagName("li");

console.log(li);

for (elemento of li){
   console.log(elemento);
   console.log(elemento.innerText);
}
//CONTENEDOR
//
let contenedor = document.getElementById("contenedor");
console.log(contenedor);
//se pisa una cosa encima de otra con innerHTML
contenedor.innerHTML="<p>Parrafo generado desde Js</p>";
contenedor.innerHTML="<p>otro Parrafo generado Js</p>";

// createElement se van a tener que enganchar al nodo
//porque se crea pero queda en el aire

let parrafoJs=document.createElement("p");
parrafoJs.innerText="Parrafo creado 100% en Js"
console.log(parrafoJs);
//APPEND
//metodo para enganchar el nodo suelto se llama append
//es un metodo de los padre es decir tengo que tener al metodo padre referenciado

contenedor.append(parrafoJs);
//remove: remueve desde el padre hacia abajo















