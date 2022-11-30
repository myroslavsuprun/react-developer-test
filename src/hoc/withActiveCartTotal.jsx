import { PureComponent } from 'react';
import memoize from 'memoize-one';

export function withActiveCartTotal(Component) {
  return class extends PureComponent {
    memoizedActivePrice = memoize((prices, activeCurrency) =>
      prices.find(({ currency }) => currency.symbol === activeCurrency.symbol)
    );

    render() {
      const { activeCurrency, cartTotal, ...otherProps } = this.props;
      const { prices = [], totalQuantity = 0 } = cartTotal;
      // Setting memoized currency, so it wouldn't iterate on each render
      const memoizedCartTotal = this.memoizedActivePrice(
        prices,
        activeCurrency
      );

      const activeCartTotal = { ...memoizedCartTotal, totalQuantity };

      return <Component activeCartTotal={activeCartTotal} {...otherProps} />;
    }
  };
}
