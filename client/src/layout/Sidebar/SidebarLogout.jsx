import { NavLink } from 'react-router-dom'
import { useLogoutMutation } from '../../features/auth/authApi'

// import { useDispatch } from 'react-redux'

// import { logout } from '../../features/auth/authSlice'

import { MdLogout } from 'react-icons/md'

const SidebarLogout = () => {
    // const dispatch = useDispatch()
    const [logout] = useLogoutMutation()

    const handleLogout = async () => {
        // dispatch(logout())
        await logout().unwrap()
    }

    return (
        <NavLink to='/login' className='mt-auto flex h-16 w-full items-center bg-neutral-800 px-4 hover:bg-gray-700 hover:text-gray-300' onClick={handleLogout}>
            <MdLogout className='h-8 w-8 stroke-current' />
            <span className='ml-2 hidden text-sm font-medium md:block'>Logout</span>
        </NavLink>
    )
}

export default SidebarLogout
