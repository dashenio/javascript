// Exercício 03
'use strict';
const leia = require('readline-sync');

// idade não pode ser negativa
// total de pessoas com idade < 21 e total de idade > 50

let vinte1 = 0
let cinq = 0
let idade = 1

while (idade > -1){
    idade = leia.questionInt('Digite uma idade: ');
    (idade > -1) && (idade < 21) ? vinte1 += 1 : vinte1 + 0
    idade > 50 ? cinq += 1 : cinq + 0
}

console.log(`Total de pessoas menores de 21 anos: ${vinte1}`);
console.log(`Total de pessoas maiores de 50 anos: ${cinq}`);