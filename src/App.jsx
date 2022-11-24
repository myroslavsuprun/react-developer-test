// Components
import { Component, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components';

// constants
import ROUTES from 'constants/routes';

const Cart = lazy(() => import('pages/Cart/Cart'));
const Product = lazy(() => import('pages/Product/Product'));
const ProductList = lazy(() => import('pages/ProductList/ProductList'));

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route past={ROUTES.home} element={<SharedLayout />}>
            {/* path={ROUTES.category} */}
            <Route index element={<ProductList />} />
            <Route path={ROUTES.cart} element={<Cart />} />
            <Route path={ROUTES.product} element={<Product />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
