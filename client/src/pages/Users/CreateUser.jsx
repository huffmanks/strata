import { useState } from 'react'

import Form from '../../components/Form'
import FormHeader from '../../components/Form/Layout/FormHeader'
import FormBody from '../../components/Form/Layout/FormBody'
import FormFooter from '../../components/Form/Layout/FormFooter'
import FormInput from '../../components/Form/FormInput'
import FormFile from '../../components/Form/FormFile'
import FormRadioGroup from '../../components/Form/FormRadioGroup'
import FormRadio from '../../components/Form/FormRadio'
import Select from '../../components/Form/Select'
import FormSelectBox from '../../components/Form/Select/FormSelectBox'
import FormSelectValue from '../../components/Form/Select/FormSelectValue'
import FormOptionList from '../../components/Form/Select/FormOptionList'
import FormOptionItem from '../../components/Form/Select/FormOptionItem'

import ErrorToast from '../../components/Errors/ErrorToast'

const CreateUser = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [profileImage, setProfileImage] = useState('')
    const [role, setRole] = useState('user')
    const [team, setTeam] = useState('')
    const [error, setError] = useState('')

    const teams = [
        {
            _id: 1,
            title: 'My Team 1',
        },
        {
            _id: 2,
            title: 'My Team 2',
        },
        {
            _id: 3,
            title: 'My Team 3',
        },
        {
            _id: 4,
            title: 'My Team 4',
        },
        {
            _id: 5,
            title: 'My Team 5',
        },
        {
            _id: 6,
            title: 'My Team 6',
        },
        {
            _id: 7,
            title: 'My Team 7',
        },
        {
            _id: 8,
            title: 'My Team 8',
        },
        {
            _id: 9,
            title: 'My Team 9',
        },
    ]

    const handleImage = (e) => {
        setProfileImage(URL.createObjectURL(e.target.files[0]))
    }

    const createUserHandler = (e) => {
        e.preventDefault()
        console.log(team)

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
                    <FormInput type='text' name='firstName' label='First Name' changeHandler={(e) => setFirstName(e.target.value)} inputValue={firstName} />

                    <FormInput type='text' name='lastName' label='Last Name' changeHandler={(e) => setLastName(e.target.value)} inputValue={lastName} />

                    <FormInput type='email' name='email' label='Email' changeHandler={(e) => setEmail(e.target.value)} inputValue={email} />

                    <FormInput type='password' name='password' label='Password' changeHandler={(e) => setPassword(e.target.value)} inputValue={password} />

                    <FormInput type='password' name='confirmPassword' label='Confirm Password' changeHandler={(e) => setConfirmPassword(e.target.value)} inputValue={confirmPassword} />

                    <FormFile type='file' name='profileImage' label='Upload Profile Image' changeHandler={handleImage} previewImg={profileImage} />

                    <Select title='Team'>
                        <FormSelectBox defaultName='team' defaultValue='Choose a team:'>
                            {teams.map((team) => (
                                <FormSelectValue key={team.title} valueId={team._id} groupName='team' selectValue={team.title} changeHandler={(e) => setTeam(e.target.value)} />
                            ))}
                        </FormSelectBox>

                        <FormOptionList>
                            {teams.map((team) => (
                                <FormOptionItem key={team._id} labelFor={team._id} label={team.title} />
                            ))}
                        </FormOptionList>
                    </Select>
                    <FormRadioGroup label='Role' value={role} changeHandler={(e) => setRole(e.target.value)}>
                        <FormRadio id='user' name='role' label='User' radioValue='user' isDefault={true} />
                        <FormRadio id='admin' name='role' label='Admin' radioValue='admin' />
                    </FormRadioGroup>
                </FormBody>

                <FormFooter buttonText='Create' />
            </Form>
            {error && <ErrorToast message={error} closeHandler={() => setError('')} />}
        </>
    )
}

export default CreateUser
