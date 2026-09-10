// function saudacao(){
//     console.log("E ai, beleza?")
// }


// setTimeout(saudacao, 2000) // o setTimeout usa o tempo em "ms" (milissegundos) 

let contador = 0

const id = setInterval(() => {
    contador++
    console.log("Tempo decorrido (em segundos:)", contador)
    if (contador == 10) {
    clearInterval(id)
}
}, 1000)