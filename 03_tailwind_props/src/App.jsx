import Card from './components/Card'
import './App.css'

function App() {
  let myObj = {
    username: 'manu',
    age: 37,
  }

  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className="font-bold underline bg-green-400 mb-4 rounded-lg">
        han bai
      </h1>
      <Card username="chai aur code" btnText="dekh la profile" />
      <Card username="MK" btnText="aah jhakda" />
    </>
  )
}

export default App
