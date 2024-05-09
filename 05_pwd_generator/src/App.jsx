import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8) // default = 8
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('') // some default must be given that gets showed up at 1st page load
  // main function
  const passwordGenerator = useCallback(() => {
    let pass = '' // variable that stores the final returned/genertaed password -> setPassword(pass)
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*()_+{}:<>?`'

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char) // appended thru the loop
    }
    setPassword(pass) // set only once after the loop is done
  }, [length, numberAllowed, charAllowed, setPassword])
  // not clear why setPassword is included but it's optional as HC said @ 39:00 video ?
  // not clear why infinite loop happened with "password" as dep. array ?
  // for infinite - I believe something to do with useCallback<->useEffect as useEffect has passwordGenerator as dep.
  // audio May 08 @ 07:00 p.m.

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  // hanji, somehow if passwordGenerator ITSELF gets called, useEffect's set up() should run

  return (
    <>
      <div className="bg-gray-500 text-orange-300 w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 border-2">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        {/* below flex is for textInput field + button alongside */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          {/* give input element that completely takes up space of nested div, so no bgcolor for the div */}
          {/* password will have the set password, set thru setPassword(pass) */}
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        {/* outside of the above nested div, inside the main div */}
        {/* below flex to horizontally align/inline the 3 elements beneath input-text */}
        <div className="flex text-sm gap-x-2">
          {/* above div = parent div that contains 3 nested divs: each div for a specific element+its resp. label */}
          {/* gaps between 3 nested divs = 2 vs. gap between element's own div+label = 1 */}
          {/* Input 1 = range - div+label */}
          <div className="flex items-center gap-x-1">
            {/* why the div above? */}
            <input
              type="range"
              name=""
              id="lengthRange"
              min={6}
              max={100}
              value={length} // default value of value = 47 [(100-6)/2]
              className="cursor-pointer"
              onChange={(e) => {
                // console.log(e.target)
                setLength(e.target.value)
              }}
            />
            <label htmlFor="lengthRange">Length: {length}</label>
          </div>
          {/* Input 2 = checkbox#1 - div+label */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id="checkNumber"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev) // this changes the state and re-renders the page
                // without onChange, still the checkbox will be checked/un BUT state won't change
              }}
            />
            <label htmlFor="checkNumber">Numbers</label>
          </div>
          {/* Input 3 = checkbox#2 - div+label */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id="checkChars"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev) // this changes the state and re-renders the page
                // without onChange, still the checkbox will be checked/un BUT state won't change
              }}
            />
            <label htmlFor="checkChars">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
