import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomeType } from "../types/home.types";

const initialState: HomeType = {
  currentIndex: 1,
  menuActive: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    },
    setMenuActive: (state, action: PayloadAction<boolean>) => {
      state.menuActive = action.payload;
    },
  },
});

export const { setCurrentIndex, setMenuActive } = homeSlice.actions;
export default homeSlice.reducer;
