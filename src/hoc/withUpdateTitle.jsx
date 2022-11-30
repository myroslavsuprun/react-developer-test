import { PureComponent } from 'react';
import { shopTitle } from 'constants/shopTitle';

export const withUpdateTitle = (Component, title) => {
  return class extends PureComponent {
    defaultValues = {
      title: 'Home',
    };

    componentDidMount() {
      document.title = `${shopTitle} | ${title}`;
    }

    render() {
      return <Component {...this.props} />;
    }
  };
};
