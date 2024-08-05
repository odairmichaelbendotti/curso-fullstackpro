"use strict";
class loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja: ${this.nome}, Categoria: ${this.categoria}`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido #${pedido}`);
        });
        return `Pedido na mesa ${mesa}`;
    }
    mudarStatus(status) {
        return status;
    }
}
const redBurger = new loja("Red Burger", "Lanches");
const blueBurger = new loja("Blue Burger", "Lanches");
redBurger.criarLoja();
blueBurger.criarLoja();
const retornoLog = redBurger.emitirPedido(12, "Suco Gelado", "Hamburger de costela");
console.log(retornoLog);
const armazenarStatus = redBurger.mudarStatus("Aberto");
console.log("---");
console.log(armazenarStatus);
