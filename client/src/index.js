import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter as Router } from 'react-router-dom'

// import { fetchUsers } from './reducers/usersSlice'
// import { fetchTeams } from './reducers/teamsSlice'

import App from './App'
import './index.css'

// store.dispatch(fetchUsers())
// store.dispatch(fetchTeams())

// store.subscribe(() => {
//     localStorage.setItem('reduxState', JSON.stringify(store.getState()))
// })

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
