// function saudacao(nome) { // nome é um parâmetro da função
//     console.log("Olá,", nome);
// }

// const saudacao = (nome) => {
//     console.log("Vida longa e próspera,", nome);
// }

const saudacao = (nome) => console.log("Vida longa e próspera,", nome);

saudacao('Aryell') // 'Aryell' é o argumento passado para a função
saudacao('Paloma') // 'Paloma' é o argumento passado para a função
saudacao('Kiara') // 'Kiara' é o argumento passado para a função


// function calcularDobroDeUm(numero) { // numero é um parâmetro da função
//     return numero * 2
// }

// const calcularDobroDeUm = (numero) => {
//     return numero * 2
// }

const calcularDobroDeUm = (numero) => numero * 2

const numeroDobrado = calcularDobroDeUm(4) // 8 é o argumento passado para a função

console.log('O dobro de 4 é:', numeroDobrado) // 8