import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import AdminSingup from "./Components/AdminSingup"
import AdminLogin from './Components/AdminLogin'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<AdminSingup/>}/>
      <Route path='/login' element ={<AdminLogin/>}/>
    </Routes>
    
      
    </>
  )
}

export default App
