import { useNavigate } from 'react-router-dom'

import axios from '../api/axios'
import { useAuth } from './useContext'

export const useRefreshToken = () => {
    const { setAuth } = useAuth()
    const navigate = useNavigate()

    const refresh = async () => {
        const response = await axios.get('refresh', {
            withCredentials: true,
        })

        if (response.status !== 201) {
            setAuth({})
            navigate('/login')
        }

        setAuth((prev) => {
            return {
                ...prev,
                user: response.data.user,
                accessToken: response.data.accessToken,
            }
        })
        return response.data.accessToken
    }
    return refresh
}
