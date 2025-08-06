import { useReducer, useState } from "react"
import counReducer from "./reducers/countReducer";

function App() {

  // variabile di stato per gestire il contatore 
  const [count, dispatch] = useReducer(counReducer, 0);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleForm(e) {
    e.preventDefault();
    setName('');
    setEmail('');
    setPassword('');
    console.log('Ho inviato i dati');
    console.log({
      name,
      email,
      password
    })
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Aumenta</button>
      <button onClick={() => dispatch({ type: 'decrement' })} disabled={count === 0}>Diminuisci</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>


      <form onSubmit={handleForm}>
        <label>Inserisci il nome
          <input type="text"
            placeholder="Nome"
            value={name}
            onChange={e => setName(e.target.value)} />
        </label>

        <label>
          Inserisci l'email
          <input type="text"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)} />
        </label>

        <label>
          Inserisci la password
          <input type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Invia i tuoi dati</button>
      </form>
    </>
  )
}

export default App
