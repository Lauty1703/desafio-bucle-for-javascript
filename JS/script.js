
//ejercicio de iteracion de hola pedido por el usuario
let cantHola;

cantHola=parseInt(prompt('ingrese la cantidad de veces que quiere ver un "HOLA" por pantalla'));

for (var i =1; i <= cantHola; i++) {
    alert("#"+i +" Hola" );
}


/*Ejercicio: Visualizar los números pares en entre los valores dado*/

let numero=0;
let numeroInicio;
numero=parseInt(prompt('le diremos todos los numeros pares a partir del numero que nos de:'));

numFin=parseInt(prompt('hasta que numero quiere ver, por favor el numero tiene que ser mayor a la primera iteracion que ya se guardo:'));
for(let numeroInicio=numero; numero<=numFin ; numero=numero+2 ) {
  console.log( numero );
}
