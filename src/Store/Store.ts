// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./adminSlice";

const store = configureStore({
  reducer: {
    admin: adminReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
