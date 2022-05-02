import { useEffect, useState } from 'react'

import { useCreateUser } from '../../api/users/useCreateUser'
import { useGetTeams } from '../../api/teams/useGetTeams'

import Form from '../../components/Form'
import FormHeader from '../../components/Form/Container/FormHeader'
import FormBody from '../../components/Form/Container/FormBody'
import FormFooter from '../../components/Form/Container/FormFooter'

import FormInput from '../../components/Form/Inputs/FormInput'
import FormFile from '../../components/Form/Inputs/FormFile'
import FormUncontrolledInput from '../../components/Form/Inputs/FormUncontrolledInput'

import FormRadioGroup from '../../components/Form/Radio/FormRadioGroup'
import FormRadio from '../../components/Form/Radio/FormRadio'

import Select from '../../components/Form/Select'
import FormSelectBox from '../../components/Form/Select/FormSelectBox'
import FormSelectValue from '../../components/Form/Select/FormSelectValue'
import FormOptionList from '../../components/Form/Select/FormOptionList'
import FormOptionItem from '../../components/Form/Select/FormOptionItem'

import LoadSpinner from '../../components/LoadSpinner'
import ErrorToast from '../../components/Errors/ErrorToast'

const SingleUser = () => {
    const createUser = useCreateUser()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        profileImage: '',
        role: '',
        team: '',
    })

    const [previewImage, setPreviewImage] = useState('')
    const [toast, setToast] = useState(false)

    const { data: teams, isLoading: teamsLoading, isError: teamsError, error: teamsErrorMessage } = useGetTeams()

    useEffect(() => {
        if (teamsError) {
            setToast(true)
        }

        return () => {
            setToast(false)
        }
    }, [teamsError])

    const handleChange = (e) => {
        const { name, value, type, files } = e.target

        console.log(formData.password)

        if (files) {
            setPreviewImage(`${URL.createObjectURL(e.target.files[0])}#?${Date.now()}`)
        }

        setFormData((prev) => {
            return {
                ...prev,
                [name]: type === 'file' ? e.target.files[0] : value,
            }
        })
    }

    const handleClose = () => {
        setToast(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { team, ...newFormData } = formData
        const userInfo = !formData.team ? newFormData : formData

        createUser.mutate(userInfo)
    }

    if (teamsLoading) {
        return <LoadSpinner />
    }

    return (
        <>
            <Form isLarge='true' submitHandler={handleSubmit}>
                <FormHeader title='Create User' />
                <FormBody>
                    <FormInput type='text' name='firstName' label='First Name' changeHandler={handleChange} inputValue={formData.firstName} />

                    <FormInput type='text' name='lastName' label='Last Name' changeHandler={handleChange} inputValue={formData.lastName} />

                    <FormUncontrolledInput isVisible='false' type='email' name='newEmail' label='Email' defaultValue='' />

                    <FormUncontrolledInput isVisible='false' type='password' name='newPassword' label='Password' defaultValue='' />

                    <FormInput type='email' name='email' label='Email' changeHandler={handleChange} inputValue={formData.email} />

                    <FormInput type='password' name='password' label='Password' changeHandler={handleChange} inputValue={formData.password} />

                    <FormFile type='file' name='profileImage' label={previewImage ? 'Update Profile Image' : 'Upload Profile Image'} changeHandler={handleChange} previewImg={previewImage} />

                    {teams && (
                        <Select title='Team'>
                            <FormSelectBox defaultName='team' isDefault={!formData.team} isDisabled={!formData.team} changeHandler={handleChange}>
                                {teams.map((team) => (
                                    <FormSelectValue
                                        key={team._id}
                                        valueId={team._id}
                                        groupName='team'
                                        selectLabel={team.title}
                                        selectValue={team._id}
                                        isChecked={formData.team === team._id}
                                        changeHandler={handleChange}
                                    />
                                ))}
                            </FormSelectBox>

                            <FormOptionList groupName='team' isHidden={!formData.team}>
                                {teams.map((team) => (
                                    <FormOptionItem key={team._id} labelFor={team._id} label={team.title} />
                                ))}
                            </FormOptionList>
                        </Select>
                    )}

                    <FormRadioGroup label='Role' changeHandler={handleChange}>
                        <FormRadio id='tiger' name='role' label='Tiger' radioValue='tiger' isChecked={true} />
                        <FormRadio id='mako' name='role' label='Mako' radioValue='mako' />
                        <FormRadio id='bull' name='role' label='Bull' radioValue='bull' />
                    </FormRadioGroup>
                </FormBody>

                <FormFooter buttonText='Create' />
            </Form>

            {toast && <ErrorToast message={teamsErrorMessage.message} closeHandler={handleClose} />}
        </>
    )
}

export default SingleUser
