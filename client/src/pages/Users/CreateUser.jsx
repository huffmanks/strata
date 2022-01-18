import { useState } from 'react'

import Form from '../../components/Form'
import FormHeader from '../../components/Form/FormHeader'
import FormBody from '../../components/Form/FormBody'
import FormFooter from '../../components/Form/FormFooter'
import FormInput from '../../components/Form/FormInput'
import FormFile from '../../components/Form/FormFile'
import FormRadioGroup from '../../components/Form/FormRadioGroup'
import FormRadio from '../../components/Form/FormRadio'
import FormSelect from '../../components/Form/FormSelect'
import FormOption from '../../components/Form/FormOption'

import ErrorToast from '../../components/Errors/ErrorToast'

const CreateUser = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [profileImage, setProfileImage] = useState('')
    const [role, setRole] = useState('')
    const [team, setTeam] = useState('')
    const [error, setError] = useState('Invalid credentials. Try again.')

    const teams = [
        {
            _id: 1,
            title: 'My Team',
        },
        {
            _id: 2,
            title: 'My Team 2',
        },
    ]

    const createUserHandler = (e) => {
        e.preventDefault()

        if (!email || !password || !confirmPassword) {
            setError('You must enter an email and a password')
        }
        if (password !== !confirmPassword) {
            setError('Passwords do not match.')
        }
    }

    return (
        <>
            <Form isLarge='true' submitHandler={createUserHandler}>
                <FormHeader title='Create User' />

                <FormBody>
                    <FormInput type='text' name='firstName' label='First Name' changeHandler={(e) => setFirstName(e.target.value)} value={firstName} />

                    <FormInput type='text' name='lastName' label='Last Name' changeHandler={(e) => setLastName(e.target.value)} value={lastName} />

                    <FormInput type='email' name='email' label='Email' changeHandler={(e) => setEmail(e.target.value)} value={email} />

                    <FormInput type='password' name='password' label='Password' changeHandler={(e) => setPassword(e.target.value)} value={password} />

                    <FormInput type='password' name='confirmPassword' label='Confirm Password' changeHandler={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />

                    <FormFile type='file' name='profileImage' label='Profile Image' changeHandler={(e) => setProfileImage(e.target.value)} value={profileImage} />

                    <FormRadioGroup label='Role' changeHandler={(e) => setRole(e.target.value)} value={role}>
                        <FormRadio id='user' name='role' label='User' value='User' />
                        <FormRadio id='admin' name='role' label='Admin' value='Admin' />
                    </FormRadioGroup>

                    <FormSelect id='team' label='Choose a team:' changeHandler={(e) => setTeam(e.target.value)} value={team}>
                        {teams.map((team) => (
                            <FormOption key={team._id} value={team._id} label={team.title} />
                        ))}
                    </FormSelect>
                </FormBody>

                <FormFooter buttonPath='/users' buttonText='Create' />
            </Form>
            {error && <ErrorToast message={error} />}
        </>
    )
}

export default CreateUser
