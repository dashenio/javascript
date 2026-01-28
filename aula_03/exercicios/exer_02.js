// Exercício 02
"use strict";
const leia = require('readline-sync');
let limite = {limitMessage: 'Digite um numero inteiro!'}

console.log("\nEsse é um programa que descobre se um número é:\n" + 
                            "\n\t1) par ou ímpar\n\t2) positivo ou negativo");
let numero = leia.questionInt("\nDigite um numero inteiro para comecar: ", limite);
let par = "";
let positivo = "";

numero % 2 == 0 ? par = 'par': par = 'ímpar';
numero > 0 ? positivo = 'positivo': positivo = 'negativo';

console.log(`\nO número ${numero} é ${par} e ${positivo}!`)
    
