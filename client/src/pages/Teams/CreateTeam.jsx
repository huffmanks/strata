import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCreateTeam } from '../../api/teams/useCreateTeam'
import { useGetUsers } from '../../api/users/useGetUsers'
import { useGlobalState } from '../../hooks/useContext'
import { useFormData } from '../../hooks/useFormData'
import { initialTeamData } from '../../constants/initialData'

import Form from '../../components/Form'
import FormHeader from '../../components/Form/Container/FormHeader'
import FormBody from '../../components/Form/Container/FormBody'
import FormFooter from '../../components/Form/Container/FormFooter'

import FormInput from '../../components/Form/Inputs/FormInput'
import FormFile from '../../components/Form/Inputs/FormFile'

import FormRadioGroup from '../../components/Form/Radio/FormRadioGroup'
import FormRadio from '../../components/Form/Radio/FormRadio'

import Modal from '../../components/Modal'
import ModalSelectUsers from '../../components/Modal/ModalSelectUsers'
import Button from '../../components/Button'
import LoadSpinner from '../../components/LoadSpinner'

const CreateTeam = () => {
    const navigate = useNavigate()

    const { addToast, modal, addModal, removeModal } = useGlobalState()
    const createTeam = useCreateTeam()

    const { data, isLoading, isError, error } = useGetUsers()

    const [formData, setFormData, previewImage, setPreviewImage, handleChange] = useFormData(initialTeamData)

    useEffect(() => {
        if (isError) {
            addToast(error.message)
        }

        return () => {
            setFormData(initialTeamData)
            setPreviewImage('')
            removeModal()
        }
    }, [isError])

    const handleModal = () => {
        if (modal) {
            addModal({
                id: Math.round(new Date().getTime() / 1000),
                users: data.users,
            })
        }
    }

    const handleModalClose = () => {
        removeModal()
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

    if (isLoading) {
        return <LoadSpinner />
    }

    return (
        <>
            <Form isLarge='true' submitHandler={handleSubmit}>
                <FormHeader title='Create Team' />
                <FormBody>
                    <FormInput type='text' name='title' label='Title' changeHandler={handleChange} inputValue={formData.title} />

                    <FormInput type='text' name='description' label='Description' changeHandler={handleChange} inputValue={formData.description} />

                    <FormFile type='file' name='teamImage' label={previewImage ? 'Update Team Image' : 'Upload Team Image'} changeHandler={handleChange} previewImg={previewImage} />

                    <div className='mb-5 flex items-center gap-5'>
                        <Button buttonType='button' size='small' variant='primary' buttonText='Select users' clickHandler={handleModal} />
                        {data && data.users.filter((user) => formData.users.includes(user._id)).map((user) => <div key={user._id}>{user.email}</div>)}
                    </div>

                    {modal.id && (
                        <Modal>
                            <ModalSelectUsers data={formData.users} changeHandler={handleChange} confirmHandler={handleModalClose} />
                        </Modal>
                    )}

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
