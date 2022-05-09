import { useMutation, useQueryClient } from 'react-query'
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate'

export const useDeleteTeam = () => {
    const queryClient = useQueryClient()

    const privateRequest = useAxiosPrivate()

    const deleteTeam = async (teamId) => {
        return await privateRequest.delete(`/teams/${teamId}`)
    }

    return useMutation(deleteTeam, {
        onSuccess: () => {
            queryClient.invalidateQueries('teams')
        },
    })
}
