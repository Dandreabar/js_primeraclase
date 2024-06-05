

function saludarUsuario( nombreUsuario ){

    
    console.log("Bienvenido/a al sistema: ", nombreUsuario)
   
}





saludarUsuario("Pepe");
saludarUsuario("Juan");
saludarUsuario("Marcos");




//dobleNum: Se encarga de mostrar el doble del numero enviado
//numero: Es un numero entero o flotante
function dobleNum( num ){

    if( typeof(num) == "number" ){
        console.log("Se ingreso el numero: ", num);
        console.log("El doble es: ", num*2);
    }
    else{
        console.log("Tipo de dato incorrecto");
    }
    

}



dobleNum(30);
dobleNum(50);
dobleNum("Juan");







/*
function mayorDeEdad(){

    let edad = 30;

    if( edad >= 18){
        console.log("Bienvenido/a al sistema");
    }
    else{
        console.log("No podes ingresar");
    }
}



mayorDeEdad();
mayorDeEdad();
mayorDeEdad();
mayorDeEdad();
*/

