// Aluno: Gabriel Gertrudes De Oliveira Matricula: 23114290182
const prompt = require('prompt-sync')();

function criaMatriz(linhas, colunas) {
    let matriz = [];
    let contador = 1;

    for (let i = 0; i < linhas; i++) {
        let linha = [];
        for (let j = 0; j < colunas; j++) {
            linha.push(contador);
            contador++;
        }
        matriz.push(linha);
    }

    return matriz;
}

function imprimiMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join("\t"));
    }
}

let linhas = parseInt(prompt("Digite o número de linhas: "));
let colunas = parseInt(prompt("Digite o número de colunas: "));

let matriz = criaMatriz(linhas, colunas);

console.log("Matriz criada abaixo:");
imprimiMatriz(matriz);
