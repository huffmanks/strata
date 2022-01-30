import { Outlet } from 'react-router-dom'

const PageContainer = () => {
    return (
        <main className='w-full h-full mt-16 ml-16 md:ml-40'>
            <div className='md:my-14 md:mx-10 md:p-0 py-1 px-1'>
                <Outlet />
            </div>
        </main>
    )
}

export default PageContainer
