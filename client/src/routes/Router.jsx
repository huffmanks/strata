import { useRoutes, Outlet } from 'react-router-dom'

// Layout
import LoginLayout from '../layout/LoginLayout'
import MainLayout from '../layout/MainLayout'

// Login
import Login from '../pages/Login'
import Register from '../pages/Login/Register'
import ForgotPassword from '../pages/Login/ForgotPassword'
import ResetPassword from '../pages/Login/ResetPassword'

// Pages
import Home from '../pages/Home'
import TeamsList from '../pages/Teams/TeamsList'
import SingleTeam from '../pages/Teams/SingleTeam'
import CreateTeam from '../pages/Teams/CreateTeam'
import EditTeam from '../pages/Teams/EditTeam'

// Messages
import NotFound from '../containers/messages/NotFound'
import AccessDenied from '../containers/messages/AccessDenied'

const Router = () => {
    let routes = useRoutes([
        {
            element: <LoginLayout />,
            children: [
                { path: 'login', element: <Login /> },
                { path: 'register', element: <Register /> },
                { path: 'forgot-password', element: <ForgotPassword /> },
                { path: 'reset-password/:resetToken', element: <ResetPassword /> },
                { path: 'access-denied', element: <AccessDenied /> },
            ],
        },
        {
            element: <MainLayout />,
            children: [
                { path: '/', element: <Home /> },
                {
                    path: 'teams',
                    element: (
                        <>
                            <TeamsList>
                                <Outlet />
                            </TeamsList>
                        </>
                    ),
                    children: [
                        { path: ':teamId', element: <SingleTeam /> },
                        { path: 'create', element: <CreateTeam /> },
                        { path: 'edit/:teamId', element: <EditTeam /> },
                    ],
                },
                { path: '*', element: <NotFound /> },
            ],
        },
    ])

    return routes
}

export default Router
