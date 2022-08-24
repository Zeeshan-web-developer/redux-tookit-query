import { apiSlice } from "./ApiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "bootcamp",
      transformResponse: (response) => {
        let loadedData = response.data.map((item) => {
          return {
            id: item._id,
            name: item.name,
            email: item.email,
          };
        });
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
  }),
});

export const { useGetPostsQuery } = extendedApiSlice;
