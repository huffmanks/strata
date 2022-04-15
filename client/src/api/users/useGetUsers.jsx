import { useQuery } from 'react-query'
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate'

export const useGetUsers = () => {
    const privateRequest = useAxiosPrivate()

    const getUsers = async () => {
        try {
            return await privateRequest.get('/users')
        } catch (error) {
            console.log(error)
        }
    }
    return useQuery('users', getUsers)
}
