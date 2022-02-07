const pessoas = require("./pessoas.json");

// let casados = pessoas.filter(function(p){return p.casado});
let casados = pessoas.filter(p => p.casado);
console.table(casados);
