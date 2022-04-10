import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const PrivateRoute = ({ roles }) => {
    const { auth } = useAuth()
    const location = useLocation()

    const userHasRequiredRole = auth.user && roles.includes(auth.user.role) ? true : false

    return (
        <>
            {userHasRequiredRole ? (
                <Outlet />
            ) : auth?.accessToken ? (
                <Navigate to='/access-denied' state={{ from: location }} replace />
            ) : (
                <Navigate to='/login' state={{ from: location }} replace />
            )}
        </>
    )
}
