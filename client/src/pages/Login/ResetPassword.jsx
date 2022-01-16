import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import '../../index.css'

const ResetPassword = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const params = useParams()

    const resetPasswordHandler = async (e) => {
        e.preventDefault()

        const config = {
            header: {
                'Content-Type': 'application/json',
            },
        }

        if (password !== confirmPassword) {
            setPassword('')
            setConfirmPassword('')
            setTimeout(() => {
                setError('')
            }, 5000)
            return setError("Passwords don't match.")
        }

        try {
            const { data } = await axios.put(
                `http://localhost:5000/api/auth/resetpassword/${params.resetToken}`,
                {
                    password,
                },
                config
            )

            console.log(data)
            setSuccess(data.data)
        } catch (error) {
            setError(error.response.data.error)
            setTimeout(() => {
                setError('')
            }, 5000)
        }
    }

    return (
        <div className='resetpassword-screen'>
            <form onSubmit={resetPasswordHandler} className='resetpassword-screen__form'>
                <h3 className='resetpassword-screen__title'>Reset Password</h3>
                {error && <span className='error-message'>{error} </span>}
                {success && (
                    <span className='success-message'>
                        {success} <Link to='/login'>Login</Link>
                    </span>
                )}
                <div className='form-group'>
                    <label htmlFor='password'>New Password:</label>
                    <input type='password' required id='password' placeholder='Enter a new password.' autoComplete='true' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='confirmpassword'>Confirm New Password:</label>
                    <input type='password' required id='confirmpassword' placeholder='Confirm your new password.' autoComplete='true' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <Link to='/login'>
                    <button className='btn btn-primary'>Back to Login</button>
                </Link>
                <button type='submit' className='btn btn-primary'>
                    Reset Password
                </button>
            </form>
        </div>
    )
}

export default ResetPassword
