import { NavLink } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

import { MdAccountCircle } from 'react-icons/md'

const Navbar = () => {
    const { auth } = useAuth()

    return (
        <>
            <div className='fixed z-30 h-16 w-full bg-neutral-800'>
                <div className='ml-16 flex items-center justify-end md:ml-0'>
                    <div className='text-primary-main pl-6 text-2xl font-bold md:hidden'>Strata</div>

                    <NavLink to='/account' className='ml-auto flex h-16 pr-3'>
                        <div className='flex items-center gap-3 rounded-lg px-3 py-1 hover:bg-gray-700 hover:text-gray-300'>
                            <span className='font-medium'>{auth ? auth?.user?.firstName || auth?.user?.email : 'Account'}</span>

                            {auth && auth?.user?.profileImage ? (
                                <img className='h-10 w-10 rounded-full object-cover' src={auth.user.profileImage} />
                            ) : (
                                <MdAccountCircle className='h-10 w-10 stroke-current' />
                            )}
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar
