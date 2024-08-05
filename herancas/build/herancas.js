"use strict";
class usuario {
    constructor(nome, email) {
        this.nickname = nome;
        this.emailCorporativo = email;
    }
}
//Essa classe admin também será uma classe usuário.
class admin extends usuario {
    constructor(nome, email, cargo, nivel) {
        //Super deve ser o primeiro item do construtor
        super(nome, email); //depois de passar para o super, devemos jogar nos parâmetros.
        this.cargo = cargo;
        this.nivel = nivel;
    }
}
const usuario1 = new admin("Odair", "obendotti@gmail.com", "CEO devcode", 1);
console.log(usuario1);
