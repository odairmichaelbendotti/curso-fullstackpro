"use strict";
class contaBanco {
}
class pessoaFisica extends contaBanco {
    abrirConta(dados) {
        console.log(`Nova conta PF criada com sucesso ${dados.nome}`);
        return true;
    }
}
class pessoaJuridica extends contaBanco {
    abrirConta(dados) {
        console.log('---');
        console.log(`Nova conta jurídica criada com sucesso ${dados.nome}`);
        console.log('---');
        return true;
    }
}
const joana = new pessoaFisica();
joana.abrirConta({
    nome: 'Joana Silva',
    numero: '15',
    endereco: 'Rua das Lontras'
});
const devcode = new pessoaJuridica();
devcode.abrirConta({
    nome: 'devcode',
    numero: '157',
    endereco: 'Rua Dubai, n 1milhão'
});
