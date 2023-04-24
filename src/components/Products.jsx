import React, { useEffect, useState } from 'react'
import Product from './Product';

const Products = () => {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        fetchApi()
    },[])
    const fetchApi = async () => {
        const api = await fetch("https://fakestoreapi.com/products");
        const data = await api.json()
        setProducts(data)
        // console.log(data)
    }
  return (
    <div className=' flex flex-wrap gap-10 justify-center mt-4'>
        {products.map(p => {
            return(
                <Product key={p.id} {...p}/>
            )
        })}
    </div>
  )
}

export default Products