import { configureStore } from '@reduxjs/toolkit'

// import usersReducer from './reducers/usersSlice'
// import teamsReducer from './reducers/teamsSlice'
// import { teamApiSlice } from './api/teamApiSlice'
import { auth } from './auth/auth'
import authReducer from './auth/authSlice'

// const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : undefined

export const store = configureStore({
    reducer: {
        // users: usersReducer,
        // teams: teamsReducer,
        // persistedState,
        [auth.reducerPath]: auth.reducer,
        auth: authReducer,
        // [teamApiSlice.reducerPath]: teamApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(auth.middleware),
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(teamApiSlice.middleware, auth.middleware),
})
