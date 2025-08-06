import { useReducer, useState } from "react"
import counReducer from "./reducers/countReducer";
import formReducer from "./reducers/formReducer";

function App() {

  // variabile di stato per gestire il contatore 
  const [count, dispatch] = useReducer(counReducer, 0);

  const [formData, dispatchForm] = useReducer(formReducer, { name: '', email: '', password: '' })

  function handleForm(e) {
    e.preventDefault();
    dispatchForm({ type: 'reset' });

    console.log('Ho inviato i dati');
    console.log(formData)
  }

  function handleChangeInput(e) {
    dispatchForm({
      type: 'update_field',
      field: e.target.name,
      value: e.target.value
    })
  }

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');


  function formTasks(e) {
    e.preventDefault();

    if (newTodo.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: newTodo,
      completed: false
    };

    setTodos([...todos, newTask]);
    setNewTodo('');
  }

  function handleToggle(id) {
    setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    )
  }

  function handleRemove(id) {
    setTodos(prev => prev.filter(todo => todo.id !== id))
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
            name="name"
            value={formData.name}
            onChange={handleChangeInput} />
        </label>

        <label>
          Inserisci l'email
          <input type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChangeInput} />
        </label>

        <label>
          Inserisci la password
          <input type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChangeInput}
          />
        </label>
        <button type="submit">Invia i tuoi dati</button>
      </form>


      <form onSubmit={formTasks}>
        <label>
          Inserisci il testo
          <input type="text"
            placeholder="Testo"
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
          />

          <button type="submit">Aggiungi task</button>
        </label>
      </form>

      <ul>
        {todos.map(t => <li key={t.id}>
          <p onClick={() => handleToggle(t.id)}>{t.completed ? "✅ " : "❌ "}{t.text}</p>
          <button onClick={() => handleRemove(t.id)}>Rimuovi</button>
        </li>)}
      </ul>
    </>
  )
}

export default App
