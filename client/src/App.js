import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Layout
import Sidebar from './layout/Sidebar'
import NotFound from './layout/NotFound'

// Pages
import Home from './pages/Home'
import TeamsList from './pages/Teams/TeamsList'
import SingleTeam from './pages/Teams/SingleTeam'
import CreateTeam from './pages/Teams/CreateTeam'
import EditTeam from './pages/Teams/EditTeam'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Sidebar />}>
                    <Route path='/' element={<Home />} />
                    <Route path='teams' element={<TeamsList />} />
                    <Route path='teams/:teamId' element={<SingleTeam />} />
                    <Route path='teams/create' element={<CreateTeam />} />
                    <Route path='teams/edit/:teamId' element={<EditTeam />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
