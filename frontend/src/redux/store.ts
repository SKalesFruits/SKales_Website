import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../slices/home.slice";
import shopReducer from "../slices/shop.slice";
import cartReducer from "../slices/cart.slice";

const store = configureStore({
  reducer: {
    home: homeReducer,
    shop: shopReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
