import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Components/Dashboard'
import Navbar from './Components/Navbar'
import Todos from './Components/Todos'

function App() {
  return (
    <>
      <Navbar/>
      <Todos />
    </>
  )
}

export default App
