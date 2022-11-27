import { Component, Fragment } from 'react';
import {
  OptionBtnWrapper,
  OptionTitle,
  OptionTextBtn,
  OptionSwatchBtn,
} from './ProductOptions.styled';

const createOptionId = name => {
  return `option${name}Id`;
};

class ProductOptions extends Component {
  state = {};

  componentDidMount() {
    const { attributes } = this.props;

    if (!attributes) {
      return;
    }

    this.setState(() => {
      const defaultAttributeValues = attributes.reduce(
        (acc, { name, items }) => {
          const defaultAttribute = { [createOptionId(name)]: items[0].id };

          return { ...acc, ...defaultAttribute };
        },
        {}
      );

      return defaultAttributeValues;
    });
  }

  handleOptionClick = (name, id) => {
    const stateOptionId = this.state[createOptionId(name)];

    if (id === stateOptionId) {
      return;
    }

    this.setState(() => ({
      [createOptionId(name)]: id,
    }));
  };

  render() {
    const { attributes } = this.props;

    return (
      <>
        {attributes.map(({ id, name, type, items }) => (
          <Fragment key={id}>
            <OptionTitle>{name}</OptionTitle>
            <OptionBtnWrapper type={type} marginB={24}>
              {items.map(({ displayValue, id, value }) => {
                const stateOptionId = this.state[createOptionId(name)];

                const ifActive = id === stateOptionId;

                switch (type) {
                  case 'text':
                    return (
                      <OptionTextBtn
                        onClick={() => this.handleOptionClick(name, id)}
                        key={id}
                        active={ifActive}
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

export default ProductOptions;
