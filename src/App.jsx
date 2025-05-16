import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css'

import './translation/i18nify.js'

import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage.jsx'
import WonderDetails from './components/WonderDetails.jsx'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <Routes>
        {/* Defining the home page route */}
        <Route path='/' element={<HomePage />} />

        {/* Defining a route for each wonder using a dynamic segment */}
        <Route path='/wonder/:name' element={<WonderDetails />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
