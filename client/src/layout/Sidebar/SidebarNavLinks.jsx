import { primaryRoutes, secondaryRoutes } from '../../routes'
import NavItem from './NavItem'

const SidebarNavLinks = () => {
    return (
        <>
            <div className='flex flex-col items-center w-full mt-3 border-t border-gray-400'>
                {primaryRoutes.map((route) => (
                    <NavItem key={route.title} path={route.path} icon={route.icon} title={route.title} />
                ))}
            </div>
            <div className='flex flex-col items-center w-full mt-2 border-t border-gray-400'>
                {secondaryRoutes.map((route) => (
                    <NavItem key={route.title} path={route.path} icon={route.icon} title={route.title} hasNotifications={route.hasNotifications} />
                ))}
            </div>
        </>
    )
}

export default SidebarNavLinks
