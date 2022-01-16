import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ROLE = {
    ADMIN: 'admin',
    USER: 'user',
}

export const auth = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/auth',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: 'login',
                method: 'POST',
                body: credentials,
            }),
        }),
        protected: builder.mutation({
            query: () => 'protected',
        }),
    }),
})

export const { useLoginMutation, useProtectedMutation } = auth
