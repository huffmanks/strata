import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { AuthProvider } from './context/AuthProvider'
import Router from './routes/Router'

const queryClient = new QueryClient()

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <Router />
            </AuthProvider>
            <ReactQueryDevtools initialIsOpen='false' />
        </QueryClientProvider>
    )
}

export default App
