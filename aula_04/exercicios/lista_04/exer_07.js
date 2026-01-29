// Exercício 07
'use strict';
const leia = require('readline-sync');

// insere um numero, checa se ele está no vetor
// imprime o valor se estiver, imprime erro se não estiver

let vetor = [2,5,1,3,4,9,7,8,10,6];
let cheque = true;

console.log(vetor);
console.log('Encontre o indice do item desejado');
while (cheque){
    
    let numero = leia.questionInt('Digite um numero: ');
    let idx = vetor.indexOf(numero);
   
    idx === -1 ? console.log(`O numero ${numero} não foi encontrado`):
     console.log(`O número ${numero} está localizado na posição: ${idx}`);
    
    cheque = leia.keyInYNStrict('Deseja continuar?');
}