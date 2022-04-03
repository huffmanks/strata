import { useState } from 'react'
import { Link } from 'react-router-dom'

import Form from '../../components/Form'
import FormHeader from '../../components/Form/Layout/FormHeader'
// import FormBody from '../../components/Form/Layout/FormBody'
import FormFooter from '../../components/Form/Layout/FormFooter'
// import FormInput from '../../components/Form/FormInput'

import ErrorToast from '../../components/Errors/ErrorToast'

const ForgotPassword = () => {
    // const navigate = useNavigate()

    // const [email, setEmail] = useState('')
    const [toast, setToast] = useState('')

    const forgotPasswordHandler = async (e) => {
        e.preventDefault()

        try {
            // const res = await forgotPassword({ email }).unwrap()
            // navigate(`/reset-password/${res.data}`)
        } catch (err) {
            setToast(err.data)
        }
    }

    return (
        <>
            <Form submitHandler={forgotPasswordHandler}>
                <FormHeader title='Forgot Password' />
                <p className='mb-8 text-center'>Please enter the email address you registered your account with.</p>
                {/* <FormBody>
                    <FormInput type='email' name='email' label='Email' changeHandler={(e) => setEmail(e.target.value)} />
                </FormBody> */}

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
