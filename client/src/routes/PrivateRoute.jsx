import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useContext'

import LoadSpinner from '../components/LoadSpinner'

export const PrivateRoute = ({ roles }) => {
    const { auth, authIsRefreshing } = useAuth()
    const location = useLocation()

    const userHasRequiredRole = auth.user && roles.includes(auth.user.role) ? true : false

    return (
        <>
            {authIsRefreshing ? (
                <LoadSpinner />
            ) : userHasRequiredRole ? (
                <Outlet />
            ) : auth?.accessToken ? (
                <Navigate to='/access-denied' state={{ from: location }} replace />
            ) : (
                <Navigate to='/login' state={{ from: location }} replace />
            )}
        </>
    )
}
