import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:5000/api/auth/`,
        // baseUrl: `${process.env.BASE_AUTH_API_URL}`,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    tagTypes: ['User'],
    endpoints: (build) => ({
        login: build.mutation({
            query: (credentials) => ({
                url: 'login',
                method: 'POST',
                body: credentials,
            }),
            invalidatesTags: [{ type: 'User' }],
        }),

        register: build.mutation({
            query: (body) => ({
                url: 'register',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'User' }],
        }),

        forgotPassword: build.mutation({
            query: (email) => ({
                url: 'forgotpassword',
                method: 'POST',
                body: email,
            }),
            invalidatesTags: [{ type: 'User' }],
        }),

        resetPassword: build.mutation({
            query: ({ resetToken, ...password }) => ({
                url: `resetpassword/${resetToken}`,
                method: 'PATCH',
                body: password,
            }),
            invalidatesTags: [{ type: 'User' }],
            // invalidatesTags: (result, error, { id }) => [{ type: 'User', id }],
        }),
        protected: build.mutation({
            query: () => 'protected',
        }),
    }),
})

export const { useLoginMutation, useRegisterMutation, useForgotPasswordMutation, useResetPasswordMutation, useProtectedMutation } = authApi
