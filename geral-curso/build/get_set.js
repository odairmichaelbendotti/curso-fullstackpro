"use strict";
class jogo {
    constructor(servidor) {
        this.id = "1234";
        this.servidor = servidor;
    }
    //Método GET
    //Serve para pegar o valor ao invés de acessar diretamente a propriedade.
    get getServidorIP() {
        console.log('--Método GET--');
        return this.servidor;
    }
    //Método SET
    //Server para alterar algum atributo
    set setServidorIP(novoIP) {
        console.log('--Método SET--');
        this.servidor = novoIP;
    }
}
const GTA = new jogo("192.168.255.0");
GTA.setServidorIP = "192.168.131.03";
console.log(GTA.getServidorIP);
console.log(GTA);
