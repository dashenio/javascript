// Exercício 08 - NAO TERMINADO
//"use strict";
const leia = require('readline-sync');
let saldo = 1000
console.log('\nCONTA')
console.log('\n1) Saldo')
console.log('2) Saque')
console.log('3) Deposito\n')
let valor
let ops = leia.questionInt('Selecione a operacao: ');


switch(ops){
    case 1:
        console.log('\nOperação - Saldo');
        console.log(`Saldo: R$ ${saldo.toFixed(2)}`);
        break;
    case 2:
        console.log('\nOperação - Saque');
        valor = leia.questionInt('Para as opcoes 2 e 3 digite um valor: ');
        saldo < valor ? console.log('Saldo Insuficiente!') : console.log(`Novo Saldo: R$ ${(saldo -= valor).toFixed(2)}`);
        break;
    case 3:
        console.log('\nOperação - Depósito');
        valor = leia.questionInt('Para as opcoes 2 e 3 digite um valor: ');
        saldo < valor ? console.log('Saldo Insuficiente!') : console.log(`Novo Saldo: R$ ${(saldo += valor).toFixed(2)}`);
        break;
    default:
        console.log('Operação Inválida');
    }

    console.log(saldo);
