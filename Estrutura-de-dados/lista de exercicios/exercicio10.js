// Aluno: Gabriel Gertrudes De Oliveira Matricula: 23114290182
const prompt = require('prompt-sync')();
class Pilha {
    constructor() {
        this.items = [];
    }
    empilhar(elementos) {
        this.items.push(elementos);
    }
    desempilhar() {
        if (this.vazia()) {
            return "A pilha está vazia.";
        }
        return this.items.pop();
    }
    vazia() {
        return this.items.length === 0;
    }}

function Par(numero) {
    return numero % 2 === 0;
}
let pilhaPar = new Pilha();
let pilhaImpar = new Pilha();

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º numero: `));
    if (numero === 0) {
        let elementoPar = pilhaPar.desempilhar();
        let elementoImpar = pilhaImpar.desempilhar();
    if (elementoPar === "A pilha está vazia." || elementoImpar === "A pilha está vazia.") {
            console.log("Erro: Uma das pilhas está vazia.");
} else {
            console.log(`Desempilhado da pilha par: ${elementoPar}`);
            console.log(`Desempilhado da pilha ímpar: ${elementoImpar}`);
        }
    } else if (Par(numero)) {
        pilhaPar.empilhar(numero);
    } else {
        pilhaImpar.empilhar(numero);
    }
}

console.log("Desempilhando todos os numeros da pilha abaixo:");
console.log("Numeros par desempilhados:");
while (!pilhaPar.vazia()) {
    console.log(pilhaPar.desempilhar());
}
console.log("Numeros impares desempilhados:");
while (!pilhaImpar.vazia()) {
    console.log(pilhaImpar.desempilhar());
}
