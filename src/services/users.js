import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = process.env.REACT_APP_BASE_API_URL;
const token = process.env.REACT_APP_TOKEN;
export const quotesApi = createApi({
  reducerPath: "quotesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {
      // const token = getState().users.token
      // if (token) {
      headers.set("Authorization", token);
      headers.set("Content-Type", "application/json");
      //}
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: `bootcamp`,
        method: "GET",
        responseHandler: (response) => response.json(),
        validateStatus: (response, result) =>
          response.status === 200 ? result : "error in fetching data",
      }),
    }),
    addArea: builder.mutation({
      query: (body) => ({
        url: `bootcamp`,
        method: "POST",
        body: body,
        responseHandler: (response) => response.json(),
        validateStatus: (response, result) =>
          response.status === 200 ? result : "error in fetching data",
      }),
    }),
  }),
});

export const { useGetUsersQuery, useAddAreaMutation } = quotesApi;
