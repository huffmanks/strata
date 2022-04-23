import { useQuery } from 'react-query'
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate'

export const useGetTeam = (teamId) => {
    const privateRequest = useAxiosPrivate()

    const getTeam = async () => {
        const { data } = await privateRequest.get(`/teams/${teamId}`)
        return data
    }

    return useQuery(['teams', teamId], () => getTeam(teamId))
}
