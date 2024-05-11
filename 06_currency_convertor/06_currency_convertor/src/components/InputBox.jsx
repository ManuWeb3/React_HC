import React from 'react'

function InputBox({ label, amount, className = '' }) {
  return (
    <div
      className={`border-black border-2 bg-white p-3 rounded-lg text-sm flex ${className}`}
    >
      {/* fix child 1 below for inline*/}
      <div className="w-1/2 border-blue-600 border-2">
        <label className="text-black/40 mb-1 inline-block">label</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
        />
      </div>
      {/* fix child 2 below for inline*/}
      <div className="border-green-500 border-2 w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none">
          <option value="usd">usd</option>
        </select>
      </div>
    </div>
  )
}

export default InputBox
