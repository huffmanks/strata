import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import axios from '../../api/axios'

import Form from '../../components/Form'
import FormHeader from '../../components/Form/Container/FormHeader'
import FormBody from '../../components/Form/Container/FormBody'
import FormFooter from '../../components/Form/Container/FormFooter'
import FormInput from '../../components/Form/FormInput'

import ErrorToast from '../../components/Errors/ErrorToast'

const ForgotPassword = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [toast, setToast] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(
                'forgot-password',
                { email },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            )

            const resetPasswordToken = response.data.resetPasswordToken

            setEmail('')

            navigate(`/reset-password/${resetPasswordToken}`, { state: email })
        } catch (err) {
            setToast(err.response.data.message)
        }
    }

    return (
        <>
            <Form submitHandler={handleSubmit}>
                <FormHeader title='Forgot Password' />
                <p className='mb-8 text-center'>Please enter the email address you registered your account with.</p>
                <FormBody>
                    <FormInput type='email' name='email' label='Email' changeHandler={(e) => setEmail(e.target.value)} />
                </FormBody>

                <FormFooter subtitle='Back to Login' subtitlePath='/login' buttonText='Confirm' />
                <div className='hover:text-primary-alt mt-6 text-center'>
                    <Link to='/register'>Don&rsquo;t have an account? Register</Link>
                </div>
            </Form>
            {toast && <ErrorToast message={toast} closeHandler={() => setToast('')} />}
        </>
    )
}

export default ForgotPassword
