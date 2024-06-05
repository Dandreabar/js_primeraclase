


function calcularInteres(monto , cuotas){


    if( cuotas == 1){
        return monto
    }
    else if(cuotas == 3){
        let interes = monto * 0.20;
        return interes
    }
    else if( cuotas == 6){
        let interes = monto * 0.60;
        return interes
    }
    else if( cuotas == 12){
        let interes = monto * 0.95;
        return interes
    }

}


function mostrarDatosPrestamo( monto , cuotas , total){

    console.log("Pediste: ", monto);
    console.log("Cuotas: ", cuotas);
    console.log("Total: ", total);
    console.log("Pagas por cuotas: ", total/cuotas);

}



console.log("Bienvenidos/a a Prestamos Now");
let monto = prompt("Ingrese el monto que desea solicitar");
monto = parseInt(monto);
let cuotas = prompt("Ingrese la cantidad de cuotas: 1, 3, 6 o 12");
let total = monto + calcularInteres(monto , cuotas);
mostrarDatosPrestamo(monto,cuotas,total);


