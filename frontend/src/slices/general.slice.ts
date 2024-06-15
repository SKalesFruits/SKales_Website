import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GeneralState } from "../types/general.types";

const initialState: GeneralState = {
  loading: false,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = generalSlice.actions;

export default generalSlice.reducer;
