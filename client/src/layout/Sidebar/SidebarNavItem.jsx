import { NavLink } from 'react-router-dom'

const SidebarNavItem = ({ path, icon, title, hasNotifications }) => {
    const activeNavLink = 'flex items-center w-full h-12 px-3 mt-2 text-gray-200 bg-primary-main rounded relative'
    const navLink = 'flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300 relative'

    return (
        <NavLink to={path} className={({ isActive }) => (isActive ? activeNavLink : navLink)}>
            {icon}
            <span className='ml-2 hidden text-sm font-medium md:block'>{title}</span>
            {hasNotifications && <span className='bg-primary-alt absolute top-0 left-0 mt-2 ml-2 h-2 w-2 rounded-full'></span>}
        </NavLink>
    )
}

export default SidebarNavItem
