const leia = require("readline-sync");
let mensagem = leia.question("Digite uma mensagem: ");
// mensagem = "Mudei o conteúdo de mensagem.";
console.log(mensagem);

let numero1 = leia.questionInt("Digite o primeiro número: ")
let numero2 = leia.questionInt("Digite o segundo número: ")
soma = numero1 + numero2
console.log("Soma: ", soma)

