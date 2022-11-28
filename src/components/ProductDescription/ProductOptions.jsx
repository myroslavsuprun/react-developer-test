import { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  OptionBtnWrapper,
  OptionTitle,
  OptionTextBtn,
  OptionSwatchBtn,
} from './ProductOptions.styled';

const createOptionIdState = name => {
  return `option${name}Id`;
};

class ProductOptions extends PureComponent {
  state = {};

  componentDidMount() {
    const { attributes } = this.props;

    if (!attributes) {
      return;
    }

    this.setState(() => {
      const defaultAttributeValues = attributes.reduce(
        (acc, { name, items }) => {
          const defaultAttribute = { [createOptionIdState(name)]: items[0].id };

          return { ...acc, ...defaultAttribute };
        },
        {}
      );

      return defaultAttributeValues;
    });
  }

  handleOptionClick = (name, id) => {
    const stateOptionId = this.state[createOptionIdState(name)];

    if (id === stateOptionId) {
      return;
    }

    this.setState(() => ({
      [createOptionIdState(name)]: id,
    }));
  };

  render() {
    const { attributes, type: btnStyleType } = this.props;

    return (
      <>
        {attributes.map(({ id, name, type, items }) => (
          <Fragment key={id}>
            <OptionTitle>{name}</OptionTitle>
            <OptionBtnWrapper type={type} marginB={btnStyleType ? 16 : 24}>
              {items.map(({ displayValue, id, value }) => {
                const stateOptionId = this.state[createOptionIdState(name)];

                const ifActive = id === stateOptionId;

                switch (type) {
                  case 'text':
                    return (
                      <OptionTextBtn
                        onClick={() => this.handleOptionClick(name, id)}
                        key={id}
                        active={ifActive}
                        type="button"
                      >
                        {value}
                      </OptionTextBtn>
                    );
                  case 'swatch':
                    return (
                      <OptionSwatchBtn
                        onClick={() => this.handleOptionClick(name, id)}
                        key={id}
                        active={ifActive}
                        bgColor={displayValue}
                        area-label={value}
                        type="button"
                      />
                    );
                  default:
                    return null;
                }
              })}
            </OptionBtnWrapper>
          </Fragment>
        ))}
      </>
    );
  }
}

ProductOptions.propTypes = {
  type: PropTypes.oneOf(['cartPage', 'cartOverlay']),
  attributes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['swatch', 'text']).isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          displayValue: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired,
        })
      ),
    })
  ),
};

export default ProductOptions;
