import { useState } from 'react'
import { Link } from 'react-router-dom'

import Form from '../../components/Form'
import FormHeader from '../../components/Form/FormHeader'
import FormBody from '../../components/Form/FormBody'
import FormFooter from '../../components/Form/FormFooter'
import FormInput from '../../components/Form/FormInput'

import ErrorToast from '../../components/Errors/ErrorToast'

// import { useSelector } from 'react-redux'
// import { selectIsAuthenticated } from '../../auth/authSlice'
// import { useLoginMutation, useProtectedMutation } from '../../auth/auth'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('Invalid credentials. Try again.')

    // // const isAuthenticated = useSelector(selectIsAuthenticated)
    // const [login] = useLoginMutation()
    // const [attemptAccess] = useProtectedMutation()

    const loginHandler = async () => {
        try {
            // await login({
            //     email,
            //     password,
            // })
            // makeAuthRequest()
        } catch (err) {
            setError()
            console.log('err', err)
        }
    }
    return (
        <>
            <Form submitHandler={loginHandler}>
                <FormHeader title='Login' />

                <FormBody>
                    <FormInput type='text' name='email' label='Email' changeHandler={(e) => setEmail(e.target.value)} value={email} />

                    <FormInput type='text' name='password' label='Password' changeHandler={(e) => setPassword(e.target.value)} value={password} />
                </FormBody>

                <FormFooter subtitle='Forgot Password' subtitlePath='/forgot-password' buttonPath='/' buttonText='Sign In' />
                <div className='mt-6 text-center hover:text-primary-alt'>
                    <Link to='/register'>Don&rsquo;t have an account? Register</Link>
                </div>
            </Form>
            {error && <ErrorToast message={error} closeHandler={() => setError('')} />}
        </>
    )
}

export default Login
