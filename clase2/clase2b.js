// condicionales 
// if ---> SI (evalua el resultado de la condicion) 
// agregamos else para evaluar el caso por descarte del IF
//let edadUsuario = 15;
//if(edadUsuario >=18){
//    console.log("Bienvenido/a al sitio");
//}else{
//    console.log("No puedes ingresar");
//}

let numUno=33;
let numDos=33;

let operacion= prompt("Ingrese la palabra SUMA o RESTA o + o -");
// para ampliar las opciones utilizamos operadores (compuertas logicas) logicos 
//sirven para agrupar multiples condiciones
//tenemos and ---> Y ----> && agrupa condiciones
//         or ---> o ----> // desagrupa condiciones
// se ocupar con la tabla de verdad para y
// |-----|-------|----|
// |V    |  V    | V
// |V    |  F    | F
// |F    |  V    | F
// |F    |  F    | F

// tabla de verdad para o
// |-----|-------|----|
// |V    |  V    | V
// |V    |  F    | V
// |F    |  V    | V
// |F    |  F    | F

if(operacion=="SUMA" || operacion=="+"){
    let suma=numUno+numDos;
    console.log("El resultado de la suma es: ",suma);
}
else if(operacion=="RESTA" || operacion=="-")
    {
    let resta= numUno - numDos;
    console.log("El resultado de la resta es: ",resta);
}else{
    console.log("Operacion no encontrada: ",operacion);
}

//y
console.log(22==22 && 55 > 34); //verdadero
console.log(10==13 && "Juan"=="Juan"); //falso

//o
console.log(22==24 || 55 > 34); //verdadero
console.log(10==13 || "Juan"=="Juan");// verdadero




