// Exercício 03
const leia = require("readline-sync");
const opcoes = { style: 'currency', currency: 'BRL' };
const formatNumber = new Intl.NumberFormat("pt-BR", opcoes)

let salarioBruto = leia.questionFloat("Digite o valor do salário bruto: ");
let adlNoturno = leia.questionFloat("Digite o valor do adicional noturno: ");
let valorExtras = leia.questionFloat("Digite o valor da hora extra: ");
let nExtras = leia.questionFloat("Digite o número de horas extras: ");
let descontos = leia.questionFloat("Digite o valor dos descontos: ");

let salarioLiquido = (salarioBruto + adlNoturno + 
    (valorExtras * nExtras)) - descontos;

console.log(`O salário líquido é`, formatNumber.format(salarioLiquido));