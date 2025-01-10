import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './Header'
import Hero from './Hero'
import SingleProduct from './SingleProduct'
import Cart from './Cart'

function App() {
  const [cart, setCart] = useState([])
  const [isCartVisible, setCartVisible] = useState(false)

  return (
    <>
    <Header cart={cart} setCartVisible={setCartVisible}/>
    {
      isCartVisible ? <Cart cart={cart} setCartVisible={setCartVisible}/> : 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/product/:id' element={<SingleProduct setCart={setCart} />} />
        </Routes>    
      </BrowserRouter>
    }
    
    </>
  )
}

export default App
