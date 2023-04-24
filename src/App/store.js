import { configureStore } from "@reduxjs/toolkit";
import AddToCartSlice from "../services/AddToCartSlice";

export const store = configureStore({
    reducer:{
        cart:AddToCartSlice
    }
})