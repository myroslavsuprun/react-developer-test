import { useGetCurrenciesQuery } from 'redux/products/productsSlice';

export const withGetCurrencies = Component => {
  return function (props) {
    const getCurrenciesStatus = useGetCurrenciesQuery();
    return <Component getCurrenciesStatus={getCurrenciesStatus} {...props} />;
  };
};
