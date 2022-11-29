import { createSlice } from '@reduxjs/toolkit';

import { createProductIdWithOptionValues, createDefaultOptionValues } from 'js';

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

        // Looking for products with the same ID
        const matchedProductsIndex = products.reduce((acc, { id }, index) => {
          if (id === payload.id) {
            return [...acc, index];
          }

          return [...acc];
        }, []);

        if (matchedProductsIndex.length >= 1) {
          for (const index of matchedProductsIndex) {
            const { optionValues } = products[index];
            const { optionValues: payloadOptionValues } = payload;
            const optionValuesKeys = Object.keys(optionValues);

            const ifOptionsSame = optionValuesKeys.every(
              key => optionValues[key] === payloadOptionValues[key]
            );

            if (ifOptionsSame) {
              state.products.splice(index, 1);
              return;
            }
          }
        }

        state.products.push(payload);
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

      const matchedProductIndex = products.findIndex(
        ({ id }) => payload === id
      );

      products[matchedProductIndex].quantity += 1;
    },
    decrementProductQuantityById: (state, { payload }) => {
      const { products } = state;

      const matchedProductIndex = products.findIndex(
        ({ id }) => payload === id
      );
      const matchedProduct = products[matchedProductIndex];

      if (matchedProduct.quantity <= 1) {
        products.splice(matchedProductIndex, 1);
        return;
      }

      matchedProduct.quantity -= 1;
    },
  },
});

export const {
  addCartProduct,
  clearCart,
  incrementProductQuantityById,
  decrementProductQuantityById,
} = cartSlice.actions;
