import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'

function App() {
  return (
    <>
      <h1 className="text-4xl bg-orange-500">Currency App</h1>
      <br />
      <InputBox />
    </>
  )
}

export default App
