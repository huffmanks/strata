import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useForgotPasswordMutation } from '../../features/auth/authApi'

import Form from '../../components/Form'
import FormHeader from '../../components/Form/FormHeader'
import FormBody from '../../components/Form/FormBody'
import FormFooter from '../../components/Form/FormFooter'
import FormInput from '../../components/Form/FormInput'

import ErrorToast from '../../components/Errors/ErrorToast'

const ForgotPassword = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [toast, setToast] = useState('')

    const [forgotPassword, { error }] = useForgotPasswordMutation()

    const forgotPasswordHandler = async (e) => {
        e.preventDefault()

        try {
            if (error) {
                setToast(error.data)
            }

            const res = await forgotPassword({ email }).unwrap()

            navigate(`/reset-password/${res.data}`)
        } catch (err) {
            setToast(err.data)
        }
    }

    return (
        <>
            <Form submitHandler={forgotPasswordHandler}>
                <FormHeader title='Forgot Password' />
                <p className='mb-8 text-center'>Please enter the email address you registered your account with.</p>
                <FormBody>
                    <FormInput type='email' name='email' label='Email' changeHandler={(e) => setEmail(e.target.value)} autoComplete='reset-email' />
                </FormBody>

                <FormFooter subtitle='Back to Login' subtitlePath='/login' buttonText='Confirm' />
                <div className='mt-6 text-center hover:text-primary-alt'>
                    <Link to='/register'>Don&rsquo;t have an account? Register</Link>
                </div>
            </Form>
            {toast && <ErrorToast message={toast} closeHandler={() => setToast('')} />}
        </>
    )
}

export default ForgotPassword
