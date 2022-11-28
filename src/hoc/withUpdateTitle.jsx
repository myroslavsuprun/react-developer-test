import { shopTitle } from 'constants/shopTitle';
import { Component } from 'react';

export const withUpdateTitle = (WrappedComponent, title) => {
  return class extends Component {
    defaultValues = {
      title: 'Home',
    };

    componentDidMount() {
      document.title = `${shopTitle} | ${title}`;
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
