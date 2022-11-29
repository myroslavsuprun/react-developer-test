import { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  OptionBtnWrapper,
  OptionTitle,
  OptionTextBtn,
  OptionSwatchBtn,
} from './ProductOptions.styled';

import { createOptionIdState } from 'js';

class ProductOptions extends PureComponent {
  handleOptionClick = (name, id) => {
    const { activeOptionBtns, handleOptionAddition } = this.props;
    const stateOptionId = activeOptionBtns[createOptionIdState(name)];

    if (id === stateOptionId) {
      return;
    }

    handleOptionAddition({ [createOptionIdState(name)]: id });
  };

  render() {
    const { attributes, activeOptionBtns } = this.props;

    return (
      <>
        {attributes.map(({ id, name, type, items }) => (
          <Fragment key={id}>
            <OptionTitle>{name}</OptionTitle>
            <OptionBtnWrapper type={type} marginB={24}>
              {items.map(({ displayValue, id, value }) => {
                const activeOptionBtn =
                  activeOptionBtns[createOptionIdState(name)];

                const ifActive = id === activeOptionBtn;

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
