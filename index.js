//Quando é um repositorio recem criado
//git init
//git add . ou git add "nome do arquivo"
//git commit -m "coloque uma msg"
//git branch -M main
//git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
//git push -u origin main

//Depois do repositorio criado
//git add .
//git commit -m "msg"
//git push

let notas = [5, 7, 8, 4, 6]
let somaAprovado = 0
let somaReprovado = 0

for (let i = 0; i < notas.length; i++) {
    let media = notas[i]

    if (media >= 6) {
        somaAprovado += 1
    } else {
        somaReprovado += 1
    }
}

console.log(`${somaAprovado} foram aprovados e ${somaReprovado} foram reprovados`)