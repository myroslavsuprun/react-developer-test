import { Component } from 'react';

import { LoaderStyled, LoaderWrapper } from './Loader.styled';

class Loader extends Component {
  render() {
    return (
      <LoaderWrapper>
        <LoaderStyled />
      </LoaderWrapper>
    );
  }
}

export default Loader;
