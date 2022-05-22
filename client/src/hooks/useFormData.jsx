import { useState } from 'react'

export const useFormData = (initialData = {}) => {
    const [formData, setFormData] = useState(initialData)
    const [previewImage, setPreviewImage] = useState('')

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target

        if (files) {
            setPreviewImage(`${URL.createObjectURL(e.target.files[0])}#?${Date.now()}`)
        }

        setFormData((prev) => {
            const nestedArray = Object.values(prev)
                .filter((item) => {
                    if (typeof item == 'object') return item
                })
                .flat()

            return {
                ...prev,
                [name]:
                    type === 'file'
                        ? e.target.files[0]
                        : type === 'checkbox' && checked
                        ? [value, ...nestedArray]
                        : type === 'checkbox' && !checked
                        ? nestedArray.filter((user) => user !== value)
                        : value,
            }
        })
    }

    return [formData, setFormData, previewImage, setPreviewImage, handleChange]
}
