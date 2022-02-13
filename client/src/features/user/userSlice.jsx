import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'auth',
    initialState: { updatedUser: null },
    reducers: {
        setUserInfo: (state, { payload }) => {
            state.updatedUser = payload
            // state.accessToken = accessToken
            // state.isAuthenticated = true
        },
    },
    // extraReducers: (builder) => {
    //     builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload: { user, accessToken } }) => {
    //         state.user = user
    //         state.accessToken = accessToken
    //         state.isAuthenticated = true
    //     })
    // },
})

export const { setUserInfo } = slice.actions

export default slice.reducer

// export const selectCurrentUser = (state) => state.auth.user
