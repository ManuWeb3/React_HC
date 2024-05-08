import { useState } from 'react'
import './App.css'

function App() {
  // color variable changes values -> different values lead to changes in UI -> useState()
  const [color, setColor] = useState('olive')

  return (
    <>
      <div
        className="w-full h-screen duration-200 border-black border-2"
        style={{ backgroundColor: color }}
      >
        vbsxfVGBs
        <div className="flex flex-wrap justify-center fixed bottom-12 inset-x-0 px-2 border-black border-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'red' }}
              onClick={()=>{}}
            >
              Red
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-500">
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'blue' }}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
