import { configureStore } from '@reduxjs/toolkit'

import usersReducer from './reducers/usersSlice'
import teamsReducer from './reducers/teamsSlice'
import { teamApiSlice } from './api/teamApiSlice'

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : undefined

export default configureStore({
    reducer: {
        users: usersReducer,
        teams: teamsReducer,
        persistedState,
        [teamApiSlice.reducerPath]: teamApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(teamApiSlice.middleware),
})
