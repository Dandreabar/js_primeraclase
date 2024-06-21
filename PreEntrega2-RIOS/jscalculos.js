
/*Este calculo entrega la cuota de jubilación que tendra el usuario
al momento de jubilar según las espectativas de vida para cada Genero(Femenino Masculino)
*/
let edadTopejmujer=60;
let edadTopejhombre=65;
let edadPromediovidaM=83;
let edadPromediovidaH=78;
//let saldoAn=0;
//let cuotaJubilacion=0;
//let montoFinalizar=0;

class Jubilacion{
    constructor(nombre,genero,edadActual,montoAcumuHoy,montoMensual){
        this.nombre=nombre;
        this.genero=genero;
        this.edadActual=edadActual;
        this.montoAcumuHoy=montoAcumuHoy;
        this.montoMensual=montoMensual;       
        this.cuotaJubilacion=0;
        this.montoFinalizar=0;
    } 
     mesesRestantes(anactual,anfinal){
        //Calcula Meses antes la jubilacion
        let saldo = anfinal - anactual;
        saldo=saldo * 12;
        return saldo;
    } 
    mesesJubilacion(anJubilacion,anPromedio){
        //Calcula los Meses de espectativas de vida 
        let saldo = anPromedio - anJubilacion;
        saldo=saldo* 12;
        return saldo;
    }
    calculoCuotafinal(montofinal,meses){      
        let montoMes=montofinal/meses
        let acumula=0;
        //Aplicando interes mensual 
         for(let i = 0; i <=meses;i=i+1)
           {
           acumula=acumula + (montoMes + (montoMes* 0.038));
           }
           acumula=acumula/meses;
           this.cuotaJubilacion= acumula; 
        }
   getDatosJubilacion(){
    console.log("DETALLE DATOS JUBILADOS");
    console.log("Nombre Apellido :" ,this.nombre);
    console.log("Edad:" ,this.edadActual);
    console.log("Genero (M:Mujer/H:Hombre): ",this.genero);
    console.log("Proyeccion Cuota jubilacion:",this.cuotaJubilacion);
    console.log("--------------------------------------------------")
   }
     
}
//let edadActual=0;
let nombreApe="";
let listadoJubilacion=[];

while(nombreApe!="FIN"){
 console.log("   Calculo cuota final de jubilacion");
 console.log("---------------------------------------"); 

  nombreApe= prompt("Ingrese su nombre y Apellido o FIN para finalizar ");

  if (nombreApe!="FIN"){
    let genero=prompt("Ingrese su genero (H)hombre,(M)mujer");
    while( genero != "H" && genero != "h" && genero != "M" && genero != "m")
        {   
       genero=prompt("Ingrese su genero (H)hombre,(M)mujer");
    }
    edadActual=prompt("Edad Actual");
    edadActual=parseInt(edadActual);
    let montoAcumuHoy=prompt("Monto de fondos Acumulado");
    montoAcumuHoy=parseInt(montoAcumuHoy);
    let montoMensual=prompt("Monto mensual de Ahorro");
    montoMensual=parseInt(montoMensual);
    let cuotaJubilacion=0;
     let objJubilados= new Jubilacion(nombreApe,genero,edadActual,montoAcumuHoy,montoMensual);
     
     if (genero=="H" || genero=="h"){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        saldoAn=Jubilacion.mesesRestantes(edadActual,edadTopejhombre);
        montoFinalizar=montoAcumuHoy + (montoMensual * parseInt(saldoAn));
        objJubilados.calculoCuotafinal(montoFinalizar,Jubilacion.mesesJubilacion(edadTopejhombre,edadPromediovidaH));
     }     
     if (genero=="M" || genero=="m"){
         saldoAn=Jubilacion.mesesRestantes(edadActual,edadTopejmujer);
         montoFinalizar=montoAcumuHoy + montoMensual * parseInt(saldoAn);
         objJubilados.calculoCuotafinal(montoFinalizar,Jubilacion.mesesJubilacion(edadTopejmujer,edadPromediovidaM));
     } 

     listadoJubilacion.push(objJubilados);
  
    console.log("DATOS INCOPORADOS")
   
  }
  }
 
  console.log("DETALLE DATOS JUBILACION")
   for(let jubilacion of listadoJubilacion){
      Jubilacion.getDatosJubilacion();
   }

  
