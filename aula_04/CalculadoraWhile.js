'use strict';
const leia = require('readline-sync');
let limiteF = {limitMessage: 'Digite um numero float.'};
let continua = true;

while(continua){

console.log("========================================");
console.log("|      CALCULADORA COM SWITCH CASE     |");
console.log("========================================");
console.log("| [+] - Soma                           |");
console.log("| [-] - Subtração                      |");
console.log("| [*] - Multiplicação                  |");
console.log("| [/] - Divisão                        |");
console.log("| [.] - [ sair ]                       |");
console.log("========================================");

let n1 = leia.questionFloat("| Digite um numero:\t", limiteF); 
                            
let n2 = leia.questionFloat("| Digite outro numero:\t", limiteF);

let operacao = leia.question("| Digite uma operacao:\t");

switch(operacao){
    case '+':
        console.log(`\n\t${n1} + ${n2} = ${n1 + n2}`);
        break;
    case '-':
        console.log(`\n\t\t${n1} - ${n2} = ${n1 - n2}`);
        break;
    case '*':
        console.log(`\n\t\t${n1} x ${n2} = ${n1 * n2}`); 
        break;
    case "/":
        console.log(`\n\t\t${n1} ÷ ${n2} = ${n1 / n2}`);
        break;
    case '.':
        continua = false;   
        break;
    default:
        console.log("\n\tDigite uma operação válida!")
}
leia.keyInPause("\nDeseja continuar....?\n");
console.clear();
}