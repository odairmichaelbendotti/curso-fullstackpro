import './App.css'
import Header from './components/Header'
import Cadastro from './components/Cadastro'
import Login from './components/Registrar'

function App() {

  return (
    <div>
      <Header />
      <div className='py-10'>
        {/* <Cadastro /> */}
        <Login />
      </div>
    </div>
  )
}

export default App
