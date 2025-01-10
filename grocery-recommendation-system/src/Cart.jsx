import React from 'react' 
import {AiOutlineClose} from 'react-icons/ai'

function Cart({cart, setCartVisible}) {
  return (
    <div className='absolute h-[100vh] w-full top-0 ml-auto py-32 px-32 overflow-scroll justify-center flex flex-wrap gap-10'>
        {
            cart.length === 0 ? 
            <h1 className='font-semibold text-3xl m-auto text-slate-600'>Your cart is empty</h1> :
            <>
            {cart.map((item) => 
                <div className='bg-white p-6 px-10 rounded-xl h-fit w-[500px] cursor-pointer hover:scale-[1.05] flex transition-all'>
                  <img className='h-[100px] w-[100px] rounded-lg' src='/img.jpg' />
                  <span className='ml-10'>
                  <h1 className='text-gray-400 font-thin italic text-sm'>ID: {item[0]}</h1>
                  <h1 className='text-2xl font-bold'>{item[1]}</h1>
                  <h1 className='text-2xl'>₹{item[2]}</h1>  
                  </span>                 
                </div>
            )}</>
        }
            
        <AiOutlineClose className='cursor-pointer fixed top-24 right-16' onClick={() => setCartVisible(false)} size="30px" />
    </div>
  )
}

export default Cart