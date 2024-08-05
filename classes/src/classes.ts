type statusType = "Aberto" | "Fechado"

class loja {
    //Atributos da classe
    nome: string
    categoria: string

    constructor(nome: string, categoria: string) {
        this.nome = nome
        this.categoria = categoria
    }

    criarLoja(): void {
        console.log(`Loja: ${this.nome}, Categoria: ${this.categoria}`)
    }

    emitirPedido(mesa: number, ...pedidos: string[]): string {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido #${pedido}`)
        })
        return `Pedido na mesa ${mesa}`
    }

    mudarStatus(status: statusType): statusType {
        return status
    }

}

const redBurger = new loja("Red Burger", "Lanches")
const blueBurger = new loja("Blue Burger", "Lanches")
redBurger.criarLoja()
blueBurger.criarLoja()

const retornoLog = redBurger.emitirPedido(12, "Suco Gelado", "Hamburger de costela")
console.log(retornoLog)

const armazenarStatus = redBurger.mudarStatus("Aberto")
console.log("---")
console.log(armazenarStatus)