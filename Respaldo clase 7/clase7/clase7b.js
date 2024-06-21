

//forEach

function doble( num ){
    console.log("El numero es: ", num);
    console.log("El doble es es: ", num*2);
}


let numeros = [ 99 , 2 , 45 ,32 ,10 ,7 ,91];


numeros.forEach( doble );



//FILTER

let usuarios = [
    {nombre:"Pepe",apellido:"Rojas",edad:42},
    {nombre:"Laura",apellido:"Rojas",edad:10},
    {nombre:"Marcos",apellido:"Rojas",edad:56},
    {nombre:"Sebastian",apellido:"Rojas",edad:8},
    {nombre:"Macarena",apellido:"Rojas",edad:17},
    {nombre:"Juan",apellido:"Rojas",edad:22}
]

function esMayorDeEdad( objUsuario ){
    let resultado = objUsuario.edad >= 18;
    return resultado
}



let resultadoFilter = usuarios.filter(esMayorDeEdad);

console.log(resultadoFilter);




//FIND

let usuariosDos = [
    {nombre:"Pepe",apellido:"Rojas",edad:42},
    {nombre:"Laura",apellido:"Rojas",edad:10},
    {nombre:"Marcos",apellido:"Rojas",edad:56},
    {nombre:"Sebastian",apellido:"Rojas",edad:8},
    {nombre:"Marta",apellido:"Rojas",edad:17},
    {nombre:"Juan",apellido:"Rojas",edad:22}
]

function buscarUsuario( objUsuario ){

    return objUsuario.nombre == "Marta" 
}




let resultadoFind = usuariosDos.find( buscarUsuario );
console.log( resultadoFind );




//MAP

let productos = [
    {nombre:"Cocina", precio:50000},
    {nombre:"Mouse", precio:14000},
    {nombre:"Teclado", precio:20000},
    {nombre:"Microfono", precio:8000},
    {nombre:"Escritorio", precio:100000},
    {nombre:"Silla", precio:35000},
    {nombre:"Lampara", precio:5000},
]


function agregarIva( objProducto){

    let iva = objProducto.precio * 0.21;

    return {
        nombre:objProducto.nombre,
        precio:objProducto.precio + iva
    }
}



let resultadoMap = productos.map( agregarIva );
console.log(resultadoMap)