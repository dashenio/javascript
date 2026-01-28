// Exercício 05_mod
"use strict";
const leia = require('readline-sync');

const produtos = ['cachorro-quente','x-salada','x-bacon','bauru','refrigerante', 'suco'];
const precos = [10,15,18,12,8,13]

let idx = leia.keyInSelect(produtos, 'Qual item do menu? ', {cancel: false});
console.log(`Ok, um ${produtos[idx]} é R$ ${(precos[idx]).toFixed(2)}`);
let qtd = leia.questionInt('Qual a quantidade? ', {
        limitMessage: 'Digite um numero inteiro'})
console.log(`Seu total é de R$ ${(precos[idx] * qtd).toFixed(2)}`);
