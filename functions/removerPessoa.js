// passo 1: Capturar o número digitado pelo usuário
const posicao = process.argv[2];

// Passo 2: Importar array de pessoas
const pessoas = require('./pessoas.json');

// Passo 3: Remover a pessoa da posição desejada
pessoas.splice(posicao, 1);

// Passo 4: Salvar o array modificado (sem a pessoa) no arquivo
const fs = require('fs');
fs.writeFileSync('./pessoas.json', JSON.stringify(pessoas,null,4))