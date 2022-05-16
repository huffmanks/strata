import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useGetTeam } from '../../api/teams/useGetTeam'
import { useUpdateTeam } from '../../api/teams/useUpdateTeam'
import { useGetUsers } from '../../api/users/useGetUsers'
import { useGlobalState } from '../../hooks/useContext'

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

const UpdateTeam = () => {
    const { teamId } = useParams()
    const navigate = useNavigate()

    const updateTeam = useUpdateTeam(teamId)
    const { addToast, modal, addModal, removeModal } = useGlobalState()

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        teamImage: '',
        users: [],
        type: '',
    })

    const [previewImage, setPreviewImage] = useState('')

    const { data: team, isLoading: teamLoading, isError: isTeamError, error: teamError, isSuccess } = useGetTeam(teamId)
    const { data: users, isLoading: usersLoading, isError: isUsersError, error: usersError } = useGetUsers()

    useEffect(() => {
        if (isSuccess) {
            const teamUsers = !team?.users?.length > 0 ? [] : team.users.map((user) => user._id)
            setFormData({
                title: team.title,
                description: team?.description,
                teamImage: team?.teamImage,
                users: teamUsers,
                type: team.type,
            })

            setPreviewImage(team?.teamImage ? `${team.teamImage}?${team.updatedAt}` : undefined)
        }

        if (isTeamError) {
            addToast(teamError.message)
        }

        if (isUsersError) {
            addToast(usersError.message)
        }

        return () => {
            setFormData({
                title: '',
                description: '',
                teamImage: '',
                users: [],
                type: '',
            })
            setPreviewImage('')
            removeModal()
        }
    }, [isSuccess, isTeamError, isUsersError])

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target

        if (files) {
            setPreviewImage(`${URL.createObjectURL(e.target.files[0])}#?${Date.now()}`)
        }

        setFormData((prev) => {
            return {
                ...prev,
                [name]:
                    type === 'file'
                        ? e.target.files[0]
                        : type === 'checkbox' && checked
                        ? [value, ...prev.users]
                        : type === 'checkbox' && !checked
                        ? prev.users.filter((user) => user !== value)
                        : value,
            }
        })
    }

    const handleModal = () => {
        if (modal) {
            addModal({
                id: team._id,
                users,
            })
        }
    }

    const handleModalClose = () => {
        removeModal()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await updateTeam.mutateAsync(formData)

            navigate(`/teams/${teamId}`)
        } catch (error) {
            addToast(error.response.data.message)
        }
    }

    if (teamLoading || usersLoading) {
        return <LoadSpinner />
    }

    return (
        <>
            <Form isLarge='true' submitHandler={handleSubmit}>
                <FormHeader title='Update Team' />
                <FormBody>
                    <FormInput type='text' name='title' label='Title' changeHandler={handleChange} inputValue={formData.title} />

                    <FormInput type='text' name='description' label='Description' changeHandler={handleChange} inputValue={formData.description} />

                    <FormFile type='file' name='teamImage' label={previewImage ? 'Update Team Image' : 'Upload Team Image'} changeHandler={handleChange} previewImg={previewImage} />

                    <div className='mb-5 flex items-center gap-5'>
                        <Button buttonType='button' size='small' variant='primary' buttonText='Select users' clickHandler={handleModal} />
                        {users && users.filter((user) => formData.users.includes(user._id)).map((user) => <div key={user._id}>{user.email}</div>)}
                    </div>

                    {modal.id && (
                        <Modal>
                            <ModalSelectUsers data={formData.users} changeHandler={handleChange} confirmHandler={handleModalClose} />
                        </Modal>
                    )}

                    <FormRadioGroup label='Type' changeHandler={handleChange}>
                        <FormRadio id='marketing' name='type' label='Marketing' radioValue='marketing' isChecked={team?.type === 'marketing'} />
                        <FormRadio id='design' name='type' label='Design' radioValue='design' isChecked={team?.type === 'design'} />
                        <FormRadio id='photo' name='type' label='Photo' radioValue='photo' isChecked={team?.type === 'photo'} />
                        <FormRadio id='social' name='type' label='Social' radioValue='social' isChecked={team?.type === 'social'} />
                        <FormRadio id='video' name='type' label='Video' radioValue='video' isChecked={team?.type === 'video'} />
                        <FormRadio id='web' name='type' label='Web' radioValue='web' isChecked={team?.type === 'web'} />
                    </FormRadioGroup>
                </FormBody>

                <FormFooter buttonText='Update' />
            </Form>
        </>
    )
}

export default UpdateTeam
