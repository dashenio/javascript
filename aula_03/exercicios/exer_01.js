// Exercício 01
"use strict";
const leia = require('readline-sync');
let limite = {limitMessage: 'Digite um número inteiro!'}

let nA = leia.questionInt("Digite um numero para A: ", limite);
let nB = leia.questionInt("Digite um numero para B: ", limite);
let nC = leia.questionInt("Digite um numero para C: ", limite);

let soma = nA + nB;

if(soma > nC){
    console.log(`${nA} + ${nB} = ${soma} \nA soma de A + B é MAIOR do que C`);
}
else if(soma < nC){
    console.log(`${nA} + ${nB} = ${soma} \nA soma de A + B é MENOR do que C`);
}
else{
    console.log(`${nA} + ${nB} = ${soma} \nA soma de A + B é IGUAL a C`);
}