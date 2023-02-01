import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mks-challenge-api-frontend.herokuapp.com/api/v1/',
  }),
  endpoints: (builder) => ({
    getFirstProducts: builder.query({
      query: (page = 1) =>
        `products?page=${page}&rows=8&sortBy=id&orderBy=DESC`,
    }),
  }),
});

export const { useGetFirstProductsQuery } = productsApi;
