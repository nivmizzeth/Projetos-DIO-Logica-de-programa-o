class Reserva {
    constructor(hospede, tipoQuarto, diaria, valor, status) {
        this.hospede = hospede
        this.tipoQuarto = tipoQuarto
        this.diaria = diaria
        this.valor = valor
        this.status = status
    }

    calcularDiarias() {
        return this.diaria * this.valor
    }

    reservaConfirmada() {
        return this.status === "Confirmada"
    }

    reservaPendente() {
        return this.status === "Pendente"
    }

    reservaCancelada() {
        return this.status === "Cancelada"
    }

    obterStatus() {
        return this.status
    }

}

function calcularfaturamentoPrevisto(reservas) {

    let totalFaturamento = 0

    for (const reserva of reservas) {

        if (reserva.reservaConfirmada()) {
            totalFaturamento += reserva.calcularDiarias()
        }
    }

    return totalFaturamento
}

function contarStatusReservas (reservas) {

    let confirmada = 0
    let pendente = 0
    let cancelada = 0

    for (const reserva of reservas) {

        if (reserva.reservaConfirmada()) {
            confirmada ++
        } else if (reserva.reservaPendente()) {
            pendente ++
        } else if (reserva.reservaCancelada()) {
            cancelada ++
        }
    }

    return {
        confirmada,
        pendente,
        cancelada
    }
}

function criarRelatorioGeralReservas(reservas) {

    let relatorio = []

    for (const reserva of reservas) {

        relatorio.push(`- Hóspede: ${reserva.hospede}, Tipo de quarto: ${reserva.tipoQuarto}, Valor total Reserva: ${reserva.calcularDiarias()}, Status: ${reserva.obterStatus()}`)
    }

    return relatorio
    
}

let controleReservas = [
    new Reserva("João Silva", "Standard", 3, 150, "Confirmada"),
    new Reserva("Mariana Costa", "Luxo", 2, 280, "Confirmada"),
    new Reserva("Pedro Alves", "Standard", 5, 150, "Cancelada"),
    new Reserva("Carla Mendes", "Luxo", 1, 280, "Pendente"),
    new Reserva("Roberto Lima", "Standard", 4, 150, "Confirmada")
]

const faturamentoPrevisto = calcularfaturamentoPrevisto(controleReservas)
const statusReservas = contarStatusReservas(controleReservas)
const relatorioGeralReservas = criarRelatorioGeralReservas(controleReservas)

console.log("Status reservas:")
console.log(`Confirmadas: ${statusReservas.confirmada}\nPendentes: ${statusReservas.pendente}\nCanceladas: ${statusReservas.cancelada}`)
console.log(`Valor total de faturamento previsto: R$${faturamentoPrevisto.toFixed(2)}`)
console.log("-----------------------------------------------")
console.log("Relatório completo de reservas:")
console.log(relatorioGeralReservas.join("\n"))