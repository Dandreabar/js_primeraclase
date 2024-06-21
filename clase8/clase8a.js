
//math (METODO)

console.log(math.PI);
console.log(math.E);

// RANDOM tradicional
console.log(math.random());

console.log(math.round(random()* 10));
//metodos de redondeo
console.log("CEIL:", math.cell(3,3));
console.log("FLOOR:", math.floor(3,3));
console.log("ROUND:", math.round(3,5));

let listaNumeros=[3,1,23,10,99,100,230,55,32,5];
//math solo funciona con expresiones numericas no con arreglos

console.log("Mayor:",math.max(listaNumeros));
// utilizando SPREAD(...) yo puedo obtener los datos de un string liberandolos del alguna estructura

console.log("Mayor:",math.max(...listaNumeros));

console.log("Spread",...listaNumeros);

// Date
let dia=fechahoy.getdate();

console.log(dia);

let  mes=fechames.getmonth()+1;

console.log(mes);

let anio=fechahoy.getFullYear();
console.log(anio);




