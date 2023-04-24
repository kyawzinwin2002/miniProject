import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import AddToCart from './components/AddToCart'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/addtocart' element={<AddToCart/>}/>
      </Routes>
    </div>
  )
}

export default App