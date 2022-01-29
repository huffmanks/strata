import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setCredentials } from '../../features/auth/authSlice'
import { useLoginMutation } from '../../features/auth/authApi'

import Form from '../../components/Form'
import FormHeader from '../../components/Form/FormHeader'
import FormBody from '../../components/Form/FormBody'
import FormFooter from '../../components/Form/FormFooter'
import FormInput from '../../components/Form/FormInput'

import ErrorToast from '../../components/Errors/ErrorToast'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [login, { error }] = useLoginMutation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [toast, setToast] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if (error) {
                setToast(error.data)
            }

            const res = await login({ email, password }).unwrap()

            localStorage.setItem('auth-token', res.token)

            const cred = {
                user: {
                    email: res.user.email,
                    role: res.user.role,
                },
                token: res.token,
            }

            dispatch(setCredentials(cred))

            navigate('/')
        } catch (err) {
            setToast(err.data)
        }
    }

    return (
        <>
            <Form submitHandler={handleSubmit}>
                <FormHeader title='Login' />

                <FormBody>
                    <FormInput type='email' name='email' label='Email' changeHandler={(e) => setEmail(e.target.value)} autoComplete='current-email' inputValue={email} />

                    <FormInput type='password' name='password' label='Password' changeHandler={(e) => setPassword(e.target.value)} autoComplete='current-password' inputValue={password} />
                </FormBody>

                <FormFooter subtitle='Forgot Password' subtitlePath='/forgot-password' buttonText='Sign In' />

                <div className='mt-6 text-center hover:text-primary-alt'>
                    <Link to='/register'>Don&rsquo;t have an account? Register</Link>
                </div>
            </Form>

            {toast && <ErrorToast message={toast} closeHandler={() => setToast('')} />}
        </>
    )
}

export default Login
