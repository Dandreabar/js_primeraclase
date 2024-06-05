


/*
function saludar(nombre ,apellido){

    console.log("Nombre: ",nombre);
    console.log("Apellido: ",apellido);

}



saludar("Mauro","Lopez");
saludar("Gomez", "Romina");
*/


//SCOPE 

//SCOPE GLOBAL

let nombreGlobal = "Pepe"


{
    //SCOPE LOCAL 
    let nombre = "Luis";
    console.log("Hola: ", nombre)
    console.log("Hola global: ", nombreGlobal);
    
}

//console.log("Hola: ", nombre);

