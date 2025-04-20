import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
