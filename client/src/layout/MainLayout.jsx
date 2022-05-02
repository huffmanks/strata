import Sidebar from './Sidebar'
import PageContainer from './Content/PageContainer'
import Navbar from './Navbar'

const MainLayout = () => {
    return (
        <>
            <div className='min-w-screen flex min-h-screen'>
                <Sidebar />
                <Navbar />
                <PageContainer />
            </div>
        </>
    )
}

export default MainLayout
