import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseUrl = "https://jsonplaceholder.typicode.com"

export const quotesApi = createApi({
    reducerPath: "quotesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),

    endpoints: (builder) => ({
    getRandomQuote: builder.query({
      query: () => "/users",
    }),
      
  }),
});

export const { useGetRandomQuoteQuery } = quotesApi;
