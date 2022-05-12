export const createFormData = (formData) =>
    Object.keys(formData).reduce((data, key) => {
        if (!formData[key]) {
            key = undefined
            formData[key] = undefined
        }

        if (typeof formData[key] === 'object') {
            formData[key].forEach((value) => {
                data.append(key, value.toString())
            })
        } else {
            data.append(key, formData[key])
        }

        return data
    }, new FormData())
