import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Porducts } from "./component/Porducts"
import Navbar from './component/Navbar'
import { Routes, Route } from 'react-router-dom'
import { Home } from  "./component/Home"

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/porducts' element={<Porducts />}  />
    </Routes>
    {/* <Porducts /> */}
    </>
  )
}

export default App
