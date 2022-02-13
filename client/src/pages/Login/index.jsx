import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { useAuth } from '../../hooks/useAuth'
import { setCredentials } from '../../features/auth/authSlice'
import { useLoginMutation } from '../../features/auth/authApi'

import Form from '../../components/Form'
import FormHeader from '../../components/Form/Layout/FormHeader'
import FormBody from '../../components/Form/Layout/FormBody'
import FormFooter from '../../components/Form/Layout/FormFooter'
import FormInput from '../../components/Form/FormInput'

import ErrorToast from '../../components/Errors/ErrorToast'

const Login = () => {
    const { isAuthenticated } = useAuth()
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

            const cred = {
                user: res.user,
                accessToken: res.accessToken,
            }

            dispatch(setCredentials(cred))

            navigate('/')
        } catch (err) {
            setToast(err.data)
        }
    }

    useEffect(() => {
        if (isAuthenticated) return navigate('/')
    }, [])

    return (
        <>
            <Form submitHandler={handleSubmit}>
                <FormHeader title='Login' />

                <FormBody>
                    <FormInput type='email' name='email' label='Email' changeHandler={(e) => setEmail(e.target.value)} inputValue={email} />

                    <FormInput type='password' name='password' label='Password' changeHandler={(e) => setPassword(e.target.value)} inputValue={password} />
                </FormBody>

                <FormFooter subtitle='Forgot Password' subtitlePath='/forgot-password' buttonText='Sign In' />

                <div className='hover:text-primary-alt mt-6 text-center'>
                    <Link to='/register'>Don&rsquo;t have an account? Register</Link>
                </div>
            </Form>

            {toast && <ErrorToast message={toast} closeHandler={() => setToast('')} />}
        </>
    )
}

export default Login
