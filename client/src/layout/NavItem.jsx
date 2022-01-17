import { NavLink } from 'react-router-dom'

const NavItem = ({ path, icon, title, hasNotifications }) => {
    const activeNavLink = 'flex items-center w-full h-12 px-3 mt-2 text-gray-200 bg-primary-main rounded relative'
    const navLink = 'flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300 relative'

    return (
        <NavLink to={path} className={({ isActive }) => (isActive ? activeNavLink : navLink)}>
            {icon}
            <span className='ml-2 text-sm font-medium hidden md:block'>{title}</span>
            {hasNotifications && <span className='absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full'></span>}
        </NavLink>
    )
}

export default NavItem
