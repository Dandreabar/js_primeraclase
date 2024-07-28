//Promesas es algo que ustedes promete que sucedera ene l futuro
// el api es el que responde con una promesa
// nosotros esperamos del otro lado la respuesta
//la promesa tiene varios estados rechazado>reject
//pendding o pendiente
//satisfecho o fullfive

let carrito =[];


let agregarCarrito = new Promise(function(resolve,reject){
  setTimeout( function(){
         let tiempoCarga =Math.random();
         if (tiempoCarga <0.5){
            carrito.push("Producto x")
            resolve(carrito);
         }else{
          reject("no se puede cargar el producto");
         }
  },2000);
})

//console.log(agregarCarrito);

agregarCarrito
    .then( function(carrito){
        console.log("se cumple");
        console.log(carrito);
    })
    .catch(function(msjError){
        console.log(msjError);
    })







