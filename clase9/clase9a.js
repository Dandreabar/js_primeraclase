//let nombreUsuario=document.getElementById("nombreUsuario");

//console.log(nombreUsuario);
//console.log(nombreUsuario.value);
//nombreUsuario.value="Pepe dede JS";

//para darle mobilidad e interatividad existen los EVENTOS
//para poder hacer el sitio interativo


function Saludar(){
    let nombreUsuario= document.getElementById("nombreUsuario");
   console.log("HOLA BIENVENIDO",nombreUsuario.value);//
}

function validar(){
    let nombreUsuario= document.getElementById("nombreUsuario");
    let msj=document.getElementById("mensaje");
    if(nombreUsuario.value=="Pepe"){
        let parrafo=document.createElement("p");
        parrafo.innerText="Bienvenido/a al sistema:"+ nombreUsuario.value;
        msj.append(parrafo);
    }
    else{
        document.body.innerHTML= <><h2>ERROR DE USUARIO</h2><p>El usuario ${nombreUsuario.value} no existe</p><a href="clase9a.html">Volver</a></>;    
    }
}
