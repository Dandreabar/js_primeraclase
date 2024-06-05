

function calcularIvaDelTotal( total ){

    let iva = total * 0.21;
    return iva
}


function calcularTotal( precioUno , precioDos ){

    let total = precioUno + precioDos;   
    return total

}


let resultado = calcularTotal(3000 , 5000);

let resultadoFinal = resultado + calcularIvaDelTotal(resultado)

console.log( resultadoFinal );




