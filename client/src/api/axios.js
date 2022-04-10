import { useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../hooks/useAuth'

export default axios.create({
    baseURL: process.env.REACT_APP_BASE_AUTH_API_URL,
})

// export const privateRequest = ({ ...options }) => {
//     const { auth } = useAuth()

//     console.log(auth)

//     axiosPrivate.defaults.headers.common.Authorization = `Bearer ${auth?.accessToken}`

//     const onSuccess = (response) => response
//     const onError = (error) => {
//         // optionaly catch errors and add some additional logging here
//         return error
//     }
//     return axiosPrivate(options).then(onSuccess).catch(onError)
// }

export const usePrivateRequest = () => {
    const { auth } = useAuth()

    useEffect(() => {
        const axiosPrivate = axios.create({
            baseURL: process.env.REACT_APP_BASE_PRIVATE_API_URL,
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'multipart/form-data; charset=utf-8;',
                // Authorization: `Bearer ${auth?.accessToken}`,
            },
            withCredentials: true,
        })

        axiosPrivate.interceptors.request.use((config) => {
            const token = auth?.accessToken

            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }

            return config
        })

        return axiosPrivate
    }, [])
}
