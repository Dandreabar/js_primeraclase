//json este objento nos permite manejar la informacion de transformacion
//que posee json para transformar a texto o como objeto
let clientes=[{nombre:"Pepe",apellido:"Lopez"},{nombre:"Juana",apellido:"rojas"},{nombre:"Marta",apellido:"Sanchez"}];

//stringfy convierte un objeto a text

let clientesJson= JSON.stringify(clientes);

console.log(clientes);
console.log(clientesJson);

localStorage.setItem("ClientesReparado",clientesJson);

let recuperoclientes= localStorage.getItem("ClientesReparado");

console.log(recuperoclientes);

recuperoclientes= JSON.parse(recuperoclientes);

console.log(recuperoclientes);