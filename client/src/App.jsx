import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import AuthProvider from './context/AuthProvider'
import GlobalStateProvider from './context/GlobalStateProvider'

import Router from './routes/Router'
import ErrorToast from './components/Errors/ErrorToast'

const queryClient = new QueryClient()

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <GlobalStateProvider>
                    <Router />
                    <ErrorToast />
                </GlobalStateProvider>
            </AuthProvider>
            <ReactQueryDevtools initialIsOpen='false' />
        </QueryClientProvider>
    )
}

export default App
