import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShopType } from "../types/shop.types";

const initialState: ShopType = {
  currentFruitTypeFilter: "",
  popularityFilterActive: false,
  priceHighToLowFilterActive: false,
  priceLowToHighFilterActive: false,
  reviewsFilterActive: false,
  filterPanelActive: true,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setFilterPanelActive: (state, action: PayloadAction<boolean>) => {
      state.filterPanelActive = action.payload;
    },
    setCurrentFruitTypeFilter: (state, action: PayloadAction<string>) => {
      state.currentFruitTypeFilter = action.payload;
    },
    setPopularityFilter: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.popularityFilterActive = true;
        state.priceHighToLowFilterActive = false;
        state.priceLowToHighFilterActive = false;
        state.reviewsFilterActive = false;
      } else {
        state.popularityFilterActive = false;
      }
    },
    setPriceHightToLowFilter: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.priceHighToLowFilterActive = true;
        state.popularityFilterActive = false;
        state.priceLowToHighFilterActive = false;
        state.reviewsFilterActive = false;
      } else {
        state.priceHighToLowFilterActive = false;
      }
    },
    setPriceLowToHighFilter: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.priceLowToHighFilterActive = true;
        state.popularityFilterActive = false;
        state.priceHighToLowFilterActive = false;
        state.reviewsFilterActive = false;
      } else {
        state.priceLowToHighFilterActive = false;
      }
    },
    setReviewsFilter: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.reviewsFilterActive = true;
        state.popularityFilterActive = false;
        state.priceHighToLowFilterActive = false;
        state.priceLowToHighFilterActive = false;
      } else {
        state.reviewsFilterActive = false;
      }
    },
  },
});

export const {
  setCurrentFruitTypeFilter,
  setPopularityFilter,
  setPriceHightToLowFilter,
  setPriceLowToHighFilter,
  setReviewsFilter,
  setFilterPanelActive,
} = shopSlice.actions;
export default shopSlice.reducer;
