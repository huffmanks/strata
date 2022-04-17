import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useGetUser } from '../../api/users/useGetUser'

import Form from '../../components/Form'
import FormHeader from '../../components/Form/Container/FormHeader'
import FormBody from '../../components/Form/Container/FormBody'
import FormFooter from '../../components/Form/Container/FormFooter'
import FormInput from '../../components/Form/FormInput'
import FormFile from '../../components/Form/FormFile'
import FormRadioGroup from '../../components/Form/FormRadioGroup'
import FormRadio from '../../components/Form/FormRadio'
// import Select from '../../components/Form/Select'
// import FormSelectBox from '../../components/Form/Select/FormSelectBox'
// import FormSelectValue from '../../components/Form/Select/FormSelectValue'
// import FormOptionList from '../../components/Form/Select/FormOptionList'
// import FormOptionItem from '../../components/Form/Select/FormOptionItem'

import LoadSpinner from '../../components/LoadSpinner'
import ErrorToast from '../../components/Errors/ErrorToast'

const SingleUser = () => {
    const { userId } = useParams()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [profileImage, setProfileImage] = useState('')
    const [previewImage, setPreviewImage] = useState('')
    const [role, setRole] = useState('')
    // const [team, setTeam] = useState('')

    const [toast, setToast] = useState('')

    const { data, isLoading, isError, error, isSuccess } = useGetUser(userId)

    useEffect(() => {
        if (isSuccess) {
            setFirstName(data?.firstName)
            setLastName(data?.lastName)
            setEmail(data?.email)
            setProfileImage(data?.profileImage)
            setPreviewImage(data?.profileImage)
            setRole(data?.role)
            // setTeam(data?.team?.title)
        }
    }, [isSuccess])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const update = new FormData()

            update.append('firstName', firstName)
            update.append('lastName', lastName)
            update.append('email', email)
            update.append('profileImage', profileImage)
            update.append('role', role)
            // update.append('team', team)

            console.log(update.profileImage)
        } catch (err) {
            console.log(err)
        }
    }

    if (isLoading) {
        return <LoadSpinner />
    }

    if (isError) {
        setToast(error.message)
    }

    return (
        <>
            <Form isLarge='true' submitHandler={handleSubmit}>
                <FormHeader title={`Update ${firstName}`} />
                <FormBody>
                    <FormInput type='text' name='firstName' label='First Name' changeHandler={(e) => setFirstName(e.target.value)} inputValue={firstName} />

                    <FormInput type='text' name='lastName' label='Last Name' changeHandler={(e) => setLastName(e.target.value)} inputValue={lastName} />

                    <FormInput type='email' name='email' label='Email' changeHandler={(e) => setEmail(e.target.value)} inputValue={email} />

                    <FormFile
                        type='file'
                        name='profileImage'
                        label={previewImage ? 'Update Profile Image' : 'Upload Profile Image'}
                        changeHandler={(e) => {
                            setProfileImage(e.target.files[0])
                            setPreviewImage(URL.createObjectURL(e.target.files[0]))
                        }}
                        previewImg={previewImage}
                    />

                    {/* <div className='mb-5'>
                        <div className='mb-1 text-base'>Team</div>
                        <div className='text-sm'>{team ? team : 'Currently not on a team.'}</div>
                    </div> */}

                    {/* <Select title='Team'>
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
                            </Select> */}

                    <FormRadioGroup label='Role' changeHandler={(e) => setRole(e.target.value)}>
                        <FormRadio id='tiger' name='role' label='Tiger' radioValue='tiger' isChecked={data?.role === 'tiger'} />
                        <FormRadio id='mako' name='role' label='Mako' radioValue='mako' isChecked={data?.role === 'mako'} />
                        <FormRadio id='bull' name='role' label='Bull' radioValue='bull' isChecked={data?.role === 'bull'} />
                    </FormRadioGroup>
                </FormBody>

                <FormFooter buttonText='Update' />
            </Form>

            {toast && <ErrorToast message={toast} closeHandler={() => setToast('')} />}
        </>
    )
}

export default SingleUser
