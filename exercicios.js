// 1. Contador de 1 a 10


// for(let contador = 1; contador <= 10; contador++){
//     console.log('Número atual: ', contador)
// }

// 2. Soma de 1 a 100  

// let soma = 0
// for(let i = 1; i <= 100; i++){
//     soma += i
// }

// console.log('A soma de 1 a 100 é: ' + soma)

// 3. Tabuada personalizada

// let numeroTabuada = 5

// for(let i = 1; i <= 10; i++){
//     console.log(numeroTabuada + ' x ' + i + ' = ' + (numeroTabuada * i))
// }

// 4. Contagem regreciva com while

// let contagem = 10

// while (contagem >= 0) {
//     console.log(contagem)
//     contagem--
// }

// 5. Receber numeros até digitar 0 (simulado com array)

let numeroDigitado;
let quantidade = 0;
let repeticoes = 0;

do {
    //simulação manuel de entrada
    if (repeticoes === 0) {
        numeroDigitado = 5;
    } else if (repeticoes === 1) {
        numeroDigitado = 10;
    } else {numeroDigitado = 0;
}

if (numeroDigitado !== 0) {
    quantidade++;
}

repeticoes++;
} while (numeroDigitado !== 0);

console.log('Total de números digitados: ' + quantidade)

// 6. Jogo do numero secreto

let numeroSecreto = 7;

for (let tentativa = 1; tentativa <= 3; tentativa++) {
  let numeroTentado;

  if (tentativa === 1) {
    numeroTentado = 3;
  } else if (tentativa === 2) {
    numeroTentado = 5;
  } else {
    numeroTentado = 7;
  }

  if (numeroTentado === numeroSecreto) {
    console.log("Acertou!");
  } else {
    console.log("Tente novamente");
  }
}