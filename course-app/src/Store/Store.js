import { configureStore } from "@reduxjs/toolkit";
import childReducer from "./ChildReducer";
import loginReducer from "./LoginReducer";

const store = configureStore({
  reducer: {
    child: childReducer,
    login: loginReducer,
  },
});

export default store;
