import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

import Sidebar from './Sidebar'
import PageContainer from './PageContainer'

const MainLayout = () => {
    let user = useAuth()
    let location = useLocation()

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    } else {
        return (
            <div className='w-screen h-screen flex'>
                <Sidebar />

                <PageContainer />
                <Outlet />
            </div>
        )
    }
}

export default MainLayout
