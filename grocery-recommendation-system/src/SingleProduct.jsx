import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {Oval} from 'react-loader-spinner'
import axios from 'axios';


function SingleProduct({setCart}) {
    const location = useLocation();
    const name = location.state[0];
    const price = location.state[1];
    const id = location.state[2];

    const [products, setProducts] = useState([]);
    const [loading, setL] = useState(true)
    const navigate = useNavigate();

    const getProducts = async () => {
        await axios.post('http://127.0.0.1:5000/recommend', {item: name})
        .then((res)=>{
            setProducts(res.data.result)
            console.log(res.data)
            setL(false)
        })
        .catch((err)=>{});
    }

    // const openProduct = (id, details) => {
    //     navigate(`/product/${id}`, {state: {...details, id}})
    //     window.location.reload();
    // }

    const addToCart = (id, name, price) => {
        setCart(cart => [...cart, [id,name,price]])
    }

    useEffect(() => {
        getProducts();
    }, []);
    
  return (
        <div className='mt-[10vh]'>
            <div className='bg-[#c9ccce] px-32 py-8 flex border-b-2 border-b-slate-400'>
                <img className='rounded-xl border-8 hover:scale-[1.05] transition-all h-[250px] w-[250px]' src='/img.jpg' />
                <span className='px-24 relative w-full py-10'>
                    <h1 className='text-5xl font-bold'>{name}</h1>
                    <h2 className='text-2xl my-6'>₹ {price}</h2>
                    <button onClick={(e) => addToCart(id, name, price)} className='bg-slate-900 text-white py-2 px-12 rounded-full text-base hover:bg-slate-800 transition-colors'>Add to cart</button>
                    <p className='text-sm font-thin italic text-slate-500 absolute bottom-0'>product id: {id}</p>                
                </span>
            </div>

                { loading ? 
                <div className='flex flex-col gap-12 h-[40vh] items-center justify-center'>
                    <Oval
                        height={80}
                        width={80}
                        color="#000000"
                        visible={loading}
                        secondaryColor="#FFFFFF"
                        strokeWidth={1}
                        strokeWidthSecondary={2}
                    />
                    <h1>Fetching recommendations...</h1>
                </div>
                :<>
                <h1 className='text-center mt-6 font-bold text-2xl text-slate-800'>----- You may also like -----</h1>

                <div className='p-14 pt-2 pb-10 flex flex-wrap justify-center'>
                    {products.map((item, i) => (
                        // <Product data={item} />
                        <div className='my-6 mx-4 bg-white p-5 rounded-xl w-[240px] cursor-pointer hover:scale-[1.05] hover:drop-shadow-2xl transition-all' id={item[2]} onClick={(e) => openProduct(e.currentTarget.id, item)}>
                            <img className='rounded-lg' src='/img.jpg' />            
                            <h2 className='text-xl mt-4 truncate'>{item[0]}</h2>
                            <span className='flex justify-between mt-2 items-center '>
                                <h2 className='text-xl'>₹{item[1]}</h2>
                                <button className='bg-slate-900 text-white py-2 px-6 rounded-full text-base'>Add to cart</button>
                            </span>
                            
                        </div>
                        ))
                    }
                </div>
                </>
            }            
        </div>
  )
}

export default SingleProduct