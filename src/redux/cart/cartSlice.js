import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartProduct: (state, { payload }) => {
      state.products = payload;
    },
  },
});

export const { addCartProduct } = cartSlice.actions;
