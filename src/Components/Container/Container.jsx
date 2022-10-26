import React, { Component } from 'react';

import { DivContainer } from './Container.styled';

class Container extends Component {
  render() {
    return <DivContainer>{this.props.children}</DivContainer>;
  }
}

export default Container;
