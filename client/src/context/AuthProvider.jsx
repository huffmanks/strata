import { createContext, useState } from 'react'

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({})
    const [authIsRefreshing, setAuthIsRefreshing] = useState({})
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem(`${process.env.REACT_APP_NAME}_persist`)) ?? false)

    const contextValue = {
        auth,
        setAuth,
        authIsRefreshing,
        setAuthIsRefreshing,
        persist,
        setPersist,
    }

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export default AuthProvider
