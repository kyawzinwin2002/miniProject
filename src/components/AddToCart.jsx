import React from 'react'
import { useSelector } from 'react-redux';
import Cart from './Cart';
import { Link } from 'react-router-dom';

const AddToCart = () => {
  const { cartItems,Total } = useSelector((state) => state.cart);
  console.log(cartItems);
 if(cartItems.length>0){
   return (
     <div>
       <div className=" mt-5 flex flex-col gap-5">
         {cartItems.map((item) => {
           return <Cart key={item.id} {...item} />;
         })}
       </div>
       <hr className=' w-[60%] mx-auto my-5'/>
       <div className=" flex justify-around">
         <h1 className=' text-lg'>Total</h1>
         <h1 className=' text-lg text-gray-500'>${Total.toFixed(2)}</h1>
       </div>
     </div>
   );
 }
 return (
   <div className=" w-screen h-screen flex-col gap-5 flex items-center justify-center">
     <h1 className=" text-3xl text-red-500">Your Cart is Empty!</h1>
     <Link to={"/"}>
       <button className=" border-2 bg-gray-400 text-white rounded-lg px-7 py-2">
         Choose Items
       </button>
     </Link>
   </div>
 );
}

export default AddToCart