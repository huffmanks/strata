import { NavLink } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { logout } from '../../features/auth/authSlice'

import { MdLogout } from 'react-icons/md'

const SidebarLogout = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <NavLink to='/login' className='flex items-center px-4 w-full h-16 mt-auto bg-neutral-800 hover:bg-gray-700 hover:text-gray-300' onClick={handleLogout}>
            <MdLogout className='w-8 h-8 stroke-current' />
            <span className='ml-2 text-sm font-medium hidden md:block'>Logout</span>
        </NavLink>
    )
}

export default SidebarLogout
