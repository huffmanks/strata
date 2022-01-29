import { createSlice } from '@reduxjs/toolkit'
import { authApi } from './authApi'

export const ROLES = {
    ADMIN: 'admin',
    USER: 'user',
}

const slice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null, isAuthenticated: false },
    reducers: {
        setCredentials: (state, { payload: { user, token } }) => {
            state.user = user
            state.token = token
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.user = null
            state.token = null
            state.isAuthenticated = false
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload: { user, token } }) => {
            state.user = user
            state.token = token
            state.isAuthenticated = true
        })
    },
})

export const { setCredentials, logout } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated
