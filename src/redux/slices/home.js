import { createSlice } from "@reduxjs/toolkit";
import { getHomesData } from "../actions/home";

const initialState = {
  items: [],
  current: null,
  error: null,
  isLoading: false,
  pageNo: 1,
  pageSize: 100,
};

const homeSlice = createSlice({
  name: "home",

  initialState,

  extraReducers: {
    [getHomesData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload.items;
      state.error = null;
    },

    [getHomesData.pending]: (state) => {
      state.isLoading = true;
    },

    [getHomesData.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default homeSlice.reducer;
