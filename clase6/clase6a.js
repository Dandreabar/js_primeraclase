let listaUsuario=["Pablo","Andrea","Jose","Domi","Felipe","Pedro"];
console.log("Arreglo inicial",listaUsuario)
//metodos
//PUSH AGREGA UN VALOR AL FINAL DEL ARREGLO
//LOS STRING SON INMUTABLES YA QUE NO SE PUEDEN MODIFICAR LOS CARACTERES.
//LOS ARREGLOS SON MUTABLES
listaUsuario.push("Carlos");
console.log("Arreglo Despues de push",listaUsuario)
//unshift agrega al pincipio del arreglo un valor 
//push y unshift son metodos para agregar elementos al arreglo
listaUsuario.unshift("Fabiola");
console.log("Arreglo Despues de unshift",listaUsuario)
//shift sirve para eliminar el primer elemento de la lista
//lo que hace es sacarlo de la lista y despues lo retorna
let resultadoShift=listaUsuario.shift();
console.log("Arreglo Despues de shift",listaUsuario);
console.log("Se elimino a: ",resultadoShift);
//POP elimina el dato del arreglo que est al final 
let eliminado= listaUsuario.pop();
console.log("Arreglo Despues de POP",listaUsuario);
console.log("Se elimino a: ",eliminado);

//SPLICE : PERMITE UNO O VARIOS ELEMENTOS DEL ARREGLO Y EN CUALQUIER POSICION
// HAY QUE PASARLE EL INDICE DE LO QUE QUIERO ELIMINAR Y LA CANTIDAD DE DATOS QUE QUIERO ELIMINAR
//listaUsuario.splice(1,1);
listaUsuario.splice(3,2);
console.log("Arreglo despues del Splice: ", listaUsuario);

//JOIN RETORNA UN STRING COMO RESULTADO

let stringJoin=listaUsuario.join();
console.log(stringJoin);
console.log(listaUsuario.join(" * "));

// tipo de metodos que alteran el arreglo original

//METODO:SLICE (CORTA UNA PARTE DEL ARREGLO)
//corta una parte del arreglo sin modificar el original
//corta sin tomar el ultimo valor 

let pedaso=listaUsuario.slice(1,3);

//indexof me entrega el indice de determinado elemento de la lista>
console.log("El indice de Pepe es: ",listaUsuario.indexOf("Pepe")) 

console.log("Resultado Slice (o corte)",pedaso);

console.log("Resultado Arreglo despues del Slice (o corte)",listaUsuario);

let usuarioAeliminar= listaUsuario.indexOf("Andrea");

console.log("ARREGLO DESPUES DE indexOF",listaUsuario);
//reverse da vuelta el arrego de atras para adelante

listaUsuario.reverse();
console.log("ARREGLO DESPUES DEL REVERSE",listaUsuario)
















