import { Outlet } from 'react-router-dom'

const LoginLayout = () => {
    return (
        <main className='flex h-screen w-screen flex-col items-center justify-center'>
            <div className='my-20 w-full px-10'>
                <Outlet />
            </div>
        </main>
    )
}

export default LoginLayout
