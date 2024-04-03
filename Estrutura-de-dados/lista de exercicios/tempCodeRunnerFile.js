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
    }}

function ehPar(numero) {
    return numero % 2 === 0;
}
let pilhaPar = new Pilha();
let pilhaImpar = new Pilha();

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º número: `));
    if (numero === 0) {
        let elementoPilhaPar = pilhaPar.desempilhar();
        let elementoPilhaImpar = pilhaImpar.desempilhar();

    if (elementoPilhaPar === "A pilha está vazia." || elementoPilhaImpar === "A pilha está vazia.") {
            console.log("Erro: Uma das pilhas está vazia.");
} else {
            console.log(`Desempilhado da pilha par: ${elementoPilhaPar}`);
            console.log(`Desempilhado da pilha ímpar: ${elementoPilhaImpar}`);
        }
    } else if (ehPar(numero)) {
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