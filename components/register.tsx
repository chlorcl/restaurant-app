import React from 'react'

export default function form() {
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const json = await fetch('/api/v1/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        email,
        password
      })
    }) 
    const data = await json.json();
    if (!data.userId) {
      alert(data.message)
    } else {
      localStorage.setItem('uid', data.userId)
      alert("Konto utworzone, teraz się zaloguj!")
    }
  }
  return (
    <form className="" onSubmit={handleSubmit}>
      <h2>Utwórz konto</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="nazwa Urzytkownika" className="border-orange-400 border-b-2 border-l-2" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail" className="border-orange-400 border-b-2 border-l-2" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Hasło" className="border-orange-400 border-b-2 border-l-2" />
      <button>Zarejestruj</button>
      <div>
        <a href=""></a>
        <a href=""></a>
      </div>
    </form>
  )
}
