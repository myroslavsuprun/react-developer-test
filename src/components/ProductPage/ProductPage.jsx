import React, { Component } from 'react';

import {
  ContainerPDP,
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
} from './ProductPage.styled';

class ProductPage extends Component {
  render() {
    // const { name, description, gallery, prices, brand, attributes } =
    //   this.props;
    return (
      <main>
        <ContainerPDP>
          <SideImagesList>
            <li>
              <SideImage src="https://picsum.photos/200/300" alt="" />
            </li>
            <li>
              <SideImage src="https://picsum.photos/200/300" alt="" />
            </li>
            <li>
              <SideImage src="https://picsum.photos/200/300" alt="" />
            </li>
          </SideImagesList>
          <DescriptionSection>
            <div>
              <ActiveImage src="https://picsum.photos/1000/1000" alt="" />
            </div>
            <div>
              <ProductTitle marginB={16}>Apolo</ProductTitle>
              <ProductTitle as="p" marginB={42}>
                Brand
              </ProductTitle>
              <div>
                <OptionTitle>Name</OptionTitle>
                <OptionBtnWrapper gap={12} marginB={24}>
                  <OptionBtn large={true}>16</OptionBtn>
                  <OptionBtn large={true} active={true}>
                    20
                  </OptionBtn>
                </OptionBtnWrapper>
              </div>
              <OptionTitle>Bla</OptionTitle>
              <OptionBtnWrapper gap={8}>
                <OptionBtn large={false} bColor={`blue`}></OptionBtn>
                <OptionBtn
                  active={true}
                  large={false}
                  bColor={`lightgreen`}
                ></OptionBtn>
                <OptionBtn large={false} bColor={`lightblue`}></OptionBtn>
              </OptionBtnWrapper>
              <ProductPriceTitle>Price:</ProductPriceTitle>
              <ProductPrice>$500.00</ProductPrice>
              <BtnAddition>Add to cart</BtnAddition>
              <ProductDescription>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                autem neque asperiores quae modi earum esse quas officia eos
                aspernatur.
              </ProductDescription>
            </div>
          </DescriptionSection>
        </ContainerPDP>
      </main>
    );
  }
}

export default ProductPage;
