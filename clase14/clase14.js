//librerias en javaScript
//como reac que se utiliza para crear interfaces de usuario
//SWEET ALERT : sirve para mostrar modal para mostrar alert (customizado:imagenes, botones,color)
//cuando descargo la libreria queda en mi equipo local con npm
//cuando utilizo CDN traigo la libreria on line(ruta) y depende que haya o no internet

//TOASTIFY    : 
//LUXON       : 

/*Swal.fire({
  title: "Error 404",
  text: "Usuario No encontrado",
  icon: "warning",
  confirmButtonText:"Volver",
  background:"#2e2e2d",
  color:"#ebeae8" 
});
// <link href=" https://cdn.jsdelivr.net/npm/sweetalert2@11.12.1/dist/sweetalert2.min.css " rel="stylesheet">
// <script src=" https://cdn.jsdelivr.net/npm/sweetalert2@11.12.1/dist/sweetalert2.all.min.js "></script>
//imageUrl:
//html 
//pagina de sweetaler  https://sweetalert2.github.io/#examples
// footer: 
*/

 let btnComprar = document.getElementById("btnComprar");

 btnComprar.addEventListener("click",function(){
 Toastify({
     text: "Esto es Toast",
     duration: 3000,
     gravity:"bottom",
     position:"center",
     destination:"http://www.ematixweb.cl",
     style:{
          fontSize:"30px",
          fontFamily:"Verdana",
          color:"#baba3a",
          background:"#323fc9"
     } 
 }).showToast();})

    

 
