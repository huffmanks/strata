import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:5000/api/private/`,
        // baseUrl: `${process.env.BASE_PRIVATE_API_URL}`,

        prepareHeaders: async (headers, { getState }) => {
            const accessToken = getState().auth.accessToken

            if (accessToken) {
                headers.set('authorization', `Bearer ${accessToken}`)
            }
            return headers
        },
        // credentials: 'include',
    }),
    tagTypes: ['User'],
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => ({
                url: 'users',
                method: 'GET',
                // accessToken,
            }),
            invalidatesTags: [{ type: 'User' }],
        }),
    }),
})

export const { useGetUsersQuery } = userApi
