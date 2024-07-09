// operador ++ aumenta el valor de la variable en 1,suma y reasigna
//i=i+1; <======> i++; es lo mismo ejemplo for(let i=0; i<10;i++){}

// operador -- aumenta el valor de la variable en 1, resta y reasigna
//i=i-1; <======> i--; es lo mismo ejemplo for(let i=0; i<10;i--){}

//varible multiplicador,primero se hace la operacion y luego se asigna

i*=2;//i=4

i+=i;//i=8
//OPERADOR TERNARIO es una simplificacion de la estructura condicional de if else,tiene un retorno
//implicito es decir no se usa con return

/*if(20>30){
   alert("Se cumple");
}else{
   alert("No se cumple")
}*/
//ejemplo
20>30 ? alert("Se cumple"):alert("No se cumple");

let edad=18;
//asignacion condicional 
let puedeVotar=edad>=18 ? true:false;
puedeVotar ? alert("Puede votar"): alert("No puede votar");
console.log(puedeVotar);

//OPERADORES LOGICOS: && // (y o)
console.log(10>5 && 30== 20);
// cuando utilizo los operadores logicos fuera del ambito binary utilizo los operadores
//FALSY; NaN,null,0,undefined,false,""
//AND(Y) retorna el primer valor falsy o el ultimo verdadero

console.log(20 && 50);
console.log(10 && false && "Jose");
console.log(parseInt("Jose") && 30);

//OR(O) retorna el primer valor verdadero o el ultimo falsy

let edadUsuario=parseInt("Jose") || parseInt("Pedro") ||"No se pudo cargar la edad";
// se puede usar ?? que es or fuera del ambito binario pero que solo devuelve undefined,null

//ENCADENAMIENTO OPCIONAL

let usuario=document.getElementById("usuarioUno");
console.log(usuario);
// como puedo controlar si existe un error o un campo que no existe  al llamar de la siguiente manera
//usuario?.nombre Indica que a usuario solo se le va a encadenar la definicion nob===mbre si es que
//no es null
console.log(usuario?.nombre || "No se encontro el usuario");



















