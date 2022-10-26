import Header from 'Components/Header/Header';
// import ProductCardSet from 'Components/ProductCardSet/ProductCardSet';
// import ProductPage from 'Components/ProductPage/ProductPage';
import CartOverlay from 'Components/CartOverlay/CartOverlay';
import CartPage from 'Components/CartPage/CartPage';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        {/* <ProductCardSet /> */}
        {/* <ProductPage /> */}
        <CartOverlay />
        <CartPage />
      </>
    );
  }
}

export default App;
