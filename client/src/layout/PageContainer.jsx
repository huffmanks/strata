import { Outlet } from 'react-router-dom'

const PageContainer = () => {
    return (
        <main className='w-full h-full mt-16 ml-16 md:ml-40'>
            <div className='md:my-14 md:mx-10 md:p-0 mt-5 p-5'>
                <Outlet />
            </div>
        </main>
    )
}

export default PageContainer
