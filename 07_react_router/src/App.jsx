// NOT used inside main.jsx due to presence and usage of <Outlet /> inside <Layout />
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
