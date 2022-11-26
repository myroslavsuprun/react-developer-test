import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// hoc
import { withGetProductById } from 'hoc';

// components
import { Markup } from 'interweave';
import { Error, Loader } from 'components';
import {
  GridContainer,
  SideImagesList,
  SideImage,
  DescriptionSection,
  ActiveImage,
  ProductTitle,
  OptionTitle,
  OptionBtnWrapper,
  OptionBtn,
  ProductPriceTitle,
  ProductPrice,
  BtnAddition,
  ProductDescription,
} from './Product.styled';

import { numberWithDividers } from 'js';

class Product extends Component {
  render() {
    const { getProductByIdStatus } = this.props;
    const { isSuccess, isError, isLoading, data, error } = getProductByIdStatus;

    if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      return <Error error={error} />;
    }

    if (isSuccess) {
      const { product } = data;
      const { gallery, name, brand, prices, description, inStock, attributes } =
        product;

      const {
        amount,
        currency: { symbol },
      } = prices[0];

      return (
        <GridContainer>
          <SideImagesList>
            {gallery.map((image, index) => {
              // Omitting activa image
              if (index === 0) {
                return <Fragment key={index}></Fragment>;
              }
              return (
                <li key={index}>
                  <SideImage src={image} alt={name} />
                </li>
              );
            })}
          </SideImagesList>
          <DescriptionSection>
            <div>
              <ActiveImage src={gallery[0]} alt={name} />
            </div>
            <div>
              <ProductTitle marginB={16}>{name}</ProductTitle>
              <ProductTitle as="p" marginB={42}>
                {brand}
              </ProductTitle>
              {attributes.map(({ id, name, type, items }) => (
                <Fragment key={id}>
                  <OptionTitle>{name}</OptionTitle>
                  <OptionBtnWrapper gap={12} marginB={24}>
                    {items.map(({ displayValue, id, value }, index) => {
                      let active = false;
                      let bgColor = '';

                      // Setting background-color for swatch type
                      if (type === 'swatch') {
                        bgColor = value;
                      }

                      // Setting active image
                      if (index === 0) {
                        active = true;
                      }
                      return (
                        <Fragment key={id}>
                          <OptionBtn
                            active={active}
                            type={type}
                            bgColor={bgColor}
                          >
                            {type === 'text' ? displayValue : null}
                          </OptionBtn>
                        </Fragment>
                      );
                    })}
                  </OptionBtnWrapper>
                </Fragment>
              ))}
              <ProductPriceTitle>Price:</ProductPriceTitle>
              <ProductPrice>
                {symbol}
                {numberWithDividers(amount)}
              </ProductPrice>
              <BtnAddition disapled={!inStock} inStock={inStock}>
                {!inStock ? 'Add to cart' : 'Out of stock'}
              </BtnAddition>
              <ProductDescription>
                <Markup content={description} />
              </ProductDescription>
            </div>
          </DescriptionSection>
        </GridContainer>
      );
    }
  }
}

Product.propTypes = {
  getProductByIdStatus: PropTypes.shape({
    data: PropTypes.shape({
      product: PropTypes.shape({
        attributes: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            type: PropTypes.oneOf(['swatch', 'text']).isRequired,
            items: PropTypes.arrayOf(
              PropTypes.shape({
                displayValue: PropTypes.string.isRequired,
                value: PropTypes.string.isRequired,
                id: PropTypes.string.isRequired,
              })
            ),
          })
        ),
        brand: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        gallery: PropTypes.array.isRequired,
        inStock: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        prices: PropTypes.arrayOf(
          PropTypes.shape({
            amount: PropTypes.number.isRequired,
            currency: PropTypes.shape({
              symbol: PropTypes.string.isRequired,
            }),
          })
        ),
      }),
    }),
  }),
};

export default withGetProductById(Product);
