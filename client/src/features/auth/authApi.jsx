import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_BASE_AUTH_API_URL}`,
    }),
    tagTypes: ['Auth'],
    endpoints: (build) => ({
        login: build.mutation({
            query: (credentials) => ({
                url: 'login',
                method: 'POST',
                body: credentials,
            }),
            invalidatesTags: [{ type: 'Auth' }],
        }),

        register: build.mutation({
            query: (body) => ({
                url: 'register',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Auth' }],
        }),

        forgotPassword: build.mutation({
            query: (email) => ({
                url: 'forgot-password',
                method: 'POST',
                body: email,
            }),
            invalidatesTags: [{ type: 'Auth' }],
        }),

        resetPassword: build.mutation({
            query: ({ resetPasswordToken, ...password }) => ({
                url: `reset-password/${resetPasswordToken}`,
                method: 'PATCH',
                body: password,
            }),
            invalidatesTags: [{ type: 'Auth' }],
            // invalidatesTags: (result, error, { id }) => [{ type: 'Auth', id }],
        }),

        protected: build.mutation({
            query: () => 'protected',
        }),
    }),
})

export const { useLoginMutation, useRegisterMutation, useForgotPasswordMutation, useResetPasswordMutation, useProtectedMutation } = authApi
