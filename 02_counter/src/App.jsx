import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// set range between 0 - 20 (both inclusive)
function App() {
  let [counter, setCounter] = useState(5)
  // let counter = 5
  function addCounter() {
    if (counter <= 19) {
      counter = counter + 1
      console.log(counter)
      setCounter(counter)
    } else {
      console.log('Value cannot exceed 20')
    }
  }
  function removeCounter() {
    if (counter >= 1) {
      counter = counter - 1
      console.log(counter)
      setCounter(counter)
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
