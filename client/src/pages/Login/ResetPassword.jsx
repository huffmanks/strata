import { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import { useAuth } from '../../hooks/useContext'
import axios from '../../api/axios'

import Form from '../../components/Form'
import FormHeader from '../../components/Form/Container/FormHeader'
import FormBody from '../../components/Form/Container/FormBody'
import FormFooter from '../../components/Form/Container/FormFooter'
import FormUncontrolledInput from '../../components/Form/Inputs/FormUncontrolledInput'
import FormInput from '../../components/Form/Inputs/FormInput'

import ErrorToast from '../../components/Errors/ErrorToast'

const ResetPassword = () => {
    const { setAuth } = useAuth()

    const location = useLocation()
    const navigate = useNavigate()
    const params = useParams()

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
            const resetPasswordToken = params.resetPasswordToken

            const response = await axios.post(
                `reset-password/${resetPasswordToken}`,
                { password },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            )

            const user = response?.data?.user
            const accessToken = response?.data?.accessToken

            setAuth({ user, accessToken })

            setPassword('')
            setConfirmPassword('')

            navigate('/')
        } catch (err) {
            setToast(err.response.data.message)
        }
    }

    return (
        <>
            <Form submitHandler={handleSubmit}>
                <FormHeader title='Reset Password' />

                <FormBody>
                    <FormUncontrolledInput isVisible='false' type='text' name='username' label='Username' defaultValue={location.state} />

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
