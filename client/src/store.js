import { configureStore } from '@reduxjs/toolkit'

import usersReducer from './data/usersSlice'
import teamsReducer from './data/teamsSlice'
import { apiSlice } from './api/apiSlice'

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : undefined

export default configureStore({
    reducer: {
        users: usersReducer,
        teams: teamsReducer,
        persistedState,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})
