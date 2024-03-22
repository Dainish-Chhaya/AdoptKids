// ChildReducer.js
import { createSlice } from "@reduxjs/toolkit";

const childSlice = createSlice({
  name: "child",
  initialState: [],
  reducers: {
    setChildData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setChildData } = childSlice.actions;
export default childSlice.reducer;
