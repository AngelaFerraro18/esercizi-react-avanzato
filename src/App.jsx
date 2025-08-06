import { useReducer } from "react"
import counReducer from "./reducers/countReducer";

function App() {

  // variabile di stato per gestire il contatore 
  const [count, dispatch] = useReducer(counReducer, 0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Aumenta</button>
      <button onClick={() => dispatch({ type: 'decrement' })} disabled={count === 0}>Diminuisci</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  )
}

export default App
