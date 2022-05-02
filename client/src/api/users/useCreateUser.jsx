import { useMutation, useQueryClient } from 'react-query'
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate'

import { createFormData } from '../../utils/createFormData'

export const useCreateUser = () => {
    const queryClient = useQueryClient()

    const privateRequest = useAxiosPrivate()

    const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
    }

    const updateUser = async (formData) => {
        const { data } = await privateRequest.post('/users/create', createFormData(formData), config)
        return data
    }

    return useMutation(updateUser, {
        onSuccess: () => {
            queryClient.invalidateQueries('users')
        },
    })
}
