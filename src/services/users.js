import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = process.env.REACT_APP_BASE_API_URL;
const token = process.env.REACT_APP_TOKEN;
export const bootcampsApi = createApi({
  reducerPath: "bootcamps",
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
  tagTypes: ["bootcamps"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: `bootcamp`,
        method: "GET",
        responseHandler: (response) => response.json(),

        validateStatus: (response, result) =>
          response.status === 200 ? result : "error in fetching data",
      }),
      transformResponse: (response) => {
        console.log("item", response);
        let loadedData = response.data.map((item) => {
          return {
            id: item._id,
            name: item.name,
            email: item.email,
          };
        });
        console.log("loadedData", loadedData);
        return loadedData;
      },
      providesTags: (result, error, arg) => {
        if (result) {
          return [
            ...result.map(({ id }) => ({ type: "bootcamps", id })),
            "bootcamps",
          ];
        } else return ["bootcamps"];
      },
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
      invalidatesTags: ["bootcamps"],
    }),
  }),
});

export const { useGetUsersQuery, useAddAreaMutation } = bootcampsApi;
