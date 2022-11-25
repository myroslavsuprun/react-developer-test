import { Component } from 'react';
import PropTypes from 'prop-types';

import {
  ErrorMessage,
  ErrorName,
  ErrorWrapper,
  ErrorLink,
} from './Error.styled';

const graphqlEndpointLink =
  'https://github.com/scandiweb/junior-react-endpoint';

class Error extends Component {
  render() {
    const { error } = this.props;
    const { name } = error;

    return (
      <ErrorWrapper>
        <ErrorName>{name}</ErrorName>
        <ErrorMessage>
          Most probably you haven't launched the GraphQL server
        </ErrorMessage>
        <ErrorLink
          href={graphqlEndpointLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          GraphQL endpoint link
        </ErrorLink>
      </ErrorWrapper>
    );
  }
}

Error.propTypes = {
  error: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

export default Error;
