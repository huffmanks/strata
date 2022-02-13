import { useState, useEffect } from 'react'
import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_PRIVATE_API_URL

export const useAxios = (axiosParams) => {
    const [data, setData] = useState(undefined)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const fetchData = async (params) => {
        try {
            const result = await axios.request(params)
            setData(result.data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData(axiosParams)
    }, [data])

    return { data, error, loading }
}
