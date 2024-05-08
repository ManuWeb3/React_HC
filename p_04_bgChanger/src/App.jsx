import Button from './components/Button'
import './App.css'

function App() {
  return (
    <>
      <div className="bg-slate-200 rounded-2xl p-1">
        {/* <button className="bg-red-500 text-white m-1 rounded-full py-1">
          Red
        </button>
       */}
        <Button color="bg-red-500" label="Red" colorCode="#db4242"></Button>
        <Button color="bg-green-500" label="Green" colorCode="#16df0f"></Button>
      </div>
    </>
  )
}

export default App
