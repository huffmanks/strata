import { createContext, useState } from 'react'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({})
    const [authIsRefreshing, setAuthIsRefreshing] = useState({})
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem('persist')) || false)

    return <AuthContext.Provider value={{ auth, setAuth, authIsRefreshing, setAuthIsRefreshing, persist, setPersist }}>{children}</AuthContext.Provider>
}

export default AuthContext
