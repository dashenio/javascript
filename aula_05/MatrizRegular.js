'use strict';

let notas = [
    [1, 7 ,9],
    [2, 6, 4],
    [3, 5 ,8]
]

//console.table(matriz);

for (let linha = 0; linha < notas.length; linha ++){
    for(let coluna = 0; coluna < notas.length; coluna++){
        console.log(`matriz[${linha}]`)
    }
}