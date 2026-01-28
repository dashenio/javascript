// Exercício 07
"use strict";
const leia = require('readline-sync');
'use strict';
const leia = require('readline-sync');
let limiteF = {limitMessage: 'Digite um numero float.'};

console.log("========================================");
console.log("|      CALCULADORA COM SWITCH CASE     |");
console.log("========================================");
console.log("| 1 - Soma                             |");
console.log("| 2 - Subtração                        |");
console.log("| 3 - Multiplicação                    |");
console.log("| 4 - Divisão                          |");
console.log("========================================");

let n1 = leia.questionFloat("| Digite um numero:\t", limiteF); 
                            
let n2 = leia.questionFloat("| Digite outro numero:\t", limiteF);

let operacao = leia.questionInt("| Digite uma operacao:\t", {limitMessage: "Digite um número inteiro."});

switch(operacao){
    case 1:
        console.log(`\n\t${n1} + ${n2} = ${n1 + n2}`);
    break;
    case 2:
        console.log(`\n\t\t${n1} - ${n2} = ${n1 - n2}`);
    break;
    case 3:
        console.log(`\n\t\t${n1} x ${n2} = ${n1 * n2}`);
    break;
    case 4:
        console.log(`\n\t\t${n1} ÷ ${n2} = ${n1 / n2}`);
    break;
    default:
        console.log("\n\tOperaçao Inválida!")
}