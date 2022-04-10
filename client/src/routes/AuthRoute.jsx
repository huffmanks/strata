import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { useRefreshToken } from '../hooks/useRefreshToken'
import { useAuth } from '../hooks/useAuth'

import ErrorToast from '../components/Errors/ErrorToast'
import LoadSpinner from '../components/LoadSpinner'

export const AuthRoute = () => {
    const navigate = useNavigate()
    const refresh = useRefreshToken()
    const { auth, persist } = useAuth()

    const [isLoading, setIsLoading] = useState(true)
    const [toast, setToast] = useState('')

    useEffect(() => {
        let isMounted = true

        const verifyRefreshToken = async () => {
            try {
                await refresh()
            } catch (err) {
                setToast(err.response.data.message)
            } finally {
                isMounted && setIsLoading(false)
            }
        }

        if (!auth?.accessToken && !persist) {
            isMounted && setIsLoading(false)
            navigate('/login')
        }

        !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false)

        return () => (isMounted = false)
    }, [])

    return (
        <>
            {toast && <ErrorToast message={toast} closeHandler={() => setToast('')} />}
            {isLoading ? (
                <>
                    <Outlet />
                    <LoadSpinner />
                </>
            ) : (
                <Outlet />
            )}
        </>
    )
}
