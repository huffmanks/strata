import { Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute'
import { ROLES } from '../features/auth/authSlice'

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
import UsersList from '../pages/Users/UsersList'
// import SingleUser from '../pages/Users/SingleUser'
import CreateUser from '../pages/Users/CreateUser'
// import EditUser from '../pages/Users/EditUser'

// Team
import Teams from '../pages/Teams'
import TeamsList from '../pages/Teams/TeamsList'
import SingleTeam from '../pages/Teams/SingleTeam'
import CreateTeam from '../pages/Teams/CreateTeam'
import EditTeam from '../pages/Teams/EditTeam'

// Common
import { AccessDenied, NotFound } from '../pages/Common'

const Router = () => {
    return (
        <Routes>
            <Route element={<LoginLayout />}>
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='forgot-password' element={<ForgotPassword />} />
                <Route path='reset-password/:resetToken' element={<ResetPassword />} />
            </Route>

            <Route path='/' element={<MainLayout />}>
                <Route index element={<Dashboard />} />
                <Route path='users' element={<PrivateRoute roles={[ROLES.ADMIN]} component={Users} />}>
                    <Route index element={<UsersList />} />
                    {/* <Route path=':userId' element={<SingleUser />} /> */}
                    <Route path='create' element={<CreateUser />} />
                    {/* <Route path='edit/:userId' element={<EditUser />} /> */}
                </Route>

                <Route path='teams' element={<Teams />}>
                    <Route index element={<TeamsList />} />
                    <Route path=':teamId' element={<SingleTeam />} />
                    <Route path='create' element={<CreateTeam />} />
                    <Route path='edit/:teamId' element={<EditTeam />} />
                </Route>
                <Route path='access-denied' element={<AccessDenied />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default Router
