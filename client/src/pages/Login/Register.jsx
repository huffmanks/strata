import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setCredentials } from '../../features/auth/authSlice'
import { useRegisterMutation } from '../../features/auth/authApi'

import Form from '../../components/Form'
import FormHeader from '../../components/Form/FormHeader'
import FormBody from '../../components/Form/FormBody'
import FormFooter from '../../components/Form/FormFooter'
import FormInput from '../../components/Form/FormInput'

import ErrorToast from '../../components/Errors/ErrorToast'

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [toast, setToast] = useState('')

    const [register, { error }] = useRegisterMutation()

    const registerHandler = async (e) => {
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

            const res = await register({ email, password }).unwrap()

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
            <Form submitHandler={registerHandler}>
                <FormHeader title='Register' />

                <FormBody>
                    <FormInput type='email' name='email' label='Email' changeHandler={(e) => setEmail(e.target.value)} autoComplete='register-email' inputValue={email} />

                    <FormInput type='password' name='password' label='Password' changeHandler={(e) => setPassword(e.target.value)} autoComplete='register-password' inputValue={password} />

                    <FormInput type='password' name='confirmPassword' label='Confirm Password' changeHandler={(e) => setConfirmPassword(e.target.value)} autoComplete='register-confirm-password' inputValue={confirmPassword} />
                </FormBody>

                <FormFooter subtitle='Already have an account?' subtitlePath='/login' buttonText='Create' />
            </Form>
            {toast && <ErrorToast message={toast} closeHandler={() => setToast('')} />}
        </>
    )
}

export default Register
