
//let voto= prompt("Ingrese su voto: A o B");
//console.log("Gracias por votar");
//BUCLE FOR
//Es un bucle numerico va a definir for (desde; hasta;actualizacion){codigo}
// 
//for (let i=0; i<3; i=i+1){
  //  console.log("Mensaje desde el bucle");
 //   console.log("Estoy en la vuelta; ",i);
//}
//ir de cero a 10 se puede poner >=
// contar 10 veces
/*for (let i=0; i<10; i=i+1){  
    console.log("Voy en la vuelta; ",i);
}
// se muestra la tabla del numero 
let numeroUsuario=3;

for(let i = 0; i <=10;i=i+1){
    let resultado = numeroUsuario * i;
    console.log(numeroUsuario, " * " ,i," = ", resultado);
}*/

let nombreUsuario="Pepe";
let intento=1;

for(let i = 0; i <=5;i=i+1)
    {
    let nombreUsu=prompt("Ingrese un nombre de usuario: ");
    
    if (nombreUsu==nombreUsuario){
        console.log("Bienvenidos al Sistema ", nombreUsu);
        break;
    }else if(intento < 3) {
         intento=intento+1;         
    }else{
        console.log("Usuario Bloqueado, No puede acceder al sistema");
        break;
    }
       
}






