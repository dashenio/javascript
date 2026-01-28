// Exercício 06
"use strict";
const leia = require('readline-sync');
const cargos = ['1) Gerente', '2) Vendedor', '3) Supervisor', '4) Motorista', '5) Estoquista', '6) Tecnico de TI'];

console.log('CARGOS')
console.log(cargos)

let nome = leia.question('Digite o nome do colcaborador: ');
let cargo = leia.questionInt('Digite o codigo do cargo: ');
let salario = leia.questionFloat('Digite o valor do salario: ', {limitMessage:'Digite um valor float.'});
console.log('--------------------------------------------------------')

switch(cargo){
    case 1:
        console.log(` Colaborador:\t${nome}\n`,
            `Cargo:\t\tGerente\n`,
            `Salário:\tR$ ${(salario + (salario*0.1)).toFixed(2)}`);
        break;
    case 2:
        console.log(` Colaborador:\t${nome}\n`,
            `Cargo:\t\tVendedor\n`,
            `Salário:\tR$ ${(salario + (salario*0.07)).toFixed(2)}`);
        break;
    case 3:
        console.log(` Colaborador:\t${nome}\n`,
            `Cargo:\t\tSupervisor\n`,
            `Salário:\tR$ ${(salario + (salario*0.09)).toFixed(2)}`);
        break;
    case 4:
        console.log(` Colaborador:\t${nome}\n`,
            `Cargo:\t\tMotorista\n`,
            `Salário:\tR$ ${(salario + (salario*0.06)).toFixed(2)}`);
        break;
    case 5:
        console.log(` Colaborador:\t${nome}\n`,
            `Cargo:\t\tEstoquista\n`,
            `Salário:\tR$ ${(salario + (salario*0.05)).toFixed(2)}`);
        break;
    case 6:
        console.log(` Colaborador:\t${nome}\n`,
            `Cargo:\t\tTécnico de TI\n`,
            `Salário:\tR$ ${(salario + (salario*0.08)).toFixed(2)}`);
        break;
    default:
        console.log('Digite um cargo válido')
}