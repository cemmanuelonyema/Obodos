import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v2' }),
  endpoints: (builder) => ({
    getCountryByCode: builder.query({
      query: (param) => `/alpha/${param}`,
    }),
  }),
});

export const { useGetCountryByCodeQuery } = apiSlice;
