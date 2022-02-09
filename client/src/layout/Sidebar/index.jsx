import SidebarLogo from './SidebarLogo'
import SidebarNavLinks from './SidebarNavLinks'
import SidebarLogout from './SidebarLogout'

const Sidebar = () => {
    return (
        <>
            <aside className='flex flex-col items-center w-16 md:w-40 h-full overflow-hidden text-gray-400 bg-dark-alt fixed top-0 left-0 bottom-0 z-40'>
                <SidebarLogo />

                <div className='w-full px-2'>
                    <SidebarNavLinks />
                </div>

                <SidebarLogout />
            </aside>
        </>
    )
}

export default Sidebar
