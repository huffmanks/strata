import { useQuery } from 'react-query'
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate'

export const useGetUsers = () => {
    const privateRequest = useAxiosPrivate()

    const getUsers = async () => {
        const { data } = await privateRequest.get('/users')
        return data
    }

    return useQuery('users', getUsers)
}
