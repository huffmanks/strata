import { useQuery } from 'react-query'
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate'

export const useGetUsers = (page, limit, sortFields) => {
    const privateRequest = useAxiosPrivate()

    const url = page && limit ? `/users?page=${page}&limit=${limit}&sort=${sortFields}` : `/users?sort=${sortFields}`

    const getUsers = async () => {
        const { data } = await privateRequest.get(url)
        return data
    }

    if (page && limit) {
        // return useQuery(['users', page + sortFields], () => getUsers(page, sortFields))
        return useQuery(['users', page + sortFields], () => getUsers(page, sortFields), { keepPreviousData: false })
    }
    // else if (sortFields) {
    //     return useQuery(['users', sortFields], () => getUsers(sortFields))
    // }
    else {
        return useQuery('users', getUsers)
    }
}
