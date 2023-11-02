import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount((count) => count + 1)
  }

  return (
    <>
      <button onClick={() => increaseCount()}>
        click me
      </button>
      <p>
        count: {count}
      </p>
    </>
  )
}

export default App
