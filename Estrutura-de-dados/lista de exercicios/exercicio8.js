// Aluno: Gabriel Gertrudes De Oliveira Matricula: 23114290182
const prompt = require('prompt-sync')();

function decimalHexadecimal(decimal) {
    return decimal.toString(16).toUpperCase();
}

let decimal = 255;
console.log("Hexadecimal de", decimal + ":", decimalHexadecimal(decimal));
