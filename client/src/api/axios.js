import axios from 'axios'

export default axios.create({
    baseURL: process.env.REACT_APP_BASE_AUTH_API_URL,
})

export const axiosPrivate = axios.create({
    baseURL: process.env.REACT_APP_BASE_PRIVATE_API_URL,
    headers: { 'Content-Type': 'multipart/form-data; charset=utf-8;' },
    withCredentials: true,
})
