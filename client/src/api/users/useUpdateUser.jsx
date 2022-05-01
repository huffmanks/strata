import { useMutation, useQueryClient } from 'react-query'
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate'

import { createFormData } from '../../utils/createFormData'

export const useUpdateUser = (userId) => {
    const queryClient = useQueryClient()
    console.log(queryClient)
    const privateRequest = useAxiosPrivate()

    const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
    }

    const updateUser = async (formData) => {
        const { data } = await privateRequest.patch(`/users/edit/${userId}`, createFormData(formData), config)
        return data
    }

    return useMutation(updateUser)
    // return useMutation(updateUser, {
    //     onSuccess: async (data) => {
    //         console.log(data)

    //         return queryClient.invalidateQueries(['users', userId])
    //         // queryClient.setQueryData(['users', userId], data)
    //         // queryClient.setQueryData(['users', userId], (prev) => [...prev, data])
    //     },
    // })
}
