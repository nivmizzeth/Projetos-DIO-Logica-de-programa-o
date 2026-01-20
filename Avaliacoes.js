//Controle de Avaliações de um Aplicativo

//dados
const avaliacoes = [4, 4, 5, 3, 1, 2, 4, 3, 2, 4, 5, 5, 3, 2, 3]
const avaliacaoNegativa = 2

function calcularMedia(notas) {
    let somaNotas = 0
    
    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i]
    }

    const mediaNotas = somaNotas / notas.length
    return mediaNotas
}

function somarNegativa(notas, limite) {
    let notasNegativas = 0
    
    for (let i = 0; i < notas.length; i++ ) {
        
        if (notas[i] <= limite) {
            notasNegativas += 1
        }
    }
    
    return notasNegativas
}

function buscarMaiorNota(notas) {
    let maiorNota = -Infinity

    for (let i = 0; i < notas.length; i++) {
        
        if (notas[i] >= maiorNota) {
            maiorNota = notas[i]
        }
    }
    
    return maiorNota
}

function buscarMenorNota(notas) {
    let menorNota = Infinity
    
    for (let i = 0; i < notas.length; i++) {
    
        if (notas[i] < menorNota) {
            menorNota = notas[i]
        }
    }
    
    return menorNota
}

const mediaNotas = calcularMedia(avaliacoes)
const notasNegativas = somarNegativa(avaliacoes, avaliacaoNegativa)
const maiorNota = buscarMaiorNota(avaliacoes)
const menorNota = buscarMenorNota(avaliacoes)

console.log(`Nota média do aplicativo: ${mediaNotas.toFixed(0)}`)
console.log(`Quantidade de avaliações negativas: ${notasNegativas}`)
console.log(`Maior nota registrada: ${maiorNota}`)
console.log(`Menor nota registrada: ${menorNota}`)