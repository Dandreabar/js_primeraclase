//funciones nativas funciones que vienen escritas 
//en Java script ejemplo es console.log

//Las funciones son puntuales y se dedican a realizar un proceso que identifique 
//algo repetitivo para acortar codigo y trabajar codigo en forma modular
// son un conjunto de instrucciones que se agrupan para realizar este proceso
///Puede utilizarse 
//ejemplo
//esta es la forma de invocar la funcion


/* esta es la forma de invocar la funcion
function mayordeEdad(edad){

    if (edad>= 18){
        console.log("Bienvenido/a al Sistema")
    }else{
        console.log("No puedes ingresar al Sistema")
    }
}*/

//funciones con parametros
function tipoNumero(numerito){
    if( typeof(numerito)!="number"){
      console.log("Valor ingresado no es un numero,intente nuevamente")
    }else{
       console.log("Se ingreso el numero",numerito)
       numerito=numerito*2;
       console.log("El Doble es",numerito)
    } 
}
tipoNumero(33);
tipoNumero("malo");
tipoNumero(455);
tipoNumero(6);
typeof("holis");
//valida que el numero que me estan dando sea un numero


