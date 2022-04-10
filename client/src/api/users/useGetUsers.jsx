import { useQuery } from 'react-query'
// import { useMutation, useQueryClient } from 'react-query'
// import { useAuth } from '../../hooks/useAuth'
import { usePrivateRequest } from '../axios'

// const getUsers = () => {
//     const axiosPrivate = useAxiosPrivate()
//     return axiosPrivate.get('/users')
// }

export const useGetUsers = () => {
    // const controller = new AbortController()
    // const { auth } = useAuth()
    const privateRequest = usePrivateRequest()

    // const getUsers = await axiosPrivate.get('/users')
    // const getUsers = async () => {
    //     try {
    //         const response = await privateRequest.get('/users')
    //         console.log('response', response)
    //         return response
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return useQuery(['users'], async () => {
        const { data } = await privateRequest.get('/users')

        return data
    })
}
