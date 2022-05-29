import { createContext, useCallback, useState } from 'react'
import { useAsyncDebounce } from 'react-table'

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
    filter: {
        count: undefined,
        value: '',
        onChange: () => {},
    },
})

const GlobalStateProvider = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter, children }) => {
    const [error, setError] = useState('')
    const addToast = (message) => setError(message)
    const removeToast = () => setError('')

    const [modal, setModal] = useState({})
    const addModal = (data) => setModal(data)
    const removeModal = () => setModal({})

    const count = preGlobalFilteredRows.length
    const [value, setValue] = useState(globalFilter)
    const changeFilter = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined)
    }, 200)

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
        filter: {
            count,
            value,
            onChange: useCallback((e) => {
                setValue(e.target.value)
                changeFilter(e.target.value)
            }, []),
        },
    }

    return <GlobalStateContext.Provider value={contextValue}>{children}</GlobalStateContext.Provider>
}

export default GlobalStateProvider
