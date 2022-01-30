import { NavLink } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../features/auth/authSlice'

import { MdAccountCircle } from 'react-icons/md'

const Navbar = () => {
    const user = useSelector(selectCurrentUser)

    return (
        <>
            <div className='fixed w-full h-16 bg-neutral-800 z-30'>
                <div className='flex justify-end items-center md:ml-0 ml-16'>
                    <div className='md:hidden pl-6 text-primary-main text-2xl font-bold'>Strata</div>

                    <NavLink to='/account' className='flex ml-auto pr-3 h-16'>
                        <div className='flex items-center gap-3 px-3 py-1 rounded-lg hover:bg-gray-700 hover:text-gray-300'>
                            <span className='font-medium'>{user.firstName || user.email || 'Account'}</span>

                            {user.profileImage ? <img className='w-10 h-10 object-cover rounded-full' src={user.profileImage} /> : <MdAccountCircle className='w-10 h-10 stroke-current' />}
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar
