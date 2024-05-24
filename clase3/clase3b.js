//BUCLE WHILE
/*
let nombreUsuario=prompt("Ingrese su nombre o Salir");
while( nombreUsuario != "Salir"){   
  console.log("Bienvenido/a al sistema: ",nombreUsuario);
  nombreUsuario=prompt("Ingrese su nombre o Salir");
}
*/
//funciones de parse que se utilizan para cambiar los tipos de datos de uno en otro
//parseInt recibe un valor y lo convierte a entero
//parsefloat recibe un valor y lo convierte a flotante (enteros con decimales)

//1)PIDO UN NUMERO POR TECLADO Y MUESTRO EL SIGUIENTE POR CONSOLA
//SE FINALIZA CUANDO SE INGRESE UN NUMERO NEGATIVO

//2)SE INGRESA POR TECLADO NUMEROS HASTA QUE LA SUMA TOTAL NO SEA MAYOR A 500

//3.VOTACION CLUB PEPITO JR VAN A VOTAR 10 DE SOCIOS, SE PUEDE VOTAR
//POR EL PARTIDO A o B o NULO(No es a ni b)
//POSIBLES RESULTADO GANA A, GANA B, EMPATE
//INFORMAR QUE PARTIDO GANO

/*
let numero=prompt("Indique un numero, negativo para Salir");
let numeroSiguiente;
while( numero >=0){  
  numeroSiguiente=parseInt(numero)+1;
  console.log("El numero siguiente : ",numeroSiguiente);
  numero=prompt("Indique un numero, negativo para Salir");
}
let acumulador=0;
while( acumulador <= 500){  
  let numUsu=prompt("Indique un numero");
  acumulador=parseInt(numUsu)+ acumulador;    
  console.log("Acumulado hasta ahora: ",acumulador);  
}
*/
let votosa=0;
let votosb=0;
let votosn=0;
for(let i = 0; i <10;i=i+1)
    {
    let nombreUsu=prompt("Ingrese su opcion de votos A o B:");
    
    if (nombreUsu=="A" || nombreUsu=="a"){
        votosa=votosa+1;        
    }else if(nombreUsu=="B" || nombreUsu=="b") {
        votosb=votosb+1;        
    }else{
        votosn=votosn+1; 
    }       
}
console.log("Resultado votaciones A" , votosa);
 console.log("Resultado votaciones B" , votosb);
 console.log("Resultado votaciones Nulos" , votosn);

if (votosa > votosb){         
    console.log("El Resultado Ganador de las votaciones es A" , votosa);           
}else if (votosb > votosa)
   { console.log("El Resultado Ganador de las votaciones es B" , votosb);       
}else if (votosa == votosb)
   { console.log("El Resultado Es Empate entre A y B");}


   
 