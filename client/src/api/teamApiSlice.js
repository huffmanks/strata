import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const teamApiSlice = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/private' }),
    // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337/api' }),
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
                url: '/teams/create',
                // url: '/teams?populate=*',
                method: 'POST',
                body: { data: initialTeam },
            }),
            invalidatesTags: ['Team'],
        }),
        editTeam: builder.mutation({
            query: ({ teamId, ...data }) => ({
                url: `/teams/edit/${teamId}`,
                // url: `/teams/${teamId}?populate=*`,
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

export const { useGetTeamsQuery, useGetTeamQuery, useCreateTeamMutation, useEditTeamMutation, useDeleteTeamMutation } = teamApiSlice
