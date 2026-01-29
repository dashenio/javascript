// Exercício 01
'use strict';
const leia = require('readline-sync');

// n1 tem que ser menor que n2
// exibe os números entre n1 e n2 que são múltiplos de 3 e 5.

let n1 = leia.questionInt('Digite o primeiro numero: ');
let n2 = leia.questionInt('Digite o segundo numero: ');

if (n1 < n2){
    console.log(`\nNo intervalo entre ${n1} e ${n2}:'\n`)
    for (let i = n1; i < n2; i++){
        if ((i % 3 == 0) && (i % 5 == 0)){
           console.log(`${i} é múltiplo de 3 e 5`) 
        }
    }
}
else{
    console.log('\nIntervalo inválido!')
}