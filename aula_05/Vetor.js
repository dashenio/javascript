'use strict';
const leia = require('readline-sync');


let numeros = [10,25,5,45,85,95];
let cores = []; // utilizar new Array() para definir o tamanho 

for(let idx = 0; idx < numeros.length ; idx++){
    console.log(`numeros[${idx}] = ${numeros[idx]}`)
}

console.table(numeros.sort((a,b) => a - b)); // organiz

for(let idx = 0; idx < 5 ; idx++){
    cores[idx] = leia.question(`Digite uma cor para o index[${idx}]: `);
}

console.table(cores);
