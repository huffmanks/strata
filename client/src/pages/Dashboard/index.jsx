import { teamRoutes, userRoutes } from '../../routes'

import LinkGroup from './LinkGroup'

const Dashboard = () => {
    return (
        <>
            <h1 className='mt-4 text-center text-2xl font-bold text-primary-alt'>DASHBOARD</h1>

            <LinkGroup title='Users' routes={userRoutes} />

            <LinkGroup title='Teams' routes={teamRoutes} />
        </>
    )
}

export default Dashboard
