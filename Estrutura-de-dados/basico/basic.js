obj = {
    name: {
        first: "Pedro",
        last: "Lucas"
    },
    address: 'QSF 15 casa 13 - Tag Sul'
};

console.log(obj.address);

function Book (tittle, pages, isbn) {
    this.tittle = tittle;
    this.pages = pages;
    this.isbn = isbn;
}

var book = new Book('Estrutura de Dados', 406, '976 85 7522 553 0');

console.log(book.tittle); //exibe o titulo do livro
Book.tittle = 'Estrutura de Dados e Algoritmos com JavaScript'
console.log(book.tittle); // exibe o valor atualizado
console.log('Este livro possui:  ', book.pages , '  páginas.');
