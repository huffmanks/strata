import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../features/auth/authSlice'

const NavItem = ({ path, icon, title, hasNotifications, hasLogout }) => {
    const activeNavLink = 'flex items-center w-full h-12 px-3 mt-2 text-gray-200 bg-primary-main rounded relative'
    const navLink = 'flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300 relative'

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <NavLink to={path} className={({ isActive }) => (isActive ? activeNavLink : navLink)} onClick={hasLogout ? handleLogout : undefined}>
            {icon}
            <span className='ml-2 text-sm font-medium hidden md:block'>{title}</span>
            {hasNotifications && <span className='absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-primary-alt rounded-full'></span>}
        </NavLink>
    )
}

export default NavItem
