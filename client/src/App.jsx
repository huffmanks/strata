import { Routes, Route } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { logout, selectCurrentUser, selectIsAuthenticated } from './auth/authSlice'

// Layout
import Sidebar from './layout/Sidebar'
import NotFound from './layout/NotFound'
import { AuthRoute } from './components/AuthRoute'
import { ROLE } from './auth/auth'

// Login
import Login from './pages/Login'
import Register from './pages/Login/Register'
import ForgotPassword from './pages/Login/ForgotPassword'
import ResetPassword from './pages/Login/ResetPassword'

// Pages
import Home from './pages/Home'
import TeamsList from './pages/Teams/TeamsList'
import SingleTeam from './pages/Teams/SingleTeam'
import CreateTeam from './pages/Teams/CreateTeam'
import EditTeam from './pages/Teams/EditTeam'

// const Header = () => {
//     const dispatch = useDispatch()
//     const user = useSelector(selectCurrentUser)
//     const isAuthenticated = useSelector(selectIsAuthenticated)

//     const handleLogout = () => {
//       dispatch(logout())
//     }
// }
const App = () => {
    return (
        // <Router>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/resetpassword/:resetToken' element={<ResetPassword />} />
            <Route path='/home' element={<AuthRoute roles={[ROLE.ADMIN, ROLE.AUTHOR]} component={Sidebar} />}>
                {/* <Route path='/' element={<Sidebar />}> */}
                <Route path='/home' element={<Home />} />
                <Route path='teams' element={<TeamsList />} />
                <Route path='teams/:teamId' element={<SingleTeam />} />
                <Route path='teams/create' element={<CreateTeam />} />
                <Route path='teams/edit/:teamId' element={<EditTeam />} />
                <Route path='*' element={<NotFound />} />
                {/* </Route> */}
            </Route>
        </Routes>
        // </Router>
    )
}

export default App
