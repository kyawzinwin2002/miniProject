import React from 'react'
import { FaShopify } from "react-icons/fa";
import { Badge } from "@mantine/core";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const {cartItems} = useSelector(state => state.cart)
  return (
    <div className=" flex justify-around p-4">
      <Link to={"/"} >
        <h1 className=" text-violet-500 text-3xl font-bold">FashionZone</h1>
      </Link>
      <div className=" flex gap-2 items-center ">
        <input
          className=" outline-none border-b-violet-500 border-b-2 "
          type="text"
          placeholder="Search..."
        />
        <Link to={"/addtocart"}>
          <div className="relative">
            <FaShopify className=" text-violet-500 text-2xl" />
            <Badge
              color="violet"
              className=" absolute bottom-4 left-3 text-base"
            >
              {cartItems.length}
            </Badge>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar