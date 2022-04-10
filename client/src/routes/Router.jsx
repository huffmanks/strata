import { Routes, Route } from 'react-router-dom'
import { AuthRoute } from './AuthRoute'
import { PrivateRoute } from './PrivateRoute'

// Layout
import LoginLayout from '../layout/LoginLayout'
import MainLayout from '../layout/MainLayout'

// Login
import Login from '../pages/Login'
import Register from '../pages/Login/Register'
import ForgotPassword from '../pages/Login/ForgotPassword'
import ResetPassword from '../pages/Login/ResetPassword'

// Dashboard
import Dashboard from '../pages/Dashboard'

// User
import Users from '../pages/Users'
import SingleUser from '../pages/Users/SingleUser'
import CreateUser from '../pages/Users/CreateUser'

// Team
import Teams from '../pages/Teams'
import SingleTeam from '../pages/Teams/SingleTeam'
import CreateTeam from '../pages/Teams/CreateTeam'

// Common
import { AccessDenied, NotFound } from '../pages/Common'

export const ROLES = {
    ADMIN: 'bull',
    MANAGER: 'mako',
    USER: 'tiger',
}

const Router = () => {
    return (
        <>
            <Routes>
                <Route element={<LoginLayout />}>
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                    <Route path='forgot-password' element={<ForgotPassword />} />
                    <Route path='reset-password/:resetPasswordToken' element={<ResetPassword />} />
                </Route>

                <Route element={<AuthRoute />}>
                    <Route element={<MainLayout />}>
                        <Route path='/' element={<Dashboard />} />

                        <Route path='users' element={<PrivateRoute roles={[ROLES.ADMIN]} />}>
                            <Route index element={<Users />} />
                            <Route path=':userId' element={<SingleUser />} />
                            <Route path='create' element={<CreateUser />} />
                        </Route>

                        <Route path='teams' element={<PrivateRoute roles={[ROLES.ADMIN]} />}>
                            <Route index element={<Teams />} />
                            <Route path=':teamId' element={<SingleTeam />} />
                            <Route path='create' element={<CreateTeam />} />
                        </Route>

                        <Route path='access-denied' element={<AccessDenied />} />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default Router
