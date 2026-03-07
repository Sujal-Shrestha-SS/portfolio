import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/design" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>

    
    
    </BrowserRouter>
  )
}

export default App