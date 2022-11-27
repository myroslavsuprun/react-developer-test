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
import { cartSlice } from './cart/cartSlice';

const persistCurrencyConfig = { key: 'activeCurrency', storage };
const persistCartConfig = { key: 'cartProducts', storage };

const persistedActiveCurrencyReducer = persistReducer(
  persistCurrencyConfig,
  activeCurrencySlice.reducer
);
const persistedCartReducer = persistReducer(
  persistCartConfig,
  cartSlice.reducer
);

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [activeCurrencySlice.name]: persistedActiveCurrencyReducer,
    [cartSlice.name]: persistedCartReducer,
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
