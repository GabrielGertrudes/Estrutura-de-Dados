class Aluno {
    constructor(nome, idade, peso) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }
}
let meu = new Aluno("SeuNome", 20, 60.5);

meu.nome = "Gabriel";
meu.idade = 18;
meu.peso = 52;

console.log("Nome: " + meu.nome);
console.log("Idade: " + meu.idade);
console.log("Peso: " + meu.peso);