import React, { useEffect, useState } from 'react'

function Product({data}) {
    const [img, setImg] = useState();
    console.log(data[2])
    useEffect(()=>{
        setImg('https://picsum.photos/250/250')
    })
    return (
        <div className='my-6 mx-4 bg-white p-5 rounded-xl w-[240px] cursor-pointer hover:scale-[1.05] hover:drop-shadow-2xl transition-all'>
            <img className='rounded-lg' src={img} />            
            <h2 className='text-xl mt-4 truncate'>{data[0]}</h2>
            <span className='flex justify-between mt-2 items-center '>
                <h2 className='text-xl'>₹{data[1]}</h2>
                <button className='bg-slate-900 text-white py-2 px-6 rounded-full text-base'>Add to cart</button>
            </span>
            
        </div>
    )
}

export default Product