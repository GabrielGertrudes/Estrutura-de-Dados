//  ESTRUTURA DE DADOS

var num = 2;

if (num === 1) {
    console.log('num é igual a 1');
} else {
    console.log('Num não é igual a 1, o valor de num é:' + num);
}

// a instrução if..else pdoe ser representada por um "operador ternário" exemplos:

if (num === 1) {
    num--;
} else {
    num++
}

// Ou assim

(num === 1) ? num-- : num++;

// Podemos executar o if..else de maneiros distintas

var month = 22;

if (month === 1) {
    console.log('Janeiro');
} else if (month === 2) {
    console.log('Fevereiro');
} else if (month === 3) {
    console.log('Março');
} else if (month === 4) {
    console.log('Abril');
} else if (month === 5) {
    console.log('Maio');
} else if (month === 6) {
    console.log('Junho');
} else if (month === 7) {
    console.log('Julho');
} else if (month === 8) {
    console.log('Agosto');
} else if (month === 9) {
    console.log('Setembro');
} else if (month === 10) {
    console.log('Outubro');
} else if (month === 11) {
    console.log('Novembro');
} else if (month === 12) {
    console.log('Dezembro');
} else {
    console.log('Mês invalido');
};

/* Se a cibdulçai que estivermos avaliando for a mesma que a anterior podemos usar a instrução switch

- case: verifica se o valor é igual (==) da variavel switch entre parênteses

- break: interrompe a sequência;

- default: executa por padrão, caso nenhum opção case seja true.

default faz o mesmo passo que o ultimo else no ultimo codigo. */

var month = 6;

switch(month) {
    case 1:
        console.log('Janeiro');
        break;
    case 2:
        console.log('Fevereiro');
        break;
    case 3:
        console.log('Março');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Maio');
        break;
    case 6:
        console.log('Junho');
        break;
    case 7:
        console.log('Julho');
        break;
    case 8:
        console.log('Agosto');
        break;
    case 9:
        console.log('Setembro');
        break;
    case 10:
        console.log('Outubro');
        break;
    case 11:
        console.log('Novembro');
        break;
    case 12:
        console.log('Dezembro');
        break;
    default:
        console.log('Mês invalido')
        break;
};

/* Os laços de repetição são usados quando usados com 
frequencia quando trabalhamos com arrays */

for (var i = 0; i < 10; i++) {
    console.log(i);
}

/* A instrução console.log() tem a finalidade de fazer debug

"TESTADO NO NAVEGADOR"

1.
var saida = 'Testando document.write';
document.write(saida);

2.
var saida = 'Testando alert';
alert(saida);
*/ 

/* O bloco de código dentro do laço while será executado enquanto
 a condição for verdadeira. */

 /* Incremento

var i = 1;
i++
console.log(i)

Adiciona mais 1, agora se for i+=2 ele incrementa 2, se for i+-5 incrementa 5 */

var i = 8;
while (i < 10) {
    console.log(i);
    i++;
}

/*
O laço do...while é muito parecido com
o laço while.

▪A única diferença é que, no laço
do...while, a condição é avaliada depois
de o bloco de código ter sido executado.

O laço do...while garante que o bloco de
código seja executado pelo menos uma
vez.

o do while executa o codigo pelo menos uma vez, no exemplo com somente o while executa não executa o 10
*/

var i = 7;
do {
    console.log(i);
    i++;
}   while (i < 10);

/* As funções são muito importantes quando trabalhamos com JavaScript.

O código da figura, mostra a
sintaxe básica de uma função.

Ela não tem argumentos
(parâmetros) nem a instrução
return (valor de retorno): */

function chicomoedas() {
    console.log("chicomoedas")
}

// Para executar esse código, basta
// usar a chamada da função pelo seu nome
chicomoedas();

/*
Você pode usar quantos argumentos quiser.

Mas nesse caso, apenas o primeiro argumento será usado pela
função, o segundo será ignorado, veja:
*/

// Podemos passar argumentos com parametros para uma função
function output(text) {
    console.log(text);
}

// Nesse caso apenas o primeiro parametro sera usado
// pela função; o segundo será ignorado
output("Boa noite", "Olá tudo bem");

// Essa função calcula a soma de dois números
// especificados e devolve o resultado
function sum(num1, num2) {
    console.log(num1 * num2);
}

// Chamando a execução da função
var result = sum(2, 4); // COM O "2" "3" CONCATENA, SEM ELE CALCULA NORMALMENTE
output(result);