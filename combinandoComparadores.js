const idade = 18
const maiorDeIdade = idade >= 18
const posuiCNH = false

const podeDirigir = maiorDeIdade && posuiCNH //operador AND (&&)

console.log('Pode dirigir?', podeDirigir)

const podeViajarSozinha = maiorDeIdade || posuiCNH //operador OR (||)

console.log('Pode viajar sozinha?', podeViajarSozinha)

const precisaDeAcompanhante = !maiorDeIdade //operador NOT (!)

console.log('Precisa de acompanhante?', precisaDeAcompanhante)

// AND &&
// OR ||
//NOT !