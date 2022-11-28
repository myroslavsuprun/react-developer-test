import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartProduct: (state, { payload }) => {
      state.products.push(payload);
    },
    clearCart: state => {
      state.products = [];
    },
  },
});

export const { addCartProduct, clearCart } = cartSlice.actions;
