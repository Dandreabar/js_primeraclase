let arregloUsuarios=[];



function loginUsuario(){
    let nombreUsuario = document.getElementById("nombre");
    let passUsuario = document.getElementById("pass");
    let recuperandoDatos = localStorage.getItem("arregloDeUsuarios");
    recuperandoDatos = JSON.parse(recuperandoDatos);
    console.log(recuperandoDatos);

    for( let usuario of recuperandoDatos ){
        if( nombreUsuario.value == usuario.nombre && passUsuario.value == usuario.password ){
            document.body.innerHTML = `<h1>Bienvenido/a al sistema: ${usuario.nombre}</h1>
                                       <a href="clase11b.html">Volver</a>`;
            break;
        }
        else{
            document.body.innerHTML = `<h1>Usuario no encontrado: ${usuario.nombre}</h1>
                                       <a href="clase11b.html">Volver</a>`;
        }

    }

}
