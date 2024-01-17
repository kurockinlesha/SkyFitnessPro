import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../store/slices/userSlice";

export const store = configureStore({
  reducer: {
    user: useReducer,
  },
});
