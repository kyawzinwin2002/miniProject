import React from 'react'
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { ADD_QUANTITY, REMOVE_FROM_CART, REMOVE_QUANTITY } from '../services/AddToCartSlice';


const Cart = (props) => {
  const { id,title,image,price,quantity} = props;
  const dispatch = useDispatch()
  const dynamicPrice = price * quantity;
  return (
    <div className="flex justify-around gap-10">
      <div className="flex flex-col gap-2">
        <img src={image} className=" w-[100px] h-[100px]" alt="" />
        <h1 className=" text-lg text-gray-500">{title.substring(0,20)}..</h1>
        <p className=" text-base text-gray-500">${dynamicPrice.toFixed(2)}</p>
        <p
          onClick={() => {
            dispatch(REMOVE_FROM_CART(props));
          }}
          className=" cursor-pointer text-lg text-red-500"
        >
          REMOVE
        </p>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <FaArrowAltCircleUp
          onClick={() => dispatch(ADD_QUANTITY(props))}
          className="text-lg cursor-pointer text-violet-500"
        />
        <span className=" select-none text-lg">{quantity}</span>
        <FaArrowAltCircleDown
          onClick={() => dispatch(REMOVE_QUANTITY(props))}
          className="cursor-pointer text-lg text-violet-500"
        />
      </div>
    </div>
  );
}

export default Cart