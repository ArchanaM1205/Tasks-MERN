import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loginpage from './components/loginpage'
import Register from './components/register'
import Dashboard from './Components/Dashboard'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Productpage from './Components/Productpage'
import CartPage from './Components/CartPage'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Loginpage/>}/>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/Dashboard' element={<Dashboard/>}></Route>
      <Route path='/Productpage' element={<Productpage/>}></Route>
      <Route path='/CartPage' element={<CartPage/>}></Route>
    </Routes>
    </BrowserRouter>

   </>
  )
}

export default App
