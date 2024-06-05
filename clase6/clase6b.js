//ARREGLOS aplicados en CLASES

class Alumno{
    constructor(nombre,apellido,edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }
}
let listaAlumnos=[];

for(let i=0;i<3;i=i+1){
   let nombre=prompt("Ingrese Nombre");
   let apellido=prompt("Ingrese Apellido");
   let edad=prompt("Ingrese Edad");  
   edad=parseInt(edad);
   let alumnoNuevo= new Alumno(nombre,apellido,edad);
   listaAlumnos.push(alumnoNuevo);
} 
//FOR itera sobre el objeto y lo que hace
//traer un dato de la lista.

for (let usuario of listaUsuario){
    console.log(usuario);
}
//ejemplo

for(let alumno of listaAlumnos){ 
   if (let alumno.edad >= 18)
    {
    console.log("Alumno:" , Alumno.nombre)
}
}
