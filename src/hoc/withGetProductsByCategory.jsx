import { useGetProductsByCategoryQuery } from 'redux/products/productsSlice';
import { useParams } from 'react-router-dom';

export const withGetProductsByCategory = Component => {
  return function (props) {
    const { categoryId } = useParams();
    const getProductsByCategoryStatus =
      useGetProductsByCategoryQuery(categoryId);

    return (
      <Component
        getProductsByCategoryStatus={getProductsByCategoryStatus}
        {...props}
      />
    );
  };
};
