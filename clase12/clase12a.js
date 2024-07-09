//desectructuracion de objetos
//significa que creo variables y le asino un valor desde el objeto creado

let alumnoUno={
    nombre:"Pepe",
    apellido:"Rojas",
    edad:25
};
//nombre:nombreAlumno ===> esto es un alias
let {nombre:nombreAlumno,apellido,edad} = alumnoUno;

//desectructuracion ARREGLOS se debe preocupar uno de asignar por orden no 
//tengo la descripcion de la propiedad

let listaAlumnos=["Pepe","Laura","Marcos","Juana"];

//let clienteuno=listaAlumnos[0];

let [cilenteUno,clienteDos,clienteTres,Clientecuatro]=listaAlumnos;
console.log(clienteTres);

//para elegir solo algunos datos del arreglo
let [cilenteUno1, ,clienteTres1,Clientecuatro1]=listaAlumnos;

//SPREAD ...  DESENPAQUETAR ESTRUCTURAS DE DATOS

console.log(Math.max(...numeros));

function saludar(...alumnos){
    console.log(alumnos);
}


//rest param
