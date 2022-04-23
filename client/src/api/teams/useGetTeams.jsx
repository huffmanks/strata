import { useQuery } from 'react-query'
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate'

export const useGetTeams = () => {
    const privateRequest = useAxiosPrivate()

    const getTeams = async () => {
        const { data } = await privateRequest.get('/teams')
        return data
    }

    return useQuery('teams', getTeams)
}
