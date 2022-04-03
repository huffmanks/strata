import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Form from '../../components/Form'
import FormHeader from '../../components/Form/Layout/FormHeader'
import FormBody from '../../components/Form/Layout/FormBody'
import FormFooter from '../../components/Form/Layout/FormFooter'
import FormInput from '../../components/Form/FormInput'

import ErrorToast from '../../components/Errors/ErrorToast'

const ResetPassword = () => {
    // const params = useParams()
    const navigate = useNavigate()
    // const dispatch = useDispatch()

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [toast, setToast] = useState('')

    const resetPasswordHandler = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setPassword('')
            setConfirmPassword('')

            return setToast(`Passwords don't match.`)
        }

        try {
            // const resetPasswordToken = params.resetPasswordToken

            // console.log(res)
            // const cred = {
            //     user: res.user,
            //     accessToken: res.accessToken,
            // }

            // dispatch(setCredentials(cred))

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
