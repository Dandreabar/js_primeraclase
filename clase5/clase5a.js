//CLASES
//una clase es un plano de como puedo construir un objeto
//una clase define un comportamiento y una serie de objetos
//utiliza un metodo constructor que es el que se encarga de construir y setear el objeto
//El Objeto esta compuesto por caracteristicas(propiedades) y comportamientos(Metodos)
class AlumnoCoder{   
    //caracteristicas 
    //this representa la instancia del objeto que se invoca 
    //  
     constructor(nombre,apellido,dni){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.notaUno=0;
        this.notaDos=0;
        this.notaFinal=0;        
     }  
     //Metodo
     saludar(){
        console.log("Hola mucho gusto soy :",this.nombre)
    } 
    //entrega los datos recepcionados
    getdatos(){
        console.log("<------DATOS ALUMNOS/AS------------>")
        console.log("Nombre:",this.nombre)
        console.log("Apellido:",this.apellido)
        console.log("NotaFinal:",this.notaFinal)
    }
    setnotaUno(nota){
       if(nota>0 && nota <= 10){
        this.notaUno=nota
       }
    }
    setnotaDos(nota){
        if(nota>0 && nota <= 10){
         this.notaDos=nota
      }  
    }
}
//get devuelve la información de paso de lanzamiento 
//para la clase que estoy creando
//
//new crea la instancia vacia para asignar el valor
let alumnoUno = new AlumnoCoder("Domi","Rios",12262994)
let alumnoDos = new AlumnoCoder("Fernando","Rojas",33309845)
console.log(alumnoUno);
console.log(alumnoDos);
//Metodo

alumnoUno.saludar();
alumnoDos.saludar();

alumnoUno.getdatos();
alumnoDos.getdatos();

alumnoUno.setnotaUno(55);
alumnoUno.setnotaDos(5);

console.log("Nota 1 de Alumno uno: ",alumnoUno.notaUno)

console.log("Nota 2 de Alumno uno: ",alumnoUno.notaUno)