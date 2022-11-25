// Components
import { Component, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout, Loader, Error } from 'components';

import PropTypes from 'prop-types';

// hoc
import { withGetCategories } from 'hoc';

// constants
import ROUTES from 'constants/routes';

const Cart = lazy(() => import('pages/Cart/Cart'));
const Product = lazy(() => import('pages/Product/Product'));
const ProductList = lazy(() => import('pages/ProductList/ProductList'));

class App extends Component {
  render() {
    const { categoriesQueryStatus } = this.props;
    const { data, isLoading, isSuccess, isError, error } =
      categoriesQueryStatus;

    if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      return <Error error={error} />;
    }

    if (isSuccess) {
      const { categories } = data;
      const generalProductsCategory = categories[0].name;
      return (
        <>
          <Routes>
            <Route past={ROUTES.home} element={<SharedLayout />}>
              <Route
                index
                element={<Navigate to={generalProductsCategory} />}
              />
              <Route path={ROUTES.category} element={<ProductList />} />
              <Route path={ROUTES.cart} element={<Cart />} />
              <Route path={ROUTES.product} element={<Product />} />
            </Route>
          </Routes>
        </>
      );
    }
  }
}

App.propTypes = {
  categoriesQueryStatus: PropTypes.object.isRequired,
};

export default withGetCategories(App);
