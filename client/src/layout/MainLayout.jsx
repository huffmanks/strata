import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

import Sidebar from './Sidebar'
import PageContainer from './PageContainer'

const MainLayout = () => {
    const auth = useAuth()

    if (!auth.isAuthenticated) {
        return <Navigate to='/login' replace />
    } else {
        return (
            <div className='w-screen h-screen flex'>
                <Sidebar />

                <PageContainer />
            </div>
        )
    }
}

export default MainLayout
