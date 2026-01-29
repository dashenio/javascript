// Exercício 02
'user strict';
const leia = require('readline-sync');

//Escreva um algoritmo, que leia 10 números inteiros via teclado e 
// mostra na tela quantos números são pares e quantos número são ímpares
let impar = 0, par = 0;

for(let i = 0; i < 10; i++){
    let numero = leia.questionInt(`Digite o ${i+1}o numero: `)
    numero % 2 == 0 ? par += 1 : impar += 1;
}
console.log(`Tota de números pares: ${par}`)
console.log(`Tota de números impares: ${impar}`)