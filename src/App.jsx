import { useState } from 'react'

import './App.css'

function App() {
 const [fullName, setFullName] = useState("")
 const [username, setUsername] = useState("")
 const [password, setPassword] = useState("")
 const [spec, setSpec] = useState("")
 const [exp, setExp] = useState("")
 const [desc, setDesc] = useState("") 

 const handleSubmit = (e) => {
  e.preventDefault()
  
  const hasEmptyfields =  
    fullName.trim() === "" ||
    username.trim() === "" ||
    password.trim() === "" ||
    spec === "" ||
    exp.trim() === "" ||
    desc.trim() === ""
  const years = Number(exp) 
  const hasInvalidYears = Number.isNaN(years) || years <= 0

  if(hasEmptyfields){
    console.error("Completa tutti i campi")
    return
  }
  if(hasInvalidYears){
    console.error("Gli anni di esperienza devono essere un numero positivo")
    return
  }
  console.log({fullName, username, password, spec, years, desc})
 }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div><input type='text' placeholder='Nome completo'
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}></input></div>
        <div><input type='text' placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}></input></div>
        <div><input type='password' placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}></input></div>
        <div><select 
        value={spec}
        onChange={(e) => setSpec(e.target.value)}>
          <option value="" disabled hidden>Seleziona la tua specializzazione</option>
          <option value="fullstack">Fullstack</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          </select></div>
        <div><input type='number' placeholder='Anni di esperienza'
        value={exp}
        onChange={(e) => setExp(e.target.value)}></input></div>
        <div><textarea rows={5} cols={50} placeholder='Inserisci una tua breve descrizione'
        value={desc}
        onChange={(e) => setDesc(e.target.value)}></textarea></div>
        <button type='submit'>Invia il form</button>
      </form>
    </>
  )
}

export default App
