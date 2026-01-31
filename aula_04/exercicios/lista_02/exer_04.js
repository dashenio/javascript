// Exercício 04
'use strict';
const leia = require('readline-sync');

let generos = ['Mulher Cis', 'Homem Cis', 'Não Binário','Mulher Trans','Homem Trans', 'Outros'];
let areas = ['Backend','Frontend', 'Mobile', 'Fullstack'];
let continua = true
let mulheres=0, homens=0, n_binarioFull=0, total=0, soma = 0;
let backend = 0; 
let media;

while(continua){
    let idade = leia.questionInt('Idade:')
    let identidade = leia.keyInSelect(generos, 'Identidade de Genero: ', {cancel: false});
    let profissao = leia.keyInSelect(areas, 'Pessoa Desenvolvedora: ', {cancel: false});
    
    if(profissao === 0){
        backend++
    }
    if((identidade === 0||identidade) === 3 && profissao === 1){
        mulheres++
    }
    if((identidade === 1||identidade === 4)&&(profissao === 2)&&(idade >40)){
        homens++
    }
    if((identidade === 2)&&(profissao === 3)&&(idade<30)){
        n_binarioFull++
    }
    total++
    soma += idade
    media = soma/total
    continua = leia.keyInYNStrict('\nDeseja inserir novos dados?')
}
console.log(`\nTotal de pessoas desenvolvedoras Backend: ${backend}`)
console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulheres}`)
console.log(`Total Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${homens}`)
console.log(`Total de Não Binários desenvolvedores FullStack menores de 30 anos: ${n_binarioFull}`)
console.log(`Total de pessoas que responderam à pesquisa: ${total}`)
console.log(`Média de idade das pessoas que responderam à pesquisa: ${media}`)