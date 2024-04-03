// Aluno: Gabriel Gertrudes De Oliveira Matricula: 23114290182
const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Insira o primeiro número: "));
let num2 = parseFloat(prompt("Insira o segundo número: "));
let num3 = parseFloat(prompt("Insira o terceiro número: "));

let numeros = [num1, num2, num3];

console.log("Numeros que voce digitou:", numeros);

numeros.reverse();

console.log("Os numeros só que de forma contraria:", numeros);1



