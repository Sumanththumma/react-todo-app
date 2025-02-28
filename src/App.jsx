import { useState } from 'react'
import './App.css'
import Todo from './Components/Todo'

function App() {
  return (
    <>
      <div className='bg-neutral-800 h-screen w-full'>
        <Todo />
      </div>
    </>
  )
}

export default App
