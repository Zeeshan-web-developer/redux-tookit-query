import { apiSlice } from "../../services/ApiSlice";

export const bootcampsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCoupons: builder.mutation({
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

export const { useGetAllCouponsMutation } = bootcampsApi;
