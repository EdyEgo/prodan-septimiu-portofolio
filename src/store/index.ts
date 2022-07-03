import { configureStore } from "@reduxjs/toolkit";
import desiredComponentReducer from "./desiredComponent";

export const store = configureStore({
  reducer: {
    desiredComponent: desiredComponentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
