import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increase number by 1
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrease number by 1
        </button>
      </div>
      <div>
        Current count is {count}
      </div>
      
    </>
  )
}

export default App
