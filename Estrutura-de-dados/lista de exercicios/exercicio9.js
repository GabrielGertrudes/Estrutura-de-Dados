// Aluno: Gabriel Gertrudes De Oliveira Matricula: 23114290182
const prompt = require('prompt-sync')();

class Pilha {
    constructor() {
    this.items = [];
    }
    empilhar(elemento) {
        this.items.push(elemento);
    }
    desempilhar() {
        if (this.vazia()) {
            return "A pilha está vazia.";
        }
        return this.items.pop();
    }
    vazia() {
        return this.items.length === 0;
    }
}
function Par(numero) {
    return numero % 2 === 0;
}
let pilha = new Pilha();
for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º número: `));

    if (Par(numero)) {
        pilha.empilhar(numero);
    } else {
        let elementoDesempilhado = pilha.desempilhar();
        if (elementoDesempilhado === "A pilha está vazia.") {
            console.log("Número ímpar encontrado, mas a pilha está vazia.");
        } else {
            console.log(`Número ímpar encontrado, desempilhado: ${elementoDesempilhado}`);
        }
    }
}       if (!pilha.vazia()) {
    console.log("Desempilhando todos os elementos da pilha:");
    while (!pilha.vazia()) {
        console.log(pilha.desempilhar());
    }
}
