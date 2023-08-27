import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://shielded-depths-43687-bb049deacd16.herokuapp.com/";

export const spendingApi = createApi({
  reducerPath: "spendingApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getSpending: builder.query({
      query: () => "spendings/",
    }),
    createSpending: builder.mutation({
      query: (newSpending) => ({
        url: "spendings/",
        method: "POST",
        body: newSpending,
      }),
    }),
  }),
});

export const { useGetSpendingQuery, useCreateSpendingMutation } = spendingApi;
