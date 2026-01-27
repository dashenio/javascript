const leia = require("readline-sync");

let n1 = leia.questionFloat("Digite o primeiro valor.. ");
let n2 = leia.questionFloat("Digite o segundo valor... ");
let n3 = leia.questionFloat("Digite o terceiro valor.. ");
let n4 = leia.questionFloat("Digite o quarto valor.... ");

let calculo = (n1 * n2) - (n3 * n4);

console.log("(n1 * n2) - (n3 * n4) =", calculo.toFixed(1));