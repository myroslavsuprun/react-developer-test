import { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import {
  ProductSubtitleOption,
  OptionBtnWrapper,
  OptionTextBtn,
  OptionSwatchBtn,
} from './CartProduct.styled';

import { createOptionIdState } from 'js';

class CartProductOptions extends PureComponent {
  render() {
    const { attributes, activeOptionValues } = this.props;

    return (
      <>
        {attributes.map(({ id, name, type, items }) => (
          <Fragment key={id}>
            <ProductSubtitleOption>{name}</ProductSubtitleOption>
            <OptionBtnWrapper gap={8} marginBot={8} type={type}>
              {items.map(({ displayValue, id, value }) => {
                const activeOptionBtn =
                  activeOptionValues[createOptionIdState(name)];

                const ifActive = id === activeOptionBtn;

                switch (type) {
                  case 'text':
                    return (
                      <OptionTextBtn key={id} active={ifActive} type="button">
                        {value}
                      </OptionTextBtn>
                    );
                  case 'swatch':
                    return (
                      <OptionSwatchBtn
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

CartProductOptions.propTypes = {
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

export default CartProductOptions;
