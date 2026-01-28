// Exercício 04
"use strict";
const leia = require('readline-sync');

console.log('Características:',
                    '\n1) Vertebrado ou Invertebrado',
                    '\n2) Ave, Mamifero, Inseto ou Anelideo',
                    '\n3) Carnivoro, Onivoro, Herbivoro, Hematofago\n');

let carac1 = leia.question('Digite a primeira caracteristica: ');
let carac2 = leia.question('Digite a segunda caracteristica: ');
let carac3 = leia.question('Digite a terceira caracteristica: ');
let animal = '';

if(carac1.toLowerCase() === 'vertebrado'){
    if(carac2.toLowerCase() === 'ave'){
        carac3.toLowerCase() === 'carnivoro'? animal = 'Águia' : animal = 'Pomba';     
    }
    else if(carac2.toLowerCase() === 'mamifero'){
        carac3.toLowerCase() === 'onivoro'? animal = 'Homem' : animal = 'Vaca';     
    }
}

if(carac1.toLowerCase() === 'invertebrado'){
    if(carac2.toLowerCase() === 'inseto'){
        carac3.toLowerCase() === 'hematofogo'? animal = 'Pulga' : animal = 'Lagarta';     
    }
    else if(carac2.toLowerCase() === 'anelideo'){
        carac3.toLowerCase() === 'hematofago'? animal = 'sanguessuga' : animal = 'Minhoca';     
    }
}

console.log(`O animal que tem essas 3 caracteísticas é @ ${animal}`);


