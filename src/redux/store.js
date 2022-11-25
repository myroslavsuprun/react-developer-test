import { configureStore } from '@reduxjs/toolkit';
import { categoryApi } from './categories/categorySlice';

export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    categoryApi.middleware,
  ],
});
