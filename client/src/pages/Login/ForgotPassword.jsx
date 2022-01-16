import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../../index.css'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    // const [success, setSuccess] = useState('')
    const navigate = useNavigate()

    const forgotPasswordHandler = async (e) => {
        e.preventDefault()

        const config = {
            header: {
                'Content-Type': 'application/json',
            },
        }

        try {
            const { data } = await axios.post('http://localhost:5000/api/auth/forgotpassword', { email }, config)

            // setSuccess(data.data)
            navigate(`/resetpassword/${data.data}`)
        } catch (error) {
            setError(error.response.data.error)
            setEmail('')
            setTimeout(() => {
                setError('')
            }, 5000)
        }
    }

    return (
        <div className='forgotpassword-screen'>
            <form onSubmit={forgotPasswordHandler} className='forgotpassword-screen__form'>
                <h3 className='forgotpassword-screen__title'>Forgot Password</h3>
                {error && <span className='error-message'>{error}</span>}
                {/* {success && <span className='success-message'>{success}</span>} */}
                <div className='form-group'>
                    <p className='forgotpassword-screen__subtext'>Please enter the email address you registered your account with.</p>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' required id='email' placeholder='Enter your email address.' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <Link to='/login'>
                    <button className='btn btn-primary'>Back to Login</button>
                </Link>
                <button type='submit' className='btn btn-primary'>
                    Confirm
                </button>
            </form>
        </div>
    )
}

export default ForgotPassword
