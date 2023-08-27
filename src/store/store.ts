import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { spendingApi } from "../services/spendings";

export const store = configureStore({
  reducer: {
    [spendingApi.reducerPath]: spendingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spendingApi.middleware),
});

setupListeners(store.dispatch);
