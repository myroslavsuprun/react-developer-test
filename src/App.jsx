import { Header } from 'Components/Header';
import ProductCardSet from 'Components/ProductCardSet';
// import ProductPage from 'Components/ProductPage';
// import CartPage from 'Components/CartPage';

import React, { Component } from 'react';

class App extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>404 Error</h1>;
    }

    return (
      <>
        <Header />
        <ProductCardSet />
        {/* <ProductPage /> */}
        {/* <CartPage /> */}
      </>
    );
  }
}

export default App;
