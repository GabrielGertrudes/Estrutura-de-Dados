// Aluno: Gabriel Gertrudes De Oliveira Matricula: 23114290182
const prompt = require('prompt-sync')();

function calcularFatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let fatorial = 1;
        for (let i = 2; i <= n; i++) {
            fatorial *= i;
        }
        return fatorial;
    }
}

let n = parseInt(prompt("Digite um número inteiro positivo: "));

if (n < 0 || isNaN(n)) {
    console.log("Por favor, digite um número inteiro positivo válido.");
} else {
    console.log("Fatorial de", n + ":", calcularFatorial(n));
}
