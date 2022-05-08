import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/useContext'
import axios from '../../api/axios'

import Form from '../../components/Form'
import FormHeader from '../../components/Form/Container/FormHeader'
import FormBody from '../../components/Form/Container/FormBody'
import FormFooter from '../../components/Form/Container/FormFooter'
import FormInput from '../../components/Form/Inputs/FormInput'
import FormCheckbox from '../../components/Form/Inputs/FormCheckbox'

import ErrorToast from '../../components/Errors/ErrorToast'

const Login = () => {
    const { setAuth, persist, setPersist } = useAuth()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [toast, setToast] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(
                'login',
                { email, password },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            )

            const user = response?.data?.user
            const accessToken = response?.data?.accessToken

            setAuth({ user, accessToken })

            setEmail('')
            setPassword('')

            navigate(from, { replace: true })
        } catch (err) {
            setToast(err.response.data.message)
        }
    }

    const togglePersist = () => {
        setPersist((prev) => !prev)
    }

    useEffect(() => {
        localStorage.setItem(`${process.env.REACT_APP_NAME}_persist`, persist)
    }, [persist])

    return (
        <>
            <Form submitHandler={handleSubmit}>
                <FormHeader title='Login' />

                <FormBody>
                    <FormInput type='email' name='email' label='Email' changeHandler={(e) => setEmail(e.target.value)} inputValue={email} />

                    <FormInput type='password' name='password' label='Password' changeHandler={(e) => setPassword(e.target.value)} inputValue={password} />

                    <FormCheckbox id='persist' label='Stay logged in' changeHandler={togglePersist} checked={persist} />
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
