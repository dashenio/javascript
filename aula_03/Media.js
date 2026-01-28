'use strict';
const leia = require('readline-sync');

let media = leia.questionFloat("Digite a media do aluno: ", 
                            {limitMessage: 'Digite um numero float.'});

if(media >= 7){
    console.log("Aluno Aprovado!");
}
else if(media < 7 && media >= 5){
    console.log("Aluno em recuperação.");
}
else{
    console.log("Aluno Reprovado.");
}