import { createSlice } from '@reduxjs/toolkit';
import { productsApi } from 'redux/products/productsSlice';

const initialState = {
  activeCurrency: {},
};

export const activeCurrencySlice = createSlice({
  name: 'activeCurrency',
  initialState,

  reducers: {
    setActiveCurrency: (state, { payload }) => {
      state.activeCurrency = payload;
    },
  },

  extraReducers: builder => {
    builder.addMatcher(
      productsApi.endpoints.getCurrencies.matchFulfilled,
      (state, { payload }) => {
        const firstCurrency = payload.currencies[0];
        const currencyInState = state.activeCurrency.label;

        if (firstCurrency.label === currencyInState) {
          return;
        }

        const ifCurrencyInPayload = payload.currencies.find(
          ({ label }) => label === currencyInState
        );

        if (ifCurrencyInPayload) {
          return;
        }

        state.activeCurrency = firstCurrency;
      }
    );
  },
});

export const { setActiveCurrency } = activeCurrencySlice.actions;
