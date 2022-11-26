import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { gql } from 'graphql-request';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: graphqlRequestBaseQuery({
    url: 'http://localhost:4000/',
  }),
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => ({
        document: gql`
          {
            categories {
              name
            }
          }
        `,
      }),
    }),
    getProductsByCategory: builder.query({
      query: category => ({
        document: gql`
          query getProductsByCategroy($category: String!) {
            category(input: { title: $category }) {
              name
              products {
                id
                name
                inStock
                gallery
                category
                prices {
                  currency {
                    symbol
                  }
                  amount
                }
              }
            }
          }
        `,
        variables: {
          category,
        },
      }),
    }),
    getProductById: builder.query({
      query: id => ({
        document: gql`
          query getProductById($id: String!) {
            product(id: $id) {
              name
              inStock
              gallery
              description
              brand
              attributes {
                id
                name
                type
                items {
                  displayValue
                  value
                  id
                }
              }
              prices {
                currency {
                  symbol
                }
                amount
              }
            }
          }
        `,
        variables: {
          id,
        },
      }),
    }),
    getCurrencies: builder.query({
      query: () => ({
        document: gql`
          {
            currencies {
              label
              symbol
            }
          }
        `,
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  useGetProductByIdQuery,
  useGetCurrenciesQuery,
} = productsApi;
