import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems:[],
    Total:0,
    quantity:0
};

export const AddToCartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        ADD_TO_CART : (state,{payload}) => {
            state.cartItems=[...state.cartItems,{...payload,quantity:1}];
            state.Total += payload.price;
            state.quantity++;
        },
        REMOVE_FROM_CART : (state,{payload}) => {
            state.cartItems = state.cartItems.filter(item => item.id !== payload.id)
            state.Total -= payload.price * payload.quantity;
            state.quantity--;
        },
        ADD_QUANTITY : (state,{payload}) => {
            state.cartItems.map(item => {
                if(item.id === payload.id){
                    item.quantity++;
                    state.Total += payload.price;
                    state.quantity++;
                }
            })
        },
        REMOVE_QUANTITY : (state,{payload}) => {
            state.cartItems.map(item => {
                if (item.quantity > 1) {
                  if (item.id === payload.id) {
                    item.quantity--;
                    state.Total -= payload.price;
                    state.quantity--;
                  }
                }
            })
        }


    }
})

export const { ADD_TO_CART, REMOVE_FROM_CART, ADD_QUANTITY, REMOVE_QUANTITY } =
  AddToCartSlice.actions;
export default AddToCartSlice.reducer;