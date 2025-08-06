import { useState } from "react"


function App() {

  // variabile di stato per gestire il contatore 
  const [count, setCount] = useState(0);

  // funzione per incrementare i numeri 
  function increaseNumber() {
    setCount(prev => prev + 1);
  }

  // funzione per diminuire i numeri 
  function decreaseNumber() {
    setCount(prev => prev - 1);
  }

  // funzione per resettare i numeri 
  function resetNumber() {
    setCount(0);
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={increaseNumber}>Aumenta</button>
      <button onClick={decreaseNumber} disabled={count === 0}>Diminuisci</button>
      <button onClick={resetNumber}>Reset</button>
    </>
  )
}

export default App
