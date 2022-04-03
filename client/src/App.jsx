import { QueryClient, QueryClientProvider } from 'react-query'

import { AuthProvider } from './context/AuthProvider'
import Router from './routes/Router'

const queryClient = new QueryClient()

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <Router />
            </AuthProvider>
        </QueryClientProvider>
    )
}

export default App
