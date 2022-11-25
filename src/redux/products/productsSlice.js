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
  }),
});

export const { useGetCategoriesQuery, useGetProductsByCategoryQuery } =
  productsApi;
