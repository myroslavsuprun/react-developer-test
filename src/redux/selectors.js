import { activeCurrencySlice } from './currencies/activeCurrencySlice';
import { cartSlice } from './cart/cartSlice';
import { cartTotalSlice } from './cartTotal/cartTotalSlice';

export const selectActiveCurrency = state =>
  state[activeCurrencySlice.name].activeCurrency;

export const selectCartProducts = state => state[cartSlice.name].products;

export const selectCartTotal = state => state[cartTotalSlice.name].cartTotal;
