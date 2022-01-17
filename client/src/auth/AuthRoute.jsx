// import { Navigate, Outlet } from 'react-router-dom'

// const AuthRoute = () => {
//     const auth = useAuth()
//     return auth ? <Outlet /> : <Navigate to='/login' />
// }

// const useAuth = () => {
//     if (!localStorage.getItem('authToken')) return false
// }

// export default AuthRoute
// import { Redirect, Route } from 'react-router-dom'

// const AuthRoute = (Component, { ...rest }) => {
//     // const AuthRoute = ({ component: Component, ...rest }) => {
//     return <Route {...rest} render={(props) => (localStorage.getItem('authToken') ? <Component {...props} /> : <Redirect to='/login' />)} />
// }

// export default AuthRoute

import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import AccessDenied from '../auth/AccessDenied'
import { ROLE } from './auth'
import { selectCurrentUser, selectIsAuthenticated } from './authSlice'

export const AuthRoute = () => {
    const roles = [ROLE]
    const user = useSelector(selectCurrentUser)
    const isAuthenticated = useSelector(selectIsAuthenticated)
    const userHasRequiredRole = user && roles.includes(user.role) ? true : false

    if (isAuthenticated && userHasRequiredRole) {
        return <Outlet />
    }

    if (isAuthenticated && !userHasRequiredRole) {
        return <AccessDenied />
    }

    return <Navigate to='/home' />
}
