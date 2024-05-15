import React, { useId } from 'react'

// like Remitly
function InputBox({
  label,
  amount,
  onAmountChange, // state change -> fires useEffect(fetch(API called)) -> data updated in the target currency UI field
  onCurrencyChange,
  currencyOptions = [], // "options" that contains Object.keys(currency) in App.jsx
  selectCurrency = 'inr', // Not = "usd1"
  amountDisable = false, // needed for Production-grade app
  currencyDisable = false,
  className = '',
}) {
  const amountInputId = useId()
  return (
    <div
      className={`border-black border-2 bg-white p-3 rounded-lg text-sm flex ${className}`}
    >
      {/* fix child 1 below for inline*/}
      <div className="w-1/2 border-blue-600 border-2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-1 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable} // A Boolean attribute which, IF PRESENT, indicates that the user should not be able to interact with the input.
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)} // Exactly wat I saw at Remitly's DYNAMIC conversion usd->inr on their UI
        />
      </div>
      {/* fix child 2 below for inline*/}
      <div className="border-green-500 border-2 w-1/2 flex flex-wrap justify-end text-right ml-1">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            // "value" of <option> is submitted to the server at form-submission -> prevented by us for now
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox
