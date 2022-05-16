export const createFormData = (formData) =>
    Object.keys(formData).reduce((data, key) => {
        if (!formData[key]) {
            key = undefined
            formData[key] = undefined
        }

        if (Array.isArray(formData[key])) {
            formData[key].forEach((value) => {
                data.append(key, value)
            })
        } else {
            data.append(key, formData[key])
        }

        return data
    }, new FormData())
