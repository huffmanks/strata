export const createFormData = (formData) =>
    Object.keys(formData).reduce((data, key) => {
        if (!formData[key]) {
            key = undefined
            formData[key] = undefined
        }

        data.append(key, formData[key])
        return data
    }, new FormData())
