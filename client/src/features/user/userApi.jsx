import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:5000/api/private/`,
        // baseUrl: `${process.env.BASE_PRIVATE_API_URL}`,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token

            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
        // credentials: 'include',
    }),
    tagTypes: ['User'],
    endpoints: (build) => ({
        getUsers: build.query({
            query: (token) => ({
                url: 'users',
                method: 'GET',
                token,
            }),
            invalidatesTags: [{ type: 'User' }],
        }),
    }),
})

export const { useGetUsersQuery } = userApi
