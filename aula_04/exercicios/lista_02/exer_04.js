// Exercício 04
'use strict';
const leia = require('readline-sync');

let generos = ['Mulher Cis', 'Homem Cis', 'Não Binário','Mulher Trans','Homem Trans', 'Outros'];
let areas = ['Backend','Frontend', 'Mobile', 'Fullstack'];
let continua = true
let backend =0, mulher_cis_trans_Front=0, homem_cis_trans_Mobile=0, n_binarioFullstack=0, total=0, soma = 0
let media;

while (continua){
    let idade = leia.questionInt('Idade:')
    let identidade = leia.keyInSelect(generos, 'Identidade de Genero: ', {cancel: false});
    let profissao = leia.keyInSelect(areas, 'Pessoa Desenvolvedora: ', {cancel: false});
    
    if(identidade == 1||identidade == 4 && profissao == 2){
        mulher_cis_trans_Front++
    }
    else if((identidade == 2||identidade == 5)&&(profissao == 3)&&(idade >40)){
        homem_cis_trans_Mobile ++
    }
    else if((identidade == 3)&&(profissao == 4)&&(idade<30)){
        n_binarioFullstack++ 
    }
    else if (profissao == 1){
        backend++
    }
    total++
    soma += idade
    media = soma/total
    continua = leia.keyInYNStrict('Deseja inserir novos dados?')
}
console.log(`Total de pessoas desenvolvedoras Backend: ${backend}`)
console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulher_cis_trans_Front}`)
console.log(`Total Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${homem_cis_trans_Mobile}`)
console.log(`Total de Não Binários desenvolvedores FullStack menores de 30 anos: ${n_binarioFullstack}`)
console.log(`Total de pessoas que responderam à pesquisa: ${total}`)
console.log(`Média de idade das pessoas que responderam à pesquisa: ${media}`)