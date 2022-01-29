import { Navigate } from 'react-router-dom'
import { AccessDenied } from '../pages/Common'
import { useAuth } from '../hooks/useAuth'

export const PrivateRoute = ({ component: RouteComponent, roles }) => {
    const auth = useAuth()
    const userHasRequiredRole = auth.user && roles.includes(auth.user.role) ? true : false

    if (auth.isAuthenticated && userHasRequiredRole) {
        return <RouteComponent />
    }

    if (auth.isAuthenticated && !userHasRequiredRole) {
        return <AccessDenied />
    }

    return <Navigate to='/login' />
}
