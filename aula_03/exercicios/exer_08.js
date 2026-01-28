// Exercício 08 - NAO TERMINADO
"use strict";
const leia = require('readline-sync');
let saldo = 1000
console.log('\nCONTA')
console.log('\n1) Saldo')
console.log('2) Saque')
console.log('3) Deposito\n')

let caso1 = 1; 
let caso2 = 2; 
let caso3 = 3;

let ops = leia.questionInt('Selecione a operacao: ');
let valor = 500
switch(ops){
    case 1:
        console.log('\nOperação - Saldo');
        console.log(`Saldo: R$ ${saldo.toFixed(2)}`);
        break;
    case caso2 === 2 &&  (valor < saldo):
        
        console.log(`Novo Saldo: R$ ${(saldo - valor).toFixed(2)}`);
        break;
    case caso2 === 2 && (valor > saldo):
        console.log('\nOperação - Saque');
        console.log(`Saldo Insuficiente!`);
        break;
    case caso3 === 3:
        console.log('\nOperação - Depósito');
        console.log(`Novo Saldo: R$ ${(saldo + valor).toFixed(2)}`);
        break;
}

switch(ops){
    case 1:
        console.log('\nOperação - Saldo');
        console.log(`Saldo: R$ ${saldo.toFixed(2)}`);
        break;
    case 2 && (valor < saldo):
        console.log('\nOperação - Saque');
        console.log(`Novo Saldo: R$ ${(saldo - valor).toFixed(2)}`);
        break;
    case 2 && (valor > saldo):
        console.log('\nOperação - Saque');
        console.log(`Saldo Insuficiente!`);
        break;
    case 3:
        console.log('\nOperação - Depósito');
        console.log(`Novo Saldo: R$ ${(saldo + valor).toFixed(2)}`);
        break;
    //default:
        //console.log('Operação Inválida');
    }
