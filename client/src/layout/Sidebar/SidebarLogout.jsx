import { NavLink, useNavigate } from 'react-router-dom'
import { MdLogout } from 'react-icons/md'

import { useLogout } from '../../hooks/useLogout'

const SidebarLogout = () => {
    const navigate = useNavigate()
    const logout = useLogout()

    const handleLogout = async () => {
        await logout()
        navigate('/login')
    }

    return (
        <NavLink to='/login' className='mt-auto flex h-16 w-full items-center bg-neutral-800 px-4 hover:bg-gray-700 hover:text-gray-300' onClick={handleLogout}>
            <MdLogout className='h-8 w-8 stroke-current' />
            <span className='ml-2 hidden text-sm font-medium md:block'>Logout</span>
        </NavLink>
    )
}

export default SidebarLogout
