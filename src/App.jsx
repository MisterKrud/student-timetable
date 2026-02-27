import { useState } from 'react'
import Template from './pages/Template'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Template />
    </>
  )
}

export default App
