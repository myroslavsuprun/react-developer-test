import { Component } from 'react';
import { createPortal } from 'react-dom';

import { LoaderStyled, LoaderWrapper } from './Loader.styled';

const loaderRoot = document.getElementById('loader-root');

class Loader extends Component {
  render() {
    const element = (
      <LoaderWrapper>
        <LoaderStyled />
      </LoaderWrapper>
    );

    return createPortal(element, loaderRoot);
  }
}

export default Loader;
