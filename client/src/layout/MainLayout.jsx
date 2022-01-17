import Sidebar from './Sidebar'
import PageContainer from './PageContainer'

const MainLayout = () => {
    return (
        <div className='w-screen h-screen flex'>
            <Sidebar />
            <PageContainer />
        </div>
    )
}

export default MainLayout
