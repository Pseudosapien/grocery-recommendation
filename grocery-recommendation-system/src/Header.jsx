import React from 'react'
import {BiCart} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

function Header({cart, setCartVisible}) {
  return (
    
    <div className='h-20 bg-white justify-between flex items-center px-10 fixed w-full z-10 top-0'>
      
        <h1 className='text-3xl font-bold tracking-wide cursor-pointer' >Grocery Store</h1>
    
      <span className='flex items-center'>
        <h1 className='mx-2 px-2 rounded-full bg-black text-white'>{cart.length === 0 ? null : cart.length}</h1>
        <BiCart fill='#000000' onClick={() => setCartVisible(isVisible => !isVisible)} className='cursor-pointer' size="30px"/>
      </span>        
    </div>
  )
}

export default Header