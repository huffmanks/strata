import { NavLink, Outlet } from 'react-router-dom'

import { MdSearch, MdPeople, MdFileCopy, MdChat, MdSettings, MdAccountCircle } from 'react-icons/md'

const Sidebar = () => {
    const activeNavLink = 'flex items-center w-full h-12 px-3 mt-2 text-gray-200 bg-gray-700 rounded'
    const navLink = 'flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300'

    return (
        <div className='w-full relative'>
            <div className='flex flex-col items-center w-40 h-full overflow-hidden text-gray-400 bg-[#333] fixed top-0 left-0 bottom-0'>
                <NavLink to='/' className='flex items-center w-full px-3 mt-3'>
                    <svg className='w-8 h-8 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
                        <path d='M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z' />
                    </svg>
                    <span className='ml-2 text-sm font-bold'>Strata</span>
                </NavLink>
                <div className='w-full px-2'>
                    <div className='flex flex-col items-center w-full mt-3 border-t border-gray-400'>
                        <NavLink to='/search' className={({ isActive }) => (isActive ? activeNavLink : navLink)}>
                            <MdSearch className='w-7 h-7 stroke-current' />
                            <span className='ml-2 text-sm font-medium'>Search</span>
                        </NavLink>

                        <NavLink to='/teams' className={({ isActive }) => (isActive ? activeNavLink : navLink)}>
                            <MdPeople className='w-7 h-7 stroke-current' />
                            <span className='ml-2 text-sm font-medium'>Teams</span>
                        </NavLink>

                        <NavLink to='/uploads' className={({ isActive }) => (isActive ? activeNavLink : navLink)}>
                            <MdFileCopy className='w-7 h-7 stroke-current' />
                            <span className='ml-2 text-sm font-medium'>Uploads</span>
                        </NavLink>
                    </div>
                    <div className='flex flex-col items-center w-full mt-2 border-t border-gray-400'>
                        <NavLink to='/messages' className={({ isActive }) => (isActive ? activeNavLink + ' relative' : navLink + ' relative')}>
                            <MdChat className='w-7 h-7 stroke-current' />
                            <span className='ml-2 text-sm font-medium'>Messages</span>
                            <span className='absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full'></span>
                        </NavLink>
                        <NavLink to='/settings' className={({ isActive }) => (isActive ? activeNavLink : navLink)}>
                            <MdSettings className='w-7 h-7 stroke-current' />
                            <span className='ml-2 text-sm font-medium'>Settings</span>
                        </NavLink>
                    </div>
                </div>

                <NavLink to='/account' className='flex items-center px-4 w-full h-16 mt-auto bg-neutral-800 hover:bg-gray-700 hover:text-gray-300'>
                    <MdAccountCircle className='w-8 h-8 stroke-current' />
                    <span className='ml-2 text-sm font-medium'>Account</span>
                </NavLink>
            </div>
            <div className='max-w-[calc(100%-10rem)] h-full min-h-[calc(100vh-5rem)] ml-40'>
                <div className='my-20 px-10'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
