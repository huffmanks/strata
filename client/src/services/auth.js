// import axios from 'axios'

// const API_URL = 'http://localhost:5000/api/auth/'

// const register = (email, password) => {
//     return axios.post(API_URL + 'register', {
//         email,
//         password,
//     })
// }

// const login = async (email, password) => {
//     const res = await axios.post(API_URL + 'login', {
//         email,
//         password,
//     })

//     if (res.data.token) {
//         localStorage.setItem('user', JSON.stringify(res.data))
//     }

//     return res.data
// }

// const logout = () => {
//     localStorage.removeItem('user')
// }

// const authService = {
//     register,
//     login,
//     logout,
// }

// export default authService
