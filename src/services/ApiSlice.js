import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = process.env.REACT_APP_BASE_API_URL;

export const apiSlice = createApi({
  reducerPath: "api", // optional
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Post", "User"],
  endpoints: (builder) => ({}),
});
