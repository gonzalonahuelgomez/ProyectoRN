import { configureStore } from "@reduxjs/toolkit";
import lookReducer from "./look.slice";

export const store = configureStore({
  reducer: {
    look: lookReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
