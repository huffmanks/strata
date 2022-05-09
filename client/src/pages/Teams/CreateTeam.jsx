import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCreateTeam } from '../../api/teams/useCreateTeam'
// import { useGetUsers } from '../../api/users/useGetUsers'
import { useGlobalState } from '../../hooks/useContext'

import Form from '../../components/Form'
import FormHeader from '../../components/Form/Container/FormHeader'
import FormBody from '../../components/Form/Container/FormBody'
import FormFooter from '../../components/Form/Container/FormFooter'

import FormInput from '../../components/Form/Inputs/FormInput'
import FormFile from '../../components/Form/Inputs/FormFile'

import FormRadioGroup from '../../components/Form/Radio/FormRadioGroup'
import FormRadio from '../../components/Form/Radio/FormRadio'

// import Select from '../../components/Form/Select'
// import FormSelectBox from '../../components/Form/Select/FormSelectBox'
// import FormSelectValue from '../../components/Form/Select/FormSelectValue'
// import FormOptionList from '../../components/Form/Select/FormOptionList'
// import FormOptionItem from '../../components/Form/Select/FormOptionItem'

// import LoadSpinner from '../../components/LoadSpinner'

const CreateTeam = () => {
    const navigate = useNavigate()
    const createTeam = useCreateTeam()
    const { addToast } = useGlobalState()

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        teamImage: '',
        // users: [],
        type: '',
    })

    const [previewImage, setPreviewImage] = useState('')

    // const { data: users, isLoading, isError, error } = useGetUsers()

    useEffect(() => {
        // if (isError) {
        //     addToast(error.message)
        // }

        return () => {
            setFormData({
                title: '',
                description: '',
                teamImage: '',
                // users: [],
                type: '',
            })
            setPreviewImage('')
        }
    }, [])
    // }, [isError])

    const handleChange = (e) => {
        const { name, value, type, files } = e.target

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

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const team = await createTeam.mutateAsync(formData)

            navigate(`/teams/${team._id}`)
        } catch (error) {
            addToast(error.response.data.message)
        }
    }

    // if (isLoading) {
    //     return <LoadSpinner />
    // }

    return (
        <>
            <Form isLarge='true' submitHandler={handleSubmit}>
                <FormHeader title='Create Team' />
                <FormBody>
                    <FormInput type='text' name='title' label='Title' changeHandler={handleChange} inputValue={formData.title} />

                    <FormInput type='text' name='description' label='Description' changeHandler={handleChange} inputValue={formData.description} />

                    <FormFile type='file' name='profileImage' label={previewImage ? 'Update Team Image' : 'Upload Team Image'} changeHandler={handleChange} previewImg={previewImage} />

                    {/* {users && (
                        <Select title='Users'>
                            <FormSelectBox defaultName='users' isDefault={!formData.users} isDisabled={!formData.users} changeHandler={handleChange}>
                                {users.map((user) => (
                                    <FormSelectValue
                                        key={user._id}
                                        valueId={user._id}
                                        groupName='users'
                                        selectLabel={user.email}
                                        selectValue={user._id}
                                        isChecked={formData.users === user._id}
                                        changeHandler={handleChange}
                                    />
                                ))}
                            </FormSelectBox>

                            <FormOptionList groupName='users' isHidden={!formData.users}>
                                {users.map((user) => (
                                    <FormOptionItem key={user._id} labelFor={user._id} label={user.email} />
                                ))}
                            </FormOptionList>
                        </Select>
                    )} */}

                    <FormRadioGroup label='Type' changeHandler={handleChange}>
                        <FormRadio id='marketing' name='type' label='Marketing' radioValue='marketing' isChecked={true} />
                        <FormRadio id='design' name='type' label='Design' radioValue='design' />
                        <FormRadio id='photo' name='type' label='Photo' radioValue='photo' />
                        <FormRadio id='social' name='type' label='Social' radioValue='social' />
                        <FormRadio id='video' name='type' label='Video' radioValue='video' />
                        <FormRadio id='web' name='type' label='Web' radioValue='web' />
                    </FormRadioGroup>
                </FormBody>

                <FormFooter buttonText='Create' />
            </Form>
        </>
    )
}

export default CreateTeam
