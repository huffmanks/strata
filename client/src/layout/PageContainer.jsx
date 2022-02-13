import { Outlet } from 'react-router-dom'

const PageContainer = () => {
    return (
        <main className='mt-16 ml-16 h-full w-full md:ml-40'>
            <div className='mt-5 p-5 md:my-14 md:mx-10 md:p-0'>
                <Outlet />
            </div>
        </main>
    )
}

export default PageContainer
