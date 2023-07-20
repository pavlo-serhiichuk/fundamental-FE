import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {USER_LOCALSTORAGE} from 'shared/consts/localStorage'

// Define a service using a base URL and expected endpoints
export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
      baseUrl: __API__,
    prepareHeaders: headers => {
    const token = localStorage.getItem(USER_LOCALSTORAGE) || ''

      if (token) {
        headers.set('Authorization', token)
      }
      return headers
  },
    }),
  endpoints: (builder) => ({}),
})