//contar quantos numeros pares e quantos números ímpares nos temos de 0 a 100.

let totalNumerosPares = 0
let totalNumerosImpares = 0

//laço de repetição
//desafio aula

for ( let contador = 0; contador <= 100; contador++){
    if(contador % 2 == 0){
        totalNumerosPares++
    } else {
        totalNumerosImpares++
    }
}

console.log('Total de números pares: ', totalNumerosPares)
console.log('Total de números ímpares: ', totalNumerosImpares)

//desafio comcluito Aryell
// while(totalNumerosPares <= 100){
//     if(totalNumerosPares % 2 == 0)
//     console.log('Número par encontrado: ', totalNumerosPares)
//     totalNumerosPares++
// }

// while(totalNumerosImpares <= 100){
//     if(totalNumerosImpares % 2 > 0)
//     console.log('Número ímpar encontrado: ', totalNumerosImpares)
//     totalNumerosImpares++
// }