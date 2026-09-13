let aryell1 = {
    nome: 'Aryell',
    idade: 34,
    profissao: 'Desenvolvedor'
}

const aryell2 = {...aryell1}

aryell2.idade = 35

console.log(aryell2)

aryell1 = {
    ...aryell2,
    profissao: 'Desenvolvedor Senior',
    possuiCNH: true
}

console.log(aryell1)

const {nome, ...restante } = aryell1

console.log(nome)
console.log(restante)