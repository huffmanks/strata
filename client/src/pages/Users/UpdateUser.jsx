import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useGetUser } from '../../api/users/useGetUser'
import { useUpdateUser } from '../../api/users/useUpdateUser'
import { useGetTeams } from '../../api/teams/useGetTeams'
import { useGlobalState } from '../../hooks/useContext'
import { useFormData } from '../../hooks/useFormData'
import { initialUserData } from '../../constants/initialData'

import Form from '../../components/Form'
import FormHeader from '../../components/Form/Container/FormHeader'
import FormBody from '../../components/Form/Container/FormBody'
import FormFooter from '../../components/Form/Container/FormFooter'

import FormInput from '../../components/Form/Inputs/FormInput'
import FormFile from '../../components/Form/Inputs/FormFile'

import FormRadioGroup from '../../components/Form/Radio/FormRadioGroup'
import FormRadio from '../../components/Form/Radio/FormRadio'

import Select from '../../components/Form/Select'
import FormSelectBox from '../../components/Form/Select/FormSelectBox'
import FormSelectValue from '../../components/Form/Select/FormSelectValue'
import FormOptionList from '../../components/Form/Select/FormOptionList'
import FormOptionItem from '../../components/Form/Select/FormOptionItem'

import LoadSpinner from '../../components/LoadSpinner'

const UpdateUser = () => {
    const { userId } = useParams()
    const navigate = useNavigate()

    const updateUser = useUpdateUser(userId)
    const { addToast } = useGlobalState()

    const { data: user, isLoading: userLoading, isError: isUserError, error: userError, isSuccess } = useGetUser(userId)
    const { data: teams, isLoading: teamsLoading, isError: isTeamsError, error: teamsError } = useGetTeams()

    const [formData, setFormData, previewImage, setPreviewImage, handleChange] = useFormData(initialUserData)

    useEffect(() => {
        if (isSuccess) {
            setFormData({
                firstName: user?.firstName || '',
                lastName: user?.lastName || '',
                email: user.email,
                profileImage: user?.profileImage,
                role: user.role,
                team: user?.team?._id,
            })

            setPreviewImage(user?.profileImage ? `${user.profileImage}?${user.updatedAt}` : undefined)
        }

        if (isUserError) {
            addToast(userError.message)
        }

        if (isTeamsError) {
            addToast(teamsError.message)
        }

        return () => {
            setFormData(initialUserData)
            setPreviewImage('')
        }
    }, [isSuccess, isUserError, isTeamsError])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await updateUser.mutateAsync(formData)

            navigate(`/users/${userId}`)
        } catch (error) {
            addToast(error.response.data.message)
        }
    }

    if (userLoading || teamsLoading) {
        return <LoadSpinner />
    }

    return (
        <>
            <Form isLarge='true' submitHandler={handleSubmit}>
                <FormHeader title='Update' />
                <FormBody>
                    <FormInput type='text' name='firstName' label='First Name' changeHandler={handleChange} inputValue={formData.firstName} />

                    <FormInput type='text' name='lastName' label='Last Name' changeHandler={handleChange} inputValue={formData.lastName} />

                    <FormInput type='email' name='email' label='Email' changeHandler={handleChange} inputValue={formData.email} />

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
                        <FormRadio id='tiger' name='role' label='Tiger' radioValue='tiger' isChecked={user?.role === 'tiger'} />
                        <FormRadio id='mako' name='role' label='Mako' radioValue='mako' isChecked={user?.role === 'mako'} />
                        <FormRadio id='bull' name='role' label='Bull' radioValue='bull' isChecked={user?.role === 'bull'} />
                    </FormRadioGroup>
                </FormBody>

                <FormFooter buttonText='Update' />
            </Form>
        </>
    )
}

export default UpdateUser
