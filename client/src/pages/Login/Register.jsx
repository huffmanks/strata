import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import '../../index.css'

const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const registerHandler = async (e) => {
        e.preventDefault()

        const config = {
            header: {
                'Content-Type': 'application/json',
            },
        }

        if (password !== confirmpassword) {
            setPassword('')
            setConfirmPassword('')
            setTimeout(() => {
                setError('')
            }, 5000)
            return setError('Passwords do not match.')
        }

        try {
            const { data } = await axios.post(
                'http://localhost:5000/api/auth/register',
                {
                    firstName,
                    lastName,
                    email,
                    password,
                },
                config
            )

            localStorage.setItem('authToken', data.token)

            navigate('/')
        } catch (error) {
            setError(error.response.data.error)
            setTimeout(() => {
                setError('')
            }, 5000)
        }
    }

    return (
        <div className='register-screen'>
            <form onSubmit={registerHandler} className='register-screen__form'>
                <h3 className='register-screen__title'>Register</h3>
                {error && <span className='error-message'>{error}</span>}
                <div className='form-group'>
                    <label htmlFor='firstName'>First Name:</label>
                    <input type='text' required id='firstName' placeholder='Enter your first name.' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='lastName'>Last Name:</label>
                    <input type='text' required id='lastName' placeholder='Enter your last name.' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' required id='email' placeholder='Enter your email address.' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' required id='password' autoComplete='true' placeholder='Enter your password.' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='confirmpassword'>Confirm Password:</label>
                    <input type='password' required id='confirmpassword' autoComplete='true' placeholder='Confirm your password.' value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>

                <button type='submit' className='btn btn-primary'>
                    Register
                </button>

                <span className='register-screen__subtext'>
                    Already have an account? <Link to='/login'>Login</Link>
                </span>
            </form>
        </div>
    )
}

export default Register
