import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// set range between 0 - 20 (both inclusive)
function App() {
  const [counter, setCounter] = useState(5) // const = can ONLY change counter inside setState()
  // let counter = 5
  function addCounter() {
    if (counter <= 19) {
      // counter = counter + 1  // won't work with const counter, works with let
      // console.log(counter)

      // NO BATCHING with callbacks
      setCounter((prevCounter) => prevCounter + 1) // still works with const counter
      setCounter((prevCounter) => prevCounter + 1) // still works with const counter
      setCounter((prevCounter) => prevCounter + 1) // still works with const counter

      // BATCHING in action without callbacks
      // setCounter(counter + 1) // still works with const counter (when single, batching is for a different concept)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
    } else {
      console.log('Value cannot exceed 20')
    }
  }
  function removeCounter() {
    if (counter >= 1) {
      // counter = counter - 1  // won't work with const counter, works with let
      // console.log(counter)
      setCounter(counter - 1) // still works with const counter
    } else {
      console.log('Value cannot drop below 0')
    }
  }
  return (
    <>
      <h2>Chai aur "dhuaadaar" React</h2>
      <h2>Counter: {counter}</h2>
      <button onClick={addCounter}>Add counter {counter}</button>
      <br />
      <br />
      <button onClick={removeCounter}>Remove counter {counter}</button>
    </>
  )
}

export default App
