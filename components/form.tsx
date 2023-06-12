'use client'
import React, { FC } from 'react'

interface Props {
  login?: boolean
}

export const Form:FC<Props> = ({ login }) => {
  const [user, setUser] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const json = await fetch('/api/v1/' + login ? 'login' : 'register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user,
        email,
        password
      })
    }) 
    const data = await json.json();
    if (data.token) {
      return localStorage.setItem('token', data.token)
    } 
    if (data.userId) {
      alert("Konto utworzone, teraz się zaloguj!")
      return localStorage.setItem('uid', data.userId)     
    }
    alert(data.message)
  }
  return login ? 
  (
    <form className="flex flex-col justify-center align-middle text-center bg-zinc-100 rounded-lg p-6 shadow-xl" onSubmit={handleSubmit}>
      <h2 className='text-3xl font-bold'>Zaloguj się!</h2>
      <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail" className="bg-zinc-100 border-orange-400 border-b-2 border-l-2 p-2 m-6" />
      <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Hasło" className="bg-zinc-100 border-orange-400 border-b-2 border-l-2 p-2 m-6" />
      <button className='bg-orange-400 p-4 rounded-xl w-1/2 m-auto mt-4'>Login</button>
      <div className='flex justify-evenly m-2 mt-4'>
        <p>Masz już konto?</p>
        <a className='text-orange-400 font-semibold' href="">Zaloguj się!</a>
      </div>
    </form>
  ) : 
  (
    <form className="flex flex-col justify-center align-middle text-center bg-zinc-100 rounded-lg p-6 shadow-xl" onSubmit={handleSubmit}>
      <h2 className='text-3xl font-bold'>Utwórz konto</h2>
      <input value={user} onChange={(e) => setUser(e.target.value)} type="text" placeholder="Nazwa Urzytkownika" className="bg-zinc-100 border-orange-400 border-b-2 border-l-2 p-2 m-6" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail" className="bg-zinc-100 border-orange-400 border-b-2 border-l-2 p-2 m-6" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Hasło" className="bg-zinc-100 border-orange-400 border-b-2 border-l-2 p-2 m-6" />
      <button className='bg-orange-400 p-4 rounded-xl w-1/2 m-auto mt-4'>Zarejestruj</button>
      <div className='flex justify-evenly m-2 mt-4'>
        <p>Nie masz konta?</p>
        <a className='text-orange-400 font-semibold' href="">Stwórz je!</a>
      </div>
    </form>
  )
}
export default Form;