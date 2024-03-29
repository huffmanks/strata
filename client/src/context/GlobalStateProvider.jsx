import { createContext, useCallback, useState } from 'react'

export const GlobalStateContext = createContext({
    errors: {
        error: '',
        addToast: () => {},
        removeToast: () => {},
    },
    modals: {
        modal: {},
        addModal: () => {},
        removeModal: () => {},
    },
})

const GlobalStateProvider = ({ children }) => {
    const [error, setError] = useState('')
    const addToast = (message) => setError(message)
    const removeToast = () => setError('')

    const [modal, setModal] = useState({})
    const addModal = (data) => setModal(data)
    const removeModal = () => setModal({})

    const contextValue = {
        errors: {
            error,
            addToast: useCallback((message) => addToast(message), []),
            removeToast: useCallback(() => removeToast(), []),
        },
        modals: {
            modal,
            addModal: useCallback((data) => addModal(data), []),
            removeModal: useCallback(() => removeModal({}), []),
        },
    }

    return <GlobalStateContext.Provider value={contextValue}>{children}</GlobalStateContext.Provider>
}

export default GlobalStateProvider
