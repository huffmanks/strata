import { useEffect, useState } from 'react'

export const useFormData = (initialData = {}, isSuccess, data) => {
    const [formData, setFormData] = useState(initialData)

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target

        setFormData((prev) => {
            const nestedArray = Object.values(prev)
                .filter((item) => {
                    if (typeof item == 'object') return item
                })
                .flat()

            return {
                ...prev,
                [name]: type === 'file' ? files[0] : type === 'checkbox' && checked ? [value, ...nestedArray] : type === 'checkbox' && !checked ? nestedArray.filter((user) => user !== value) : value,
            }
            // return {
            //     ...prev,
            //     [name]: type === 'file' ? files[0] : type === 'checkbox' && checked ? [value, ...prev.users] : type === 'checkbox' && !checked ? prev.users.filter((user) => user !== value) : value,
            // }
        })
    }

    useEffect(() => {
        if (isSuccess) {
            const nestedArray = Object.fromEntries(
                Object.entries(data).filter(([key, value]) => {
                    if (typeof value == 'object') {
                        // console.log('key', key)
                        // console.log('value', value)

                        // const values = value.map((v) => v._id)

                        return [key, value]
                    }
                })
            )
            // .map((item) => item._id)
            // .flat()

            console.log(nestedArray)

            const teamUsers = !data?.users?.length > 0 ? [] : data.users.map((user) => user._id)
            setFormData({
                title: data.title,
                description: data?.description,
                teamImage: data?.teamImage,
                users: teamUsers,
                type: data.type,
            })
        }

        return () => {
            setFormData(initialData)
        }
    }, [isSuccess])

    return [formData, handleChange]
}
