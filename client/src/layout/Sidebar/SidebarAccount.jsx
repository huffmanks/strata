import { NavLink } from 'react-router-dom'

import { MdAccountCircle } from 'react-icons/md'

const SidebarAccount = () => {
    return (
        <NavLink to='/account' className='flex items-center px-4 w-full h-16 mt-auto bg-neutral-800 hover:bg-gray-700 hover:text-gray-300'>
            <MdAccountCircle className='w-8 h-8 stroke-current' />
            <span className='ml-2 text-sm font-medium hidden md:block'>Account</span>
        </NavLink>
    )
}

export default SidebarAccount
