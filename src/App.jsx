// Components
import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'componentss';

// constants
import ROUTES from 'constants/routes';

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route past={ROUTES.home} element={<SharedLayout />}>
            <Route index element={<div>Home</div>} />
            <Route path={ROUTES.category} element={<div>Category route</div>} />
            <Route path={ROUTES.cart} element={<div>Cart Page</div>} />
            <Route path={ROUTES.product} element={<div>Product Page</div>} />
          </Route>
        </Routes>
        {/* <Header /> */}
        {/* <ProductCardSet /> */}
        {/* <ProductPage /> */}
        {/* <CartPage /> */}
      </>
    );
  }
}

export default App;
