'use strict'
const leia = require('readline-sync');

let numeros = [];
let impares ='', pares = '';
let soma = 0, media = 0, c = 0;


for(let idx = 0; idx < 10; idx ++){
    numeros[idx] = leia.questionInt(`Digite o valor do indice ${idx}: `);
    if(idx % 2 !== 0){
        impares += numeros[idx] + ' ';
    }
    if(numeros[idx] % 2 === 0){
        pares += numeros[idx] + ' ';
    }
    c++
    soma += numeros[idx];
}

media = soma / c

console.log('Elementos no índices ímpares:')
console.log(impares)
console.log('\nElementos pares:')
console.log(pares)
console.log(`Soma: ${soma}`)
console.log(`Média ${media.toFixed(2)}`)
   