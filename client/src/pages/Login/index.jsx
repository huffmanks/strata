import { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { selectIsAuthenticated } from '../../auth/authSlice'
import { useLoginMutation, useProtectedMutation } from '../../auth/auth'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const isAuthenticated = useSelector(selectIsAuthenticated)
    const [login] = useLoginMutation()
    const [attemptAccess] = useProtectedMutation()

    const loginHandler = async () => {
        try {
            await login({
                email,
                password,
            })
            makeAuthRequest()
        } catch (err) {
            console.log('err', err)
        }
    }

    //   const loginAsAdmin = async () => {
    //     try {
    //       await login({
    //         username: 'admin',
    //         password: 'pass',
    //       })
    //     } catch (err) {
    //       console.log('err', err)
    //     }
    //   }

    const makeAuthRequest = () => {
        attemptAccess().unwrap()
    }

    return (
        <div className='login-screen'>
            <form onSubmit={loginHandler} className='login-screen__form'>
                <h3 className='login-screen__title'>Login</h3>

                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' required id='email' placeholder='Email address' onChange={(e) => setEmail(e.target.value)} value={email} tabIndex={1} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>
                        Password:{' '}
                        <Link to='/forgotpassword' className='login-screen__forgotpassword' tabIndex={4}>
                            Forgot Password?
                        </Link>
                    </label>
                    <input type='password' required id='password' autoComplete='true' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} value={password} tabIndex={2} />
                </div>
                <button type='submit' className='btn btn-primary' tabIndex={3}>
                    Login
                </button>

                <span className='login-screen__subtext'>
                    Don&rsquo;t have an account?{' '}
                    <Link to='/register' tabIndex={5}>
                        Register
                    </Link>
                </span>
            </form>
        </div>
    )
}

export default Login
