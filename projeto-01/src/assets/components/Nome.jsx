import { useState } from "react"

function Nome () {
    
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [idade, setIdade] = useState(0)   
    const [user, setUser] = useState({}) 
    
    function handleRegister(e){
        e.preventDefault()
        
        setUser({
            nome: nome,
            email: email,
            idade: idade
        })
    }

    return (
        <div>
            <form onSubmit={handleRegister}>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)}/> <br></br>

                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br></br>

                <label htmlFor="idade">Idade</label>
                <input type="text" id="idade" value={idade} onChange={(e) => setIdade(e.target.value)}/> <br></br>

                <button type="submit">Cadastrar</button>
            </form>

        <div>
            <span>Ola, {user.nome} </span>
            <span>E-mail: {user.email}</span>
            <span>Idade: {user.idade} anos</span>
        </div>
        </div>
    )
}

export default Nome