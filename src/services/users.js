import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
const baseUrl = "https://jsonplaceholder.typicode.com"

export const quotesApi = createApi({
    reducerPath: "quotesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),

    endpoints: (builder) => ({
        getUsers: builder.query({
      query: () => ({
                url: `/users`,
          method: "GET",
        responseHandler: (response) => response.json(),
      }),
    }),

    })
})

export const { useGetUsersQuery } = quotesApi;

