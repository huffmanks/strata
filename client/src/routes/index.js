import { MdSearch, MdPerson, MdPeople, MdFileCopy, MdChat, MdSettings, MdLogout } from 'react-icons/md'

const iconStyle = 'w-7 h-7 stroke-current'

export const primaryRoutes = [
    {
        title: 'Search',
        path: '/search',
        icon: <MdSearch className={iconStyle} />,
    },
    {
        title: 'Users',
        path: '/users',
        icon: <MdPerson className={iconStyle} />,
    },
    {
        title: 'Teams',
        path: '/teams',
        icon: <MdPeople className={iconStyle} />,
    },
    {
        title: 'Uploads',
        path: '/uploads',
        icon: <MdFileCopy className={iconStyle} />,
    },
]

export const secondaryRoutes = [
    {
        title: 'Messages',
        path: '/messages',
        icon: <MdChat className={iconStyle} />,
        hasNotifications: true,
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <MdSettings className={iconStyle} />,
    },
    {
        title: 'Logout',
        path: '/login',
        icon: <MdLogout className={iconStyle} />,
    },
]
