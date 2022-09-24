import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "gyuguhuhnjnjnjknkkjnknkjnknn",
  isFetching: false,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getToken: (state) => {
      state.isFetching = true;
    },
  },
});

export const { getToken } = authSlice.actions;

export default authSlice.reducer;
