import { configureStore } from '@reduxjs/toolkit'

import { authApi } from './features/auth/authApi'
import authReducer from './features/auth/authSlice'

// const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : undefined

export const store = configureStore({
    reducer: {
        // persistedState,
        [authApi.reducerPath]: authApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
})
