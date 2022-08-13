import { MdHome, MdPerson, MdPeople } from 'react-icons/md'

const iconStyle = 'w-7 h-7 stroke-current'

export const primaryRoutes = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <MdHome className={iconStyle} />,
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
]

export const userRoutes = [
    {
        label: 'View',
        path: '/users',
    },
    {
        label: 'Create',
        path: '/users/create',
    },
]

export const teamRoutes = [
    {
        label: 'View',
        path: '/teams',
    },
    {
        label: 'Create',
        path: '/teams/create',
    },
]
