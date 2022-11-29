import { createSlice } from '@reduxjs/toolkit';

import { createProductIdWithOptionValues, createDefaultOptionValues } from 'js';

const findMatchingProductIndex = (idToCheck, products) =>
  products.findIndex(({ id }) => id === idToCheck);

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartProduct: {
      reducer(state, { payload }) {
        const { products } = state;

        // Looking for product matching ID with options
        const matchedProductIndex = findMatchingProductIndex(
          payload.id,
          products
        );

        matchedProductIndex
          ? state.products.splice(matchedProductIndex, 1)
          : state.products.push(payload);
      },
      prepare(payload) {
        // If we update our product cart from PLP, then we have to set default options
        if (!payload.optionValues) {
          const { attributes } = payload;

          const optionValues = createDefaultOptionValues(attributes);

          payload = { ...payload, optionValues: { ...optionValues } };
        }

        // Setting unique id for our product
        const { optionValues } = payload;

        const optionValuesArray = Object.values(optionValues);
        payload.id = createProductIdWithOptionValues(
          payload.id,
          optionValuesArray
        );

        // Setting default quantity 1 for our cart product
        return { payload: { ...payload, quantity: 1 } };
      },
    },
    clearCart: state => {
      state.products = [];
    },
    incrementProductQuantityById: (state, { payload }) => {
      const { products } = state;

      const matchedProductIndex = findMatchingProductIndex(
        payload.id,
        products
      );
      const matchedProduct = products[matchedProductIndex];

      matchedProduct.quantity += 1;
    },
    decrementProductQuantityById: (state, { payload }) => {
      const { products } = state;

      const matchedProductIndex = findMatchingProductIndex(
        payload.id,
        products
      );
      const matchedProduct = products[matchedProductIndex];

      matchedProduct.quantity <= 1
        ? products.splice(matchedProductIndex, 1)
        : (matchedProduct.quantity -= 1);
    },
  },
});

export const {
  addCartProduct,
  clearCart,
  incrementProductQuantityById,
  decrementProductQuantityById,
} = cartSlice.actions;
