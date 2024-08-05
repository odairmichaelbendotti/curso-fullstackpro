function repositorio () {
    let dados: number

    function getDados() {
        return dados
    }

    function setDados(novoDado: number) {
        dados = novoDado
    }

    return { getDados, setDados }
}

const repo1 = repositorio()

repo1.setDados(15)

console.log(repo1.getDados())