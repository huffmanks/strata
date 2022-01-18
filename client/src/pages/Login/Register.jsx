import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import Form from '../../components/Form'
import FormHeader from '../../components/Form/FormHeader'
import FormBody from '../../components/Form/FormBody'
import FormFooter from '../../components/Form/FormFooter'
import FormInput from '../../components/Form/FormInput'

import ErrorToast from '../../components/Errors/ErrorToast'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('Passwords do not match.')

    const navigate = useNavigate()

    const registerHandler = async (e) => {
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
            return setError('Passwords do not match.')
        }

        try {
            const { data } = await axios.post(
                'http://localhost:5000/api/auth/register',
                {
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
        <>
            <Form submitHandler={registerHandler}>
                <FormHeader title='Register' />

                <FormBody>
                    <FormInput type='text' name='email' label='Email' changeHandler={(e) => setEmail(e.target.value)} value={email} />

                    <FormInput type='text' name='password' label='Password' changeHandler={(e) => setPassword(e.target.value)} value={password} />

                    <FormInput type='text' name='confirmPassword' label='Confirm Password' changeHandler={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                </FormBody>

                <FormFooter subtitle='Already have an account?' subtitlePath='/login' buttonPath='/' buttonText='Create' />
            </Form>
            {error && <ErrorToast message={error} />}
        </>
    )
}

export default Register
