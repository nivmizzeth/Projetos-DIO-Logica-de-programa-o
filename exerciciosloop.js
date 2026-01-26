const pedidos = [
    {
        cliente: "Fernanda",
        itens: [
            { nome: "Hambúrguer", preco: 25 },
            { nome: "Refrigerante", preco: 8 },
            { nome: "Batata Frita", preco: 15 }
        ],
        status: "Entregue"
    },
    {
        cliente: "Ricardo",
        itens: [
            { nome: "Pizza", preco: 60 },
            { nome: "Suco", preco: 10 }
        ],
        status: "Pendente"
    },
    {
        cliente: "Mariana",
        itens: [
            { nome: "Sanduíche", preco: 18 },
            { nome: "Refrigerante", preco: 8 },
            { nome: "Sobremesa", preco: 20 }
        ],
        status: "Entregue"
    }
]

let totalItensVendidos = 0
let faturamentoEntregue = 0

for (const clientes of pedidos) {

    const pessoa = clientes.cliente
    const entregue = clientes.status
    let clienteTotal = 0

    console.log(`cliente: ${pessoa}`)
    
    

    for (const item of clientes.itens) {

        const pedido = item.nome
        clienteTotal += item.preco
        
        totalItensVendidos ++

        if (entregue === "Entregue") {
            faturamentoEntregue += item.preco
        }
        
        console.log(`- ${pedido}`)
        

        
    
    
    }

    console.log(`Total Pedido: R$${clienteTotal}`)
    console.log("")

}

console.log(`Faturamento pedidos entregue: R$${faturamentoEntregue.toFixed(2)}`)
console.log(`Total de itens vendidos: ${totalItensVendidos}`)




