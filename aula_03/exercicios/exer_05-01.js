// Exercício 05
"use strict";
const leia = require('readline-sync');

const produtos = ['cachorro-quente','x-salada','x-bacon','bauru','refrigerante', 'suco'];
let preco = [10,15,18,12,8,13];

let idx = leia.keyInSelect(produtos, 'Qual item do menu? ', {cancel: false});

switch (idx) {
        case 1:  
          console.log(`Ok, um cachorro-quente é R$ ${(preco[idx]).toFixed(2)}`);
          break;
        case 2:  
          console.log(`Ok, um x-salada é R$ ${(preco[idx]).toFixed(2)}`);
          break;
        case 3: 
          console.log(`Ok, um x-bacon é R$ ${(preco[idx]).toFixed(2)}`);
          break;
        case 4:
          console.log(`Ok, um bauru é R$ ${(preco[idx]).toFixed(2)}`);
          break;
        case 5:
          console.log(`Ok, um refrigerante é R$ ${(preco[idx]).toFixed(2)}`);
          break;
        case 6:
          console.log(`Ok, um suco é R$ ${(preco[idx]).toFixed(2)}`);
          break;
        
        default:
          console.log('Opção inválida');
}
let qtd = leia.questionInt('Qual a quantidade? ', {
        limitMessage: 'Digite um numero inteiro'})

console.log(`Seu total é de R$ ${(preco[idx] * qtd).toFixed(2)}`);
