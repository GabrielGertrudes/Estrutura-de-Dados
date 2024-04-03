// Aluno: Gabriel Gertrudes De Oliveira Matricula: 23114290182
const prompt = require('prompt-sync')();

function ordenarArray(num1, num2) {
    if (num1 > num2) {
        return [num2, num1];
    } else {
        return [num1, num2];
    }
}

let numerosCrescentes = ordenarArray(7, 3);
console.log("Em forma crescente!:", numerosCrescentes);

