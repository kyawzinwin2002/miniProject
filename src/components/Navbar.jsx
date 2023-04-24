import React, { useEffect, useState } from 'react'
import { FaShopify } from "react-icons/fa";
import { Badge } from "@mantine/core";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const {cartItems} = useSelector(state => state.cart);
  const nav = useNavigate()
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
  const [search,setSearch] = useState("")
  const filteredProduct = products.filter(p => p.title.toLowerCase().includes(search))
  const submitHandler = (e) => {
    e.preventDefault()
    nav("/search",{state : {filteredProduct}})
  }



  return (
    <div className=" flex justify-around p-4">
      <Link to={"/"}>
        <h1 className=" text-violet-500 text-3xl font-bold">FashionZone</h1>
      </Link>
      <div className=" flex gap-2 items-center ">
        <form onSubmit={submitHandler}>
          <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
            className=" outline-none border-b-violet-500 border-b-2 "
            type="text"
            placeholder="Search..."
          />
        </form>
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