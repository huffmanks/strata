export const createFormData = (formData) =>
    Object.keys(formData).reduce((data, key) => {
        data.append(key, formData[key])
        return data
    }, new FormData())
