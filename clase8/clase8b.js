let nombre = "Jose Luis";
console.log(nombre);

console.log(nombre[1]);

nombre[1]="Y"

console.log(nombre);
//propiedad length indica el largo de un string

console.log(nombre.length);
// metodos
let nombre = "joSe";
 console.log(nombre.toUpperCase());

 console.log(nombre.toLowerCase());

//slice (corta de un determinado lugar a otro

// reaplace 
let colores= "Rojo,azul,verde,amarillo";

let corte = colores.slice(6,10);

console.log(colores);
console.log(corte);
// replace reemplaza una palabra por otra o algun caracter
let texto = "Los gatos son muy buenas mascotas";
let textoperros= texto.replace("gatos","perros");

console.log(texto);
console.log(textoperros);

// TRIM saca los espacios en un string

let usuario="             juan";

console.log(usuario);
console.log(usuario.trim());

// split sirve para convertir por ejemplo un csv de un dato a un arreglo de objetos
//

let alumnos = "Juan Marta silvia Pepe";
let listaAlumno = alumnos.split(" ");

console.log(alumnos);
console.log(listaAlumno);

let alumnose = "Juan,Marta,silvia,Pepe";
let listaAlumnoe = alumnos.split(",");

console.log(alumnose);
console.log(listaAlumnoe);



















