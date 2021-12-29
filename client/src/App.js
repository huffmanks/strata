import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import TeamsList from './pages/Teams/TeamsList'
import SingleTeam from './pages/Teams/SingleTeam'
import CreateTeam from './pages/Teams/CreateTeam'
import EditTeam from './pages/Teams/EditTeam'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/teams/' element={<TeamsList />} />
                <Route path='/teams/:teamId' element={<SingleTeam />} />
                <Route path='/teams/create' element={<CreateTeam />} />
                <Route path='/teams/edit/:teamId' element={<EditTeam />} />
            </Routes>
        </Router>
    )
}

export default App
