import { useState } from 'react'

export const useFormData = (initialData = {}) => {
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
        })
    }

    return [formData, setFormData, handleChange]
}
