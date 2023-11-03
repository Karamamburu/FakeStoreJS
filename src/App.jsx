import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Paragraph from './components/Paragraph'

function App() {

  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount((count) => count + 1)
  }

  const decreaseCount = () => {
    setCount((count) => count - 1)
  }

  return (
    <>
      <Button func={increaseCount} text={'increase'} />
      <Paragraph counter={count} />
      <Button func={decreaseCount} text={'decrease'} />
    </>
  )
}

export default App
