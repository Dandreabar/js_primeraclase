//FUNCIONES DE ORDEN SUPERIOR SEGUNDA PARTE
// REDUCE busca reducir el arreglo a un unico valor

let productos =[
    {nombre:"Cocina",precio:232000},
    {nombre:"Mouse",precio:10540},
    {nombre:"Teclado",precio:5600},
    {nombre:"microfono",precio:8000},
    {nombre:"Escritorio",precio:170000},
    {nombre:"Silla",precio:35000},
    {nombre:"Lampara",precio:15600}
 ]
function calcularTotal(acu,objProducto){
    acu=acu+objProducto.precio;
    return acu
}

let ventaTotal=carrito.reduce(calculartotal,0);
console.log("Total:",ventaTotal)

//sort ordena registros de un arreglo

let listaNumeros = [3,1,23,10,99,100,230];

console.log(listaNumeros);
console.log(listaNumeros.sort());

function ordenar(a,b){
 return a - b
}

let resultadoSort=listaNumeros.sort(ordenar);
console.log(resultadoSort);







