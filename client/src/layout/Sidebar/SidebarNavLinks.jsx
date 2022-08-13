import { primaryRoutes } from '../../routes'
import SidebarNavItem from './SidebarNavItem'

const SidebarNavLinks = () => {
    return (
        <>
            <div className='flex w-full flex-col items-center border-t border-gray-line px-2'>
                {primaryRoutes.map((route) => (
                    <SidebarNavItem key={route.title} path={route.path} icon={route.icon} title={route.title} />
                ))}
            </div>
        </>
    )
}

export default SidebarNavLinks
