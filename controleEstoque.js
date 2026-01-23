//Controle de Estoque de Produtos de um Mini-Mercado

//Dados: nome do produto, quantidade em estoque, quantidade mínima, preço unitário
const estoque = [
    ["Coca-cola", 8, 10, 8.5],
    ["Arroz", 4, 5, 11.5],
    ["Feijão", 25, 10, 7.5],
    ["Pipoca", 10, 5, 3.99],
    ["Papel-Toalha", 20, 5, 8.00]
]

function analisarEstoque(produtos) {
    let valorTotalEstoque = 0
    let totalProdutos = 0
    let abaixoQuantMinima = 0
    let maiorEstoque = produtos[0][1]
    let produtoMaiorEstoque = ""
    let menorEstoque = produtos[0][1]
    let produtoMenorEstoque = ""

    for (let i = 0; i < produtos.length; i++) {
        
        const valorTotalUnit = produtos[i][1] * produtos[i][3]
        valorTotalEstoque += valorTotalUnit
            
        totalProdutos += produtos[i][1]
            
        if (produtos[i][1] < produtos[i][2]) {
            abaixoQuantMinima ++
        }

        if (produtos[i][1] > maiorEstoque) {
            maiorEstoque = produtos[i][1]
            produtoMaiorEstoque = produtos[i][0]
        }

        if (produtos[i][1] < menorEstoque) {
            menorEstoque = produtos[i][1]
            produtoMenorEstoque = produtos[i][0]
        }
    }

    return {
        valorTotalEstoque,
        totalProdutos,
        abaixoQuantMinima,
        produtoMaiorEstoque,
        produtoMenorEstoque
    }

}



const analiseEstoque = analisarEstoque(estoque)

console.log(`Valor total do estoque: ${analiseEstoque.valorTotalEstoque}`)
console.log(`Quantidade de itens no estoque: ${analiseEstoque.totalProdutos}`)
console.log(`Quantidade de produtos abaixo do estoque mínimo: ${analiseEstoque.abaixoQuantMinima}`)
console.log(`Produto com maior quantidade em estoque: ${analiseEstoque.produtoMaiorEstoque}`)
console.log(`Produto com menor quantidade em estoque: ${analiseEstoque.produtoMenorEstoque}`)

