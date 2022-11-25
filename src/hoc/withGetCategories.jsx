import { useGetCategoriesQuery } from 'redux/categories/categorySlice';

export function withGetCategories(Component) {
  return function (props) {
    const categories = useGetCategoriesQuery();
    console.log(categories);

    return <Component {...props} />;
  };
}
