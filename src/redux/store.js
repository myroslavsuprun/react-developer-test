import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage

import { productsApi } from './products/productsSlice';
import { activeCurrencySlice } from './currencies/activeCurrencySlice';

const persistConfig = { key: 'activeCurrency', storage };
const persisterActiveCurrencyReducer = persistReducer(
  persistConfig,
  activeCurrencySlice.reducer
);

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [activeCurrencySlice.name]: persisterActiveCurrencyReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    productsApi.middleware,
  ],
});

export const persistor = persistStore(store);
