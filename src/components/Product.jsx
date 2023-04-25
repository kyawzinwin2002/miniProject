import React from 'react'
import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from '../services/AddToCartSlice';

const Product = (props) => {
  const {id,image,title,price,description} = props;
  const dispatch = useDispatch()

  return (
    <div className='flex flex-col gap-3 p-2 shadow-md rounded-md'>
      <img
      className='h-[150px] mx-auto w-[170px]' src={image} alt="" />
      <h1 className=' text-2xl text-gray-500'>{title.substring(0,20)}..</h1>
      <p className=' text-gray-500'>${price}</p>
      <button onClick={() => {dispatch(ADD_TO_CART(props));}} className=' px-6 py-2 text-white bg-violet-600 rounded-xl'>Add to Cart</button>
    </div>
  )
}

export default Product