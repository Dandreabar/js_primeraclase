//objeto es un conjunto de datos (Estructuras que se pueden definir)
//nos sirve para poder agrupar clasificaciones o conceptos
// se declaran dos formas OBJETOS LITERALES 
// 
let AutoUno={
    color:"Rojo",
    marca:"Fiat",
    patente:"ACG321",
    propietario:"Pepe"
};

console.log(AutoUno);
//los valores internos que tiene el objeto (son los miembros del objeto)
// se llaman operadores de membresia el "." para poder accederlos
//por lo tanto no puedo acceder directamente a ellos si no llamarlos desde el objeto
//los valores internos son propiedades del objeto que son los que definen al objeto.
// 
console.log("Color:",AutoUno.color)
console.log("Marca:",AutoUno.marca)
//OBJETOS estructurados
//Funcion constructora permite acumular datos sin estar definidos directamente 
//como en el objeto literal, se parece a la funcion pero recibe datos
//para poder acumularlo

function alumno(nombre,apellido,dni){
    this.nombre=nombre;
    this.apellido=apellido;
    this.dni=dni;
}
 
let alumnoUno = new alumno("Domi","Lopez",12262994)

let alumnoDos =new alumno("Richi","Bernales",10789333)

console.log(alumnoUno)

console.log(alumnoDos)
