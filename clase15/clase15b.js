//CALLBACK
//lo sincronico esta funcionando antes de los sincronico

/*let carrito=[];
function agregarAlcarrito(){
setTimeout(()=>carrito.push("Producto X"),2000)
}
agregarAlcarrito();
console.log(carrito);*/

//solucionar con callbak

let carrito=[];
function agregarAlcarrito(callbak){
    setTimeout(()=>{
                 carrito.push("Producto X");
                 callbak();   
                 },2000)
    }

agregarAlcarrito(function(){console.log(carrito);} );