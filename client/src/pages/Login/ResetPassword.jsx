import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setCredentials } from '../../features/auth/authSlice'
import { useResetPasswordMutation } from '../../features/auth/authApi'

import Form from '../../components/Form'
import FormHeader from '../../components/Form/Layout/FormHeader'
import FormBody from '../../components/Form/Layout/FormBody'
import FormFooter from '../../components/Form/Layout/FormFooter'
import FormInput from '../../components/Form/FormInput'

import ErrorToast from '../../components/Errors/ErrorToast'

const ResetPassword = () => {
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [toast, setToast] = useState('')

    const [resetPassword, { error }] = useResetPasswordMutation()

    const resetPasswordHandler = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setPassword('')
            setConfirmPassword('')

            return setToast(`Passwords don't match.`)
        }

        try {
            if (error) {
                setToast(error.data)
            }

            const resetToken = params.resetToken

            const res = await resetPassword({ resetToken, password }).unwrap()

            localStorage.setItem('auth-token', res.token)

            const cred = {
                user: {
                    email: res.user.email,
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
            <Form submitHandler={resetPasswordHandler}>
                <FormHeader title='Reset Password' />

                <FormBody>
                    <FormInput isVisible='false' type='hidden' name='username' label='Username' />

                    <FormInput type='password' name='password' label='Password' changeHandler={(e) => setPassword(e.target.value)} inputValue={password} />

                    <FormInput type='password' name='confirmPassword' label='Confirm Password' changeHandler={(e) => setConfirmPassword(e.target.value)} inputValue={confirmPassword} />
                </FormBody>

                <FormFooter subtitle='Back to Login' subtitlePath='/login' buttonText='Reset' />
            </Form>
            {toast && <ErrorToast message={toast} closeHandler={() => setToast('')} />}
        </>
    )
}

export default ResetPassword
