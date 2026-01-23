let DiagramaDesempenho = [
    {nome: "Carlos", vendas:[450, 800, 300, 700, 650]},
    {nome: "Mariana", vendas:[600, 620, 610, 590, 580]},
    {nome: "Juliana", vendas:[300, 400, 500, 450, 350]},
    {nome: "Roberto", vendas:[800, 200, 900, 100, 400]}
]

const vendaMeta = 500

let totalVendas = 0
let mediaVendas = 0
let contMeta = 0



for (const desempenho in DiagramaDesempenho) {
    
    


    for (const venda in DiagramaDesempenho[desempenho].vendas) {

        let vendas = DiagramaDesempenho[desempenho].vendas[venda]

        totalVendas += vendas

        

    
    
    
    }
    
    mediaVendas = totalVendas / DiagramaDesempenho.length
    console.log()
}