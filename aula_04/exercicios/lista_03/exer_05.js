// Exercício 05
'use strict';
const leia = require('readline-sync');

// numero digitado não pode ser zero
// mostra a soma de todos os números digitados que sejam positivos
let numero, soma = 0;

do{
    numero = leia.questionInt('Digite um numero: ');
    numero > 0 ? soma += numero : soma + 0
} while (numero != 0);

console.log(`A soma dos números positivos é: ${soma}`)