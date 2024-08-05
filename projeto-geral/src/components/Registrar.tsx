import React, { useState, useEffect } from 'react'
import { db, auth } from '../firebase.connection'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

type UserDetail = {
  uid: string
  email: string
}

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [user, setUser] = useState<boolean>(false)
  const [userDetail, setUserDetail] = useState<UserDetail>({ uid: '', email: '' })

  const handleSubmit = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        setEmail('')
        setPassword('')
        alert('Usuário cadastrado com sucesso!')
      })
      .catch((error) => {
        if (error.code === 'auth/weak-password') {
          alert('Senha muito fraca')
        } else if (error.code === 'auth/email-already-in-use') {
          alert('E-mail já cadastrado.')
        }
        console.log('Erro ao cadastrar usuário.')
      })
  }

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log('Usuário logado.')
        setEmail('')
        setPassword('')
        setUserDetail({
          uid: value.user.uid,
          email: value.user.email ?? '' //Atribui uma string vazia se email for null
        })
        setUser(true)
      })
      .catch(() => {
        console.log('Incorreto')
        setUser(false)
      })
  }

  const handleLogout = async () => {
    await signOut(auth)
    setUser(false)
    setUserDetail({ uid: '', email: '' })
  }

  useEffect(() => {
    const checkLogin = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // Se existe usuário logado, mantém logado
          console.log(user)
          setUser(true)
          setUserDetail({ uid: user.uid, email: user.email ?? '' })
        } else {
          // Não mantém logado
          setUser(false)
          setUserDetail({ uid: '', email: '' })
        }
      })
    }
    checkLogin()
  }, []) // Dependência vazia para garantir que o código rode apenas uma vez

  
  return (
    <div className='container mx-auto flex justify-center'>
      <div className='w-72 p-8 border-2 rounded-2xl'>
        <div className='flex flex-col'>
          <label htmlFor="username">E-mail</label>
          <input type="text" placeholder='Digite seu e-mail' className='px-2 py-[3px] rounded-md text-sm border-2'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='flex flex-col mt-2'>
          <label htmlFor="password">Senha</label>
          <input type="password" placeholder='Digite sua senha' className='px-2 py-[3px] rounded-md text-sm border-2'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='flex flex-col w-full gap-2 items-center mt-8'>
          <div className='w-40 text-center py-[3px] border-2 border-black hover:bg-black hover:text-white cursor-pointer'
            onClick={handleSubmit}>Cadastrar</div>
          <div className='w-40 text-center py-[3px] border-2 border-black hover:bg-green-200 hover:text-black cursor-pointer'
            onClick={handleLogin}>Login</div>
        </div>
        {user && (
          <div className='w-full bg-green-200 mt-4 px-4 py-2 text-center text-sm font-bold rounded-xl flex flex-col items-center'>
            {userDetail.email}
            <div className='w-40 text-center py-[3px] border-2 border-black hover:bg-red-200 hover:text-black cursor-pointer bg-white'
              onClick={handleLogout}>Deslogar</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Login
