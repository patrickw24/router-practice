import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Component/Home'
import { Contact } from './Component/Contact'
import { About } from './Component/About'
import { NavBar } from './ScreenComponent/Navbar'
import { Error } from './Component/Error'


function App() {
  

  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
        <Route path="*/" element={<Error />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
