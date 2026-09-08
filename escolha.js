// entre 9 e 10: Exelente
// entre 7 e 8: Bom
// entre 4 e 6: Médio
// entre 0 e 3: Ruim

const notaDoAluno = 3

switch (notaDoAluno) {
    case 10:
    case 9:
        console.log("Nota Exelente")
        break
    case 8:
    case 7:
        console.log("Nota Boa")
        break
    case 6:
    case 5:
    case 4:
        console.log("Nota Média")
        break
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("Nota Ruim")
        break
        default:
        console.log("Nota inválida")
        break
}