const CPF = require('cpf');
const fs = require('fs');

// Imprime uma mensagem de boas vindas
console.log("Seja bem vindo ao cadastrador de CPFs");

// 1 - Capturar o CPF digitado pelo usuário
const cpf = process.argv[2];

// 2 - Validar o CPF...
let cpfValido = CPF.isValid(cpf);

// 3 - Caso a informação seja um CPF válido, salvar no arquivo dados.txt
//     caso contrário, exibir mensagem de erro:
if(cpfValido){
    console.log("CPF Válido! Salvando...");
    fs.writeFileSync("dados.txt", cpf + "\n", {flag:'a'});
} else {
    console.log("CPF inválido. Digite direito!");
}

console.log("FIM");