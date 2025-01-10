import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Oval} from 'react-loader-spinner'
import Product from './Product';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const [products, setProducts] = useState([]);
    const [loading, setL] = useState(true)
    const navigate = useNavigate();

    const getProducts = async () => {
        await axios.get('http://127.0.0.1:5000')
        .then((res)=>{
            setProducts(res.data.result)
            setL(false)
        })
        .catch((err)=>{err.message});
        // const img = await axios.get('https://unsplash.it/300/300')
        // .then((ress) => {console.log(ress.data)})
        // .catch((err) => console.log(err.message))

    }

    const openProduct = (id, details) => {
        navigate(`/product/${id}`, {state: {...details, id}})
    }
    
    const getImg = async (q) => {

        // https://api.unsplash.com/photos/random?query=mango&orientation=squarish&client_id=wZyZz02rTZdqlmai2GY_D4ol1ebil2khiCms9_Cq4nI
        // await axios.get('https://api.unsplash.com/photos/random?query=mango&orientation=squarish&client_id=wZyZz02rTZdqlmai2GY_D4ol1ebil2khiCms9_Cq4nI')
        // .then((res) => console.log(res.data.urls.small))
        
        const options = {
            method: 'GET',
            url: `https://api.unsplash.com/photos/random?query=${q}&orientation=squarish&client_id=eKxTbyShWoPtkFz1stLF_y-7EEABiveRe3dWNE_mr4U`,
          };
        const response = await axios.request(options);
        return (response.data.urls.small);

    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className='mt-[10vh] flex flex-col'>
            <h1 className='mt-[5vh] font-bold text-2xl self-center'>OUR PRODUCTS</h1>
            {loading ? 
            <div className='flex flex-col gap-12 h-[80vh] items-center justify-center'>
                <Oval
                    height={120}
                    width={120}
                    color="#000000"
                    visible={loading}
                    secondaryColor="#FFFFFF"
                    strokeWidth={1}
                    strokeWidthSecondary={2}
                />
                <h1>Loading products...</h1>
            </div> : 
            <div className='p-14 py-6 flex flex-wrap justify-between'>
                {products.map((item, i) => 
                    // <Product data={item} />
                    // const url = await getImg(item[0]);
                    (
                    <div className='my-6 mx-4 bg-white p-5 rounded-xl w-[240px] cursor-pointer hover:scale-[1.05] hover:drop-shadow-2xl transition-all' id={item[2]} onClick={(e) => openProduct(e.currentTarget.id, item)}>
                        <img className='rounded-lg' src='/img.jpg' />            
                        <h2 className='text-xl mt-4 truncate font-bold'>{item[0]}</h2>
                        <span className='flex justify-between mt-2 items-center '>
                            <h2 className='text-xl'>₹{item[1]}</h2>
                            <button className='bg-slate-900 text-white py-2 px-6 rounded-full text-base'>Add to cart</button>
                        </span>
                        
                    </div>
                    )
                    )
                }
           </div>
           }   
        </div>
    )
}

export default Hero