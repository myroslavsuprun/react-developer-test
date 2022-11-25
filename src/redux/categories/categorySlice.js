import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { gql } from 'graphql-request';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
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
  }),
});

console.log(categoryApi);

export const { useGetCategoriesQuery } = categoryApi;
