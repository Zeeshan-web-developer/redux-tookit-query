import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brandinfo: null,
  isFetching: false,
  isError: false,
};

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    getBrandSettings: (state) => {
      state.isFetching = true;
    },

    getBrandSettingsSuccess: (state, action) => {
      state.isFetching = false;
      state.brandinfo = action.payload;
    },
    getBrandSettingsFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export const {
  getBrandSettings,
  getBrandSettingsSuccess,
  getBrandSettingsFailure,
} = brandSlice.actions;

export default brandSlice.reducer;
