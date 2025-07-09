import { useState } from 'react'
import '../css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Pastillero Electrónico</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
