import { useState } from "react"

function Tarefas() {
    const [input, setInput] = useState('')
    const [atividade, setAtividade] = useState([
        'Pagar a conta de luz',
        'Estudar reactjs'
    ])

    function handleRegister(e) {
        e.preventDefault()

        setAtividade([...atividade, input])
        setInput('')
    }

    return (
        <div>
            <h1>Lista de tarefass</h1>
            <form onSubmit={handleRegister}>
                <label htmlFor="atividade">Informe a atividade</label> <br />
                <input type="text" id="atividade" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button type="submit">Cadastrar</button>
            </form>
            <ul>
                {atividade.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>
        </div>
    )
}

export default Tarefas