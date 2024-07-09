
let edadTopejmujer=60;
let edadTopejhombre=65;
let edadPromediovidaM=83;
let edadPromediovidaH=78;

let jubilado=[];

function ingresoDedatos(){   
    let nombreA=document.getElementById("idnombre");
    let edadA=document.getElementById("idedad");
    let montosAlAfecha=document.getElementById("MtoFondosa");
    let ahorroMensual=document.getElementById("MtoMensAh");
    let correou=document.getElementById("idcorreo");
    let bhombre=document.getElementById("btnh")
    let bmujer=document.getElementById("btnm")

    let edadPaso=parseInt(edadA.value);
    let montoAlaf=parseInt(montosAlAfecha.value);
    let ahorroM=parseInt(ahorroMensual.value);
    let generor="";
    if (bhombre.value=="false")
        {generor="M";
        }else{
         generor="H";
        }
    let usuJubilado={nombre:nombreA.value,genero:generor,correo:correou.value,edadActual:edadPaso,montosAlAfecha:montoAlaf,montoMensual:ahorroM} 
    jubilado.push(usuJubilado);
   
    let jubiladoJson=JSON.stringify(jubilado);
  localStorage.setItem(datosJubilados,jubiladoJson);
  console.log(jubiladoJson);
    }
 
    function ingresoDedatos(){   
        let nombreA=document.getElementById("idnombre");
        let edadA=document.getElementById("idedad");
        let montosAlAfecha=document.getElementById("MtoFondosa");
        let ahorroMensual=document.getElementById("MtoMensAh");
        let correou=document.getElementById("idcorreo");
        let bhombre=document.getElementById("btnh")
        let bmujer=document.getElementById("btnm")
    
        let edadPaso=parseInt(edadA.value);
        let montoAlaf=parseInt(montosAlAfecha.value);
        let ahorroM=parseInt(ahorroMensual.value);
        let generor="";
        if (bhombre.value=="false")
            {generor="M";
            }else{
             generor="H";
            }
        let usuJubilado={nombre:nombreA.value,genero:generor,correo:correou.value,edadActual:edadPaso,montosAlAfecha:montoAlaf,montoMensual:ahorroM} 
        jubilado.push(usuJubilado);
       
      let jubiladoJson=JSON.stringify(jubilado);
       sessionStorage.setItem("datosJubilados",jubiladoJson);
        }


 function MuestraDatosFinales(){
   // let nombreCli=document.getElementById("idnombre");    
    let recuperaInformacion=sessionStorage.getItem("datosJubilados");
    let cuotaJubilacion=0;
    let saldoAn=0;
    recuperaInformacion =JSON.parse(recuperaInformacion);
   for(let clientejub of recuperaInformacion){     
        if (clientejub.genero=="H" ){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
          let saldoAn=mesesRestantes(clientejub.edadActual,edadTopejhombre);
          let  montoFinalizar=clientejub.montosAlAfecha + (clientejub.montoMensual * parseInt(saldoAn));
            cuotaJubilacion=calculoCuotafinal(montoFinalizar,mesesJubilacion(edadTopejhombre,edadPromediovidaH));
          }else{
           mesesRestantes(clientejub.edadActual,edadTopejmujer);
           let montoFinalizar=clientejub.montosAlAfecha + (clientejub.montoMensual * parseInt(saldoAn));
           cuotaJubilacion=calculoCuotafinal(montoFinalizar,mesesJubilacion(edadTopejmujer,edadPromediovidaM));
          } 
         let tablaMostrar =document.getElementById("mostrar");
         let detalle = document.createElement("tr"); 
         detalle.innerHTML="";
         detalle.innerHTML=`<td><p>Estimado Cliente "${clientejub.nombre}"</p></td>`;
         
         tablaMostrar.append(detalle);
         detalle = document.createElement("tr");
         detalle.innerHTML=`<td><p>Proyeccion Cuota jubilacion :"${cuotaJubilacion}"  Mensuales</p></td>`;
            tablaMostrar.append(detalle); 
       }     
   }
  

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


    let btnCalcula= document.getElementById("btnCalcula");
    btnCalcula.addEventListener("click",ingresoDedatos);
    
    let btnMuestra= document.getElementById("btnMuestra");
    btnMuestra.addEventListener("click",MuestraDatosFinales)




 

  
