import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  cartItems: [],
  Total: 0,
  quantity: 0,
};

const STORAGE_KEY = "cartItems";
const storedItems = Cookies.get(STORAGE_KEY);

if (storedItems) {
  initialState.cartItems = JSON.parse(storedItems);
  initialState.Total = calcTotal(initialState.cartItems);
  initialState.quantity = calcQty(initialState.cartItems);
}

function calcTotal(cartItems) {
  return cartItems.reduce(
    (total, item) => total + (item.price * item.quantity),
    0
  );
}
function calcQty(cartItems) {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
}

export const AddToCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART: (state, { payload }) => {
      const isExisted = state.cartItems.find((item) => item.id === payload.id);
      if (isExisted) {
        state;
      } else {
        state.cartItems = [...state.cartItems, { ...payload, quantity: 1 }];
        //   state.Total += payload.price;
        //   state.quantity++;
        state.Total = calcTotal(state.cartItems);
       
        state.quantity = calcQty(state.cartItems);
        Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
      }
    },
    REMOVE_FROM_CART: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
      // state.Total -= payload.price * payload.quantity;
      //   state.quantity--;
      state.Total = calcTotal(state.cartItems);

      state.quantity = calcQty(state.cartItems);
      Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
    },
    ADD_QUANTITY: (state, { payload }) => {
      state.cartItems.map((item) => {
        if (item.id === payload.id) {
          item.quantity++;
          //   state.Total += payload.price;
          //   state.quantity++;
          state.Total = calcTotal(state.cartItems);
          
          state.quantity = calcQty(state.cartItems);
          Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
        }
      });
    },
    REMOVE_QUANTITY: (state, { payload }) => {
      state.cartItems.map((item) => {
        if (item.quantity > 1) {
          if (item.id === payload.id) {
            item.quantity--;
            // state.Total -= payload.price;
            // state.quantity--;
            state.Total = calcTotal(state.cartItems);
            state.quantity = calcQty(state.cartItems);
            Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
          }
        }
      });
    },
  },
});

export const { ADD_TO_CART, REMOVE_FROM_CART, ADD_QUANTITY, REMOVE_QUANTITY } =
  AddToCartSlice.actions;
export default AddToCartSlice.reducer;
