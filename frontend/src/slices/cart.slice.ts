import { CartItems } from "./../types/cart.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartType } from "../types/cart.types";

const initialState: CartType = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<CartItems>) => {
      const existingItem = state.cartItems.find(
        (item) => item.product_id === action.payload.product_id
      );

      if (existingItem) {
        existingItem.product_qty += action.payload.product_qty;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    resetCartItems: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.product_id !== action.payload
      );
    },
  },
});

export const { setCartItems, resetCartItems, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
