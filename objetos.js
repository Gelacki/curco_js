const pessoa = {
    nome: 'Ayell',
    idade: 35,
    temCNH: true,
}

pessoa.sobrenome = 'Gelacki'

// console.log("Nome: ", pessoa.nome)
// console.log("Sobreome: ", pessoa.sobrenome)

const livro = {
    titulo: 'Harry Potter: E a Pedra Filosofal',
    paginas: 264,
}

livro.publicado = true,
livro.idiomas = [
    'Ingles', 'Português', 'Espanhos'
]

livro.idiomas.push('Mandarin')
livro.idiomas.push('Frances')


console.log("Livro antes: ", livro)

delete livro.paginas

console.log("Livro depois: ", livro)

console.log("Autor Livro: ", livro['autor'])
console.log("Editota: ", livro['editora'])

const autor = {
    nome: 'J K Rowling',
    nacionalide: 'Britanica',
    idade: 61,
    livros: [livro]
}

console.log('Autor (a): ', autor)

livro.autor = autor

console.log(livro)

livro.autor.nome