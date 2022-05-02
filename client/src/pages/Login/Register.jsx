import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/useAuth'
import axios from '../../api/axios'

import Form from '../../components/Form'
import FormHeader from '../../components/Form/Container/FormHeader'
import FormBody from '../../components/Form/Container/FormBody'
import FormFooter from '../../components/Form/Container/FormFooter'
import FormInput from '../../components/Form/Inputs/FormInput'

import ErrorToast from '../../components/Errors/ErrorToast'

const Register = () => {
    const { setAuth } = useAuth()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [toast, setToast] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setPassword('')
            setConfirmPassword('')

            return setToast(`Passwords don't match.`)
        }

        try {
            const response = await axios.post(
                'register',
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
            setConfirmPassword('')

            navigate(from, { replace: true })
        } catch (err) {
            setToast(err.response.data.message)
        }
    }

    return (
        <>
            <Form submitHandler={handleSubmit}>
                <FormHeader title='Register' />

                <FormBody>
                    <FormInput type='email' name='email' label='Email' changeHandler={(e) => setEmail(e.target.value)} inputValue={email} />

                    <FormInput type='password' name='password' label='Password' changeHandler={(e) => setPassword(e.target.value)} inputValue={password} />

                    <FormInput type='password' name='confirmPassword' label='Confirm Password' changeHandler={(e) => setConfirmPassword(e.target.value)} inputValue={confirmPassword} />
                </FormBody>

                <FormFooter subtitle='Already have an account?' subtitlePath='/login' buttonText='Create' />
            </Form>
            {toast && <ErrorToast message={toast} closeHandler={() => setToast('')} />}
        </>
    )
}

export default Register
