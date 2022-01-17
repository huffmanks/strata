import { Outlet } from 'react-router-dom'

const LoginLayout = () => {
    return (
        <main className='flex flex-col justify-center items-center w-screen h-screen'>
            <div className='w-full my-20 px-10'>
                <Outlet />
            </div>
        </main>
    )
}

export default LoginLayout
