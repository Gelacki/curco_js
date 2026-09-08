const idadeAryell = '37'
const minhaIdade = '30'

//operador de igualdade
//const comparacao = idadeAryell === minhaIdade
const comparacao = idadeAryell !== minhaIdade

//maior que
//const comparacao = idadeAryell > minhaIdade

//menor que
//const comparacao = idadeAryell < minhaIdade

console.log('São diferentes?', comparacao) 

const idade = 34
const idadeIrmao = 18

const souMaiorDeIdade = idade >= 18
const irmaoMaiorDeIdade = idadeIrmao >= 18

console.log('Sou maior de idade?', souMaiorDeIdade) // true
console.log('Meu irmão é maior de idade?', irmaoMaiorDeIdade) // false

//comparação estritamente iguais

const comparacaoEstrita = minhaIdade === idadeAryell
console.log('São estritamente iguais?', comparacaoEstrita) 

//estritamente diferentes
const comparacaoEstritaDiferente = minhaIdade !== idadeAryell
console.log('São estritamente diferentes?', comparacaoEstritaDiferente)

