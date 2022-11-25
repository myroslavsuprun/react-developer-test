import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './products/productsSlice';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    productsApi.middleware,
  ],
});
