import { createSlice } from '@reduxjs/toolkit';

import { createDefaultOptionValues, createUniqueIdWithOptionValues } from 'js';

const findMatchingProductIndex = (idToCheck, products) =>
  products.findIndex(({ id }) => id === idToCheck);

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cartProducts',
  initialState,
  reducers: {
    addCartProduct: {
      reducer(state, { payload }) {
        state.products.push(payload);
      },
      prepare(payload) {
        // If we update our product cart from PLP, then we have to set default options and add the to payload;
        if (!payload.optionValues) {
          const { attributes } = payload;

          const optionValues = createDefaultOptionValues(attributes);

          payload = { ...payload, optionValues: { ...optionValues } };
        }

        const { optionValues, id } = payload;

        payload.id = createUniqueIdWithOptionValues({ optionValues, id });

        // Setting default quantity 1 for our new cart product
        return { payload: { ...payload, quantity: 1 } };
      },
    },
    removeCartProductById: (state, { payload }) => {
      const { products } = state;

      // Looking for product matching ID with options
      const matchedProductIndex = findMatchingProductIndex(
        payload.id,
        products
      );

      state.products.splice(matchedProductIndex, 1);
    },
    removeCartProducts: state => {
      state.products = [];
    },
    incrementProductQuantityById: (state, { payload }) => {
      const { products } = state;

      const matchedProductIndex = findMatchingProductIndex(payload, products);
      const matchedProduct = products[matchedProductIndex];

      matchedProduct.quantity += 1;
    },
    decrementProductQuantityById: (state, { payload }) => {
      const { products } = state;

      const matchedProductIndex = findMatchingProductIndex(payload, products);
      const matchedProduct = products[matchedProductIndex];

      matchedProduct.quantity <= 1
        ? products.splice(matchedProductIndex, 1)
        : (matchedProduct.quantity -= 1);
    },
  },
});

export const {
  addCartProduct,
  removeCartProductById,
  removeCartProducts,
  incrementProductQuantityById,
  decrementProductQuantityById,
} = cartSlice.actions;
