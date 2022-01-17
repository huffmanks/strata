import { Outlet } from 'react-router-dom'

const PageContainer = () => {
    return (
        <main className='w-full h-full ml-16 md:ml-40'>
            <div className='my-14 px-10'>
                <Outlet />
            </div>
        </main>
    )
}

export default PageContainer
