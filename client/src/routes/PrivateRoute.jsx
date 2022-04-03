import { Navigate, Outlet } from 'react-router-dom'
import { AccessDenied } from '../pages/Common'
import { useAuth } from '../hooks/useAuth'

export const PrivateRoute = ({ roles }) => {
    const { auth } = useAuth()

    const userHasRequiredRole = auth.user && roles.includes(auth.user.role) ? true : false

    if (auth.accessToken && userHasRequiredRole) {
        return <Outlet />
    }

    if (auth.accessToken && !userHasRequiredRole) {
        return <AccessDenied />
    }

    return <Navigate to='/login' replace />
}
