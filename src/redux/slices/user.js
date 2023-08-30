import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "../actions/users";

const intial = {
  isLoading: false,
  data: null,
  items: [],
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: intial,
  reducers: {
    setUser: (state, { payload }) => {
      state.data = payload;
    },
  },
  extraReducers: {
    [userLogin.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    },

    [userLogin.pending]: (state) => {
      state.isLoading = true;
    },

    [userLogin.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
