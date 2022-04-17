import { useQuery } from 'react-query'
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate'

export const useGetUser = (userId) => {
    const privateRequest = useAxiosPrivate()

    const getUser = async () => {
        const { data } = await privateRequest.get(`/users/${userId}`)
        return data
    }

    return useQuery(['users', userId], () => getUser(userId))
}
