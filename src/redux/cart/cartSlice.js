import { createSlice } from '@reduxjs/toolkit';

import { createOptionIdState } from 'js';

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
        // If we update our product cart from PLP, then we have to set default options for our products
        if (!payload.optionValues) {
          const { attributes } = payload;

          const optionValues = attributes.reduce((acc, { name, items }) => {
            return { ...acc, [createOptionIdState(name)]: items[0].id };
          }, {});

          return {
            payload: { ...payload, optionValues: { ...optionValues } },
          };
        }

        return { payload };
      },
    },
    clearCart: state => {
      state.products = [];
    },
  },
});

export const { addCartProduct, clearCart } = cartSlice.actions;
