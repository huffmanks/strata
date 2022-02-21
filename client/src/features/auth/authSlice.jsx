import { createSlice } from '@reduxjs/toolkit'
import { authApi } from './authApi'

export const ROLES = {
    ADMIN: 'bull',
    MANAGER: 'mako',
    USER: 'tiger',
}

const slice = createSlice({
    name: 'auth',
    initialState: { user: null, accessToken: null, isAuthenticated: false },
    reducers: {
        // setCredentials: (state, { payload: { user, accessToken } }) => {
        //     state.user = user
        //     state.accessToken = accessToken
        //     state.isAuthenticated = true
        // },
        // logout: (state) => {
        //     state.user = null
        //     state.accessToken = null
        //     state.isAuthenticated = false
        // },
    },
    extraReducers: (builder) => {
        builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload: { user, accessToken } }) => {
            state.user = user
            state.accessToken = accessToken
            state.isAuthenticated = true
        })
        builder.addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
            state.user = null
            state.accessToken = null
            state.isAuthenticated = false
        })
    },
})

// export const { setCredentials, logout } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectAccessToken = (state) => state.auth.accessToken
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated
