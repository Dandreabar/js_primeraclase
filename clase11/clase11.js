//LOCAL STORAGE Y SESSION STORAGE
//permite almacesar valores de par y todos los valores son string
//solo soporta mientras esta abierta la session, si cierro o reinicio se pierde la infomacion
//setitem sirve para almacenar un dato
function saludar(){
sessionStorage.setItem("UsuarioTres","Francisco")
}
//es mas persistente
localStorage.setItem("usuarioUno","Laura");
localStorage.setItem("usuarioDos","Marta");
localStorage.setItem("edadusuario",30);
localStorage.setItem("colores",["rojo","azul","Amarillo"]);
saludar();
//getItem obtiene el valor del local storage
let usuarioUno=localStorage.getItem("usuarioUno");
console.log(usuarioUno);

let edadUsuario=localStorage.getItem("edadusuario");
let colores=localStorage.getItem("colores");
console.log(edadUsuario);
console.log(colores);

console.log(localStorage.length)

for(let i=0; i< localStorage.length;i=i+1){

   //let resultado=localStorage.getitem(i);
   let clave=localStorage.key(i);
   console.log("Clave: ",clave);
   console.log("Valor: ", localStorage.getItem(clave));
}

let clientes=[{nombre:"Pepe",apellido:"Lopez"},{nombre:"Juana",apellido:"rojas"},{nombre:"Marta",apellido:"Sanchez"}];


localStorage.setItem("arreglodeClientes",clientes);

console.log(localStorage.getItem("arreglodeClientes"))
//para arreglar este tipo de problemas podemos ocupar la funcion JSON
