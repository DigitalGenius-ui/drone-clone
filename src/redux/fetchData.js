import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const droneApi = createApi({
  reducerPath: "droneApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://drone-api-production.up.railway.app",
  }),
  endpoints: (builder) => ({
    getAllSlides: builder.query({
      query: () => `slides`,
    }),
    getAllProducts: builder.query({
      query: () => `products`,
    }),
  }),
});

export const { useGetAllSlidesQuery, useGetAllProductsQuery } = droneApi;