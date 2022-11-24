import styled from 'styled-components';
import { css } from 'styled-components';

let productStyleType = null;

export const ProductItem = styled.li`
  // Initializing stylign type for our product
  ${props => {
    productStyleType = props.type;
  }}

  display: flex;
  justify-content: space-between;

  ${() => {
    switch (productStyleType) {
      case 'overlay':
        return css`
          align-items: flex-start;

          & + & {
            margin-top: 40px;
          }
        `;
      case 'page':
        return css`
          padding-bottom: 26px;

          & + & {
            padding-top: 26px;
            border-top: 1px solid #e5e5e5;
          }
        `;
      default:
        return;
    }
  }}
`;

export const ProductLeftWrapper = styled.div`
  ${() => {
    switch (productStyleType) {
      case 'overlay':
        return css`
          max-width: 164px;
        `;
      default:
        return;
    }
  }}
`;

export const ProductTitle = styled.h3`
  ${() => {
    switch (productStyleType) {
      case 'overlay':
        return css`
          margin-bottom: 4px;
          font-weight: 300;
          font-size: 16px;
        `;

      case 'page':
        return css`
          font-size: 30px;
          line-height: 0.9;

          ${props => {
            if (props.as === 'p')
              return css`
                margin-bottom: 20px;

                font-weight: 400;
              `;
            else {
              return css`
                margin-bottom: 16px;

                font-weight: 600;
              `;
            }
          }}
        `;
      default:
        return;
    }
  }}
`;

export const ProductPrice = styled.p`
  ${() => {
    switch (productStyleType) {
      case 'overlay':
        return css`
          margin-bottom: 8px;

          font-weight: 500;
          font-size: 16px;
        `;
      case 'page':
        return css`
          margin-bottom: 20px;

          font-weight: 700;
          font-size: 24px;
          line-height: 0.75;
        `;
      default:
        return;
    }
  }}
`;

export const ProductSubtitleOption = styled.p`
  margin-bottom: 8px;

  ${() => {
    switch (productStyleType) {
      case 'overlay':
        return css`
          font-size: 14px;
          line-height: 1.14;
          text-transform: capitalize;
        `;
      case 'page':
        return css`
          font-family: 'Roboto Condensed', sans-serif;
          font-weight: 700;
          line-height: 1;
          text-transform: uppercase;
        `;
      default:
        return;
    }
  }}
`;

export const OptionBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  ${() => {
    switch (productStyleType) {
      case 'overlay':
        return css`
          margin-bottom: 8px;
        `;
      case 'page':
        return css`
          margin-bottom: 16px;
        `;
      default:
        return;
    }
  }}
`;

export const OptionBtn = styled.button`
  cursor: pointer;

  ${props => {
    if (props.large)
      return css`
        background-color: transparent;
        border: 1px solid #1d1f22;

        color: #1d1f22;

        font-family: 'Source Sans Pro', sans-serif;

        ${() => {
          switch (productStyleType) {
            case 'overlay':
              return css`
                padding: 2px 2px;

                min-width: 24px;
                min-height: 24px;

                font-size: 14px;
              `;
            case 'page':
              return css`
                padding: 13px 22px;

                max-width: 63px;
                max-height: 45px;

                font-size: 16px;
                line-height: 1.12;
                letter-spacing: 0.05em;
              `;
            default:
              return;
          }
        }}

        ${() => {
          if (props.active)
            return css`
              background-color: #1d1f22;
              color: #ffffff;
            `;
        }}
      `;
    else
      return css`
        background-color: lightblue;
        border: 1px solid #fff;

        ${() => {
          switch (productStyleType) {
            case 'overlay':
              return css`
                width: 20px;
                height: 20px;
              `;
            case 'page':
              return css`
                width: 35px;
                height: 35px;
              `;
            default:
              return;
          }
        }}

        ${() => {
          if (props.active)
            return css`
              outline: 1px solid #5ece7b;
            `;
        }}
      `;
  }}
`;

export const ProductRightWrapper = styled.div`
  display: flex;
  align-items: center;
  ${() => {
    switch (productStyleType) {
      case 'overlay':
        return css`
          gap: 8px;
        `;
      case 'page':
        return css`
          gap: 24px;
        `;
      default:
        return;
    }
  }}
`;

export const ProductQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  ${() => {
    switch (productStyleType) {
      case 'overlay':
        return css`
          gap: 58px;
        `;
      case 'page':
        return css`
          gap: 72px;
        `;
      default:
        return;
    }
  }}
`;

export const ProductQuantityBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: 1px solid #1d1f22;

  cursor: pointer;

  ${() => {
    switch (productStyleType) {
      case 'overlay':
        return css`
          width: 24px;
          height: 24px;
        `;
      case 'page':
        return css`
          padding: 10px;

          width: 45px;
          height: 45px;
        `;
      default:
        return;
    }
  }}
`;

export const ProductImgWrapper = styled.div`
  position: relative;
`;

export const ProductImg = styled.img`
  object-fit: cover;

  ${() => {
    switch (productStyleType) {
      case 'overlay':
        return css`
          width: 120px;
          height: 192px;
        `;
      case 'page':
        return css`
          width: 200px;
          height: 288px;
        `;
      default:
        return;
    }
  }}
`;

export const ChangeImgButtonWrapper = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;

  display: flex;
  gap: 8px;
`;

export const ImgChangeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 8px;

  width: 24px;
  height: 24px;

  border: none;
  background-color: rgba(0, 0, 0, 0.73);

  cursor: pointer;
`;
