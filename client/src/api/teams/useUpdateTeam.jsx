import { useMutation, useQueryClient } from 'react-query'
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate'

import { createFormData } from '../../utils/createFormData'

export const useUpdateTeam = (teamId) => {
    const queryClient = useQueryClient()

    const privateRequest = useAxiosPrivate()

    const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
    }

    const updateTeam = async (formData) => {
        const { data } = await privateRequest.patch(`/teams/edit/${teamId}`, createFormData(formData), config)
        return data
    }

    return useMutation(updateTeam, {
        onSuccess: () => {
            queryClient.invalidateQueries(['teams', teamId])
        },
    })
}
