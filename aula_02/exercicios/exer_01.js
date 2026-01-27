"use strict"

const leia = require("readline-sync");

let salario = leia.questionFloat("Digite o valor do salário R$ ");
let abono = leia.questionFloat("Digite o valor do abono R$ ");
let novoSalario = salario + abono;

console.log("O novo salário é", 
    new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(novoSalario)
);