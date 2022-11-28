import { activeCurrencySlice } from './currencies/activeCurrencySlice';
import { cartSlice } from './cart/cartSlice';

export const selectActiveCurrency = state =>
  state[activeCurrencySlice.name].activeCurrency;

export const selectCartProducts = state => state[cartSlice.name].products;
