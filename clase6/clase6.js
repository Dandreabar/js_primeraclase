//ARRAYS, es un tipo de datos (estructuras de datos)
//si se carga un dato como un string o un numero simplemente el arreglo se pisa
//por su caracteristicas de ser un tipo de datos.
let listaAlumnos=[]; // creacion de una arreglo vacio

//let listaUsuario=["Pablo","Andrea","Jose","Domi","Felipe"]; // creacion de una arreglo con datos
// listaUsuario= "Jesus";
//console.log(listaUsuarios); me va a mostrar solo Jesus y no el arreglo que hice.
//el arreglo siempre va a ser ordenado y el orden del arreglo se basa en el indice
// se mide el indice de 0 a n-1
//console.log(listaUsuario);
//ademas puedo mesclar cualquier tipo de datos y ademas admite datos duplicado
//let listaUsuario1=["Pablo",false,44,"Domi","Felipe","Andres","Pablo"];
//console.log(listaUsuario1);
//para acceder a un elemento del arreglo
//console.log(listaUsuario1[1]);
//console.log(listaUsuario1[4]);
//el arreglo puede almacenar mas arreglos dentro de otro y ademas objetos ejemplo
let listaPrueba=["Pablo",false,44,"Domi","Felipe","Andres","Pablo",["Felipe","Marco",44],{nombre:"Marcos",apellido:"Lopez"}];
console.log(listaPrueba);
console.log(listaPrueba[7]);
//Para acceder al sub indice tengo que aplicar indice sobre indice
let resultado= listaPrueba[7];
console.log(resultado[1]);
console.log(listaPrueba[7][1]);
console.log(listaPrueba[8].nombre);
//METODOS DE LOS ARREGLOS
console.log("Cantidad de Elementos",listaPrueba.length); // CUANTOS ELEMENTOS TIENE EL ARREGLO (EL ARREGLO ES UN OBJETO)
for(let i =0;i<=listaPrueba.length;i=i+1){
    console.log("Vuelta: ",i);
    console.log("Vuelta:", listaPrueba[i]);
}









