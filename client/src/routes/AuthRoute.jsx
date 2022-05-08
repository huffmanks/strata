import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { useRefreshToken } from '../hooks/useRefreshToken'
import { useAuth } from '../hooks/useContext'

import ErrorToast from '../components/Errors/ErrorToast'
import LoadSpinner from '../components/LoadSpinner'

export const AuthRoute = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const refresh = useRefreshToken()
    const { auth, authIsRefreshing, setAuthIsRefreshing, persist } = useAuth()

    const [toast, setToast] = useState('')

    useEffect(() => {
        let isMounted = true

        const verifyRefreshToken = async () => {
            try {
                setAuthIsRefreshing(true)
                await refresh()
            } catch (err) {
                navigate('/login', { state: { from: location }, replace: true })
                setToast(err.response.data.message)
            } finally {
                isMounted && setAuthIsRefreshing(false)
            }
        }

        if (!auth?.accessToken && !persist) {
            isMounted && setAuthIsRefreshing(false)
            navigate('/login', { state: { from: location }, replace: true })
        }

        !auth?.accessToken && persist ? verifyRefreshToken() : setAuthIsRefreshing(false)

        return () => (isMounted = false)
    }, [])

    return (
        <>
            {toast && <ErrorToast message={toast} closeHandler={() => setToast('')} />}
            {authIsRefreshing ? <LoadSpinner /> : <Outlet />}
        </>
    )
}
