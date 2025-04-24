import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loginpage from './components/loginpage'
import Register from './components/register'
import Dashboard from './Components/Dashboard'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Loginpage/>}/>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/Dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>

   </>
  )
}

export default App
