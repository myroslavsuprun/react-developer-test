import memoize from 'memoize-one';

export const memoizeIfInCardValue = memoize((cartProducts, id) =>
  cartProducts.some(cartProduct => cartProduct.id === id)
);

export const memoizeActivePrice = memoize((prices, activeCurrency) =>
  prices.find(({ currency }) => currency.symbol === activeCurrency.symbol)
);
