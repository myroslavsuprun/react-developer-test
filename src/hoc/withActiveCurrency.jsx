import { PureComponent } from 'react';
import memoize from 'memoize-one';

export const withActiveCurrency = Component => {
  return class extends PureComponent {
    memoizedActivePrice = memoize((prices, activeCurrency) =>
      prices.find(({ currency }) => currency.symbol === activeCurrency.symbol)
    );

    render() {
      const { activeCurrency, ...otherProps } = this.props;
      const { prices } = this.props?.products ?? this.props?.product;

      // Setting memoized currency, so it wouldn't iterate on each render
      const memoizedCurrency = this.memoizedActivePrice(prices, activeCurrency);

      return <Component activeCurrency={memoizedCurrency} {...otherProps} />;
    }
  };
};
