import { configureStore } from '@reduxjs/toolkit'

import { authApi } from './features/auth/authApi'
import { userApi } from './features/user/userApi'
import authReducer from './features/auth/authSlice'
import userReducer from './features/user/userSlice'

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        auth: authReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
})
