// Aluno: Gabriel Gertrudes De Oliveira Matricula: 23114290182
const prompt = require('prompt-sync')();

function encontrarIndices(vetor, numero) {
    let indice = [];
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === numero) {
            indice.push(i);
        }
    }
    return indice;
}
let vetor = [1, 3, 5, 3, 2, 7, 3, 6, 6, 3, 4, 1, 1, 3, 6];
let numero = 3; // altere aqui se voce quer que retorne o indice de outro numero acima (tem que digitar algum numero que esteja dentro do vetor!)
console.log("Índices onde o número", numero, "aparece:", encontrarIndices(vetor, numero));
