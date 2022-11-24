import styled from 'styled-components';

export const CategoryTitle = styled.h2`
  margin-bottom: 100px;

  font-size: 42px;
  font-weight: 400;
`;

export const ProductList = styled.ul`
  row-gap: 100px;
  column-gap: 40px;
  justify-content: center;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;

  list-style-type: none;
`;
