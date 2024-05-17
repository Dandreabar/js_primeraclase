console.log("HOLA A TODOS");
/* esto es para comentar en Javascrip
varias lineas se debe cerrar el comentario para que no lo tome*/
//comentario para solo una linea no se cierra

//Variables let= comando para declarar variables le puedo agregar o no valor 
//con let yo puedo declarar la variable y reasignarle valores.
//no se puede usar como nombre las palabras reservadas de codigo
//se debe usar nomenclatura camel case
let nombreUsuario="Domi";
let edadUsuario = 30;
const RUT = 122629945; // const es un valor que no cambia y no se le pueden 
                       //y se le debe asignar valor al crearla re-asignar valores

edadUsuario=40; //sucedio una reasignacion
console.log(edadUsuario);
//DATA TYPES O TIPOS DE DATOS
// STR o STRING ---> Cadena de caracteres TEXTO PLANO. ENTRE COMILLAS ""
let nombreAlumna="Juanita";
let dirAlumna="Cardenal Fresno 1284";
// NUMBERS --- INT---> ENTEROS NUMEROS 
edadAlumna=33;
//numbers float
let notaAlumna=7.5;
// OPERADORES
// ASIGNACION = GUARDAR UN VALOR A UNA VARIABLE DE DERECHA A IZQUIERDA
// ARITMETICOS + (SUMA) -(RESTA) *(MULTIPLICADO) /(DIVISOR)
// operadores tienen jerarquia para poder resolver.
// primero se resuelve * y / 
// luego se resuelve la + y la - 
// luego se ejecuta la asignacion

let sumador= 43+50;

suma=89+ 30;
suma= suma + 40;

console.log("El resultado de la suma es : ", sumador )
 let resta= 70-30;
 console.log("El resultado de la Resta es : ", resta )
 let multi= 3*15;
 console.log("El resultado de la multi es : ", multi )
 let divi= 70/30;
 console.log("El resultado de la divi es : ", divi )

 let nombrePrueba= "Joselito" + 44;
 console.log("El resultado de la variable es : ", nombrePrueba )
 //El operador + se utiliza para concatenar cadenas de texto (strings) 
 // y ademas suma numeros "tiene doble funcion" o es decir coercion de datos
 
 //I/o ENTRADA Y SALIDA DE DATOS
 // console log: es una salida de datos
// PROMPT (INGRESA DATOS) y guarda y retorna un string;

let numUsuario=prompt("Ingrese un numero");

console.log("El numero ingresado por el usuario es", numUsuario)

let resultado= Convert(numUsuario) + 44;

console.log("El resultado de la suma es", resultado)










