import { apiSlice } from "../../services/ApiSlice";
import * as URL from "../Urls";

export const brandSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPaymentPage: builder.mutation({
      query: (body) => ({
        url: URL.GET_BRAND_SETTINGS,
        method: "POST",
        body: body,
        responseHandler: (response) => response.json(),

        // / Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        validateStatus: (response, result) =>
          response.status === 200 && result.success !== 0,
      }),

      transformResponse: (response) => {
        return response.data;
      },
      providesTags: (result, error, arg) => {
        if (result) {
          console.log(result);
          return [...result.ids.map((id) => ({ type: "users", id })), "users"];
        } else return ["users"];
      },
      // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
      //   console.log("started");
      // },
    }),
  }),
});

export const { useGetPaymentPageMutation} = brandSlice;
