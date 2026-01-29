'use strict';
const leia = require ('readline-sync');

let matriz = new Array(2);

// Adiciona as linhas da matriz
for (let indice = 0; indice < matriz.length; indice ++){
    matriz[indice] = Array(3);
}

for (let linha = 0; linha < matriz.length; linha ++){
    for (let coluna = 0; coluna < matriz[linha].length; coluna++){
        matriz[linha][coluna] = leia.questionInt(`Digite matriz[${linha}][${coluna}]: `);
    }
}

//let matriz = Array.from({ length: 2 }, () =>    
//    Array.from({ length: 3 }, 
//        () => leia.questionInt("Digite um numero: ")) );
//
console.table(matriz)

