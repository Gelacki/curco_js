const numero = 0
const indefinido = undefined
const nulo = null
const textoVazio = ""

const nome = "Aryell"

if (nome) {
  console.log("Olá,", nome)
} else {
  console.log("Ainda não sei seu nome!")
}

const idade = null

if (idade != null) {
  if (idade >= 18) {
    console.log("É maior de idade!")
  } else if (idade != null && idade >= 0 && idade < 18) {
    console.log("É menor de idade!")
  }
}

// if ("Olá") {
//   console.log("Verdadeiro"); // Resultado: Verdadeiro
// }

// if (42) {
//   console.log("Verdadeiro"); // Resultado: Verdadeiro
// }

// if ({}) {
//   console.log("Verdadeiro"); // Resultado: Verdadeiro
// }

// let nome = "";

// if (nome) {
//   console.log("Nome informado!");
// } else {
//   console.log("Nome não informado!"); // Resultado: Nome não informado!
// }

// let quantidade = 0;

// if (quantidade) {
//   console.log("Há itens!");
// } else {
//   console.log("Sem itens!"); // Resultado: Sem itens!
// }

// if (quantidade !== undefined && quantidade !== null) {
//   console.log("Quantidade informada corretamente!"); // Resultado: Quantidade informada corretamente!
// } else {
//   console.log("Quantidade inválida!");
// }


