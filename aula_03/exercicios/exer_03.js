// Exercício 03
"use strict";
const leia = require('readline-sync');
let limite = {limitMessage: 'Digite um numero inteiro!'}

console.log("====================================================================");
console.log("                  \n\t\tCADASTRO DE DOADORES DE SANGUE\n                 ");
console.log("====================================================================");
console.log("\nDigite os dados do doador para saber se ele está apto",
    "a doar sangue\n");
console.log("====================================================================");
let nome = leia.question('Digite o nome: ');
let idade = leia.questionInt("Digite a idade: ", limite);
let primeiraDoacao = leia.keyInYNStrict("Seria essa a primeira doacao de sangue? ");
console.log("\n====================================================================");
let apto = '';

if(idade >= 18 && idade <=59){
    apto = 'está apte';
}
else if(idade >= 60 && idade <=69){
    primeiraDoacao === false ? apto = 'está apte' : apto = 'não está apte';
}
else{
    apto = 'não está apte';
}

console.log(`${nome} ${apto} para doar sangue!`);



