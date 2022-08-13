import { NavLink } from 'react-router-dom'
import { useAuth } from '../../hooks/useContext'

import Breadcrumbs from './Breadcrumbs'
import UserImage from '../../components/Image/UserImage'

const Navbar = () => {
    const { auth } = useAuth()

    return (
        <>
            <div className='fixed z-30 h-16 w-full bg-neutral-800'>
                <div className='ml-16 flex items-center justify-end md:ml-0'>
                    <div className='pl-6 text-2xl font-bold text-primary-alt md:hidden'>Strata</div>

                    <Breadcrumbs />

                    <NavLink to='/account' className='ml-auto flex h-16 pr-3'>
                        <div className='flex items-center gap-3 rounded-lg px-3 py-1 hover:bg-gray-700 hover:text-gray-300'>
                            <span className='font-medium'>{auth ? auth?.user?.firstName || auth?.user?.email : 'Account'}</span>

                            <UserImage hasImage={auth && auth?.user?.profileImage} imageSrc={auth.user.profileImage} imageAlt={auth.user.userName} imageSize={10} />
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar
