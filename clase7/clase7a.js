//forEach

function doble(num){
    console.log("El numero es: ", num);
    console.log("El doble es :", num*2);
}

let numeros = [99,2,45,32,10,7,91];
//estoy pasando el parametro funcion doble para que tome los datos de numero arreglo.
//la funcion necesita la referencia por parametro.

numeros.forEach(doble);
//metodo filter esta es una funcion comparadora.

let usuarios = [
    {nombre:"Pepe",apellido:"Rojas",edad:42},
    {nombre:"Laura",apellido:"Monarde",edad:10},
    {nombre:"Marco",apellido:"Andrade",edad:56},
    {nombre:"Sebastian",apellido:"Roman",edad:8},
    {nombre:"Macarena",apellido:"Rojas",edad:17},
    {nombre:"Juan",apellido:"Dias",edad:22},
    {nombre:"Dominique",apellido:"Rojas",edad:15}
]
function esMayordeEdad(objUsuario){
    return objUsuario.edad >= 18;
}

let resultadoFilter = usuarios.filter(esMayordeEdad);
console.log(resultadoFilter)

//find()

let usuariosDos = [
    {nombre:"Pepe",apellido:"Rojas",edad:42},
    {nombre:"Laura",apellido:"Monarde",edad:10},
    {nombre:"Marco",apellido:"Andrade",edad:56},
    {nombre:"Sebastian",apellido:"Roman",edad:8},
    {nombre:"Macarena",apellido:"Rojas",edad:17},
    {nombre:"Juan",apellido:"Dias",edad:22},
    {nombre:"Dominique",apellido:"Rojas",edad:15}
]
 function buscarUsuario(objUsuario){
    return objUsuario.nombre== "Macarena"
 }
//si tengo dos usuarios con el mismo nombre solo devuelve el primero
//Por lo tanto seria mas util para buscar valores unicos como llaves unicas en un listado 
//como un celular, o DNI, o un ID de linea unica,Numero Factura,Numero Cliente
let resultadoFind= usuariosDos.find(buscarUsuario);
console.log(resultadoFind);
//metodo Map devuelve un nuevo arreglo con todos los elementos del original 
// pero alterados segun la operacion que yo haya realizado

let productos =[
    {nombre:"Cocina",precio:232000},
    {nombre:"Mouse",precio:10540},
    {nombre:"Teclado",precio:5600},
    {nombre:"microfono",precio:8000},
    {nombre:"Escritorio",precio:170000},
    {nombre:"Silla",precio:35000},
    {nombre:"Lampara",precio:15600}
]
console.log(productos);
function agregarIva(objProducto){
    let iva=objProducto.precio * 0.19;
  return {
    nombre:objProducto.nombre,
    precio:objProducto.precio + iva
  }
}
let resultadoMap = productos.map( agregarIva );
console.log(resultadoMap)

