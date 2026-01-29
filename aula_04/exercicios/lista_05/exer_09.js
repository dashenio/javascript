'use strict';
const leia = require('readline-sync');

//Lê uma Matriz 3×3 de números inteiros e em seguida, mostra na tela:
//  Todos os elementos da Diagonal Principal
//  Todos os elementos da Diagonal Secundária
//  A Soma de todos os elementos da Diagonal Principal
//  A Soma de todos os elementos da Diagonal Secundária

let matriz = new Array(3);
let somap = 0, somas = 0;
let diagonalP = '', diagonalS = '';

// Adiciona as linhas da matriz
for (let indice = 0; indice < matriz.length; indice ++){
    matriz[indice] = Array(3);
}
for (let linha = 0; linha < matriz.length; linha ++){
    for (let coluna = 0; coluna < 3; coluna++){
        matriz[linha][coluna] = leia.questionInt(`Digite um numero para matriz[${linha}][${coluna}]: `);
    }
}
console.log('\nElementos da Diagonal Principal:\n');
for(let l = 0; l <matriz.length; l++){
    for(let c = 0; c < matriz.length; c++){
        if((l == 0 && c == 0)^(l == 1 && c == 1)^(l == 2 && c == 2)){
            diagonalP = diagonalP + String(matriz[l][c] + ' ');
            somap += matriz[l][c];
    }  }
}
console.log(diagonalP)
console.log('\nElementos da Diagonal Secundária:\n');
for(let lSec = 0; lSec <matriz.length; lSec++){
    for(let cSec = 0; cSec < matriz.length; cSec++){
        if((lSec == 0 && cSec == 2)^(lSec == 1 && cSec == 1)^(lSec == 2 && cSec == 0)){
            diagonalS = diagonalS + String(matriz[lSec][cSec]) + ' ';
            somas += matriz[lSec][cSec];
    }  }
}
console.log(`${diagonalS}\n`)
console.log(`\nSoma dos Elementos da Diagonal Principal:\n${somap}`);
console.log(`\nSoma dos Elementos da Diagonal Secundária:\n${somas}`);