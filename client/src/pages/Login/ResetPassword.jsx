import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Form from '../../components/Form'
import FormHeader from '../../components/Form/FormHeader'
import FormBody from '../../components/Form/FormBody'
import FormFooter from '../../components/Form/FormFooter'
import FormInput from '../../components/Form/FormInput'

import ErrorToast from '../../components/Errors/ErrorToast'

const ResetPassword = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState("Passwords don't match.")

    const params = useParams()

    const resetPasswordHandler = async (e) => {
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
            return setError("Passwords don't match.")
        }

        try {
            const { data } = await axios.put(
                `http://localhost:5000/api/auth/resetpassword/${params.resetToken}`,
                {
                    password,
                },
                config
            )

            console.log(data)
        } catch (error) {
            setError(error.response.data.error)
            setTimeout(() => {
                setError('')
            }, 5000)
        }
    }

    return (
        <>
            <Form submitHandler={resetPasswordHandler}>
                <FormHeader title='Reset Password' />

                <FormBody>
                    <FormInput type='text' name='password' label='Password' changeHandler={(e) => setPassword(e.target.value)} value={password} />

                    <FormInput type='text' name='confirmPassword' label='Confirm Password' changeHandler={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                </FormBody>

                <FormFooter subtitle='Back to Login' subtitlePath='/login' buttonPath='/' buttonText='Reset' />
            </Form>
            {error && <ErrorToast message={error} closeHandler={() => setError('')} />}
        </>
    )
}

export default ResetPassword
