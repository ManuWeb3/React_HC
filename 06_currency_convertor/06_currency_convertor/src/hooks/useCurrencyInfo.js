import { useEffect, useState } from 'react'
function useCurrencyInfo(currency) {
  const [data, setData] = useState({}) // {} = contingency plan, if fetch() does not work, still loop {} -> won't crash
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((data) => setData(data[currency])) // data.currency won't work bcz it will look for currency key in data returned - crash
    // diff. between dot and [expression-evaluate / used for string]
    // has to use state here to stroe data to render at UI, and NOT a regular var. as it does not render at UI
    console.log(data)
  }, [currency])
  return data // as data by now has been set using setData()
}

export default useCurrencyInfo

/*
fetch(
  'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json'
)
  .then((body) => body.json())
  .then((data) => console.log(typeof data))
*/
