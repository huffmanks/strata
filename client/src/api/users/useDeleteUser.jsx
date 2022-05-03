import { useMutation, useQueryClient } from 'react-query'
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate'

export const useDeleteUser = () => {
    const queryClient = useQueryClient()

    const privateRequest = useAxiosPrivate()

    const deleteUser = async (userId) => {
        return await privateRequest.delete(`/users/${userId}`)
    }

    return useMutation(deleteUser, {
        onSuccess: () => {
            queryClient.invalidateQueries('users')
        },
    })
}
