
/*Este calculo entrega la cuota de jubilación que tendra el usuario
al momento de jubilar según las espectativas de vida para cada Genero(Femenino Masculino)
*/
let edadTopejmujer=60;
let edadTopejhombre=65;
let edadPromediovidaM=83;
let edadPromediovidaH=78;
let edadActual=0;
let saldoAn=0;
let cuotaJubilacion=0;
let montoFinalizar=0;

let nombre= prompt("Ingrese su nombre y Apellido: ");
let genero=prompt("Ingrese su genero (H)hombre,(M)mujer");
while( genero != "H" && genero != "h" && genero != "M" && genero != "m")
    {   
   genero=prompt("Ingrese su genero (H)hombre,(M)mujer");
}

edadActual=prompt("Edad Actual");
let montoAcumuHoy=prompt("Monto de fondos Acumulado");
let montoMensual=prompt("Monto mensual de Ahorro");


edadActual=parseInt(edadActual);
montoAcumuHoy=parseInt(montoAcumuHoy);
montoMensual=parseInt(montoMensual);

/*En esta parte se realizan los calculos */
if (genero=="H" || genero=="h"){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
   saldoAn=mesesRestantes(edadActual,edadTopejhombre);
   montoFinalizar=montoAcumuHoy + (montoMensual * parseInt(saldoAn));
   cuotaJubilacion=calculoCuotafinal(montoFinalizar,mesesJubilacion(edadTopejhombre,edadPromediovidaH));
}

if (genero=="M" || genero=="m"){
    saldoAn=mesesRestantes(edadActual,edadTopejmujer);
    montoFinalizar=montoAcumuHoy + montoMensual * parseInt(saldoAn);
    cuotaJubilacion=calculoCuotafinal(montoFinalizar,mesesJubilacion(edadTopejmujer,edadPromediovidaM));
}
mostrarDatosJubilado(nombre,cuotaJubilacion);

function mesesRestantes(anactual,anfinal){
    //Calcula Meses antes la jubilacion
    let saldo = anfinal - anactual;
    saldo=saldo * 12;
    return saldo;
}

function mesesJubilacion(anJubilacion,anPromedio){
    //Calcula los Meses de espectativas de vida 
    let saldo = anPromedio - anJubilacion;
    saldo=saldo* 12;
    return saldo;
}

function calculoCuotafinal(montofinal,meses){      
    let montoMes=montofinal/meses
    let acumula=0;
    //Aplicando interes mensual 
     for(let i = 0; i <=meses;i=i+1)
       {
       acumula=acumula + (montoMes + (montoMes* 0.038));
       }
       acumula=acumula/meses;
        return acumula; 
    }

    function mostrarDatosJubilado( nombre ,  cuotamensual){

        console.log("Estimado(a) Señor(a): ", nombre);
        console.log("Según los antecedentes entregados Edad,Monto Acumulado, Y espectativa de vida");
        console.log("-----------------------------------------------------------------------------");
        console.log("Su monto de Jubilacion será: ", cuotamensual);
    
    }







