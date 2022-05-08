import axios from '../api/axios'
import { useAuth } from './useContext'

export const useLogout = () => {
    const { setAuth } = useAuth()

    const logout = async () => {
        setAuth({})
        try {
            await axios.post('/logout', {
                withCredentials: true,
            })
        } catch (err) {
            console.error(err)
        }
    }

    return logout
}
