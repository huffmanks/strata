import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import { fetchUsers } from './data/usersSlice'
import { fetchTeams } from './data/teamsSlice'

import App from './App'
import './index.css'

store.dispatch(fetchUsers())
store.dispatch(fetchTeams())

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
