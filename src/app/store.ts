import { configureStore } from "@reduxjs/toolkit";
import deployReducer from "../features/deploySlice";

export const store = configureStore({
  reducer: {  deploy: deployReducer, },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
