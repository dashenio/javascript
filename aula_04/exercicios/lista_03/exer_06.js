'use strict'
const leia = require('readline-sync');

let n = 0, soma = 0, contador=0, media=0;


do{
    n = leia.questionInt('Digite um numero: ')
    if(n !=0 && n % 3 === 0){
        soma += n
        ++contador
    }
}while(n != 0);

media = soma/contador
console.log(`A média de todos os múltiplos de 3 é: ${media}`)