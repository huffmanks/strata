import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337/api' }),
    tagTypes: ['Team'],
    endpoints: (builder) => ({
        getTeams: builder.query({
            query: () => '/teams',
            providesTags: ['Team'],
        }),
        getTeam: builder.query({
            query: (teamId) => `/teams/${teamId}`,
            providesTags: ['Team'],
        }),
        createTeam: builder.mutation({
            query: (initialTeam) => ({
                url: '/teams?populate=*',
                method: 'POST',
                body: { data: initialTeam },
            }),
            invalidatesTags: ['Team'],
        }),
        editTeam: builder.mutation({
            query: ({ teamId, ...data }) => ({
                url: `/teams/${teamId}?populate=*`,
                method: 'PUT',
                body: { data },
            }),
            invalidatesTags: ['Team'],
        }),
        deleteTeam: builder.mutation({
            query: (teamId) => ({
                url: `/teams/${teamId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Team'],
        }),
    }),
})

export const { useGetTeamsQuery, useGetTeamQuery, useCreateTeamMutation, useEditTeamMutation, useDeleteTeamMutation } = apiSlice
