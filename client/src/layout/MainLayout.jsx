import { useEffect, useState } from 'react'
// import { Navigate } from 'react-router-dom'

import { useRefreshToken } from '../hooks/useRefreshToken'
import { useAuth } from '../hooks/useAuth'

import Sidebar from './Sidebar'
import PageContainer from './PageContainer'
import Navbar from './Navbar'

const MainScreen = () => {
    return (
        <div className='min-w-screen flex min-h-screen'>
            <Sidebar />
            <Navbar />
            <PageContainer />
        </div>
    )
}

const MainLayout = () => {
    const refresh = useRefreshToken()
    const { auth, persist } = useAuth()

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        let isMounted = true

        const verifyRefreshToken = async () => {
            try {
                await refresh()
            } catch (err) {
                console.error(err)
            } finally {
                isMounted && setIsLoading(false)
            }
        }

        !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false)

        return () => (isMounted = false)
    }, [])

    return (
        <>
            {!persist ? (
                <MainScreen />
            ) : isLoading ? (
                <>
                    <p>Loading...</p>
                </>
            ) : (
                <MainScreen />
            )}
        </>
    )
}

export default MainLayout
