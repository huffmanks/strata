import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import Form from '../../components/Form'
import FormHeader from '../../components/Form/FormHeader'
import FormBody from '../../components/Form/FormBody'
import FormFooter from '../../components/Form/FormFooter'
import FormInput from '../../components/Form/FormInput'

import ErrorToast from '../../components/Errors/ErrorToast'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('This email is not registered.')
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
        <>
            <Form submitHandler={forgotPasswordHandler}>
                <FormHeader title='Forgot Password' />
                <p className='mb-8 text-center'>Please enter the email address you registered your account with.</p>
                <FormBody>
                    <FormInput type='text' name='email' label='Email' changeHandler={(e) => setEmail(e.target.value)} value={email} />
                </FormBody>

                <FormFooter subtitle='Back to Login' subtitlePath='/login' buttonPath='/' buttonText='Confirm' />
                <div className='mt-6 text-center hover:text-primary-alt'>
                    <Link to='/register'>Don&rsquo;t have an account? Register</Link>
                </div>
            </Form>
            {error && <ErrorToast message={error} />}
        </>
    )
}

export default ForgotPassword
