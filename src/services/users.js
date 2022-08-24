import { apiSlice } from "./ApiSlice";

export const bootcampsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: `bootcamp`,
        method: "GET",
        responseHandler: (response) => response.json(),

        validateStatus: (response, result) =>
          response.status === 200 ? result : "error in fetching data",
      }),

      //this is used to simplify the data
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
