import { activeCurrencySlice } from './currencies/activeCurrencySlice';

export const selectActiveCurrency = state =>
  state[activeCurrencySlice.name].activeCurrency;
