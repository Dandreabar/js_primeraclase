
//FUNCION DECLARADA
function saludar(){
    console.log("HOLA");
}


//FUNCIONES ANONIMAS

let saludo = function(){
    console.log("Hola desde la funcion anonima");
}



//FUNCIONES ARROW//
let saludoArrow = ()=>10


saludo();
console.log( saludoArrow() );



// RETORNA FUNCIONES //

function doble( num ){

    return num * 2
}

function triple( num ){

    return num * 3
}


let resultadoDoble = doble(20);
console.log("El doble: ", resultadoDoble);



function crearMultiplicador( multiplicador ){

    return function( num ){

        return num * multiplicador
    }
}


let tripleNumAnonimo = crearMultiplicador(3);
console.log( tripleNumAnonimo(25)) ;






// RECIBIR UNA FUNCIONA POR PARAMETRO //

function saludarUsuario(nombre){
    console.log("Hola: ", nombre)
}

function saludarATodos( arr , fnSaludar ){

    for(let alumno of arr ){

        fnSaludar(alumno);
    }

}

 
let listaUsuarios = ["Pedro","Juan","Laura","Macarena"];

saludarATodos(listaUsuarios, saludarUsuario);




