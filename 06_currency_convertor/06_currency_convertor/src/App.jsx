import { useState } from 'react'
// import InputBox from './components/InputBox'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  // get/set all STATES
  //1. "From" currency
  const [from, setFrom] = useState('usd')
  //2. "To" currency
  const [to, setTo] = useState('inr')
  //3. "From" Amount
  const [amount, setAmount] = useState(0)
  //4. ConvertedTo amount ("To")
  const [convertedToAmount, setconvertedToAmount] = useState(0)
  //5. useCurrencyInfo hook (only runs when "From" state changes, DOES NOT run when "To" state changes)
  const currencyInfo = useCurrencyInfo(from) // currencyInfo contains entire API-response object's data {} against the key "usd"
  const options = Object.keys(currencyInfo) // exclusive keys of currencyInfo{}

  // Swap() functionality = currencies swap
  const swap = () => {
    //1. Swap currencyOptions
    setFrom(to)
    setTo(from)
    //2. Swap amounts
    setconvertedToAmount(amount)
    setAmount(convertedToAmount)
  }

  // setConvertedTo = display amount in INR
  // amount = USD-amount
  // currencyInfo[to] = currencyInfo["inr"] = number
  const convert = () => {
    setconvertedToAmount(amount * currencyInfo[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          {/* HTML Form that includes all 4 elements below */}
          <form
            onSubmit={(e) => {
              e.preventDefault() // No need to send the input values of form elements to any "action" url
              convert() // instead, call convert()
            }}
          >
            {/* Top input box - "From" */}
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                // onAmountChange={}
                currencyOptions={options} // gets new set of options everytime diff. currency is selected
                // const onCurrencyChange = Fn. Ref. Var. = (arg.) => {body}
                // currency arg below = "e.target.value" of <InputBox>
                onCurrencyChange={(currency) => {
                  console.log(2)
                  return setFrom(currency)
                }}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            {/* swap button */}
            <div className="relative w-full h-0.5">
              <button
                type="button" // important
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            {/* Bottom input box - "To" */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedToAmount}
                // onAmountChange={}
                currencyOptions={options}
                // const onCurrencyChange = Fn. Ref. Var. = (arg.) => {body}
                // currency arg below = "e.target.value" of <InputBox>
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable // so that user is NOT able to edit the resultant convertedToAmount field
              />
            </div>
            {/* Convert Button */}
            <button
              type="submit" // relates to submitting all values of the form at its submisison (onSubmit)
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
