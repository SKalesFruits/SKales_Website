import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slices/login.slice";
import generalReducer from "../slices/general.slice";

export const store = configureStore({
  reducer: {
    user: loginReducer,
    general: generalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
