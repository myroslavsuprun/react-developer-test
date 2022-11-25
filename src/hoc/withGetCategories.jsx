import { useGetCategoriesQuery } from 'redux/products/productsSlice';

export function withGetCategories(Component) {
  return function (props) {
    const categoriesQueryStatus = useGetCategoriesQuery();

    return (
      <Component categoriesQueryStatus={categoriesQueryStatus} {...props} />
    );
  };
}
