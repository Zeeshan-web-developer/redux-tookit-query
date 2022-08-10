import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
const baseUrl = process.env.REACT_APP_BASE_API_URL
console.log(baseUrl)
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7IklEIjoiNjJjNmUwYjRiYTE0MDhhMDI2ZTAwZjBkIiwidXNlclR5cGUiOiJCUkFORC1BRE1JTiJ9LCJpYXQiOjE2NTk5NzczNjB9.T335rv6G4O1xrjbctNHW2bUY7-zGnt5L3x2fFXEAlWk"
export const quotesApi = createApi({
    reducerPath: "quotesApi",
  baseQuery: fetchBaseQuery({
      baseUrl: baseUrl,
      prepareHeaders: (headers, { getState }) => {
            // const token = getState().users.token
            // if (token) {
          headers.set("Authorization", token)
         headers.set("Content-Type", "application/json")
            //}
        return headers
        }
  }),

    endpoints: (builder) => ({
        getUsers: builder.query({
      query: () => ({
                url: `/order/getAllPendingOrdersCount`,
          method: "POST",
        responseHandler: (response) => response.json(),
      }),
    }),

    })
})

export const { useGetUsersQuery } = quotesApi;

