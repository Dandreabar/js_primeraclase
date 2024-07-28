//ajax significa javscrip asincronico y html
//get: quiero datos
//post: envio datos
//parametros http:son datos que yo estoy enviando al servidor transfiere 
//datos del cliente al servidor  url params
//Fetch me permite hacer una pericion http a un servidor externo
// para usarlo se debe colocar la url y luego la configuracion(no es obligatoria)
// fetch(url,config) es una funcion asincronica.
// y la respuesta queme va a traer fech es una promesa.
//la forma antigua es http request trae respuestas de colback
//el data es el cuerpo convertido en json()

/*fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(response => response.json())
    .then(data => console.log(data))*/

let APIKEY="bedf29e84811645542455ba469ffef79";

 


function mostrarPosicion(posicion){

let lat=posicion.coords.latitude;
let long=posicion.coords.longitude;

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}&units=metric&lang=es`)
  .then(response => response.json())
  .then(data => console.log(data))
}

navigator.geolocation.getCurrentPosition(mostrarPosicion)






