//Controle de Pontuação de Alunos em um Curso online

//dados
const alunosNotas = [43, 56, 79, 71, 43, 89, 99, 85, 12, 99, 90, 69, 93, 94, 56, 75, 74, 68, 89, 88]
const aprovadoMin = 60

function calcularMediaTurma(notas) {
    let somaNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i]
    }

    const mediaNotas = somaNotas / notas.length
    return mediaNotas
}

function contarReprovados(notas, limiteMin) {
    let alunosReprovados = 0

    for (let i = 0; i < notas.length; i++) {

        if (notas[i] < limiteMin) {
            alunosReprovados += 1
        }
    }

    return alunosReprovados
}

function obterMaiorNota(notas) {
    let maiorNota = -Infinity

    for (let i = 0; i < notas.length; i++) {

        if (notas[i] > maiorNota) {
            maiorNota = notas[i]
        }
    }

    return maiorNota
}

function obterMenorNota(notas) {
    let menorNota = Infinity

    for (let i = 0; i < notas.length; i++) {

        if (notas[i] < menorNota) {
            menorNota = notas[i]
        }
    }

    return menorNota
}

const mediaTurma = calcularMediaTurma(alunosNotas)
const alunosReprovados = contarReprovados(alunosNotas, aprovadoMin)
const maiorNota = obterMaiorNota(alunosNotas)
const menorNota = obterMenorNota(alunosNotas)

console.log(`Pontuação média da turma: ${mediaTurma}`)
console.log(`Alunos reprovados: ${alunosReprovados}`)
console.log(`Maior nota registrada: ${maiorNota}`)
console.log(`Menor nota registrada: ${menorNota}`)