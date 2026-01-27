"use strict" // Usado para evitar erros em versões mais novas no JS
// var declara uma variável global
// let declara var em escopo
// variáveis declaradas no início são consideradas
// globais mesmo sendo let.
let nome = "Vivian";
let profissao = "Pessoa Desenvolvedora";
let salarioBruto = 3500.90;
const bonus = 0.05;

// Uso da função typeof
console.log("Tipo da variável nome é", typeof(nome));

// Intl usado para formatar números
console.log("Salário Líquido: ",
    new Intl.NumberFormat("pt-BR",{
        style: 'currency',
        currency: 'BRL',
    }).format(salarioBruto + (bonus * salarioBruto))
);