import { createSlice } from '@reduxjs/toolkit';
import { addCartProduct, removeCartProducts } from 'redux/cart/cartSlice';

import { taxRate } from 'constants/taxRate';

const initialState = {
  cartTotal: {
    totalQuantity: 0,
    prices: [],
  },
};

const countTotalPrices = (statePrices, payloadPrices, isIncrement = true) => {
  return statePrices.map(({ totalAmount, taxPay }, index) => {
    const currentPayloadPrice = payloadPrices[index];
    const { amount, currency } = currentPayloadPrice;

    if (isIncrement) {
      totalAmount += amount;
      taxPay += amount * taxRate;
    } else {
      totalAmount -= amount;
      taxPay -= amount * taxRate;
    }

    return {
      currency,
      totalAmount,
      taxPay,
    };
  });
};

export const cartTotalSlice = createSlice({
  name: 'cartTotal',
  initialState,
  reducers: {
    updateCartTotalIfRemoved: (state, { payload }) => {
      const { cartTotal } = state;
      const { quantity = 1, prices } = payload;

      cartTotal.totalQuantity -= quantity;

      const isIncrement = false;

      cartTotal.prices = countTotalPrices(
        cartTotal.prices,
        prices,
        isIncrement
      );
    },
    updateCartTotalIfAdded: (state, { payload }) => {
      const { cartTotal } = state;
      const { quantity = 1, prices } = payload;

      cartTotal.totalQuantity += quantity;

      cartTotal.prices = countTotalPrices(cartTotal.prices, prices);
    },
  },
  extraReducers: builder => {
    builder.addCase(removeCartProducts, () => {
      return initialState;
    });
    builder.addCase(addCartProduct, (state, { payload }) => {
      const { cartTotal } = state;
      const { prices, quantity = 1 } = payload;

      if (cartTotal.totalQuantity === 0) {
        cartTotal.prices = prices.map(({ amount, currency }) => {
          const totalAmount = amount;
          const taxPay = totalAmount * taxRate;

          return {
            currency,
            totalAmount: totalAmount,
            taxPay: taxPay,
          };
        });
      } else {
        cartTotal.prices = countTotalPrices(cartTotal.prices, prices);
      }

      cartTotal.totalQuantity += quantity;
    });
  },
});

export const { updateCartTotalIfRemoved, updateCartTotalIfAdded } =
  cartTotalSlice.actions;
