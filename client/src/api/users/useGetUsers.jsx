import { useQuery } from 'react-query'
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate'

export const useGetUsers = (page, limit) => {
    const privateRequest = useAxiosPrivate()

    const url = page && limit ? `/users?page=${page}&limit=${limit}` : '/users'

    const getUsers = async () => {
        const { data } = await privateRequest.get(url)
        return data
    }

    if (page && limit) {
        return useQuery(['users', page], () => getUsers(page), { keepPreviousData: true })
    } else {
        return useQuery('users', getUsers)
    }
}
