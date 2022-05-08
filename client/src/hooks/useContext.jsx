import { useContext } from 'react'

import { AuthContext } from '../context/AuthProvider'
import { GlobalStateContext } from '../context/GlobalProvider'

export const useAuth = () => {
    const { auth, setAuth, authIsRefreshing, setAuthIsRefreshing, persist, setPersist } = useContext(AuthContext)
    return { auth, setAuth, authIsRefreshing, setAuthIsRefreshing, persist, setPersist }
}

export const useGlobalState = () => {
    const { errors, modals } = useContext(GlobalStateContext)

    const { error, addToast, removeToast } = errors
    const { modal, addModal, removeModal } = modals

    return { error, addToast, removeToast, modal, addModal, removeModal }
}
