import { useState } from 'react'
const letters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~"

import './App.css'

function App() {
 const [fullName, setFullName] = useState("")
 const [username, setUsername] = useState("")
 const [password, setPassword] = useState("")
 const [spec, setSpec] = useState("")
 const [exp, setExp] = useState("")
 const [desc, setDesc] = useState("") 


 const validateUsername = (value) => {
    if (value.length === 0) return ""
    if (value.length < 6) return "Username troppo corto (min 6 caratteri)"
    const lower = value.toLowerCase()

  for (const ch of lower) {
    const isLetter = letters.includes(ch)
    const isNumber = numbers.includes(ch)

    if (!isLetter && !isNumber) {
      return "Solo lettere e numeri (niente spazi o simboli)"
    }
  }

  return ""
}

const validatePassword = (value) => {
  if (value.length === 0) return ""

  if (value.length < 8) {
    return "La password deve avere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo"
  }

  let hasLetter = false
  let hasNumber = false
  let hasSymbol = false

  for (const ch of value.toLowerCase()) {
    if (letters.includes(ch)) hasLetter = true
    else if (numbers.includes(ch)) hasNumber = true
    else if (symbols.includes(ch)) hasSymbol = true
  }

  if (!hasLetter || !hasNumber || !hasSymbol) {
    return "La password deve avere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo"
  }

  return ""
}

const validateDescription = (value) => {
  if (value.length === 0) return ""

  const trimmed = value.trim()

  if (trimmed.length < 100 || trimmed.length > 1000) {
    return "La descrizione deve essere tra 100 e 1000 caratteri"
  }
  return ""
}
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

  const usernameError = validateUsername(username)
  const passwordError = validatePassword(password)
  const descriptionError = validateDescription(desc)
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div><input type='text' placeholder='Nome completo'
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}></input></div>
        <div><input type='text' placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}></input>
        {username !== "" && (usernameError !== "" ? (<p style={{ color: "red" }}>{usernameError}</p>) : 
        (<p style={{ color: "green" }}>Username valido</p>))}</div>
        <div><input type='password' placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}></input></div>
        <div>
          {password !== "" && (passwordError !== "" ? (
          <p style={{ color: "red" }}>{passwordError}</p>) : 
          (<p style={{ color: "green" }}>Password valida</p>))}
        <select 
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
        onChange={(e) => setDesc(e.target.value)}></textarea>
        {desc !== "" && (descriptionError !== "" ? (<p style={{ color: "red" }}>{descriptionError}</p>) :
        (<p style={{ color: "green" }}>Descrizione valida</p>))}</div>
        <button type='submit'>Invia il form</button>
      </form>
    </>
  )
}

export default App
