import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_BASE_PRIVATE_API_URL}`,

        prepareHeaders: async (headers, { getState }) => {
            const accessToken = getState().auth.accessToken

            if (accessToken) {
                headers.set('authorization', `Bearer ${accessToken}`)
            }
            return headers
        },
    }),
    tagTypes: ['User'],
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => ({
                url: 'users',
                method: 'GET',
            }),
            invalidatesTags: [{ type: 'User' }],
        }),
        getSingleUser: build.query({
            query: (userId) => ({
                url: `users/${userId}`,
                method: 'GET',
            }),
            invalidatesTags: [{ type: 'User' }],
        }),
        updateUser: build.mutation({
            query: ({ userId, patch }) => ({
                url: `users/edit/${userId}`,
                method: 'PATCH',
                patch,
            }),
            invalidatesTags: [{ type: 'User' }],
        }),
    }),
})

export const { useGetUsersQuery, useLazyGetSingleUserQuery, useUpdateUserMutation } = userApi
