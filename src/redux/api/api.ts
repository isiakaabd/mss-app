import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_BASE_URL,
  prepareHeaders: (headers) => {
    headers.append('Accept', 'application/json');
  },
});

// const baseQueryWithAuth  = async <TArgs extends FetchArgs = FetchArgs>(
const baseQueryWithAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  let result = await baseQuery(args, api, extraOptions);
 
  return result;
};

export const api = createApi({
 
  baseQuery: baseQueryWithAuth,
  tagTypes: ['invoice', ],
  endpoints: () => ({}),
});
