import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: [],
  reducers: {
    setLoginData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setLoginData } = loginSlice.actions;
export default loginSlice.reducer;
