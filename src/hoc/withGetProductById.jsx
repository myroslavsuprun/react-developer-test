import { useGetProductByIdQuery } from 'redux/products/productsSlice';
import { useParams } from 'react-router-dom';

export const withGetProductById = Component => {
  return function (props) {
    const { productId } = useParams();
    const getProductByIdStatus = useGetProductByIdQuery(productId);

    return <Component getProductByIdStatus={getProductByIdStatus} {...props} />;
  };
};
