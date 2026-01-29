// Exercício 10
'use strict';
const leia = require('readline-sync');


let media = []
let notas = new Array(10);
let indice = 0
let soma = 0
for (indice; indice < notas.length ; indice ++){
    notas[indice] = Array(4);
}

for (let linha = 0; linha < notas.length; linha ++){
    
    for (let coluna = 0; coluna < notas[linha].length ; coluna++){
        notas[linha][coluna] = leia.questionInt(`Digite uma nota: `);
        soma += notas[linha][coluna]
    }
    media[linha] = soma/4
    soma = 0
}
console.log('Notas')
console.table(notas);
console.log('\nMédias')
console.table(media)