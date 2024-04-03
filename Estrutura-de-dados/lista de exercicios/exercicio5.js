// Aluno: Gabriel Gertrudes De Oliveira Matricula: 23114290182
const prompt = require('prompt-sync')();

function fibonacci(n) {
    let fibon = [0, 1];
    for (let i = 2; i < n; i++) {
        fibon.push(fibon[i - 1] + fibon[i - 2]);
    }
    return fibon;
}
let n = parseInt(prompt("digite um número inteiro positivo: "));

if (n <= 0 || isNaN(n)) {
    console.log("Por favor, digite um número inteiro positivo válido!!!!!!!.");
} else {
    let numerosDeFibonacci = fibonacci(n);
    console.log("Números de fibonacci:", numerosDeFibonacci.join(","));
}
