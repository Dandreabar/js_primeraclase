//TARJET ES UNA PROPIEDAD QUE ME DICE DONDE SUCEDIO EL EVENTO
//antes de crear el carrito list veo si tengo algo en el local storage 
// antes de iniciar la pagina pregunto si tiene datos y traspaso desde el local storage a la lista
// o si no arranco con la lista en cero.
let carrito =[];

function agregarCarrito(e){
    console.log("PRODUCTO AGREGADO",e.target);
    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;
   // console.log("PADRE",padre);
   // console.log("ABUELO",abuelo);
   // e.parentNode.parentNode===> abuelo es lo mismo

    let nombreProducto = padre.querySelector("h5").textContent;    
   // console.log(nombreProducto);
    let precioProducto = padre.querySelector("span").textContent;    
   // console.log(precioProducto);
    let imagenProducto = abuelo.querySelector("img").src;

  //  console.log(imagenProducto); 
   
    let producto = {
        nombre: nombreProducto,
        precio: precioProducto,
        img:imagenProducto,
        cantidad:1
    };
    carrito.push(producto);
    // 1) no agregar duplicado
    // 2) guardar datos en local storage para que no se me pierda el carrito
   mostrarCarrito();
}

let btnCompra = document.querySelectorAll(".botonCompra");

console.log(btnCompra);

for (let boton of btnCompra){
    boton.addEventListener("click",agregarCarrito);
}

function mostrarCarrito(){

let tabla= document.getElementById("tbody");
tabla.innerHTML="";
  for (let producto of carrito){
     let fila = document.createElement("tr");
      fila.innerHTML= `<td><img src="${producto.img}"></td>
                       <td><p>${producto.nombre}</p></td>
                       <td><p>${producto.cantidad}</p></td>
                       <td>${producto.precio}</td>
                       <td><button class="btn btn-danger borrarElemento">x</button> </td>`
     tabla.append(fila);
     }
    let btnBorrar= document.querySelectorAll(".borrarElemento");    
    
    for (let btn of btnBorrar){
        btn.addEventListener("click",borrarProducto);
    }

}
function borrarProducto(e){
    console.log("Elemento Eliminado: ",e.target);
    //esto solo elimina lo visual pero tambien se debe eliminar el producto tambien del
    //arreglo
  let abuelo=  e.target.parentNode.parentNode.remove();

  let productoEliminar= abuelo.querySelector("p").textContent;
  function sacarDeCarrito(producto){
    return producto.nombre != productoEliminar
  }
   let resultadoEliminar=carrito.filter(sacarDeCarrito);
   carrito=resultadoEliminar;
   console.log(carrito);

}
let btnCarrito=document.getElementById("mostrar_carrito");

btnCarrito.addEventListener("click",function(){

  let carrito=document.getElementById("carrito");

  if(carrito.style.display != "none"){
    carrito.style.display="none";
  }else{
    carrito.style.display="block";
  }


})


