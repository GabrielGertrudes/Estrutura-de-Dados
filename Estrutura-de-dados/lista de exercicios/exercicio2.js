// Aluno: Gabriel Gertrudes De Oliveira Matricula: 23114290182
const prompt = require('prompt-sync')();

function ordenarNumeros(num1, num2, num3) {
    let menor, medio, maior;

    if (num1 <= num2 && num1 <= num3) {
        menor = num1;
        medio = (num2 <= num3) ? num2 : num3;
        maior = (medio === num2) ? num3 : num2;
    } else if (num2 <= num1 && num2 <= num3) {
        menor = num2;
        medio = (num1 <= num3) ? num1 : num3;
        maior = (medio === num1) ? num3 : num1;
    } else {
        menor = num3;
        meio = (num1 <= num2) ? num1 : num2;
        maior = (medio === num1) ? num2 : num1;
    }
    return [menor, medio, maior];
}

console.log("array ordenado:", ordenarNumeros(7, 2, 28));


